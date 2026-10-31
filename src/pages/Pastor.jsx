import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { Rays } from "../components/Ornament.jsx";
import { pastor } from "../data/site.js";

export default function Pastor() {
  const initial = pastor.name.replace(/^(Pastor|Rev\.?|Dr\.?|Apostle|Bishop)\s+/i, "").charAt(0) || "P";

  return (
    <>
      <PageHero eyebrow={pastor.title} title="Meet our Head Pastor" image="/hero/headpastor.jpg" />

      <section className="section">
        <div className="container split">
          <div className="portrait">
            {pastor.photo ? (
              <img src={pastor.photo} alt={pastor.name} />
            ) : (
              <>
                <Rays />
                <span className="portrait__mono">{initial}</span>
              </>
            )}
          </div>

          <div>
            <span className="eyebrow">{pastor.title}</span>
            <h2>{pastor.name}</h2>
            <p
              style={{
                fontFamily: "var(--serif)",
                fontStyle: "italic",
                fontSize: "1.45rem",
                color: "var(--emerald)",
                margin: "18px 0 22px",
                lineHeight: 1.35,
                borderLeft: "3px solid var(--gold)",
                paddingLeft: 18,
              }}
            >
              “{pastor.quote}”
            </p>
            {pastor.bio.map((p, i) => (
              <p key={i} style={{ color: "var(--muted)" }}>{p}</p>
            ))}

            <ul className="timeline">
              {pastor.milestones.map((m) => (
                <li key={m.text}>
                  <b>{m.year}</b>
                  {m.text}
                </li>
              ))}
            </ul>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 34 }}>
              <Link to="/videos" className="btn btn--green">Hear a Message</Link>
              <Link to="/contact" className="btn btn--outline">Request Prayer</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
