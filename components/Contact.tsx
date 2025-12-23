
import React from 'react';
import { Phone, Instagram, ArrowRight, MessageSquare, Mail, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-8 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="flex flex-col justify-center">
          <h2 className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-8 flex items-center gap-6">
            <span className="h-[1px] w-12 bg-amber-500/30"></span>
            Direct Engagement
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-100 mb-8 leading-[1.15]">
            Consult with our <br /> <span className="italic font-light text-slate-500">Principal Advisor</span>
          </h3>
          <p className="text-slate-400 text-lg font-light leading-relaxed mb-12 max-w-md">
            Direct communication is foundational to structural success. For site reviews, technical inquiries, or investment dialogue, connect with our leads.
          </p>

          <div className="space-y-10">
            {/* Phone Support */}
            <div className="flex items-start gap-8 group">
              <div className="w-12 h-12 border border-slate-900 flex items-center justify-center text-amber-500/60 group-hover:border-amber-500 group-hover:text-amber-500 transition-all duration-700">
                <Phone size={18} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-slate-600 font-bold uppercase tracking-[0.2em] text-[9px] mb-2">Principal Lines</h4>
                <div className="flex flex-col gap-1">
                  <a href="tel:9422695329" className="text-slate-200 text-xl font-serif hover:text-amber-500 transition-colors tracking-tight">94226 95329</a>
                  <a href="tel:9270177929" className="text-slate-200 text-xl font-serif hover:text-amber-500 transition-colors tracking-tight mt-1">92701 77929</a>
                </div>
              </div>
            </div>

            {/* Email Support */}
            <div className="flex items-start gap-8 group">
              <div className="w-12 h-12 border border-slate-900 flex items-center justify-center text-amber-500/60 group-hover:border-amber-500 group-hover:text-amber-500 transition-all duration-700">
                <Mail size={18} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-slate-600 font-bold uppercase tracking-[0.2em] text-[9px] mb-2">Digital Correspondence</h4>
                <a href="mailto:saisarveshbuildingconstruction@gmail.com" className="text-slate-200 text-base font-serif hover:text-amber-500 transition-colors">
                  saisarveshbuildingconstruction@gmail.com
                </a>
              </div>
            </div>

            {/* Location Support */}
            <div className="flex items-start gap-8 group">
              <div className="w-12 h-12 border border-slate-900 flex items-center justify-center text-amber-500/60 group-hover:border-amber-500 group-hover:text-amber-500 transition-all duration-700">
                <MapPin size={18} />
              </div>
              <div className="flex flex-col">
                <h4 className="text-slate-600 font-bold uppercase tracking-[0.2em] text-[9px] mb-2">Headquarters</h4>
                <p className="text-slate-200 text-base font-serif">
                  Mahad, Raigad, Maharashtra
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-slate-900/40 -z-10 translate-x-4 translate-y-4 border border-slate-800"></div>
          <div className="bg-slate-950 p-12 border border-slate-900 flex flex-col justify-center items-center text-center h-full">
            <div className="w-16 h-16 border border-amber-500/10 flex items-center justify-center mb-8">
              <Instagram size={24} className="text-amber-500/60" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-slate-100 mb-6 tracking-tight">Field Presence</h4>
            <p className="text-slate-500 mb-10 max-w-xs font-light leading-relaxed text-xs">
              Our ongoing structural work and site logs are documented via our digital journal. Engage with us directly for a technical perspective.
            </p>
            <a 
              href="https://www.instagram.com/saisarveshbuildingconstruction/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 border border-amber-500 text-amber-500 font-bold uppercase tracking-[0.3em] text-[9px] hover:bg-amber-500 hover:text-slate-950 transition-all duration-700 shadow-xl shadow-amber-500/5 flex items-center justify-center gap-4 group"
            >
              Follow Live Documentation <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <p className="text-[8px] text-slate-700 uppercase tracking-[0.4em] font-bold mt-10">
              Verified Presence • Raigad District
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
