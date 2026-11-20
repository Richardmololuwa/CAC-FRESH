import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { services, church } from "../data/site.js";
import SEO from "../components/SEO.jsx";

export default function Services() {
  return (
    <>
      <SEO
  title="Services"
  description="Join us for worship services at CAC Fresh Apostolic Power District Headquarters. Experience inspiring praise, prayer, and Bible teaching in a welcoming community."
  path="/services"
/>
      <PageHero
        eyebrow="Services"
        title="Gather with us"
        image="/hero/services.jpg"
        text="Every gathering is an opportunity to meet with God. Find a time that suits you."
      />

      <section className="section">
        <div className="container">
          <div className="svc-grid">
            {services.map((s) => (
              <article key={s.name} className={`svc ${s.featured ? "svc--featured" : ""}`}>
                <span className="svc__day">{s.day}</span>
                <h3>{s.name}</h3>
                <span className="svc__time">{s.time}</span>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container center">
          <span className="eyebrow">Find us</span>
          <h2>First time visiting?</h2>
          <p className="lead" style={{ margin: "16px auto 26px" }}>
            Come to {church.address}. Dress comfortably, bring your family, and expect a warm
            welcome from our ushers at the door.
          </p>
          <Link to="/contact" className="btn btn--green">Get Directions</Link>
        </div>
      </section>
    </>
  );
}
