
import React from 'react';
import { Building2, Instagram, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-amber-900/20 pt-24 pb-12">
      <div className="container mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-24">
          <div className="col-span-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 flex items-center justify-center border border-amber-500/40 rotate-45">
                <Building2 className="-rotate-45 text-amber-500" size={20} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold tracking-tighter text-slate-100 leading-none">SAI SARVESH</span>
                <span className="text-[8px] uppercase tracking-[0.4em] text-amber-500/80 font-bold mt-1">Construction</span>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-xs font-light">
              Architectural permanence and engineering discipline. Built for endurance, governed by technical excellence in Mahad, Raigad.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/saisarveshbuildingconstruction/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-slate-900 flex items-center justify-center text-slate-500 hover:text-amber-500 hover:border-amber-500 transition-all duration-500">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-100 font-bold uppercase tracking-[0.5em] text-[10px] mb-10">Navigation</h4>
            <ul className="space-y-5 text-slate-500 text-[11px] font-bold tracking-[0.3em] uppercase">
              <li><a href="#about" className="hover:text-amber-500 transition-colors">Heritage</a></li>
              <li><a href="#trust" className="hover:text-amber-500 transition-colors">Standards</a></li>
              <li><a href="#experience" className="hover:text-amber-500 transition-colors">Field Logs</a></li>
              <li><a href="#consult" className="hover:text-amber-500 transition-colors">Strategic Analysis</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-100 font-bold uppercase tracking-[0.5em] text-[10px] mb-10">Headquarters</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-slate-400">
                <MapPin size={16} className="text-amber-500 mt-1" />
                <span className="text-sm font-light">Mahad, Raigad, Maharashtra</span>
              </div>
              <div className="flex items-start gap-4 text-slate-400">
                <Phone size={16} className="text-amber-500 mt-1" />
                <div className="flex flex-col gap-2">
                  <a href="tel:9422695329" className="hover:text-amber-500 transition-colors text-sm font-light">94226 95329</a>
                  <a href="tel:9270177929" className="hover:text-amber-500 transition-colors text-sm font-light">92701 77929</a>
                </div>
              </div>
              <div className="flex items-start gap-4 text-slate-400">
                <Mail size={16} className="text-amber-500 mt-1" />
                <a href="mailto:saisarveshbuildingconstruction@gmail.com" className="hover:text-amber-500 transition-colors text-sm font-light break-all">
                  saisarveshbuildingconstruction@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-slate-900 gap-8">
          <p className="text-[9px] text-slate-600 uppercase tracking-[0.4em] font-bold text-center md:text-left">
            © {new Date().getFullYear()} Sai Sarvesh Building Construction. <br className="md:hidden" />
            <span className="text-slate-800 ml-0 md:ml-4">Structural Verified • Raigad District</span>
          </p>
          <div className="flex items-center gap-12 text-[10px] text-slate-600 uppercase tracking-[0.4em] font-bold">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-3 text-amber-500/60 hover:text-amber-500 transition-colors group"
            >
              Back to top <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
