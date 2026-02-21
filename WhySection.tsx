
import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, Crown, Fingerprint } from 'lucide-react';

const WhySection: React.FC = () => {
  return (
    <section id="nega" className="snap-section bg-neutral-950 px-4 md:px-8 relative overflow-hidden py-24">
      <div className="snap-content relative z-10">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl aspect-video bg-neutral-900 group">
              <video 
                autoPlay 
                muted 
                loop 
                playsInline
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-1000"
              >
                <source src="/poktil-video.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <div className="flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem]">
                  <div className="w-3 h-3 rounded-full bg-[#62b4e0] animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">Jonli Monitoring</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-5xl md:text-7xl font-light mb-10 text-white leading-tight font-serif">
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
                  <div className="shrink-0 w-14 h-14 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center text-[#62b4e0] group-hover:bg-[#62b4e0] group-hover:text-black transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-white font-serif tracking-wide">{item.title}</h4>
                    <p className="text-neutral-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 pt-12 border-t border-white/5 grid grid-cols-2 gap-12">
              <div>
                <p className="text-4xl font-light text-white font-serif mb-1">10k+</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-600">Faol Guruhlar</p>
              </div>
              <div>
                <p className="text-4xl font-light text-white font-serif mb-1">1.2m+</p>
                <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-600">Tozalangan Xabarlar</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhySection;
