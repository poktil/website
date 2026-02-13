
import React from 'react';
import { useReveal } from './hooks';

const WhySection: React.FC = () => {
  const ref = useReveal();
  return (
    <section id="nega" className="snap-section bg-slate-950 px-4 md:px-8" ref={ref}>
      <div className="snap-content">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="reveal order-2 lg:order-1">
            <div className="relative rounded-[3.5rem] overflow-hidden aspect-video border border-white/5 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] transition-all duration-700 hover:scale-[1.02] group">
               <video 
                 src="./poktil-video.mp4" 
                 muted 
                 autoPlay 
                 loop 
                 playsInline 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity"></div>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <h2 className="text-4xl md:text-7xl font-black mb-10 font-space text-white leading-tight tracking-tighter">
              Nega aynan <br/><span className="text-sky-500 italic">Poktil?</span>
            </h2>
            <div className="space-y-10">
              <div className="flex gap-8 group">
                <div className="shrink-0 w-16 h-16 rounded-[2rem] glass flex items-center justify-center text-sky-500 font-bold text-2xl font-space group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 border border-white/10">01</div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2 text-white">Madaniyatli Jamiyat</h4>
                  <p className="text-sm md:text-lg text-slate-400">Biz internetda o'zbek muloqotini yangi bosqichga olib chiqmoqchimiz.</p>
                </div>
              </div>
              <div className="flex gap-8 group">
                <div className="shrink-0 w-16 h-16 rounded-[2rem] glass flex items-center justify-center text-sky-500 font-bold text-2xl font-space group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 border border-white/10">02</div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2 text-white">Haqiqiy Vaqtda Filtr</h4>
                  <p className="text-sm md:text-lg text-slate-400">Har qanday haqorat millisekundlarda yo'q qilinadi.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-16 flex gap-12 border-t border-white/5 pt-12">
               <div>
                  <p className="text-4xl md:text-6xl font-black text-sky-500 font-space tracking-tighter">99%</p>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mt-3">Aniqlik</p>
               </div>
               <div>
                  <p className="text-4xl md:text-6xl font-black text-sky-500 font-space tracking-tighter">200ms</p>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] mt-3">Tezlik</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
