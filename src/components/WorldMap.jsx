// top/left are computed from each place's real geographic center
// (equirectangular projection, full -180..180 / -90..90).
const places = [
  { label: 'Illinois, USA', top: 27.78, left: 25.22, home: true },
  { label: 'California, USA', top: 29.31, left: 16.87 },
  { label: 'Washington, USA', top: 23.66, left: 16.46 },
  { label: 'Utah, USA', top: 28.13, left: 18.98 },
  { label: 'Indiana, USA', top: 28.5, left: 26.3 }, // nudged south from true center to stay clear of Illinois/Ohio pins
  { label: 'Ohio, USA', top: 28.1, left: 27.4 },
  { label: 'Pennsylvania, USA', top: 28.9, left: 28.3 }, // nudged south/east from true center to stay clear of New York/Ohio pins
  { label: 'New York, USA', top: 27.38, left: 29.44 }, // New York City
  { label: 'Florida, USA', top: 34.09, left: 27.8 },
  { label: 'Colorado, USA', top: 28.34, left: 20.68 },
  { label: 'Nevada, USA', top: 28.15, left: 17.6 },
  { label: 'Alaska, USA', top: 14.41, left: 7.7 },
  { label: 'Michigan, USA', top: 26.5, left: 27.3 },
  { label: 'Wisconsin, USA', top: 25.7, left: 25.5 },
  { label: 'Mexico City, Mexico', top: 39.2, left: 22.46 },
  { label: 'Bahia, Brazil', top: 57.21, left: 39.31 }, // Salvador
  { label: 'São Paulo, Brazil', top: 63.08, left: 37.05 }, // city of São Paulo
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
