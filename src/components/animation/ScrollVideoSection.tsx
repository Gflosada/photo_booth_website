import { useEffect, useRef } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/app/components/ui/button';
import { useGSAPReducedMotion } from './useGSAPReducedMotion';

const VIDEO_SRC = '/videos/scroll_experience.mp4';

gsap.registerPlugin(ScrollTrigger);

const sceneBeats = [
  {
    chapter: 'Scene 01',
    cue: 'Arrival',
    title: 'Step into the light.',
    body: 'Guests enter a clean, polished setup that instantly feels like part of the celebration.',
  },
  {
    chapter: 'Scene 02',
    cue: 'Capture',
    title: 'Let the moment build.',
    body: 'The booth guides the energy, catches the best angles, and turns movement into keepsake content.',
  },
  {
    chapter: 'Scene 03',
    cue: 'Share',
    title: 'Leave with the memory.',
    body: 'Photos and clips are ready for the gallery, the group chat, and the moments guests keep replaying.',
  },
] as const;

interface ScrollVideoSectionProps {
  onBookClick?: () => void;
}

export function ScrollVideoSection({ onBookClick }: ScrollVideoSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<HTMLElement[]>([]);
  const markerRefs = useRef<HTMLDivElement[]>([]);
  const progressRefs = useRef<HTMLSpanElement[]>([]);
  const reducedMotion = useGSAPReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const content = contentRef.current;

    if (!section || !video || !content) return;

    const panels = panelRefs.current.filter(Boolean);
    const markers = markerRefs.current.filter(Boolean);
    const progressBars = progressRefs.current.filter(Boolean);
    const scroller = document.scrollingElement === document.body ? document.body : undefined;
    let videoTrigger: ScrollTrigger | undefined;
    let textTimeline: gsap.core.Timeline | undefined;

    const context = gsap.context(() => {
      gsap.set(content, { autoAlpha: 1 });
      gsap.set(panels, { autoAlpha: 0, y: 22, filter: 'blur(10px)' });
      gsap.set(panels[0], { autoAlpha: 1, y: 0, filter: 'blur(0px)' });
      gsap.set(markers, { autoAlpha: 0.42 });
      gsap.set(markers[0], { autoAlpha: 1 });
      gsap.set(progressBars, { scaleX: 0, transformOrigin: 'left center' });
    }, section);

    const killTriggers = () => {
      textTimeline?.kill();
      videoTrigger?.kill();
      textTimeline = undefined;
      videoTrigger = undefined;
    };

    const setupTextTimeline = () => {
      textTimeline = gsap.timeline({
        paused: true,
        defaults: { ease: 'power2.inOut' },
      });

      textTimeline
        .to({}, { duration: 1 }, 0)
        .to(progressBars[0], { scaleX: 1, duration: 0.32, ease: 'none' }, 0)
        .to(panels[0], { autoAlpha: 0, y: -18, filter: 'blur(8px)', duration: 0.08 }, 0.3)
        .to(markers[0], { autoAlpha: 0.42, duration: 0.08 }, 0.3)
        .to(panels[1], { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.1 }, 0.35)
        .to(markers[1], { autoAlpha: 1, duration: 0.08 }, 0.35)
        .to(progressBars[1], { scaleX: 1, duration: 0.3, ease: 'none' }, 0.35)
        .to(panels[1], { autoAlpha: 0, y: -18, filter: 'blur(8px)', duration: 0.08 }, 0.64)
        .to(markers[1], { autoAlpha: 0.42, duration: 0.08 }, 0.64)
        .to(panels[2], { autoAlpha: 1, y: 0, filter: 'blur(0px)', duration: 0.1 }, 0.69)
        .to(markers[2], { autoAlpha: 1, duration: 0.08 }, 0.69)
        .to(progressBars[2], { scaleX: 1, duration: 0.31, ease: 'none' }, 0.69);
    };

    const setupScrollVideo = () => {
      if (videoTrigger || !video.duration || Number.isNaN(video.duration)) return;

      killTriggers();
      video.pause();

      if (reducedMotion) {
        video.currentTime = 0;
        gsap.set(panels, { autoAlpha: 0, y: 0, filter: 'blur(0px)' });
        gsap.set(panels[0], { autoAlpha: 1 });
        gsap.set(markers, { autoAlpha: 0.42 });
        gsap.set(markers[0], { autoAlpha: 1 });
        gsap.set(progressBars, { scaleX: 0 });
        gsap.set(progressBars[0], { scaleX: 1 });
        return;
      }

      setupTextTimeline();

      videoTrigger = ScrollTrigger.create({
        id: 'lumea-scroll-video-section',
        trigger: section,
        scroller,
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
      id="cinematic-experience"
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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/42 to-black/12" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/72 via-black/10 to-black/84" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_50%,transparent_0%,rgba(0,0,0,0.12)_38%,rgba(0,0,0,0.68)_100%)]" />

        <div
          ref={contentRef}
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 pt-20 sm:px-6 lg:px-8"
        >
          <div className="max-w-[34rem]">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/18 bg-black/25 px-4 py-2 text-sm text-white/85 shadow-2xl shadow-black/30 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#F5D76E]" />
              A directed photo booth experience
            </div>

            <div className="mb-7 flex gap-3" aria-hidden="true">
              {sceneBeats.map((beat, index) => (
                <div
                  key={beat.chapter}
                  ref={(node) => {
                    if (node) markerRefs.current[index] = node;
                  }}
                  className="w-24"
                >
                  <div className="mb-2 h-px overflow-hidden bg-white/22">
                    <span
                      ref={(node) => {
                        if (node) progressRefs.current[index] = node;
                      }}
                      className="block h-full w-full bg-[#F5D76E]"
                    />
                  </div>
                  <span className="text-[0.65rem] uppercase tracking-[0.22em] text-white/60">
                    {beat.cue}
                  </span>
                </div>
              ))}
            </div>

            <div className="relative min-h-[18rem] sm:min-h-[19rem]">
              {sceneBeats.map((beat, index) => (
                <article
                  key={beat.title}
                  ref={(node) => {
                    if (node) panelRefs.current[index] = node;
                  }}
                  className="absolute max-w-[34rem]"
                >
                  <p className="mb-4 text-xs uppercase tracking-[0.28em] text-[#F5D76E]/90">
                    {beat.chapter}
                  </p>
                  <h2 className="text-5xl leading-[0.98] text-white drop-shadow-2xl sm:text-6xl lg:text-7xl">
                    {beat.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-base leading-7 text-white/76 sm:text-lg">
                    {beat.body}
                  </p>
                </article>
              ))}
            </div>

            <Button
              onClick={onBookClick}
              className="opbe-btn-primary mt-2 px-8 py-6 text-lg"
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
