import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
import ServiceAreaHighlight from '../components/ServiceAreaHighlight'
import OrderOnline from '../components/OrderOnline'
import ContactHighlight from '../components/ContactHighlight'
import { useContent } from '../context/ContentContext'
import { EMAIL_DISPLAY, SITE_URL } from '../config'

const LOCAL_BUSINESS_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Central Iowa Roll Offs',
  description: 'Dumpster and dump trailer rentals across Central Iowa. Fast delivery for roofing, construction, cleanouts, and demolition.',
  telephone: '+15152307250',
  email: EMAIL_DISPLAY,
  url: SITE_URL,
  address: { '@type': 'PostalAddress', addressLocality: 'Des Moines', addressRegion: 'IA', addressCountry: 'US' },
  geo: { '@type': 'GeoCoordinates', latitude: 41.5868, longitude: -93.6250 },
  areaServed: { '@type': 'AdministrativeArea', name: 'Central Iowa' },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '08:00', closes: '17:00' }],
  priceRange: '$$',
}

export default function Home() {
  const { site } = useContent()

  return (
    <>
      <SEO
        description={`Dumpster and dump trailer rentals across Central Iowa. Fast delivery for roofing, construction, garage cleanouts, and demolition. Call ${site.phone} today.`}
        path="/"
        schema={LOCAL_BUSINESS_SCHEMA}
      />
      <Hero />
      <Services />
      <HowItWorks />
      <WhyChooseUs />
      <ServiceAreaHighlight />
      <OrderOnline />
      <ContactHighlight />
    </>
  )
}
