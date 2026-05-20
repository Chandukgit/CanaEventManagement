// 1. Imports
import React, { useState, useEffect, useRef } from "react";
import { companyData } from "../data/companyData";

// 2. Dynamic Variables
const statsData = {
  sectionLabel: "Our Numbers",
  heading: { main: "The", highlight: "Numbers", suffix: "Speak" },
  subtitle: "Every milestone is a story of trust, creativity, and flawless execution.",
  tagline: `Trusted by Colleges, Corporates & Families across India`,
  stats: [
    { end: 500, suffix: "+", label: "Events Done", icon: "🎪", desc: "Across India" },
    { end: 10, suffix: "+", label: "Years Experience", icon: "⭐", desc: "Of Excellence" },
    { end: 1000, suffix: "+", label: "Happy Clients", icon: "🤝", desc: "& Counting" },
    { end: 50, suffix: "+", label: "Cities Covered", icon: "🗺️", desc: "Pan India" }
  ]
};

// CountUp hook helper
function useCountUp(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return count;
}

// Card subcomponent
function StatCard({ stat, index, started }) {
  const count = useCountUp(stat.end, 2200, started);
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative p-6 sm:p-12 text-center transition-all duration-500 ease-out cursor-default glass-card border-none rounded-[2rem] ${
        hovered 
          ? "bg-secondary/10 -translate-y-3 shadow-2xl" 
          : "bg-primary-light/40 translate-y-0"
      }`}
      style={{
        opacity: started ? 1 : 0,
        transitionDelay: `${index * 0.12}s`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none rounded-[2rem]" />
      
      {/* Corner accents */}
      <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-[2rem] transition-colors duration-300 ${hovered ? 'border-secondary' : 'border-secondary/20'}`} />
      <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-[2rem] transition-colors duration-300 ${hovered ? 'border-secondary' : 'border-secondary/20'}`} />

      {/* Icon */}
      <div className={`text-4xl sm:text-5xl mb-4 sm:mb-6 inline-block transition-transform duration-500 ${hovered ? "scale-125 rotate-6" : "scale-100 rotate-0"}`}>
        {stat.icon}
      </div>

      {/* Number */}
      <div className="text-4xl sm:text-5xl lg:text-6xl font-black leading-none text-gold-gradient mb-3 sm:mb-4 drop-shadow-2xl">
        {count.toLocaleString()}{stat.suffix}
      </div>

      {/* Label */}
      <div className="text-xs sm:text-sm tracking-[4px] sm:tracking-[6px] text-white uppercase font-bold mb-2 sm:mb-3 group-hover:text-secondary transition-colors">
        {stat.label}
      </div>

      {/* Sub-desc */}
      <div className="font-['Cormorant_Garamond'] text-base sm:text-lg text-white/40 italic tracking-wide">
        {stat.desc}
      </div>
    </div>
  );
}

// 3. Component
export default function StatsSection() {
  const [started, setStarted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="stats" className="relative overflow-hidden bg-primary py-20 md:py-32 border-y border-secondary/10">
      
      {/* Soft Background Gradients */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-20 max-w-7xl mx-auto px-6">

        {/* Section header */}
        <div className={`text-center mb-16 md:mb-24 transition-all duration-1000 ease-out ${started ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
            <span className="block w-12 sm:w-20 h-[1px] bg-secondary/50" />
            <span className="text-[10px] sm:text-[12px] tracking-[6px] sm:tracking-[8px] text-secondary font-bold uppercase">
              {statsData.sectionLabel}
            </span>
            <span className="block w-12 sm:w-20 h-[1px] bg-secondary/50" />
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black text-white leading-tight uppercase">
            {statsData.heading.main}{" "}
            <span className="text-gold-gradient">
              {statsData.heading.highlight}
            </span>
            {" "}{statsData.heading.suffix}
          </h2>
          <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-white/60 italic mt-4 sm:mt-6 max-w-2xl mx-auto">
            "{statsData.subtitle}"
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {statsData.stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} started={started} />
          ))}
        </div>

        {/* Bottom tagline */}
        <div className={`text-center mt-16 md:mt-24 transition-opacity duration-1000 ease-out delay-700 ${started ? "opacity-100" : "opacity-0"}`}>
          <div className="flex items-center justify-center gap-6 sm:gap-8">
            <span className="block flex-1 max-w-[120px] sm:max-w-[200px] h-[1px] bg-secondary/20" />
            <span className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-secondary/60 italic font-light tracking-wider sm:tracking-widest">
              {statsData.tagline}
            </span>
            <span className="block flex-1 max-w-[120px] sm:max-w-[200px] h-[1px] bg-secondary/20" />
          </div>
        </div>

      </div>
    </section>
  );
}