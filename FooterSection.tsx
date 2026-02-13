
import React from 'react';
import { useReveal } from './hooks';

const FooterSection: React.FC = () => {
  const ref = useReveal();
  return (
    <section id="footer" className="snap-section bg-slate-950 text-white px-4 md:px-8 overflow-hidden relative" ref={ref}>
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[150px] animate-pulse"></div>
      
      <div className="snap-content">
        <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-20 items-center">
          <div className="reveal">
            <div className="flex items-center space-x-5 mb-12">
               <div className="w-20 h-20 bg-sky-500 rounded-[2rem] flex items-center justify-center text-white text-5xl font-black font-space shadow-[0_20px_40px_rgba(14,165,233,0.3)]">P</div>
               <h2 className="text-5xl md:text-7xl font-black font-space tracking-tighter uppercase">Poktil</h2>
            </div>
            <h3 className="text-3xl md:text-5xl font-bold mb-8 text-slate-300 leading-tight tracking-tight">
              Guruh muloqotini bugun <br />
              <span className="text-sky-500 italic">yangi bosqichga</span> olib chiqing.
            </h3>
            <p className="text-slate-400 text-base md:text-xl mb-12 max-w-md leading-relaxed">
              Poktil — faqat bot emas, u sizning virtual madaniyat posboningiz. 24/7 xizmatda.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="https://t.me/poktil_bot" className="px-12 py-5 bg-sky-500 rounded-full font-black uppercase tracking-widest text-sm hover:bg-sky-600 transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-sky-500/20">Botga o'tish</a>
              <a href="https://akbarswe.uz" className="px-10 py-5 glass rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all border border-white/10">Bog'lanish</a>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-sky-500 font-black text-xs uppercase tracking-[0.4em] mb-8">Navigatsiya</h4>
              <ul className="space-y-6 text-slate-500 font-bold text-sm md:text-base">
                <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Bosh sahifa</button></li>
                <li><button onClick={() => document.getElementById('narxlar')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Narxlar</button></li>
                <li><button onClick={() => document.getElementById('xususiyatlar')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Imkoniyatlar</button></li>
                <li><button onClick={() => document.getElementById('qollanma')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Qo'llanma</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-purple-500 font-black text-xs uppercase tracking-[0.4em] mb-8">Ijtimoiy</h4>
              <ul className="space-y-6 text-slate-500 font-bold text-sm md:text-base">
                <li><a href="https://t.me/akbar_swe" className="hover:text-white transition-colors">Telegram</a></li>
                <li><a href="https://instagram.com/akbar_swe" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://github.com/akbar-swe" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://linkedin.com/in/akbar-swe" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center py-10 border-t border-white/5 gap-6">
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600">© 2026 POKTIL PROJECT • BARCHA HUQUQLAR HIMOAYALANGAN</p>
           <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-600">MADE WITH ❤️ BY AKBAR</p>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
