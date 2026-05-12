import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import Masonry from 'react-responsive-masonry';
import { ScrollReveal, ScaleOnScroll } from './ScrollReveal';

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Events' },
    { id: 'weddings', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'birthdays', label: 'Birthdays' },
    { id: 'branding', label: 'Branding' },
  ];

  const galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1762241931276-6adbb78adfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VsZWJyYXRpb24lMjBlbGVnYW50fGVufDF8fHx8MTc2MjI3OTQ5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Elegant Garden Wedding',
      type: 'weddings',
      date: 'Oct 15, 2024',
    },
    {
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MjIwMTcxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Tech Conference 2024',
      type: 'corporate',
      date: 'Sep 22, 2024',
    },
    {
      image: 'https://images.unsplash.com/photo-1728024450639-dc1b6183dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwZnVufGVufDF8fHx8MTc2MjI3OTQ5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Sweet 16 Celebration',
      type: 'birthdays',
      date: 'Nov 3, 2024',
    },
    {
      image: 'https://images.unsplash.com/photo-1761416351525-fa957d228535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGJvb3RoJTIwcGFydHklMjBldmVudHxlbnwxfHx8fDE3NjIyNzk0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Brand Launch Party',
      type: 'branding',
      date: 'Aug 18, 2024',
    },
    {
      image: 'https://images.unsplash.com/photo-1745433921722-26dd28b318d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBsYXVnaGluZyUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2MjI3OTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Downtown Orlando Reception',
      type: 'weddings',
      date: 'Oct 28, 2024',
    },
    {
      image: 'https://images.unsplash.com/photo-1568823577963-7f207be7f395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGNvbmZldHRpJTIwam95fGVufDF8fHx8MTc2MjI3OTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'New Year Gala',
      type: 'corporate',
      date: 'Dec 31, 2024',
    },
    {
      image: 'https://images.unsplash.com/photo-1760727467473-80a67663dfd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXJyb3IlMjBlbGVnYW50JTIwbHV4dXJ5fGVufDF8fHx8MTc2MjI3OTQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      title: '50th Birthday Bash',
      type: 'birthdays',
      date: 'Jul 12, 2024',
    },
    {
      image: 'https://images.unsplash.com/photo-1544719576-0b52abab3d03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYm9vdGh8ZW58MXx8fHwxNzYyMjc5NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Product Launch Event',
      type: 'branding',
      date: 'Sep 5, 2024',
    },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.type === activeFilter);

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
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
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
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
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
              key={index}
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
                  {filters.find(f => f.id === item.type)?.label}
                </p>
                <p className="text-white/50 text-sm">{item.date}</p>
              </div>
            </ScrollReveal>
          ))}
        </Masonry>
      </div>

      {/* Reel Showcase Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <ScrollReveal direction="up">
          <h2 className="text-4xl text-white text-center mb-12">
          360° Booth{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Highlights
          </span>
        </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <ScaleOnScroll key={item}>
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 group">
              <ImageWithFallback
                src={`https://images.unsplash.com/photo-156881752396${item}-7f207be7f395?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGNvbmZldHRpJTIwam95fGVufDF8fHx8MTc2MjI3OTQ5M3ww&ixlib=rb-4.1.0&q=80&w=1080`}
                alt={`360 Video ${item}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                </div>
              </div>
              </div>
            </ScaleOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
}
