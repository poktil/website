
import React, { useState } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'motion/react';
import { Shield, Crown, Sparkles, MessageSquare, ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 30 });

  return (
    <section id="hero" className="snap-section bg-neutral-950 px-4 md:px-8 relative overflow-hidden">
      {/* Elegant Background Ambient Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            opacity: [0.05, 0.1, 0.05],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#62b4e015_0%,transparent_70%)]"
        />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>
      
      <div className="snap-content relative z-10">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[#62b4e0] text-[11px] font-medium mb-10 tracking-[0.4em] uppercase mx-auto lg:mx-0"
            >
              <Sparkles className="w-3 h-3 mr-3" />
              Toza muloqot davri boshlandi
            </motion.div>
            
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-light text-white mb-10 leading-[0.85] font-serif tracking-tight">
              Toza til <br />
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
                className="text-[#62b4e0] italic font-serif"
              >
                Madaniyat
              </motion.span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-xl leading-relaxed font-light mx-auto lg:mx-0">
              O'zbek tilidagi birinchi AI asosidagi haqorat detektori. 
              Guruhlaringizni aqlli filtr bilan himoya qiling va madaniyatli muloqotni ta'minlang.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              <motion.a 
                whileHover={{ scale: 1.02, backgroundColor: '#62b4e0', color: '#000' }}
                whileTap={{ scale: 0.98 }}
                href="https://t.me/poktil_bot" 
                className="group relative px-12 py-5 bg-white text-black rounded-[2rem] font-bold text-sm shadow-2xl overflow-hidden transition-all uppercase tracking-[0.2em]"
              >
                <span className="relative flex items-center">
                  Hoziroq Start <ArrowRight className="ml-3 w-4 h-4" />
                </span>
              </motion.a>
              
              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('nega')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-transparent border border-white/10 text-white rounded-[2rem] font-bold text-sm transition-all uppercase tracking-[0.2em]"
              >
                Tanishish
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content - Elegant 3D Effect */}
          <div 
            className="relative hidden lg:flex items-center justify-center perspective-1000"
            onMouseMove={handleMouseMove}
          >
            <motion.div 
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative w-full max-w-lg aspect-square"
            >
              {/* Elegant Glow */}
              <div className="absolute inset-0 bg-[#62b4e008] rounded-full blur-[120px]"></div>
              
              {/* Main Mascot Container */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 w-full h-full flex items-center justify-center"
              >
                <div className="relative w-80 h-80">
                  {/* Outer Ring */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border border-white/5 rounded-[4rem] transform rotate-45"
                  ></motion.div>
                  
                  {/* Inner Core */}
                  <div className="absolute inset-6 bg-neutral-900/40 backdrop-blur-3xl rounded-[3.5rem] border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
                    {/* Scanning Line */}
                    <motion.div 
                      animate={{ top: ['-10%', '110%'] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                      className="absolute left-0 right-0 h-[1px] bg-[#62b4e040] blur-[1px] z-30"
                    ></motion.div>
                    
                    {/* Elegant Shield Icon */}
                    <div className="relative z-20 flex flex-col items-center">
                      <Shield className="w-32 h-32 text-[#62b4e0] opacity-80" strokeWidth={1} />
                      <div className="mt-8 flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#62b4e0] opacity-40 animate-pulse"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#62b4e0] opacity-40 animate-pulse [animation-delay:0.3s]"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[#62b4e0] opacity-40 animate-pulse [animation-delay:0.6s]"></div>
                      </div>
                    </div>

                    {/* Subtle Pattern */}
                    <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#62b4e0_1px,transparent_1px)] [background-size:24px:24px]"></div>
                  </div>

                  {/* Floating Orbits */}
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-10 border border-white/5 rounded-full"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#62b4e0] rounded-full blur-[1px]"></div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 p-5 bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl rotate-6"
              >
                <Crown className="w-6 h-6 text-[#62b4e0]" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 p-5 bg-neutral-900/80 backdrop-blur-xl border border-white/10 rounded-[2rem] shadow-2xl -rotate-6"
              >
                <MessageSquare className="w-6 h-6 text-[#62b4e0]" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
