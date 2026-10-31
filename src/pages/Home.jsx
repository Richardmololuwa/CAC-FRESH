import { Link } from "react-router-dom";
import { Rays, Divider, Cross } from "../components/Ornament.jsx";
import { church, pastor, services } from "../data/site.js";

const tiles = [
  { n: "01", title: "About Us", text: "Who we are, what we believe, and the vision that moves us.", to: "/about" },
  { n: "02", title: "Gallery", text: "Moments of worship, fellowship and joy from our church life.", to: "/gallery" },
  { n: "03", title: "Watch", text: "Catch up on sermons and worship wherever you are.", to: "/videos" },
];

export default function Home() {
  const featured = services.slice(0, 3);

  return (
    <>
      <section className="hero" style={{ "--hero-img": "url(/hero/home.jpg)" }}>
        <Rays />
        <div className="container hero__inner">
          <span className="eyebrow eyebrow--gold">Welcome to {church.name}</span>
          <h1>
            Come as you are.<br />
            Leave <em>renewed.</em>
          </h1>
          <p>
            {church.tagline}. Join us this Sunday for worship, the Word, and a family that
            has a seat saved for you.
          </p>
          <div className="hero__cta">
            <Link to="/services" className="btn btn--gold">Plan Your Visit</Link>
            <Link to="/videos" className="btn btn--ghost">Watch Online</Link>
          </div>
          <div className="hero__verse">
            {church.verse}
            <small>{church.verseRef}</small>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container welcome">
          <div>
            <span className="eyebrow">Join us</span>
            <h2>There is a place for you here</h2>
            <Divider />
            <p className="lead">
              Whether this is your first time or you’ve been with us for years, we’d love to
              worship with you. Here’s when we gather.
            </p>
            <Link to="/services" className="btn btn--outline" style={{ marginTop: 26 }}>
              All Services
            </Link>
          </div>
          <div className="times">
            {featured.map((s) => (
              <div className="time-card" key={s.name}>
                <div>
                  <strong>{s.name}</strong>
                  <span>{s.day}</span>
                </div>
                <b>{s.time}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--emerald">
        <div className="container pastor-teaser">
          <div className="portrait">
            {pastor.photo ? (
              <img src={pastor.photo} alt={pastor.name} />
            ) : (
              <>
                <Rays />
                <Cross size={96} />
              </>
            )}
          </div>
          <div>
            <span className="eyebrow eyebrow--gold">{pastor.title}</span>
            <blockquote>“{pastor.quote}”</blockquote>
            <p style={{ margin: "22px 0 28px", color: "#b9d3c6" }}>— {pastor.name}</p>
            <Link to="/pastor" className="btn btn--gold">Meet Our Pastor</Link>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container center">
          <span className="eyebrow">Explore</span>
          <h2>Get to know us</h2>
          <Divider />
          <div className="tiles">
            {tiles.map((t) => (
              <Link to={t.to} className="tile" key={t.to}>
                <span className="tile__num">{t.n}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
                <span className="tile__more">Discover →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cta-band">
          <h2>We’d love to meet you</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            Have a question, a prayer request, or want to know more? Reach out any time.
          </p>
          <div className="hero__cta">
            <Link to="/contact" className="btn btn--green">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
