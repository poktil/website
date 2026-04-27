
import React, { useMemo, useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STEPS } from './constants';
import { ShieldCheck, Zap } from 'lucide-react';
import AbstractVisual3D from './AbstractVisual3D';

const HowItWorksSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const counts = useMemo(() => {
    const members = Math.floor(Math.random() * (12000 - 3000) + 3000);
    const online = Math.floor(Math.random() * (members / 5) + 10);
    return { members: members.toLocaleString(), online: online.toLocaleString() };
  }, []);

  return (
    <section id="qollanma" className="snap-section bg-white dark:bg-neutral-950 px-6 md:px-12 relative overflow-hidden py-32 transition-colors duration-300">
      <div className="snap-content relative z-10 w-full">
        <div className="w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 md:gap-32 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30, filter: 'blur(15px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <h2 className="text-6xl md:text-8xl font-light mb-16 font-serif leading-tight tracking-tight text-neutral-900 dark:text-white">
                Boshlash <br />
                juda <span className="text-[#62b4e0] italic">oson.</span>
              </h2>
              <div className="space-y-12">
                {STEPS.map((step, idx) => (
                  <motion.div 
                    key={idx} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    onMouseEnter={() => setActiveStep(step.number)}
                    onMouseLeave={() => setActiveStep(null)}
                    className={`flex gap-10 group cursor-default transition-all duration-300 ${activeStep === step.number ? 'translate-x-4' : ''}`}
                  >
                    <div className={`shrink-0 w-20 h-20 rounded-[2.5rem] border flex items-center justify-center text-2xl font-light font-serif transition-all duration-500 shadow-xl ${
                      activeStep === step.number 
                      ? 'bg-[#62b4e0] text-white border-[#62b4e0] scale-110' 
                      : 'bg-[#62b4e0]/10 border-[#62b4e0]/20 text-[#62b4e0]'
                    }`}>
                      0{step.number}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold mb-3 font-serif transition-colors tracking-wide ${
                        activeStep === step.number ? 'text-[#62b4e0]' : 'text-neutral-900 dark:text-white'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-lg text-neutral-600 dark:text-neutral-500 max-w-sm leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative min-h-[500px] lg:h-[700px] flex items-center justify-center"
            >
              <div className="absolute inset-0 z-0">
                <Suspense fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-[#62b4e0]/20 border-t-[#62b4e0] rounded-full animate-spin" />
                  </div>
                }>
                  <AbstractVisual3D activeStep={activeStep} />
                </Suspense>
              </div>




            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default HowItWorksSection;
