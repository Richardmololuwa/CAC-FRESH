import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import { church } from "../data/site.js";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // No backend yet: this opens the visitor's email app with the message filled in.
  // To receive messages directly, connect the form to Formspree / EmailJS later.
  const onSubmit = (e) => {
    e.preventDefault();
    const d = new FormData(e.target);
    const subject = encodeURIComponent(`${d.get("topic")} — ${d.get("name")}`);
    const body = encodeURIComponent(`${d.get("message")}\n\nFrom: ${d.get("name")}\nPhone: ${d.get("phone") || "-"}\nEmail: ${d.get("email")}`);
    window.location.href = `mailto:${church.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We’d love to hear from you"
        text="Questions, prayer requests or testimonies — send us a message."
      />

      <section className="section">
        <div className="container contact">
          <div>
            <span className="eyebrow">Get in touch</span>
            <h2>Visit or reach out</h2>
            <div className="info-list">
              <div><b>Address</b>{church.address}</div>
              <div><b>Phone</b>{church.phone}</div>
              <div><b>Email</b>{church.email}</div>
              <div><b>Sunday Services</b>6:00 AM</div>
            </div>
          </div>

          <form className="form" onSubmit={onSubmit}>
            <div className="form__row">
              <label>Full name<input name="name" required placeholder="Your name" /></label>
              <label>Phone<input name="phone" type="tel" placeholder="Optional" /></label>
            </div>
            <label>Email<input name="email" type="email" required placeholder="you@example.com" /></label>
            <label>
              Topic
              <select name="topic" defaultValue="General enquiry">
                <option>General enquiry</option>
                <option>Prayer request</option>
                <option>Testimony</option>
                <option>Visiting for the first time</option>
              </select>
            </label>
            <label>Message<textarea name="message" required placeholder="How can we help?" /></label>
            <button className="btn btn--gold" type="submit">Send Message</button>
            {sent && <div className="thanks">Thank you! Your email app should open to send this message.</div>}
          </form>
        </div>

        {church.mapEmbed && (
          <div className="container">
            <div className="map"><iframe src={church.mapEmbed} title="Church location" loading="lazy" /></div>
          </div>
        )}
      </section>
    </>
  );
}
