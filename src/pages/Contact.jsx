import { useEffect } from 'react'
import { tinaField } from 'tinacms/dist/react'
import SEO from '../components/SEO'
import QuoteForm from '../components/QuoteForm'
import { useContent } from '../context/ContentContext'

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M4 3h4l2 4.5-2 1.5a9 9 0 0 0 4 4l1.5-2 4.5 2v4a2 2 0 0 1-2 2C7 19 3 8 3 5a2 2 0 0 1 1-2z" fill="#0f0f0f"/>
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="5" width="18" height="12" rx="2" fill="#0f0f0f"/>
      <path d="M2 7l9 6 9-6" stroke="#f5a623" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="11" cy="11" r="8" fill="#0f0f0f"/>
      <line x1="11" y1="6" x2="11" y2="11" stroke="#f5a623" strokeWidth="2" strokeLinecap="round"/>
      <line x1="11" y1="11" x2="14" y2="14" stroke="#f5a623" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const { site, contactPage } = useContent()

  return (
    <>
      <SEO
        title="Request a Quote"
        description={`Request a dumpster or dump trailer rental quote from Central Iowa Roll Offs. Call ${site.phone} or fill out our online form. Serving Des Moines and Central Iowa.`}
        path="/contact"
      />

      <section className="page-hero">
        <div className="container">
          <span className="page-hero__label" data-tina-field={tinaField(contactPage, 'heroLabel')}>
            {contactPage.heroLabel}
          </span>
          <h1 data-tina-field={tinaField(contactPage, 'heroTitle')}>{contactPage.heroTitle}</h1>
          <p data-tina-field={tinaField(contactPage, 'heroText')}>{contactPage.heroText}</p>
        </div>
      </section>

      <section className="contact-page">
        <div className="container">
          <div className="contact-page__grid">
            <div>
              <h2 style={{ marginBottom: '2rem' }}>Contact Info</h2>
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-item__icon"><PhoneIcon /></div>
                  <div>
                    <p className="contact-info-item__label">Phone / Text</p>
                    <div className="contact-info-item__value">
                      <a href={site.phoneHref} data-tina-field={tinaField(site, 'phone')}>{site.phone}</a>
                    </div>
                    <p className="contact-info-item__note" data-tina-field={tinaField(contactPage, 'phoneNote')}>
                      {contactPage.phoneNote}
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-item__icon"><EmailIcon /></div>
                  <div>
                    <p className="contact-info-item__label">Email</p>
                    <div className="contact-info-item__value">
                      <a href={`mailto:${site.email}`} data-tina-field={tinaField(site, 'email')}>{site.email}</a>
                    </div>
                    <p className="contact-info-item__note" data-tina-field={tinaField(contactPage, 'emailResponseNote')}>
                      {contactPage.emailResponseNote}
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-item__icon"><ClockIcon /></div>
                  <div>
                    <p className="contact-info-item__label">Hours</p>
                    <div className="contact-info-item__value" style={{ fontSize: '1.1rem' }} data-tina-field={tinaField(site, 'hours')}>
                      {site.hours}
                    </div>
                    <p className="contact-info-item__note" data-tina-field={tinaField(contactPage, 'hoursNote')}>
                      {contactPage.hoursNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 style={{ marginBottom: '1.5rem' }}>Request a Quote</h2>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
