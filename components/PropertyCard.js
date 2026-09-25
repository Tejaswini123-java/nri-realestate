'use client'
import Link from 'next/link'
import { MapPin, Bed, Square, ArrowUpRight, CheckCircle2 } from 'lucide-react'

export default function PropertyCard({ property }) {
  return (
    <Link
      href={`/projects/${property.id}`}
      className="property-card gold-border-card bg-white rounded-2xl overflow-hidden group block"
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={property.img}
          alt={property.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <span className={`absolute top-3 left-3 ${property.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow`}>
          {property.tag}
        </span>
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center text-[#C9970C] opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={17} />
        </div>
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
          <span className="text-xs font-semibold text-[#1A1A2E]">{property.developer}</span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-[#1A1A2E] mb-1 group-hover:text-[#C9970C] transition-colors">
          {property.name}
        </h3>
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
          <MapPin size={13} className="text-[#C9970C]" />
          {property.localityLabel}
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-gray-100">
          <span className="flex items-center gap-1">
            <Bed size={14} className="text-[#C9970C]" /> {property.beds}
          </span>
          <span className="flex items-center gap-1">
            <Square size={14} className="text-[#C9970C]" /> {property.area}
          </span>
        </div>

        <ul className="space-y-1.5 mb-4">
          {property.highlights.slice(0, 2).map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-gray-500">
              <CheckCircle2 size={13} className="text-green-500 mt-0.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0 flex-1">
            <div className="text-[#C9970C] font-display font-bold text-lg sm:text-xl leading-snug">
              {property.priceRange}
            </div>
            <div className="text-gray-400 text-xs">Possession: {property.possession}</div>
          </div>
          <span className="btn-gold text-white text-xs font-bold px-4 py-2.5 rounded-xl inline-flex items-center gap-1 shrink-0 whitespace-nowrap">
            View Details <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  )
}