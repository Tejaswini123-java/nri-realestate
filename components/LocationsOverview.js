import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { locations, getPropertiesByLocation } from '@/lib/properties'

export default function LocationsOverview() {
  return (
    <section className="py-20 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-label justify-center">
            <span className="w-6 h-px bg-[#C9970C]" /> WHERE TO INVEST <span className="w-6 h-px bg-[#C9970C]" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            5 Locations, <span className="gold-text">One Growth Story</span>
          </h2>
          <div className="gold-divider mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Link
              key={loc.id}
              href={`/locations#${loc.id}`}
              className="property-card group relative rounded-2xl overflow-hidden h-72 block"
            >
              <img
                src={loc.img}
                alt={loc.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/40 to-transparent" />
              <div className="absolute bottom-0 p-6">
                <span className="text-[#F0C040] text-xs font-semibold uppercase tracking-wide">
                  {getPropertiesByLocation(loc.id).length} Projects
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1 flex items-center gap-2">
                  {loc.name}
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-300 text-sm mt-1">{loc.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
