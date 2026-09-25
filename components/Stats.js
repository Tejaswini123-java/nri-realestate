const stats = [
  { value: '5', label: 'Prime Locations' },
  { value: '20+', label: 'Curated Projects' },
  { value: '3,200+', label: 'NRI Clients Served' },
  { value: '25+', label: 'Countries Reached' },
]

export default function Stats() {
  return (
    <section className="bg-[#0B1220] py-10 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="stat-number font-display text-3xl sm:text-4xl font-bold gold-text">{s.value}</div>
            <div className="text-gray-400 text-xs sm:text-sm mt-1 uppercase tracking-wide">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
