import { useEffect } from 'react'
import { tinaField } from 'tinacms/dist/react'
import SEO from '../components/SEO'
import { useContent } from '../context/ContentContext'

export default function ServiceArea() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const { site, serviceAreaPage } = useContent()

  return (
    <>
      <SEO
        title="Service Area"
        description={`Central Iowa Roll Offs delivers dumpsters and dump trailers throughout Des Moines, Ankeny, Ames, Waukee, and surrounding Central Iowa communities. Call ${site.phone}.`}
        path="/service-area"
      />

      <section className="page-hero">
        <div className="container">
          <span className="page-hero__label" data-tina-field={tinaField(serviceAreaPage, 'heroLabel')}>
            {serviceAreaPage.heroLabel}
          </span>
          <h1 data-tina-field={tinaField(serviceAreaPage, 'heroTitle')}>{serviceAreaPage.heroTitle}</h1>
          <p data-tina-field={tinaField(serviceAreaPage, 'heroText')}>{serviceAreaPage.heroText}</p>
        </div>
      </section>

      <section className="area-map">
        <div className="container">
          <div className="map-placeholder" role="img" aria-label="Service area map placeholder">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M24 4C16.27 4 10 10.27 10 18c0 10.5 14 26 14 26s14-15.5 14-26c0-7.73-6.27-14-14-14z" stroke="#aaa" strokeWidth="2.5" fill="none"/>
              <circle cx="24" cy="18" r="4" stroke="#aaa" strokeWidth="2.5" fill="none"/>
            </svg>
            <p>Interactive map coming soon</p>
          </div>
        </div>
      </section>

      <section className="area-cities">
        <div className="container">
          <h2>Cities &amp; Communities We Serve</h2>

          <div>
            {serviceAreaPage.regions.map((region) => (
              <div className="cities-region" key={region.name}>
                <h3 data-tina-field={tinaField(region, 'name')}>{region.name}</h3>
                <ul className="cities-list" data-tina-field={tinaField(region, 'cities')}>
                  {region.cities.map((city) => (
                    <li key={city}>{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', background: '#f5f5f5', borderRadius: '4px', borderLeft: '4px solid #f5a623' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }} data-tina-field={tinaField(serviceAreaPage, 'calloutTitle')}>
              {serviceAreaPage.calloutTitle}
            </h3>
            <p style={{ marginBottom: '1rem', color: '#555' }} data-tina-field={tinaField(serviceAreaPage, 'calloutText')}>
              {serviceAreaPage.calloutText}
            </p>
            <a href={site.phoneHref} className="btn btn--primary">
              Call {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
