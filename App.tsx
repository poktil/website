
import React, { useEffect, Suspense, lazy } from 'react';
import { Header } from './Header';
import { Hero } from './Hero';

// Lazy load sections below the fold for better initial performance
const WhySection = lazy(() => import('./WhySection'));
const PricingSection = lazy(() => import('./PricingSection'));
const FeaturesSection = lazy(() => import('./FeaturesSection'));
const HowItWorksSection = lazy(() => import('./HowItWorksSection'));
const FooterSection = lazy(() => import('./FooterSection'));

const SectionFallback = () => (
  <div className="snap-section bg-slate-50 dark:bg-slate-950 flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
        }, 500); 
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
        <Suspense fallback={<SectionFallback />}>
          <WhySection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <PricingSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FeaturesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <HowItWorksSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FooterSection />
        </Suspense>
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
