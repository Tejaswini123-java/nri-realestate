'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Send } from 'lucide-react'
import { countryCodes, buildFullPhone } from '@/lib/countryCodes'

// `project` (optional) lets this same form be embedded on a project detail
// page (/projects/[slug]) so enquiries are tagged with that project.
export default function ContactForm({ project = '' }) {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '', message: '' })
  const [dial, setDial] = useState('91') // default India
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const selectedCountry = countryCodes.find((c) => c.dial === dial)
      const fullPhone = buildFullPhone(dial, form.phone)

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          phone: fullPhone,
          countryCode: dial,
          country: form.country || selectedCountry?.name || '',
          source: 'contact',
          project,
          enquiredFor: project ? `Project Enquiry – ${project}` : 'Contact Page Enquiry',
          page: typeof window !== 'undefined' ? window.location.href : '',
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.error || 'Request failed')

      setStatus('success')
      setForm({ name: '', email: '', phone: '', country: '', message: '' })
      setTimeout(() => router.push('/thank-you'), 700)
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white gold-border-card rounded-2xl p-6 sm:p-8 space-y-4">
      <h3 className="font-display text-xl font-bold text-[#1A1A2E]">
        {project ? `Enquire About ${project}` : 'Talk to Our NRI Desk'}
      </h3>
      <p className="text-sm text-gray-500 -mt-2">
        Share your details and preferred locality — we'll schedule a call at a time
        convenient for your time zone.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm gold-input"
        />
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm gold-input"
        />

        <div className="flex gap-2">
          <select
            value={dial}
            onChange={(e) => setDial(e.target.value)}
            aria-label="Country code"
            className="border border-gray-200 rounded-xl px-2 py-3 text-sm gold-input bg-white w-[112px] shrink-0"
          >
            {countryCodes.map((c) => (
              <option key={`${c.iso}-${c.dial}`} value={c.dial}>
                {c.flag} +{c.dial}
              </option>
            ))}
          </select>
          <input
            required
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone / WhatsApp Number"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm gold-input"
          />
        </div>

        <input
          name="country"
          value={form.country}
          onChange={handleChange}
          placeholder="Country of Residence"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm gold-input"
        />
      </div>

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Tell us which locality / budget you're considering..."
        rows={4}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm gold-input"
      />

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-gold w-full sm:w-auto text-white font-bold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending...' : 'Send Enquiry'} <Send size={16} />
      </button>

      {status === 'success' && (
        <p className="text-green-600 text-sm font-medium">
          Thank you! Your enquiry has been received — redirecting you now...
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-500 text-sm font-medium">
          Something went wrong. Please try again or WhatsApp us directly.
        </p>
      )}
    </form>
  )
}
