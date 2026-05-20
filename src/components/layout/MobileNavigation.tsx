import { Link, useLocation } from 'react-router';
import { Calendar, MessageCircle } from 'lucide-react';
import { trackBookNowClick, trackQuoteClick } from '@/lib/analytics';

export function MobileNavigation() {
  const location = useLocation();
  const hiddenPaths = new Set(['/booking', '/contact', '/quote']);

  if (hiddenPaths.has(location.pathname)) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 grid grid-cols-2 gap-3 md:hidden">
      <Link to="/booking" onClick={() => trackBookNowClick({ location: 'sticky_mobile' })} className="opbe-btn-primary flex items-center justify-center gap-2 px-4 py-3">
        <Calendar className="w-4 h-4" /> Book Now
      </Link>
      <Link to="/quote" onClick={() => trackQuoteClick({ location: 'sticky_mobile' })} className="opbe-btn-secondary flex items-center justify-center gap-2 px-4 py-3">
        <MessageCircle className="w-4 h-4" /> Get Quote
      </Link>
    </div>
  );
}
