
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Shield, Send, Sparkles, Gem } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100; // Header height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Background Backdrop Blur when Menu is Open */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut",
              delay: isMobileMenuOpen ? 0 : 0.6 
            }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/40 dark:bg-neutral-900/40 backdrop-blur-sm z-[45]"
          />
        )}
      </AnimatePresence>

      <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 pointer-events-none">
        <motion.div 
          layout
          initial={false}
          transition={{ 
            layout: { 
              type: 'spring', 
              damping: 30, 
              stiffness: 300 
            }
          }}
          className="w-full max-w-7xl mx-auto px-6 md:px-12 rounded-[2.5rem] bg-white/70 dark:bg-neutral-950/70 backdrop-blur-3xl border-2 border-black/10 dark:border-white/10 shadow-2xl pointer-events-auto overflow-hidden py-4"
        >
          {/* Top Row - Completely stable navigation bar */}
          <div className="flex items-center justify-between w-full h-12">
            <motion.div 
              layout="position"
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-4 cursor-pointer group" 
              onClick={() => scrollTo('hero')}
            >
              <span className="text-3xl font-light tracking-[0.3em] text-neutral-900 dark:text-white font-serif uppercase">
                Poktil
              </span>
            </motion.div>

            <nav className="hidden lg:flex items-center space-x-12">
              {[
                { label: 'Nega?', id: 'nega' },
                { label: 'Narxlar', id: 'narxlar' },
                { label: 'Xususiyatlar', id: 'xususiyatlar' },
                { label: 'Qo\'llanma', id: 'qollanma' }
              ].map((item, idx) => (
                <motion.button 
                  key={idx} 
                  layout="position"
                  whileHover={{ y: -1, color: '#62b4e0' }}
                  onClick={() => scrollTo(item.id)}
                  className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 transition-colors uppercase tracking-[0.4em]"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <div className="flex items-center space-x-6">
              <motion.a 
                layout="position"
                whileHover={{ scale: 1.02, backgroundColor: '#62b4e0', color: '#fff' }}
                whileTap={{ scale: 0.98 }}
                href="https://t.me/poktil_bot" 
                className="hidden md:flex items-center gap-2 px-8 py-3 bg-black/10 dark:bg-white/10 text-neutral-900 dark:text-white border border-black/20 dark:border-white/20 rounded-full font-medium text-[11px] uppercase tracking-[0.3em] transition-all"
              >
                <Send className="w-3 h-3" />
                Botni ochish
              </motion.a>
              
              <button 
                className="lg:hidden text-neutral-900 dark:text-white p-2 relative w-10 h-10 flex items-center justify-center transition-transform hover:scale-110 active:scale-95"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              >
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={isMobileMenuOpen ? 'close' : 'menu'}
                    initial={{ opacity: 0, rotate: -180, scale: 0.5 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 180, scale: 0.5 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Independent Mobile Menu Expansion */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ 
                  height: { type: 'spring', damping: 30, stiffness: 300 },
                  opacity: { duration: 0.2 }
                }}
                className="lg:hidden"
              >
                <div className="pt-8 pb-4 flex flex-col space-y-6">
                  {[
                    { label: 'Nega?', id: 'nega', icon: <Sparkles className="w-4 h-4" /> },
                    { label: 'Narxlar', id: 'narxlar', icon: <Gem className="w-4 h-4" /> },
                    { label: 'Xususiyatlar', id: 'xususiyatlar', icon: <Shield className="w-4 h-4" /> },
                    { label: 'Qo\'llanma', id: 'qollanma', icon: <Menu className="w-4 h-4" /> }
                  ].map((item, idx) => (
                    <motion.button 
                      key={idx} 
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ 
                        delay: 0.15 + (idx * 0.05) 
                      }}
                      onClick={() => scrollTo(item.id)}
                      className="flex items-center gap-4 text-lg font-light text-neutral-600 dark:text-neutral-300 hover:text-[#62b4e0] transition-colors uppercase tracking-[0.3em] font-serif group w-full text-left"
                    >
                      <span className="text-[#62b4e0] opacity-40 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                      {item.label}
                    </motion.button>
                  ))}
                  
                  <motion.a 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ 
                      delay: 0.4 
                    }}
                    href="https://t.me/poktil_bot" 
                    className="w-full py-4 bg-[#62b4e0] text-white rounded-full text-center font-bold text-xs uppercase tracking-[0.2em] shadow-lg mt-4 active:scale-95 transition-transform"
                  >
                    Botni ochish
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </header>

    </>
  );
};
