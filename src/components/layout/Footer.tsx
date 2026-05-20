import { Link } from 'react-router';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { BUSINESS_EMAIL, BUSINESS_PHONE, serviceAreas } from '@/lib/constants';
import { trackEmailClick, trackPhoneClick } from '@/lib/analytics';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/images/Logo%20w%20Print%20White%20PNG.png"
                alt="ORLANDO PHOTO BOOTH EVENTS"
                className="h-14 w-auto max-w-[240px]"
              />
            </Link>
            <p className="text-white/60 text-sm mb-4">Premium photo booth rentals for Orlando weddings, parties, corporate events, and private celebrations.</p>
            <div className="flex gap-4">
              <a href="https://instagram.com" aria-label="ORLANDO PHOTO BOOTH EVENTS on Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-colors"><Instagram className="w-5 h-5 text-white" /></a>
              <a href="https://facebook.com" aria-label="ORLANDO PHOTO BOOTH EVENTS on Facebook" className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#D4AF37] flex items-center justify-center transition-colors"><Facebook className="w-5 h-5 text-white" /></a>
            </div>
          </div>

          <div>
            <h2 className="text-white mb-4 text-base">Quick Links</h2>
            <div className="space-y-2">
              {[
                ['Home', '/'],
                ['Gallery', '/gallery'],
                ['Get a Quote', '/quote'],
                ['Contact', '/contact'],
              ].map(([label, path]) => <Link key={path} to={path} className="block text-white/60 hover:text-[#D4AF37] text-sm transition-colors">{label}</Link>)}
            </div>
          </div>

          <div>
            <h2 className="text-white mb-4 text-base">Contact</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3"><MapPin className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" /><p className="text-white/60 text-sm">Serving Orlando and Central Florida<br />{serviceAreas.slice(1, 5).join(', ')}</p></div>
              <a href={`tel:${BUSINESS_PHONE.replace(/[^+\d]/g, '')}`} onClick={trackPhoneClick} className="flex items-center gap-3 text-white/60 hover:text-[#D4AF37] text-sm"><Phone className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />{BUSINESS_PHONE}</a>
              <a href={`mailto:${BUSINESS_EMAIL}`} onClick={trackEmailClick} className="flex items-center gap-3 text-white/60 hover:text-[#D4AF37] text-sm"><Mail className="w-5 h-5 text-[#D4AF37] flex-shrink-0" />{BUSINESS_EMAIL}</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© 2026 ORLANDO PHOTO BOOTH EVENTS. All rights reserved.</p>
          <p className="text-white/40 text-sm">By appointment · Fast quote response · Digital sharing included</p>
        </div>
      </div>
    </footer>
  );
}
