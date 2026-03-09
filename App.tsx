
import React, { useEffect, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './Header';
import { Hero } from './Hero';

const WhySection = lazy(() => import('./WhySection'));
const PricingSection = lazy(() => import('./PricingSection'));
const FeaturesSection = lazy(() => import('./FeaturesSection'));
const HowItWorksSection = lazy(() => import('./HowItWorksSection'));
const FooterSection = lazy(() => import('./FooterSection'));

const SectionFallback = () => (
  <div className="h-screen w-full flex items-center justify-center bg-white dark:bg-neutral-950">
    <motion.div 
      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-2 border-[#62b4e0]/20 border-t-[#62b4e0] rounded-full"
    />
  </div>
);

const App: React.FC = () => {
  useEffect(() => {
    const handleInitialHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        setTimeout(() => {
          const el = document.getElementById(id);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 500); 
      }
    };

    handleInitialHash();
    window.addEventListener('hashchange', handleInitialHash);
    return () => window.removeEventListener('hashchange', handleInitialHash);
  }, []);

  return (
    <div className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-[#62b4e0]/30 selection:text-[#62b4e0] dark:selection:text-white transition-colors duration-300">
      <Header />
      
      <main className="main-container overflow-x-hidden">
        <Hero />
        <Suspense fallback={<SectionFallback />}>
          <WhySection />
          <PricingSection />
          <FeaturesSection />
          <HowItWorksSection />
          <FooterSection />
        </Suspense>
      </main>

      <style>{`
        .main-container {
          scroll-behavior: smooth;
        }
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default App;
