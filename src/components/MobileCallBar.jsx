import { tinaField } from 'tinacms/dist/react'
import { useContent } from '../context/ContentContext'

export default function MobileCallBar() {
  const { site } = useContent()

  return (
    <div className="mobile-call-bar" aria-label="Call us">
      <span className="mobile-call-bar__label">Ready to book?</span>
      <a href={site.phoneHref} className="mobile-call-bar__btn" data-tina-field={tinaField(site, 'phone')}>
        Call {site.phone}
      </a>
    </div>
  )
}
