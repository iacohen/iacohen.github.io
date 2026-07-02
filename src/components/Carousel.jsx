import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

function normalize(images) {
  return images.map(img => (typeof img === 'string' ? { src: img, caption: '' } : img))
}

const FADE_MS = 320

export default function Carousel({ images, alt = '', className = '' }) {
  const items = normalize(images)
  const [idx, setIdx] = useState(0)
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)
  const [zoomed, setZoomed] = useState(false)
  const closeTimer = useRef(null)

  const prev = () => setIdx(i => (i - 1 + items.length) % items.length)
  const next = () => setIdx(i => (i + 1) % items.length)

  const handleKey = (e) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  const openLightbox = () => {
    clearTimeout(closeTimer.current)
    setZoomed(false)
    setMounted(true)
    requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)))
  }

  const closeLightbox = () => {
    setVisible(false)
    closeTimer.current = setTimeout(() => setMounted(false), FADE_MS)
  }

  useEffect(() => () => clearTimeout(closeTimer.current), [])

  useEffect(() => {
    if (!mounted) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [mounted])

  const current = items[idx]

  return (
    <>
      <div
        className={`carousel${className ? ` ${className}` : ''}`}
        onKeyDown={handleKey}
        tabIndex={0}
        aria-label={`${alt} image gallery`}
      >
        <img
          key={idx}
          src={current.src}
          alt={`${alt} — image ${idx + 1} of ${items.length}`}
          className="carousel-img"
          onClick={openLightbox}
        />
        {items.length > 1 && (
          <>
            <button className="carousel-btn carousel-prev" onClick={prev} aria-label="Previous image">‹</button>
            <button className="carousel-btn carousel-next" onClick={next} aria-label="Next image">›</button>
            <div className="carousel-dots">
              {items.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === idx ? ' active' : ''}`}
                  onClick={() => setIdx(i)}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
        {current.caption && <p className="carousel-caption">{current.caption}</p>}
      </div>

      {mounted && createPortal(
        <div
          className={`lightbox-overlay${visible ? ' visible' : ''}`}
          onClick={closeLightbox}
        >
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">×</button>
          {items.length > 1 && (
            <button
              className="lightbox-nav lightbox-prev"
              onClick={(e) => { e.stopPropagation(); prev(); setZoomed(false) }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img
              key={idx}
              src={current.src}
              alt={`${alt} — image ${idx + 1} of ${items.length}`}
              className={`lightbox-img${zoomed ? ' zoomed' : ''}`}
              onClick={() => setZoomed(z => !z)}
            />
            {current.caption && <p className="lightbox-caption">{current.caption}</p>}
          </div>
          {items.length > 1 && (
            <button
              className="lightbox-nav lightbox-next"
              onClick={(e) => { e.stopPropagation(); next(); setZoomed(false) }}
              aria-label="Next image"
            >
              ›
            </button>
          )}
        </div>,
        document.body
      )}
    </>
  )
}
