// Custom-drawn social marks (no icon library).

export function InstagramMark() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookMark() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.5-3.2h-3.2V7.9c0-.9.4-1.6 1.7-1.6h1.6V3.5c-.3 0-1.300-.2-2.400-.2-2.500 0-4.100 1.500-4.100 4.200v2.300H7.600V13h2.700v8z" />
    </svg>
  );
}

export function TikTokMark() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M16.600 3c.3 2.300 1.600 3.700 3.900 3.900v3.100c-1.400.1-2.700-.3-3.900-1.100v5.600c0 3.600-2.600 5.700-5.500 5.700-3 0-5.300-2.300-5.300-5.200 0-3.200 2.700-5.500 6-5v3.200c-1.600-.4-2.900.6-2.900 1.900 0 1.100.9 2 2 2 1.200 0 2.200-.8 2.200-2.400V3z" />
    </svg>
  );
}

export function YouTubeMark() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M21.600 7.200a2.500 2.500 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800zM10 15V9l5.200 3z" />
    </svg>
  );
}
