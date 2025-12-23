
import React from 'react';
import { Menu, X, Building2 } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { label: 'Heritage', href: '#about' },
    { label: 'Standards', href: '#trust' },
    { label: 'Field Logs', href: '#experience' },
    { label: 'Analysis', href: '#consult' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'bg-slate-950/98 py-5 border-b border-slate-900/50 shadow-2xl' 
        : 'bg-transparent py-10'
    }`}>
      <div className="container mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 flex items-center justify-center border border-amber-500/40 rotate-45 group-hover:rotate-0 transition-transform duration-500">
            <Building2 className="-rotate-45 text-amber-500" size={16} />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-serif font-bold tracking-tighter text-slate-100 leading-none">
              SAI SARVESH
            </span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-amber-500/80 font-bold mt-1">
              Construction
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500 hover:text-amber-500 transition-all duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-8 py-3 border border-slate-800 text-slate-200 hover:border-amber-500 hover:text-amber-500 transition-all duration-500 uppercase tracking-[0.3em] text-[9px] font-bold"
          >
            Inquire
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-amber-500 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-slate-950 transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'} -z-10`}>
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-2xl font-serif font-bold tracking-widest text-slate-300 hover:text-amber-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 px-12 py-4 border border-amber-500 text-amber-500 uppercase tracking-widest text-xs font-bold"
            onClick={() => setIsOpen(false)}
          >
            Request Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};
