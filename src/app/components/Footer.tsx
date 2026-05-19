import { Camera, Instagram, Phone, Mail, MapPin, Facebook } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl text-white">Oralndo Ohiti Booth Events</span>
            </div>
            <p className="text-white/60 text-sm mb-4">
              Make every moment picture-perfect in Orlando.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-500 flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-500 flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => onNavigate(item.toLowerCase())}
                  className="block text-white/60 hover:text-purple-400 text-sm transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-4">Booth Types</h3>
            <div className="space-y-2">
              {['Classic Mirror Booth', '360° Glam Booth', 'AI Filter Booth', 'Selfie Pod', 'Event Wall Booth'].map((item) => (
                <p key={item} className="text-white/60 text-sm">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                <p className="text-white/60 text-sm">Orlando, Florida</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <p className="text-white/60 text-sm">(407) 555-BOOTH</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <p className="text-white/60 text-sm">hello@oralndoohitiboothevents.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">
            © 2025 Oralndo Ohiti Booth Events. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <button className="text-white/40 hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button className="text-white/40 hover:text-white transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
