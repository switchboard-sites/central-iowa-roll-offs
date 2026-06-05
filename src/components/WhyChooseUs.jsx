import { tinaField } from 'tinacms/dist/react'

const ICONS = [
  <svg key="delivery" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3 13h14M13 7l6 6-6 6" stroke="#0f0f0f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="20" cy="13" r="2" fill="#0f0f0f"/>
  </svg>,
  <svg key="local" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M13 3C9.13 3 6 6.13 6 10c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#0f0f0f" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
    <circle cx="13" cy="10" r="2.5" fill="#0f0f0f"/>
  </svg>,
  <svg key="flexible" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="4" y="5" width="18" height="17" rx="2" stroke="#0f0f0f" strokeWidth="2.5" fill="none"/>
    <line x1="4" y1="10" x2="22" y2="10" stroke="#0f0f0f" strokeWidth="2"/>
    <line x1="9" y1="3" x2="9" y2="7" stroke="#0f0f0f" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="17" y1="3" x2="17" y2="7" stroke="#0f0f0f" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="13" cy="16" r="1.5" fill="#0f0f0f"/>
  </svg>,
  <svg key="online" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="5" width="20" height="13" rx="2" stroke="#0f0f0f" strokeWidth="2.5" fill="none"/>
    <line x1="9" y1="22" x2="17" y2="22" stroke="#0f0f0f" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="13" y1="18" x2="13" y2="22" stroke="#0f0f0f" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="13" cy="11.5" r="2" fill="#0f0f0f"/>
  </svg>,
]

export default function WhyChooseUs({ whyUs }) {
  return (
    <section className="section" id="why-us" aria-labelledby="why-heading">
      <div className="container">
        <span className="section-label">Why Us</span>
        <h2 className="section-title" id="why-heading">Why Choose Central Iowa Roll Offs</h2>
        <p className="section-subtitle">
          We make dumpster and trailer rentals simple, reliable, and affordable for
          homeowners, contractors, and businesses.
        </p>

        <div className="why__grid">
          {whyUs.map((f, i) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-card__icon">{ICONS[i]}</div>
              <h3 className="feature-card__title" data-tina-field={tinaField(f, 'title')}>{f.title}</h3>
              <p className="feature-card__desc" data-tina-field={tinaField(f, 'desc')}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
