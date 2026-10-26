import { credentials } from '../../data/site'

export function Quote() {
  return (
    <section className="quote" aria-label="A note from Marci">
      <div className="container quote__inner" data-reveal>
        <span className="quote__mark" aria-hidden="true">
          “
        </span>
        <blockquote>
          We live, work, and play in this community. Happy to help you find where
          to put your hard-earned dollars.
        </blockquote>
        <p className="quote__cite">Marci Metzger · The Ridge Realty Group</p>

        <div className="quote__credentials">
          <p
            className="quote__credentials-title"
            id="quote-credentials-title"
          >
            Credentials &amp; affiliations
          </p>
          <ul
            className="quote__badges"
            aria-labelledby="quote-credentials-title"
          >
            {credentials.map((credential) => (
              <li className="quote__badge" key={credential.label}>
                <figure>
                  <span className="quote__badge-seal">
                    <img
                      src={credential.src}
                      alt={credential.alt}
                      width={credential.width}
                      height={credential.height}
                      loading="lazy"
                    />
                  </span>
                  <figcaption>
                    <span className="quote__badge-label">
                      {credential.label}
                    </span>
                    <span className="quote__badge-note">
                      {credential.note}
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
