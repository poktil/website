
import React from 'react';
import { useReveal } from './hooks';

export const Hero: React.FC = () => {
  const ref = useReveal();
  return (
    <section id="hero" className="snap-section bg-slate-950 px-4 md:px-8" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[50%] aspect-square bg-sky-500/5 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[50%] aspect-square bg-purple-500/5 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="snap-content">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-5 gap-12 items-center">
          
          <div className="lg:col-span-3 reveal text-center lg:text-left">
            <div className="inline-flex items-center px-6 py-2.5 rounded-full bg-sky-500/5 border border-sky-500/10 text-sky-400 text-[10px] font-bold mb-10 tracking-[0.3em] uppercase mx-auto lg:mx-0">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-500 mr-2 animate-pulse"></span>
              Toza muloqot davri boshlandi
            </div>
            <h1 className="text-6xl md:text-[9.5rem] font-black text-white mb-8 leading-[0.8] font-space tracking-tighter">
              Toza til <br />
              <span className="text-sky-500 neon-text italic">Madaniyat</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 mb-12 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0">
              O'zbek tilidagi birinchi AI asosidagi haqorat detektori. <br className="hidden md:block" />
              Guruhlaringizni aqlli filtr bilan himoya qiling.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-8">
              <a 
                href="https://t.me/poktil_bot" 
                className="px-14 py-5 bg-sky-500 text-white rounded-full font-black text-lg shadow-[0_20px_50px_-10px_rgba(14,165,233,0.4)] hover:shadow-sky-500/60 transition-all hover:-translate-y-1 active:scale-95 uppercase tracking-[0.1em]"
              >
                Hoziroq Start
              </a>
              <button 
                onClick={() => document.getElementById('nega')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-12 py-5 bg-white/5 border border-white/10 text-white rounded-full font-black text-lg hover:bg-white/10 transition-all uppercase tracking-[0.1em]"
              >
                Tanishish
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 relative reveal hidden lg:block" style={{ transitionDelay: '0.2s' }}>
            <div className="relative z-10 w-full aspect-square group">
              <div className="absolute inset-0 bg-sky-500/10 rounded-full blur-[120px] group-hover:scale-125 transition-transform duration-1000"></div>
              <img 
                src="./poktil.png" 
                alt="Poktil Mascot" 
                className="relative z-20 w-full h-full object-contain animate-float drop-shadow-[0_20px_100px_rgba(14,165,233,0.2)]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 group cursor-pointer" onClick={() => document.getElementById('nega')?.scrollIntoView({behavior: 'smooth'})}>
        <div className="w-[1px] h-14 bg-gradient-to-b from-sky-500 to-transparent group-hover:h-20 transition-all duration-700"></div>
      </div>
    </section>
  );
};
