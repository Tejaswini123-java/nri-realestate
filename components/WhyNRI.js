import { Video, FileCheck2, Landmark, Plane, Clock3, ShieldCheck } from 'lucide-react'

const points = [
  {
    icon: Video,
    title: 'Live Video Site Visits',
    desc: 'Walk through any project in real time over a video call — floor plans, sample flats, and construction progress, without boarding a flight.',
  },
  {
    icon: FileCheck2,
    title: 'Power of Attorney Support',
    desc: 'Our legal desk drafts and helps notarise your PoA at the Indian consulate nearest to you, so a trusted representative can complete formalities here.',
  },
  {
    icon: Landmark,
    title: 'NRE / NRO Payment Guidance',
    desc: 'Clear guidance on remitting funds through NRE/NRO accounts, FEMA compliance, and repatriation of rental income or resale proceeds.',
  },
  {
    icon: Clock3,
    title: 'Time-Zone Friendly Desk',
    desc: 'A dedicated relationship manager available on your schedule — US, UK, Gulf or APAC hours — for calls, documentation and updates.',
  },
  {
    icon: Plane,
    title: 'Airport-Proximate Portfolio',
    desc: 'Every locality we list sits within the growth radius of the upcoming Navi Mumbai International Airport — built for long-term NRI appreciation.',
  },
  {
    icon: ShieldCheck,
    title: 'RERA & Title Verified',
    desc: 'Every project is checked for RERA registration, clear title, and approved layouts before it is listed on this site.',
  },
]

export default function WhyNRI() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label justify-center">
            <span className="w-6 h-px bg-[#C9970C]" /> WHY NRIS CHOOSE US <span className="w-6 h-px bg-[#C9970C]" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
            Buying From Abroad, <span className="gold-text">Made Simple</span>
          </h2>
          <div className="gold-divider mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="gold-border-card bg-[#FAFAF7] rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C9970C] to-[#F0C040] flex items-center justify-center mb-4">
                <p.icon size={20} className="text-white" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#1A1A2E] mb-2">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
