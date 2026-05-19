import { Zap, Share2, Star, ChevronRight, Camera } from 'lucide-react';
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

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const reducedMotion = useGSAPReducedMotion();

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
        </div>

        {/* Floating Confetti */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full"
            style={{
              background: ['#7F35FF', '#FFD580', '#FF35A5'][i % 3],
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-white text-sm">Orlando-based · Fast quotes · Premium event experiences</span>
            </div>

            <h1 className="text-5xl md:text-7xl text-white mb-6 max-w-4xl mx-auto drop-shadow-2xl [text-shadow:_0_4px_32px_rgb(0_0_0_/_0.85)]">
              Orlando Photo Booth Rentals for{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Unforgettable Events
              </span>{' '}
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-xl [text-shadow:_0_2px_18px_rgb(0_0_0_/_0.85)]">
              Premium photo booth experiences for weddings, parties, corporate events, quinceañeras, and private celebrations across Orlando, Florida.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 mb-8 text-sm text-white/85">
              {['Orlando-based service', 'Fast quote response', 'Secure online payments', 'Custom event packages', 'Digital sharing included'].map((item) => (
                <span key={item} className="rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">{item}</span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => onNavigate('booking')}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 rounded-full text-lg shadow-lg shadow-purple-500/50"
              >
                Book Your Booth
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={() => onNavigate('quote')}
                variant="outline"
                className="border-2 border-white/30 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white px-8 py-6 rounded-full text-lg"
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
      <section className="relative -mt-20 z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <Card className="bg-white/[0.04] backdrop-blur-md border border-white/15 p-8 rounded-3xl shadow-2xl">
          <h3 className="text-2xl text-white mb-6 text-center">Quick Booking</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-white/70 text-sm mb-2 block">Event Date</label>
              <div className="bg-white/[0.025] border border-white/[0.08] rounded-xl p-3">
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
              <Select>
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
              <Select>
                <SelectTrigger className="bg-white/[0.025] border-white/[0.08] text-white rounded-xl h-12">
                  <SelectValue placeholder="Number of guests" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="50">Up to 50</SelectItem>
                  <SelectItem value="100">50-100</SelectItem>
                  <SelectItem value="200">100-200</SelectItem>
                  <SelectItem value="200+">200+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button
            onClick={() => onNavigate('booking')}
            className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-6 rounded-xl"
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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
                  <div className="inline-block px-3 py-1 bg-purple-500/80 rounded-full text-white text-sm mb-2">
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
                  <div className="inline-block px-3 py-1 bg-pink-500/80 rounded-full text-white text-sm mb-2">
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
                  <div className="inline-block px-3 py-1 bg-orange-500/80 rounded-full text-white text-sm mb-2">
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
                  <div className="inline-block px-3 py-1 bg-green-500/80 rounded-full text-white text-sm mb-2">
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
                  <div className="inline-block px-3 py-1 bg-blue-500/80 rounded-full text-white text-sm mb-2">
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
                  <div className="inline-block px-3 py-1 bg-yellow-500/80 rounded-full text-white text-sm mb-2">
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
              className="border-2 border-purple-500 bg-white/[0.03] hover:bg-purple-500 text-white px-8 py-6 rounded-full"
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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Lumea Booth
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Camera,
              title: 'Modern Booths',
              description: 'State-of-the-art equipment with 360° cameras, AI filters, and professional lighting.',
              gradient: 'from-purple-500 to-blue-500',
            },
            {
              icon: Zap,
              title: 'Instant Prints',
              description: 'High-quality prints in seconds with custom overlays and eco-friendly materials.',
              gradient: 'from-pink-500 to-orange-500',
            },
            {
              icon: Share2,
              title: 'AI-Enhanced Sharing',
              description: 'Instant digital delivery with QR codes, social media integration, and live galleries.',
              gradient: 'from-purple-500 to-pink-500',
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

      <StickyImageStackSection onBookClick={() => onNavigate('booking')} />

      {/* CTA Banner */}
      <section className="relative overflow-hidden mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-pulse" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjAzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h2 className="text-4xl md:text-5xl text-white mb-6">
            Capture Joy. Create Memories. Lumea Booth Brings the Magic.
          </h2>
          <Button
            onClick={() => onNavigate('booking')}
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 rounded-full text-lg"
          >
            Start Your Event Journey
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
