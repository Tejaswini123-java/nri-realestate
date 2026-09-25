import nodemailer from 'nodemailer'

// -------------------------------------------------------------------------
// Reads the same kind of config the reference PHP mailer used, but from
// environment variables instead of being hard-coded in the file:
//
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, MAIL_TO,
//   MAIL_SUBJECT, CRM_API_URL, SITE_URL, BUILDER_NAME
//
// Set these in .env.local (see .env.local.example). Nothing here is
// hard-coded so the same code works for any project/domain.
// -------------------------------------------------------------------------

let cachedTransporter = null

function getTransporter() {
  if (cachedTransporter) return cachedTransporter
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null
  }
  cachedTransporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false (STARTTLS) for 587
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 10000, // fail fast instead of hanging for minutes
    greetingTimeout: 10000,
    socketTimeout: 10000,
  })
  return cachedTransporter
}

function row(label, value) {
  return `<tr>
    <td style="padding:10px 14px;border:1px solid #ddd;background:#fafafa;font-weight:bold;width:170px;font-family:Arial,sans-serif;font-size:14px;color:#333">${label}</td>
    <td style="padding:10px 14px;border:1px solid #ddd;font-family:Arial,sans-serif;font-size:14px;color:#333">${value || '—'}</td>
  </tr>`
}

// Builds the same visual "lead card" table shown in the reference screenshot
// (Name / Email / Phone / Country / Enquired For / Builder / Project /
// Lead Source / Page URL / Visitor IP), rendered as an HTML email.
function buildLeadEmailHtml(lead) {
  const title = `New Lead – ${lead.project || 'General Enquiry'}`
  return `
  <html>
    <body style="font-family:Arial,sans-serif;font-size:14px;color:#333;background:#f4f4f4;padding:24px">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;padding:24px;border-radius:8px">
        <h2 style="color:#C9970C;margin-top:0">${title}</h2>
        <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:600px">
          ${row('Name', lead.name)}
          ${row('Email', lead.email ? `<a href="mailto:${lead.email}" style="color:#C9970C">${lead.email}</a>` : '')}
          ${row('Phone', lead.phone)}
          ${row('Country', lead.country)}
          ${row('Enquired For', lead.enquiredFor)}
          ${row('Builder', lead.builder)}
          ${row('Project', lead.project)}
          ${row('Lead Source', lead.source)}
          ${row('Message', lead.message)}
          ${row('Page URL', lead.page ? `<a href="${lead.page}" style="color:#C9970C">${lead.page}</a>` : '')}
          ${row('Visitor IP', lead.visitorIp)}
        </table>
        <p style="color:#999;font-size:11px;margin-top:20px">
          Sent automatically from ${lead.siteUrl || 'the website'} lead form.
        </p>
      </div>
    </body>
  </html>`
}

// Sends the lead notification email. Returns true/false — never throws,
// so a mail-server hiccup never breaks the user-facing form submission.
export async function sendLeadEmail(lead) {
  try {
    const transporter = getTransporter()
    if (!transporter) {
      console.warn('sendLeadEmail: SMTP_HOST/SMTP_USER/SMTP_PASS not set — skipping email.')
      return false
    }

    const to = (process.env.MAIL_TO || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)

    if (to.length === 0) {
      console.warn('sendLeadEmail: MAIL_TO not set — skipping email.')
      return false
    }

    const subject =
      process.env.MAIL_SUBJECT ||
      `${lead.project || 'Website'} : New Lead from Website`

    await transporter.sendMail({
      from: `"${lead.project || 'NRI Website Lead'}" <${process.env.MAIL_FROM || process.env.SMTP_USER}>`,
      to,
      replyTo: lead.email || undefined,
      subject,
      html: buildLeadEmailHtml(lead),
      text:
        `Name: ${lead.name}\n` +
        `Email: ${lead.email || '—'}\n` +
        `Phone: ${lead.phone}\n` +
        `Country: ${lead.country || '—'}\n` +
        `Enquired For: ${lead.enquiredFor || '—'}\n` +
        `Project: ${lead.project || '—'}\n` +
        `Lead Source: ${lead.source}\n` +
        `Message: ${lead.message || '—'}\n` +
        `Page URL: ${lead.page || '—'}\n` +
        `Visitor IP: ${lead.visitorIp || '—'}`,
    })

    return true
  } catch (err) {
    console.error('sendLeadEmail error:', err?.message || err)
    return false
  }
}

// Pushes the lead to the external CRM, mirroring the payload shape used by
// the reference PHP script (Name / Email / Mobile no / Requirement / Page URL).
// Returns true/false — never throws.
export async function sendLeadToCRM(lead) {
  try {
    const crmUrl = process.env.CRM_API_URL
    if (!crmUrl) {
      console.warn('sendLeadToCRM: CRM_API_URL not set — skipping CRM sync.')
      return false
    }

    const payload = {
      Name: lead.name,
      Email: lead.email || 'noemail@gmail.com',
      'Mobile no': lead.phone,
      Requirement: lead.message || lead.enquiredFor || '',
      'Page URL': lead.page || process.env.SITE_URL || '',
    }

    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 20000)

    const res = await fetch(crmUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    })
    clearTimeout(timeout)

    if (!res.ok) {
      const bodyText = await res.text().catch(() => '')
      console.error('sendLeadToCRM: CRM responded with status', res.status, bodyText.slice(0, 500))
      return false
    }
    return true
  } catch (err) {
    console.error('sendLeadToCRM error:', err?.message || err)
    return false
  }
}
