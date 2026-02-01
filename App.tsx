import React, { useState, useEffect, useRef } from 'react'
import { FEATURES, STEPS } from './constants'

const useReveal = () => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1 },
    )
    if (ref.current) {
      const reveals = ref.current.querySelectorAll('.reveal')
      reveals.forEach((el) => observer.observe(el))
    }
    return () => observer.disconnect()
  }, [])
  return ref
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector('.snap-container')
      if (container) {
        setIsScrolled(container.scrollTop > 50)
      }
    }
    const container = document.querySelector('.snap-container')
    container?.addEventListener('scroll', handleScroll)
    return () => container?.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'py-2 md:py-4' : 'py-3 md:py-6'}`}
    >
      <div
        className={`max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between rounded-full border transition-all duration-500 ${isScrolled ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-slate-200/50 dark:border-slate-800/50 shadow-lg px-6 md:px-8' : 'bg-transparent border-transparent'}`}
      >
        <div className="flex items-center space-x-2 md:space-x-3 group cursor-pointer py-1.5 md:py-2">
          <div className="w-7 h-7 md:w-10 md:h-10 bg-sky-500 rounded-lg md:rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(56,189,248,0.4)] transform transition-transform group-hover:rotate-12">
            <span className="text-white font-black text-base md:text-xl font-space">
              P
            </span>
          </div>
          <span className="text-lg md:text-2xl font-bold tracking-tighter text-slate-900 dark:text-white font-space uppercase">
            Poktil
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {['Nega?', 'Xususiyatlar', "Qo'llanma"].map((item, idx) => (
            <a
              key={idx}
              href={`#section-${idx + 1}`}
              target="_self"
              className="text-xs font-bold text-slate-600 dark:text-slate-400 hover:text-sky-500 transition-colors uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="https://t.me/poktil_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 px-3.5 md:px-6 py-1.5 md:py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-bold text-[10px] md:text-sm transition-all shadow-lg hover:shadow-sky-500/40 transform hover:-translate-y-0.5"
        >
          <svg
            className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.11.02-1.93 1.23-5.46 3.62-.51.35-.98.52-1.4.51-.46-.01-1.35-.26-2.01-.48-.81-.27-1.45-.42-1.39-.88.03-.24.36-.48.99-.74 3.88-1.69 6.46-2.8 7.74-3.35 3.68-1.57 4.45-1.84 4.95-1.85.11 0 .35.03.5.16.13.12.17.29.18.42 0 .04-.01.12-.02.19z" />
          </svg>
          <span>Botga o'tish</span>
        </a>
      </div>
    </header>
  )
}

const Hero: React.FC = () => {
  const ref = useReveal()
  return (
    <section
      id="section-0"
      className="snap-section bg-slate-50 dark:bg-slate-950 px-4"
      ref={ref}
    >
      <div className="absolute top-[-10%] right-[-5%] w-[40%] aspect-square bg-sky-500/10 rounded-full blur-[120px] animate-pulse"></div>

      <div className="snap-content">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-4 md:gap-16 items-center">
          <div className="reveal text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-500 text-[9px] md:text-xs font-black mb-4 md:mb-8 tracking-[0.2em] uppercase mx-auto lg:mx-0">
              <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2 mr-2 md:mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-sky-500"></span>
              </span>
              O'ZBEK TILI HIMOYACHISI
            </div>
            <h1 className="text-4xl md:text-8xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 leading-[1] md:leading-[0.9] font-space">
              Pok til <br />
              <span className="text-sky-500 neon-text">Madaniyat</span>
            </h1>
            <p className="text-sm md:text-xl text-slate-600 dark:text-slate-400 mb-6 md:mb-10 max-w-lg leading-relaxed font-medium mx-auto lg:mx-0">
              Poktil — Telegram guruhlaridagi toksiklikni AI yordamida
              yo'qotuvchi eng tezkor o'zbek yordamchisi.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="https://t.me/poktil_bot"
                className="px-6 md:px-10 py-3 md:py-5 bg-sky-500 text-white rounded-[1.2rem] md:rounded-[2rem] font-black text-sm md:text-xl shadow-2xl shadow-sky-500/30 hover:shadow-sky-500/50 transition-all hover:-translate-y-1"
              >
                Hoziroq boshlash
              </a>
            </div>
          </div>

          <div
            className="relative reveal hidden lg:block"
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="relative z-10 w-full aspect-square max-w-[420px] mx-auto group">
              <div className="absolute inset-0 bg-sky-500/20 rounded-full blur-[80px] scale-90"></div>
              <img
                src="./poktil.png"
                alt="Poktil Mascot"
                className="relative z-20 w-full h-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)] animate-float"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://cdn-icons-png.flaticon.com/512/8649/8649607.png'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 md:opacity-60">
        <span className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 md:mb-4">
          Pastga suring
        </span>
        <div className="w-[1px] h-6 md:h-12 bg-gradient-to-b from-sky-500 to-transparent"></div>
      </div>
    </section>
  )
}

const WhySection: React.FC = () => {
  const ref = useReveal()
  return (
    <section
      id="section-1"
      className="snap-section bg-white dark:bg-slate-900 px-4"
      ref={ref}
    >
      <div className="snap-content">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 md:gap-24 items-center">
          <div className="reveal order-2 lg:order-1">
            <div className="relative rounded-[1.5rem] md:rounded-[3rem] overflow-hidden aspect-video border border-slate-200 dark:border-slate-800 shadow-none dark:shadow-2xl transition-all duration-500">
              <video
                src="./poktil-video.mp4"
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 to-transparent pointer-events-none"></div>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <h2 className="text-3xl md:text-5xl font-black mb-4 md:mb-10 font-space text-slate-900 dark:text-white leading-tight">
              Nega aynan <span className="text-sky-500">Poktil?</span>
            </h2>
            <div className="space-y-4 md:space-y-8">
              <div className="flex gap-4 md:gap-6">
                <div className="shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500 font-bold text-base md:text-xl font-space">
                  01
                </div>
                <div>
                  <h4 className="text-base md:text-xl font-bold mb-1 text-slate-900 dark:text-white">
                    Madaniyatli Jamiyat
                  </h4>
                  <p className="text-xs md:text-base text-slate-600 dark:text-slate-400">
                    Biz internetda o'zbek muloqotini yangi bosqichga olib
                    chiqmoqchimiz.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-6">
                <div className="shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg md:rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-500 font-bold text-base md:text-xl font-space">
                  02
                </div>
                <div>
                  <h4 className="text-base md:text-xl font-bold mb-1 text-slate-900 dark:text-white">
                    Haqiqiy Vaqtda Filtr
                  </h4>
                  <p className="text-xs md:text-base text-slate-600 dark:text-slate-400">
                    Har qanday haqorat millisekundlarda yo'q qilinadi.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-16 flex gap-8 md:gap-12 border-t border-slate-100 dark:border-slate-800 pt-6 md:pt-10">
              <div>
                <p className="text-xl md:text-3xl font-black text-sky-500 font-space">
                  99%
                </p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                  Aniqlik
                </p>
              </div>
              <div>
                <p className="text-xl md:text-3xl font-black text-sky-500 font-space">
                  200ms
                </p>
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mt-0.5">
                  Tezlik
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const FeaturesSection: React.FC = () => {
  const ref = useReveal()
  return (
    <section
      id="section-2"
      className="snap-section bg-slate-50 dark:bg-slate-950 px-4"
      ref={ref}
    >
      <div className="snap-content">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-6 md:mb-12 reveal">
            <h2 className="text-3xl md:text-5xl font-black mb-2 md:mb-4 font-space text-slate-900 dark:text-white uppercase tracking-tighter">
              Aqlli Imkoniyatlar
            </h2>
            <p className="text-xs md:text-base text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium">
              Eng ilg'or AI texnologiyalari bilan jihozlangan Poktil har bir
              xabarni tahlil qiladi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {FEATURES.map((feature, idx) => (
              <div
                key={idx}
                className="reveal group"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="p-5 md:p-8 rounded-[1.2rem] md:rounded-[2.5rem] glass border-slate-200 dark:border-slate-800 transition-all md:hover:-translate-y-1.5 duration-500 h-full flex flex-col">
                  <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-[1.2rem] bg-sky-500 text-white flex items-center justify-center mb-4 md:mb-6 shadow-md">
                    {feature.icon}
                  </div>
                  <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 font-space text-slate-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-[11px] md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const HowItWorksSection: React.FC = () => {
  const ref = useReveal()
  return (
    <section
      id="section-3"
      className="snap-section bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white px-4"
      ref={ref}
    >
      <div className="snap-content">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-20 items-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 font-space leading-[1]">
                Boshlash <br className="hidden md:block" />
                juda <span className="text-sky-500">oson.</span>
              </h2>
              <div className="space-y-5 md:space-y-10">
                {STEPS.map((step, idx) => (
                  <div key={idx} className="flex gap-4 md:gap-8 group">
                    <div className="shrink-0 w-10 h-10 md:w-16 md:h-16 rounded-full glass flex items-center justify-center text-lg md:text-3xl font-black font-space border-2 border-slate-300 dark:border-white/10">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-base md:text-xl font-bold mb-0.5 md:mb-2 font-space">
                        {step.title}
                      </h3>
                      <p className="text-[11px] md:text-base text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed font-medium">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="reveal relative"
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="p-4 md:p-8 rounded-[1.2rem] md:rounded-[3rem] glass border-slate-200 dark:border-white/5 shadow-xl relative overflow-hidden bg-white/60 dark:bg-slate-900/40">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-sky-500/20 blur-[60px]"></div>

                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0"></div>
                    <div className="p-2.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl rounded-tl-none max-w-[85%] border border-slate-200/30">
                      <p className="text-[8px] md:text-[9px] font-bold text-sky-500 mb-0.5 uppercase tracking-tighter">
                        G'ayrat
                      </p>
                      <p className="text-[10px] md:text-sm">
                        Assalomu alaykum, yaxshimi hamma?
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-slate-200 dark:bg-slate-800 shrink-0"></div>
                    <div className="p-2.5 bg-red-500/5 dark:bg-red-500/10 border border-red-500/10 rounded-xl rounded-tl-none max-w-[85%]">
                      <p className="text-[8px] md:text-[9px] font-bold text-red-500 mb-0.5 uppercase tracking-tighter">
                        Yomonbola
                      </p>
                      <p className="text-[10px] md:text-sm italic text-slate-400 opacity-80">
                        [Xabar o'chirildi]
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2 md:space-x-3">
                    <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-sky-500 shadow-lg flex items-center justify-center font-bold text-[9px] text-white shrink-0">
                      P
                    </div>
                    <div className="p-2.5 bg-sky-500/5 dark:bg-sky-500/10 border border-sky-500/10 rounded-xl rounded-tl-none max-w-[85%]">
                      <p className="text-[8px] md:text-[9px] font-bold text-sky-500 mb-0.5 uppercase tracking-tighter">
                        Poktil Bot
                      </p>
                      <p className="text-[10px] md:text-sm">
                        Iltimos, madaniyatli bo'ling! 🛡️
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 md:mt-10 text-center">
                  <a
                    href="https://t.me/poktil_bot"
                    className="inline-block w-full py-3 md:py-4 bg-sky-500 text-white rounded-full font-black text-xs md:text-lg hover:bg-sky-600 transition-all uppercase tracking-widest shadow-lg"
                  >
                    Hozir ulanish
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-0 w-full px-6 flex justify-between items-center text-[7px] md:text-[9px] font-black uppercase tracking-[0.1em] md:tracking-[0.3em] text-slate-400">
        <span>© 2026 POKTIL</span>
        <a
          href="https://akbarswe.uz"
          className="hover:text-sky-500 transition-colors"
        >
          Made by Akbar
        </a>
      </div>
    </section>
  )
}

const App: React.FC = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  return (
    <div className="selection:bg-sky-500/30">
      <Header />
      <main className="snap-container">
        <Hero />
        <WhySection />
        <FeaturesSection />
        <HowItWorksSection />
      </main>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-12px) rotate(1deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default App
