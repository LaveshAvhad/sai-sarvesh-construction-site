
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-start overflow-hidden bg-slate-950">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=90&w=2070" 
          alt="Architectural Mastery"
          className="w-full h-full object-cover scale-105 animate-[subtleZoom_15s_ease-out_forwards]"
        />
      </div>

      <div className="relative z-20 px-8 md:px-16 lg:px-32 max-w-7xl w-full">
        <div className="reveal-up opacity-0 [animation-delay:200ms]">
          <span className="text-amber-500 uppercase tracking-[0.6em] text-[10px] font-bold block mb-8">
            Established Structural Integrity
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold text-slate-100 mb-10 leading-[0.95] tracking-tightest reveal-up opacity-0 [animation-delay:400ms]">
          Structural <br /> 
          <span className="italic font-light text-slate-400">Permanence.</span>
        </h1>
        
        <div className="max-w-xl reveal-up opacity-0 [animation-delay:600ms]">
          <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12 border-l border-amber-500/30 pl-8">
            Sai Sarvesh Construction translates sophisticated vision into structural reality. 
            We specialize in elite developments governed by disciplined engineering.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-12 reveal-up opacity-0 [animation-delay:800ms]">
          <a 
            href="#contact" 
            className="group px-12 py-5 bg-amber-500 text-slate-950 font-bold uppercase tracking-widest text-[10px] transition-all duration-500 hover:bg-slate-100 shadow-2xl"
          >
            <span className="flex items-center gap-4">
              Project Inquiry <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <div className="flex flex-col border-l border-slate-800 pl-8">
            <span className="text-slate-500 text-[9px] uppercase tracking-[0.4em] font-bold mb-2">Verified Logs</span>
            <span className="text-slate-200 text-sm font-light italic">Active Field Reports via Instagram</span>
          </div>
        </div>
      </div>

      {/* Aesthetic Technical Markers */}
      <div className="absolute bottom-16 right-8 md:right-16 lg:right-32 z-20 flex flex-col items-end reveal-up opacity-0 [animation-delay:1000ms]">
         <div className="text-right">
            <p className="text-slate-600 text-[10px] uppercase tracking-[0.5em] font-bold mb-2">Technical Standard</p>
            <p className="text-amber-500 text-2xl font-serif italic">Structural Assurance</p>
         </div>
      </div>

      <div className="absolute bottom-12 left-8 md:left-16 lg:left-32 z-20">
        <div className="flex items-center gap-6 text-slate-600 uppercase tracking-[0.5em] text-[8px] font-bold">
          <div className="w-16 h-[1px] bg-slate-800"></div>
          <span>Precision in Execution</span>
        </div>
      </div>
    </div>
  );
};
