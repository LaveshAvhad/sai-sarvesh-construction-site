
import React, { useState, useRef, useEffect } from 'react';
import { Send, Loader2, Sparkles, User, ShieldCheck } from 'lucide-react';
import { getArchitecturalAdvice } from '../services/geminiService';
import { Message } from '../types';

export const GeminiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Strategic Terminal v3.1 Active. I am your Senior Strategist. Specify your development vision or structural requirements for a technical assessment." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const aiResponse = await getArchitecturalAdvice(userMessage);
    
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-slate-950 border border-slate-900 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] flex flex-col h-[700px]">
      {/* Terminal Header */}
      <div className="px-10 py-8 border-b border-slate-900 flex items-center justify-between bg-slate-950/50">
        <div className="flex items-center gap-6">
          <div className="w-10 h-10 border border-amber-500/20 flex items-center justify-center text-amber-500/80">
            <Sparkles size={18} />
          </div>
          <div>
            <h4 className="text-slate-100 font-bold uppercase tracking-[0.4em] text-[10px] mb-1">Architectural Strategist</h4>
            <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[0.2em]">Verified Consultation Channel</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-4 py-1.5 border border-slate-900 rounded-full">
            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-[9px] text-slate-500 uppercase font-bold tracking-[0.2em]">Secure Session</span>
          </div>
        </div>
      </div>

      {/* Conversation Flow */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-12 space-y-10 scroll-smooth bg-[radial-gradient(circle_at_center,_rgba(15,23,42,0.1)_0%,_transparent_100%)]"
      >
        {messages.map((m, i) => (
          <div key={i} className={`flex gap-8 ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
            <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center border ${
              m.role === 'user' ? 'border-slate-800' : 'border-amber-500/20'
            }`}>
              {m.role === 'user' ? <User size={16} className="text-slate-600" /> : <ShieldCheck size={16} className="text-amber-500/80" />}
            </div>
            <div className={`max-w-[70%] p-8 border ${
              m.role === 'user' 
                ? 'bg-slate-900/50 border-slate-800 text-slate-300' 
                : 'bg-slate-950 border-slate-900 text-slate-400 font-light'
            } text-sm leading-relaxed`}>
              {m.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-8 items-center">
            <div className="w-12 h-12 border border-amber-500/10 flex items-center justify-center">
              <Loader2 className="animate-spin text-amber-500/40" size={16} />
            </div>
            <div className="text-[10px] uppercase tracking-[0.4em] text-slate-700 font-bold animate-pulse">
              Conducting Strategic Analysis...
            </div>
          </div>
        )}
      </div>

      {/* Command Input */}
      <form onSubmit={handleSubmit} className="p-10 bg-slate-950 border-t border-slate-900">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Inquire regarding site engineering, architectural vision, or structural benchmarks..."
            className="w-full bg-slate-950 border-b border-slate-900 py-6 pl-4 pr-16 text-slate-200 placeholder:text-slate-700 focus:outline-none focus:border-amber-500 transition-all duration-700 text-sm font-light tracking-wide"
          />
          <button 
            type="submit"
            disabled={isLoading || !input.trim()}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-4 text-slate-600 hover:text-amber-500 disabled:text-slate-800 transition-all duration-500"
          >
            <Send size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center mt-6">
          <p className="text-[9px] text-slate-700 uppercase tracking-[0.3em] font-bold">
            Authorized for Strategic Advisory
          </p>
          <p className="text-[9px] text-slate-800 uppercase tracking-[0.1em]">
            Proprietary AI Strategy Logic
          </p>
        </div>
      </form>
    </div>
  );
};
