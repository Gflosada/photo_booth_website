import { type RefObject, useEffect } from 'react';
import gsap from 'gsap';
import { useLocation } from 'react-router';
import { useGSAPReducedMotion } from './useGSAPReducedMotion';

export function useGSAPPageTransition<T extends HTMLElement>(ref: RefObject<T | null>) {
  const location = useLocation();
  const reducedMotion = useGSAPReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;
    const context = gsap.context(() => {
      gsap.fromTo(node, { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: 0.45, ease: 'power2.out' });
    }, node);
    return () => context.revert();
  }, [location.pathname, ref, reducedMotion]);
}
