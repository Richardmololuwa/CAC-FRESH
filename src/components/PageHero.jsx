import { Rays } from "./Ornament.jsx";

export default function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="pagehero" style={image ? { "--hero-img": `url(${image})` } : undefined}>
      <Rays />
      <div className="container pagehero__inner">
        <span className="eyebrow eyebrow--gold">{eyebrow}</span>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
