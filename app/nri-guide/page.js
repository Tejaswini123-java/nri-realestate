import { FileText, Landmark, Plane, ShieldCheck, Video, PenTool } from 'lucide-react'

export const metadata = {
  title: 'NRI Investment Guide | Navi Mumbai NRI Homes',
  description: 'Step-by-step process, required documents, funding and taxation guidance for NRIs buying property in Navi Mumbai.',
}

const steps = [
  {
    icon: Video,
    title: 'Shortlist & Virtual Tour',
    desc: 'Browse projects on this site, shortlist 2-3 favourites, and book a live video walkthrough at a time that suits your time zone.',
  },
  {
    icon: FileText,
    title: 'Document Verification',
    desc: 'We collect your PAN, Passport/OCI, Visa, and address proof, and run title & RERA checks on your chosen project.',
  },
  {
    icon: PenTool,
    title: 'Power of Attorney (Optional)',
    desc: 'If you cannot travel, execute a registered PoA at the Indian Embassy/Consulate so our team can sign on your behalf.',
  },
  {
    icon: Landmark,
    title: 'Payment via NRE/NRO',
    desc: 'Funds are remitted through your NRE or NRO account as per FEMA guidelines — we coordinate directly with your bank and the developer.',
  },
  {
    icon: ShieldCheck,
    title: 'Registration & Handover',
    desc: 'Sale deed registration, stamp duty and possession are managed end-to-end, with digital copies shared to you immediately.',
  },
  {
    icon: Plane,
    title: 'Post-Sale Support',
    desc: 'From rental management to repatriation of proceeds on resale, our NRI desk stays engaged well after your purchase.',
  },
]

const documents = [
  'Valid Passport & Visa / OCI Card',
  'PAN Card (mandatory for property transactions in India)',
  'Overseas address proof (utility bill / bank statement)',
  'Passport-size photographs',
  'NRE / NRO bank account details',
  'Power of Attorney (if not present in person)',
]

const faqs = [
  {
    q: 'Can an NRI buy residential property in India?',
    a: 'Yes. Under FEMA, NRIs and OCIs can freely purchase residential and commercial property in India, except agricultural land, farmhouses and plantation property.',
  },
  {
    q: 'How can I pay for the property from abroad?',
    a: 'Payments must be made in Indian Rupees through normal banking channels via your NRE, NRO or FCNR account — cash payments are not permitted.',
  },
  {
    q: 'Do I need to be physically present to buy a flat?',
    a: 'No. You can execute a registered Power of Attorney authorising a trusted person (or our facilitation team) to complete site visits, documentation and registration on your behalf.',
  },
  {
    q: 'Can I repatriate the sale proceeds later?',
    a: 'Yes, subject to RBI/FEMA limits — sale proceeds of up to two residential properties can generally be repatriated, provided the original purchase was through NRE/FCNR funds or as per prevailing regulations.',
  },
  {
    q: 'Is home loan available for NRIs?',
    a: 'Most leading Indian banks and NBFCs offer NRI home loans, typically up to 75-80% of property value, repayable through NRE/NRO accounts.',
  },
]

export default function NRIGuidePage() {
  return (
    <main className="pt-0">

      {/* =========================================
          HERO / GUIDE BANNER
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
            "url('/project-cards-images/progressive-ulwe-gallery1.webp')",
        }}
      >

        {/* Dark overlay — kept light enough that the image stays visible */}
        <div className="absolute inset-0 bg-[#0B1220]/45"></div>

        {/* Banner content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="flag-pill inline-block mb-3">📖 Step-by-Step</span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3">
            The <span className="gold-text">NRI Buying Guide</span>
          </h1>
          <p className="text-gray-200 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
            Everything you need to know to buy property in Navi Mumbai from
            anywhere in the world — process, documents, funding and taxation.
          </p>
        </div>
      </section>

      {/* =========================================
          6-STEP PROCESS
      ========================================== */}

      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-14">
            <span className="section-label justify-center">
              <span className="w-6 h-px bg-[#C9970C]" /> HOW IT WORKS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A2E]">
              Your Purchase Journey, <span className="gold-text">In 6 Steps</span>
            </h2>
            <div className="gold-divider mt-3" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {steps.map((s, i) => (
              <div key={s.title} className="gold-border-card bg-[#FAFAF7] rounded-2xl p-5 sm:p-6 relative">
                <span className="font-display text-4xl font-bold text-[#F0C040]/30 absolute top-4 right-5">
                  0{i + 1}
                </span>
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C9970C] to-[#F0C040] flex items-center justify-center mb-3 sm:mb-4">
                  <s.icon size={20} className="text-white" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#1A1A2E] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          DOCUMENTS + TAXATION
      ========================================== */}

      <section className="py-10 sm:py-14 lg:py-20 bg-[#FAFAF7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <span className="section-label">
              <span className="w-6 h-px bg-[#C9970C]" /> DOCUMENTS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1A1A2E] mb-4 sm:mb-6">
              What You'll <span className="gold-text">Need</span>
            </h2>
            <ul className="space-y-3">
              {documents.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-gray-600">
                  <ShieldCheck size={16} className="text-green-500 mt-0.5 shrink-0" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0B1220] rounded-2xl p-6 sm:p-8 text-white">
            <h3 className="font-display text-xl font-bold mb-3">Taxation Snapshot</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Rental income earned by NRIs is taxable in India, with TDS applicable on
              rent and on sale proceeds. Capital gains tax depends on the holding
              period, and relief may be available under the Double Taxation
              Avoidance Agreement (DTAA) with your country of residence.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We recommend consulting a chartered accountant familiar with NRI
              taxation before finalising your purchase — our desk can connect you
              with one on request.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          FAQS
      ========================================== */}

      <section className="py-10 sm:py-14 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="section-label justify-center">
              <span className="w-6 h-px bg-[#C9970C]" /> FAQS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1A2E]">
              Common <span className="gold-text">Questions</span>
            </h2>
            <div className="gold-divider mt-3" />
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="gold-border-card bg-[#FAFAF7] rounded-2xl p-5 sm:p-6">
                <h4 className="font-semibold text-[#1A1A2E] mb-2">{f.q}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}