import { Helmet } from 'react-helmet-async'
import { BUSINESS_NAME, SITE_URL } from '../config'

export default function SEO({ title, description, path = '', schema = null }) {
  const fullTitle = title
    ? `${title} | ${BUSINESS_NAME}`
    : `${BUSINESS_NAME} | Dumpster & Dump Trailer Rentals — Central Iowa`

  const canonical = `${SITE_URL}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={BUSINESS_NAME} />
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  )
}
