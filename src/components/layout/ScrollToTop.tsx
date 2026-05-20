import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    if (!('scrollRestoration' in window.history)) return;

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const previousRootScrollBehavior = root.style.scrollBehavior;
    const previousBodyScrollBehavior = body.style.scrollBehavior;
    let timeoutId: number | undefined;

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      document.scrollingElement?.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      root.scrollTop = 0;
      body.scrollTop = 0;
    };

    const restoreScrollBehavior = () => {
      root.style.scrollBehavior = previousRootScrollBehavior;
      body.style.scrollBehavior = previousBodyScrollBehavior;
    };

    root.style.scrollBehavior = 'auto';
    body.style.scrollBehavior = 'auto';

    scrollToTop();
    timeoutId = window.setTimeout(() => {
      scrollToTop();
      restoreScrollBehavior();
    }, 0);

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
      restoreScrollBehavior();
    };
  }, [location.key]);

  return null;
}
