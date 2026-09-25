import Link from 'next/link'
import { Globe2, Mail, Phone, MapPin } from 'lucide-react'
import { locations } from '@/lib/properties'

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#C9970C] to-[#F0C040]">
              <Globe2 size={18} className="text-[#0B1220]" />
            </div>
            <span className="font-display text-lg font-bold text-white">
              NM<span className="gold-text">NRI</span>Homes
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            A dedicated real-estate desk built for Non-Resident Indians investing in
            Navi Mumbai — RERA-verified projects, remote paperwork and virtual site
            visits, wherever you live.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Locations</h4>
          <ul className="space-y-2 text-sm">
            {locations.map((l) => (
              <li key={l.id}>
                <Link href={`/locations#${l.id}`} className="hover:text-[#F0C040] transition-colors">
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/properties" className="hover:text-[#F0C040] transition-colors">All Properties</Link></li>
            <li><Link href="/nri-guide" className="hover:text-[#F0C040] transition-colors">NRI Investment Guide</Link></li>
            <li><Link href="/contact" className="hover:text-[#F0C040] transition-colors">Book a Virtual Tour</Link></li>
            <li><Link href="/contact" className="hover:text-[#F0C040] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone size={15} className="text-[#F0C040]" /> +91 98333120662</li>
            <li className="flex items-center gap-2"><Mail size={15} className="text-[#F0C040]" /> deepak.assetindia@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin size={15} className="text-[#F0C040]" />SHOP NO 121, Asset India Realty, Sector 15, CBD Belapur, Navi Mumbai, Maharashtra 400614</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-500">
        <span>© {new Date().getFullYear()} NM NRI Homes. All rights reserved.</span>
        <span>All projects shown are marketed on behalf of respective RERA-registered developers.</span>
      </div>
    </footer>
  )
}
