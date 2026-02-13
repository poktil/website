
import { useEffect, useRef } from 'react';

export const useReveal = () => {
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
