// 1. Imports
import React from 'react';
import { 
  Heart, PartyPopper, GraduationCap, Briefcase, Music, Utensils, 
  Camera, Zap, Mic2, MapPin, Globe, Star, ShieldCheck, 
  CheckCircle2, Sparkles, Settings, Users, TrendingUp 
} from 'lucide-react';
import { companyData } from "../data/companyData";

// 2. Dynamic Variables
const whatWeDoData = {
  header: {
    subtitle: "Our Expertise",
    heading: { main: "Everything You Imagine,", highlight: "Perfectly Executed." },
    desc: `From the intimate whisper of a private dinner to the thunderous applause of a stadium concert, ${companyData.logoText} Events provides a spectrum of services designed to dazzle, inspire, and deliver flawless results every single time.`
  },
  eventTypes: [
    { name: "Grand Marriages", desc: "Luxury wedding planning from royal palace themes to intimate destination vows.", icon: <Heart className="w-8 h-8 text-emerald-500" /> },
    { name: "Milestone Birthdays", desc: "Themed celebrations for all ages, featuring bespoke decor and immersive entertainment.", icon: <PartyPopper className="w-8 h-8 text-green-500" /> },
    { name: "College Fests", desc: "High-energy campus festivals including concerts, competitions, and technical symposiums.", icon: <GraduationCap className="w-8 h-8 text-teal-600" /> },
    { name: "Corporate Galas", desc: "Prestigious annual balls and awards nights that reflect your company's elite branding.", icon: <Briefcase className="w-8 h-8 text-slate-700" /> },
    { name: "Live Concerts", desc: "Massive scale production involving sound, lighting, and artist management for thousands.", icon: <Music className="w-8 h-8 text-emerald-600" /> },
    { name: "Product Launches", desc: "Scintillating reveals designed to capture media attention and market buzz instantly.", icon: <Zap className="w-8 h-8 text-yellow-500" /> },
    { name: "Conferences & Summits", desc: "Meticulous logistics for B2B networking, featuring state-of-the-art AV and seating.", icon: <Mic2 className="w-8 h-8 text-cyan-600" /> },
    { name: "Exhibitions & Expos", desc: "Floor management and stall design for industry trade shows and public exhibitions.", icon: <Globe className="w-8 h-8 text-emerald-700" /> },
    { name: "Themed Parties", desc: "Retro, masquerade, or futuristic—we bring any fictional world to life with precision.", icon: <Star className="w-8 h-8 text-indigo-500" /> },
    { name: "Catering Showcases", desc: "Gourmet culinary experiences ranging from traditional feasts to modern fusion buffets.", icon: <Utensils className="w-8 h-8 text-orange-500" /> },
    { name: "Fashion Shows", desc: "Runway production, backstage management, and high-fashion lighting choreography.", icon: <Camera className="w-8 h-8 text-pink-500" /> },
    { name: "Award Ceremonies", desc: "Honoring excellence with red carpet entries and flawless stage coordination.", icon: <ShieldCheck className="w-8 h-8 text-red-500" /> },
    { name: "Workshops & Seminars", desc: "Productive environments for learning, equipped with interactive digital tools.", icon: <Settings className="w-8 h-8 text-gray-500" /> },
    { name: "Alumni Meets", desc: "Nostalgic gatherings for educational institutions with a focus on connection.", icon: <Users className="w-8 h-8 text-sky-500" /> },
    { name: "Roadshows", desc: "Mobile marketing events that take your brand message across multiple cities.", icon: <MapPin className="w-8 h-8 text-green-600" /> },
    { name: "Charity Fundraisers", desc: "Impactful events that maximize donations through storytelling and gala auctions.", icon: <Heart className="w-8 h-8 text-rose-400" /> },
    { name: "Team Building Retreats", desc: "Experiential outdoor and indoor activities designed to boost employee morale.", icon: <TrendingUp className="w-8 h-8 text-lime-600" /> },
    { name: "Festival Celebrations", desc: "Culturally rich decorations and events for Diwali, Christmas, Holi, and more.", icon: <Sparkles className="w-8 h-8 text-yellow-400" /> },
    { name: "Press Conferences", desc: "Strategic setups for media interactions, ensuring your message is heard clearly.", icon: <Mic2 className="w-8 h-8 text-blue-400" /> },
    { name: "Private Dinners", desc: "Exclusive, ultra-private dining experiences for VIPs and high-net-worth individuals.", icon: <Utensils className="w-8 h-8 text-stone-600" /> },
  ],
  process: {
    heading: "The Power of Production",
    desc: "We believe that a successful event is 90% preparation and 10% magic. Here is our systematic approach to turning your barren land into an arena.",
    button: "START YOUR PROJECT",
    steps: [
      { title: "Conceptualization", desc: "We begin by understanding your 'Why'. We draft initial mood boards, color palettes, and thematic directions that align with your vision.", step: "01" },
      { title: "Strategic Planning", desc: "Detailed blueprints including floor plans, 3D renders, and minute-by-minute run sheets are developed by our expert planners.", step: "02" },
      { title: "Budget Optimization", desc: "We provide pragmatic financial solutions, ensuring you get the 'WOW' factor without unnecessary overspending through our vendor network.", step: "03" },
      { title: "Production & Build", desc: "Our in-house production team builds the set from scratch, handling everything from structural safety to aesthetic finishing.", step: "04" },
      { title: "On-Site Execution", desc: "The 'Power of Production' in action. Our floor managers ensure every cue is met and every guest is treated with world-class hospitality.", step: "05" },
      { title: "Post-Event Analysis", desc: "We don't leave when the lights go out. We provide feedback reports, media assets, and debriefing to measure event success.", step: "06" }
    ]
  }
};

// 3. Component
export default function WhatWeDo() {
  return (
    <section className="bg-primary min-h-screen pt-32 sm:pt-40 pb-16 sm:pb-24 relative overflow-hidden font-sans">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-secondary/10 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2 z-0" />
      <div className="absolute top-1/2 left-0 w-[250px] sm:w-[600px] h-[250px] sm:h-[600px] bg-secondary/5 rounded-full blur-[50px] sm:blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* --- Section Header --- */}
        <div className="text-center mb-16 md:mb-24 max-w-4xl mx-auto">
          <h4 className="text-xs sm:text-sm font-bold tracking-[6px] sm:tracking-[8px] text-secondary uppercase mb-6 sm:mb-8 flex items-center justify-center gap-3 sm:gap-4 animate-slide-up">
            <span className="w-12 sm:w-16 h-[1px] bg-secondary/50" />
            {whatWeDoData.header.subtitle}
            <span className="w-12 sm:w-16 h-[1px] bg-secondary/50" />
          </h4>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white mb-6 sm:mb-8 leading-tight tracking-wider uppercase animate-slide-up">
            {whatWeDoData.header.heading.main} <br />
            <span className="text-gold-gradient">
              {whatWeDoData.header.heading.highlight}
            </span>
          </h2>
          <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-white/70 italic leading-relaxed animate-slide-up px-4">
            "{whatWeDoData.header.desc}"
          </p>
        </div>

        {/* --- 20-Event Grid (Glassmorphism Cards) --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-20 sm:mb-32">
          {whatWeDoData.eventTypes.map((event, index) => (
            <div key={index} 
                 className="group p-6 sm:p-8 glass-card hover:border-secondary transition-all duration-500 hover:-translate-y-2 rounded-2xl">
              <div className="mb-6 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-400">
                {React.cloneElement(event.icon, { className: "w-7 h-7 sm:w-8 sm:h-8 text-secondary" })}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 group-hover:text-secondary transition-colors uppercase tracking-wider sm:tracking-widest">
                {event.name}
              </h3>
              <p className="font-['Cormorant_Garamond'] text-base sm:text-lg text-white/60 italic leading-relaxed">
                {event.desc}
              </p>
            </div>
          ))}
        </div>

        {/* --- The Process / How We Work --- */}
        <div className="glass-card p-8 sm:p-12 md:p-20 text-white shadow-2xl relative overflow-hidden border-none bg-gradient-to-br from-primary-light to-primary rounded-[2rem] sm:rounded-[3rem]">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 sm:mb-24 gap-6 sm:gap-8 border-b border-secondary/20 pb-8 sm:pb-12">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 tracking-wide sm:tracking-widest uppercase text-gold-gradient">
                {whatWeDoData.process.heading}
              </h2>
              <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-white/70 italic font-light">
                {whatWeDoData.process.desc}
              </p>
            </div>
            <a href="#contact" className="btn-premium whitespace-nowrap w-full sm:w-auto text-center inline-block">
              {whatWeDoData.process.button}
            </a>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 sm:gap-y-20 gap-x-12 sm:gap-x-16">
            {whatWeDoData.process.steps.map((proc, index) => (
              <div key={index} className="relative pl-8 sm:pl-10 group">
                {/* Big Background Number */}
                <span className="absolute -left-4 -top-8 sm:-left-6 sm:-top-10 font-['Cinzel'] text-7xl sm:text-8xl font-black text-secondary/10 group-hover:text-secondary/20 transition-colors duration-500 select-none">
                  {proc.step}
                </span>
                
                <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 flex items-center gap-2.5 sm:gap-3 text-white uppercase tracking-wider sm:tracking-widest relative">
                  <span className="bg-secondary/10 p-1 sm:p-1.5 rounded-full backdrop-blur-sm border border-secondary/30">
                    <CheckCircle2 className="text-secondary w-4.5 h-4.5 sm:w-5 sm:h-5" />
                  </span>
                  {proc.title}
                </h4>
                
                <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-white/60 leading-relaxed italic relative">
                  {proc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}