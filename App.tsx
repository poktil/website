
import React, { useState, useEffect, useRef } from 'react';
import { FEATURES, STEPS, PRICING_PLANS } from './constants';

const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );
    if (ref.current) {
      const reveals = ref.current.querySelectorAll('.reveal');
      reveals.forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);
  return ref;
};

const Header: React.FC = () => {
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
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2 md:py-4' : 'py-3 md:py-6'}`}>
      <div className={`max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between rounded-full border transition-all duration-500 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-slate-200/50 dark:border-slate-800/50 shadow-lg px-6 md:px-8' : 'bg-transparent border-transparent'}`}>
        <div className="flex items-center space-x-2 md:space-x-3 group cursor-pointer py-1.5 md:py-2" onClick={() => scrollTo('hero')}>
          <div className="w-8 h-8 md:w-10 md:h-10 bg-sky-500 rounded-lg md:rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.4)] transform transition-transform group-hover:rotate-12">
            <span className="text-white font-black text-base md:text-xl font-space">P</span>
          </div>
          <span className="text-lg md:text-2xl font-bold tracking-tighter text-slate-900 dark:text-white font-space uppercase">
            Poktil
          </span>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          {[
            { label: 'Nega?', id: 'nega' },
            { label: 'Narxlar', id: 'narxlar' },
            { label: 'Xususiyatlar', id: 'xususiyatlar' },
            { label: 'Qo\'llanma', id: 'qollanma' }
          ].map((item, idx) => (
            <button 
              key={idx} 
              onClick={() => scrollTo(item.id)}
              className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors uppercase tracking-widest"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <a 
          href="https://t.me/poktil_bot" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-4 md:px-6 py-2 md:py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-bold text-[10px] md:text-sm transition-all shadow-lg hover:shadow-sky-500/40 transform hover:-translate-y-0.5 active:scale-95"
        >
          <svg className="w-4 h-4 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48.99-.74 3.88-1.69 6.46-2.8 7.74-3.35 3.68-1.57 4.45-1.84 4.95-1.85.11 0 .35.03.5.16.13.12.17.29.18.42 0 .04-.01.12-.02.19z"/>
          </svg>
          <span className="hidden sm:inline">Botga o'tish</span>
          <span className="sm:hidden">Start</span>
        </a>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  const ref = useReveal();
  return (
    <section id="hero" className="snap-section bg-slate-50 dark:bg-slate-950 px-4 md:px-8" ref={ref}>
      <div className="absolute top-[-10%] right-[-5%] w-[40%] aspect-square bg-sky-500/10 rounded-full blur-[120px] animate-pulse"></div>
      
      <div className="snap-content">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="reveal text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-500 text-[10px] md:text-xs font-black mb-4 md:mb-8 tracking-[0.2em] uppercase mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Online & Active
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white mb-4 leading-[1.1] md:leading-[0.9] font-space tracking-tight">
              Toza til <br />
              <span className="text-sky-500 neon-text">Madaniyat</span>
            </h1>
            <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 mb-6 md:mb-10 max-w-lg leading-relaxed font-medium mx-auto lg:mx-0">
              Poktil — Telegram guruhlaridagi toksiklikni AI yordamida yo'qotuvchi eng tezkor o'zbek yordamchisi.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="https://t.me/poktil_bot" 
                className="px-8 md:px-12 py-4 md:py-5 bg-sky-500 text-white rounded-2xl md:rounded-[2rem] font-black text-base md:text-xl shadow-2xl shadow-sky-500/30 hover:shadow-sky-500/50 transition-all hover:-translate-y-1 active:scale-95"
              >
                Hoziroq boshlash
              </a>
            </div>
          </div>

          <div className="relative reveal hidden lg:block" style={{ transitionDelay: '0.2s' }}>
            <div className="relative z-10 w-full aspect-square max-w-[480px] mx-auto group">
              <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-[80px] scale-90 group-hover:scale-100 transition-transform duration-1000"></div>
              <img 
                src="./poktil.png" 
                alt="Poktil Mascot" 
                className="relative z-20 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] animate-float"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 md:opacity-60 animate-bounce">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Pastga suring</span>
        <div className="w-[1px] h-10 md:h-16 bg-gradient-to-b from-sky-500 to-transparent"></div>
      </div>
    </section>
  );
};

const WhySection: React.FC = () => {
  const ref = useReveal();
  return (
    <section id="nega" className="snap-section bg-white dark:bg-slate-900 px-4 md:px-8" ref={ref}>
      <div className="snap-content">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 md:gap-24 items-center">
          <div className="reveal order-2 lg:order-1">
            <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-video border border-slate-200 dark:border-slate-800 shadow-2xl transition-all duration-700 hover:scale-[1.02]">
               <video 
                 src="./poktil-video.mp4" 
                 muted 
                 autoPlay 
                 loop 
                 playsInline 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-black mb-4 md:mb-10 font-space text-slate-900 dark:text-white leading-tight">
              Nega aynan <br/><span className="text-sky-500">Poktil?</span>
            </h2>
            <div className="space-y-4 md:space-y-8">
              <div className="flex gap-4 md:gap-6 group">
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500 font-bold text-lg md:text-2xl font-space group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">01</div>
                <div>
                  <h4 className="text-lg md:text-2xl font-bold mb-1 text-slate-900 dark:text-white">Madaniyatli Jamiyat</h4>
                  <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400">Biz internetda o'zbek muloqotini yangi bosqichga olib chiqmoqchimiz.</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6 group">
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500 font-bold text-lg md:text-2xl font-space group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">02</div>
                <div>
                  <h4 className="text-lg md:text-2xl font-bold mb-1 text-slate-900 dark:text-white">Haqiqiy Vaqtda Filtr</h4>
                  <p className="text-sm md:text-lg text-slate-600 dark:text-slate-400">Har qanday haqorat millisekundlarda yo'q qilinadi.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 md:mt-16 flex gap-10 md:gap-16 border-t border-slate-100 dark:border-slate-800 pt-8 md:pt-12">
               <div>
                  <p className="text-3xl md:text-5xl font-black text-sky-500 font-space tracking-tighter">99%</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Aniqlik</p>
               </div>
               <div>
                  <p className="text-3xl md:text-5xl font-black text-sky-500 font-space tracking-tighter">200ms</p>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-2">Tezlik</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingSection: React.FC = () => {
  const ref = useReveal();
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activePlan = PRICING_PLANS[selectedIdx];
  
  const getGlowColor = (color: string) => {
    switch(color) {
      case 'emerald': return 'rgba(16, 185, 129, 0.5)';
      case 'purple': return 'rgba(147, 51, 234, 0.5)';
      default: return 'rgba(14, 165, 233, 0.5)';
    }
  };

  const getButtonColor = (color: string) => {
    switch(color) {
      case 'emerald': return 'bg-emerald-500 hover:bg-emerald-600';
      case 'purple': return 'bg-purple-600 hover:bg-purple-700';
      default: return 'bg-sky-500 hover:bg-sky-600';
    }
  };

  return (
    <section id="narxlar" className="snap-section bg-slate-50 dark:bg-slate-950 px-4 md:px-8 relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square bg-sky-500/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="snap-content">
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-20">
          
          {/* Left Side: Navigation Words */}
          <div className="reveal flex md:flex-col items-center md:items-start gap-6 md:gap-12 shrink-0">
            {PRICING_PLANS.map((plan, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedIdx(idx)}
                className={`text-3xl md:text-7xl font-black font-space uppercase tracking-tighter transition-all duration-300 text-left outline-none ${
                  selectedIdx === idx 
                    ? 'text-sky-500 scale-110 md:translate-x-4 neon-text' 
                    : 'text-slate-300 dark:text-slate-700 hover:text-slate-400 dark:hover:text-slate-500 scale-100'
                }`}
              >
                {plan.slug}
              </button>
            ))}
          </div>

          {/* Right Side: Big Container */}
          <div className="reveal flex-grow w-full md:max-w-3xl" style={{ transitionDelay: '0.2s' }}>
            <div 
              className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[4.5rem] glass border-2 transition-all duration-700 relative overflow-hidden flex flex-col min-h-[400px] md:min-h-[500px]"
              style={{ 
                borderColor: getGlowColor(activePlan.color).replace('0.5', '0.2'),
                boxShadow: `0 0 50px ${getGlowColor(activePlan.color).replace('0.5', '0.05')}`
              }}
            >
              {/* Dynamic Glow Ornament */}
              <div 
                className="absolute -top-24 -right-24 w-64 h-64 blur-[100px] transition-colors duration-1000 rounded-full"
                style={{ backgroundColor: getGlowColor(activePlan.color).replace('0.5', '0.2') }}
              ></div>

              {/* Animated Content Wrapper - Using key to trigger CSS animation on switch */}
              <div 
                key={activePlan.slug}
                className="animate-in-smooth flex flex-col h-full"
              >
                <div className="relative z-10 mb-8 md:mb-12">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-4xl md:text-7xl font-black font-space text-slate-900 dark:text-white mb-2 leading-none uppercase tracking-tighter">
                        {activePlan.name}
                      </h2>
                      <p className="text-xl md:text-3xl font-bold text-sky-500/80 font-space tracking-tight">
                        {activePlan.price}
                      </p>
                    </div>
                    {activePlan.highlight && (
                      <span className="px-4 py-2 bg-sky-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-lg shadow-sky-500/30">
                        Best Value
                      </span>
                    )}
                  </div>
                  <p className="text-sm md:text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed max-w-xl">
                    {activePlan.description}
                  </p>
                </div>

                <div className="relative z-10 flex-grow mb-10 md:mb-16">
                  <ul className="grid md:grid-cols-2 gap-4 md:gap-6">
                    {activePlan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <div className="shrink-0 w-6 h-6 rounded-full bg-sky-500 flex items-center justify-center text-white">
                          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm md:text-lg font-bold text-slate-700 dark:text-slate-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-10">
                  <a 
                    href={`https://t.me/poktil_bot?start=subscription`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center w-full md:w-auto px-10 md:px-20 py-5 md:py-6 rounded-2xl md:rounded-full text-white font-black text-sm md:text-xl transition-all shadow-2xl uppercase tracking-[0.2em] transform active:scale-95 ${getButtonColor(activePlan.color)}`}
                  >
                    {activePlan.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FeaturesSection: React.FC = () => {
  const ref = useReveal();
  return (
    <section id="xususiyatlar" className="snap-section bg-white dark:bg-slate-900 px-4 md:px-8" ref={ref}>
      <div className="snap-content">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-6 md:mb-16 reveal">
            <h2 className="text-4xl md:text-6xl font-black mb-2 md:mb-6 font-space text-slate-900 dark:text-white uppercase tracking-tighter">Aqlli Imkoniyatlar</h2>
            <p className="text-xs md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
              Eng ilg'or AI texnologiyalari bilan jihozlangan Poktil har bir xabarni tahlil qiladi.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="reveal group" style={{ transitionDelay: `${idx * 0.1}s` }}>
                <div className="p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] glass border-slate-200 dark:border-slate-800/50 transition-all md:hover:-translate-y-2 md:hover:shadow-2xl md:hover:shadow-sky-500/10 duration-500 h-full flex flex-col">
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-3xl bg-sky-500 text-white flex items-center justify-center mb-4 md:mb-8 shadow-xl group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-2 md:mb-4 font-space text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-base text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
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

const HowItWorksSection: React.FC = () => {
  const ref = useReveal();
  return (
    <section id="qollanma" className="snap-section bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-4 md:px-8" ref={ref}>
      <div className="snap-content">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-24 items-center">
            <div className="reveal">
              <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-12 font-space leading-[0.9] tracking-tight text-slate-900 dark:text-white">
                Boshlash <br className="hidden md:block" />
                juda <span className="text-sky-500">oson.</span>
              </h2>
              <div className="space-y-6 md:space-y-12">
                {STEPS.map((step, idx) => (
                  <div key={idx} className="flex gap-4 md:gap-8 group">
                    <div className="shrink-0 w-10 h-10 md:w-20 md:h-20 rounded-full glass flex items-center justify-center text-lg md:text-4xl font-black font-space border-2 border-slate-300 dark:border-white/10 group-hover:border-sky-500 group-hover:text-sky-500 transition-colors duration-300">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold mb-1 font-space group-hover:text-sky-500 transition-colors">{step.title}</h3>
                      <p className="text-xs md:text-lg text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed font-medium">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal relative" style={{ transitionDelay: '0.2s' }}>
               <div className="p-4 md:p-10 rounded-[2.5rem] md:rounded-[4rem] glass border-slate-200 dark:border-white/5 shadow-2xl relative overflow-hidden bg-white/70 dark:bg-slate-900/40 backdrop-blur-2xl">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-500/10 blur-[80px]"></div>
                  
                  <div className="space-y-3 md:space-y-6">
                     <div className="flex items-start space-x-2 md:space-x-4">
                        <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0"></div>
                        <div className="p-3 md:p-4 bg-slate-100 dark:bg-slate-800/80 rounded-2xl rounded-tl-none max-w-[85%] border border-slate-200/30">
                           <p className="text-[8px] md:text-xs font-bold text-sky-500 mb-0.5 uppercase tracking-wider">G'ayrat</p>
                           <p className="text-[10px] md:text-base dark:text-slate-200">Assalomu alaykum, yaxshimi hamma?</p>
                        </div>
                     </div>
                     <div className="flex items-start space-x-2 md:space-x-4">
                        <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0"></div>
                        <div className="p-3 md:p-4 bg-red-500/5 dark:bg-red-500/10 border border-red-500/10 rounded-2xl rounded-tl-none max-w-[85%]">
                           <p className="text-[8px] md:text-xs font-bold text-red-500 mb-0.5 uppercase tracking-wider">Yomonbola</p>
                           <p className="text-[10px] md:text-base italic text-slate-400 opacity-80">[Xabar o'chirildi]</p>
                        </div>
                     </div>
                     <div className="flex items-start space-x-2 md:space-x-4">
                        <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-sky-500 shadow-lg flex items-center justify-center font-bold text-xs text-white shrink-0">P</div>
                        <div className="p-3 md:p-4 bg-sky-500/5 dark:bg-sky-500/10 border border-sky-500/10 rounded-2xl rounded-tl-none max-w-[85%]">
                           <p className="text-[8px] md:text-xs font-bold text-sky-500 mb-0.5 uppercase tracking-wider">Poktil Bot</p>
                           <p className="text-[10px] md:text-base font-medium dark:text-slate-200">Iltimos, madaniyatli bo'ling! 🛡️</p>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-8 md:mt-16 text-center">
                     <button 
                      onClick={() => document.getElementById('narxlar')?.scrollIntoView({behavior: 'smooth'})}
                      className="inline-block w-full py-3 md:py-6 bg-sky-500 text-white rounded-full font-black text-xs md:text-xl hover:bg-sky-600 transition-all uppercase tracking-[0.2em] shadow-xl hover:shadow-sky-500/40 transform active:scale-95"
                    >
                      Hozir ulanish
                    </button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FooterSection: React.FC = () => {
  const ref = useReveal();
  return (
    <section id="footer" className="snap-section bg-slate-950 text-white px-4 md:px-8 overflow-hidden relative" ref={ref}>
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="snap-content">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="flex items-center space-x-4 mb-8">
               <div className="w-16 h-16 bg-sky-500 rounded-[2rem] flex items-center justify-center text-white text-4xl font-black font-space shadow-[0_0_30px_rgba(56,189,248,0.4)]">P</div>
               <h2 className="text-4xl md:text-6xl font-black font-space tracking-tighter uppercase">Poktil</h2>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold mb-6 text-slate-300 leading-tight">
              Guruh muloqotini bugun <br />
              <span className="text-sky-500">yangi bosqichga</span> olib chiqing.
            </h3>
            <p className="text-slate-400 text-sm md:text-lg mb-10 max-w-md leading-relaxed">
              Poktil — faqat bot emas, u sizning virtual madaniyat posboningiz. 24/7 xizmatda, doimiy yangilanishda.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://t.me/poktil_bot" target="_blank" className="px-8 py-4 bg-sky-500 rounded-full font-black uppercase tracking-widest text-sm hover:bg-sky-600 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-sky-500/20">Botni ishga tushirish</a>
              <a href="https://akbarswe.uz" target="_blank" className="px-8 py-4 glass rounded-full font-black uppercase tracking-widest text-sm hover:bg-white/10 transition-all border-white/10">Bog'lanish</a>
            </div>
          </div>

          <div className="reveal grid grid-cols-2 gap-8 md:gap-16">
            <div>
              <h4 className="text-sky-500 font-black text-xs uppercase tracking-[0.3em] mb-6">Navigatsiya</h4>
              <ul className="space-y-4 text-slate-400 font-bold text-sm">
                <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Bosh sahifa</button></li>
                <li><button onClick={() => document.getElementById('narxlar')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Narxlar</button></li>
                <li><button onClick={() => document.getElementById('xususiyatlar')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Imkoniyatlar</button></li>
                <li><button onClick={() => document.getElementById('qollanma')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors">Qo'llanma</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-purple-500 font-black text-xs uppercase tracking-[0.3em] mb-6">Ijtimoiy</h4>
              <ul className="space-y-4 text-slate-400 font-bold text-sm">
                <li><a href="https://t.me/akbar_swe" target="_blank" className="hover:text-white transition-colors">Telegram</a></li>
                <li><a href="https://instagram.com/akbar_swe" target="_blank" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="https://github.com/akbar-swe" target="_blank" className="hover:text-white transition-colors">GitHub</a></li>
                <li><a href="https://linkedin.com/in/akbar-swe" target="_blank" className="hover:text-white transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 w-full px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/5 gap-4">
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">© 2026 POKTIL PROJECT • BARCHA HUQUQLAR HIMOAYALANGAN</p>
           <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">MADE WITH ❤️ BY AKBAR</p>
        </div>
      </div>
    </section>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    // Force dark mode or respect preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }

    // Handle initial hash in URL on reload
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500); // Increased delay to ensure viewport is ready
      }
    };

    handleInitialHash();
    window.addEventListener('hashchange', handleInitialHash);
    return () => window.removeEventListener('hashchange', handleInitialHash);
  }, []);

  return (
    <div className="selection:bg-sky-500/30">
      <Header />
      <main className="snap-container">
        <Hero />
        <WhySection />
        <PricingSection />
        <FeaturesSection />
        <HowItWorksSection />
        <FooterSection />
      </main>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0) scale(1); }
          50% { transform: translateY(-20px) rotate(2deg) scale(1.02); }
        }
        @keyframes slideUpFade {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.98); 
            filter: blur(4px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
            filter: blur(0);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-in-smooth {
          animation: slideUpFade 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .snap-container {
          scroll-behavior: smooth;
        }
        /* Mobile adjustment for snapping header */
        @media (max-width: 640px) {
           .snap-section {
             padding-top: 68px;
           }
        }
      `}</style>
    </div>
  );
};

export default App;
