import { services } from "../../data/site";
import { ArrowRightIcon } from "../Icons";

export function Services() {
  return (
    <section
      className="section services"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="services__head">
          <div className="section-head" data-reveal>
            <p className="eyebrow">Our services</p>
            <h2 className="section-title" id="services-title">
              Real estate <em>done right.</em>
            </h2>
          </div>
          <p
            className="section-lede section-lede--editorial"
            data-reveal
            style={{ transitionDelay: '80ms' }}
          >
            Whether you're buying your first home or adding to an investment
            portfolio, you'll have an experienced advocate in your corner.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article
              className="service-card"
              key={service.title}
              data-reveal
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="service-card__media">
                <img
                  src={service.image}
                  alt={service.alt}
                  width="730"
                  height="730"
                  loading="lazy"
                />
              </div>
              <span className="service-card__number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
            </article>
          ))}
        </div>

        <div className="services__cta" data-reveal>
          <p>Not sure where to start?</p>
          <a className="btn btn--dark" href="#contact">
            Let's move
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
