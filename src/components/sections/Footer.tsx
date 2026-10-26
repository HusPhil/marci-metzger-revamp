import {
  credentials,
  navigation,
  phoneDisplay,
  phoneHref,
  socials,
} from '../../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img
              src="/images/logo.png"
              alt="Marci Metzger · The Ridge Realty Group"
              width="1071"
              height="334"
              loading="lazy"
            />
            <p>
              Over two decades in real estate. Licensed Broker in Seattle, now
              serving Southern Nevada as Pahrump's top real estate agent.
            </p>
            <a href={phoneHref}>{phoneDisplay}</a>
          </div>

          <div className="footer__col">
            <h3>Explore</h3>
            <ul>
              {navigation.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h3>Visit</h3>
            <address>
              3190 HW-160, Suite F
              <br />
              Pahrump, Nevada 89048
              <br />
              United States
            </address>
            <p>Open daily, 8:00 am – 7:00 pm</p>
            <div className="footer__social">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__badges">
          {credentials.map((credential) => (
            <img
              key={credential.label}
              src={credential.src}
              alt={credential.alt}
              width={credential.width}
              height={credential.height}
              loading="lazy"
            />
          ))}
        </div>

        <div className="footer__bottom">
          <p>Copyright © 2026 Marci Metzger. All rights reserved.</p>
          <p>Pahrump, Nevada · The Ridge Realty Group</p>
        </div>
      </div>
    </footer>
  )
}
