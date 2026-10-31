import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import { Rays } from "../components/Ornament.jsx";
import { videos, socials } from "../data/site.js";

function VideoCard({ v }) {
  const [playing, setPlaying] = useState(false);
  const [thumbOk, setThumbOk] = useState(true);

  const frame = playing ? (
    <div className="video__frame">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0`}
        title={v.title}
        allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  ) : v.id ? (
    <button className="video__frame" onClick={() => setPlaying(true)} aria-label={`Play ${v.title}`}>
      <Rays />
      {thumbOk && (
        <img
          src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          onError={() => setThumbOk(false)}
        />
      )}
      <span className="play" />
    </button>
  ) : (
    <a className="video__frame" href={socials.youtube} target="_blank" rel="noreferrer" aria-label="Open our YouTube channel">
      <Rays />
      <span className="play" />
    </a>
  );

  return (
    <article className="video">
      {frame}
      <div className="video__info">
        <span>{v.date}</span>
        <h3>{v.title}</h3>
      </div>
    </article>
  );
}

export default function Videos() {
  return (
    <>
      <PageHero
        eyebrow="Watch"
        title="Messages & worship"
        text="Missed a service? Catch up on sermons, worship and highlights from our YouTube channel."
      />

      <section className="section">
        <div className="container">
          <div className="video-grid">
            {videos.map((v) => (
              <VideoCard key={v.title} v={v} />
            ))}
          </div>

          <div className="center" style={{ marginTop: 52 }}>
            <a className="btn btn--green" href={socials.youtube} target="_blank" rel="noreferrer">
              Visit Our YouTube Channel
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
