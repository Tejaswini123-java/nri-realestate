'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { properties, locations } from '@/lib/properties'
import PropertyCard from './PropertyCard'

export default function PropertiesGrid({ featured = false, title = true }) {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? properties : properties.filter((p) => p.location === active)

  const list = featured ? filtered.slice(0, 6) : filtered

  return (
    <section id="properties" className="py-20 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="section-label">
                <span className="w-6 h-px bg-[#C9970C]" /> FEATURED PROJECTS
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
                Handpicked Projects for <span className="gold-text">NRI Investors</span>
              </h2>
              <div className="gold-divider mt-3 mx-0" />
            </div>
            {featured && (
              <Link
                href="/properties"
                className="flex items-center gap-2 text-[#C9970C] text-sm font-semibold hover:gap-3 transition-all"
              >
                View All Projects <ArrowRight size={16} />
              </Link>
            )}
          </div>
        )}

       <div className="grid grid-cols-2 gap-2.5 mb-8 sm:flex sm:flex-wrap">
          <button
            onClick={() => setActive('All')}
            className={`whitespace-nowrap text-center px-4 py-2.5 sm:px-5 sm:py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
              active === 'All'
                ? 'tab-active border-transparent'
                : 'border-gray-200 text-gray-600 hover:border-[#C9970C] hover:text-[#C9970C] bg-white'
            }`}
          >
            All Locations
          </button>
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActive(loc.id)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                active === loc.id
                  ? 'tab-active border-transparent'
                  : 'border-gray-200 text-gray-600 hover:border-[#C9970C] hover:text-[#C9970C] bg-white'
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        {list.length === 0 && (
          <p className="text-center text-gray-400 py-10">No projects found for this filter yet.</p>
        )}
      </div>
    </section>
  )
}
