import { useEffect, useRef } from 'react';
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

  useEffect(() => {
    const images = stackItems.map((item) => {
      const image = new Image();
      image.src = item.image;
      return image.decode?.().catch(() => undefined);
    });

    Promise.all(images).then(() => ScrollTrigger.refresh());
  }, []);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const cards = cardRefs.current.filter(Boolean);
      const textBlocks = textRefs.current.filter(Boolean);

      if (!section || cards.length === 0 || textBlocks.length === 0) return;

      if (reducedMotion) {
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
          invalidateOnRefresh: true,
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
    { dependencies: [reducedMotion], revertOnUpdate: true, scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className={`relative bg-black text-white ${reducedMotion ? 'py-24' : 'h-[420vh]'}`}
      aria-labelledby="sticky-stack-heading"
    >
      <div
        className={`${reducedMotion ? 'relative' : 'sticky top-0'} flex min-h-screen items-center overflow-hidden py-20`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(127,53,255,0.18),transparent_35%),radial-gradient(circle_at_80%_75%,rgba(255,53,165,0.14),transparent_38%)]" />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative z-20 max-w-xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-yellow-300" />
              Photo Booth Experience
            </div>

            <h2 id="sticky-stack-heading" className="mb-5 text-4xl text-white md:text-6xl">
              From pose to party highlight.
            </h2>
            <p className="mb-10 text-lg text-white/65 md:text-xl">
              Create a photo booth moment your guests will talk about, share, and remember long
              after the event.
            </p>

            <div className={reducedMotion ? 'space-y-6' : 'relative min-h-[14rem]'}>
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
                  <p className="mb-3 text-sm uppercase tracking-[0.28em] text-purple-200">
                    {item.eyebrow}
                  </p>
                  <h3 className="mb-3 text-3xl text-white md:text-4xl">{item.title}</h3>
                  <p className="text-base leading-relaxed text-white/68 md:text-lg">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <Button
              onClick={onBookClick}
              className="mt-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-6 text-lg text-white shadow-xl shadow-purple-500/35 hover:from-purple-600 hover:to-pink-600"
            >
              Book Your Photo Booth
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative mx-auto h-[420px] w-full max-w-[560px] md:h-[560px]">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-yellow-300/10 blur-3xl" />
            {stackItems.map((item, index) => (
              <div
                key={item.image}
                ref={(node) => {
                  if (node) cardRefs.current[index] = node;
                }}
                className={`overflow-hidden rounded-[2rem] border border-white/15 bg-neutral-950 shadow-2xl shadow-black/60 ${
                  reducedMotion ? 'relative mb-6 last:mb-0' : 'absolute inset-0'
                }`}
                style={{ zIndex: stackItems.length - index }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="eager"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/15 bg-black/35 px-4 py-3 text-sm text-white/80 backdrop-blur-md">
                  <span>{item.eyebrow}</span>
                  <span>Orlando event moment</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
