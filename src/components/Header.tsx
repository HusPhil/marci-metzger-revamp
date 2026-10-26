import { useEffect, useRef, useState } from 'react'
import { navigation, phoneDisplay, phoneHref } from '../data/site'
import { CloseIcon, MenuIcon, PhoneIcon } from './Icons'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return

    document.body.classList.add('is-locked')

    const close = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }

    window.addEventListener('keydown', close)
    return () => {
      document.body.classList.remove('is-locked')
      window.removeEventListener('keydown', close)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <header
        className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}
      >
        <a
          className="brand"
          href="#top"
          aria-label="Marci Metzger — The Ridge Realty Group, back to top"
          onClick={closeMenu}
        >
          <img
            src="/images/logo.png"
            alt="Marci Metzger · The Ridge Realty Group"
            width="1071"
            height="334"
          />
        </a>

        <nav className="primary-nav" aria-label="Primary navigation">
          <ul>
            {navigation.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a
            className="header-call"
            href={phoneHref}
            aria-label={`Call ${phoneDisplay}`}
          >
            <PhoneIcon />
            <span className="header-call__number">{phoneDisplay}</span>
          </a>

          <button
            ref={toggleRef}
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
            <span className="sr-only">
              {open ? 'Close navigation menu' : 'Open navigation menu'}
            </span>
          </button>
        </div>
      </header>

      {open && (
        <div className="mobile-menu" id="mobile-menu">
          <nav aria-label="Mobile navigation">
            <ul>
              {navigation.map((link, index) => (
                <li key={link.href} style={{ transitionDelay: `${index * 60}ms` }}>
                  <a href={link.href} onClick={closeMenu}>
                    <span className="mobile-menu__num">0{index + 1}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mobile-menu__foot">
            <p>Marci Metzger · The Ridge Realty Group</p>
            <a href={phoneHref}>
              <PhoneIcon />
              {phoneDisplay}
            </a>
            <p>3190 HW-160, Suite F<br />Pahrump, Nevada 89048</p>
          </div>
        </div>
      )}
    </>
  )
}
