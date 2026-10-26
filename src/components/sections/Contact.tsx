import { useState } from 'react'
import type { FormEvent } from 'react'
import {
  directionsUrl,
  mapEmbedUrl,
  phoneDisplay,
  phoneHref,
  socials,
} from '../../data/site'
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
} from '../Icons'

export function Contact() {
  const [sentName, setSentName] = useState('')

  const handleContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const name = String(new FormData(form).get('name') ?? '').trim()
    setSentName(name || 'there')
    form.reset()
  }

  return (
    <section
      className="section contact"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container contact__grid">
        <div className="contact__form-col" data-reveal>
          <div className="section-head">
            <p className="eyebrow">Let's move</p>
            <h2 className="section-title" id="contact-title">
              Send a <em>message.</em>
            </h2>
          </div>

          <form className="contact__form" onSubmit={handleContact}>
            <div className="form-row">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email*</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label htmlFor="message">How can we help?</label>
              <textarea id="message" name="message" rows={4} />
            </div>

            <div className="contact__submit">
              <button className="btn btn--solid" type="submit">
                Send
                <ArrowRightIcon />
              </button>
              <p>This concept form is ready to connect to your inbox.</p>
            </div>

            {sentName && (
              <p className="form-success" role="status">
                Thank you, {sentName}. We'll be in touch shortly.
              </p>
            )}
          </form>
        </div>

        <div
          className="contact__info"
          data-reveal
          style={{ transitionDelay: '100ms' }}
        >
          <div className="section-head">
            <p className="eyebrow">Call or visit</p>
            <h2 className="section-title">
              Marci <em>Metzger.</em>
            </h2>
          </div>

          <ul className="contact__details">
            <li>
              <MapPinIcon />
              <div>
                <span>Office</span>
                <a href={directionsUrl} target="_blank" rel="noreferrer">
                  3190 HW-160, Suite F
                  <br />
                  Pahrump, Nevada 89048, United States
                </a>
              </div>
            </li>
            <li>
              <PhoneIcon />
              <div>
                <span>Direct</span>
                <a href={phoneHref}>{phoneDisplay}</a>
              </div>
            </li>
            <li>
              <ClockIcon />
              <div>
                <span>Office hours</span>
                <p>
                  Open daily, 8:00 am – 7:00 pm
                  <br />
                  Appointments outside office hours available upon request. Just
                  call!
                </p>
              </div>
            </li>
          </ul>

          <div className="contact__socials">
            <span>Follow</span>
            <div>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                  <ArrowUpRightIcon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container contact__map-band">
        <div className="contact__map contact__map--visit">
          <iframe
            title="Map to the Marci Metzger office in Pahrump, Nevada"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="contact__map-card">
            <span>Pahrump office</span>
            <p>3190 HW-160, Suite F</p>
            <a
              className="contact__directions contact__directions--card"
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get directions
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
