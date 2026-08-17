// 1. Imports
import React from "react";
import { galleryData } from "../data/gallery";

// 2. Component
export default function PortfolioSection() {
  return (
    <div className="bg-primary min-h-screen font-sans relative overflow-hidden text-white pt-32 sm:pt-40 pb-20">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-secondary/5 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none -translate-y-1/3 translate-x-1/3 z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-accent/5 rounded-full blur-[60px] sm:blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h4 className="text-[10px] sm:text-[12px] font-black uppercase tracking-[4px] sm:tracking-[8px] mb-4 sm:mb-6 text-secondary flex items-center justify-center gap-3 sm:gap-4">
            <span className="w-8 sm:w-12 h-[1px] bg-secondary/50" />
            CANA WORKCASE
            <span className="w-8 sm:w-12 h-[1px] bg-secondary/50" />
          </h4>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white tracking-[6px] sm:tracking-[15px] mb-6 sm:mb-8 uppercase">
            OUR <span className="text-gold-gradient">PORTFOLIO</span>
          </h1>
          <p className="font-['Cormorant_Garamond'] max-w-2xl mx-auto text-white/50 text-xl sm:text-2xl italic leading-relaxed">
            "A unified, premium showcase of event productions, wedding highlights, corporate showcases, and official gallery photography."
          </p>
        </div>

        {/* Gallery Grid - Displays Event Photographs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Render All Event Photos */}
          {galleryData.map((item) => (
            <div 
              key={`photo-${item.id}`}
              className="group relative rounded-[2rem] overflow-hidden aspect-[4/3] glass-card border-secondary/15 hover:border-secondary/35 transition-all duration-500 hover:-translate-y-2 bg-primary-light/35 shadow-xl"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-transparent to-transparent opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[9px] tracking-[2px] text-secondary font-black uppercase mb-1">
                  {item.category || "Event Gallery"}
                </div>
                <h3 className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
