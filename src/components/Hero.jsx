import { Link } from 'react-router-dom'
import { tinaField } from 'tinacms/dist/react'
import { useContent } from '../context/ContentContext'

export default function Hero() {
  const { site, hero } = useContent()

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <span className="hero__badge" data-tina-field={tinaField(hero, 'badge')}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="5" fill="#0f0f0f"/>
              <circle cx="6" cy="6" r="2" fill="#0f0f0f"/>
            </svg>
            {hero.badge}
          </span>

          <h1>
            <span data-tina-field={tinaField(hero, 'headline')}>{hero.headline}</span>{' '}
            <span className="accent" data-tina-field={tinaField(hero, 'headlineAccent')}>{hero.headlineAccent}</span>
          </h1>

          <p className="hero__sub" data-tina-field={tinaField(hero, 'sub')}>
            {hero.sub}
          </p>

          <div className="hero__ctas">
            <a href={site.phoneHref} className="btn btn--primary btn--lg">
              Call Now — {site.phone}
            </a>
            <Link to="/contact" className="btn btn--outline-white btn--lg">
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
