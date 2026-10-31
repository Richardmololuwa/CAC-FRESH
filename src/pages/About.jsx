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
             Founded in 2011 by Prophet Gbolahan Bello Moses, CAC Fresh Apostolic Power Ministry was born out of a passion to see lives transformed through the power of Jesus Christ. What began in rented halls with a small gathering of believers has grown into a thriving ministry dedicated to prayer, worship, biblical teaching, and spiritual transformation.

Inspired by Matthew 18:20, we believe in creating an atmosphere where people can encounter God, grow in their relationship with Christ, and discover His purpose for their lives. From humble beginnings to our present location, God has remained faithful, blessing the ministry with testimonies of healing, answered prayers, restored families, and transformed lives.
            </p>
            <p style={{ color: "var(--muted)" }}>
             Today, our mission remains the same: to bring people to Christ, strengthen families, nurture genuine faith, and raise believers who are firmly grounded in God's Word. At Fresh Apostolic Power Ministry, we welcome everyone, regardless of their background, into a loving family where faith is built, lives are renewed, and everyone has the opportunity to experience a new identity in Christ.
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
