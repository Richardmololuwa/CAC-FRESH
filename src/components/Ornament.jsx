// Hand-drawn SVG marks used instead of a stock icon library.

export function Cross({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <defs>
        <linearGradient id="goldG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#e6c765" />
          <stop offset="1" stopColor="#a8801f" />
        </linearGradient>
      </defs>
      <path
        d="M17 3h6v12h12v6H23v16h-6V21H5v-6h12z"
        fill="url(#goldG)"
      />
    </svg>
  );
}

export function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <span />
      <svg width="22" height="22" viewBox="0 0 24 24">
        <path d="M12 1l2.6 8.4L23 12l-8.4 2.6L12 23l-2.6-8.4L1 12l8.4-2.6z" fill="currentColor" />
      </svg>
      <span />
    </div>
  );
}

export function Rays() {
  return (
    <svg className="rays" viewBox="0 0 400 400" aria-hidden="true">
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="200"
          y1="200"
          x2="200"
          y2="-40"
          stroke="currentColor"
          strokeWidth="1"
          transform={`rotate(${i * 15} 200 200)`}
        />
      ))}
      <circle cx="200" cy="200" r="60" fill="none" stroke="currentColor" />
      <circle cx="200" cy="200" r="110" fill="none" stroke="currentColor" />
    </svg>
  );
}
