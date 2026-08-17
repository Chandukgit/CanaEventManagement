// 1. Imports
import React from 'react';
import { Target, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { companyData } from "../data/companyData";
import founderImg from "../assets/images/founder/founder.png";

// 2. Dynamic Variables
const founderData = {
  header: {
    title: "Leadership",
    subtitle: "Meet Our Founder"
  },
  profile: {
    name: "nehamiah_raj",
    role: "Founder (5+ YEARS OF EXPERIENCE)",
    image: founderImg,
    socials: companyData.socials
  },
  biography: {
    quote: '"Events are not just gatherings; they are living, breathing moments of human connection that require both technical precision and artistic soul."',
    storyTitle: "The Journey",
    paragraphs: [
      `With over 5+ years of experience in the creative arts and technical production, Nehamiah Raj established CANA EVENT MANAGEMENT with the belief that "The Power of Production" could transform ordinary spaces into extraordinary memories. Starting with local celebrations and school/college events, Nehamiah's eye for innovation quickly caught the attention of corporate clients.`,
      "Nehamiah's philosophy centers on a client-first, zero-failure policy. Every lighting cue, every catering setup, and every guest experience is personally vetted to guarantee elegance and precision. His leadership style is a unique blend of youthful energy and professional planning standards, ensuring that every event is an unforgettable milestone.",
      "CANA EVENT MANAGEMENT prides itself on turning fragmented ideas into concrete reality. From empty barren lands to top-notch production arenas, Nehamiah Raj has guided the team to deliver premium celebrations across South India."
    ]
  },
  coreValues: [
    {
      title: "Strategic Precision",
      desc: "Meticulous planning that accounts for every variable from logistics to execution.",
      icon: <Target className="w-8 h-8 text-secondary mb-4" />
    },
    {
      title: "Client-focused Approach",
      desc: "Creating deep relationships with our clients to deliver tailored design concepts.",
      icon: <BookOpen className="w-8 h-8 text-secondary mb-4" />
    }
  ],
  cta: {
    title: "Work Directly With Nehamiah",
    desc: "For exclusive weddings, corporate galas, and school & college celebrations.",
    button: "SEND A MESSAGE"
  }
};

// Helper to render social icon
const getSocialIcon = (name) => {
  switch (name.toLowerCase()) {
    case 'instagram':
      return "📸";
    case 'facebook':
      return "👤";
    case 'whatsapp':
      return "💬";
    default:
      return "🔗";
  }
};

// 3. Component
export default function FounderProfile() {
  return (
    <div className="bg-primary min-h-screen font-sans relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-secondary/5 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2 z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent/5 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3 z-0" />

      {/* --- Header --- */}
      <div className="relative z-10 bg-primary-light/40 backdrop-blur-2xl border-b border-secondary/10 pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 text-center shadow-2xl">
        <h1 className="text-[10px] sm:text-[12px] font-black tracking-[4px] sm:tracking-[8px] text-secondary uppercase mb-4 sm:mb-6 flex items-center justify-center gap-3 sm:gap-4">
          <span className="w-8 sm:w-12 h-[1px] bg-secondary/50" />
          {founderData.header.title}
          <span className="w-8 sm:w-12 h-[1px] bg-secondary/50" />
        </h1>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-[6px] sm:tracking-[15px] drop-shadow-2xl">
          {founderData.header.subtitle}
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 xl:gap-32 items-start">
          
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-4 lg:sticky lg:top-40">
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-4 sm:-inset-6 bg-secondary/20 rounded-[2rem] sm:rounded-[3rem] transform -rotate-3 sm:-rotate-6 group-hover:rotate-0 transition-transform duration-1000 ease-out" />
              <div className="absolute -inset-4 sm:-inset-6 bg-secondary/10 rounded-[2rem] sm:rounded-[3rem] transform rotate-3 sm:rotate-6 group-hover:rotate-0 opacity-40 transition-transform duration-1000 ease-out delay-75 shadow-2xl" />
              
              <div className="relative rounded-[1.8rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/5] glass-card border-secondary/10">
                <img 
                  src={founderData.profile.image} 
                  alt="Nehamiah Raj - Founder" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-80" />
              </div>

              {/* Founder Tag */}
              <div className="absolute -bottom-6 right-6 sm:-bottom-8 sm:right-8 glass-card border-secondary/20 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl shadow-2xl flex items-center gap-2 sm:gap-3 backdrop-blur-3xl">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-secondary animate-pulse" />
                <span className="text-[10px] sm:text-[12px] font-black tracking-[3px] sm:tracking-[4px] text-white uppercase">Visionary</span>
              </div>
            </div>
            
            <div className="mt-12 sm:mt-20 text-center lg:text-left animate-reveal">
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-2 sm:mb-3 uppercase tracking-[1px] sm:tracking-[2px]">
                {founderData.profile.name}
              </h3>
              <p className="text-secondary font-black text-[10px] sm:text-[12px] uppercase tracking-[4px] sm:tracking-[6px]">
                {founderData.profile.role}
              </p>
              
              <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mt-8 sm:mt-12">
                {founderData.profile.socials.map((soc, i) => (
                  <a key={i} href={soc.url} target="_blank" rel="noreferrer"
                     className="w-12 h-12 sm:w-14 sm:h-14 glass-card border-secondary/10 flex items-center justify-center text-secondary hover:bg-secondary hover:text-primary hover:-translate-y-2 transition-all duration-500 shadow-2xl">
                    <span>{getSocialIcon(soc.name)}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-8 space-y-16 sm:space-y-24 animate-reveal mt-12 lg:mt-0" style={{ animationDelay: '0.3s' }}>
            
            {/* Quote */}
            <section className="glass-card p-8 sm:p-12 md:p-16 border-secondary/10 shadow-2xl relative overflow-hidden bg-gradient-to-br from-primary-light/40 to-transparent rounded-[2rem] sm:rounded-[3rem]">
              <p className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl md:text-5xl text-white/80 leading-relaxed italic font-light relative z-10">
                "{founderData.biography.quote}"
              </p>
            </section>

            {/* Narrative */}
            <section className="space-y-8 sm:space-y-12">
              <h4 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-[3px] sm:tracking-[5px] flex items-center gap-4 sm:gap-6">
                <span className="w-12 sm:w-16 h-[1px] bg-secondary" />
                {founderData.biography.storyTitle}
              </h4>
              <div className="space-y-6 sm:space-y-10 font-['Cormorant_Garamond'] text-xl sm:text-2xl text-white/50 leading-relaxed italic">
                {founderData.biography.paragraphs.map((p, i) => (
                  <p key={i}>"{p}"</p>
                ))}
              </div>
            </section>

            {/* Core Values */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
              {founderData.coreValues.map((val, i) => (
                <div key={i} className="glass-card p-8 sm:p-10 border-secondary/10 hover:border-secondary/35 hover:-translate-y-2 transition-all duration-500 group bg-primary-light/30 rounded-2xl sm:rounded-[2rem]">
                  <div className="transform group-hover:scale-125 transition-transform duration-500 mb-6 sm:mb-8 text-secondary animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                    {val.icon}
                  </div>
                  <h5 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4 uppercase tracking-[1px] sm:tracking-[2px]">{val.title}</h5>
                  <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl italic text-white/40 leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 sm:mt-24 glass-card p-10 sm:p-16 md:p-20 border-secondary/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 relative overflow-hidden bg-gradient-to-br from-primary-light to-primary rounded-[2rem] sm:rounded-[3rem]">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIwLjUiIGN5PSIwLjUiIHI9IjAuNSIgZmlsbD0icmdiYSgyMDEsMTY4LDc2LDAuMSkiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-20 pointer-events-none" />
              
              <div className="relative z-10 text-center md:text-left">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 text-white tracking-[3px] sm:tracking-[5px] uppercase drop-shadow-2xl">{founderData.cta.title}</h4>
                <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-white/40 italic">"{founderData.cta.desc}"</p>
              </div>
              <a href="/enquiry" className="btn-premium px-8 py-4 sm:px-10 sm:py-6 text-[12px] sm:text-[14px] whitespace-nowrap inline-flex items-center gap-2">
                {founderData.cta.button} <ExternalLink size={18} className="animate-pulse" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}