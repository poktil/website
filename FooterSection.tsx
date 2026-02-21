
import React from 'react';
import { motion } from 'motion/react';
import { Shield, Send, Instagram, Github, Linkedin, Crown, Globe } from 'lucide-react';
import { SOCIAL_LINKS } from './constants';

const FooterSection: React.FC = () => {
  const getIcon = (name: string) => {
    if (name.includes('LinkedIn')) return <Linkedin className="w-4 h-4" />;
    if (name.includes('Instagram')) return <Instagram className="w-4 h-4" />;
    if (name.includes('Telegram')) return <Send className="w-4 h-4" />;
    return <Globe className="w-4 h-4" />;
  };

  return (
    <section id="footer" className="snap-section bg-neutral-950 text-white px-4 md:px-8 relative py-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="snap-content relative z-10">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-24 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-6 mb-12">
               <h2 className="text-5xl font-light font-serif tracking-[0.2em] uppercase">Poktil</h2>
            </div>
            <h3 className="text-4xl md:text-5xl font-light mb-10 text-neutral-300 leading-tight font-serif italic">
              Guruh muloqotini <br />
              <span className="text-[#62b4e0]">yangi bosqichga</span> olib chiqing.
            </h3>
            <p className="text-neutral-500 text-lg mb-12 max-w-md font-light leading-relaxed">
              Poktil — faqat bot emas, u sizning virtual madaniyat posboningiz. 24/7 xizmatda.
            </p>
            <div className="flex flex-wrap gap-8">
              <motion.a 
                whileHover={{ scale: 1.02, backgroundColor: '#62b4e0', color: '#000' }}
                whileTap={{ scale: 0.98 }}
                href="https://t.me/poktil_bot" 
                className="px-12 py-5 bg-white/5 border border-white/10 rounded-[2rem] font-bold uppercase tracking-widest text-[10px] transition-all"
              >
                Botga o'tish
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                href="https://akbarswe.uz" 
                className="px-12 py-5 bg-transparent border border-white/10 rounded-[2rem] font-bold uppercase tracking-widest text-[10px] transition-all"
              >
                Bog'lanish
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-16"
          >
            <div>
              <h4 className="text-[#62b4e0] font-bold text-[10px] uppercase tracking-[0.5em] mb-10">Navigatsiya</h4>
              <ul className="space-y-6 text-neutral-500 font-light text-sm tracking-widest">
                <li><button onClick={() => document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors uppercase">Bosh sahifa</button></li>
                <li><button onClick={() => document.getElementById('narxlar')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors uppercase">Narxlar</button></li>
                <li><button onClick={() => document.getElementById('xususiyatlar')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors uppercase">Imkoniyatlar</button></li>
                <li><button onClick={() => document.getElementById('qollanma')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-white transition-colors uppercase">Qo'llanma</button></li>
              </ul>
            </div>
            <div>
              <h4 className="text-neutral-300 font-bold text-[10px] uppercase tracking-[0.5em] mb-10">Ijtimoiy</h4>
              <ul className="space-y-6 text-neutral-500 font-light text-sm tracking-widest">
                {SOCIAL_LINKS.map((social, idx) => (
                  <li key={idx}>
                    <a href={social.link} className="hover:text-white transition-colors flex items-center gap-3 uppercase">
                      {getIcon(social.name)}
                      {social.name.split(' ')[0]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <p className="text-[9px] font-bold uppercase tracking-[0.6em] text-neutral-700">© 2026 POKTIL PROJECT • BARCHA HUQUQLAR HIMOAYALANGAN</p>
           <div className="flex items-center gap-4">
             <Crown className="w-4 h-4 text-[#62b4e0] opacity-20" />
             <p className="text-[9px] font-bold uppercase tracking-[0.6em] text-neutral-700">
               MADE BY <a href="https://akbarswe.uz" className="hover:text-[#62b4e0] transition-colors">AKBAR</a>
             </p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
