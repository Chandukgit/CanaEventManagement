// 1. Imports
import React from 'react';
import { Award, Target, Eye, Calendar, Heart, Star, Send } from 'lucide-react';
import { companyData } from "../data/companyData";

// 2. Dynamic Variables
const aboutData = {
  header: {
    title: "About Us",
    breadcrumb: "Home / About Us"
  },
  socials: companyData.socials,
  intro: {
    subheading: `About ${companyData.logoText} Events`,
    heading: "An Event Management And Event Production Company",
    paragraphs: [
      `${companyData.logoText} Events is a premier Event Management and Event Production Company. One of our key strengths is Innovation, which, coupled with attention to creativeness and unique ideas in different dimensions, helps in creating a magical experience for you. We have successfully orchestrated over 1000+ events across the region, concentrating on every need and occasion, be it big or small.`,
      "Our hospitality and services match international standards, allowing us to give concreteness to even the most fragmented piece of an idea or concept. By giving meticulous attention to the minute details provided by our clients, we offer the most reliable and pragmatic solutions in the industry.",
      "We truly believe in excellence, which drives us to deliver top-class experiences at your doorstep. Our team of highly experienced, world-class, and youthful professionals can turn any vision into a scintillating outcome. We don't just follow trends; we set them."
    ],
    buttonText: "CONTACT US",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=800",
    badge: { value: "10+", label: "Years of Magic" }
  },
  stats: [
    { label: "Events Done", value: "100+", icon: <Calendar className="w-8 h-8" /> },
    { label: "Years Of Experience", value: "7+", icon: <Award className="w-8 h-8" /> },
    { label: "Happy Clients", value: "1,000+", icon: <Calendar className="w-8 h-8" /> }, // Fallback to calendar icon for similarity or import standard
    { label: "Expert Professionals", value: "50+", icon: <Heart className="w-8 h-8" /> },
  ],
  pillars: [
    {
      title: "Our Style",
      icon: <Star size={24} />,
      desc: `"${companyData.logoText}: Illuminating Your Dreams with Expertise and Innovation. Our unwavering commitment has established us as a reliable partner. We are dedicated to pushing boundaries through advanced techniques and mastering craftsmanship."`,
      tag: '" THE POWER OF PRODUCTION "'
    },
    {
      title: "Mission",
      icon: <Target size={24} />,
      desc: "We believe in the transformative power of events. We are dedicated to creating unforgettable experiences that exceed expectations. At our core is an unwavering passion for every unique opportunity to build relationships.",
      tag: '" THE POWER OF PRODUCTION "'
    },
    {
      title: "Vision",
      icon: <Eye size={24} />,
      desc: "We take pride in delivering top-class, innovative shows that dazzle. We take planning to the next level with a holistic approach, from venue collaborations to timely deliverables that last a lifetime.",
      tag: '" THE POWER OF PRODUCTION "'
    }
  ],
  connect: {
    title: "Connect With Us",
    desc: "Turn your event dreams into reality. We are well-experienced in creating spaces from scratch—from empty barren land to top-notch event arenas. Let’s start planning your unforgettable event together.",
    btnPrimary: "SEND A MESSAGE",
    btnSecondary: "FOLLOW ON INSTAGRAM"
  }
};

// 3. Component
export default function AboutUs() {
  return (
    <div className="bg-primary min-h-screen font-sans relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-secondary/5 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3 z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-accent/5 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3 z-0" />

      {/* --- Breadcrumb Header --- */}
      <div className="relative z-10 bg-primary-light/40 backdrop-blur-2xl border-b border-secondary/10 pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 text-center shadow-2xl">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-[6px] sm:tracking-[15px] mb-4 sm:mb-6 text-white drop-shadow-2xl">
          {aboutData.header.title}
        </h1>
        <div className="flex items-center justify-center gap-3 sm:gap-6">
          <span className="w-8 sm:w-12 h-[1px] bg-secondary/50" />
          <p className="text-[10px] sm:text-[12px] font-black tracking-[4px] sm:tracking-[8px] text-secondary uppercase">
            {aboutData.header.breadcrumb}
          </p>
          <span className="w-8 sm:w-12 h-[1px] bg-secondary/50" />
        </div>
        <div className="flex justify-center gap-6 sm:gap-8 mt-8 sm:mt-12">
          {aboutData.socials.map((soc, i) => (
            <a key={i} href={soc.url} target="_blank" rel="noreferrer" className="text-white/60 hover:text-secondary transition-all duration-500 hover:-translate-y-2 text-sm sm:text-base">
              <span>{soc.icon}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-32">
        
        {/* --- Main Introduction Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24 sm:mb-40">
          <div className="animate-reveal">
            <h4 className="text-[10px] sm:text-[12px] font-black tracking-[4px] sm:tracking-[6px] text-secondary uppercase mb-4 sm:mb-6 flex items-center gap-3 sm:gap-4">
              <span className="w-8 sm:w-12 h-[1px] bg-secondary" />
              {aboutData.intro.subheading}
            </h4>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 sm:mb-10 leading-tight text-white uppercase tracking-[1px] sm:tracking-[2px]">
              {aboutData.intro.heading.split(' And ')[0]} <br />
              <span className="text-gold-gradient">
                And {aboutData.intro.heading.split(' And ')[1]}
              </span>
            </h2>
            <div className="space-y-6 sm:space-y-8 text-white/60 leading-relaxed font-['Cormorant_Garamond'] text-xl sm:text-2xl md:text-3xl italic">
              {aboutData.intro.paragraphs.map((p, i) => (
                <p key={i}>"{p}"</p>
              ))}
            </div>
            <a href="#contact" className="btn-premium mt-8 sm:mt-12 px-10 sm:px-12 py-4 sm:py-6 text-[12px] sm:text-[14px] inline-flex items-center gap-2">
              {aboutData.intro.buttonText} <Send size={16} className="animate-pulse" />
            </a>
          </div>
          
          <div className="relative animate-reveal mt-10 lg:mt-0" style={{ animationDelay: '0.3s' }}>
            <div className="w-full aspect-[4/5] glass-card border-secondary/10 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-2xl relative">
              <img 
                src={aboutData.intro.image} 
                alt="Event Production" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 sm:-bottom-12 sm:-left-12 glass-card border-secondary/20 p-6 sm:p-12 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl backdrop-blur-3xl bg-primary-light/60">
              <p className="text-4xl sm:text-7xl font-black text-gold-gradient mb-1 sm:mb-2 animate-pulse">
                {aboutData.intro.badge.value}
              </p>
              <p className="text-[9px] sm:text-[12px] font-black tracking-[2px] sm:tracking-[4px] uppercase text-white/80">
                {aboutData.intro.badge.label}
              </p>
            </div>
          </div>
        </div>

        {/* --- Stats Counter --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 py-10 sm:py-20 mb-24 sm:mb-40 glass-card border-secondary/10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl px-6 sm:px-12 bg-gradient-to-br from-primary-light/40 to-transparent">
          {aboutData.stats.map((stat, index) => (
            <div key={index} className="text-center group p-4 sm:p-6">
              <div className="flex justify-center mb-4 sm:mb-8 text-secondary group-hover:scale-125 group-hover:drop-shadow-[0_0_15px_rgba(201,168,76,0.5)] transition-all duration-500 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                {stat.icon}
              </div>
              <h3 className="text-3xl sm:text-5xl font-black mb-2 sm:mb-4 text-white uppercase tracking-[1px] sm:tracking-[2px]">{stat.value}</h3>
              <p className="text-secondary/60 uppercase text-[10px] sm:text-[12px] font-black tracking-[2px] sm:tracking-[4px]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* --- Mission, Vision, Style Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-24 sm:mb-40">
          {aboutData.pillars.map((pillar, index) => (
            <div key={index} className="glass-card p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] border-secondary/10 shadow-2xl hover:border-secondary/30 hover:-translate-y-4 transition-all duration-500 group bg-primary-light/30">
              <div className="w-16 h-16 sm:w-20 sm:w-20 rounded-[1.2rem] sm:rounded-[1.5rem] flex items-center justify-center text-secondary mb-6 sm:mb-10 glass-card border-secondary/20 group-hover:bg-secondary group-hover:text-primary transition-all duration-500 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                {pillar.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-white uppercase tracking-[1px] sm:tracking-[2px]">{pillar.title}</h3>
              <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl text-white/50 leading-relaxed mb-6 sm:mb-10 italic">
                {pillar.desc}
              </p>
              <div className="w-12 h-[1px] bg-secondary/20 mb-4 sm:mb-6" />
              <p className="text-secondary uppercase text-[8px] sm:text-[10px] font-black tracking-[3px] sm:tracking-[5px]">
                {pillar.tag}
              </p>
            </div>
          ))}
        </div>

        {/* --- Connect Section --- */}
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[4rem] p-8 sm:p-20 md:p-32 text-center border border-secondary/10 shadow-2xl bg-gradient-to-br from-primary-light to-primary">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIwLjUiIGN5PSIwLjUiIHI9IjAuNSIgZmlsbD0icmdiYSgyMDEsMTY4LDc2LDAuMSkiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-20 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-6 sm:mb-10 text-white tracking-[4px] sm:tracking-[10px] uppercase drop-shadow-2xl">
              {aboutData.connect.title}
            </h2>
            <p className="font-['Cormorant_Garamond'] max-w-3xl mx-auto text-white/50 mb-10 sm:mb-16 text-xl sm:text-3xl italic leading-relaxed">
              "{aboutData.connect.desc}"
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
              <a href="#contact" className="btn-premium px-10 sm:px-12 py-4 sm:py-6 text-[12px] sm:text-[14px] w-full sm:w-auto">
                {aboutData.connect.btnPrimary}
              </a>
              <a href={companyData.socials.find(s => s.name === 'Instagram')?.url} target="_blank" rel="noreferrer" className="glass-card border-secondary/20 text-white px-10 sm:px-12 py-4 sm:py-6 rounded-full text-[10px] sm:text-[12px] font-black tracking-[2px] sm:tracking-[4px] uppercase hover:bg-secondary hover:text-primary transition-all duration-500 shadow-2xl w-full sm:w-auto inline-block">
                {aboutData.connect.btnSecondary}
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}