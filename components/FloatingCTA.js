'use client'
import { MessageCircle, PhoneCall } from 'lucide-react'

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/+919833310662"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </a>
      <a
        href="tel:+919833310662"
        className="w-14 h-14 rounded-full btn-gold flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call us"
      >
        <PhoneCall size={22} className="text-white" />
      </a>
    </div>
  )
}
