import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { PHONE_DISPLAY, PHONE_HREF } from '../config'

const REGIONS = [
  {
    name: 'Polk County / Des Moines Metro',
    cities: [
      'Des Moines', 'Ankeny', 'Urbandale', 'West Des Moines',
      'Johnston', 'Grimes', 'Altoona', 'Bondurant',
      'Clive', 'Windsor Heights', 'Pleasant Hill',
      'Mitchellville', 'Polk City', 'Elkhart', 'Runnells',
    ],
  },
  {
    name: 'Warren County',
    cities: [
      'Indianola', 'Norwalk', 'Carlisle', 'Pleasantville',
      'Knoxville', 'Cumming', 'Martensdale', 'Milo',
    ],
  },
  {
    name: 'Dallas County',
    cities: [
      'Waukee', 'Adel', 'Perry', 'Woodward',
      'Minburn', 'Linden', 'De Soto', 'Van Meter',
    ],
  },
  {
    name: 'Story County',
    cities: [
      'Ames', 'Huxley', 'Nevada', 'Cambridge',
      'Story City', 'Roland', 'Slater', 'Maxwell',
    ],
  },
  {
    name: 'Boone County',
    cities: [
      'Boone', 'Madrid', 'Ogden', 'Booneville',
      'Beaver', 'Luther', 'Berkley', 'Fraser',
    ],
  },
  {
    name: 'Madison County',
    cities: [
      'Winterset', 'Earlham', 'Macksburg', 'Patterson',
      'St. Charles', 'Bevington', 'Truro', 'East Peru',
    ],
  },
  {
    name: 'Jasper County',
    cities: [
      'Newton', 'Colfax', 'Baxter', 'Kellogg',
      'Monroe', 'Prairie City', 'Sully', 'Reasnor',
    ],
  },
  {
    name: 'Marshall County',
    cities: [
      'Marshalltown', 'Albion', 'Conrad', 'Gilman',
      'Haverhill', 'Liscomb', 'Melbourne', 'State Center',
    ],
  },
]

export default function ServiceArea() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <SEO
        title="Service Area"
        description={`Central Iowa Roll Offs delivers dumpsters and dump trailers throughout Des Moines, Ankeny, Ames, Waukee, and surrounding Central Iowa communities. Call ${PHONE_DISPLAY}.`}
        path="/service-area"
      />

      <section className="page-hero">
        <div className="container">
          <span className="page-hero__label">Where We Deliver</span>
          <h1>Service Area</h1>
          <p>
            We deliver dumpsters and dump trailers throughout the Des Moines metro and
            surrounding Central Iowa counties. Need delivery outside these areas?
            Call us — we&apos;ll do our best to accommodate you.
          </p>
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
            {REGIONS.map((region) => (
              <div className="cities-region" key={region.name}>
                <h3>{region.name}</h3>
                <ul className="cities-list">
                  {region.cities.map((city) => (
                    <li key={city}>{city}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', background: '#f5f5f5', borderRadius: '4px', borderLeft: '4px solid #f5a623' }}>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>Don&apos;t see your city?</h3>
            <p style={{ marginBottom: '1rem', color: '#555' }}>
              Our service area continues to grow. If you&apos;re in Central Iowa and don&apos;t
              see your community listed, give us a call — we may still be able to deliver to you.
            </p>
            <a href={PHONE_HREF} className="btn btn--primary">
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
