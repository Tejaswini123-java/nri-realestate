'use client'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { X, Globe2 } from 'lucide-react'
import { countryCodes, buildFullPhone } from '@/lib/countryCodes'

const FIRST_SHOW_DELAY_MS = 7000   // shows 7 seconds after page load
const REAPPEAR_DELAY_MS = 45000    // if closed without submitting, shows again 45s later
const MAX_REAPPEARS = 4            // stop re-showing after this many times per visit, so it never feels spammy

export default function PopupForm() {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', country: '' })
  const [dial, setDial] = useState('91') // default India
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const submittedRef = useRef(false)
  const showCountRef = useRef(0)
  const timerRef = useRef(null)

  // Recurring popup: shows once ~7s after load, then — if the visitor closes
  // it without submitting — shows again every ~45s, up to MAX_REAPPEARS
  // times, so it stays visible "continuously" over a longer browsing
  // session rather than appearing only once. Stops permanently once the
  // visitor successfully submits the form. Self-rescheduling (rather than
  // a state-dependency effect) so closing the popup reliably queues the
  // next appearance every time.
  useEffect(() => {
    const schedule = (delay) => {
      timerRef.current = setTimeout(() => {
        if (submittedRef.current || showCountRef.current >= MAX_REAPPEARS) return
        setVisible(true)
        showCountRef.current += 1
      }, delay)
    }

    schedule(FIRST_SHOW_DELAY_MS)
    return () => clearTimeout(timerRef.current)
  }, [])

  const handleClose = () => {
    setVisible(false)
    if (!submittedRef.current && showCountRef.current < MAX_REAPPEARS) {
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        if (submittedRef.current || showCountRef.current >= MAX_REAPPEARS) return
        setVisible(true)
        showCountRef.current += 1
      }, REAPPEAR_DELAY_MS)
    }
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

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
          source: 'popup',
          enquiredFor: 'Get Instant Call Back – Home Page Pop Up',
          page: typeof window !== 'undefined' ? window.location.href : '',
        }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.error || 'Request failed')

      setStatus('success')
      submittedRef.current = true
      clearTimeout(timerRef.current)
      setTimeout(() => {
        setVisible(false)
        router.push('/thank-you')
      }, 900)
    } catch (err) {
      setStatus('error')
    }
  }

  if (!visible) return null

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div
        className="popup-card relative bg-white rounded-3xl w-[92%] max-w-md overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#0B1220] px-6 py-5 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#C9970C] to-[#F0C040] mb-3">
            <Globe2 size={20} className="text-[#0B1220]" />
          </div>
          <h3 className="font-display text-xl font-bold text-white">
            Exclusive NRI Price List
          </h3>
          <p className="text-gray-400 text-sm mt-1">
            Get today's live pricing, floor plans & payment schedules for Panvel, Kharghar,
            Seawoods, Vashi &amp; Ulwe — sent straight to your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {status === 'success' ? (
            <div className="text-center py-6">
              <div className="text-green-600 text-3xl mb-2">✓</div>
              <p className="font-semibold text-[#1A1A2E]">Thank you! Our NRI desk will reach out shortly.</p>
            </div>
          ) : (
            <>
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
                placeholder="Country of Residence (optional)"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm gold-input"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold w-full text-white font-bold py-3 rounded-xl disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Send Me the Price List'}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-xs text-center">
                  Something went wrong. Please try again.
                </p>
              )}
              <p className="text-[11px] text-gray-400 text-center">
                By submitting, you agree to be contacted by our NRI relationship team.
              </p>
            </>
          )}
        </form>
      </div>
    </div>
  )
}
