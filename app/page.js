import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import WhyNRI from '@/components/WhyNRI'
import PropertiesGrid from '@/components/PropertiesGrid'
import LocationsOverview from '@/components/LocationsOverview'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <PropertiesGrid featured />
      <LocationsOverview />
       <WhyNRI />
      <Testimonials />
    </main>
  )
}
