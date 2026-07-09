// top/left are computed from each place's real geographic center
// (equirectangular projection, full -180..180 / -90..90).
const places = [
  { label: 'United States', top: 27.78, left: 25.22, home: true },
  { label: 'Mexico', top: 39.2, left: 22.46 },
  { label: 'Panama', top: 45.01, left: 27.91 },
  { label: 'Brazil', top: 63.08, left: 37.05 },
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
            {p.home ? (
              <svg viewBox="0 0 24 24" className="world-map-home-icon" aria-hidden="true">
                <path d="M12 3 2 12h3v8h6v-5h2v5h6v-8h3z" />
              </svg>
            ) : (
              <span className="world-map-dot" />
            )}
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
