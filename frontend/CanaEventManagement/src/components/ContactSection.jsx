// 1. Imports
import React, { useState, useEffect, useRef } from "react";
import { companyData } from "../data/companyData";

// 2. Dynamic Variables
const contactData = {
  sectionLabel: "Get In Touch",
  heading: { main: "Let's Create", highlight: "Magic", suffix: "Together" },
  subtitle: "Tell us about your dream event — we'll handle the rest",
  description: "From a grand wedding to an electrifying college fest, our team is ready to turn your vision into reality. Reach out today and let's start planning your unforgettable event.",
  contactInfo: [
    { icon: "📍", label: "Head Office", value: companyData.address },
    { icon: "📞", label: "Phone", value: companyData.phone, href: companyData.phoneLink },
    { icon: "✉️", label: "Email", value: companyData.email, href: companyData.emailLink },
    { icon: "🕐", label: "Working Hrs", value: companyData.workingHours }
  ],
  socialLinks: companyData.socials,
  formOptions: ["Wedding", "Corporate Event", "College Fest", "Birthday Party", "Photo Shoot", "Other"],
  messages: {
    success: "Message Sent!",
    successDesc: "We'll get back to you within 24 hours"
  }
};

// 3. Component
export default function ContactSection() {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", eventType: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ firstName: "", lastName: "", phone: "", email: "", eventType: "", message: "" });
  };

  const inputClass = (field) => `
    w-full px-6 py-4 rounded-xl font-['Cormorant_Garamond'] text-xl text-white outline-none transition-all duration-300 bg-primary/40 border
    ${focused === field 
      ? 'border-secondary shadow-[0_0_20px_rgba(201,168,76,0.3)] bg-primary-light/40' 
      : 'border-secondary/10 hover:border-secondary/30'
    }
  `;

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden bg-primary py-20 md:py-32 border-t border-secondary/10">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-secondary/5 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3 z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-accent/5 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className={`flex items-center justify-center gap-4 sm:gap-6 mb-6 transition-all duration-700 ease-out delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="w-12 sm:w-16 h-[1px] bg-secondary/50" />
            <span className="text-[10px] sm:text-[12px] tracking-[6px] sm:tracking-[8px] text-secondary font-bold uppercase">{contactData.sectionLabel}</span>
            <span className="w-12 sm:w-16 h-[1px] bg-secondary/50" />
          </div>
          <h2 className={`text-3xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase transition-all duration-700 ease-out delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {contactData.heading.main}{" "}
            <span className="text-gold-gradient">
              {contactData.heading.highlight}
            </span>
            {" "}{contactData.heading.suffix}
          </h2>
          <p className={`font-['Cormorant_Garamond'] italic text-xl sm:text-2xl text-white/60 mt-4 sm:mt-6 transition-all duration-700 ease-out delay-300 ${inView ? "opacity-100" : "opacity-0"}`}>
            "{contactData.subtitle}"
          </p>
        </div>

        {/* Two column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32 items-start">

          {/* LEFT — Info */}
          <div className={`transition-all duration-1000 ease-out delay-400 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <p className="font-['Cormorant_Garamond'] italic text-xl sm:text-2xl text-white/50 leading-relaxed mb-8 sm:mb-12">
              {contactData.description.split("unforgettable event")[0]}
              <span className="text-secondary font-black not-italic drop-shadow-2xl">unforgettable event</span>
              {contactData.description.split("unforgettable event")[1]}
            </p>

            <div className="flex flex-col gap-6 sm:gap-8">
              {contactData.contactInfo.map((info, i) => (
                <div key={i} className="flex gap-4 sm:gap-6 items-start p-6 sm:p-8 glass-card border-secondary/10 hover:border-secondary/35 transition-all duration-500 group rounded-2xl">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-full flex items-center justify-center text-2xl sm:text-3xl glass-card border-secondary/20 group-hover:bg-secondary group-hover:text-primary transition-all duration-500 animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                    {info.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[9px] sm:text-[10px] tracking-[3px] sm:tracking-[4px] text-secondary uppercase font-black mb-1 sm:mb-2">
                      {info.label}
                    </div>
                    {info.href ? (
                      <a href={info.href} className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-white/80 font-light leading-relaxed hover:text-secondary transition-colors break-all block">
                        {info.value}
                      </a>
                    ) : (
                      <div className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-white/80 font-light leading-relaxed break-words">
                        {info.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-4 sm:gap-6 mt-8 sm:mt-12">
              {contactData.socialLinks.map(({ icon, label, url }) => (
                <a key={label} href={url} title={label} target="_blank" rel="noreferrer"
                   className="w-12 h-12 sm:w-14 sm:h-14 rounded-full glass-card border-secondary/20 flex items-center justify-center text-xl sm:text-2xl text-secondary hover:bg-secondary hover:text-primary hover:-translate-y-2 transition-all duration-500 shadow-2xl">
                  <span>{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Form (Glassmorphism) */}
          <div className={`transition-all duration-1000 ease-out delay-500 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="glass-card p-6 sm:p-10 md:p-14 border-secondary/10 shadow-2xl relative overflow-hidden bg-gradient-to-br from-primary-light/40 to-transparent rounded-[2rem] sm:rounded-[3rem]">
              
              <div className="text-[10px] sm:text-[12px] tracking-[4px] sm:tracking-[6px] text-secondary uppercase font-black mb-6 sm:mb-10 flex items-center gap-3 sm:gap-4">
                <span className="w-6 sm:w-8 h-[1px] bg-secondary" />
                Send A Message
              </div>

              {sent ? (
                <div className="py-16 sm:py-24 text-center animate-reveal">
                  <div className="text-5xl sm:text-7xl mb-6 sm:mb-8 animate-float">✨</div>
                  <div className="text-xl sm:text-2xl tracking-[3px] sm:tracking-[4px] text-white uppercase font-black mb-2 sm:mb-4">
                    {contactData.messages.success}
                  </div>
                  <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl text-white/50 italic">
                    "{contactData.messages.successDesc}"
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 animate-reveal">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div>
                      <label className="block text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-secondary/60 font-black uppercase mb-2 ml-1">First Name *</label>
                      <input name="firstName" value={form.firstName} onChange={handleChange} required
                        onFocus={() => setFocused("firstName")} onBlur={() => setFocused("")}
                        placeholder="John" className={inputClass("firstName")} />
                    </div>
                    <div>
                      <label className="block text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-secondary/60 font-black uppercase mb-2 ml-1">Last Name</label>
                      <input name="lastName" value={form.lastName} onChange={handleChange}
                        onFocus={() => setFocused("lastName")} onBlur={() => setFocused("")}
                        placeholder="Doe" className={inputClass("lastName")} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-secondary/60 font-black uppercase mb-2 ml-1">Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange}
                      onFocus={() => setFocused("phone")} onBlur={() => setFocused("")}
                      placeholder="+91 98765 43210" className={inputClass("phone")} />
                  </div>

                  <div>
                    <label className="block text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-secondary/60 font-black uppercase mb-2 ml-1">Email Address *</label>
                    <input name="email" value={form.email} onChange={handleChange} required
                      onFocus={() => setFocused("email")} onBlur={() => setFocused("")}
                      placeholder="hello@world.com" className={inputClass("email")} />
                  </div>

                  <div>
                    <label className="block text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-secondary/60 font-black uppercase mb-2 ml-1">Event Type</label>
                    <div className="relative">
                      <select name="eventType" value={form.eventType} onChange={handleChange}
                        onFocus={() => setFocused("eventType")} onBlur={() => setFocused("")}
                        className={`${inputClass("eventType")} cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2010l5%205%205-5z%22%20fill%3D%22%23C9A84C%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_20px_center]`}>
                        <option value="" className="bg-primary">Select event type…</option>
                        {contactData.formOptions.map(o => <option key={o} value={o} className="bg-primary">{o}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] sm:text-[10px] tracking-[2px] sm:tracking-[3px] text-secondary/60 font-black uppercase mb-2 ml-1">Your Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required
                      onFocus={() => setFocused("message")} onBlur={() => setFocused("")}
                      placeholder="Share your vision..."
                      rows={4} className={`${inputClass("message")} resize-none`} />
                  </div>

                  <button type="submit" className="btn-premium w-full py-4 sm:py-6 text-[12px] sm:text-[14px]">
                    ✦ Send Magic Message ✦
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatOrb { 0%{transform:translateY(0) scale(1)} 100%{transform:translateY(-30px) scale(1.05)} }
      `}</style>
    </section>
  );
}