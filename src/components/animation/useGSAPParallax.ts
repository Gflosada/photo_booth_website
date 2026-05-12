import { type RefObject, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAPReducedMotion } from './useGSAPReducedMotion';

export function useGSAPParallax<T extends HTMLElement>(ref: RefObject<T>, distance = 60) {
  const reducedMotion = useGSAPReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;
    const context = gsap.context(() => {
      gsap.to(node, { y: distance, ease: 'none', scrollTrigger: { trigger: node, scrub: true } });
    }, node);
    return () => context.revert();
  }, [distance, ref, reducedMotion]);
}
