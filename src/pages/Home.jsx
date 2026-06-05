import { useTina } from 'tinacms/dist/react'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Services from '../components/Services'
import HowItWorks from '../components/HowItWorks'
import WhyChooseUs from '../components/WhyChooseUs'
import ServiceAreaHighlight from '../components/ServiceAreaHighlight'
import OrderOnline from '../components/OrderOnline'
import ContactHighlight from '../components/ContactHighlight'
import { EMAIL_DISPLAY, SITE_URL } from '../config'
import content from '../content/content.json'

const QUERY = `query ContentQuery($relativePath: String!) {
  siteContent(relativePath: $relativePath) {
    site { businessName phone phoneHref email hours siteUrl }
    hero { badge headline headlineAccent sub }
    services { title desc features }
    howItWorks { title desc }
    whyUs { title desc }
  }
}`

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
  const { data } = useTina({
    query: QUERY,
    variables: { relativePath: 'content.json' },
    data: { siteContent: content },
  })

  const { site, hero, services, howItWorks, whyUs } = data.siteContent

  return (
    <>
      <SEO
        description={`Dumpster and dump trailer rentals across Central Iowa. Fast delivery for roofing, construction, garage cleanouts, and demolition. Call ${site.phone} today.`}
        path="/"
        schema={LOCAL_BUSINESS_SCHEMA}
      />
      <Hero hero={hero} phoneDisplay={site.phone} phoneHref={site.phoneHref} />
      <Services services={services} phoneHref={site.phoneHref} />
      <HowItWorks steps={howItWorks} />
      <WhyChooseUs whyUs={whyUs} />
      <ServiceAreaHighlight />
      <OrderOnline />
      <ContactHighlight />
    </>
  )
}
