import { Link, useLocation } from 'react-router';
import { Calendar, MessageCircle } from 'lucide-react';
import { trackBookNowClick, trackQuoteClick } from '@/lib/analytics';

export function MobileNavigation() {
  const location = useLocation();
  if (location.pathname === '/booking') return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 md:hidden">
      <Link to="/booking" onClick={() => trackBookNowClick({ location: 'sticky_mobile' })} className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3 text-white shadow-2xl shadow-purple-500/40">
        <Calendar className="w-4 h-4" /> Book Now
      </Link>
      <Link to="/quote" onClick={() => trackQuoteClick({ location: 'sticky_mobile' })} className="flex items-center justify-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-3 text-white backdrop-blur-xl">
        <MessageCircle className="w-4 h-4" /> Get Quote
      </Link>
    </div>
  );
}
