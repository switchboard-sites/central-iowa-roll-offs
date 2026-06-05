import { PHONE_DISPLAY, PHONE_HREF } from '../config'

export default function MobileCallBar() {
  return (
    <div className="mobile-call-bar" aria-label="Call us">
      <span className="mobile-call-bar__label">Ready to book?</span>
      <a href={PHONE_HREF} className="mobile-call-bar__btn">
        Call {PHONE_DISPLAY}
      </a>
    </div>
  )
}
