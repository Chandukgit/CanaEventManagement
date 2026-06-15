// 1. Imports
import React, { useState, useEffect, useRef } from "react";
import { companyData } from "../data/companyData";

// 2. Dynamic Variables
const footerData = {
  gallery: {
    titleSpan1: "Moments We've ",
    titleSpan2: "Perfected",
    subtitle: "Our Portfolio",
    instagramLink: companyData.socials.find(s => s.name === 'Instagram')?.url || "#",
    instagramLabel: "View Full Portfolio",
    images: [
      { gradient: "linear-gradient(135deg, #00211F, #C9A84C)", label: "Luxury Wedding" },
      { gradient: "linear-gradient(135deg, #003D39, #10B981)", label: "Corporate Gala" },
      { gradient: "linear-gradient(135deg, #00211F, #D4BC7B)", label: "Grand Opening" },
      { gradient: "linear-gradient(135deg, #003D39, #C9A84C)", label: "Elite Birthday" },
      { gradient: "linear-gradient(135deg, #00211F, #10B981)", label: "Award Night" },
      { gradient: "linear-gradient(135deg, #003D39, #D4BC7B)", label: "Fashion Show" },
      { gradient: "linear-gradient(135deg, #00211F, #C9A84C)", label: "Product Launch" },
      { gradient: "linear-gradient(135deg, #003D39, #10B981)", label: "Cultural Fest" }
    ]
  },
  companyBanner: {
    label: "A Unit Of",
    name: companyData.parentCompany,
    icon: "✨"
  },
  footerText: {
    brand: companyData.logoText,
    tagline: companyData.logoSubtext,
    description: "Crafting extraordinary events with passion, precision and unmatched creativity since 2019.",
    copyright: `© ${new Date().getFullYear()} ${companyData.logoText} Event Management. All rights reserved.`,
    credit: "Crafted by Cana Dev Team"
  },
  socialLinks: companyData.socials,
  navLinks: ["Home", "About Us", "Services", "Founder", "Enquiry", "Contact Us"],
  services: ["Wedding Planning", "Corporate Events", "College Fests", "Birthday Events", "Photo Shoots", "Cultural Events"],
  contactInfo: [
    { icon: "📍", text: companyData.address },
    { icon: "📞", text: companyData.phone, href: companyData.phoneLink },
    { icon: "✉️", text: companyData.email, href: companyData.emailLink }
  ]
};

// 3. Component
export default function Footer() {
  const [activeImg, setActiveImg] = useState(2);
  const sectionRef = useRef(null);

  useEffect(() => {
    const t = setInterval(() => {
      setActiveImg(p => (p + 1) % footerData.gallery.images.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-primary pt-20 md:pt-24 overflow-hidden relative">
      {/* ── INSTAGRAM GALLERY SECTION ──────────────────────────── */}
      <section ref={sectionRef} className="relative z-10">

        <div className="text-center mb-12 sm:mb-16 relative z-10 px-4">
          <div className="flex items-center justify-center gap-4 md:gap-6 mb-6">
            <span className="w-12 md:w-16 h-[1px] bg-secondary/50" />
            <span className="text-[10px] sm:text-[12px] tracking-[6px] sm:tracking-[8px] text-secondary uppercase font-bold">
              {footerData.gallery.subtitle}
            </span>
            <span className="w-12 md:w-16 h-[1px] bg-secondary/50" />
          </div>
          <h2 className="font-black text-3xl sm:text-4xl md:text-6xl text-white leading-tight uppercase mb-8 sm:mb-10">
            {footerData.gallery.titleSpan1}{" "}
            <span className="text-gold-gradient">
              {footerData.gallery.titleSpan2}
            </span>
          </h2>
          <a href={footerData.gallery.instagramLink} target="_blank" rel="noreferrer" className="btn-premium inline-block text-xs sm:text-sm">
            {footerData.gallery.instagramLabel}
          </a>
        </div>

        {/* Rotating gallery cards */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 pb-12 sm:pb-16 relative z-0 overflow-hidden px-4">
          {footerData.gallery.images.map((img, i) => {
            const isCenter  = i === activeImg;
            const isAdjacent = Math.abs(i - activeImg) === 1 || (activeImg === 0 && i === footerData.gallery.images.length - 1) || (activeImg === footerData.gallery.images.length - 1 && i === 0);
            const scale = isCenter ? 1.1 : isAdjacent ? 0.9 : 0.75;
            const opacity = isCenter ? 1 : isAdjacent ? 0.6 : 0.25;
            const zIndex = isCenter ? 10 : isAdjacent ? 5 : 1;

            return (
              <div
                key={i}
                onClick={() => setActiveImg(i)}
                style={{
                  width: isCenter ? "min(320px, 70vw)" : "min(240px, 50vw)",
                  height: isCenter ? "min(400px, 90vw)" : "min(300px, 65vw)",
                  background: img.gradient,
                  transform: `scale(${scale})`,
                  opacity,
                  zIndex,
                }}
                className={`flex-shrink-0 cursor-pointer rounded-2xl relative flex items-end transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] border ${
                  isCenter ? "border-secondary shadow-2xl" : "border-secondary/20"
                }`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 sm:gap-4 p-4 text-center">
                  <div className="text-2xl sm:text-4xl text-secondary/50">✨</div>
                  <div className="text-[8px] sm:text-[10px] tracking-[2px] sm:tracking-[4px] text-white/50 uppercase font-bold">{img.label}</div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent rounded-2xl" />

                {/* Label */}
                <div className="relative z-10 w-full text-center py-4 sm:py-6 text-[10px] sm:text-[12px] tracking-[2px] sm:tracking-[3px] font-black text-white uppercase">
                  {img.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 sm:gap-3 pb-16 sm:pb-24">
          {footerData.gallery.images.map((_, i) => (
            <button key={i} onClick={() => setActiveImg(i)} 
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                i === activeImg ? "w-8 sm:w-10 bg-secondary" : "w-2.5 sm:w-3 bg-secondary/20"
              }`} 
              aria-label={`Go to image slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Parent company banner */}
        <div className="border-y border-secondary/20 py-8 sm:py-12 px-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 bg-primary-light/30">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full glass-card flex items-center justify-center text-2xl sm:text-3xl border-secondary/30 animate-float">
            {footerData.companyBanner.icon}
          </div>
          <div className="text-center md:text-left md:border-l md:border-secondary/20 md:pl-8">
            <div className="font-['Cormorant_Garamond'] italic text-base sm:text-lg text-secondary/70 tracking-[2px] sm:tracking-[4px]">
              {footerData.companyBanner.label}
            </div>
            <div className="text-xl sm:text-2xl md:text-4xl font-black text-white tracking-[2px] sm:tracking-[4px] uppercase mt-1">
              {footerData.companyBanner.name}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────── */}
      <footer className="pt-16 sm:pt-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-12 sm:gap-16 pb-16 sm:pb-20">

            {/* Brand column */}
            <div>
              <div className="mb-6 sm:mb-8">
                <div className="text-3xl sm:text-4xl font-black tracking-[6px] sm:tracking-[8px] text-gold-gradient uppercase">
                  {footerData.footerText.brand}
                </div>
                <div className="text-[9px] sm:text-[10px] tracking-[4px] sm:tracking-[6px] text-secondary uppercase mt-2 font-bold opacity-80">
                  {footerData.footerText.tagline}
                </div>
              </div>
              <p className="font-['Cormorant_Garamond'] italic text-lg sm:text-xl text-white/60 leading-relaxed mb-6 sm:mb-10 pr-4">
                "{footerData.footerText.description}"
              </p>
              <div className="flex gap-4">
                {footerData.socialLinks.map(({ icon, label, url }) => (
                  <a key={label} href={url} title={label} target="_blank" rel="noreferrer"
                     className="w-10 h-10 sm:w-12 sm:h-12 rounded-full glass-card flex items-center justify-center text-lg sm:text-xl text-secondary hover:bg-secondary hover:text-primary transition-all duration-300">
                    <span>{icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-[12px] sm:text-[14px] tracking-[3px] sm:tracking-[4px] text-secondary font-bold uppercase mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-secondary/20">
                Explore
              </h4>
              <ul className="flex flex-col gap-3 sm:gap-4">
                {footerData.navLinks.map(link => {
                  const href = link === "Home" ? "/" : link === "About Us" ? "/about" : link === "Services" ? "/what-we-do" : link === "Founder" ? "/founder" : link === "Enquiry" ? "/enquiry" : "/contact";
                  return (
                    <li key={link}>
                      <a href={href} 
                         className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-white/50 hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2 sm:gap-3 group">
                        <span className="w-3 sm:w-4 h-[1px] bg-secondary/30 group-hover:bg-secondary transition-colors" />
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-[12px] sm:text-[14px] tracking-[3px] sm:tracking-[4px] text-secondary font-bold uppercase mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-secondary/20">
                Expertise
              </h4>
              <ul className="flex flex-col gap-3 sm:gap-4">
                {footerData.services.map(svc => (
                  <li key={svc}>
                    <a href="/what-we-do" 
                       className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-white/50 hover:text-secondary hover:pl-2 transition-all duration-300 flex items-center gap-2 sm:gap-3 group">
                      <span className="w-3 sm:w-4 h-[1px] bg-secondary/30 group-hover:bg-secondary transition-colors" />
                      {svc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-[12px] sm:text-[14px] tracking-[3px] sm:tracking-[4px] text-secondary font-bold uppercase mb-6 sm:mb-8 pb-3 sm:pb-4 border-b border-secondary/20">
                Get In Touch
              </h4>
              <div className="flex flex-col gap-6 sm:gap-8">
                {footerData.contactInfo.map(({ icon, text, href }) => (
                  <div key={text} className="flex gap-3 sm:gap-4 items-start group">
                    <span className="text-lg sm:text-xl mt-1 text-secondary animate-float shrink-0">{icon}</span>
                    <div className="min-w-0">
                      {href ? (
                        <a href={href} className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-white/60 hover:text-secondary transition-colors leading-relaxed break-all">
                          {text}
                        </a>
                      ) : (
                        <span className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-white/60 leading-relaxed block">
                          {text}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-secondary/10 py-8 sm:py-10 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <span className="font-['Cormorant_Garamond'] text-base sm:text-lg italic text-white/40 text-center sm:text-left">
              {footerData.footerText.copyright}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[4px] text-secondary font-black uppercase glass-card px-4 py-1.5 sm:px-6 sm:py-2 rounded-full border-secondary/20">
              {footerData.footerText.credit}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}