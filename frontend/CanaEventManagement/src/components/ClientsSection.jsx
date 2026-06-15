// 1. Imports
import React, { useEffect, useRef, useState } from "react";
import { companyData } from "../data/companyData";

// 2. Dynamic Variables
const clientsData = {
  sectionLabel: "Trust & Legacy",
  heading: { main: "Who", highlight: "Trusts Us" },
  tagline: "Trusted by 300+ organisations across South India & beyond",
  tabs: [
    { id: "clients", label: "Our Clients" },
    { id: "events", label: "Success Events" }
  ],
  clients: [
    { name: "SIMATS", cat: "College", emoji: "🎓" },
    { name: "SSN Engineering", cat: "College", emoji: "🏛️" },
    { name: "Bosch", cat: "Corporate", emoji: "⚙️" },
    { name: "L&T", cat: "Corporate", emoji: "🏗️" },
    { name: "Ramco", cat: "Corporate", emoji: "🏭" },
    { name: "Amazon", cat: "Corporate", emoji: "📦" },
    { name: "Nissan", cat: "Corporate", emoji: "🚗" },
    { name: "VIT University", cat: "College", emoji: "🎓" },
    { name: "Anna University", cat: "College", emoji: "🏫" },
    { name: "Vel Tech", cat: "College", emoji: "🎓" },
    { name: "CSIR-CLRI", cat: "Research", emoji: "🔬" },
    { name: "Sathyabama", cat: "College", emoji: "🎓" },
    { name: "Madha Engg", cat: "College", emoji: "🏫" },
    { name: "Kubota", cat: "Corporate", emoji: "🌾" },
    { name: "Chennai IT", cat: "College", emoji: "💻" },
    { name: "Saveetha Univ", cat: "College", emoji: "🎓" },
  ],
  events: [
    { icon: "💍", title: "Royal Wedding", loc: "Chennai Palace Grounds", year: "2024", tag: "Wedding" },
    { icon: "🎓", title: "AEGON Fest 2024", loc: "Saveetha Engineering", year: "2024", tag: "College Fest" },
    { icon: "🏢", title: "Annual Corp Gala", loc: "ITC Grand Chola", year: "2023", tag: "Corporate" },
    { icon: "📸", title: "Fashion Shoot", loc: "ECR Beachfront Studio", year: "2024", tag: "Photo Shoot" },
    { icon: "🎂", title: "Grand 50th B'day", loc: "Leela Palace Chennai", year: "2024", tag: "Birthday" },
    { icon: "🚀", title: "Product Launch", loc: "World Trade Centre", year: "2023", tag: "Corporate" },
  ]
};

// 3. Component
export default function ClientsSection() {
  const [inView, setInView] = useState(false);
  const [paused, setPaused] = useState(false);
  const [activeTab, setActiveTab] = useState("clients");
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const marqueeItems = [...clientsData.clients, ...clientsData.clients];

  return (
    <section ref={sectionRef} id="clients" className="relative overflow-hidden bg-primary py-20 md:py-32 border-b border-secondary/10">

      {/* Soft Glow Orbs */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-secondary/5 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4 z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-accent/5 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className={`flex items-center justify-center gap-4 md:gap-6 mb-6 transition-all duration-700 ease-out delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="w-12 md:w-16 h-[1px] bg-secondary/50" />
            <span className="text-[10px] sm:text-[12px] tracking-[6px] sm:tracking-[8px] text-secondary font-bold uppercase">{clientsData.sectionLabel}</span>
            <span className="w-12 md:w-16 h-[1px] bg-secondary/50" />
          </div>
          <h2 className={`text-3xl md:text-6xl font-black text-white leading-tight uppercase transition-all duration-700 ease-out delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {clientsData.heading.main}{" "}
            <span className="text-gold-gradient">
              {clientsData.heading.highlight}
            </span>
          </h2>

          {/* Tab switcher */}
          <div className={`inline-flex gap-2 sm:gap-4 mt-8 sm:mt-12 p-1.5 sm:p-2 rounded-full glass-card border-secondary/10 shadow-2xl transition-all duration-700 ease-out delay-300 ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            {clientsData.tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-10 py-3 sm:py-4 rounded-full text-[10px] sm:text-[12px] tracking-[2px] sm:tracking-[4px] uppercase font-black transition-all duration-500 ${
                  activeTab === tab.id 
                    ? "bg-secondary text-primary shadow-xl scale-105" 
                    : "bg-transparent text-secondary/40 hover:text-secondary"
                }`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── CLIENTS TAB ── */}
        {activeTab === "clients" && (
          <div className="animate-[fadeIn_0.5s_ease-out]">
            {/* Marquee Row 1 */}
            <div className="overflow-hidden mb-6 sm:mb-8 relative py-4 sm:py-6" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              <div className="flex gap-4 sm:gap-8 w-max" style={{ animation: `marqueeLeft 50s linear infinite ${paused ? "paused" : "running"}` }}>
                {marqueeItems.map((c, i) => <ClientCard key={i} client={c} />)}
              </div>
              <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-primary via-primary/80 to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-primary via-primary/80 to-transparent pointer-events-none z-10" />
            </div>

            {/* Marquee Row 2 */}
            <div className="overflow-hidden relative py-4 sm:py-6" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              <div className="flex gap-4 sm:gap-8 w-max" style={{ animation: `marqueeRight 55s linear infinite ${paused ? "paused" : "running"}` }}>
                {[...marqueeItems].reverse().map((c, i) => <ClientCard key={i} client={c} />)}
              </div>
              <div className="absolute top-0 left-0 w-16 sm:w-32 h-full bg-gradient-to-r from-primary via-primary/80 to-transparent pointer-events-none z-10" />
              <div className="absolute top-0 right-0 w-16 sm:w-32 h-full bg-gradient-to-l from-primary via-primary/80 to-transparent pointer-events-none z-10" />
            </div>

            {/* Tagline */}
            <p className={`text-center mt-12 sm:mt-20 font-['Cormorant_Garamond'] italic text-xl sm:text-2xl text-white/40 transition-opacity duration-1000 ease-out delay-500 ${inView ? "opacity-100" : "opacity-0"}`}>
              "{clientsData.tagline}"
            </p>
          </div>
        )}

        {/* ── SUCCESS EVENTS TAB ── */}
        {activeTab === "events" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 animate-[fadeIn_0.5s_ease-out]">
            {clientsData.events.map((ev, i) => (
              <EventCard key={i} ev={ev} i={i} inView={inView} />
            ))}
          </div>
        )}

      </div>

      <style>{`
        @keyframes marqueeLeft  { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes marqueeRight { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
        @keyframes fadeIn       { 0%{opacity:0; transform:translateY(20px)} 100%{opacity:1; transform:translateY(0)} }
      `}</style>
    </section>
  );
}

// Subcomponents
function ClientCard({ client }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`min-w-[180px] sm:min-w-[240px] p-6 sm:p-8 glass-card border-secondary/10 flex flex-col items-center gap-2 sm:gap-3 cursor-default shrink-0 transition-all duration-500 ease-out ${
        hov 
          ? "bg-secondary/10 border-secondary -translate-y-2 shadow-2xl scale-105" 
          : "bg-primary-light/40 translate-y-0 scale-100"
      }`}
    >
      <div className={`text-4xl sm:text-5xl mb-2 sm:mb-3 transition-transform duration-500 ${hov ? "scale-125 rotate-6" : "scale-100 rotate-0"}`}>
        {client.emoji}
      </div>
      <div className={`text-[10px] sm:text-[12px] tracking-[2px] sm:tracking-[3px] uppercase text-center font-black transition-colors duration-300 ${
        hov ? "text-secondary" : "text-white/80"
      }`}>
        {client.name}
      </div>
      <div className="font-['Cormorant_Garamond'] text-xs sm:text-sm italic text-white/40 tracking-[1px] sm:tracking-[2px]">
        {client.cat}
      </div>
    </div>
  );
}

function EventCard({ ev, i, inView }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`relative p-8 sm:p-10 glass-card border-secondary/10 transition-all duration-500 ease-out rounded-[2rem] ${
        hov 
          ? "bg-secondary/10 border-secondary shadow-2xl -translate-y-3" 
          : "bg-primary-light/40 translate-y-0"
      }`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? (hov ? "translateY(-12px)" : "translateY(0)") : "translateY(40px)",
        transitionDelay: `${hov ? 0 : i * 0.1}s`
      }}
    >
      {/* Tag badge */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-8 px-4 py-1.5 sm:px-5 sm:py-2 glass-card border-secondary/20 rounded-full text-[8px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-secondary uppercase font-black shadow-lg">
        {ev.tag}
      </div>

      <div className={`text-5xl sm:text-6xl mb-6 sm:mb-8 transition-transform duration-500 ${hov ? "scale-110 drop-shadow-2xl animate-float" : "scale-100"}`}>
        {ev.icon}
      </div>
      <div className="text-xl sm:text-2xl font-black text-white tracking-[1px] sm:tracking-[2px] mb-2 sm:mb-3 uppercase">
        {ev.title}
      </div>
      <div className="font-['Cormorant_Garamond'] italic text-lg sm:text-xl text-white/60 mb-4 sm:mb-6 flex items-center gap-2">
        <span className="text-secondary text-xl sm:text-2xl animate-pulse">📍</span> {ev.loc}
      </div>
      
      <div className="w-full h-[1px] bg-secondary/10 mb-4 sm:mb-6" />
      
      <div className="text-[10px] sm:text-[12px] tracking-[2px] sm:tracking-[4px] text-secondary font-black bg-primary/50 inline-block px-4 py-1.5 sm:px-6 sm:py-2 rounded-full border border-secondary/10">
        {ev.year}
      </div>
    </div>
  );
}