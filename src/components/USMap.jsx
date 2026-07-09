import { useState } from 'react'
import usMapSvg from '../assets/us-map.svg?raw'

// Approximate position of Champaign, IL within the map's 959x593 viewBox.
const HOME_POSITION = { top: '42.2%', left: '63.1%' }

const VISITED = new Set(['il', 'ca', 'wa', 'ut', 'in', 'oh', 'pa', 'ny', 'fl', 'co', 'nv', 'ak', 'mi', 'wi'])

export default function USMap() {
  const [tooltip, setTooltip] = useState(null)

  function handleMouseMove(e) {
    const path = e.target.closest?.('path')
    const isVisited = path?.closest('g.state') && [...path.classList].some(c => VISITED.has(c))
    const title = isVisited ? path.querySelector('title')?.textContent : null
    if (!title) {
      setTooltip(null)
      return
    }
    const rect = e.currentTarget.getBoundingClientRect()
    setTooltip({ name: title, x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <>
      <div
        className="us-map"
        role="img"
        aria-label="Map of the United States with Illinois, California, Washington, Utah, Indiana, Ohio, Pennsylvania, New York, Florida, Colorado, Nevada, Alaska, Michigan, and Wisconsin highlighted as visited"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setTooltip(null)}
      >
        <div dangerouslySetInnerHTML={{ __html: usMapSvg }} />
        <div className="us-map-home-pin" style={HOME_POSITION} aria-hidden="true">
          <svg viewBox="0 0 24 24" className="us-map-home-icon">
            <path d="M12 3 2 12h3v8h6v-5h2v5h6v-8h3z" />
          </svg>
        </div>
        {tooltip && (
          <div className="us-map-tooltip" style={{ left: tooltip.x, top: tooltip.y }}>
            {tooltip.name}
          </div>
        )}
      </div>
      <p className="world-map-credit">
        Map:{' '}
        <a href="https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg" target="_blank" rel="noopener noreferrer">
          Heitordp
        </a>
        , public domain (CC0)
      </p>
    </>
  )
}
