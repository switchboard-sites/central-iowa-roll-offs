import { tinaField } from 'tinacms/dist/react'

const PHOTOS = [
  { src: '/photos/roll-off-dumpsters.jpeg', alt: 'Two black roll-off dumpsters ready for delivery', objectPosition: 'center 35%' },
  { src: '/photos/dump-trailer.jpeg', alt: 'Black dump trailer loaded with debris', objectPosition: 'center 40%' },
]

function ServiceCard({ service, photo, alt, objectPosition, phoneHref }) {
  return (
    <article className="service-card">
      <div className="service-card__image">
        <img src={photo} alt={alt} loading="lazy" style={{ objectPosition }} />
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title" data-tina-field={tinaField(service, 'title')}>
          {service.title}
        </h3>
        <p className="service-card__desc" data-tina-field={tinaField(service, 'desc')}>
          {service.desc}
        </p>
        <ul className="service-card__list" data-tina-field={tinaField(service, 'features')}>
          {service.features.map((f) => <li key={f}>{f}</li>)}
        </ul>
        <a href={phoneHref} className="btn btn--primary">
          Call to Reserve
        </a>
      </div>
    </article>
  )
}

export default function Services({ services, phoneHref }) {
  return (
    <section className="section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <span className="section-label">What We Offer</span>
        <h2 className="section-title" id="services-heading">Our Rental Services</h2>
        <p className="section-subtitle">
          Whether you need a large roll off for a construction job or a dump trailer for
          a weekend cleanout, we have the right container at the right price.
        </p>
        <div className="services__grid">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              service={service}
              photo={PHOTOS[i]?.src}
              alt={PHOTOS[i]?.alt}
              objectPosition={PHOTOS[i]?.objectPosition}
              phoneHref={phoneHref}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
