import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_HREF } from '../config'
import content from '../content/content.json'

const { hero } = content

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <span className="hero__badge">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="5" fill="#0f0f0f"/>
              <circle cx="6" cy="6" r="2" fill="#0f0f0f"/>
            </svg>
            {hero.badge}
          </span>

          <h1>
            {hero.headline}{' '}
            <span className="accent">{hero.headlineAccent}</span>
          </h1>

          <p className="hero__sub">{hero.sub}</p>

          <div className="hero__ctas">
            <a href={PHONE_HREF} className="btn btn--primary btn--lg">
              Call Now — {PHONE_DISPLAY}
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
