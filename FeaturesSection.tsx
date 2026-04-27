
import React from 'react';
import { motion } from 'motion/react';
import { FEATURES } from './constants';

const FeaturesSection: React.FC = () => {
  return (
    <section id="xususiyatlar" className="snap-section bg-white dark:bg-neutral-950 px-6 md:px-12 relative overflow-hidden py-32 transition-colors duration-300">
      <div className="snap-content relative z-10 w-full">
        <div className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30, filter: 'blur(15px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-8xl font-light mb-8 font-serif text-neutral-900 dark:text-white uppercase tracking-tight">Imkoniyatlar</h2>
            <p className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
              Tezkor, aniq va ishonchli. Poktil har bir harfni nazorat qiladi va guruhingizni pok saqlaydi.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-12 rounded-[3rem] bg-black/[0.02] dark:bg-white/[0.02] border border-black/10 dark:border-white/5 hover:border-[#62b4e0]/30 transition-all duration-500 group h-full shadow-2xl"
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 rounded-[2.5rem] bg-[#62b4e0]/10 text-[#62b4e0] flex items-center justify-center mb-10 group-hover:bg-[#62b4e0] group-hover:text-white dark:group-hover:text-black transition-all duration-500 shadow-[0_0_30px_rgba(98,180,224,0.2)]"
                >
                  {React.cloneElement(feature.icon as React.ReactElement<any>, { className: "w-8 h-8" })}
                </motion.div>
                <h3 className="text-2xl font-bold mb-5 font-serif text-neutral-900 dark:text-white group-hover:text-[#62b4e0] transition-colors tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-500 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
