
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] md:w-[calc(100%-64px)] z-50 transition-all duration-700 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 py-4 px-8 rounded-[2rem] shadow-2xl`}>
        
        <motion.div 
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
            whileHover={{ scale: 1.02, backgroundColor: '#62b4e0', color: '#000' }}
            whileTap={{ scale: 0.98 }}
            href="https://t.me/poktil_bot" 
            className="hidden md:flex items-center gap-2 px-8 py-3 bg-black/10 dark:bg-white/10 text-neutral-900 dark:text-white border border-black/20 dark:border-white/20 rounded-2xl font-medium text-[11px] uppercase tracking-[0.3em] transition-all"
          >
            <Send className="w-3 h-3" />
            Botni ochish
          </motion.a>
          
          <button 
            className="lg:hidden text-neutral-900 dark:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 w-full h-screen bg-white dark:bg-neutral-950 z-[60] flex flex-col items-center justify-center p-8"
          >
            <button 
              className="absolute top-8 right-8 text-neutral-900 dark:text-white p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <div className="flex flex-col items-center space-y-12 w-full">
              {[
                { label: 'Nega?', id: 'nega', icon: <Sparkles className="w-5 h-5" /> },
                { label: 'Narxlar', id: 'narxlar', icon: <Gem className="w-5 h-5" /> },
                { label: 'Xususiyatlar', id: 'xususiyatlar', icon: <Shield className="w-5 h-5" /> },
                { label: 'Qo\'llanma', id: 'qollanma', icon: <Menu className="w-5 h-5" /> }
              ].map((item, idx) => (
                <motion.button 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center gap-4 text-2xl font-light text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors uppercase tracking-[0.5em] font-serif"
                >
                  <span className="text-[#62b4e0]">{item.icon}</span>
                  {item.label}
                </motion.button>
              ))}
              
              <motion.a 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="https://t.me/poktil_bot" 
                className="w-full max-w-xs py-6 bg-[#62b4e0] text-black rounded-[2rem] text-center font-bold text-sm uppercase tracking-[0.3em] shadow-2xl"
              >
                Botni ochish
              </motion.a>
            </div>

            <div className="absolute bottom-12 text-neutral-600 text-[10px] uppercase tracking-[0.5em]">
              Poktil • Madaniyatli Muloqot
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
