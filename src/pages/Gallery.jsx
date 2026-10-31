import { useState, useEffect } from "react";
import PageHero from "../components/PageHero.jsx";
import { Rays } from "../components/Ornament.jsx";
import { gallery } from "../data/site.js";

const ratios = ["4 / 5", "1 / 1", "4 / 3", "3 / 4", "1 / 1", "5 / 4"];
const tones = ["a", "b", "c"];

function Art({ item, index }) {
  return (
    <div
      className={`shot__art shot__art--${tones[item.tone % 3]}`}
      style={{ aspectRatio: item.src ? "auto" : ratios[index % ratios.length] }}
    >
      {item.src ? <img src={item.src} alt={item.caption} loading="lazy" /> : <Rays />}
    </div>
  );
}

export default function Gallery() {
  const tags = ["All", ...new Set(gallery.map((g) => g.tag))];
  const [tag, setTag] = useState("All");
  const [active, setActive] = useState(null);

  const shown = gallery
    .map((g, i) => ({ ...g, i }))
    .filter((g) => tag === "All" || g.tag === tag);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments of grace"
        text="A glimpse into worship, fellowship and life together."
      />

      <section className="section">
        <div className="container">
          <div className="filters">
            {tags.map((t) => (
              <button
                key={t}
                className={`chip ${t === tag ? "chip--on" : ""}`}
                onClick={() => setTag(t)}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="masonry">
            {shown.map((g) => (
              <button className="shot" key={g.i} onClick={() => setActive(g.i)}>
                <Art item={g} index={g.i} />
                <div className="shot__cap">
                  <b>{g.caption}</b>
                  <span>{g.tag}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {active !== null && (
        <div className="lightbox" onClick={() => setActive(null)} role="dialog" aria-modal="true">
          <button className="lightbox__x" aria-label="Close" onClick={() => setActive(null)} />
          <div className="lightbox__box" onClick={(e) => e.stopPropagation()}>
            <Art item={{ ...gallery[active], src: gallery[active].src }} index={active} />
            <p className="lightbox__cap">{gallery[active].caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
