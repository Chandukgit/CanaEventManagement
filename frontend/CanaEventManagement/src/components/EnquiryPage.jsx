// 1. Imports
import React, { useState } from 'react';
import { Send, MapPin, Calendar, MessageSquare, Phone, User, Sparkles } from 'lucide-react';
import { companyData } from "../data/companyData";
import { allServices } from "../data/services";
import { sendEnquiryEmail } from "../utils/emailService";

// 2. Dynamic Variables
const enquiryData = {
  header: {
    title: "Enquiry",
    breadcrumb: "Home / Enquiry",
    socials: companyData.socials
  },
  info: {
    title: { main: "Let’s Create", highlight: "Something Iconic." },
    desc: "Whether you are planning a massive stadium concert or an intimate luxury wedding, our production team is ready to bring your vision to life. Fill out the details, and our founder will review your requirements personally.",
    badge: {
      tag: "“THE POWER OF PRODUCTION”",
      text: "Follow us for behind-the-scenes content of our latest successful events.",
      button: "FOLLOW ON INSTAGRAM"
    }
  },
  form: {
    title: "Get Enquiry",
    labels: {
      firstName: "First Name",
      lastName: "Last Name",
      mobileNumber: "Mobile Number",
      email: "Email Address",
      eventVenue: "Event Venue",
      eventDate: "Event Date",
      eventType: "Event / Service Type",
      customService: "Please specify your service",
      message: "Your Message / Requirements"
    },
    placeholders: {
      firstName: "John",
      lastName: "Doe",
      mobileNumber: "7337480184",
      email: "canaeventselite@gmail.com",
      eventVenue: "City, State or Specific Hotel",
      message: "Tell us about your dream event..."
    },
    submitBtn: "SEND ENQUIRY NOW",
    successAlert: "Thank you! Your enquiry has been sent successfully. Our team will contact you shortly.",
    errorAlert: "Unable to send your enquiry right now. Please try again or contact us directly."
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
export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    firstName: '', 
    lastName: '', 
    mobileNumber: '', 
    email: '',
    eventVenue: '', 
    eventDate: '', 
    eventType: '', 
    customService: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [sentStatus, setSentStatus] = useState(null); // 'success' | 'error' | null
  const [focused, setFocused] = useState("");

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Field validations
    if (!formData.firstName || !formData.email || !formData.mobileNumber || !formData.eventVenue || !formData.eventDate || !formData.eventType || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    if (formData.eventType === "Custom Service" && !formData.customService) {
      alert("Please specify your service.");
      return;
    }

    setLoading(true);
    setSentStatus(null);

    try {
      // Programmatic email submission via EmailJS helper
      await sendEnquiryEmail({
        ...formData,
        phone: formData.mobileNumber // Normalize to phone
      });
      
      setSentStatus("success");
      setFormData({
        firstName: '', lastName: '', mobileNumber: '', email: '',
        eventVenue: '', eventDate: '', eventType: '', customService: '', message: ''
      });
    } catch (err) {
      console.error("Submission error details:", err);
      setSentStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = (field) => `
    w-full pl-14 pr-6 py-4 rounded-xl font-['Cormorant_Garamond'] text-xl text-white outline-none transition-all duration-300 bg-primary/40 border backdrop-blur-2xl
    ${focused === field 
      ? 'border-secondary shadow-[0_0_20px_rgba(201,168,76,0.3)] bg-primary-light/40' 
      : 'border-secondary/10 hover:border-secondary/30'
    }
  `;

  const iconClass = (field) => `
    absolute left-5 top-1/2 -translate-y-1/2 transition-colors duration-300
    ${focused === field ? 'text-secondary' : 'text-secondary/30'}
  `;

  return (
    <div className="bg-primary min-h-screen font-sans relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-secondary/5 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2 z-0" />
      <div className="absolute top-1/2 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent/5 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none -translate-x-1/3 -translate-y-1/3 z-0" />

      {/* --- Header --- */}
      <div className="relative z-10 bg-primary-light/40 backdrop-blur-2xl border-b border-secondary/10 pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 text-center shadow-2xl">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-[6px] sm:tracking-[15px] mb-4 sm:mb-6 text-white drop-shadow-2xl">
          {enquiryData.header.title}
        </h1>
        <div className="flex items-center justify-center gap-3 sm:gap-6">
          <span className="w-8 sm:w-12 h-[1px] bg-secondary/50" />
          <p className="text-[10px] sm:text-[12px] tracking-[4px] sm:tracking-[8px] text-secondary uppercase">
            {enquiryData.header.breadcrumb}
          </p>
          <span className="w-8 sm:w-12 h-[1px] bg-secondary/50" />
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-10 mt-8 sm:mt-12">
          {enquiryData.header.socials.map((soc, i) => (
            <a key={i} href={soc.url} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-[10px] font-black tracking-[2px] sm:tracking-[4px] text-white/60 hover:text-secondary transition-all duration-500 hover:-translate-y-1">
              <span>{getSocialIcon(soc.name)}</span> {soc.label}
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 xl:gap-32">
          
          {/* --- Left Side --- */}
          <div className="lg:col-span-5 space-y-8 sm:space-y-12 lg:sticky lg:top-40 h-fit animate-reveal">
            <div className="relative">
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight text-white relative z-10 uppercase tracking-[1px] sm:tracking-[2px]">
                {enquiryData.info.title.main} <br />
                <span className="text-gold-gradient italic">
                  {enquiryData.info.title.highlight}
                </span>
              </h2>
              <p className="font-['Cormorant_Garamond'] text-white/60 text-2xl sm:text-3xl leading-relaxed italic relative z-10">
                "{enquiryData.info.desc}"
              </p>
            </div>

            <div className="p-8 sm:p-12 glass-card border-secondary/10 rounded-[2rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 bg-gradient-to-br from-primary-light/40 to-transparent">
              <Sparkles className="absolute -right-6 -top-6 w-32 h-32 sm:w-48 sm:h-48 text-secondary/5 group-hover:text-secondary/10 transition-colors duration-1000 z-0" />
              <h3 className="text-lg sm:text-xl font-black mb-3 sm:mb-4 relative z-10 text-secondary tracking-[2px] sm:tracking-[4px] uppercase">
                {enquiryData.info.badge.tag}
              </h3>
              <p className="font-['Cormorant_Garamond'] text-base sm:text-xl text-white/40 relative z-10 italic mb-8 sm:mb-10">
                {enquiryData.info.badge.text}
              </p>
              <a href={companyData.socials.find(s => s.name === 'Instagram')?.url} target="_blank" rel="noreferrer" className="glass-card border-secondary/20 text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-full text-[9px] sm:text-[10px] font-black tracking-[2px] sm:tracking-[3px] uppercase hover:bg-secondary hover:text-primary transition-all duration-500 shadow-2xl relative z-10 inline-block">
                {enquiryData.info.badge.button}
              </a>
            </div>
          </div>

          {/* --- Right Side: Enquiry Form --- */}
          <div className="lg:col-span-7 glass-card p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[4rem] shadow-2xl border-secondary/10 animate-reveal bg-gradient-to-br from-primary-light to-primary" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-12 flex items-center gap-4 sm:gap-6 text-white uppercase tracking-[3px] sm:tracking-[5px]">
              {enquiryData.form.title} <div className="h-[1px] flex-1 max-w-[96px] bg-secondary/50" />
            </h3>

            {sentStatus === "success" && (
              <div className="py-16 text-center animate-reveal">
                <div className="text-5xl sm:text-7xl mb-6 text-secondary">✓</div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase mb-4">{enquiryData.form.successAlert}</h3>
                <button onClick={() => setSentStatus(null)} className="btn-premium mt-6 text-xs">Submit Another Enquiry</button>
              </div>
            )}

            {sentStatus === "error" && (
              <div className="py-16 text-center animate-reveal">
                <div className="text-5xl sm:text-7xl mb-6 text-rose-500">⚠</div>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase mb-4">{enquiryData.form.errorAlert}</h3>
                <button onClick={() => setSentStatus(null)} className="btn-premium mt-6 text-xs">Try Again</button>
              </div>
            )}

            {!sentStatus && (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] text-secondary/60 ml-2">{enquiryData.form.labels.firstName} *</label>
                    <div className="relative">
                      <User className={iconClass('firstName')} size={18} />
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required
                        onFocus={() => setFocused('firstName')} onBlur={() => setFocused('')}
                        placeholder={enquiryData.form.placeholders.firstName} className={inputClass('firstName')} />
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] text-secondary/60 ml-2">{enquiryData.form.labels.lastName}</label>
                    <div className="relative">
                      <User className={iconClass('lastName')} size={18} />
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
                        onFocus={() => setFocused('lastName')} onBlur={() => setFocused('')}
                        placeholder={enquiryData.form.placeholders.lastName} className={inputClass('lastName')} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] text-secondary/60 ml-2">{enquiryData.form.labels.mobileNumber} *</label>
                    <div className="relative">
                      <Phone className={iconClass('mobileNumber')} size={18} />
                      <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required
                        onFocus={() => setFocused('mobileNumber')} onBlur={() => setFocused('')}
                        placeholder={enquiryData.form.placeholders.mobileNumber} className={inputClass('mobileNumber')} />
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] text-secondary/60 ml-2">{enquiryData.form.labels.email} *</label>
                    <div className="relative">
                      <Send className={iconClass('email')} size={18} />
                      <input type="email" name="email" value={formData.email} onChange={handleChange} required
                        onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                        placeholder={enquiryData.form.placeholders.email} className={inputClass('email')} />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] text-secondary/60 ml-2">{enquiryData.form.labels.eventVenue} *</label>
                    <div className="relative">
                      <MapPin className={iconClass('eventVenue')} size={18} />
                      <input type="text" name="eventVenue" value={formData.eventVenue} onChange={handleChange} required
                        onFocus={() => setFocused('eventVenue')} onBlur={() => setFocused('')}
                        placeholder={enquiryData.form.placeholders.eventVenue} className={inputClass('eventVenue')} />
                    </div>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] text-secondary/60 ml-2">{enquiryData.form.labels.eventDate} *</label>
                    <div className="relative">
                      <Calendar className={iconClass('eventDate')} size={18} />
                      <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required
                        onFocus={() => setFocused('eventDate')} onBlur={() => setFocused('')}
                        className={inputClass('eventDate')} />
                    </div>
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] text-secondary/60 ml-2">{enquiryData.form.labels.eventType} *</label>
                  <div className="relative">
                    <select name="eventType" value={formData.eventType} onChange={handleChange} required
                      onFocus={() => setFocused('eventType')} onBlur={() => setFocused('')}
                      className="w-full px-6 py-4 rounded-xl font-['Cormorant_Garamond'] text-xl text-white outline-none transition-all duration-300 bg-primary/40 border backdrop-blur-2xl border-secondary/10 hover:border-secondary/35 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M7%2010l5%205%205-5z%22%20fill%3D%22%23C9A84C%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_20px_center]">
                      <option value="" className="bg-primary">Select event type…</option>
                      {allServices.map(o => <option key={o.id} value={o.name} className="bg-primary">{o.name}</option>)}
                    </select>
                  </div>
                </div>

                {formData.eventType === "Custom Service" && (
                  <div className="space-y-2 sm:space-y-3 animate-reveal">
                    <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] text-secondary/60 ml-2">{enquiryData.form.labels.customService} *</label>
                    <div className="relative">
                      <Sparkles className={iconClass('customService')} size={18} />
                      <input type="text" name="customService" value={formData.customService} onChange={handleChange} required
                        onFocus={() => setFocused('customService')} onBlur={() => setFocused('')}
                        placeholder="e.g. Traditional Housewarming Ceremony" className={inputClass('customService')} />
                    </div>
                  </div>
                )}

                <div className="space-y-2 sm:space-y-3">
                  <label className="text-[9px] sm:text-[10px] font-black uppercase tracking-[2px] sm:tracking-[3px] text-secondary/60 ml-2">{enquiryData.form.labels.message} *</label>
                  <div className="relative">
                    <MessageSquare className={`absolute left-5 top-5 transition-colors duration-300 ${focused === 'message' ? 'text-secondary' : 'text-secondary/30'}`} size={18} />
                    <textarea name="message" value={formData.message} onChange={handleChange} required
                      rows="5" onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                      placeholder={enquiryData.form.placeholders.message}
                      className={`w-full pl-14 pr-6 py-4 rounded-xl font-['Cormorant_Garamond'] text-xl text-white outline-none transition-all duration-300 bg-primary/40 border backdrop-blur-2xl resize-none ${focused === 'message' ? 'border-secondary shadow-[0_0_20px_rgba(201,168,76,0.3)] bg-primary-light/40' : 'border-secondary/10 hover:border-secondary/30'}`}
                    ></textarea>
                  </div>
                </div>

                <button type="submit" disabled={loading} className="btn-premium w-full py-4 sm:py-6 text-[12px] sm:text-[14px] flex justify-center items-center gap-3 sm:gap-4 group mt-6 sm:mt-10">
                  <span>{loading ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}