const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconGear(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 2.8v3M12 18.2v3M21.2 12h-3M5.8 12h-3M18.1 5.9l-2.1 2.1M8 14l-2.1 2.1M18.1 18.1L16 16M8 10 5.9 7.9" />
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
