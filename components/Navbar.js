'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Globe2, PhoneCall } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/properties', label: 'Properties' },
  { href: '/locations', label: 'Locations' },
  { href: '/nri-guide', label: 'NRI Guide' },
  { href: '/contact', label: 'Contact' },
]

// Single, stable header — same solid style at all times, on every page,
// on both desktop and mobile. It never swaps to a transparent variant and
// never changes appearance on scroll, so there is only ever one header.
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-scrolled fixed top-0 left-0 right-0 z-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#C9970C] to-[#F0C040]">
            <Globe2 size={18} className="text-[#0B1220]" />
          </div>
          <span className="font-display text-lg font-bold text-white">
            NM<span className="gold-text">NRI</span>Homes
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-200 hover:text-[#F0C040] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <span className="flag-pill">🌍 Serving 25+ Countries</span>
          <a
            href="tel:+919833310662"
            className="btn-gold flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-xl"
          >
            <PhoneCall size={15} /> Talk to Us
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0B1220] border-t border-white/10 mt-4">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-gray-200 font-medium py-1"
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:+919833310662" className="btn-gold text-white text-sm font-bold px-5 py-3 rounded-xl text-center">
              Talk to Us
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
