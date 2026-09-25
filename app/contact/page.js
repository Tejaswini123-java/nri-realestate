import ContactForm from '@/components/ContactForm'
import { Mail, Phone, MapPin, Clock3 } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | Navi Mumbai NRI Homes',
  description: 'Get in touch with our NRI relationship desk for property enquiries, virtual tours and documentation support.',
}

const contactDetails = [
  {
    icon: Phone,
    label: 'Call / WhatsApp',
    value: '+91 98333 10662',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'deepak.assetindia@gmail.com',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: 'SHOP NO 121, Asset India Realty, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614',
  },
  {
    icon: Clock3,
    label: 'NRI Desk Hours',
    value: '24×7 NRI Team Support',
  },
]

export default function ContactPage() {
  return (
    <main className="pt-0">

      {/* =========================================
          HERO / CONTACT BANNER
          TODO: swap in your image path below
      ========================================== */}

      <section
        className="
          relative
          py-10
          sm:py-14
          lg:py-16
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('/project-cards-images/Godrej-panvel-gallery2.webp')",
        }}
      >

        {/* Dark overlay — light enough to keep the image visible */}
        <div className="absolute inset-0 bg-[#0B1220]/45"></div>

        {/* Banner content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="flag-pill inline-block mb-3">📞 We Reply Within 24 Hours</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            Let's Talk <span className="gold-text">Property</span>
          </h1>
          <p className="text-gray-200 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Whether you're exploring options or ready to book, our NRI relationship
            desk is one message away — in your time zone.
          </p>
        </div>
      </section>


      {/* =========================================
          FORM + CONTACT DETAILS
      ========================================== */}

      <section className="py-10 sm:py-14 lg:py-20 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-8 sm:gap-10">

          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            {contactDetails.map((c) => (
              <div
                key={c.label}
                className="
                  gold-border-card bg-white rounded-2xl p-5 sm:p-6
                  flex items-start gap-4
                  transition-all duration-300
                  hover:shadow-lg hover:-translate-y-0.5
                "
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-[#C9970C] to-[#F0C040] flex items-center justify-center">
                  <c.icon size={19} className="text-white" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-[#1A1A2E] mb-0.5">{c.label}</div>
                  <div className="text-sm text-gray-500 leading-relaxed break-words">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  )
}