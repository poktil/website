
import React, { useState, useEffect } from 'react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const container = document.querySelector('.snap-container');
    const handleScroll = () => {
      if (container) {
        setIsScrolled(container.scrollTop > 50);
      }
    };
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-6xl mx-auto px-6 flex items-center justify-between transition-all duration-700 ${isScrolled ? 'bg-slate-900/40 backdrop-blur-3xl border border-white/5 py-3 px-8 rounded-full shadow-2xl' : 'bg-transparent'}`}>
        
        <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => scrollTo('hero')}>
          <div className="w-12 h-12 bg-sky-500 rounded-[1.5rem] flex items-center justify-center shadow-lg shadow-sky-500/20 transform transition-all group-hover:rotate-12 group-hover:scale-110">
            <span className="text-white font-black text-2xl font-space">P</span>
          </div>
          <span className="text-2xl font-black tracking-tighter text-white font-space uppercase">
            Poktil
          </span>
        </div>

        <nav className="hidden lg:flex items-center space-x-12">
          {[
            { label: 'Nega?', id: 'nega' },
            { label: 'Narxlar', id: 'narxlar' },
            { label: 'Xususiyatlar', id: 'xususiyatlar' },
            { label: 'Qo\'llanma', id: 'qollanma' }
          ].map((item, idx) => (
            <button 
              key={idx} 
              onClick={() => scrollTo(item.id)}
              className="text-[10px] font-black text-slate-400 hover:text-sky-400 transition-colors uppercase tracking-[0.3em]"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a 
          href="https://t.me/poktil_bot" 
          className="px-8 py-3.5 bg-white text-black rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-sky-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl"
        >
          Botni ochish
        </a>
      </div>
    </header>
  );
};
