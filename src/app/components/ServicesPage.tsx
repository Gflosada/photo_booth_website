import { Camera, Video, Sparkles, Smartphone, Image as ImageIcon, Award } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { ScrollReveal, ScaleOnScroll } from './ScrollReveal';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const boothTypes = [
    {
      icon: Camera,
      title: 'Classic Mirror Booth',
      description: 'Elegant and timeless full-length mirror with interactive touchscreen and instant prints.',
      image: 'https://images.unsplash.com/photo-1760727467473-80a67663dfd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXJyb3IlMjBlbGVnYW50JTIwbHV4dXJ5fGVufDF8fHx8MTc2MjI3OTQ5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-purple-500 to-blue-500',
    },
    {
      icon: Video,
      title: '360° Glam Booth',
      description: 'Full rotation video booth capturing stunning slow-motion videos from every angle.',
      image: 'https://images.unsplash.com/photo-1544719576-0b52abab3d03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwYm9vdGh8ZW58MXx8fHwxNzYyMjc5NDk0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-pink-500 to-orange-500',
    },
    {
      icon: Sparkles,
      title: 'AI Filter Booth',
      description: 'Fun digital effects, AR filters, and AI-enhanced photo experiences in real-time.',
      image: 'https://images.unsplash.com/photo-1761416351525-fa957d228535?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90byUyMGJvb3RoJTIwcGFydHklMjBldmVudHxlbnwxfHx8fDE3NjIyNzk0OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Smartphone,
      title: 'Selfie Pod',
      description: 'Compact, portable, and modern setup perfect for intimate gatherings and social events.',
      image: 'https://images.unsplash.com/photo-1728024450639-dc1b6183dbf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwZnVufGVufDF8fHx8MTc2MjI3OTQ5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: ImageIcon,
      title: 'Event Wall Booth',
      description: 'Custom backdrop experiences with professional lighting for stunning portraits.',
      image: 'https://images.unsplash.com/photo-1762241931276-6adbb78adfeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VsZWJyYXRpb24lMjBlbGVnYW50fGVufDF8fHx8MTc2MjI3OTQ5MXww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Award,
      title: 'Brand Activation Booths',
      description: 'For corporate events & marketing with custom branding and data collection.',
      image: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2MjIwMTcxMnww&ixlib=rb-4.1.0&q=80&w=1080',
      gradient: 'from-blue-500 to-purple-500',
    },
  ];

  const packages = [
    {
      name: 'Silver',
      hours: '2',
      prints: 'Unlimited',
      sharing: 'Yes',
      props: '—',
      attendant: 'Yes',
      price: '$$',
    },
    {
      name: 'Gold',
      hours: '4',
      prints: 'Unlimited',
      sharing: 'Yes',
      props: 'Yes',
      attendant: 'Yes',
      price: '$$$',
    },
    {
      name: 'Platinum',
      hours: '6',
      prints: 'Unlimited + Custom Overlay',
      sharing: 'Yes + Live Gallery',
      props: 'Premium Props',
      attendant: 'Dedicated',
      price: '$$$$',
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Photo Booth
            </span>{' '}
            Experiences
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            From classic elegance to cutting-edge technology, we have the perfect booth for your event.
          </p>
        </motion.div>
      </div>

      {/* Booth Types Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {boothTypes.map((booth, index) => (
            <ScrollReveal
              key={booth.title}
              direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
              delay={index * 0.1}
            >
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden group hover:bg-white/10 transition-all">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={booth.image}
                    alt={booth.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  
                  {/* Icon */}
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${booth.gradient} flex items-center justify-center`}>
                    <booth.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl text-white mb-3">{booth.title}</h3>
                  <p className="text-white/60 mb-6">{booth.description}</p>
                  <Button
                    onClick={() => onNavigate('booking')}
                    className={`w-full bg-gradient-to-r ${booth.gradient} hover:opacity-90 text-white py-6 rounded-xl`}
                  >
                    Book This Booth
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Package Comparison Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <ScrollReveal direction="up">
          <h2 className="text-4xl text-white text-center mb-12">
          Compare Our{' '}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Packages
          </span>
        </h2>
        </ScrollReveal>

        <ScaleOnScroll>
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableHead className="text-white">Package</TableHead>
                  <TableHead className="text-white">Hours</TableHead>
                  <TableHead className="text-white">Prints</TableHead>
                  <TableHead className="text-white">Digital Sharing</TableHead>
                  <TableHead className="text-white">Props</TableHead>
                  <TableHead className="text-white">Attendant</TableHead>
                  <TableHead className="text-white text-right">Price Range</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {packages.map((pkg) => (
                  <TableRow key={pkg.name} className="border-white/10 hover:bg-white/5">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          pkg.name === 'Silver' ? 'bg-gray-400' :
                          pkg.name === 'Gold' ? 'bg-yellow-400' :
                          'bg-purple-400'
                        }`} />
                        <span className="text-white">{pkg.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-white/70">{pkg.hours}</TableCell>
                    <TableCell className="text-white/70">{pkg.prints}</TableCell>
                    <TableCell className="text-white/70">{pkg.sharing}</TableCell>
                    <TableCell className="text-white/70">{pkg.props}</TableCell>
                    <TableCell className="text-white/70">{pkg.attendant}</TableCell>
                    <TableCell className="text-white/70 text-right">{pkg.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Card>
        </ScaleOnScroll>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 border-0 rounded-3xl p-12">
          <h2 className="text-3xl text-white mb-4">
            Can't Decide? Let's Customize Your Experience
          </h2>
          <p className="text-white/90 mb-8">
            Every event is unique. We'll work with you to create the perfect photo booth experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate('booking')}
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-6 rounded-xl"
            >
              Customize My Booth
            </Button>
            <Button
              onClick={() => onNavigate('contact')}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 rounded-xl"
            >
              Talk to an Expert
            </Button>
          </div>
        </Card>
        </ScrollReveal>
      </div>
    </div>
  );
}
