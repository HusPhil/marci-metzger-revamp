import { soldCards } from "../../data/site";
import { ArrowRightIcon } from "../Icons";

export function Sold() {
  return (
    <section className="section sold" id="sold" aria-labelledby="sold-title">
      <div className="container">
        <div className="sold__intro">
          <div className="section-head" data-reveal>
            <p className="eyebrow">The Metzger difference</p>
            <h2 className="section-title" id="sold-title">
              Don't just list it.
              <br />
              <em>Get it sold.</em>
            </h2>
          </div>
          <p
            className="section-lede"
            data-reveal
            style={{ transitionDelay: "80ms" }}
          >
            We exhaust every avenue to ensure our listings are at the fingertips
            of every possible buyer — getting you top dollar for your home.
          </p>
        </div>

        <div className="sold__grid">
          {soldCards.map((card, index) => (
            <article
              className="sold-card"
              key={card.title}
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="sold-card__media">
                <img
                  src={card.image}
                  alt={card.alt}
                  width="1200"
                  height="600"
                  loading="lazy"
                />
              </div>
              <div className="sold-card__body">
                <span className="sold-card__number">{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="sold__cta" data-reveal>
          <p>Ready to make your next move?</p>
          <a className="btn btn--dark" href="#contact">
            Start a conversation
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
