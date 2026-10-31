// Hand-drawn icon set: no icon library. All icons inherit currentColor.
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

const I = ({ size, children, ...rest }) => (
  <svg {...base} {...(size ? { width: size, height: size } : {})} {...rest}>
    {children}
  </svg>
);

// Brand mark: a cross rising inside an arch
export const Mark = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden>
    <path d="M6 44V22C6 11.5 14 4 24 4s18 7.5 18 18v22Z" fill="var(--emerald)" />
    <path d="M10.5 41V22.5C10.5 14 16.5 8.5 24 8.5S37.5 14 37.5 22.5V41Z" fill="none" stroke="var(--gold)" strokeWidth="1.2" />
    <path d="M24 15v21M16.5 22.5h15" stroke="var(--gold)" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const Flame = (p) => (
  <I {...p}>
    <path d="M12 3c.5 3-1.5 4.5-3 6.5S6.5 13 7.5 16.2A5 5 0 0 0 12 20a5 5 0 0 0 4.7-5.3c-.2-2-1.4-3-2.2-4.2-.8 1-1.4 1.2-2 1.2 1-2.600.5-5.700-.5-8.700Z" />
    <path d="M12 20c-1.400 0-2.300-1-2.300-2.200 0-1.400 1.300-2.200 2.300-3.600 1 1.400 2.300 2.200 2.300 3.600 0 1.200-.9 2.200-2.300 2.200Z" />
  </I>
);
export const Book = (p) => (
  <I {...p}>
    <path d="M12 6.500C10.300 5.200 7.800 4.700 4.500 5v13c3.300-.3 5.800.2 7.500 1.500 1.700-1.300 4.200-1.800 7.500-1.500V5c-3.300-.3-5.800.2-7.500 1.500Z" />
    <path d="M12 6.500v13" />
  </I>
);
export const Hands = (p) => (
  <I {...p}>
    <path d="M12 21c-3.500-1.500-6-4.200-6-8 0-1.500.5-3 1.500-4.500L10 5.500c.6-.9 2-.4 2 .7V13" />
    <path d="M12 21c3.500-1.500 6-4.200 6-8 0-1.500-.5-3-1.500-4.500L14 5.500c-.6-.9-2-.4-2 .7" />
    <path d="M12 21v-4" />
  </I>
);
export const Spark = (p) => (
  <I {...p}>
    <path d="M12 3v5M12 16v5M3 12h5M16 12h5" />
    <path d="M12 8.500c.4 2 1.500 3.100 3.500 3.500-2 .4-3.100 1.500-3.500 3.500-.4-2-1.500-3.100-3.500-3.500 2-.4 3.100-1.500 3.500-3.500Z" />
  </I>
);
export const Heart = (p) => (
  <I {...p}>
    <path d="M12 20s-7.500-4.500-7.500-10A4.200 4.200 0 0 1 12 7.500 4.200 4.200 0 0 1 19.500 10c0 5.500-7.500 10-7.500 10Z" />
  </I>
);
export const Dove = (p) => (
  <I {...p}>
    <path d="M3 13c3 0 5-1.200 6-3 .5-1 .8-2.500 3-3.500 2.500-1 4.500 0 5.500 1.500L21 8l-1 2c0 4-3 8-8 8-3 0-5.500-1.500-7-4" />
    <path d="M9 10c1 2 3 3.500 6 3.500" />
    <circle cx="16.500" cy="8.800" r=".6" fill="currentColor" />
  </I>
);
export const Pin = (p) => (
  <I {...p}>
    <path d="M12 21s6.500-5.500 6.500-11A6.500 6.500 0 0 0 5.500 10C5.500 15.500 12 21 12 21Z" />
    <circle cx="12" cy="10" r="2.300" />
  </I>
);
export const Phone = (p) => (
  <I {...p}>
    <path d="M6.500 4h3l1.500 4-2 1.300a11 11 0 0 0 5.700 5.700L16 13l4 1.500v3a2 2 0 0 1-2.200 2A15.500 15.500 0 0 1 4.500 6.200 2 2 0 0 1 6.500 4Z" />
  </I>
);
export const Mail = (p) => (
  <I {...p}>
    <rect x="3.500" y="5.500" width="17" height="13" rx="2" />
    <path d="m4 7.500 8 6 8-6" />
  </I>
);
export const Clock = (p) => (
  <I {...p}>
    <circle cx="12" cy="12" r="8.500" />
    <path d="M12 7.500V12l3 2" />
  </I>
);
export const Play = (p) => (
  <I {...p}>
    <path d="M8.500 6.200v11.600a.6.600 0 0 0 .9.500l9-5.800a.6.600 0 0 0 0-1l-9-5.800a.6.600 0 0 0-.9.500Z" fill="currentColor" />
  </I>
);
export const Arrow = (p) => (
  <I {...p}>
    <path d="M4 12h15M13.500 6l6 6-6 6" />
  </I>
);
export const Close = (p) => (
  <I {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </I>
);
export const Leaf = (p) => (
  <I {...p}>
    <path d="M5 19c0-8 5-13 14-14 0 9-5 14-13 14" />
    <path d="M5 19c3-4 6-6.500 9-8" />
  </I>
);

// ── Social (footer) ────────────────────────────────────────────
export const Instagram = (p) => (
  <I {...p}>
    <rect x="3.500" y="3.500" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="3.800" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </I>
);
export const Facebook = (p) => (
  <I {...p}>
    <path d="M13.500 20.500v-7h2.400l.4-2.900h-2.800V8.800c0-.9.300-1.500 1.600-1.500h1.300V4.700c-.3 0-1.100-.1-2-.1-2.200 0-3.700 1.300-3.700 3.800v2.200H8.300v2.900h2.400v7" />
  </I>
);
export const TikTok = (p) => (
  <I {...p}>
    <path d="M14 3.500v10.800a3.800 3.800 0 1 1-3.800-3.800" />
    <path d="M14 3.500c.3 2.500 1.900 4.200 4.500 4.400" />
  </I>
);
export const Youtube = (p) => (
  <I {...p}>
    <rect x="3" y="5.500" width="18" height="13" rx="4" />
    <path d="M10.500 9.500v5l4.200-2.500-4.200-2.500Z" fill="currentColor" />
  </I>
);

export const ICONS = { flame: Flame, book: Book, hands: Hands, spark: Spark, heart: Heart, dove: Dove, leaf: Leaf };
