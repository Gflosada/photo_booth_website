import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { ChevronRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/app/components/ui/button';
import { useGSAPReducedMotion } from './useGSAPReducedMotion';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stackItems = [
  {
    image: '/images/ChatGPT Image May 12, 2026, 11_02_36 AM.png',
    eyebrow: 'Step 01',
    title: 'Step in',
    description: 'Guests enter the booth with props, energy, and excitement.',
    alt: 'Guests enjoying an Orlando photo booth experience',
  },
  {
    image: '/images/ChatGPT Image May 12, 2026, 11_07_14 AM.png',
    eyebrow: 'Step 02',
    title: 'Pose together',
    description: 'The booth captures polished, fun, high-quality moments.',
    alt: 'Photo booth guests posing together at an event',
  },
  {
    image: '/images/ChatGPT Image May 12, 2026, 11_21_33 AM.png',
    eyebrow: 'Step 03',
    title: 'Share instantly',
    description: 'Photos become instant social content and event memories.',
    alt: 'Photo booth content ready to share at an Orlando event',
  },
  {
    image: '/images/ChatGPT Image May 12, 2026, 11_29_10 AM.png',
    eyebrow: 'Step 04',
    title: 'Remember forever',
    description: 'Your celebration gets a premium experience guests actually love.',
    alt: 'Premium Orlando photo booth keepsake moment',
  },
];

type StickyImageStackSectionProps = {
  onBookClick?: () => void;
};

export function StickyImageStackSection({ onBookClick }: StickyImageStackSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const textRefs = useRef<HTMLDivElement[]>([]);
  const reducedMotion = useGSAPReducedMotion();
  const [isMobileStack, setIsMobileStack] = useState(false);
  const [activeMobileStep, setActiveMobileStep] = useState(0);

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)');
    const update = () => setIsMobileStack(query.matches);

    update();
    query.addEventListener('change', update);

    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!isMobileStack || reducedMotion) return;

    const rotation = window.setInterval(() => {
      setActiveMobileStep((current) => (current + 1) % stackItems.length);
    }, 2600);

    return () => window.clearInterval(rotation);
  }, [isMobileStack, reducedMotion]);

  useEffect(() => {
    ScrollTrigger.config({ ignoreMobileResize: true });

    const refresh = () => {
      window.requestAnimationFrame(() => ScrollTrigger.refresh());
    };

    const images = stackItems.map((item) => {
      const image = new Image();
      image.src = item.image;
      return image.decode?.().catch(() => undefined);
    });

    Promise.all(images).then(refresh);

    const refreshTimers = [250, 750, 1400].map((delay) => window.setTimeout(refresh, delay));
    window.addEventListener('load', refresh);
    window.addEventListener('pageshow', refresh);
    window.addEventListener('orientationchange', refresh);
    window.visualViewport?.addEventListener('resize', refresh);

    return () => {
      refreshTimers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener('load', refresh);
      window.removeEventListener('pageshow', refresh);
      window.removeEventListener('orientationchange', refresh);
      window.visualViewport?.removeEventListener('resize', refresh);
    };
  }, []);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const cards = cardRefs.current.filter(Boolean);
      const textBlocks = textRefs.current.filter(Boolean);

      if (!section || cards.length === 0 || textBlocks.length === 0) return;

      if (reducedMotion || isMobileStack) {
        gsap.set(cards, { clearProps: 'all' });
        gsap.set(textBlocks, { clearProps: 'all' });
        return;
      }

      gsap.set(cards, {
        autoAlpha: 1,
        filter: 'none',
        transformOrigin: '50% 70%',
        force3D: true,
        opacity: (index) => (index === 0 ? 1 : 0.76),
        y: (index) => (index === 0 ? 0 : 54 + index * 14),
        scale: (index) => 1 - index * 0.045,
        rotate: (index) => [-1, 3, -2, 2][index] ?? 0,
        zIndex: (index) => stackItems.length - index,
      });
      gsap.set(textBlocks[0], { autoAlpha: 1, y: 0 });
      gsap.set(textBlocks.slice(1), { autoAlpha: 0, y: 18 });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
          fastScrollEnd: true,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      stackItems.slice(1).forEach((_, index) => {
        const currentIndex = index + 1;
        const previousCard = cards[currentIndex - 1];
        const currentCard = cards[currentIndex];
        const previousText = textBlocks[currentIndex - 1];
        const currentText = textBlocks[currentIndex];
        const stepPosition = index + 0.15;

        timeline
          .set(currentCard, { zIndex: stackItems.length + currentIndex }, stepPosition)
          .to(
            previousCard,
            {
              y: -22,
              scale: 0.94,
              rotate: currentIndex % 2 === 0 ? -3 : 3,
              opacity: 0.58,
              filter: 'blur(0.8px)',
              duration: 0.55,
              ease: 'power2.out',
            },
            stepPosition,
          )
          .to(
            previousText,
            {
              autoAlpha: 0,
              y: -18,
              duration: 0.28,
              ease: 'power2.inOut',
            },
            stepPosition,
          )
          .to(
            currentCard,
            {
              opacity: 1,
              filter: 'none',
              y: 0,
              scale: 1,
              rotate: currentIndex % 2 === 0 ? 1 : -1,
              duration: 0.72,
              ease: 'power3.out',
            },
            stepPosition + 0.08,
          )
          .to(
            currentText,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.32,
              ease: 'power2.out',
            },
            stepPosition + 0.28,
          );
      });
    },
    { dependencies: [isMobileStack, reducedMotion], revertOnUpdate: true, scope: sectionRef },
  );

  const currentMobileItem = stackItems[activeMobileStep];

  return (
    <section
      ref={sectionRef}
      className={`relative bg-black text-white ${
        reducedMotion || isMobileStack ? 'py-16 md:py-24' : 'min-h-[420vh]'
      }`}
      aria-labelledby="sticky-stack-heading"
    >
      <div
        className={`${reducedMotion || isMobileStack ? 'relative' : 'sticky top-0'} flex min-h-[100vh] min-h-[100dvh] items-start overflow-hidden px-3 pb-28 pt-[calc(env(safe-area-inset-top)+5.25rem)] min-[390px]:pt-[calc(env(safe-area-inset-top)+5.75rem)] md:min-h-screen md:items-center md:px-0 md:py-20`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_8%,rgba(127,53,255,0.16),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(255,53,165,0.12),transparent_38%)] md:bg-[radial-gradient(circle_at_25%_20%,rgba(127,53,255,0.18),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(255,53,165,0.14),transparent_38%)]" />
        <div className="relative z-10 mx-auto grid w-full max-w-[360px] grid-cols-1 items-start gap-4 sm:max-w-[430px] md:max-w-7xl md:items-center md:gap-8 md:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="relative z-20 w-full max-w-xl">
            <div className="mb-3 hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs text-white/85 backdrop-blur-md md:mb-6 md:inline-flex md:px-4 md:text-sm">
              <Sparkles className="h-4 w-4 text-[#F5D76E]" />
              Photo Booth Experience
            </div>

            <h2 id="sticky-stack-heading" className="mb-3 hidden text-3xl leading-tight text-white md:mb-5 md:block md:text-6xl">
              From pose to party highlight.
            </h2>
            <p className="mb-5 hidden text-base leading-7 text-white/65 md:mb-10 md:block md:text-xl">
              Create a photo booth moment your guests will talk about, share, and remember long
              after the event.
            </p>

            {isMobileStack && !reducedMotion ? (
              <div className="relative min-h-[7.75rem] min-[390px]:min-h-[7.25rem] md:hidden">
                <div key={currentMobileItem.eyebrow} className="animate-in fade-in slide-in-from-bottom-3 duration-500">
                  <p className="mb-2 text-[0.68rem] uppercase tracking-[0.24em] text-[#F7E7B4]">
                    {currentMobileItem.eyebrow}
                  </p>
                  <h3 className="mb-2 text-[1.35rem] leading-tight text-white">{currentMobileItem.title}</h3>
                  <p className="max-w-[22rem] text-sm leading-6 text-white/68">
                    {currentMobileItem.description}
                  </p>
                </div>
              </div>
            ) : null}

            <div className={reducedMotion ? 'space-y-6' : `${isMobileStack ? 'hidden md:relative md:block' : 'relative'} min-h-[7.75rem] min-[390px]:min-h-[7.25rem] md:min-h-[14rem]`}>
              {stackItems.map((item, index) => (
                <div
                  key={item.eyebrow}
                  ref={(node) => {
                    if (node) textRefs.current[index] = node;
                  }}
                  className={
                    reducedMotion
                      ? 'rounded-3xl border border-white/10 bg-white/5 p-5'
                      : 'absolute inset-x-0 top-0'
                  }
                >
                  <p className="mb-2 text-[0.68rem] uppercase tracking-[0.24em] text-[#F7E7B4] md:mb-3 md:text-sm md:tracking-[0.28em]">
                    {item.eyebrow}
                  </p>
                  <h3 className="mb-2 text-[1.35rem] leading-tight text-white md:mb-3 md:text-4xl">{item.title}</h3>
                  <p className="max-w-[22rem] text-sm leading-6 text-white/68 md:text-lg md:leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <Button
              onClick={onBookClick}
              className="mt-8 hidden opbe-btn-primary px-8 py-6 text-lg md:inline-flex"
            >
              Book Your Photo Booth
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative mx-auto h-[clamp(190px,28vh,255px)] w-full max-w-[360px] min-[390px]:h-[clamp(215px,30vh,285px)] sm:h-[clamp(250px,36vh,345px)] sm:max-w-[430px] md:h-[560px] md:max-w-[560px]">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[#D4AF37]/16 via-[#F5D76E]/8 to-[#F7E7B4]/8 blur-2xl md:-inset-6 md:rounded-[2.5rem] md:from-[#D4AF37]/20 md:via-[#F5D76E]/10 md:to-[#F7E7B4]/10 md:blur-3xl" />
            {stackItems.map((item, index) => (
              <div
                key={item.image}
                ref={(node) => {
                  if (node) cardRefs.current[index] = node;
                }}
                className={`overflow-hidden rounded-[1.45rem] border border-white/15 bg-neutral-950 shadow-2xl shadow-black/60 transition-all duration-700 md:rounded-[2rem] ${
                  reducedMotion ? 'relative mb-6 last:mb-0' : 'absolute inset-0'
                }`}
                style={
                  isMobileStack && !reducedMotion
                    ? {
                        zIndex:
                          activeMobileStep === index
                            ? stackItems.length + 1
                            : stackItems.length - index,
                        opacity: activeMobileStep === index ? 1 : 0.6,
                        transform:
                          activeMobileStep === index
                            ? 'translate3d(0, 0, 0) scale(1) rotate(-1deg)'
                            : `translate3d(0, ${42 + index * 10}px, 0) scale(${1 - index * 0.04}) rotate(${[-1, 3, -2, 2][index]}deg)`,
                        filter: activeMobileStep === index ? 'none' : 'blur(0.4px)',
                      }
                    : { zIndex: stackItems.length - index }
                }
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 rounded-[1rem] border border-white/15 bg-black/38 px-3.5 py-2.5 text-[0.75rem] text-white/80 backdrop-blur-md md:bottom-5 md:left-5 md:right-5 md:rounded-2xl md:px-4 md:py-3 md:text-sm">
                  <span>{item.eyebrow}</span>
                  <span className="truncate text-right">Orlando event moment</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
