// 1. Imports
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { companyData } from "../data/companyData";
import cemLogo from "../assets/logos/cem_logo.jpeg";

// 2. Dynamic variables
const navbarData = {
  links: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/what-we-do" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Founder", href: "/founder" },
    { label: "Clients", href: "/#clients" },
    { label: "Contact Us", href: "/contact" },
    { label: "Send a Message", href: "/enquiry" },
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

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const handleLinkClick = (href) => {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      const elementId = href.split("#")[1];
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled || menuOpen ? "glass-nav py-3 bg-primary/95 shadow-lg" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={() => handleLinkClick("/")} className="flex items-center gap-3 group">
          <img 
            src={cemLogo} 
            alt="Cana Event Management Logo" 
            className="h-12 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="flex flex-col leading-tight">
            <span
              className="text-lg sm:text-xl font-black tracking-widest uppercase text-gold-gradient"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              CANA
            </span>
            <span className="text-secondary text-[8px] sm:text-[9px] tracking-[3px] uppercase font-light opacity-80 group-hover:opacity-100 transition-opacity">
              Event Management
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {navbarData.links.map((link) => {
            const isHash = link.href.startsWith("/#");
            const isActive = location.pathname === link.href || (isHash && location.pathname === "/");
            return (
              <li key={link.label}>
                {isHash ? (
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`text-sm tracking-widest uppercase font-medium transition-all duration-300 relative group ${
                      isActive ? "text-secondary" : "text-white hover:text-secondary"
                    }`}
                    style={{ fontFamily: "'Cinzel', serif", fontSize: "11px" }}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 rounded-full ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`text-sm tracking-widest uppercase font-medium transition-all duration-300 relative group ${
                      isActive ? "text-secondary" : "text-white hover:text-secondary"
                    }`}
                    style={{ fontFamily: "'Cinzel', serif", fontSize: "11px" }}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 rounded-full ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA Button */}
        <a
          href={navbarData.callToAction.href}
          className="hidden lg:flex items-center gap-2 btn-premium text-xs md:text-sm"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {navbarData.callToAction.label}
        </a>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 z-50 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-secondary transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 lg:hidden transition-all duration-500 bg-primary/98 backdrop-blur-3xl flex items-center justify-center z-40 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-center max-h-[85vh] overflow-y-auto px-4 w-full">
          {navbarData.links.map((link, idx) => {
            const isHash = link.href.startsWith("/#");
            return (
              <li 
                key={link.label} 
                className={`transform transition-all duration-500 w-full ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {isHash ? (
                  <a
                    href={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="transition-colors text-lg tracking-[0.2em] uppercase block w-full py-2 text-white hover:text-secondary"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className={`transition-colors text-lg tracking-[0.2em] uppercase block w-full py-2 ${
                      location.pathname === link.href ? "text-secondary font-bold" : "text-white hover:text-secondary"
                    }`}
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
          <li 
            className={`pt-2 transform transition-all duration-500 ${menuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{ transitionDelay: `${navbarData.links.length * 75}ms` }}
          >
            <a
              href={navbarData.callToAction.href}
              className="btn-premium inline-block px-8 py-3 text-sm"
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
