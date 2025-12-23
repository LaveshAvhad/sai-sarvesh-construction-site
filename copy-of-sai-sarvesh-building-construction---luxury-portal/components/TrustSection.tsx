
import React from 'react';
import { ShieldCheck, HardHat, CheckCircle2, Ruler, Lock, Eye } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const standards = [
    { label: 'Quality Verification', title: 'On-Site Audits', desc: 'Systematic structural inspections at every critical milestone.', icon: <CheckCircle2 size={18} /> },
    { label: 'Safety Protocol', title: 'Risk Management', desc: 'Upholding international safety standards for all field operatives.', icon: <ShieldCheck size={18} /> },
    { label: 'Engineering Expertise', title: 'Technical Leadership', desc: 'Supervised by certified civil engineers with cumulative experience.', icon: <HardHat size={18} /> },
    { label: 'Regulatory Precision', title: 'Compliance', desc: 'Ensuring absolute adherence to municipal building codes.', icon: <Lock size={18} /> },
  ];

  return (
    <div className="container mx-auto px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-5 flex flex-col justify-center">
          <h2 className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-8 flex items-center gap-6">
            <span className="h-[1px] w-12 bg-amber-500/30"></span>
            Institutional Trust
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-100 mb-8 leading-[1.15]">
            Defined by <br />
            <span className="italic font-light text-slate-500">Discipline</span>
          </h3>
          
          <div className="space-y-10">
            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
              Trust is built on the consistency of the unseen. Our standards govern everything from foundation depth to the purity of materials.
            </p>
            <div className="flex items-start gap-6 p-8 bg-slate-900/30 border border-slate-800/50 backdrop-blur-sm">
               <Eye className="text-amber-500/60 mt-1" size={20} />
               <p className="text-slate-500 text-sm italic font-serif leading-relaxed">
                 "Our on-site transparency ensures that the integrity of our skeleton is as perfect as the finish."
               </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-800/20 border border-slate-800/20">
            {standards.map((standard, i) => (
              <div key={i} className="bg-slate-950 p-10 transition-all duration-500 hover:bg-slate-900/50">
                <div className="text-amber-500/80 mb-6 w-10 h-10 flex items-center justify-center border border-slate-900">
                  {standard.icon}
                </div>
                <div className="text-[9px] uppercase tracking-[0.3em] font-bold text-slate-600 mb-3">{standard.label}</div>
                <div className="text-xl font-serif font-bold text-slate-100 mb-4">{standard.title}</div>
                <p className="text-slate-500 text-[11px] leading-relaxed font-light">{standard.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
