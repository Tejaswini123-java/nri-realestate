import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Lead from '@/models/Lead'
import { sendLeadEmail, sendLeadToCRM } from '@/lib/sendLead'

const BUILDER_NAME = process.env.BUILDER_NAME || 'NM NRI Homes'

// POST /api/leads  -> called by PopupForm.js and ContactForm.js
export async function POST(request) {
  try {
    const body = await request.json()
    const {
      name,
      email,
      phone,        // full phone including country dial code, e.g. +919876543210
      countryCode,  // dial code only, e.g. "91"
      country,      // country name, e.g. "India"
      message,
      source,       // 'popup' | 'contact'
      project,      // optional: which project this enquiry is about
      enquiredFor,  // optional: label for what was clicked, e.g. "Get Instant Call Back"
    } = body

    if (!name || !phone || !source) {
      return NextResponse.json(
        { success: false, error: 'name, phone and source are required.' },
        { status: 400 }
      )
    }

    const page = request.headers.get('referer') || ''
    const userAgent = request.headers.get('user-agent') || ''
    const visitorIp =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      ''

    const leadData = {
      name,
      email: email || '',
      phone,
      countryCode: countryCode || '',
      country: country || '',
      message: message || '',
      source,
      project: project || '',
      enquiredFor: enquiredFor || (source === 'popup' ? 'Exclusive NRI Price List Popup' : 'Contact Page Enquiry'),
      page,
      userAgent,
    }

    // 1) Save to MongoDB — best effort. A DB hiccup should never block a lead
    //    from reaching the CRM/email, so this is wrapped separately.
    let savedLead = null
    try {
      await dbConnect()
      savedLead = await Lead.create(leadData)
    } catch (dbErr) {
      console.error('Lead DB save failed (continuing to CRM/email):', dbErr?.message || dbErr)
    }

    // 2) Push to CRM + 3) Email the lead (in the styled table/image format)
    //    Run in parallel; neither blocks the other.
    const [crmSynced, emailSent] = await Promise.all([
      sendLeadToCRM({ ...leadData, builder: BUILDER_NAME, visitorIp }),
      sendLeadEmail({ ...leadData, builder: BUILDER_NAME, visitorIp, siteUrl: process.env.SITE_URL }),
    ])

    if (savedLead) {
      try {
        savedLead.crmSynced = crmSynced
        savedLead.emailSent = emailSent
        await savedLead.save()
      } catch (updateErr) {
        console.error('Lead status update failed:', updateErr?.message || updateErr)
      }
    }

    // The form should succeed for the user as long as at least one delivery
    // channel (CRM or email) worked, or the DB save worked.
    if (!savedLead && !crmSynced && !emailSent) {
      return NextResponse.json(
        { success: false, error: 'Could not deliver your enquiry. Please try again or WhatsApp us directly.' },
        { status: 502 }
      )
    }

    return NextResponse.json(
      { success: true, id: savedLead?._id || null, crmSynced, emailSent },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating lead:', error)
    return NextResponse.json(
      { success: false, error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}

// GET /api/leads?key=YOUR_ADMIN_KEY  -> simple protected listing for admin/testing use.
// Set ADMIN_API_KEY in .env.local to use this. Without it, this endpoint stays disabled.
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const key = searchParams.get('key')

    if (!process.env.ADMIN_API_KEY || key !== process.env.ADMIN_API_KEY) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 })
    }

    await dbConnect()
    const leads = await Lead.find().sort({ createdAt: -1 }).limit(500)

    return NextResponse.json({ success: true, count: leads.length, leads })
  } catch (error) {
    console.error('Error fetching leads:', error)
    return NextResponse.json(
      { success: false, error: 'Something went wrong.' },
      { status: 500 }
    )
  }
}
