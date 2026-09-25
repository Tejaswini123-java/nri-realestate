import PropertiesGrid from '@/components/PropertiesGrid'

export const metadata = {
  title: 'All Properties | Navi Mumbai NRI Homes',
  description:
    'Browse every curated project across Panvel, Kharghar, Seawoods-Nerul, Vashi-Sanpada and Ulwe.',
}

export default function PropertiesPage() {
  return (
    <main className="pt-05">

      {/* HERO / BANNER */}
      <section
        className="relative py-16 sm:py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/project-cards-images/hiranandani-panvel.webp')",
        }}
      >

        {/* Dark overlay for readable text */}
        <div className="absolute inset-0 bg-[#0B1220]/65"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <span className="flag-pill mb-4">
            🏘️ 20+ RERA-Verified Projects
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mt-4">
            All <span className="gold-text">Properties</span>
          </h1>

          <p className="text-gray-200 mt-4 max-w-2xl mx-auto">
            Filter by locality and click any project to open its dedicated
            project website — full floor plans, pricing and brochures.
          </p>

        </div>
      </section>

      {/* PROJECTS */}
      <PropertiesGrid title={false} />

    </main>
  )
}