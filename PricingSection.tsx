
import React, { useState } from 'react';
import { PRICING_PLANS } from './constants';
import { useReveal } from './hooks';

const PricingSection: React.FC = () => {
  const ref = useReveal();
  const [selectedIdx, setSelectedIdx] = useState(1); 
  const activePlan = PRICING_PLANS[selectedIdx];
  
  const getGlowColor = (color: string) => {
    switch(color) {
      case 'emerald': return 'rgba(16, 185, 129, 0.5)';
      case 'purple': return 'rgba(168, 85, 247, 0.5)';
      default: return 'rgba(14, 165, 233, 0.5)';
    }
  };

  const getButtonColor = (color: string) => {
    switch(color) {
      case 'emerald': return 'bg-emerald-500 hover:shadow-emerald-500/40';
      case 'purple': return 'bg-purple-600 hover:shadow-purple-500/40';
      default: return 'bg-sky-500 hover:shadow-sky-500/40';
    }
  };

  return (
    <section id="narxlar" className="snap-section bg-slate-950 px-4 md:px-8 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square bg-sky-500/5 rounded-full blur-[200px] pointer-events-none transition-all duration-1000"
           style={{ backgroundColor: getGlowColor(activePlan.color).replace('0.5', '0.05') }}></div>
      
      <div className="snap-content">
        <div className="max-w-6xl mx-auto w-full relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          <div className="reveal flex flex-row lg:flex-col items-center lg:items-start gap-6 lg:gap-12 shrink-0">
            {PRICING_PLANS.map((plan, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`text-2xl md:text-7xl font-black font-space uppercase tracking-tighter transition-all duration-500 text-left relative ${
                  selectedIdx === idx 
                    ? 'text-white scale-110 lg:translate-x-6 neon-text' 
                    : 'text-slate-800 hover:text-slate-700'
                }`}
              >
                {plan.slug}
                {selectedIdx === idx && <span className="absolute -left-4 lg:-left-10 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-sky-500 hidden lg:block"></span>}
              </button>
            ))}
          </div>

          <div className="reveal flex-grow w-full" style={{ transitionDelay: '0.1s' }}>
            <div 
              className="p-10 lg:p-20 rounded-extreme glass border-white/5 transition-all duration-700 relative overflow-hidden flex flex-col min-h-[460px]"
              style={{ 
                boxShadow: `0 50px 120px -20px rgba(0,0,0,0.6), 0 0 80px ${getGlowColor(activePlan.color).replace('0.5', '0.04')}`
              }}
            >
              <div 
                key={activePlan.slug}
                className="animate-in-smooth flex flex-col h-full"
              >
                <div className="relative z-10 mb-10">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-4xl md:text-8xl font-black font-space text-white leading-none uppercase tracking-tighter">
                      {activePlan.name}
                    </h2>
                    {activePlan.highlight && (
                      <span className="px-5 py-2 bg-white/10 backdrop-blur-md text-sky-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-full border border-sky-400/20">
                        Top Tanlov
                      </span>
                    )}
                  </div>
                  <p className="text-2xl md:text-4xl font-bold text-sky-500 font-space tracking-tight mb-6">
                    {activePlan.price}
                  </p>
                  <p className="text-sm md:text-xl text-slate-400 font-medium leading-relaxed max-w-xl">
                    {activePlan.description}
                  </p>
                </div>

                <div className="relative z-10 flex-grow mb-16">
                  <ul className="grid sm:grid-cols-2 gap-6">
                    {activePlan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-4">
                        <div className="w-6 h-6 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0 mt-0.5">
                           <svg className="w-4 h-4 text-sky-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                           </svg>
                        </div>
                        <span className="text-sm md:text-lg font-medium text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10">
                  <a 
                    href={`https://t.me/poktil_bot?start=subscription`}
                    className={`inline-flex items-center justify-center w-full md:w-auto px-16 py-6 rounded-full text-white font-black text-sm md:text-xl transition-all shadow-2xl uppercase tracking-[0.2em] transform active:scale-95 ${getButtonColor(activePlan.color)}`}
                  >
                    Obuna bo'lish
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
