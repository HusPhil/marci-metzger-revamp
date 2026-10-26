import { phoneDisplay, phoneHref, stats } from "../../data/site";
import { ArrowRightIcon, PhoneIcon } from "../Icons";

type HeroVariant = "default" | "glass";

type HeroProps = {
  variant?: HeroVariant;
  label?: string;
  id?: string;
};

export function Hero({ variant = "default", label, id }: HeroProps) {
  const sectionId = id ?? (variant === "default" ? "top" : undefined);
  const headingId = `hero-title${variant === "default" ? "" : `-${variant}`}`;
  const className = variant === "default" ? "hero" : `hero hero--${variant}`;

  return (
    <section className={className} id={sectionId} aria-labelledby={headingId}>
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
        <div className="hero__content">
          <div className="hero__intro">
            <p className="eyebrow eyebrow--light">
              Marci Metzger · The Ridge Realty Group
            </p>
            <h1 id={headingId}>
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
        </div>

        <div className="hero__stats" aria-label="Marci Metzger at a glance">
          {stats.map((stat) => (
            <div className="hero__stat" key={stat.label}>
              <span className="hero__stat-value">{stat.value}</span>
              <span className="hero__stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {label ? (
        <span className="hero__variant" aria-hidden="true">
          {label}
        </span>
      ) : null}
    </section>
  );
}
