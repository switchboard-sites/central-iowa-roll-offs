import { Link } from 'react-router-dom'
import { tinaField } from 'tinacms/dist/react'
import { useContent } from '../context/ContentContext'

const year = new Date().getFullYear()

export default function Footer() {
  const { site, footer } = useContent()

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
                <strong data-tina-field={tinaField(site, 'businessName')}>{site.businessName}</strong>
                <span data-tina-field={tinaField(site, 'tagline')}>{site.tagline}</span>
              </div>
            </div>
            <p data-tina-field={tinaField(footer, 'brandDesc')}>{footer.brandDesc}</p>
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
              <a href={site.phoneHref} data-tina-field={tinaField(site, 'phone')}>{site.phone}</a>
            </p>
            <p className="footer__contact-item">
              <a href={`mailto:${site.email}`} data-tina-field={tinaField(site, 'email')}>{site.email}</a>
            </p>
            <p className="footer__contact-item">Central Iowa</p>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {year} {site.businessName}. All rights reserved.</span>
          <span>Proudly serving Central Iowa</span>
        </div>
      </div>
    </footer>
  )
}
