import { events } from "../data/events.js";
import { church } from "../data/site.js";

export default function UpcomingEvents() {
  const mapLink =
    "https://maps.app.goo.gl/8v5H3YY9oye5shWi6";

  return (
    <section className="events-section" id="events">
      <div className="container">

        <div className="events-heading">
          <span className="eyebrow">Save the Date</span>
          <h2>Upcoming Events</h2>
          <p>
            Join us for our upcoming programmes.
            We look forward to fellowshipping with you.
          </p>
        </div>

        <div className="events-grid">
          {events.map((event) => (
            <article className="event-card" key={event.id}>

              {event.image ? (
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-card__image"
                />
              ) : (
                <div className="event-card__placeholder">
                  <span>CAC FRESH</span>
                  <h3>{event.title}</h3>
                </div>
              )}

              <div className="event-card__content">
                <span className="event-card__date">
                  {event.date}
                </span>

                <h3>{event.title}</h3>

                <p className="event-card__time">
                  {event.time}
                </p>

                <p>{event.description}</p>

                <a
                  href={event.registrationUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--gold"
                >
                  Register Now
                </a>
              </div>

            </article>
          ))}
        </div>

        {/* Event Location */}
        <div className="events-location">
          <div className="events-location__info">
            <span className="eyebrow">Find Us</span>
            <h2>Join Us at CAC Fresh</h2>
            <p>{church.address}</p>

            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="btn btn--gold"
            >
              Get Directions
            </a>
          </div>

          <div className="events-location__map">
            {church.mapEmbed ? (
              <iframe
                src={church.mapEmbed}
                title="CAC Fresh location"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <p>
                Add the Google Maps embed link in
                src/data/site.js to display the map.
              </p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}