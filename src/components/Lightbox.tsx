import { useEffect, useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, CloseIcon } from './Icons'

export type LightboxImage = {
  src: string
  alt: string
  caption: string
}

type LightboxProps = {
  images: LightboxImage[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)

  const image = images[index]
  const total = images.length

  useEffect(() => {
    previousFocus.current = document.activeElement as HTMLElement | null
    closeRef.current?.focus()
    document.body.classList.add('is-locked')

    return () => {
      document.body.classList.remove('is-locked')
      previousFocus.current?.focus()
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
        return
      }

      if (event.key === 'ArrowLeft') {
        onNavigate((index - 1 + total) % total)
        return
      }

      if (event.key === 'ArrowRight') {
        onNavigate((index + 1) % total)
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>('button'),
      )
      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [index, onClose, onNavigate, total])

  return (
    <div
      ref={dialogRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo gallery"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <button
        ref={closeRef}
        className="lightbox__control lightbox__close"
        type="button"
        onClick={onClose}
      >
        <CloseIcon />
        <span className="sr-only">Close gallery</span>
      </button>

      <button
        className="lightbox__control lightbox__nav lightbox__nav--prev"
        type="button"
        onClick={() => onNavigate((index - 1 + total) % total)}
      >
        <ChevronLeftIcon />
        <span className="sr-only">Previous image</span>
      </button>

      <figure className="lightbox__figure">
        <img
          key={image.src}
          className="lightbox__image"
          src={image.src}
          alt={image.alt}
          width="1024"
          height="682"
        />
        <figcaption className="lightbox__caption">
          <span>{image.caption}</span>
          <span className="lightbox__count" aria-live="polite">
            {index + 1} / {total}
          </span>
        </figcaption>
      </figure>

      <button
        className="lightbox__control lightbox__nav lightbox__nav--next"
        type="button"
        onClick={() => onNavigate((index + 1) % total)}
      >
        <ChevronRightIcon />
        <span className="sr-only">Next image</span>
      </button>
    </div>
  )
}
