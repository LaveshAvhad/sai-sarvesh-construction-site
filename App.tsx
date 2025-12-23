
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TrustSection } from './components/TrustSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GeminiAssistant } from './components/GeminiAssistant';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.reveal, .fade-in');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950">
      <Navbar isScrolled={isScrolled} />
      
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="py-24 lg:py-32 bg-slate-950">
          <div className="reveal">
            <About />
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="trust" className="py-24 lg:py-32 bg-slate-950">
          <div className="reveal">
            <TrustSection />
          </div>
        </section>

        <div className="section-divider"></div>

        <section id="experience" className="py-24 lg:py-32 bg-slate-950">
          <div className="reveal">
            <ExperienceSection />
          </div>
        </section>

        <section id="consult" className="py-24 lg:py-32 bg-slate-950 border-t border-slate-900/50">
          <div className="container mx-auto px-8">
            <div className="max-w-4xl mx-auto text-center mb-16 reveal">
              <h2 className="text-amber-500 uppercase tracking-[0.4em] text-[10px] font-bold mb-6 flex items-center justify-center gap-6">
                <span className="h-[1px] w-12 bg-amber-500/30"></span>
                Strategic Advisory
                <span className="h-[1px] w-12 bg-amber-500/30"></span>
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-100">Intelligent Analysis</h3>
              <p className="text-slate-500 text-lg leading-relaxed font-light max-w-xl mx-auto italic">
                Simulate structural parameters and architectural directions with our proprietary strategy terminal.
              </p>
            </div>
            <div className="reveal delay-200">
              <GeminiAssistant />
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 lg:py-32 bg-slate-950">
          <div className="reveal">
            <Contact />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
