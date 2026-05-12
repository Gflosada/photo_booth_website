import { Award, Camera, GraduationCap, Image, PartyPopper, Share2, Sparkles, Users, Video, Wand2 } from 'lucide-react';

export const services = [
  { id: 'wedding', title: 'Wedding Photo Booth', icon: Camera, path: '/wedding-photo-booth-orlando', description: 'Elegant booth experiences, custom overlays, guest books, and instant sharing for Orlando weddings.' },
  { id: 'birthday', title: 'Birthday Party Photo Booth', icon: PartyPopper, path: '/birthday-photo-booth-orlando', description: 'High-energy photo booth rentals for milestone birthdays, Sweet 16s, and private parties.' },
  { id: 'corporate', title: 'Corporate Event Photo Booth', icon: Award, path: '/corporate-photo-booth-orlando', description: 'Branded booths, lead capture-ready experiences, and polished activations for corporate events.' },
  { id: '360', title: '360 Video Booth', icon: Video, path: '/360-photo-booth-orlando', description: 'Share-ready slow-motion video content for weddings, launches, parties, and nightlife events.' },
  { id: 'glam', title: 'Glam Booth', icon: Sparkles, path: '/services', description: 'Soft lighting, flattering filters, and premium portraits for upscale celebrations.' },
  { id: 'sharing', title: 'Digital Sharing Station', icon: Share2, path: '/services', description: 'Fast text, email, and QR sharing so guests can post content while the event is happening.' },
  { id: 'backdrops', title: 'Custom Backdrops', icon: Image, path: '/services', description: 'Event-ready backdrops and branded sets that make every capture feel intentional.' },
  { id: 'branded', title: 'Branded Event Experience', icon: Wand2, path: '/services', description: 'Custom overlays, branded screens, and sponsor-friendly content for activations.' },
  { id: 'quinceanera', title: 'Quinceanera Photo Booth', icon: Users, path: '/services', description: 'A polished, fun booth setup for quinceaneras across Orlando and Central Florida.' },
  { id: 'graduation', title: 'Graduation Photo Booth', icon: GraduationCap, path: '/services', description: 'Photo booth rentals for graduation parties, school events, and family celebrations.' },
];
