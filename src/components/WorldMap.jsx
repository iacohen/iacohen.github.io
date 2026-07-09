// top/left are computed from each country's geographic centroid
// (equirectangular projection, full -180..180 / -90..90).
const places = [
  { label: 'United States', top: 27.87, left: 22.68, home: true },
  { label: 'Mexico', top: 36.72, left: 21.51 },
  { label: 'Panama', top: 45.28, left: 27.78 },
  { label: 'Brazil', top: 56.02, left: 35.26 },
]

export default function WorldMap() {
  return (
    <>
      <div className="world-map-wrap">
        <img src="/images/world-map.svg" alt="World map" className="world-map-img" />
        {places.map(p => (
          <button
            key={p.label}
            type="button"
            className={`world-map-pin${p.home ? ' home' : ''}`}
            style={{ top: `${p.top}%`, left: `${p.left}%` }}
            aria-label={p.label}
          >
            <span className="world-map-dot" />
            <span className="world-map-tooltip" aria-hidden="true">{p.label}</span>
          </button>
        ))}
      </div>
      <p className="world-map-credit">
        Map:{' '}
        <a href="https://commons.wikimedia.org/wiki/File:World_location_map_(equirectangular_180).svg" target="_blank" rel="noopener noreferrer">
          TUBS
        </a>
        , licensed under{' '}
        <a href="https://creativecommons.org/licenses/by-sa/3.0" target="_blank" rel="noopener noreferrer">
          CC BY-SA 3.0
        </a>
      </p>
    </>
  )
}
