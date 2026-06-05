export default function OrderOnline() {
  return (
    <section className="section order-online" id="order" aria-labelledby="order-heading">
      <div className="container">
        <span className="section-label">Book Your Rental</span>
        <h2 className="section-title" id="order-heading">Order Online</h2>
        <p className="section-subtitle">
          Reserve your dumpster or dump trailer online — quick and easy, any time of day.
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
          <h3>Booking Form Coming Soon</h3>
          <p>
            An online booking form or scheduling tool will be embedded here.
            For now, please call us or use the contact form to request a rental.
          </p>
        </div>
      </div>
    </section>
  )
}
