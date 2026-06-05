import { tinaField } from 'tinacms/dist/react'
import { useContent } from '../context/ContentContext'

export default function OrderOnline() {
  const { orderOnline } = useContent()

  return (
    <section className="section order-online" id="order" aria-labelledby="order-heading">
      <div className="container">
        <span className="section-label" data-tina-field={tinaField(orderOnline, 'label')}>
          {orderOnline.label}
        </span>
        <h2 className="section-title" id="order-heading" data-tina-field={tinaField(orderOnline, 'title')}>
          {orderOnline.title}
        </h2>
        <p className="section-subtitle" data-tina-field={tinaField(orderOnline, 'sub')}>
          {orderOnline.sub}
        </p>

        <div className="order-online__embed">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="6" y="10" width="40" height="28" rx="3" stroke="#888" strokeWidth="2.5" fill="none"/>
            <line x1="6" y1="20" x2="46" y2="20" stroke="#888" strokeWidth="2"/>
            <line x1="16" y1="7" x2="16" y2="13" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="36" y1="7" x2="36" y2="13" stroke="#888" strokeWidth="2.5" strokeLinecap="round"/>
            <rect x="14" y="25" width="10" height="7" rx="1" stroke="#888" strokeWidth="1.5" fill="none"/>
            <line x1="30" y1="27" x2="40" y2="27" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
            <line x1="30" y1="31" x2="38" y2="31" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <h3 data-tina-field={tinaField(orderOnline, 'placeholderTitle')}>{orderOnline.placeholderTitle}</h3>
          <p data-tina-field={tinaField(orderOnline, 'placeholderText')}>{orderOnline.placeholderText}</p>
        </div>
      </div>
    </section>
  )
}
