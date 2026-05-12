import { type RefObject, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAPReducedMotion } from './useGSAPReducedMotion';

export function useGSAPTextReveal<T extends HTMLElement>(ref: RefObject<T>) {
  const reducedMotion = useGSAPReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;
    const context = gsap.context(() => {
      gsap.fromTo(node, { autoAlpha: 0, yPercent: 18 }, { autoAlpha: 1, yPercent: 0, duration: 0.9, ease: 'power4.out' });
    }, node);
    return () => context.revert();
  }, [ref, reducedMotion]);
}
