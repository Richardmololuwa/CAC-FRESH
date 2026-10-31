import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Cross } from "./Ornament.jsx";
import { church } from "../data/site.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/pastor", label: "Head Pastor" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/videos", label: "Watch" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" className="brand" aria-label={church.name}>
          <span className="brand__mark">
            <Cross size={22} />
          </span>
          <span className="brand__name">{church.name}</span>
        </Link>

        <button
          className={`burger ${open ? "burger--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/"} className="nav__link">
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
