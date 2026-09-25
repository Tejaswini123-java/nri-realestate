import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  MapPin, Bed, Square, CheckCircle2, ArrowLeft, ShieldCheck, Building2,
  LayoutGrid, Image as ImageIcon, Navigation, BadgeCheck,
} from 'lucide-react'
import { properties, locations } from '@/lib/properties'
import { getProjectDetails } from '@/lib/projectDetails'
import ContactForm from '@/components/ContactForm'
import GalleryGrid from '@/components/GalleryGrid'
import FloorPlanImage from '@/components/FloorPlanImage'

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.id }))
}

export function generateMetadata({ params }) {
  const property = properties.find((p) => p.id === params.slug)
  if (!property) return { title: 'Project Not Found | Navi Mumbai NRI Homes' }
  return {
    title: `${property.name} | Navi Mumbai NRI Homes`,
    description: `${property.name} by ${property.developer} in ${property.localityLabel} — ${property.priceRange}. ${property.highlights?.[0] || ''}`,
  }
}

export default function ProjectPage({ params }) {
  const property = properties.find((p) => p.id === params.slug)
  if (!property) notFound()

  const details = getProjectDetails(property.id)
  const location = locations.find((l) => l.id === property.location)
  const related = properties
    .filter((p) => p.location === property.location && p.id !== property.id)
    .slice(0, 3)

  return (
   <main className="m-0 p-0">
      {/* ===== Banner ===== */}
      <section className="relative bg-[#0B1220] overflow-hidden">
        <div className="absolute inset-0">
          <img src={property.img} alt={property.name} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <Link href="/properties" className="inline-flex items-center gap-2 text-gray-300 hover:text-[#F0C040] text-sm mb-6 transition-colors">
            <ArrowLeft size={15} /> Back to All Properties
          </Link>
          <span className={`inline-block ${property.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow mb-4`}>
            {property.tag}
          </span>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight max-w-3xl">
            {property.name}
          </h1>
          <p className="text-gray-300 mt-3 flex items-center gap-2">
            <MapPin size={15} className="text-[#F0C040]" /> {property.localityLabel} · by {property.developer}
          </p>
          <div className="flex flex-wrap gap-6 mt-6 text-gray-300 text-sm">
            <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-[#F0C040]" /> RERA: {details.rera}</span>
            <span className="flex items-center gap-2"><Bed size={16} className="text-[#F0C040]" /> {property.beds}</span>
            <span className="flex items-center gap-2"><Square size={16} className="text-[#F0C040]" /> {property.area}</span>
          </div>
        </div>
      </section>

      {/* ===== Body: left content column + right STICKY contact form ===== */}
      <section className="py-16 bg-[#FAFAF7]">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-8 min-w-0">

            <div className="rounded-2xl overflow-hidden gold-border-card">
              <img src={property.img} alt={property.name} className="w-full h-72 sm:h-80 object-cover" />
            </div>

            <div className="gold-border-card bg-white rounded-2xl p-6 sm:p-8">
              <h2 className="font-display text-2xl font-bold text-[#1A1A2E] mb-4">General Description</h2>
              {details.description && (
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{details.description}</p>
              )}
              <ul className="space-y-3">
                {property.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-gray-600 text-sm">
                    <CheckCircle2 size={18} className="text-green-500 mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {details.priceTable?.length > 0 && (
  <div className="gold-border-card bg-white rounded-2xl p-6 sm:p-8">
    <h2 className="font-display text-xl font-bold text-[#1A1A2E] mb-4 flex items-center gap-2">
      <BadgeCheck size={20} className="text-[#C9970C]" /> Pricing
    </h2>

    {/* Phone view: one row per flat type */}
    <div className="sm:hidden divide-y divide-gray-100">
      {details.priceTable.map((row, i) => (
        <div key={i} className="py-3 first:pt-0 last:pb-0">
          <div className="flex items-start justify-between gap-3">
            <span className="font-semibold text-[#1A1A2E] text-sm">{row.type}</span>
            <span className="text-[#C9970C] font-semibold text-sm text-right shrink-0">{row.price}</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">Carpet area: {row.area}</div>
        </div>
      ))}
    </div>

    {/* Tablet & desktop view: normal table */}
    <div className="hidden sm:block">
      <table className="w-full text-sm">
        <thead>
          <tr className="text-left text-gray-400 border-b border-gray-100">
            <th className="pb-2 font-medium">Type</th>
            <th className="pb-2 font-medium">Carpet Area</th>
            <th className="pb-2 font-medium">Price</th>
          </tr>
        </thead>
        <tbody>
          {details.priceTable.map((row, i) => (
            <tr key={i} className="border-b border-gray-50 last:border-0">
              <td className="py-2.5 pr-4 text-[#1A1A2E] font-medium">{row.type}</td>
              <td className="py-2.5 pr-4 text-gray-500">{row.area}</td>
              <td className="py-2.5 text-[#C9970C] font-semibold">{row.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
)}
            {details.siteFloorPlanImg && (
              <div className="gold-border-card bg-white rounded-2xl p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-[#1A1A2E] mb-4 flex items-center gap-2">
                  <LayoutGrid size={20} className="text-[#C9970C]" /> Site &amp; Floor Plan
                </h2>
                <FloorPlanImage src={details.siteFloorPlanImg} name={property.name} />
                <p className="text-xs text-gray-400 mt-3">
                  Detailed unit-wise floor plans available on request — ask our NRI desk for the full brochure.
                </p>
              </div>
            )}

            {details.amenities?.length > 0 && (
              <div className="gold-border-card bg-white rounded-2xl p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-[#1A1A2E] mb-4">Basic Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {details.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 bg-[#FAFAF7] rounded-lg px-3 py-2.5">
                      <CheckCircle2 size={14} className="text-[#C9970C] shrink-0" /> {a}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {details.gallery?.length > 0 && (
              <div className="gold-border-card bg-white rounded-2xl p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-[#1A1A2E] mb-4 flex items-center gap-2">
                  <ImageIcon size={20} className="text-[#C9970C]" /> Gallery
                </h2>
                    <GalleryGrid images={details.gallery} name={property.name} />
              </div>
            )}

            {location && (
              <div className="gold-border-card bg-white rounded-2xl p-6 sm:p-8">
                <h2 className="font-display text-xl font-bold text-[#1A1A2E] mb-2 flex items-center gap-2">
                  <Building2 size={20} className="text-[#C9970C]" /> About {location.name}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{location.blurb}</p>
                {details.connectivity?.length > 0 && (
                  <>
                    <h3 className="text-sm font-semibold text-[#1A1A2E] mb-2 flex items-center gap-2">
                      <Navigation size={15} className="text-[#C9970C]" /> Connectivity
                    </h3>
                    <ul className="space-y-1.5">
                      {details.connectivity.map((c) => (
                        <li key={c} className="text-xs sm:text-sm text-gray-500 flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#C9970C] mt-2 shrink-0" /> {c}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>

          {/* ===== Right column: STABLE STICKY contact form ===== */}
             <div className="lg:col-span-2 min-w-0">
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="gold-border-card bg-white rounded-2xl p-6 sm:p-8">
                <div className="text-[#C9970C] font-display font-bold text-2xl">{property.priceRange}</div>
                <div className="text-gray-400 text-sm mb-4">Possession: {property.possession}</div>
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-100">
                  <span className="flex items-center gap-2"><Bed size={15} className="text-[#C9970C]" /> {property.beds}</span>
                  <span className="flex items-center gap-2"><Square size={15} className="text-[#C9970C]" /> {property.area}</span>
                  <span className="flex items-center gap-2 col-span-2"><Building2 size={15} className="text-[#C9970C]" /> {property.type}</span>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  Interested in {property.name}? Share your details and our NRI desk
                  will send floor plans, live pricing and a virtual tour link.
                </p>
              </div>

              <ContactForm project={property.name} />
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <h2 className="font-display text-2xl font-bold text-[#1A1A2E] mb-6">
              More Projects in {property.localityLabel}
            </h2>
            <div className="flex flex-wrap gap-4">
              {related.map((p) => (
                <Link
                  key={p.id}
                  href={`/projects/${p.id}`}
                  className="gold-border-card bg-white rounded-xl px-5 py-4 hover:border-[#C9970C] transition-colors"
                >
                  <div className="font-semibold text-[#1A1A2E]">{p.name}</div>
                  <div className="text-xs text-gray-400 mt-1">{p.priceRange}</div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  )
}
