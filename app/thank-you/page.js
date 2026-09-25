import Link from 'next/link'
import { CheckCircle2, PhoneCall, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Thank You | Navi Mumbai NRI Homes',
  description: 'Thank you for your enquiry — our NRI relationship desk will reach out shortly.',
}

export default function ThankYouPage() {
  return (
    <main className="pt-24 min-h-[70vh] flex items-center bg-[#FAFAF7]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#C9970C] to-[#F0C040] flex items-center justify-center mx-auto mb-6 shadow-lg">
          <CheckCircle2 size={40} className="text-white" />
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
          Thank You! Your Enquiry Has Been Received
        </h1>
        <p className="text-gray-500 mt-4 max-w-lg mx-auto">
          A member of our NRI relationship desk will reach out to you shortly — usually
          within 24 hours, at a time convenient for your time zone. In the meantime, feel
          free to keep browsing our curated projects.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <Link
            href="/properties"
            className="btn-gold flex items-center gap-2 text-white font-bold px-7 py-4 rounded-xl"
          >
            <ArrowLeft size={18} /> Browse Properties
          </Link>
          <a
            href="tel:+919833310662"
            className="flex items-center gap-2 text-[#1A1A2E] font-semibold px-7 py-4 rounded-xl border border-gray-200 hover:border-[#C9970C] hover:text-[#C9970C] transition-colors"
          >
            <PhoneCall size={18} /> Call Us Now
          </a>
        </div>

        <Link href="/" className="inline-block mt-8 text-sm text-gray-400 hover:text-[#C9970C] transition-colors">
          ← Back to Home
        </Link>
      </div>
    </main>
  )
}
