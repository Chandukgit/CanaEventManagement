// 1. Imports
import React, { useState, useEffect, useRef } from "react";
import { companyData } from "../data/companyData";

// Import images
import heroBg1 from "../assets/images/hero_bg_1.png";
import heroBg2 from "../assets/images/hero_bg_2.png";

// 2. Dynamic Variables
const heroData = {
  slides: [
    { image: heroBg1, overlay: "rgba(0, 33, 31, 0.6)" },
    { image: heroBg2, overlay: "rgba(0, 33, 31, 0.5)" },
  ],
  titles: [
    `${companyData.logoText} Events`,
    "Exquisite Weddings",
    "Corporate Elegance",
    "Grand Celebrations",
    "Sophisticated Galas",
    "One Stop Solution"
  ],
  subtitle: "Transforming your vision into extraordinary celebrations with unmatched elegance and precision.",
  eyebrow: "Elite Event Management",
  contactBtn: { label: "Connect with Us", href: companyData.phoneLink },
  enquiryBtn: { label: "Book Consultation", href: "#enquiry" },
  socialLinks: companyData.socials,
  stats: [
    { num: "1200+", label: "Elite Events" },
    { num: "8+", label: "Years of Mastery" },
    { num: "500+", label: "Global Clients" }
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
      }, 600);
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

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-primary flex items-center justify-center pt-20">
      {/* Background Slides */}
      {heroData.slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1500 ease-in-out"
          style={{ opacity: i === slideIndex ? 1 : 0, zIndex: 0 }}
        >
          <div 
            className="w-full h-full scale-110 animate-ken-burns" 
            style={{ 
              backgroundImage: `url(${s.image})`, 
              backgroundSize: "cover", 
              backgroundPosition: "center",
              transform: i === slideIndex ? "scale(1)" : "scale(1.1)",
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
        <div className="glass-card p-8 sm:p-12 md:p-16 lg:p-24 relative overflow-hidden w-full border-none shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent pointer-events-none" />
          
          <div className="mb-6 sm:mb-8 flex items-center justify-center gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <span className="block w-10 sm:w-16 h-[1px] bg-secondary/50" />
            <span className="text-secondary text-xs tracking-[4px] sm:tracking-[8px] uppercase font-bold">
              {heroData.eyebrow}
            </span>
            <span className="block w-10 sm:w-16 h-[1px] bg-secondary/50" />
          </div>

          <div className="overflow-hidden mb-6 sm:mb-8 flex justify-center items-center h-20 sm:h-28 md:h-32 lg:h-40">
            <p
              key={titleIndex}
              className={`font-black text-2xl sm:text-5xl md:text-7xl lg:text-6xl uppercase leading-tight tracking-tight text-gold-gradient ${titleVisible ? "animate-slide-up" : "opacity-0"}`}>
              {heroData.titles[titleIndex]}
            </p>
          </div>

          <p className="text-white/80 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 text-lg sm:text-xl md:text-2xl font-light italic animate-slide-up"
             style={{ fontFamily: "'Cormorant Garamond', serif", animationDelay: "0.6s" }}>
            "{heroData.subtitle}"
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <a href={heroData.contactBtn.href} className="btn-premium w-full sm:w-auto">
              {heroData.contactBtn.label}
            </a>
            <a href={heroData.enquiryBtn.href} className="btn-outline-gold w-full sm:w-auto">
              {heroData.enquiryBtn.label}
            </a>
          </div>

          <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-secondary/20 flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-24 animate-slide-up" style={{ animationDelay: "1s" }}>
            {heroData.stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gold-gradient group-hover:scale-110 transition-transform duration-500">
                  {stat.num}
                </div>
                <div className="text-secondary/80 text-[10px] sm:text-xs tracking-[2px] sm:tracking-[4px] uppercase mt-2 sm:mt-3 font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3 sm:gap-4 glass-card px-6 py-3 sm:px-8 sm:py-4 rounded-full border-secondary/20">
        <div className="w-40 sm:w-64 h-0.5 bg-white/10 overflow-hidden rounded-full">
          <div className="h-full bg-secondary transition-none" style={{ width: `${slideProgress}%` }} />
        </div>
        <div className="flex gap-3 sm:gap-4">
          {heroData.slides.map((_, i) => (
            <button key={i} onClick={() => goToSlide(i)}
              className="transition-all duration-500 rounded-full h-1"
              style={{ width: i === slideIndex ? "32px" : "8px", background: i === slideIndex ? "var(--secondary)" : "rgba(201, 168, 76, 0.2)" }} 
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}