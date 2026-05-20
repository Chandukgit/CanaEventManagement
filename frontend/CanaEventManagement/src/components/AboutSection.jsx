// 1. Imports
import React, { useState, useEffect, useRef } from "react";
import { companyData } from "../data/companyData";

// 2. Dynamic Variables
const aboutData = {
  sectionLabel: "Our Story",
  heading: { main: "About", highlight: companyData.logoText + " Events" },
  paragraphs: [
    "Cana Event Management is a premier event planning and production company rooted in South India. Our innovation, creativity, and attention to detail transform every celebration into a magical experience — be it grand or intimate.",
    "With international-standard hospitality and a team that breathes creativity, we turn your most fragmented idea into a concrete, unforgettable reality. Every detail, every moment — meticulously crafted just for you."
  ],
  pillars: [
    { icon: "⚡", title: "Planning", desc: "Meticulous end-to-end event blueprints" },
    { icon: "💡", title: "Conception", desc: "Transforming raw ideas into vivid themes" },
    { icon: "🎯", title: "Execution", desc: "Flawless on-ground delivery, every time" },
    { icon: "🏆", title: "Production", desc: "World-class staging, lighting & sound" }
  ],
  images: [
    { gradient: "linear-gradient(135deg, #00211F, #C9A84C)", label: "Corporate Events" },
    { gradient: "linear-gradient(135deg, #003D39, #10B981)", label: "Wedding Ceremonies" },
    { gradient: "linear-gradient(135deg, #00211F, #D4BC7B)", label: "College Fests" },
    { gradient: "linear-gradient(135deg, #003D39, #C9A84C)", label: "Photo Shoots" }
  ],
  button: { label: "Discover More", href: "#contact" },
  badgeMessage: "Since 2019"
};

// 3. Component
export default function AboutSection() {
  const [imgIndex, setImgIndex] = useState(0);
  const [imgVisible, setImgVisible] = useState(true);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => {
      setImgVisible(false);
      setTimeout(() => {
        setImgIndex(p => (p + 1) % aboutData.images.length);
        setImgVisible(true);
      }, 700);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-primary py-20 md:py-32">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 rounded-bl-[150px] pointer-events-none" />
      <div className="absolute top-40 left-10 w-64 h-64 bg-secondary/10 blur-3xl rounded-full pointer-events-none animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/10 blur-3xl rounded-full pointer-events-none animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Label */}
        <div className={`flex items-center gap-4 md:gap-6 mb-6 transition-all duration-700 ease-out delay-100 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="block w-12 md:w-16 h-[1px] bg-secondary/50" />
          <span className="text-xs md:text-sm tracking-[6px] md:tracking-[8px] text-secondary font-bold uppercase">
            {aboutData.sectionLabel}
          </span>
        </div>

        {/* Heading */}
        <h2 className={`text-3xl md:text-5xl lg:text-7xl font-black text-white leading-tight mb-12 md:mb-20 transition-all duration-700 ease-out delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {aboutData.heading.main}{" "}
          <span className="text-gold-gradient">
            {aboutData.heading.highlight}
          </span>
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-center">

          {/* LEFT — Text Content */}
          <div className={`transition-all duration-1000 ease-out delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card p-6 sm:p-10 md:p-12 mb-8 sm:mb-12 relative overflow-hidden border-none bg-gradient-to-br from-primary-light to-primary rounded-[2rem]">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
              <p className="font-['Cormorant_Garamond'] text-xl md:text-3xl text-white/80 leading-relaxed italic mb-6 md:mb-8">
                "{aboutData.paragraphs[0]}"
              </p>
              <p className="font-['Cormorant_Garamond'] text-base md:text-xl text-white/60 leading-relaxed">
                {aboutData.paragraphs[1]}
              </p>
            </div>

            {/* Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
              {aboutData.pillars.map((p) => (
                <div key={p.title} 
                     className="glass-card p-6 md:p-8 hover:border-secondary transition-all duration-500 hover:-translate-y-2 group rounded-2xl">
                  <div className="text-3xl md:text-4xl mb-3 md:mb-4 group-hover:scale-110 transition-transform origin-left text-secondary">{p.icon}</div>
                  <div className="text-xs md:text-sm tracking-[2px] md:tracking-[4px] text-white uppercase font-bold mb-2 md:mb-3 group-hover:text-secondary transition-colors">
                    {p.title}
                  </div>
                  <div className="font-['Cormorant_Garamond'] text-base md:text-lg text-white/50 leading-relaxed">
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>

            <a href={aboutData.button.href} className="btn-premium inline-block">
              {aboutData.button.label} 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

          {/* RIGHT — Image Area */}
          <div className={`relative max-w-lg mx-auto lg:max-w-none w-full transition-all duration-1000 ease-out delay-500 ${inView ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-10 rotate-2'}`}>
            
            {/* Background Frames */}
            <div className="absolute inset-0 border-2 border-secondary/20 rounded-[30px] sm:rounded-[40px] rotate-3 scale-105 z-0 transition-transform hover:rotate-6 duration-700" />
            <div className="absolute inset-0 border border-secondary/40 rounded-[30px] sm:rounded-[40px] -rotate-2 scale-100 z-0 opacity-30" />

            {/* Main Image Container */}
            <div className="relative z-10 aspect-[4/3] rounded-[30px] sm:rounded-[40px] overflow-hidden shadow-2xl border-[6px] md:border-[8px] border-primary-light">
              <div 
                className="w-full h-full flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out"
                style={{ background: aboutData.images[imgIndex].gradient, opacity: imgVisible ? 1 : 0 }}
              >
                <div className="text-6xl md:text-8xl mb-4 md:mb-6 opacity-30 text-white animate-pulse">✨</div>
                <div className="text-sm md:text-lg tracking-[4px] md:tracking-[8px] text-white font-black uppercase drop-shadow-2xl">
                  {aboutData.images[imgIndex].label}
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-[10px] md:text-[12px] tracking-[3px] md:tracking-[6px] text-white uppercase glass-card px-4 py-2 md:px-6 md:py-3 rounded-full border-secondary/30">
                {aboutData.images[imgIndex].label}
              </div>
            </div>

            {/* Image Counters */}
            <div className="flex justify-center gap-3 mt-6 md:mt-10 relative z-10">
              {aboutData.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setImgVisible(false); setTimeout(() => { setImgIndex(i); setImgVisible(true); }, 700); }}
                  className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                    i === imgIndex ? "w-10 md:w-12 bg-secondary" : "w-3 md:w-4 bg-secondary/20"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-8 btn-premium px-6 py-4 sm:px-8 sm:py-5 rounded-full animate-bounce text-xs sm:text-sm" style={{ animationDuration: "3s" }}>
              {aboutData.badgeMessage}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}