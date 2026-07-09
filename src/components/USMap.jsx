import usMapSvg from '../assets/us-map.svg?raw'

export default function USMap() {
  return (
    <>
      <div
        className="us-map"
        role="img"
        aria-label="Map of the United States with Illinois, California, Washington, Utah, Indiana, Ohio, Pennsylvania, New York, Florida, Colorado, Nevada, Alaska, Michigan, and Wisconsin highlighted as visited"
        dangerouslySetInnerHTML={{ __html: usMapSvg }}
      />
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
