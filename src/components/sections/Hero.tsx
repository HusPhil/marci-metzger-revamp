import { phoneDisplay, phoneHref, stats } from '../../data/site'
import { ArrowDownIcon, ArrowRightIcon, PhoneIcon } from '../Icons'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__media">
        <img
          src="/images/hero-mountain-pond.jpg"
          alt=""
          width="1920"
          height="1275"
          fetchPriority="high"
        />
      </div>

      <div className="hero__inner container">
        <div className="hero__intro">
          <p className="eyebrow eyebrow--light">
            Marci Metzger · The Ridge Realty Group
          </p>
          <h1 id="hero-title">
            Pahrump
            <em>Realtor</em>
          </h1>
        </div>

        <div className="hero__detail">
          <p className="hero__detail-label">
            Serving Pahrump &amp; Southern Nevada
          </p>
          <p className="hero__lede">
            Over two decades in real estate. Licensed Broker in Seattle, now
            serving Southern Nevada as Pahrump's top real estate agent.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href={phoneHref}>
              <PhoneIcon />
              Call {phoneDisplay}
            </a>
            <a className="btn btn--ghost" href="#listings">
              Find your dream home
              <ArrowRightIcon />
            </a>
          </div>
        </div>

        <div className="hero__stats" aria-label="Marci Metzger at a glance">
          {stats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
          <a className="hero__scroll" href="#about">
            <span>Discover</span>
            <ArrowDownIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
