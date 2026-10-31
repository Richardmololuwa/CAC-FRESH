import PageHero from "../components/PageHero.jsx";
import { Divider } from "../components/Ornament.jsx";
import { church, values } from "../data/site.js";

const beliefs = [
  "One God in three persons: Father, Son and Holy Spirit",
  "The Bible as the inspired, authoritative Word of God",
  "Salvation by grace through faith in Jesus Christ",
  "The baptism and gifts of the Holy Spirit",
  "The power of prayer and the local church family",
  "The return of Christ and the hope of eternal life",
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Our story & our faith"
        image="/hero/about.jpg"
        text={`${church.name} is a community of believers who love God and love people.`}
      />

      <section className="section">
        <div className="container split">
          <div>
            <span className="eyebrow">Who we are</span>
            <h2>A church that feels like family</h2>
            <Divider />
            <p className="lead">
              Tell your church’s story here — when it began, how it grew, and what God has done
              along the way.
            </p>
            <p style={{ color: "var(--muted)" }}>
              We exist to lead people into a growing relationship with Jesus Christ, to build
              strong families, and to serve our community with the love of God. Replace this
              text with your own history and vision in <code>src/pages/About.jsx</code>.
            </p>
          </div>
          <div className="stat-row" style={{ background: "var(--emerald-deep)", padding: "44px 24px", borderRadius: 14, boxShadow: "0 0 0 2px var(--gold)", outline: "6px solid var(--ivory)", outlineOffset: -1 }}>
            <div className="stat"><strong>20+</strong><span>Years of grace</span></div>
            <div className="stat"><strong>500+</strong><span>Members</span></div>
            <div className="stat"><strong>12</strong><span>Ministries</span></div>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="center">
            <span className="eyebrow">What we hold dear</span>
            <h2>Our core values</h2>
            <Divider />
          </div>
          <div className="values">
            {values.map((v) => (
              <div className="value" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">What we believe</span>
          <h2>Our statement of faith</h2>
          <ul className="creed">
            {beliefs.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
