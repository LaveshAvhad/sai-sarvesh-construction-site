
import React from 'react';
import { Play, MapPin, HardHat, Layers, ArrowRight } from 'lucide-react';

interface ReelProject {
  id: string;
  title: string;
  location: string;
  focus: string;
}

const reels: ReelProject[] = [
  { id: 'C-Zm0AFooWi', title: 'Vertical Assembly', location: 'Elite Project Site', focus: 'Structural Engineering' },
  { id: 'C3ucAGOIM4-', title: 'Masonry Standards', location: 'Regional Development', focus: 'Bespoke Craft' },
  { id: 'C0g3-j1od6Y', title: 'Blueprint Realization', location: 'Private Estate', focus: 'On-Site Delivery' },
  { id: 'C0O5pRwoywM', title: 'Substructure Integrity', location: 'Urban Site', focus: 'Engineering Core' },
  { id: 'CyfsA7zoh2u', title: 'Material Log', location: 'Project Delta', focus: 'Quality Control' },
  { id: 'CyNqe1mp0Yl', title: 'Project Milestone', location: 'Skyline Build', focus: 'Strategic Progress' },
];

export const ExperienceSection: React.FC = () => {
  return (
    <div className="container mx-auto px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row justify-between items-baseline mb-16 gap-8 reveal">
        <div className="max-w-2xl">
          <h2 className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-8 flex items-center gap-6">
            <span className="h-[1px] w-12 bg-amber-500/30"></span>
            Field Observations
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold text-slate-100 leading-[1.15]">
            The Journal of <br /> <span className="italic font-light text-slate-500">Structural Delivery</span>
          </h3>
          <p className="text-slate-400 mt-8 text-lg font-light leading-relaxed">
            Real-world documentation of our engineering discipline. Witness the mechanics of elite construction as recorded directly from our active project sites.
          </p>
        </div>
        
        <div className="hidden lg:flex gap-12 text-[9px] uppercase tracking-[0.3em] text-slate-600 font-bold border-l border-slate-900 pl-10 py-3 reveal delay-300">
          <div className="flex flex-col gap-2">
            <span className="text-amber-500/70">Active Field Logs</span>
            <span>Site Verified</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-amber-500/70">Project Status</span>
            <span>Continuous Engagement</span>
          </div>
        </div>
      </div>

      {/* Structured Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {reels.map((reel, idx) => (
          <div key={reel.id} className={`group flex flex-col bg-slate-950 border border-slate-900/50 p-2 transition-all duration-700 hover:border-amber-500/20 reveal delay-${(idx % 3) * 100 + 200}`}>
            {/* Reel Container with Obsidian Frame */}
            <div className="relative aspect-[9/16] overflow-hidden bg-black ring-1 ring-slate-900">
              <iframe
                src={`https://www.instagram.com/reel/${reel.id}/embed/`}
                className="w-full h-full border-0 opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                allowFullScreen
                scrolling="no"
              ></iframe>
              
              {/* Architectural Framing Overlays */}
              <div className="absolute top-4 left-4 right-4 h-[1px] bg-white/5 pointer-events-none"></div>
              <div className="absolute bottom-4 left-4 right-4 h-[1px] bg-white/5 pointer-events-none"></div>
            </div>

            {/* Context Header */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-serif font-bold text-slate-100 mb-1 group-hover:text-amber-500 transition-colors duration-500">
                    {reel.title}
                  </h4>
                  <div className="flex items-center gap-2 text-slate-600 text-[8px] uppercase tracking-[0.2em] font-bold">
                    <MapPin size={9} className="text-amber-500/50" />
                    {reel.location}
                  </div>
                </div>
                <div className="w-8 h-8 flex items-center justify-center border border-slate-900 text-amber-500 group-hover:border-amber-500 transition-all duration-500">
                  <Play size={12} fill="currentColor" />
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t border-slate-900/50">
                <div className="flex items-center gap-3 text-[8px] text-slate-500 uppercase tracking-[0.2em]">
                  <Layers size={10} className="text-slate-700" />
                  {reel.focus}
                </div>
                <div className="flex items-center gap-3 text-[8px] text-amber-500/50 uppercase tracking-[0.2em] font-bold">
                  <HardHat size={10} />
                  Verified
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Minimal Footer */}
      <div className="mt-20 pt-12 border-t border-slate-900/50 flex flex-col items-center text-center reveal">
        <p className="text-slate-600 text-[9px] uppercase tracking-[0.4em] font-bold mb-6">
          The comprehensive field log is available for review
        </p>
        <a 
          href="https://www.instagram.com/saisarveshbuildingconstruction/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-amber-500 uppercase tracking-[0.3em] text-[10px] font-bold hover:text-slate-200 transition-all duration-500 flex items-center gap-4 group"
        >
          Access Full Site Journal <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
        </a>
      </div>
    </div>
  );
};
