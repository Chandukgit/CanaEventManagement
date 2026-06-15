// 1. Imports
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { companyData } from "../data/companyData";

// 2. Dynamic variables
const navbarData = {
  logoText: companyData.logoText,
  logoSubtext: companyData.logoSubtext,
  links: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/what-we-do" },
    { label: "Founder", href: "/founder" },
    { label: "Enquiry", href: "/enquiry" },
    { label: "Contact Us", href: "/contact" },
  ],
  callToAction: {
    label: `📞 ${companyData.phone}`,
    href: companyData.phoneLink
  }
};

// 3. Component
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-tight group">
          <span
            className="text-2xl font-black tracking-widest uppercase text-gold-gradient"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            {navbarData.logoText}
          </span>
          <span className="text-secondary text-[10px] tracking-[4px] uppercase font-light opacity-80 group-hover:opacity-100 transition-opacity">
            {navbarData.logoSubtext}
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navbarData.links.map((link) => (
            <li key={link.label}>
              <Link
                to={link.href}
                className={`text-sm tracking-widest uppercase font-medium transition-all duration-300 relative group ${
                  location.pathname === link.href ? "text-secondary" : "text-white hover:text-secondary"
                }`}
                style={{ fontFamily: "'Cinzel', serif", fontSize: "11px" }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 rounded-full ${
                    location.pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href={navbarData.callToAction.href}
          className="hidden md:flex items-center gap-2 btn-premium text-xs md:text-sm"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {navbarData.callToAction.label}
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 z-50 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 md:hidden transition-all duration-500 bg-primary/95 backdrop-blur-3xl flex items-center justify-center ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-center">
          {navbarData.links.map((link, idx) => (
            <li 
              key={link.label} 
              className={`transform transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <Link
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`transition-colors text-xl tracking-[0.2em] uppercase block w-full ${
                  location.pathname === link.href ? "text-secondary font-bold" : "text-white hover:text-secondary"
                }`}
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li 
            className={`pt-4 transform transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{ transitionDelay: `${navbarData.links.length * 100}ms` }}
          >
            <a
              href={navbarData.callToAction.href}
              className="btn-premium inline-block"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              {navbarData.callToAction.label}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
