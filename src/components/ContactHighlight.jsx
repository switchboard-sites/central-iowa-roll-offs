import { tinaField } from 'tinacms/dist/react'
import { useContent } from '../context/ContentContext'

function PhoneIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M5 4h5l2 5-2.5 1.5a11 11 0 0 0 5 5L16 13l5 2v5a2 2 0 0 1-2 2C8.5 22 4 8 4 6a2 2 0 0 1 1-2z" fill="#0f0f0f"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="3" y="6" width="20" height="14" rx="2" fill="#0f0f0f"/>
      <path d="M3 8l10 7 10-7" stroke="#f5a623" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

export default function ContactHighlight() {
  const { site, contactHighlight } = useContent()

  return (
    <section className="section contact-highlight" aria-labelledby="contact-heading">
      <div className="container">
        <h2 id="contact-heading" data-tina-field={tinaField(contactHighlight, 'headline')}>
          {contactHighlight.headline}
        </h2>
        <p data-tina-field={tinaField(contactHighlight, 'sub')}>{contactHighlight.sub}</p>

        <div className="contact-options">
          <div className="contact-option">
            <div className="contact-option__icon"><PhoneIcon /></div>
            <p className="contact-option__label">Call or Text</p>
            <a href={site.phoneHref} className="contact-option__value" data-tina-field={tinaField(site, 'phone')}>
              {site.phone}
            </a>
            <p className="contact-option__note" data-tina-field={tinaField(site, 'hours')}>{site.hours}</p>
          </div>

          <div className="contact-divider" aria-hidden="true" />

          <div className="contact-option">
            <div className="contact-option__icon"><EmailIcon /></div>
            <p className="contact-option__label">Email Us</p>
            <a href={`mailto:${site.email}`} className="contact-option__value" data-tina-field={tinaField(site, 'email')}>
              {site.email}
            </a>
            <p className="contact-option__note" data-tina-field={tinaField(contactHighlight, 'emailResponseNote')}>
              {contactHighlight.emailResponseNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
