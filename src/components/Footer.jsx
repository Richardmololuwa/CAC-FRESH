import { Link } from "react-router-dom";
import { Cross } from "./Ornament.jsx";
import { InstagramMark, FacebookMark, TikTokMark, YouTubeMark } from "./SocialIcons.jsx";
import { church, socials } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <div className="brand brand--light">
            <span className="brand__mark">
              <Cross size={22} />
            </span>
            <span className="brand__name">{church.name}</span>
          </div>
          <p className="footer__text">{church.tagline}.</p>
          <div className="socials">
            <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramMark />
            </a>
            <a href={socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookMark />
            </a>
            <a href={socials.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok">
              <TikTokMark />
            </a>
            <a href={socials.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
              <YouTubeMark />
            </a>
          </div>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/pastor">Head Pastor</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/videos">Watch</Link></li>
          </ul>
        </div>

        <div>
          <h4>Visit Us</h4>
          <ul>
            <li>{church.address}</li>
            <li>Sundays · 8:00 AM &amp; 10:30 AM</li>
            <li>{church.phone}</li>
            <li>{church.email}</li>
          </ul>
        </div>
      </div>
      <div className="footer__base">
        <div className="container">
          © {new Date().getFullYear()} {church.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
