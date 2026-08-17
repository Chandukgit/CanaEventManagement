// 1. Imports
import React, { useState, useEffect, useRef } from "react";
import { companyData } from "../data/companyData";

// Load all images in src/assets/images/hero dynamically
const heroGlob = import.meta.glob('/src/assets/images/hero/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true, import: 'default' });
const heroImages = Object.values(heroGlob);

// 2. Dynamic Variables
const heroData = {
  slides: heroImages.length > 0 
    ? heroImages.map(img => ({ image: img, overlay: "rgba(0, 22, 20, 0.65)" })) // Increased overlay opacity and added brand green tone
    : [
        { image: "/src/assets/images/hero_bg_1.png", overlay: "rgba(0, 22, 20, 0.65)" },
        { image: "/src/assets/images/hero_bg_2.png", overlay: "rgba(0, 22, 20, 0.65)" }
      ],
  titles: [
    "CANA EVENTS",
    "EXQUISITE WEDDINGS",
    "CORPORATE ELEGANCE",
    "GRAND CELEBRATIONS",
    "ONE STOP SOLUTION"
  ],
  subtitle: "CRAFTING CELEBRATIONS & HARMONY",
  eyebrow: "Elite Event Management",
  contactBtn: { label: "Connect with Us", href: "#contact" },
  enquiryBtn: { label: "Book Consultation", href: "/enquiry" },
  socialLinks: companyData.socials,
  stats: [
    { num: "30+", label: "Events Done" },
    { num: "5+", label: "Years of Experience" },
    { num: "100+", label: "Happy Clients" }
  ],
  timings: {
    titleDuration: 3500,
    slideDuration: 6000
  }
};

// 3. Component
export default function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [titleIndex, setTitleIndex] = useState(0);
  const [titleVisible, setTitleVisible] = useState(true);
  const [slideProgress, setSlideProgress] = useState(0);

  const slideTimer = useRef(null);
  const titleTimer = useRef(null);
  const progressTimer = useRef(null);

  useEffect(() => {
    startProgress();
    slideTimer.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroData.slides.length);
      startProgress();
    }, heroData.timings.slideDuration);
    return () => {
      clearInterval(slideTimer.current);
      clearInterval(progressTimer.current);
    };
  }, []);

  function startProgress() {
    setSlideProgress(0);
    clearInterval(progressTimer.current);
    const step = 100 / (heroData.timings.slideDuration / 50);
    progressTimer.current = setInterval(() => {
      setSlideProgress((p) => {
        if (p >= 100) { clearInterval(progressTimer.current); return 100; }
        return p + step;
      });
    }, 50);
  }

  useEffect(() => {
    titleTimer.current = setInterval(() => {
      setTitleVisible(false);
      setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % heroData.titles.length);
        setTitleVisible(true);
      }, 800); // Allow time for smooth fade out
    }, heroData.timings.titleDuration);
    return () => clearInterval(titleTimer.current);
  }, []);

  const goToSlide = (idx) => {
    setSlideIndex(idx);
    clearInterval(slideTimer.current);
    startProgress();
    slideTimer.current = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % heroData.slides.length);
      startProgress();
    }, heroData.timings.slideDuration);
  };

  const handleCTA = (e, href) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-primary flex items-center justify-center pt-20">
      {/* Background Slides with smooth Dissolve / Fade transition */}
      {heroData.slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1500 ease-in-out"
          style={{ 
            opacity: i === slideIndex ? 1 : 0, 
            zIndex: i === slideIndex ? 1 : 0,
            transitionProperty: "opacity"
          }}
        >
          <div 
            className="w-full h-full" 
            style={{ 
              backgroundImage: `url(${s.image})`, 
              backgroundSize: "cover", 
              backgroundPosition: "center",
              transform: i === slideIndex ? "scale(1.03)" : "scale(1)",
              transition: "transform 6s ease-out"
            }} 
          />
          <div className="absolute inset-0" style={{ background: s.overlay }} />
        </div>
      ))}

      {/* Social Icons Sidebar */}
      <div className="absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-6 hidden md:flex">
        {heroData.socialLinks.map((s, i) => (
          <a key={s.label} href={s.url} title={s.label} target="_blank" rel="noreferrer"
             className="w-12 h-12 flex items-center justify-center rounded-full glass-card hover:bg-secondary hover:text-primary transition-all duration-300 animate-float"
             style={{ animationDelay: `${i * 0.2}s` }}>
            <span className="text-lg">{s.icon}</span>
          </a>
        ))}
        <div className="w-[1px] h-24 bg-gradient-to-b from-secondary to-transparent mx-auto mt-4" />
      </div>

      {/* Main Content */}
      <div className="h-[80vh] relative z-20 flex flex-col items-center justify-center text-center px-4 md:px-6 max-w-7xl mx-auto w-full">
        <div className="p-4 sm:p-8 relative w-full border-none">
          
          {/* Enhanced text container for 100% legibility */}
          <div className="p-6 sm:p-12 max-w-4xl mx-auto">
            
            <div className="mb-4 sm:mb-6 flex items-center justify-center gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <span className="block w-10 sm:w-16 h-[1px] bg-secondary/50" />
              <span className="text-secondary text-xs tracking-[4px] sm:tracking-[8px] uppercase font-bold drop-shadow">
                {heroData.eyebrow}
              </span>
              <span className="block w-10 sm:w-16 h-[1px] bg-secondary/50" />
            </div>

            {/* Smooth Dissolve Title */}
            <div className="mb-4 sm:mb-6 flex justify-center items-center h-16 sm:h-24 md:h-28">
              <p
                key={titleIndex}
                className={`font-black text-2xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-none tracking-tight text-gold-gradient drop-shadow-md transition-opacity duration-700 ease-in-out ${titleVisible ? "opacity-100" : "opacity-0"}`}
              >
                {heroData.titles[titleIndex]}
              </p>
            </div>

            <p className="text-white max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 text-lg sm:text-xl md:text-2xl font-black tracking-widest uppercase animate-slide-up drop-shadow-lg"
               style={{ fontFamily: "'Cinzel', serif", animationDelay: "0.4s" }}>
              {heroData.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-slide-up" style={{ animationDelay: "0.6s" }}>
              <a href={heroData.contactBtn.href} onClick={(e) => handleCTA(e, heroData.contactBtn.href)} className="btn-premium w-full sm:w-auto shadow-lg">
                {heroData.contactBtn.label}
              </a>
              <a href={heroData.enquiryBtn.href} onClick={(e) => handleCTA(e, heroData.enquiryBtn.href)} className="btn-outline-gold w-full sm:w-auto bg-black/40 shadow-lg">
                {heroData.enquiryBtn.label}
              </a>
            </div>

            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-20 animate-slide-up" style={{ animationDelay: "0.8s" }}>
              {heroData.stats.map((stat) => (
                <div key={stat.label} className="text-center group">
                  <div className="text-2xl sm:text-4xl font-black text-gold-gradient group-hover:scale-110 transition-transform duration-500 drop-shadow">
                    {stat.num}
                  </div>
                  <div className="text-secondary/90 text-[9px] sm:text-[11px] tracking-[2px] sm:tracking-[3px] uppercase mt-1.5 sm:mt-2 font-bold drop-shadow">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
          </div>
          
        </div>
      </div>

    </section>
  );
}