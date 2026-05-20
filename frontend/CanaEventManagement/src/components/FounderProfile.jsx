// 1. Imports
import React from 'react';
import { Target, BookOpen, ExternalLink, Sparkles } from 'lucide-react';
import { companyData } from "../data/companyData";

// 2. Dynamic Variables
const founderData = {
  header: {
    title: "Leadership",
    subtitle: "Meet Our Founder"
  },
  profile: {
    name: "Alex J. Cana",
    role: "Chief Visionary & Founder",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    socials: companyData.socials
  },
  biography: {
    quote: '"Events are not just gatherings; they are living, breathing moments of human connection that require both technical precision and artistic soul."',
    storyTitle: "The Journey",
    paragraphs: [
      `With over a decade of experience in the creative arts and technical production, Alex J. Cana established ${companyData.logoText} Events with the belief that "The Power of Production" could transform ordinary spaces into extraordinary memories. Starting with small-scale college festivals, Alex's eye for innovation quickly caught the attention of corporate giants and high-profile clients.`,
      "Alex's philosophy centers on the \"Zero-Failure Policy.\" Every lighting cue, every floral arrangement, and every guest experience is personally vetted through a lens of perfectionism. His leadership style is a unique blend of youthful energy and world-class hospitality standards, fostering a culture where \"Impossible\" is just a starting point for brainstorming.",
      "Beyond business, Alex is a frequent speaker at national event tech summits and is passionate about mentoring the next generation of event architects. He believes that the future of the industry lies in the seamless integration of AI, sustainable materials, and raw human emotion."
    ]
  },
  coreValues: [
    {
      title: "Strategic Precision",
      desc: "Meticulous planning that accounts for every variable from logistics to weather.",
      icon: <Target className="w-8 h-8 text-secondary mb-4" />
    },
    {
      title: "Lifelong Learning",
      desc: "Constantly evolving with global trends to bring international standards to India.",
      icon: <BookOpen className="w-8 h-8 text-secondary mb-4" />
    }
  ],
  milestones: {
    title: "Professional Milestones",
    items: [
      { year: "2014", detail: "Founded Cana Events with a vision to redefine production standards." },
      { year: "2018", detail: "Awarded 'Young Entrepreneur of the Year' in the Event Management category." },
      { year: "2021", detail: "Expanded operations to 15+ states across India, managing 500+ large-scale concerts." },
      { year: "2023", detail: "Pioneered Sustainable Event Production techniques now used across the industry." }
    ]
  },
  cta: {
    title: "Work Directly With Alex",
    desc: "For exclusive weddings and corporate gala events.",
    button: "BOOK A CONSULTATION"
  }
};

// Helper to render social icon
const getSocialIcon = (name) => {
  switch (name.toLowerCase()) {
    case 'instagram':
      return "📸";
    case 'facebook':
      return "👤";
    case 'youtube':
      return "▶";
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
                  alt="Founder" 
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

            {/* Milestones */}
            <section className="pt-16 sm:pt-20 border-t border-secondary/10">
              <h4 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-[3px] sm:tracking-[5px] flex items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
                <span className="w-12 sm:w-16 h-[1px] bg-secondary" />
                {founderData.milestones.title}
              </h4>
              
              <div className="space-y-12 sm:space-y-16 pl-2 sm:pl-4">
                {founderData.milestones.items.map((item, index) => (
                  <div key={index} className="flex gap-8 sm:gap-12 group relative">
                    {index !== founderData.milestones.items.length - 1 && (
                      <div className="absolute left-[7px] top-8 bottom-[-32px] sm:bottom-[-40px] w-[2px] bg-gradient-to-b from-secondary/40 to-transparent" />
                    )}
                    <div className="flex flex-col items-center relative z-10">
                      <div className="w-4 h-4 rounded-full glass-card border-secondary shadow-[0_0_20px_rgba(201,168,76,0.6)] bg-secondary group-hover:scale-150 transition-all duration-500" />
                    </div>
                    <div className="pb-4 transform group-hover:translate-x-4 transition-all duration-500">
                      <span className="text-2xl sm:text-3xl font-black text-gold-gradient tracking-[2px] sm:tracking-[4px]">
                        {item.year}
                      </span>
                      <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-white/60 mt-2 sm:mt-4 italic leading-relaxed">
                        "{item.detail}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA */}
            <div className="mt-16 sm:mt-24 glass-card p-10 sm:p-16 md:p-20 border-secondary/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 relative overflow-hidden bg-gradient-to-br from-primary-light to-primary rounded-[2rem] sm:rounded-[3rem]">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIwLjUiIGN5PSIwLjUiIHI9IjAuNSIgZmlsbD0icmdiYSgyMDEsMTY4LDc2LDAuMSkiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-20 pointer-events-none" />
              
              <div className="relative z-10 text-center md:text-left">
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3 sm:mb-4 text-white tracking-[3px] sm:tracking-[5px] uppercase drop-shadow-2xl">{founderData.cta.title}</h4>
                <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-white/40 italic">"{founderData.cta.desc}"</p>
              </div>
              <a href="#contact" className="btn-premium px-8 py-4 sm:px-10 sm:py-6 text-[12px] sm:text-[14px] whitespace-nowrap inline-flex items-center gap-2">
                {founderData.cta.button} <ExternalLink size={18} className="animate-pulse" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}