import { Link } from 'react-router-dom'

const CITIES = [
  'Des Moines', 'Ankeny', 'Urbandale', 'West Des Moines',
  'Waukee', 'Johnston', 'Grimes', 'Altoona',
  'Bondurant', 'Clive', 'Norwalk', 'Carlisle',
  'Indianola', 'Newton', 'Ames', 'Boone',
  'Marshalltown', 'Adel', 'Perry', 'Winterset',
  'Pella', 'Knoxville', 'Pleasantville', 'Huxley',
]

export default function ServiceAreaHighlight() {
  return (
    <section className="section area-highlight" id="service-area" aria-labelledby="area-heading">
      <div className="container">
        <span className="section-label">Where We Deliver</span>
        <h2 className="section-title" id="area-heading">Our Service Area</h2>
        <p className="section-subtitle">
          We deliver throughout the Des Moines metro and surrounding Central Iowa communities.
          Don't see your city? Give us a call — we may still be able to help.
        </p>

        <ul className="city-grid" aria-label="Cities we serve">
          {CITIES.map((city) => (
            <li key={city}>{city}</li>
          ))}
        </ul>

        <Link to="/service-area" className="btn btn--primary">
          View Full Service Area
        </Link>
      </div>
    </section>
  )
}
