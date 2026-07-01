import { useState } from 'react'

export default function Carousel({ images, alt = '', className = '' }) {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setIdx(i => (i + 1) % images.length)

  const handleKey = (e) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
  }

  return (
    <div
      className={`carousel${className ? ` ${className}` : ''}`}
      onKeyDown={handleKey}
      tabIndex={0}
      aria-label={`${alt} image gallery`}
    >
      <img key={idx} src={images[idx]} alt={`${alt} — image ${idx + 1} of ${images.length}`} className="carousel-img" />
      {images.length > 1 && (
        <>
          <button className="carousel-btn carousel-prev" onClick={prev} aria-label="Previous image">‹</button>
          <button className="carousel-btn carousel-next" onClick={next} aria-label="Next image">›</button>
          <div className="carousel-dots">
            {images.map((_, i) => (
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
    </div>
  )
}
