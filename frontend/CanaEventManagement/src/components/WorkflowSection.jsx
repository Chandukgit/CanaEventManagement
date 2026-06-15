// 1. Imports
import React, { useState, useEffect, useRef } from "react";
import { companyData } from "../data/companyData";

// 2. Dynamic Variables
const workflowData = {
  sectionLabel: "How We Work",
  heading: { main: "Our", highlight: "Workflow" },
  subtitle: "Six precise steps that turn your dream into an unforgettable reality",
  steps: [
    { id: 1, icon: "🔍", title: "Discovery", desc: "We deep-dive into your vision, goals, budget and timeline to craft a crystal-clear event blueprint." },
    { id: 2, icon: "💡", title: "Conception", desc: "Our creative team transforms your ideas into immersive themes, mood boards, and conceptual designs." },
    { id: 3, icon: "📋", title: "Planning", desc: "Every detail — venue, vendors, logistics, staffing — is meticulously scheduled and coordinated." },
    { id: 4, icon: "🎭", title: "Production", desc: "Stage builds, lighting rigs, AV setups, and décor installations brought to life by our expert crew." },
    { id: 5, icon: "🚀", title: "Execution", desc: "Flawless on-ground delivery. Our team is present at every moment ensuring zero hiccups." },
    { id: 6, icon: "✨", title: "Legacy", desc: "Post-event reviews, memories captured, and a lasting relationship built for your next celebration." }
  ]
};

// 3. Component
export default function WorkflowSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveStep(p => (p + 1) % workflowData.steps.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleStepClick = (i) => {
    setActiveStep(i);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => setActiveStep(p => (p + 1) % workflowData.steps.length), 3500);
  };

  return (
    <section ref={sectionRef} id="workflow" className="relative overflow-hidden bg-primary py-20 md:py-32">

      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(201,168,76,0.05)_0%,transparent_100%)] z-0 pointer-events-none" />
      
      {/* Centre glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-secondary/10 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none z-0 animate-float" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className={`flex items-center justify-center gap-4 sm:gap-6 mb-6 transition-all duration-700 ease-out delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <span className="w-12 sm:w-16 h-[1px] bg-secondary/50" />
            <span className="text-[10px] sm:text-[12px] tracking-[6px] sm:tracking-[8px] text-secondary font-bold uppercase">{workflowData.sectionLabel}</span>
            <span className="w-12 sm:w-16 h-[1px] bg-secondary/50" />
          </div>
          <h2 className={`text-3xl md:text-6xl font-black text-white leading-tight uppercase transition-all duration-700 ease-out delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {workflowData.heading.main}{" "}
            <span className="text-gold-gradient">
              {workflowData.heading.highlight}
            </span>
          </h2>
          <p className={`font-['Cormorant_Garamond'] italic text-xl sm:text-2xl text-white/60 mt-4 sm:mt-6 transition-all duration-700 ease-out delay-300 ${inView ? "opacity-100" : "opacity-0"}`}>
            "{workflowData.subtitle}"
          </p>
        </div>

        {/* Step nodes row */}
        <div className="relative flex items-center justify-center gap-4 sm:gap-6 lg:gap-0 mb-16 sm:mb-24 flex-wrap lg:flex-nowrap">
          {workflowData.steps.map((step, i) => {
            const isActive = activeStep === i;
            const isPast = i < activeStep;
            return (
              <React.Fragment key={step.id}>
                {/* Node */}
                <div onClick={() => handleStepClick(i)}
                     className={`relative cursor-pointer transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-90"}`}
                     style={{ transitionDelay: `${i * 100 + 300}ms` }}>
                  
                  {isActive && (
                    <>
                      <div className="absolute -inset-2.5 rounded-full border border-secondary/30 animate-[rippleRing_1.5s_ease-out_infinite]" />
                      <div className="absolute -inset-5 rounded-full border border-secondary/10 animate-[rippleRing_1.5s_ease-out_infinite_0.3s]" />
                    </>
                  )}

                  <div className={`rounded-full flex flex-col items-center justify-center gap-1.5 transition-all duration-500 relative z-10 ${
                    isActive 
                      ? "w-24 h-24 sm:w-32 sm:h-32 border-[3px] border-secondary bg-primary shadow-[0_0_50px_rgba(201,168,76,0.3)] scale-110" 
                      : isPast 
                        ? "w-20 h-20 sm:w-24 sm:h-24 border-2 border-secondary/50 bg-primary-light scale-100" 
                        : "w-20 h-20 sm:w-24 sm:h-24 border-2 border-secondary/10 bg-primary/40 scale-100 opacity-50 hover:opacity-100"
                  }`}>
                    
                    <div className={`absolute -top-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-[10px] sm:text-[12px] font-black transition-all duration-400 ${
                      isActive ? "bg-secondary text-primary shadow-lg" : "bg-primary-light text-secondary/40 border border-secondary/20"
                    }`}>
                      {step.id}
                    </div>

                    <span className={`transition-all duration-400 ${isActive ? "text-3xl sm:text-4xl drop-shadow-2xl" : "text-2xl sm:text-3xl"}`}>{step.icon}</span>
                    <span className={`text-[8px] sm:text-[10px] tracking-[1px] sm:tracking-[2px] uppercase mt-1 font-bold ${
                      isActive ? "text-secondary" : isPast ? "text-secondary/70" : "text-white/30"
                    }`}>{step.title}</span>
                  </div>
                </div>

                {/* Connector line */}
                {i < workflowData.steps.length - 1 && (
                  <div className="relative w-8 sm:w-12 lg:w-32 h-[1px] mx-2 lg:mx-4 overflow-hidden hidden lg:block">
                    <div className="w-full h-full bg-secondary/10" />
                    <div className={`absolute top-0 left-0 h-full bg-secondary transition-all duration-700 ease-out`}
                         style={{ width: i < activeStep ? "100%" : "0%" }} />
                    {i === activeStep - 1 && (
                      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-3 h-3 rounded-full bg-secondary shadow-[0_0_20px_rgba(201,168,76,1)] animate-glow z-20" />
                    )}
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Active step detail card */}
        <div className={`max-w-4xl mx-auto p-8 sm:p-12 lg:p-16 relative transition-all duration-700 ease-out delay-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="absolute inset-0 glass-card border-secondary/10 shadow-2xl -z-10 bg-gradient-to-br from-primary-light/40 to-transparent rounded-[2rem]" />
          
          <div className="text-center">
            <div className="text-5xl sm:text-6xl mb-6 sm:mb-8 drop-shadow-2xl transition-transform duration-500 scale-125 animate-float">
              {workflowData.steps[activeStep].icon}
            </div>
            <div className="text-xs sm:text-sm tracking-[4px] sm:tracking-[8px] text-secondary font-black uppercase mb-4 sm:mb-6">
              Step {workflowData.steps[activeStep].id} — {workflowData.steps[activeStep].title}
            </div>
            <p className="font-['Cormorant_Garamond'] italic text-2xl sm:text-3xl text-white/80 leading-relaxed font-light">
              "{workflowData.steps[activeStep].desc}"
            </p>
          </div>
        </div>

        {/* Step selector dots */}
        <div className="flex justify-center gap-3 sm:gap-4 mt-12 sm:mt-16">
          {workflowData.steps.map((_, i) => (
            <button key={i} onClick={() => handleStepClick(i)} 
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                activeStep === i ? "w-10 sm:w-12 bg-secondary" : "w-3 sm:w-4 bg-secondary/20"
              }`}
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>

      </div>

      <style>{`
        @keyframes rippleRing { 0% { transform:scale(1); opacity:0.6; } 100% { transform:scale(1.5); opacity:0; } }
      `}</style>
    </section>
  );
}