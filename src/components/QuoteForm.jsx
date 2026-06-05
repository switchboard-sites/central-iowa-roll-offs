import { useState } from 'react'
import { PHONE_DISPLAY, PHONE_HREF } from '../config'

function encode(data) {
  return Object.keys(data)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}

const INITIAL = {
  name: '',
  phone: '',
  email: '',
  service: '',
  'project-type': '',
  'delivery-date': '',
  message: '',
  'bot-field': '',
}

export default function QuoteForm() {
  const [fields, setFields] = useState(INITIAL)
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  function handleChange(e) {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'rental-quote', ...fields }),
    })
      .then(() => setStatus('success'))
      .catch(() => setStatus('error'))
  }

  if (status === 'success') {
    return (
      <div className="form-success">
        <div className="form-success__icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#f5a623"/>
            <path d="M8 16l5 5 11-11" stroke="#0f0f0f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3>Quote Request Received!</h3>
        <p>
          We'll follow up within one business day. For faster service,
          call us directly at <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>.
        </p>
      </div>
    )
  }

  return (
    <form
      className="quote-form"
      name="rental-quote"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="rental-quote" />
      <p className="quote-form__honeypot">
        <label>
          Don't fill this out:{' '}
          <input name="bot-field" value={fields['bot-field']} onChange={handleChange} tabIndex="-1" autoComplete="off" />
        </label>
      </p>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="qf-name" className="form-label">Name <span aria-hidden="true">*</span></label>
          <input
            id="qf-name"
            className="form-input"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="qf-phone" className="form-label">Phone <span aria-hidden="true">*</span></label>
          <input
            id="qf-phone"
            className="form-input"
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
            placeholder="(515) 000-0000"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="qf-email" className="form-label">Email</label>
          <input
            id="qf-email"
            className="form-input"
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="qf-service" className="form-label">Service Needed <span aria-hidden="true">*</span></label>
          <select
            id="qf-service"
            className="form-input form-select"
            name="service"
            value={fields.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service…</option>
            <option value="Roll Off Dumpster Rental">Roll Off Dumpster Rental</option>
            <option value="Dump Trailer Rental">Dump Trailer Rental</option>
            <option value="Not Sure Yet">Not Sure Yet</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="qf-project" className="form-label">Project Type <span aria-hidden="true">*</span></label>
          <select
            id="qf-project"
            className="form-input form-select"
            name="project-type"
            value={fields['project-type']}
            onChange={handleChange}
            required
          >
            <option value="">Select a project type…</option>
            <option value="Roofing debris">Roofing debris</option>
            <option value="Construction debris">Construction debris</option>
            <option value="Home cleanout">Home cleanout</option>
            <option value="Landscaping debris">Landscaping debris</option>
            <option value="Demolition">Demolition</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="qf-date" className="form-label">Preferred Delivery Date</label>
          <input
            id="qf-date"
            className="form-input"
            type="date"
            name="delivery-date"
            value={fields['delivery-date']}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="qf-message" className="form-label">Message</label>
        <textarea
          id="qf-message"
          className="form-input form-textarea"
          name="message"
          value={fields.message}
          onChange={handleChange}
          placeholder="Any details about your project, location, or questions…"
          rows={4}
        />
      </div>

      <div className="form-footer">
        <button
          type="submit"
          className="btn btn--primary btn--lg"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending…' : 'Request a Quote'}
        </button>
        {status === 'error' && (
          <p className="form-error">
            Something went wrong. Please call us at <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>.
          </p>
        )}
      </div>
    </form>
  )
}
