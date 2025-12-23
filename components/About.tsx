
import React from 'react';
import { ShieldCheck, Ruler, Users, PenTool } from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    { icon: <ShieldCheck className="text-amber-500/80" size={20} />, label: 'Engineering Integrity', description: 'Rigorous application of structural physics to ensure multi-generational longevity.' },
    { icon: <PenTool className="text-amber-500/80" size={20} />, label: 'Artisan Finish', description: 'Collaborating with master masons to achieve tactile and visual perfection.' },
    { icon: <Ruler className="text-amber-500/80" size={20} />, label: 'Clinical Precision', description: 'Architectural blueprints executed with zero-tolerance for deviation.' },
    { icon: <Users className="text-amber-500/80" size={20} />, label: 'Transparent Record', description: 'Absolute clarity in project documentation and client consultation.' },
  ];

  return (
    <div className="container mx-auto px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative group reveal">
          <div className="absolute inset-0 bg-amber-500/5 translate-x-4 translate-y-4 -z-10 transition-transform duration-700 group-hover:translate-x-6 group-hover:translate-y-6"></div>
          <div className="relative overflow-hidden border border-slate-900 bg-slate-950 p-3">
             <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
              alt="Engineering Standard"
              className="w-full aspect-[4/5] object-cover grayscale opacity-60 hover:opacity-90 hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute bottom-6 -right-6 bg-slate-950 border border-amber-900/20 p-6 hidden xl:block shadow-2xl max-w-[180px] reveal delay-400">
            <p className="text-[10px] text-amber-500 uppercase tracking-[0.4em] font-bold mb-2">Core Ethos</p>
            <p className="text-slate-300 text-xs italic font-serif leading-relaxed">
              "We do not build for the moment; we build for the legacy."
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-8 flex items-center gap-6 reveal delay-100">
            <span className="h-[1px] w-12 bg-amber-500/30"></span>
            Our Foundation
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-100 mb-8 leading-[1.15] reveal delay-200">
            The Science of <br />
            <span className="italic font-light text-slate-500">Enduring Structure</span>
          </h3>
          <p className="text-slate-400 text-base lg:text-lg leading-relaxed mb-12 font-light max-w-lg reveal delay-300">
            Sai Sarvesh Construction is defined by technical discipline. We prioritize the fundamentals of high-end masonry and structural safety, ensuring every development stands as a silent testament to our mastery.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
            {principles.map((p, idx) => (
              <div key={idx} className={`flex flex-col reveal delay-${(idx + 4) * 100}`}>
                <div className="mb-4 flex items-center justify-center w-9 h-9 border border-slate-800 text-amber-500/60 transition-colors hover:border-amber-500/40">
                  {p.icon}
                </div>
                <h4 className="text-slate-100 font-bold mb-2 uppercase tracking-[0.2em] text-[9px]">{p.label}</h4>
                <p className="text-slate-500 text-[11px] leading-relaxed font-light">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
