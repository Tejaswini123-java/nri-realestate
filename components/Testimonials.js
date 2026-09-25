import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rohit Menon',
    location: 'Dubai, UAE',
    text: 'I bought a 2BHK in Kharghar entirely over video calls. The team handled my PoA and NRE payments end-to-end — I only had to sign at my consulate.',
  },
  {
    name: 'Anjali Deshpande',
    location: 'Toronto, Canada',
    text: 'The Ulwe project I invested in has appreciated nearly 30% since booking. Regular WhatsApp construction updates gave me full confidence from abroad.',
  },
  {
    name: 'Suresh Iyer',
    location: 'London, UK',
    text: 'Time-zone friendly calls made all the difference. My relationship manager scheduled every call after my work hours in the UK.',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label justify-center">
            <span className="w-6 h-px bg-[#C9970C]" /> NRI VOICES <span className="w-6 h-px bg-[#C9970C]" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
            Trusted by <span className="gold-text">NRIs Across the Globe</span>
          </h2>
          <div className="gold-divider mt-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="gold-border-card bg-[#FAFAF7] rounded-2xl p-6">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="star-gold" fill="currentColor" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="font-semibold text-[#1A1A2E] text-sm">{t.name}</div>
              <div className="text-xs text-gray-400">{t.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
