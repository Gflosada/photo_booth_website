import { useEffect, useRef } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/app/components/ui/button';
import { useGSAPReducedMotion } from './useGSAPReducedMotion';

const VIDEO_SRC = '/videos/scroll_experience.mp4';

gsap.registerPlugin(ScrollTrigger);

interface ScrollVideoSectionProps {
  onBookClick?: () => void;
}

export function ScrollVideoSection({ onBookClick }: ScrollVideoSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<HTMLParagraphElement[]>([]);
  const reducedMotion = useGSAPReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const content = contentRef.current;

    if (!section || !video || !content) return;

    const steps = stepRefs.current.filter(Boolean);
    let videoTrigger: ScrollTrigger | undefined;
    let textTimeline: gsap.core.Timeline | undefined;

    const context = gsap.context(() => {
      gsap.set(content, { autoAlpha: 1 });
      gsap.set(steps, { autoAlpha: 0, y: 12 });
      gsap.set(steps[0], { autoAlpha: 1, y: 0 });
    }, section);

    const killTriggers = () => {
      textTimeline?.kill();
      videoTrigger?.kill();
      textTimeline = undefined;
      videoTrigger = undefined;
    };

    const setupTextTimeline = () => {
      textTimeline = gsap.timeline({ paused: true });

      textTimeline
        .to(steps[0], { autoAlpha: 0, y: -12, duration: 0.12, ease: 'power2.inOut' }, 0.28)
        .to(steps[1], { autoAlpha: 1, y: 0, duration: 0.12, ease: 'power2.inOut' }, 0.28)
        .to(steps[1], { autoAlpha: 0, y: -12, duration: 0.12, ease: 'power2.inOut' }, 0.6)
        .to(steps[2], { autoAlpha: 1, y: 0, duration: 0.12, ease: 'power2.inOut' }, 0.6);
    };

    const setupScrollVideo = () => {
      if (videoTrigger || !video.duration || Number.isNaN(video.duration)) return;

      killTriggers();
      video.pause();

      if (reducedMotion) {
        video.currentTime = 0;
        gsap.set(steps, { autoAlpha: 0, y: 0 });
        gsap.set(steps[0], { autoAlpha: 1 });
        return;
      }

      setupTextTimeline();

      videoTrigger = ScrollTrigger.create({
        id: 'lumea-scroll-video-section',
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const duration = video.duration || 0;
          if (!duration) return;

          video.currentTime = self.progress * duration;
          textTimeline?.progress(self.progress);
        },
      });

      ScrollTrigger.refresh();
    };

    if (video.readyState >= 1) {
      setupScrollVideo();
    } else {
      video.addEventListener('loadedmetadata', setupScrollVideo, { once: true });
    }

    return () => {
      video.removeEventListener('loadedmetadata', setupScrollVideo);
      killTriggers();
      context.revert();
      ScrollTrigger.refresh();
    };
  }, [reducedMotion]);

  return (
    <section
      ref={sectionRef}
      className={`relative hidden bg-black text-white md:block ${reducedMotion ? 'min-h-screen' : 'h-[400vh]'}`}
      aria-label="Cinematic photo booth experience"
    >
      <div className="sticky top-0 h-screen min-h-[680px] overflow-hidden md:min-h-screen">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          className="absolute inset-0 h-full w-full object-cover object-center"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_42%,rgba(0,0,0,0.72)_100%)]" />

        <div
          ref={contentRef}
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white/85 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#F5D76E]" />
              Cinematic event memories, controlled by the moment
            </div>

            <div className="relative min-h-[11rem] sm:min-h-[13rem]">
              {[
                'Your guests step in.',
                'The camera captures the moment.',
                'Your event becomes unforgettable.',
              ].map((copy, index) => (
                <p
                  key={copy}
                  ref={(node) => {
                    if (node) stepRefs.current[index] = node;
                  }}
                  className="absolute max-w-3xl text-4xl leading-tight text-white drop-shadow-2xl sm:text-6xl lg:text-7xl"
                >
                  {copy}
                </p>
              ))}
            </div>

            <p className="mt-8 max-w-2xl text-lg text-white/75 sm:text-xl">
              A polished booth experience for Orlando weddings, brand launches, private parties, and milestone celebrations.
            </p>

            <Button
              onClick={onBookClick}
              className="mt-8 opbe-btn-primary px-8 py-6 text-lg"
            >
              Book Your Photo Booth
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
