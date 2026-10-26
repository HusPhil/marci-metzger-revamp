import { useState } from 'react'
import { galleryImages } from '../../data/site'
import { ExpandIcon } from '../Icons'
import { Lightbox } from '../Lightbox'

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <>
      <section
        className="section gallery"
        id="gallery"
        aria-labelledby="gallery-title"
      >
        <div className="container">
          <div className="gallery__head">
            <div className="section-head section-head--light" data-reveal>
              <p className="eyebrow eyebrow--light">Inside the portfolio</p>
              <h2 className="section-title" id="gallery-title">
                Photo <em>gallery.</em>
              </h2>
            </div>
            <p
              className="section-lede section-lede--light"
              data-reveal
              style={{ transitionDelay: '80ms' }}
            >
              A look at homes we've helped buy and sell across Pahrump and
              Southern Nevada.
            </p>
          </div>

          <div className="gallery__grid">
            {galleryImages.map((image, index) => (
              <button
                className={`gallery__item gallery__item--${index + 1}`}
                key={image.src}
                type="button"
                aria-label={`Open ${image.caption} in the photo gallery`}
                aria-haspopup="dialog"
                data-reveal
                style={{ transitionDelay: `${index * 60}ms` }}
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width="1024"
                  height="682"
                  loading="lazy"
                />
                <span className="gallery__overlay">
                  <span className="gallery__caption">{image.caption}</span>
                  <ExpandIcon />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      )}
    </>
  )
}
