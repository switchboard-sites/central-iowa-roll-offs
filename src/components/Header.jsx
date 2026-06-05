import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_HREF } from '../config'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__logo" onClick={() => setOpen(false)} aria-label="Central Iowa Roll Offs — Home">
          <img
            src="/logo.png"
            alt="Central Iowa Roll Offs"
            className="header__logo-img"
            width="52"
            height="52"
          />
          <div className="header__logo-text">
            <strong>Central Iowa Roll Offs</strong>
            <span>Dumpster &amp; Trailer Rentals</span>
          </div>
        </Link>

        <nav className="header__nav" aria-label="Primary">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/service-area">Service Area</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <div className="header__right">
          <a href={PHONE_HREF} className="header__call" aria-label={`Call us at ${PHONE_DISPLAY}`}>
            <span className="header__call-label">Call Us Now</span>
            <span className="header__call-number">{PHONE_DISPLAY}</span>
          </a>
          <a href={PHONE_HREF} className="btn btn--primary header__call-btn">
            Call Now
          </a>
          <button
            className="header__toggle"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {open && (
        <nav className="header__mobile-nav" aria-label="Mobile">
          <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/service-area" onClick={() => setOpen(false)}>Service Area</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
          <a href={PHONE_HREF} className="btn btn--primary" onClick={() => setOpen(false)}>
            Call Now — {PHONE_DISPLAY}
          </a>
        </nav>
      )}
    </header>
  )
}
