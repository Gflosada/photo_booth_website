import { type RefObject, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAPReducedMotion } from './useGSAPReducedMotion';

export function useGSAPReveal<T extends HTMLElement>(ref: RefObject<T>, options: { y?: number; delay?: number } = {}) {
  const reducedMotion = useGSAPReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        node,
        { autoAlpha: 0, y: options.y ?? 28 },
        {
          autoAlpha: 1,
          y: 0,
          delay: options.delay ?? 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: node, start: 'top 85%', once: true },
        },
      );
    }, node);

    return () => {
      context.revert();
      ScrollTrigger.refresh();
    };
  }, [ref, reducedMotion, options.y, options.delay]);
}
