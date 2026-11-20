
import SEO from "../components/SEO.jsx";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { Rays } from "../components/Ornament.jsx";

const ministries = [
  {
    number: "01",
    name: "Worship Ministry",
    subtitle: "Expressing our love for God",
    image: "/images/ministries/worship.jpg",
    description:
      "The Worship Ministry leads the congregation into heartfelt worship through music, praise, and thanksgiving. It provides an opportunity for gifted individuals to use their talents to glorify God and inspire others.",
    verse: "Psalm 100:2",
  },
  {
    number: "02",
    name: "Youth Ministry",
    subtitle: "Raising a generation for Christ",
    image: "/images/ministries/youth.jpg",
    description:
      "Our Youth Ministry empowers young people to build a strong relationship with God, discover their purpose, develop their gifts, and make positive impacts in their communities.",
    verse: "1 Timothy 4:12",
  },
  {
    number: "03",
    name: "Men Ministry",
    subtitle: "Building godly men and leaders",
    image: "/images/ministries/men.jpg",
    description:
      "The Men Ministry encourages men to grow spiritually, strengthen their families, demonstrate godly character, and become responsible leaders in the church and society.",
    verse: "Joshua 1:9",
  },
  {
    number: "04",
    name: "Women Ministry",
    subtitle: "Growing in faith and purpose",
    image: "/images/ministries/women.jpg",
    description:
      "Our Women Ministry provides an environment where women can grow in faith, encourage one another, develop their God-given potential, and positively influence their families and communities.",
    verse: "Proverbs 31:30",
  },
  {
    number: "05",
    name: "Discipleship Classes",
    subtitle: "Growing deeper in God's Word",
    image: "/images/ministries/Disciples.jpg",
    description:
      "Our Discipleship Classes help believers understand the Scriptures, strengthen their spiritual foundation, and develop a consistent walk with Jesus Christ.",
    verse: "Matthew 28:19–20",
  },
];


export default function Ministries() {
  return (
    <div className="ministries-page">

      <SEO
  title="Our Ministries"
  description="Discover the ministries at CAC Fresh Apostolic Power Ministry. Connect with our Worship, Youth, Men, Women and Discipleship ministries and grow in faith."
  path="/ministries"
/>
      <PageHero
              eyebrow="GROW • SERVE • CONNECT"
              title="Explore Our Ministries"
              text="At Fresh Apostolic Power Ministry, there is a place for
            everyone to grow in faith, discover their gifts, build
            meaningful relationships, and serve God."
            />
      {/* <section className="ministries-hero">
        <div className="container">
          <span className="ministries-eyebrow">
            GROW • SERVE • CONNECT
          </span>

          <h1>
            Discover Your Place
            <br />
            <span>in God's Family</span>
          </h1>

          <p>
            At Fresh Apostolic Power Ministry, there is a place for
            everyone to grow in faith, discover their gifts, build
            meaningful relationships, and serve God.
          </p>

          <a href="#our-ministries" className="btn btn-primary">
            Explore Our Ministries
          </a>
        </div>
      </section> */}

      <section className="ministries-intro section">
        <div className="container">
          <span className="ministries-eyebrow">ONE FAMILY, MANY PURPOSES</span>
          <h2>Growing Together in Christ</h2>
          <p>
            We believe that every believer has a role to play in the
            body of Christ. Our ministries create opportunities to
            connect with others, develop your spiritual gifts, and
            make a difference through service.
          </p>
        </div>
      </section>

      <section
        className="ministries-list section"
        id="our-ministries"
      >
        <div className="container">
          <div className="ministries-grid">
            {ministries.map((ministry) => (
              <article className="ministry-card" key={ministry.number}>
                <div className="ministry-card__image"  data-title={ministry.name} >
                  <img
                    src={ministry.image}
                    alt={`${ministry.name} at Fresh Apostolic Power Ministry`}
                    loading="lazy"
                  />
                  <span className="ministry-card__number">
                    {ministry.number}
                  </span>
                </div>

                <div className="ministry-card__content">
                  <h3>{ministry.name}</h3>
                  <h4>{ministry.subtitle}</h4>

                  <p>{ministry.description}</p>

                  <span className="ministry-card__verse">
                    {ministry.verse}
                  </span>
                </div>
              </article>
            ))}

          </div>
        </div>
      </section>

      <section className="ministries-join section">
        <div className="container ministries-join__inner">
          <span className="ministries-eyebrow">
            YOUR JOURNEY STARTS HERE
          </span>

          <h2>There Is a Place for You Here.</h2>

          <p>
            Whether you are discovering your gifts, looking to grow
            spiritually, or simply hoping to connect with others,
            we would love to welcome you.
          </p>

          <Link to="/contact" className="btn btn-primary">
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  );
}
