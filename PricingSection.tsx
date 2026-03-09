
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRICING_PLANS } from './constants';
import { Check, Crown, Sparkles, Shield } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(1); 
  const activePlan = PRICING_PLANS[selectedIdx];
  
  const getGlowColor = (color: string) => {
    switch(color) {
      case 'emerald': return 'rgba(16, 185, 129, 0.5)';
      case 'purple': return 'rgba(168, 85, 247, 0.5)';
      default: return 'rgba(98, 180, 224, 0.5)';
    }
  };

  const getButtonColor = (color: string) => {
    switch(color) {
      case 'emerald': return 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30';
      case 'purple': return 'bg-purple-600/20 text-purple-400 border-purple-500/30';
      default: return 'bg-[#62b4e0]/20 text-[#62b4e0] border-[#62b4e0]/30';
    }
  };

  return (
    <section id="narxlar" className="snap-section bg-white dark:bg-neutral-950 px-4 md:px-8 relative overflow-hidden py-24 transition-colors duration-300">
      <motion.div 
        animate={{ 
          backgroundColor: getGlowColor(activePlan.color).replace('0.5', '0.03')
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square rounded-full blur-[200px] pointer-events-none transition-colors duration-1000"
      />
      
      <div className="snap-content relative z-10">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Plan Selection - Improved for Mobile */}
          <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 lg:gap-8 shrink-0 w-full lg:w-auto overflow-x-auto pb-4 lg:pb-0 scrollbar-hide">
            {PRICING_PLANS.map((plan, idx) => (
              <motion.button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`flex-shrink-0 text-lg md:text-4xl lg:text-6xl font-light font-serif uppercase tracking-widest transition-all duration-500 text-left relative px-4 lg:px-0 ${
                  selectedIdx === idx 
                    ? 'text-[#62b4e0] scale-105 lg:translate-x-4' 
                    : 'text-neutral-300 dark:text-neutral-700 hover:text-neutral-500 dark:hover:text-neutral-500'
                }`}
              >
                {plan.slug}
                {selectedIdx === idx && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute -left-2 lg:-left-8 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#62b4e0] hidden lg:block"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Plan Card */}
          <div className="flex-grow w-full max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activePlan.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                className="p-8 lg:p-16 rounded-[3rem] bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-2xl border border-black/10 dark:border-white/10 shadow-2xl relative overflow-hidden flex flex-col"
              >
                <div className="relative z-10 mb-12">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                      <h2 className="text-4xl md:text-6xl font-light font-serif text-neutral-900 dark:text-white uppercase tracking-[0.2em] mb-2">
                        {activePlan.name}
                      </h2>
                      <p className="text-2xl md:text-3xl font-light text-[#62b4e0] font-serif tracking-widest">
                        {activePlan.price}
                      </p>
                    </div>
                    {activePlan.highlight && (
                      <motion.div 
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="self-start px-6 py-2 bg-[#62b4e0]/10 text-[#62b4e0] text-[10px] font-bold uppercase tracking-[0.4em] rounded-full border border-[#62b4e0]/20"
                      >
                        Premium Tanlov
                      </motion.div>
                    )}
                  </div>
                  <p className="text-lg text-neutral-500 dark:text-neutral-400 font-light leading-relaxed max-w-xl">
                    {activePlan.description}
                  </p>
                </div>

                <div className="relative z-10 flex-grow mb-12">
                  <ul className="grid sm:grid-cols-2 gap-8">
                    {activePlan.features.map((feature, fIdx) => (
                      <motion.li 
                        key={fIdx} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: fIdx * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#62b4e0]/10 flex items-center justify-center shrink-0 mt-1">
                           <Check className="w-3 h-3 text-[#62b4e0]" strokeWidth={3} />
                        </div>
                        <span className="text-base text-neutral-600 dark:text-neutral-300 font-light tracking-wide leading-snug">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10">
                  <motion.a 
                    whileHover={{ scale: 1.02, backgroundColor: '#62b4e0', color: '#000' }}
                    whileTap={{ scale: 0.98 }}
                    href={`https://t.me/poktil_bot?start=subscription`}
                    className={`inline-flex items-center justify-center w-full md:w-auto px-12 py-5 rounded-[2rem] text-white border font-bold text-xs transition-all uppercase tracking-[0.3em] ${getButtonColor(activePlan.color)}`}
                  >
                    Obuna bo'lish
                  </motion.a>
                </div>

                {/* Background Icon Watermark */}
                <div className="absolute -bottom-12 -right-12 opacity-[0.03] text-neutral-900 dark:text-white transform -rotate-12 scale-[2.5] pointer-events-none">
                  {activePlan.icon}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
