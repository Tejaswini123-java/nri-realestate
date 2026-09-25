import { locations, getPropertiesByLocation } from '@/lib/properties'
import PropertyCard from '@/components/PropertyCard'

export const metadata = {
  title: 'Locations | Navi Mumbai NRI Homes',
  description:
    'Deep dive into Panvel, Kharghar, Seawoods-Nerul, Vashi-Sanpada and Ulwe — Navi Mumbai\'s top NRI investment corridors.',
}

export default function LocationsPage() {
  return (
    <main className="pt-0">

      {/* =========================================
          HERO / LOCATION BANNER
      ========================================== */}

      <section
        className="
          relative
          py-14
          sm:py-16
          bg-cover
          bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage:
            "url('/project-cards-images/hiranandani-panvel.webp')",
        }}
      >

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0B1220]/65"></div>

        {/* Banner content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <span className="flag-pill inline-block mb-3">
            📍 5 Growth Corridors
          </span>

          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mt-3">
            Navi Mumbai{' '}
            <span className="gold-text">Locations Guide</span>
          </h1>

          <p className="text-gray-200 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Every locality we list is picked for its connectivity to the upcoming
            Navi Mumbai International Airport and long-term rental demand.
          </p>

        </div>

      </section>


      {/* =========================================
          ALL LOCATIONS
      ========================================== */}

      {locations.map((loc, i) => {
        const locProperties = getPropertiesByLocation(loc.id)

        return (
          <section
            key={loc.id}
            id={loc.id}
            className={`py-10 sm:py-14 lg:py-20 scroll-mt-24 ${
              i % 2 === 0 ? 'bg-[#FAFAF7]' : 'bg-white'
            }`}
          >

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              {/* =================================
                  LOCATION INTRO
              ================================= */}

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center mb-8 lg:mb-12">

                {/*
                  "contents" makes this div invisible to layout on mobile —
                  its children (label/heading/tagline, blurb, count) become
                  direct items of the outer grid, so we can slot the image
                  in between them with order-*. On lg: it goes back to a
                  normal block, exactly like before, so desktop is untouched.
                */}
                <div
                  className={`
                    contents lg:block
                    ${i % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
                  `}
                >

                  <div className="order-1 lg:order-none">
                    <span className="section-label">
                      <span className="w-6 h-px bg-[#C9970C]" />
                      LOCATION SPOTLIGHT
                    </span>

                    <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1A2E]">
                      {loc.name}
                    </h2>

                    <p className="text-[#C9970C] font-semibold mt-1">
                      {loc.tagline}
                    </p>
                  </div>

                  <p className="order-3 lg:order-none text-gray-500 mt-3 sm:mt-4 leading-relaxed">
                    {loc.blurb}
                  </p>

                  <div className="order-4 lg:order-none mt-4 sm:mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#1A1A2E]">
                    {locProperties.length} projects available in {loc.name}
                  </div>

                </div>


                {/* LOCATION IMAGE — order-2 on mobile puts it right after the tagline */}

                <div
                  className={`
                    relative
                    order-2
                    h-52 sm:h-64 lg:h-72
                    rounded-2xl
                    overflow-hidden
                    mt-4 lg:mt-0
                    ${
                      i % 2 === 0
                        ? 'lg:order-2'
                        : 'lg:order-1'
                    }
                  `}
                >

                  <img
                    src={loc.img}
                    alt={loc.name}
                    className="w-full h-full object-cover"
                  />

                </div>

              </div>


              {/* =================================
                  PROJECT CARDS
              ================================= */}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

                {locProperties.map((p) => (
                  <PropertyCard
                    key={p.id}
                    property={p}
                  />
                ))}

              </div>

            </div>

          </section>
        )
      })}

    </main>
  )
}