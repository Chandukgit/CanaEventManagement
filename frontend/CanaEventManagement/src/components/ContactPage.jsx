// 1. Imports
import React from 'react';
import { 
  Phone, Mail, MapPin, MessageCircle, Clock, ExternalLink, Send 
} from 'lucide-react';
import { companyData } from "../data/companyData";

// 2. Dynamic Variables
const contactData = {
  header: {
    subtitle: "Get In Touch",
    title: "CONTACT US",
    desc: "We are available for event emergencies and production consultations. Connect with our specialized departments for a seamless experience."
  },
  departments: companyData.departments,
  globalPresence: {
    title: "Our Headquarters",
    location: companyData.address,
    timing: companyData.workingHours,
    button: "GET DIRECTIONS"
  },
  socialLinks: companyData.socials,
  supportWidget: {
    title: "Instant Support?",
    desc: "Start a live chat with our project managers for immediate assistance regarding your event.",
    button: "LIVE WHATSAPP CHAT"
  },
  signature: "THE POWER OF PRODUCTION"
};

// Helper to get Lucide icons for social handles
const getSocialIcon = (name) => {
  switch (name.toLowerCase()) {
    case 'whatsapp':
      return <MessageCircle size={20} />;
    case 'instagram':
      return <span className="text-xl">📸</span>;
    case 'facebook':
      return <span className="text-xl">👤</span>;
    case 'youtube':
      return <span className="text-xl">▶</span>;
    default:
      return <ExternalLink size={20} />;
  }
};

// Helper to get Lucide icons for departments
const getDeptIcon = (idx) => {
  switch (idx) {
    case 0:
      return "🌐";
    case 1:
      return "💍";
    case 2:
      return "⚡";
    case 3:
      return "🤝";
    default:
      return "✨";
  }
};

// 3. Component
export default function ContactPage() {
  return (
    <div className="bg-primary min-h-screen font-sans relative overflow-hidden text-white selection:bg-secondary/30">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-secondary/5 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2 z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent/5 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3 z-0" />

      {/* --- Hero Header --- */}
      <div className="relative z-10 bg-primary-light/40 backdrop-blur-2xl border-b border-secondary/10 pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 text-center shadow-2xl">
        <h4 className="text-[10px] sm:text-[12px] font-black uppercase tracking-[4px] sm:tracking-[8px] mb-4 sm:mb-6 text-secondary flex items-center justify-center gap-3 sm:gap-4">
          <span className="w-8 sm:w-12 h-[1px] bg-secondary/50" />
          {contactData.header.subtitle}
          <span className="w-8 sm:w-12 h-[1px] bg-secondary/50" />
        </h4>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-[6px] sm:tracking-[15px] md:tracking-[20px] mb-6 sm:mb-8 drop-shadow-2xl uppercase">
          {contactData.header.title}
        </h1>
        <p className="font-['Cormorant_Garamond'] max-w-3xl mx-auto text-white/50 text-xl sm:text-3xl italic leading-relaxed px-4">
          "{contactData.header.desc}"
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24 xl:gap-32">
          
          {/* --- Left Column: Department Grid --- */}
          <div className="lg:col-span-2 space-y-12 sm:space-y-16 animate-reveal">
            <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-4 sm:gap-6 text-white tracking-[3px] sm:tracking-[5px] uppercase">
              Direct Channels <span className="h-[1px] flex-1 max-w-[128px] bg-secondary/50"></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
              {contactData.departments.map((dept, idx) => (
                <div key={idx} className="glass-card p-6 sm:p-10 rounded-[2rem] sm:rounded-[3rem] border-secondary/10 hover:border-secondary/35 hover:shadow-[0_20px_50px_rgba(201,168,76,0.1)] hover:-translate-y-2 transition-all duration-500 group bg-primary-light/30">
                  <div className="mb-6 sm:mb-8 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl glass-card border-secondary/20 flex items-center justify-center text-secondary text-3xl group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary transition-all duration-500 animate-float" style={{ animationDelay: `${idx * 0.3}s` }}>
                    <span>{getDeptIcon(idx)}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4 tracking-[1px] sm:tracking-[2px] uppercase">{dept.title}</h3>
                  <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-white/40 mb-6 sm:mb-10 italic leading-relaxed">"{dept.description}"</p>
                  
                  <div className="space-y-4 sm:space-y-6 font-['Cormorant_Garamond'] text-xl sm:text-2xl font-medium">
                    <a href={dept.phoneLink} className="flex items-center gap-3 sm:gap-4 text-white/70 hover:text-secondary transition-all duration-500 hover:translate-x-2">
                      <Phone size={18} className="text-secondary/50" /> {dept.phone}
                    </a>
                    <a href={dept.emailLink} className="flex items-center gap-3 sm:gap-4 text-white/70 hover:text-secondary transition-all duration-500 hover:translate-x-2 break-all">
                      <Mail size={18} className="text-secondary/50" /> {dept.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* --- Headquarters Section --- */}
            <div className="glass-card rounded-[2rem] sm:rounded-[4rem] p-8 sm:p-16 md:p-20 text-white relative overflow-hidden shadow-2xl bg-gradient-to-br from-primary-light/40 to-primary border-secondary/10">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIwLjUiIGN5PSIwLjUiIHI9IjAuNSIgZmlsbD0icmdiYSgyMDEsMTY4LDc2LDAuMSkiPjwvY2lyY2xlPgo8L3N2Zz4=')] opacity-20 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl sm:text-4xl font-black mb-4 sm:mb-6 tracking-[3px] sm:tracking-[5px] uppercase text-white drop-shadow-2xl">{contactData.globalPresence.title}</h3>
                  <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-white/50 mb-6 sm:mb-10 flex items-center justify-center md:justify-start gap-3 sm:gap-4 italic">
                    <MapPin size={22} className="text-secondary shrink-0" /> {contactData.globalPresence.location}
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[12px] tracking-[2px] sm:tracking-[4px] font-black bg-primary/40 backdrop-blur-3xl p-4 sm:p-6 rounded-2xl border border-secondary/20 inline-flex shadow-2xl">
                    <Clock size={18} className="text-secondary animate-pulse" />
                    <span className="text-white/80">{contactData.globalPresence.timing}</span>
                  </div>
                </div>
                <a 
                  href={`https://maps.google.com/?q=${encodeURIComponent(contactData.globalPresence.location)}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-premium px-10 sm:px-12 py-4 sm:py-6 text-[12px] sm:text-[14px] whitespace-nowrap inline-flex items-center gap-2"
                >
                  {contactData.globalPresence.button} <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* --- Right Column: Social Ecosystem --- */}
          <div className="space-y-12 sm:space-y-16 animate-reveal" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl sm:text-3xl font-black flex items-center gap-4 sm:gap-6 text-white tracking-[3px] sm:tracking-[5px] uppercase">
              Social Connect <span className="h-[1px] flex-1 max-w-[96px] bg-secondary/50"></span>
            </h2>
            
            <div className="flex flex-col gap-6 sm:gap-8">
              {contactData.socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.url}
                  target="_blank" 
                  rel="noreferrer"
                  className="group flex items-center justify-between p-6 sm:p-8 glass-card rounded-2xl sm:rounded-[2rem] border-secondary/10 hover:border-secondary/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-primary-light/20"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl glass-card border-secondary/20 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-500">
                      {getSocialIcon(social.name)}
                    </div>
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-black text-secondary/60 uppercase tracking-[2px] sm:tracking-[4px] mb-1 sm:mb-2">{social.label}</p>
                      <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-bold text-white leading-none">{social.handle}</p>
                    </div>
                  </div>
                  <Send size={20} className="text-secondary/20 group-hover:text-secondary group-hover:translate-x-2 group-hover:-translate-y-1 transition-all duration-500" />
                </a>
              ))}
            </div>

            {/* Support Widget */}
            <div className="p-8 sm:p-16 glass-card border-secondary/10 rounded-[2rem] sm:rounded-[4rem] shadow-2xl text-center bg-gradient-to-b from-primary-light/40 to-transparent">
              <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 tracking-[3px] sm:tracking-[4px] text-white uppercase">{contactData.supportWidget.title}</h3>
              <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl text-white/40 mb-8 sm:mb-12 italic leading-relaxed">
                "{contactData.supportWidget.desc}"
              </p>
              <a 
                href={companyData.socials.find(s => s.name === 'WhatsApp')?.url} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-premium w-full py-4 sm:py-6 text-[12px] sm:text-[14px] flex items-center justify-center gap-3 sm:gap-4"
              >
                <MessageCircle size={20} /> {contactData.supportWidget.button}
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* --- Footer Signature --- */}
      <div className="pb-16 text-center text-secondary/30 font-black text-[10px] sm:text-[12px] uppercase tracking-[8px] sm:tracking-[15px] relative z-10 animate-pulse">
        " {contactData.signature} "
      </div>
    </div>
  );
}