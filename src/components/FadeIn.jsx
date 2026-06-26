import { useEffect, useRef } from 'react'

export default function FadeIn({ as: Tag = 'div', delay = 0, className = '', style = {}, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`fade-in${className ? ` ${className}` : ''}`}
      style={delay ? { '--delay': `${delay}s`, ...style } : style}
    >
      {children}
    </Tag>
  )
}
