// Decorative artwork used wherever a real photo hasn't been added yet.
const TONES = [
  ["#0B5D45", "#0E7A5A", "#D4AF5A"], // emerald
  ["#F7F0DD", "#EAD9A6", "#0B5D45"], // cream & gold
  ["#074A37", "#0B5D45", "#E6C877"], // deep emerald
];

export function ArtTile({ tone = 0, label }) {
  const [a, b, c] = TONES[tone % TONES.length];
  const id = `g${tone}`;
  return (
    <svg className="art" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label={label}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={a} />
          <stop offset="1" stopColor={b} />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#${id})`} />
      <g fill="none" stroke={c} strokeWidth="1.2" opacity=".55">
        <circle cx="200" cy="230" r="70" />
        <circle cx="200" cy="230" r="110" />
        <circle cx="200" cy="230" r="150" />
        <circle cx="200" cy="230" r="190" />
      </g>
      <g stroke={c} strokeWidth="6" strokeLinecap="round">
        <path d="M200 175v110M160 205h80" />
      </g>
    </svg>
  );
}

export function Portrait({ photo, name }) {
  if (photo) return <img className="portrait__img" src={photo} alt={name} />;
  const initials = name
    .replace(/^(Rev\.|Pastor|Dr\.)\s*/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
  return (
    <div className="portrait__ph" role="img" aria-label={`Portrait placeholder for ${name}`}>
      <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" aria-hidden>
        <defs>
          <linearGradient id="pp" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#0E7A5A" />
            <stop offset="1" stopColor="#063D2D" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#pp)" />
        <g fill="none" stroke="#D4AF5A" strokeWidth="1" opacity=".4">
          <circle cx="200" cy="240" r="120" />
          <circle cx="200" cy="240" r="170" />
          <circle cx="200" cy="240" r="220" />
        </g>
      </svg>
      <span>{initials}</span>
    </div>
  );
}
