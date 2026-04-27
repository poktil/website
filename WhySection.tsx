
import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Crown, Fingerprint } from 'lucide-react';

const WhySection: React.FC = () => {
  return (
    <section id="nega" className="snap-section bg-white dark:bg-neutral-950 px-6 md:px-12 relative overflow-hidden py-32 transition-colors duration-300">
      <div className="snap-content relative z-10 w-full">
        <div className="w-full grid lg:grid-cols-2 gap-20 md:gap-32 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(15px)' }}
            whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-[3rem] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl aspect-video bg-neutral-100 dark:bg-neutral-900 group">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-1000"
              >
                <source src="/poktil-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-neutral-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <div className="flex items-center gap-4 px-6 py-3 bg-black/5 dark:bg-white/5 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-[2rem]">
                  <div className="w-3 h-3 rounded-full bg-[#62b4e0] animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-900 dark:text-white">Jonli Monitoring</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-5xl md:text-7xl font-light mb-10 text-neutral-900 dark:text-white leading-tight font-serif">
              Nega aynan <br />
              <span className="text-[#62b4e0] italic">Poktil?</span>
            </h2>
            <div className="space-y-10">
              {[
                { icon: <Shield className="w-6 h-6" />, title: "Mutlaq Himoya", desc: "Guruh muloqotini 24/7 nazorat qiladi va nojo'ya so'zlarni lahzalarda o'chiradi." },
                { icon: <Fingerprint className="w-6 h-6" />, title: "AI Texnologiyasi", desc: "O'zbek tilining barcha dialektlari va yashirin haqoratlarini tushunadigan aqlli tizim." },
                { icon: <Sparkles className="w-6 h-6" />, title: "Madaniyat", desc: "Faqat taqiq emas, balki guruhda o'zaro hurmat va madaniyatni shakllantirishga yordam beradi." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-8 group"
                >
                  <div className="shrink-0 w-16 h-16 rounded-[2.5rem] bg-[#62b4e0]/10 border border-[#62b4e0]/20 flex items-center justify-center text-[#62b4e0] group-hover:bg-[#62b4e0] group-hover:text-white dark:group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(98,180,224,0.1)]">
                    {React.cloneElement(item.icon as React.ReactElement<any>, { className: "w-7 h-7" })}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white font-serif tracking-wide">{item.title}</h4>
                    <p className="text-neutral-600 dark:text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-black/5 dark:border-white/5 grid grid-cols-2 gap-12">
              <div>
                <p className="text-4xl font-light text-neutral-900 dark:text-white font-serif mb-1">10k+</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 dark:text-neutral-600">Faol Guruhlar</p>
              </div>
              <div>
                <p className="text-4xl font-light text-neutral-900 dark:text-white font-serif mb-1">1.2m+</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-400 dark:text-neutral-600">Tozalangan Xabarlar</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhySection;
