import { createContext, useContext } from 'react'
import { useTina } from 'tinacms/dist/react'
import content from '../content/content.json'

const ContentContext = createContext(null)

const QUERY = `query ContentQuery($relativePath: String!) {
  siteContent(relativePath: $relativePath) {
    site { businessName tagline phone phoneHref email hours siteUrl }
    hero { badge headline headlineAccent sub }
    services { title desc features }
    howItWorks { title desc }
    whyUs { title desc }
    serviceAreaHighlight { subtitle cities }
    serviceAreaPage {
      heroLabel heroTitle heroText
      regions { name cities }
      calloutTitle calloutText
    }
    contactHighlight { headline sub emailResponseNote }
    orderOnline { label title sub placeholderTitle placeholderText }
    contactPage { heroLabel heroTitle heroText phoneNote emailResponseNote hoursNote }
    footer { brandDesc }
  }
}`

export function ContentProvider({ children }) {
  const { data } = useTina({
    query: QUERY,
    variables: { relativePath: 'content.json' },
    data: { siteContent: content },
  })
  return (
    <ContentContext.Provider value={data.siteContent}>
      {children}
    </ContentContext.Provider>
  )
}

export const useContent = () => useContext(ContentContext)
