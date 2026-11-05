
import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import { church } from "../data/site.js";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const onSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name");
    const email = formData.get("email");
    const topic = formData.get("topic");

    // Web3Forms configuration
    formData.append(
      "access_key",
      "257f334b-5af6-44c9-a095-2404cfa3123a"
    );

    formData.append(
      "subject",
      `New ${topic} — ${name}`
    );

    formData.append("from_name", "CAC Fresh Website");

    try {
      // STEP 1: Send enquiry to church Gmail
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (!result.success) {
        throw new Error("Web3Forms submission failed");
      }

      // STEP 2: Send automatic acknowledgement to visitor
      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbyYIHaCe6VseU1cBhY2NNYNZ4hRrNdq9yZqdx8JZz7D7gcNQkAQwgx2UAJTCxTTAKyD/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify({
              name,
              email,
              topic,
              botcheck: "",
            }),
          }
        );

        console.log("Automatic reply request submitted");

      } catch (autoReplyError) {
        console.error(
          "Automatic reply request failed:",
          autoReplyError
        );
      }

      // STEP 3: Show success message
      setStatus("success");
      form.reset();

    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
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
              <div>
                <b>Address</b>
                {church.address}
              </div>

              <div>
                <b>Phone</b>
                {church.phone}
              </div>

              <div>
                <b>Email</b>
                fapminitry3@gmail.com
              </div>

              <div>
                <b>Sunday Services</b>
                6:00 AM
              </div>
            </div>
          </div>

          <form className="form" onSubmit={onSubmit}>

            <div className="form__row">
              <label>
                Full name
                <input
                  name="name"
                  required
                  placeholder="Your name"
                />
              </label>

              <label>
                Phone
                <input
                  name="phone"
                  type="tel"
                  placeholder="Optional"
                />
              </label>
            </div>

            <label>
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
              />
            </label>

            <label>
              Topic
              <select
                name="topic"
                defaultValue="General enquiry"
              >
                <option>General enquiry</option>
                <option>Prayer request</option>
                <option>Testimony</option>
                <option>Visiting for the first time</option>
              </select>
            </label>

            <label>
              Message
              <textarea
                name="message"
                required
                placeholder="How can we help?"
              />
            </label>

            {/* Spam protection */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex="-1"
              autoComplete="off"
              style={{ display: "none" }}
            />

            <button
              className="btn btn--gold"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading"
                ? "Sending..."
                : "Send Message"}
            </button>

            {status === "success" && (
              <div className="thanks">
                Thank you for contacting CAC Fresh!
                Your message has been received.
                We look forward to connecting with you.
                God bless you!
              </div>
            )}

            {status === "error" && (
              <div className="thanks">
                Sorry, your message could not be sent.
                Please try again or contact us directly by email.
              </div>
            )}

          </form>
        </div>

        {church.mapEmbed && (
  <div className="container">
    <div className="map">
      <iframe
        src={church.mapEmbed}
        title="CAC Fresh Church Location"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>

    <div className="map-directions">
      <a
        href="https://www.google.com/maps/dir/?api=1&destination=6.5898662,3.2545919"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn--gold"
      >
        Get Directions
      </a>
    </div>
  </div>
)}
      </section>
    </>
  );
}
