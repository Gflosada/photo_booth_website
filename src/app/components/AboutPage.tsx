import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Star, Heart, Leaf, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { ScrollReveal, ScaleOnScroll } from './ScrollReveal';

export function AboutPage() {
  const stats = [
    { number: '500+', label: 'Events Captured' },
    { number: '10k+', label: 'Happy Guests' },
    { number: '5.0', label: 'Average Rating' },
    { number: '3', label: 'Years in Orlando' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'We love what we do and it shows in every event we capture.',
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Premium equipment and professional service, every single time.',
    },
    {
      icon: Leaf,
      title: 'Eco-Conscious',
      description: 'Sustainable practices with eco-friendly printing and minimal waste.',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1550926811-4b25838fabae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5zZXQlMjBmbG9yaWRhJTIwcGFsbXxlbnwxfHx8fDE3NjIyNzk0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Orlando sunset"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-white text-sm">Born in Orlando · Built to Capture Moments</span>
            </div>

            <h1 className="text-5xl text-white mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Story
              </span>
            </h1>

            <div className="space-y-4 text-white/70 text-lg">
              <p>
                Founded in 2022, ORLANDO PHOTO BOOTH EVENTS started with a simple mission: to make every celebration
                in Orlando unforgettable through the power of photography and technology.
              </p>
              <p>
                What began as a passion project has grown into Orlando's most trusted photo booth
                rental company, serving hundreds of events from intimate gatherings to grand corporate
                galas.
              </p>
              <p>
                We're a local team that understands Orlando's vibrant event culture. From the magical
                ambiance of Disney weddings to the professional energy of downtown corporate events,
                we bring the perfect blend of fun and sophistication to every occasion.
              </p>
            </div>

            {/* Badges */}
            <div className="flex gap-4 mt-8">
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm">
                5-Star Google Reviews
              </div>
              <div className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm">
                Local Favorite 2025
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <ScaleOnScroll key={stat.label}>
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl text-center hover:bg-white/10 transition-all">
                <div className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60">{stat.label}</div>
              </Card>
            </ScaleOnScroll>
          ))}
        </div>
      </div>

      {/* Behind the Scenes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <ScrollReveal direction="up">
          <h2 className="text-4xl text-white text-center mb-12">
          Behind the{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Scenes
          </span>
        </h2>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-96 md:h-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1544719576-0b52abab3d03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYm9vdGh8ZW58MXx8fHwxNzYyMjc5NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Setup process"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl text-white mb-4">Our Process</h3>
              <div className="space-y-4 text-white/70">
                <p>
                  Every booth setup is meticulously planned and executed by our professional team.
                  We arrive early, set up seamlessly, and ensure everything runs perfectly throughout
                  your event.
                </p>
                <p>
                  Our state-of-the-art equipment is maintained to the highest standards, and we're
                  constantly updating our technology to bring you the latest in photo booth innovation.
                </p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white mb-2">What sets us apart:</p>
                  <ul className="space-y-2 list-disc list-inside text-white/70">
                    <li>Professional on-site attendants</li>
                    <li>Instant digital delivery via QR codes</li>
                    <li>Custom branding options</li>
                    <li>Eco-friendly printing materials</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Card>
        </ScrollReveal>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <ScrollReveal direction="up">
          <h2 className="text-4xl text-white text-center mb-12">
          Our{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Values
          </span>
        </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ScrollReveal
              key={value.title}
              direction="up"
              delay={index * 0.15}
            >
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-white mb-3">{value.title}</h3>
                <p className="text-white/60">{value.description}</p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Local Partnership */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScaleOnScroll>
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 rounded-3xl p-12 text-center">
          <h2 className="text-3xl text-white mb-4">Proud to Serve Orlando</h2>
          <p className="text-white/90 text-lg mb-8">
            We partner with Orlando's finest venues and support local sustainability initiatives.
            When you choose ORLANDO PHOTO BOOTH EVENTS, you're supporting a local business that cares about our community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {['The Alfond Inn', 'Luxmore Grande Estate', 'Ritz Carlton Orlando', 'Disney Wedding Pavilion'].map((venue) => (
              <div key={venue} className="px-4 py-2 rounded-full bg-white/20 text-white text-sm">
                {venue}
              </div>
            ))}
          </div>
        </Card>
        </ScaleOnScroll>
      </div>
    </div>
  );
}
