
import React from 'react';
import { FEATURES } from './constants';
import { useReveal } from './hooks';

const FeaturesSection: React.FC = () => {
  const ref = useReveal();
  return (
    <section id="xususiyatlar" className="snap-section bg-slate-950 px-4 md:px-8" ref={ref}>
      <div className="snap-content">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-20 reveal">
            <h2 className="text-5xl md:text-8xl font-black mb-8 font-space text-white uppercase tracking-tighter">Imkoniyatlar</h2>
            <p className="text-sm md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium">
              Tezkor, aniq va ishonchli. Poktil har bir harfni nazorat qiladi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="reveal" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="p-10 rounded-extreme glass border-white/5 hover:border-sky-500/20 transition-all hover:-translate-y-3 group h-full shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]">
                  <div className="w-16 h-16 rounded-[1.8rem] bg-sky-500/10 text-sky-500 flex items-center justify-center mb-10 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-5 font-space text-white group-hover:text-sky-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm md:text-base text-slate-400 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
