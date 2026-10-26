import { phoneHref } from '../../data/site'
import { ArrowUpRightIcon } from '../Icons'

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="about__glass" aria-hidden="true" />

      <div className="container about__grid">
        <div className="about__media" data-reveal>
          <div className="about__frame">
            <img
              src="/images/marci-portrait.jpg"
              alt="Marci Metzger, broker at The Ridge Realty Group"
              width="1095"
              height="1095"
              loading="lazy"
            />
          </div>
          <img
            className="about__seal"
            src="/images/badge-circle.png"
            alt="The Ridge Realty Group emblem"
            width="300"
            height="300"
            loading="lazy"
          />
          <div className="about__caption">
            <span>Marci Metzger</span>
            <span>Broker · The Ridge Realty Group</span>
          </div>
        </div>

        <div
          className="about__copy"
          data-reveal
          style={{ transitionDelay: '120ms' }}
        >
          <div className="section-head">
            <p className="eyebrow">About Marci</p>
            <h2 className="section-title" id="about-title">
              A trusted guide for nearly <em>three decades.</em>
            </h2>
          </div>

          <p>
            Marci Metzger is a licensed broker with nearly 30 years of real
            estate experience. From Seattle to Southern Nevada, she has built her
            career on straight talk, local knowledge, and a genuine care for the
            people behind every transaction.
          </p>
          <p>
            As part of The Ridge Realty Group, Marci helps buyers and sellers
            navigate Pahrump and the surrounding communities — from first homes
            and fixer-uppers to luxury properties and commercial investments.
          </p>

          <p className="about__signature">Marci Metzger</p>

          <ul className="about__meta" aria-label="Credentials">
            <li>REALTOR®</li>
            <li>Licensed Broker</li>
            <li>Pahrump Chamber</li>
          </ul>

          <a className="link-arrow" href={phoneHref}>
            Speak with Marci
            <ArrowUpRightIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
