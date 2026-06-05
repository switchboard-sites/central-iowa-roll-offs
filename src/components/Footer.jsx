import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_HREF, EMAIL_DISPLAY, EMAIL_HREF, BUSINESS_NAME, TAGLINE } from '../config'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <img
                src="/logo.png"
                alt="Central Iowa Roll Offs"
                className="footer__logo-img"
                width="64"
                height="64"
              />
              <div className="footer__logo-text">
                <strong>{BUSINESS_NAME}</strong>
                <span>{TAGLINE}</span>
              </div>
            </div>
            <p>
              Locally owned and operated dumpster and dump trailer rental company serving
              Des Moines and the surrounding Central Iowa communities.
            </p>
          </div>

          <div>
            <p className="footer__heading">Quick Links</p>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/service-area">Service Area</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/contact">Request a Quote</Link></li>
            </ul>
          </div>

          <div>
            <p className="footer__heading">Contact</p>
            <p className="footer__contact-item">
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
            </p>
            <p className="footer__contact-item">
              <a href={EMAIL_HREF}>{EMAIL_DISPLAY}</a>
            </p>
            <p className="footer__contact-item">Central Iowa</p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {year} {BUSINESS_NAME}. All rights reserved.</span>
          <span>Proudly serving Central Iowa</span>
        </div>
      </div>
    </footer>
  )
}
