import { useEffect, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from './ui/button';
import Masonry from 'react-responsive-masonry';
import { ScrollReveal } from './ScrollReveal';

const filters = [
  { id: 'all', label: 'All Events' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'birthdays', label: 'Birthdays' },
  { id: 'branding', label: 'Branding' },
];

const galleryItems = [
  {
    image:
      'https://images.unsplash.com/photo-1762241931276-6adbb78adfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VsZWJyYXRpb24lMjBlbGVnYW50fGVufDF8fHx8MTc2MjI3OTQ5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Elegant Garden Wedding',
    type: 'weddings',
    date: 'Oct 15, 2024',
  },
  {
    image:
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MjIwMTcxMnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Tech Conference 2024',
    type: 'corporate',
    date: 'Sep 22, 2024',
  },
  {
    image:
      'https://images.unsplash.com/photo-1728024450639-dc1b6183dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwZnVufGVufDF8fHx8MTc2MjI3OTQ5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Sweet 16 Celebration',
    type: 'birthdays',
    date: 'Nov 3, 2024',
  },
  {
    image:
      'https://images.unsplash.com/photo-1761416351525-fa957d228535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGJvb3RoJTIwcGFydHklMjBldmVudHxlbnwxfHx8fDE3NjIyNzk0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Brand Launch Party',
    type: 'branding',
    date: 'Aug 18, 2024',
  },
  {
    image:
      'https://images.unsplash.com/photo-1745433921722-26dd28b318d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBsYXVnaGluZyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2MjI3OTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Downtown Orlando Reception',
    type: 'weddings',
    date: 'Oct 28, 2024',
  },
  {
    image:
      'https://images.unsplash.com/photo-1568823577963-7f207be7f395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGNvbmZldHRpJTIwam95fGVufDF8fHx8MTc2MjI3OTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'New Year Gala',
    type: 'corporate',
    date: 'Dec 31, 2024',
  },
  {
    image:
      'https://images.unsplash.com/photo-1760727467473-80a67663dfd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtaXJyb3IlMjBlbGVnYW50JTIwbHV4dXJ5fGVufDF8fHx8MTc2MjI3OTQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    title: '50th Birthday Bash',
    type: 'birthdays',
    date: 'Jul 12, 2024',
  },
  {
    image:
      'https://images.unsplash.com/photo-1544719576-0b52abab3d03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYm9vdGh8ZW58MXx8fHwxNzYyMjc5NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    title: 'Product Launch Event',
    type: 'branding',
    date: 'Sep 5, 2024',
  },
];

const mainGalleryItems = [
  {
    image: '/images/new/wading party.png',
    title: 'Wedding Party',
    type: 'weddings',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/wading party (2).png',
    title: 'Wedding Reception',
    type: 'weddings',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/weading party.png',
    title: 'Wedding Celebration',
    type: 'weddings',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/Weading.png',
    title: 'Elegant Wedding',
    type: 'weddings',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/weading2.png',
    title: 'Wedding Booth Moment',
    type: 'weddings',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/weading setup.png',
    title: 'Wedding Booth Setup',
    type: 'weddings',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/Corporate party.png',
    title: 'Corporate Party',
    type: 'corporate',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/Coportate_party.png',
    title: 'Corporate Event',
    type: 'corporate',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/church event.png',
    title: 'Church Event',
    type: 'corporate',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/event party.png',
    title: 'Event Party',
    type: 'corporate',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/Birthday.png',
    title: 'Birthday Celebration',
    type: 'birthdays',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/birthday_party.png',
    title: 'Birthday Party',
    type: 'birthdays',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/50th_Birthday.png',
    title: '50th Birthday',
    type: 'birthdays',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/halloween.png',
    title: 'Halloween Party',
    type: 'birthdays',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/New_Year.png',
    title: 'New Year Party',
    type: 'birthdays',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/Brand_lunch.png',
    title: 'Brand Launch',
    type: 'branding',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/Set up photobooth.png',
    title: 'Photo Booth Setup',
    type: 'branding',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/Set up_photoBooth.png',
    title: 'Premium Booth Setup',
    type: 'branding',
    date: 'Orlando Event',
  },
  {
    image: '/images/new/setup.png',
    title: 'Event Setup',
    type: 'branding',
    date: 'Orlando Event',
  },
];

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeEventImage, setActiveEventImage] = useState(0);

  const filteredItems =
    activeFilter === 'all'
      ? mainGalleryItems
      : mainGalleryItems.filter((item) => item.type === activeFilter);

  useEffect(() => {
    const rotation = window.setInterval(() => {
      setActiveEventImage((current) => (current + 1) % galleryItems.length);
    }, 3200);

    return () => window.clearInterval(rotation);
  }, []);

  const featuredEvent = galleryItems[activeEventImage];

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Event{' '}
            <span className="opbe-gold-text">
              Gallery
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Explore moments we've captured at events across Orlando.
          </p>
        </motion.div>
      </div>

      {/* Filter Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full px-6 py-3 transition-all ${
                activeFilter === filter.id
                  ? 'opbe-btn-primary'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Masonry Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Masonry columnsCount={3} gutter="1.5rem">
          {filteredItems.map((item, index) => (
            <ScrollReveal
              key={item.title}
              direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
              delay={index * 0.05}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
            >
              <ImageWithFallback
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm mb-1">
                  {filters.find((filter) => filter.id === item.type)?.label}
                </p>
                <p className="text-white/50 text-sm">{item.date}</p>
              </div>
            </ScrollReveal>
          ))}
        </Masonry>
      </div>

      {/* Previous Events Showcase */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <ScrollReveal direction="up">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.28em] text-[#F7E7B4]/70">
              Previous Events
            </p>
            <h2 className="text-4xl leading-tight text-white md:text-5xl">
              Real Moments from{' '}
              <span className="opbe-gold-text">
                Orlando Celebrations
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Browse a living mix of wedding receptions, corporate activations,
              birthdays, and branded parties captured at recent events.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="group relative min-h-[27rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] shadow-2xl shadow-black/30"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={featuredEvent.image}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <ImageWithFallback
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.26),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.24),transparent_32%)]" />

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <motion.div
                key={`${featuredEvent.title}-copy`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 }}
              >
                <span className="mb-4 inline-flex rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-md">
                  {filters.find((filter) => filter.id === featuredEvent.type)?.label}
                </span>
                <h3 className="max-w-xl text-3xl leading-tight text-white sm:text-4xl">
                  {featuredEvent.title}
                </h3>
                <p className="mt-3 text-white/65">{featuredEvent.date}</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
            {galleryItems.map((item, index) => (
              <motion.button
                key={`${item.title}-previous-event`}
                type="button"
                onClick={() => setActiveEventImage(index)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                whileHover={{ y: -6 }}
                className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border text-left shadow-xl transition-all duration-300 ${
                  activeEventImage === index
                    ? 'border-[#F5D76E]/70 shadow-[#D4AF37]/20'
                    : 'border-[rgba(212,175,55,0.18)] shadow-black/25 hover:border-[rgba(245,215,110,0.4)]'
                }`}
                aria-label={`Show ${item.title}`}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p className="line-clamp-1 text-sm text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-white/50">{item.date}</p>
                </div>
                {activeEventImage === index && (
                  <motion.div
                    layoutId="active-event-image"
                    className="absolute inset-0 rounded-2xl ring-2 ring-[#F5D76E] ring-offset-2 ring-offset-black"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] py-4 backdrop-blur-sm">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="flex w-max gap-4 px-4"
          >
            {[...galleryItems, ...galleryItems].map((item, index) => (
              <div
                key={`${item.title}-filmstrip-${index}`}
                className="relative h-28 w-44 overflow-hidden rounded-2xl border border-white/10 sm:h-36 sm:w-56"
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
