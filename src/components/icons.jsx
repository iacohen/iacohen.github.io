const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconLightbulb(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3a6 6 0 0 0-3.2 11.1c.7.5 1.2 1.3 1.2 2.2v.2h4v-.2c0-.9.5-1.7 1.2-2.2A6 6 0 0 0 12 3z" />
      <path d="M9.5 19.5h5M10.3 21.5h3.4" />
    </svg>
  )
}

export function IconBriefcase(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="7.5" width="18" height="12" rx="1.8" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.5h18" />
    </svg>
  )
}

export function IconCompass(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.2 8.8 13 13l-4.2 2.2L11 11z" strokeLinejoin="round" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="1.8" />
      <path d="m4 6.5 8 6.2 8-6.2" />
    </svg>
  )
}

export function IconMountain(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 19 9 8.5l3 4.5 2.5-3.5L21.5 19z" strokeLinejoin="round" />
    </svg>
  )
}

export function IconMusicNote(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="8.5" cy="18" r="2.8" />
      <circle cx="19" cy="14.5" r="2.8" />
      <path d="M11.3 18V5.5L21.8 3v11.5" />
    </svg>
  )
}

export function IconPaintbrush(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21v-4a4 4 0 1 1 4 4h-4" />
      <path d="M21 3a16 16 0 0 0-12.8 10.2" />
      <path d="M21 3a16 16 0 0 1-10.2 12.8" />
      <path d="M10.6 9a9 9 0 0 1 4.4 4.4" />
    </svg>
  )
}

export function IconWave(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2 9.5c1.8-1.8 3.6-1.8 5.4 0s3.6 1.8 5.4 0 3.6-1.8 5.4 0 3.6 1.8 5.4 0" />
      <path d="M2 15.5c1.8-1.8 3.6-1.8 5.4 0s3.6 1.8 5.4 0 3.6-1.8 5.4 0 3.6 1.8 5.4 0" />
    </svg>
  )
}
