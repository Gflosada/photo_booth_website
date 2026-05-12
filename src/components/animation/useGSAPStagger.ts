import { type RefObject, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAPReducedMotion } from './useGSAPReducedMotion';

export function useGSAPStagger<T extends HTMLElement>(ref: RefObject<T>, selector = '[data-stagger]') {
  const reducedMotion = useGSAPReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || reducedMotion) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        selector,
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: node, start: 'top 82%', once: true } },
      );
    }, node);

    return () => context.revert();
  }, [ref, reducedMotion, selector]);
}
