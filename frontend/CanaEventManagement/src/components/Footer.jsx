// 1. Imports
import React from "react";
import { companyData } from "../data/companyData";
import instagramReels from "../data/instagramReels";

// 2. Dynamic Variables
const footerData = {
  gallery: {
    titleSpan1: "Movements ",
    titleSpan2: "Preferred",
    subtitle: "Featured Work",
    instagramLink: companyData.socials.find(s => s.name === 'Instagram')?.url || "#",
    instagramLabel: "View on Instagram",
  },
  companyBanner: {
    label: "Organised By",
    name: companyData.parentCompany,
    icon: "✨"
  },
  footerText: {
    brand: companyData.logoText,
    tagline: companyData.logoSubtext,
    description: "Crafting extraordinary events with passion, precision and unmatched creativity.",
    copyright: `© ${new Date().getFullYear()} ${companyData.logoText} Event Management. All rights reserved.`,
    credit: "CRAFTED BY CANA DEV TEAM UNDER CHANDU KILIVETI"
  },
  socialLinks: companyData.socials,
  navLinks: ["Home", "About Us", "Services", "Founder", "Enquiry", "Contact Us"],
  services: ["Wedding Planning", "Corporate Events", "College Fests", "Birthday Events", "Photo Shoots", "Live Streaming"],
  contactInfo: [
    { icon: "📍", text: companyData.address },
    { icon: "📞", text: companyData.phone, href: companyData.phoneLink },
    { icon: "✉️", text: companyData.email, href: companyData.emailLink }
  ]
};

// 3. Component
export default function Footer() {
  return (
    <div className="bg-primary pt-20 md:pt-24 overflow-hidden relative">
      {/* ── INSTAGRAM GALLERY SECTION ──────────────────────────── */}
      <section className="relative z-10">

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
        </div>

        {/* Instagram Reels grid layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-6 mb-16 relative z-10">
          {instagramReels.map((reel) => (
            <div 
              key={reel.id} 
              className="relative w-full overflow-hidden rounded-2xl sm:rounded-[2rem] border border-secondary/15 bg-black shadow-lg flex items-center justify-center aspect-[4/5]"
            >
              <iframe 
                src={reel.embedUrl}
                className="absolute left-1/2 top-1/2 w-full h-full border-none"
                style={{ transform: 'translate(-50%, -52%) scale(1.7)' }}
                scrolling="no"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                title={reel.title}
              />
            </div>
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