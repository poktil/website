
import React, { useMemo } from 'react';
import { STEPS } from './constants';
import { useReveal } from './hooks';

const HowItWorksSection: React.FC = () => {
  const ref = useReveal();

  // Randomize member and online counts once per mount
  const counts = useMemo(() => {
    const members = Math.floor(Math.random() * (12000 - 3000) + 3000);
    const online = Math.floor(Math.random() * (members / 5) + 10);
    return { members: members.toLocaleString(), online: online.toLocaleString() };
  }, []);

  return (
    <section id="qollanma" className="snap-section bg-slate-950 px-4 md:px-8" ref={ref}>
      <div className="snap-content">
        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="reveal">
              <h2 className="text-5xl md:text-8xl font-black mb-12 font-space leading-[0.85] tracking-tighter text-white">
                Boshlash <br />
                juda <span className="text-sky-500 neon-text italic">oson.</span>
              </h2>
              <div className="space-y-10 md:space-y-16">
                {STEPS.map((step, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className="shrink-0 w-16 h-16 rounded-full glass flex items-center justify-center text-2xl font-black font-space border border-white/10 group-hover:border-sky-500 group-hover:text-sky-500 transition-all duration-500 shadow-xl">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 font-space text-white group-hover:text-sky-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-lg text-slate-400 max-w-sm leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal relative" style={{ transitionDelay: '0.2s' }}>
               {/* Elegant Device Mockup with Extreme Rounding */}
               <div className="relative p-3 md:p-4 rounded-[4rem] bg-gradient-to-br from-white/10 to-transparent border border-white/10 shadow-[0_60px_120px_-30px_rgba(0,0,0,0.8)] backdrop-blur-3xl overflow-hidden group">
                  
                  <div className="bg-slate-950 rounded-[3rem] overflow-hidden flex flex-col h-[480px] md:h-[580px] relative border border-white/5">
                    
                    {/* Header: Shayton Bazmi */}
                    <div className="bg-slate-900/60 backdrop-blur-2xl px-8 py-6 border-b border-white/5 flex items-center justify-between z-30">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-600 to-red-500 flex items-center justify-center text-white font-black text-xl shadow-inner">SB</div>
                        <div>
                          <h4 className="font-black text-sm md:text-base text-white tracking-tight">Shayton bazmi</h4>
                          <p className="text-[10px] md:text-xs text-slate-400 font-medium">
                            {counts.members} a'zo, <span className="text-sky-400">{counts.online} onlayn</span>
                          </p>
                        </div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                        <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" /></svg>
                      </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-grow p-6 space-y-6 overflow-y-auto scroll-hide relative">
                       {/* Scanner line */}
                       <div className="absolute top-0 left-0 w-full h-[3px] bg-sky-500/40 shadow-[0_0_20px_rgba(56,189,248,0.6)] z-20 animate-scan"></div>

                       <div className="flex items-end gap-3 max-w-[85%] animate-in-smooth">
                          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-[10px] font-bold text-white shrink-0">B</div>
                          <div className="p-4 bg-slate-900 rounded-[1.5rem] rounded-bl-none border border-white/5">
                             <p className="text-[10px] font-bold text-emerald-500 mb-1">Bobur</p>
                             <p className="text-xs md:text-sm text-slate-200">Hammaga salom! Bugun bayrammi? 🎉</p>
                          </div>
                       </div>

                       <div className="flex items-end gap-3 max-w-[85%] self-end flex-row-reverse animate-in-smooth" style={{animationDelay: '0.4s'}}>
                          <div className="w-8 h-8 rounded-full bg-red-800 shrink-0"></div>
                          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-[1.5rem] rounded-br-none backdrop-blur-md relative overflow-hidden group">
                             <div className="absolute inset-0 bg-red-500/5 animate-pulse"></div>
                             <p className="text-[9px] font-black text-red-500 mb-1 uppercase tracking-widest">O'chirildi</p>
                             <p className="text-xs italic text-red-500/80 font-medium">Haqoratli mazmun aniqlandi</p>
                          </div>
                       </div>

                       <div className="flex items-end gap-4 max-w-[95%] animate-in-smooth" style={{animationDelay: '0.8s'}}>
                          <div className="w-12 h-12 rounded-[1.2rem] bg-sky-500 flex items-center justify-center font-black text-white shrink-0 shadow-2xl shadow-sky-500/30">P</div>
                          <div className="p-5 bg-sky-500/10 border border-sky-500/20 rounded-[1.8rem] rounded-bl-none">
                             <p className="text-[11px] font-bold text-sky-400 mb-1 flex items-center gap-1">
                               Poktil Bot
                               <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                             </p>
                             <p className="text-xs md:text-base font-semibold text-slate-100 leading-relaxed">
                               Iltimos, so'kinmang! Bu guruhda faqat madaniyatli muloqotga ruxsat bor. ✨🛡️
                             </p>
                          </div>
                       </div>
                    </div>

                    {/* Input Bar */}
                    <div className="p-5 bg-slate-900/40 border-t border-white/5 flex gap-4 items-center">
                       <div className="flex-grow h-12 bg-black/60 rounded-full border border-white/10 px-6 flex items-center text-slate-500 text-xs font-medium">
                         Xabar yozish...
                       </div>
                       <div className="w-12 h-12 rounded-full bg-sky-500 text-white flex items-center justify-center shadow-lg shadow-sky-500/20 active:scale-90 transition-transform">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 6s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .scroll-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;
