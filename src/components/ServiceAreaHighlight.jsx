import { Link } from 'react-router-dom'
import { tinaField } from 'tinacms/dist/react'
import { useContent } from '../context/ContentContext'

export default function ServiceAreaHighlight() {
  const { serviceAreaHighlight } = useContent()

  return (
    <section className="section area-highlight" id="service-area" aria-labelledby="area-heading">
      <div className="container">
        <span className="section-label">Where We Deliver</span>
        <h2 className="section-title" id="area-heading">Our Service Area</h2>
        <p className="section-subtitle" data-tina-field={tinaField(serviceAreaHighlight, 'subtitle')}>
          {serviceAreaHighlight.subtitle}
        </p>

        <ul className="city-grid" aria-label="Cities we serve" data-tina-field={tinaField(serviceAreaHighlight, 'cities')}>
          {serviceAreaHighlight.cities.map((city) => (
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
