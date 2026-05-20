import { Zap, Share2, Star, ChevronRight, Camera, Quote, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Calendar } from './ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { ScrollReveal, ParallaxScroll, ScaleOnScroll } from './ScrollReveal';
import { ScrollVideoSection } from '@/components/animation/ScrollVideoSection';
import { StickyImageStackSection } from '@/components/animation/StickyImageStackSection';
import { useGSAPReducedMotion } from '@/components/animation/useGSAPReducedMotion';

const VIDEO_SRC = '/videos/banner_video.mp4';
const CTA_VIDEO_SRC = '/videos/kling_20260520_Image_to_Video_make_flash_459_0.mp4';
const QUICK_BOOKING_STORAGE_KEY = 'opbeQuickBooking';

const formatDateForInput = (value?: Date) => {
  if (!value) return '';

  const year = value.getFullYear();
  const month = String(value.getMonth() + 1).padStart(2, '0');
  const day = String(value.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const clientReviews = [
  {
    name: 'Maria & Daniel',
    initials: 'MD',
    eventType: 'Wedding Reception',
    testimonial:
      'Everyone loved the photo booth. The setup looked beautiful, the photos were amazing, and our guests kept going back all night.',
  },
  {
    name: 'Jessica R.',
    initials: 'JR',
    eventType: 'Birthday Party',
    testimonial:
      'It made the party feel so much more fun. The booth was easy to use, the pictures looked professional, and the whole experience felt premium.',
  },
  {
    name: 'Orlando Events Co.',
    initials: 'OE',
    eventType: 'Corporate Event',
    testimonial:
      'Very professional from start to finish. The booth looked clean, the guest experience was smooth, and the photos were perfect for our team event.',
  },
  {
    name: 'Samantha L.',
    initials: 'SL',
    eventType: 'Bridal Shower',
    testimonial:
      'The photo booth became one of the highlights of the day. The backdrop, lighting, and prints were beautiful.',
  },
  {
    name: 'Carlos M.',
    initials: 'CM',
    eventType: 'Private Celebration',
    testimonial:
      'Super easy booking, great communication, and the setup looked amazing. Our guests had a great time.',
  },
  {
    name: 'Amanda P.',
    initials: 'AP',
    eventType: 'Anniversary Event',
    testimonial:
      'The photos came out so elegant and natural. It added a special touch to our celebration.',
  },
];

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [quickBooking, setQuickBooking] = useState({
    eventType: '',
    guestCount: '',
  });
  const reducedMotion = useGSAPReducedMotion();

  const continueBooking = () => {
    window.localStorage.setItem(
      QUICK_BOOKING_STORAGE_KEY,
      JSON.stringify({
        eventDate: formatDateForInput(date),
        eventType: quickBooking.eventType,
        guestCount: quickBooking.guestCount,
      }),
    );

    onNavigate('booking');
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative flex min-h-[100svh] items-start justify-center overflow-hidden pb-16 pt-28 sm:min-h-screen sm:items-center sm:py-0">
        {/* Video Background Effect */}
        <div className="absolute inset-0">
          <video
            src={VIDEO_SRC}
            className="w-full h-full object-cover"
            autoPlay={!reducedMotion}
            muted
            loop={!reducedMotion}
            playsInline
            preload="auto"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/90" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.42)_45%,rgba(0,0,0,0.8)_100%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(212,175,55,0.18),transparent_32%),radial-gradient(circle_at_78%_68%,rgba(245,215,110,0.12),transparent_34%)]" />
        </div>

        {/* Subtle gold glints */}
        {[18, 34, 58, 76].map((left, i) => (
          <motion.div
            key={left}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#F5D76E]/70 shadow-[0_0_18px_rgba(245,215,110,0.45)]"
            style={{ left: `${left}%`, top: `${24 + i * 12}%` }}
            animate={reducedMotion ? undefined : { y: [0, -18, 0], opacity: [0.15, 0.75, 0.15] }}
            transition={{ duration: 4.5 + i * 0.4, repeat: Infinity, delay: i * 0.5 }}
          />
        ))}

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-5 hidden items-center gap-2 rounded-full border border-[rgba(212,175,55,0.32)] bg-[rgba(212,175,55,0.08)] px-4 py-2 backdrop-blur-md sm:inline-flex">
              <Star className="w-4 h-4 text-[#F5D76E]" />
              <span className="text-white text-sm">Orlando-based · Fast quotes · Premium event experiences</span>
            </div>

            <h1 className="mx-auto mb-5 max-w-4xl text-[2.65rem] leading-[1.04] text-white drop-shadow-2xl [text-shadow:_0_4px_32px_rgb(0_0_0_/_0.85)] sm:text-5xl md:text-7xl">
              Orlando Photo Booth Rentals for{' '}
              <span className="opbe-gold-text">
                Unforgettable Events
              </span>{' '}
            </h1>

            <p className="mx-auto mb-6 max-w-2xl text-base leading-7 text-white/90 drop-shadow-xl [text-shadow:_0_2px_18px_rgb(0_0_0_/_0.85)] sm:mb-8 sm:text-xl">
              Premium photo booth experiences for weddings, parties, corporate events, quinceañeras, and private celebrations across Orlando, Florida.
            </p>

            <div className="mb-7 flex flex-wrap items-center justify-center gap-2 text-xs text-white/85 sm:mb-8 sm:gap-3 sm:text-sm">
              {['Orlando-based service', 'Fast quote response', 'Custom event packages', 'Digital sharing included'].map((item) => (
                <span key={item} className="rounded-full border border-[rgba(212,175,55,0.24)] bg-white/10 px-3 py-2 backdrop-blur-md">{item}</span>
              ))}
            </div>

            <div className="flex flex-col justify-center gap-3 pb-6 sm:flex-row sm:gap-4 sm:pb-0">
              <Button
                onClick={() => onNavigate('booking')}
                className="opbe-btn-primary px-8 py-6 rounded-full text-lg shadow-lg shadow-[#D4AF37]/50"
              >
                Book Your Booth
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => onNavigate('quote')}
                variant="outline"
                className="opbe-btn-secondary px-8 py-6 text-lg"
              >
                Get a Free Quote
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Quick Booking Widget */}
      <section className="relative z-20 mx-auto mb-8 max-w-5xl px-4 sm:-mt-20 sm:mb-24 sm:px-6 lg:px-8">
        <Card className="opbe-premium-card rounded-3xl p-5 backdrop-blur-md sm:p-8">
          <h3 className="mb-6 text-center text-2xl text-white">Quick Booking</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-white/70 text-sm mb-2 block">Event Date</label>
              <div className="rounded-xl border border-[rgba(212,175,55,0.2)] bg-white/[0.025] p-3">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="text-white"
                />
              </div>
            </div>
            <div>
              <label className="text-white/70 text-sm mb-2 block">Event Type</label>
              <Select
                value={quickBooking.eventType}
                onValueChange={(eventType) => setQuickBooking((current) => ({ ...current, eventType }))}
              >
                <SelectTrigger className="bg-white/[0.025] border-white/[0.08] text-white rounded-xl h-12">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="birthday">Birthday Party</SelectItem>
                  <SelectItem value="other">Other Celebration</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-white/70 text-sm mb-2 block">Guest Count</label>
              <Select
                value={quickBooking.guestCount}
                onValueChange={(guestCount) => setQuickBooking((current) => ({ ...current, guestCount }))}
              >
                <SelectTrigger className="bg-white/[0.025] border-white/[0.08] text-white rounded-xl h-12">
                  <SelectValue placeholder="Number of guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50">Up to 50</SelectItem>
                  <SelectItem value="100">50-100</SelectItem>
                  <SelectItem value="200">100-200</SelectItem>
                  <SelectItem value="250">200+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            onClick={continueBooking}
            className="w-full mt-6 opbe-btn-primary py-6 rounded-xl"
          >
            Continue Booking
          </Button>
        </Card>
      </section>

      <ScrollVideoSection onBookClick={() => onNavigate('booking')} />

      {/* Photo Booth Examples at Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <ScrollReveal direction="up">
          <h2 className="text-4xl text-white text-center mb-4">
            Booths in{' '}
            <span className="opbe-gold-text">
              Action
            </span>
          </h2>
          <p className="text-white/60 text-center mb-16 text-lg">
            See our photo booths bringing joy to real Orlando events
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ScrollReveal direction="left" delay={0.1}>
            <Card className="bg-white/[0.025] backdrop-blur-[2px] border border-white/[0.08] rounded-3xl overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative h-80 overflow-hidden">
                <ParallaxScroll speed={0.3}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1648056501972-841dceebf963?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGJvb3RoJTIwd2VkZGluZyUyMGV2ZW50fGVufDF8fHx8MTc2MjI4NjExOHww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Wedding photo booth"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </ParallaxScroll>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block px-3 py-1 bg-[#D4AF37]/80 rounded-full text-black text-sm font-semibold mb-2">
                    Wedding
                  </div>
                  <h3 className="text-xl text-white">Elegant Garden Wedding</h3>
                  <p className="text-white/70 text-sm">Classic Mirror Booth</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <Card className="bg-white/[0.025] backdrop-blur-[2px] border border-white/[0.08] rounded-3xl overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative h-80 overflow-hidden">
                <ParallaxScroll speed={0.3}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1658855775277-1145447c7b5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzNjAlMjBwaG90byUyMGJvb3RoJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYyMjg2MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="360 photo booth"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </ParallaxScroll>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block px-3 py-1 bg-[#D4AF37]/80 rounded-full text-black text-sm font-semibold mb-2">
                    Corporate
                  </div>
                  <h3 className="text-xl text-white">Brand Launch Party</h3>
                  <p className="text-white/70 text-sm">360° Glam Booth</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.3}>
            <Card className="bg-white/[0.025] backdrop-blur-[2px] border border-white/[0.08] rounded-3xl overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative h-80 overflow-hidden">
                <ParallaxScroll speed={0.3}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1742991106935-eaec5df86ae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvJTIwYm9vdGglMjBwcm9wc3xlbnwxfHx8fDE3NjIyODYxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Birthday photo booth"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </ParallaxScroll>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block px-3 py-1 bg-[#B8860B]/80 rounded-full text-black text-sm font-semibold mb-2">
                    Birthday
                  </div>
                  <h3 className="text-xl text-white">Sweet 16 Celebration</h3>
                  <p className="text-white/70 text-sm">AI Filter Booth</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="left" delay={0.4}>
            <Card className="bg-white/[0.025] backdrop-blur-[2px] border border-white/[0.08] rounded-3xl overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative h-80 overflow-hidden">
                <ParallaxScroll speed={0.3}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1729009737094-804e40254168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXJyb3IlMjBwaG90byUyMGJvb3RoJTIwcGFydHl8ZW58MXx8fHwxNzYyMjg2MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Mirror booth party"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </ParallaxScroll>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block px-3 py-1 bg-[#D4AF37]/80 rounded-full text-black text-sm font-semibold mb-2">
                    Holiday Party
                  </div>
                  <h3 className="text-xl text-white">New Year's Eve Gala</h3>
                  <p className="text-white/70 text-sm">Selfie Pod</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.5}>
            <Card className="bg-white/[0.025] backdrop-blur-[2px] border border-white/[0.08] rounded-3xl overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative h-80 overflow-hidden">
                <ParallaxScroll speed={0.3}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1760898131571-6dc38bef7354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2Jvb3RoJTIwYmFja2Ryb3AlMjBjdXN0b218ZW58MXx8fHwxNzYyMjg2MTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Custom backdrop booth"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </ParallaxScroll>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block px-3 py-1 bg-[#D4AF37]/80 rounded-full text-black text-sm font-semibold mb-2">
                    Graduation
                  </div>
                  <h3 className="text-xl text-white">Class of 2025</h3>
                  <p className="text-white/70 text-sm">Event Wall Booth</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.6}>
            <Card className="bg-white/[0.025] backdrop-blur-[2px] border border-white/[0.08] rounded-3xl overflow-hidden group hover:scale-105 transition-transform duration-300">
              <div className="relative h-80 overflow-hidden">
                <ParallaxScroll speed={0.3}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1680870220158-5ad3f117ca3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YW50JTIwY2FtZXJhJTIwcG9sYXJvaWR8ZW58MXx8fHwxNzYyMjE1MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Instant prints"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </ParallaxScroll>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block px-3 py-1 bg-[#F5D76E]/80 rounded-full text-black text-sm font-semibold mb-2">
                    Anniversary
                  </div>
                  <h3 className="text-xl text-white">50 Years of Love</h3>
                  <p className="text-white/70 text-sm">Vintage Instant Print</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>

        <ScaleOnScroll>
          <div className="text-center">
            <Button
              onClick={() => onNavigate('gallery')}
              variant="outline"
              className="border-2 border-[#D4AF37] bg-white/[0.03] hover:bg-[#D4AF37] text-white px-8 py-6 rounded-full"
            >
              View Full Gallery
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </ScaleOnScroll>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <ScrollReveal direction="up">
          <h2 className="text-4xl text-white text-center mb-12">
            Why Choose{' '}
            <span className="opbe-gold-text">
              ORLANDO PHOTO BOOTH EVENTS
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Camera,
              title: 'Modern Booths',
              description: 'State-of-the-art equipment with 360° cameras, AI filters, and professional lighting.',
              gradient: 'from-[#D4AF37] to-[#B8860B]',
            },
            {
              icon: Zap,
              title: 'Instant Prints',
              description: 'High-quality prints in seconds with custom overlays and eco-friendly materials.',
              gradient: 'from-[#D4AF37] to-[#F5D76E]',
            },
            {
              icon: Share2,
              title: 'Online Media Gallery',
              description:
                'Guests can access their photos and videos online after the event.',
              gradient: 'from-[#D4AF37] to-[#B8860B]',
            },
          ].map((feature, index) => (
            <ScrollReveal
              key={feature.title}
              direction="up"
              delay={index * 0.15}
            >
              <Card className="bg-white/[0.025] backdrop-blur-[2px] border border-white/[0.08] p-8 rounded-3xl hover:bg-white/[0.06] transition-all group relative overflow-hidden">
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-white mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Featured Clients */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <ScrollReveal direction="up">
          <h3 className="text-2xl text-white text-center mb-12">Trusted by Orlando's Best Venues</h3>
        </ScrollReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {['The Alfond Inn', 'Luxmore Grande Estate', 'Ritz Carlton Orlando', 'Disney Wedding Pavilion'].map((client) => (
            <ScaleOnScroll key={client}>
              <div className="bg-white/[0.025] backdrop-blur-[2px] border border-white/[0.08] rounded-2xl p-6 flex items-center justify-center hover:bg-white/[0.06] transition-all">
                <p className="text-white/70 text-center">{client}</p>
              </div>
            </ScaleOnScroll>
          ))}
        </div>
      </section>

      {/* Client Reviews */}
      <section className="relative mb-24 overflow-hidden py-20 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0B0B0B] to-black" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm text-white/75 backdrop-blur-xl">
                <Sparkles className="h-4 w-4 text-[#F5D76E]" />
                Real event moments across Orlando
              </div>
              <h2 className="text-4xl leading-tight text-white sm:text-5xl">
                Loved by Guests. Trusted by Hosts.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                Clients choose our photo booth for weddings, corporate events,
                birthdays, and private celebrations because the experience feels
                polished, easy, and memorable from the first photo to the last.
              </p>
            </div>
          </ScrollReveal>

          <div
            aria-label="Client reviews"
            className={`relative -mx-4 mt-12 px-4 pb-6 [scrollbar-width:none] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 [&::-webkit-scrollbar]:hidden ${
              reducedMotion ? 'overflow-x-auto' : 'overflow-hidden'
            }`}
          >
            <motion.div
              animate={reducedMotion ? undefined : { x: ['0%', '-50%'] }}
              transition={{
                duration: 34,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="flex w-max will-change-transform"
            >
              {[0, 1].map((groupIndex) => (
                <div key={groupIndex} className="flex gap-5 pr-5 sm:gap-6 sm:pr-6">
                  {clientReviews.map((review, index) => (
                    <motion.article
                      key={`${review.name}-${review.eventType}-${groupIndex}`}
                      initial={{ opacity: 0, y: 36 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.28 }}
                      transition={{ duration: 0.55, delay: index * 0.08, ease: 'easeOut' }}
                      whileHover={reducedMotion ? undefined : { y: -10, scale: 1.015 }}
                      className="opbe-premium-card opbe-premium-card-hover group relative flex min-h-[21rem] w-[84vw] max-w-[22rem] shrink-0 flex-col overflow-hidden rounded-3xl p-6 backdrop-blur-2xl sm:w-[26rem] sm:max-w-none"
                    >
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-[#D4AF37]/10 opacity-70" />
                      <Quote className="absolute right-5 top-5 h-9 w-9 text-white/10 transition-colors duration-300 group-hover:text-[#F7E7B4]/20" />

                      <div className="relative mb-7 flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-gradient-to-br from-white/20 to-white/[0.04] text-sm font-semibold text-white shadow-lg shadow-black/20">
                            {review.initials}
                          </div>
                          <div>
                            <h3 className="text-base text-white">{review.name}</h3>
                            <p className="mt-1 text-sm text-white/50">{review.eventType}</p>
                          </div>
                        </div>
                        <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-1 text-xs text-[#F7E7B4]">
                          Verified host
                        </span>
                      </div>

                      <div className="relative mb-5 flex items-center gap-1" aria-label="5 out of 5 stars">
                        {[...Array(5)].map((_, starIndex) => (
                          <motion.span
                            key={starIndex}
                            animate={
                              reducedMotion
                                ? undefined
                                : { scale: [1, 1.16, 1], opacity: [0.82, 1, 0.9] }
                            }
                            transition={{
                              duration: 1.8,
                              repeat: Infinity,
                              repeatDelay: 2.4,
                              delay: index * 0.05 + starIndex * 0.08,
                              ease: 'easeInOut',
                            }}
                          >
                            <Star className="h-4 w-4 fill-[#F5D76E] text-[#F5D76E] drop-shadow-[0_0_8px_rgba(253,224,71,0.35)]" />
                          </motion.span>
                        ))}
                      </div>

                      <p className="relative flex-1 text-[1.02rem] leading-7 text-white/78">
                        "{review.testimonial}"
                      </p>

                      <div className="relative mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                        <span className="rounded-full bg-white/[0.07] px-3 py-1.5 text-xs text-white/60">
                          {review.eventType}
                        </span>
                        <span className="text-xs uppercase tracking-[0.24em] text-white/35">Orlando</span>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ))}
            </motion.div>
            {!reducedMotion && (
              <>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black via-black/80 to-transparent sm:w-28" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black via-black/80 to-transparent sm:w-28" />
              </>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="opbe-premium-card mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl p-6 text-center backdrop-blur-xl sm:p-8"
          >
            <h3 className="text-2xl leading-tight text-white sm:text-3xl">
              Ready to create unforgettable memories?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/60 sm:text-base">
              Bring a cinematic, guest-loved photo booth experience to your next
              Orlando celebration.
            </p>
            <Button
              onClick={() => onNavigate('booking')}
              className="mt-6 opbe-btn-primary px-8 py-6 text-base sm:text-lg"
            >
              Book Your Photo Booth
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <StickyImageStackSection onBookClick={() => onNavigate('booking')} />

      {/* CTA Banner */}
      <section className="relative overflow-hidden mb-24">
        <video
          src={CTA_VIDEO_SRC}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay={!reducedMotion}
          muted
          loop={!reducedMotion}
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 via-black/35 to-[#F5D76E]/16" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Capture Joy. Create Memories. ORLANDO PHOTO BOOTH EVENTS Brings the Magic.
          </h2>
          <Button
            onClick={() => onNavigate('booking')}
            className="opbe-btn-primary px-8 py-6 text-lg"
          >
            Start Your Event Journey
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
