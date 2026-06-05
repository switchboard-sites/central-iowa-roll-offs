import { tinaField } from 'tinacms/dist/react'
import { useContent } from '../context/ContentContext'

export default function HowItWorks() {
  const { howItWorks } = useContent()

  return (
    <section className="section section--gray" id="how-it-works" aria-labelledby="how-heading">
      <div className="container">
        <span className="section-label">Simple Process</span>
        <h2 className="section-title" id="how-heading">How It Works</h2>
        <p className="section-subtitle">
          Renting a dumpster or dump trailer from us is straightforward — no surprises,
          no hassle.
        </p>

        <div className="how-it-works__steps">
          {howItWorks.map((s, i) => (
            <div className="step" key={s.title}>
              <div className="step__number" aria-hidden="true">{i + 1}</div>
              <h3 className="step__title" data-tina-field={tinaField(s, 'title')}>{s.title}</h3>
              <p className="step__desc" data-tina-field={tinaField(s, 'desc')}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
