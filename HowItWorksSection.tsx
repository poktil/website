
import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { STEPS } from './constants';
import { CheckCircle2, ShieldCheck, MessageSquare, Crown } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const counts = useMemo(() => {
    const members = Math.floor(Math.random() * (12000 - 3000) + 3000);
    const online = Math.floor(Math.random() * (members / 5) + 10);
    return { members: members.toLocaleString(), online: online.toLocaleString() };
  }, []);

  return (
    <section id="qollanma" className="snap-section bg-white dark:bg-neutral-950 px-4 md:px-8 relative overflow-hidden py-24 transition-colors duration-300">
      <div className="snap-content relative z-10">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 md:gap-32 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
                    className="flex gap-10 group"
                  >
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-xl font-light font-serif text-neutral-400 dark:text-neutral-500 group-hover:border-[#62b4e0] group-hover:text-[#62b4e0] transition-all duration-500 shadow-2xl">
                      0{step.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 font-serif text-neutral-900 dark:text-white group-hover:text-[#62b4e0] transition-colors tracking-wide">
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
              className="relative"
            >
               <div className="relative p-6 rounded-[3.5rem] bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-3xl overflow-hidden group aspect-square flex items-center justify-center">
                  <div className="relative w-full h-full flex items-center justify-center perspective-1000">
                    {/* Creative 3D Animation: Floating Geometric Core */}
                    <motion.div 
                      animate={{ 
                        rotateY: [0, 360],
                        rotateX: [0, 180, 0]
                      }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="relative w-64 h-64"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Central Sphere / Core */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#62b4e0] to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                      
                      {/* Rotating Rings */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ rotateZ: [0, 360] }}
                          transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-0 border border-black/10 dark:border-white/10 rounded-[3rem]"
                          style={{ 
                            transform: `rotateX(${i * 60}deg) rotateY(${i * 45}deg)`,
                            transformStyle: 'preserve-3d'
                          }}
                        >
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#62b4e0] rounded-full shadow-[0_0_10px_#62b4e0]"></div>
                        </motion.div>
                      ))}

                      {/* Floating Particles */}
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            y: [0, -40, 0],
                            x: [0, (i % 2 === 0 ? 30 : -30), 0],
                            opacity: [0.2, 0.8, 0.2]
                          }}
                          transition={{ 
                            duration: 3 + i, 
                            repeat: Infinity, 
                            ease: "easeInOut",
                            delay: i * 0.5
                          }}
                          className="absolute w-1 h-1 bg-white rounded-full"
                          style={{ 
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`
                          }}
                        />
                      ))}

                      {/* Inner Shield Icon */}
                      <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'translateZ(50px)' }}>
                        <ShieldCheck className="w-24 h-24 text-[#62b4e0] opacity-80" strokeWidth={1} />
                      </div>
                    </motion.div>

                    {/* Background Decorative Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#62b4e0]/5 rounded-full blur-[100px]"></div>
                      <div className="absolute inset-0 border border-white/5 rounded-full scale-150 opacity-20"></div>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
