import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import { Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { trackBookNowClick, trackQuoteClick } from '@/lib/analytics';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/quote', label: 'Get Quote' },
  { to: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link to="/" className="flex items-center gap-2 group" aria-label="ORLANDO PHOTO BOOTH EVENTS home">
            <img
              src="/images/Logo%20w%20Print%20White%20PNG.png"
              alt="ORLANDO PHOTO BOOTH EVENTS"
              className="h-11 w-auto max-w-[170px] transition-transform group-hover:scale-105 sm:h-14 sm:max-w-[260px]"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `text-sm transition-colors relative ${isActive ? 'text-purple-400' : 'text-white/70 hover:text-white'}`}
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="outline" className="border-white/20 bg-white/10 text-white hover:bg-white/20 rounded-full">
              <Link to="/quote" onClick={() => trackQuoteClick({ location: 'header' })}>Get Quote</Link>
            </Button>
            <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg shadow-purple-500/30">
              <Link to="/booking" onClick={() => trackBookNowClick({ location: 'header' })}>Book Now</Link>
            </Button>
          </div>

          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="lg:hidden text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-400 rounded-md"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 bg-black/90 backdrop-blur-xl">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) => `block w-full px-4 py-3 text-sm transition-colors rounded-xl ${isActive ? 'text-purple-400 bg-white/5' : 'text-white/70 hover:text-white hover:bg-white/5'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="grid grid-cols-2 gap-3 px-4 pt-4">
              <Button asChild className="rounded-full bg-white/10 text-white hover:bg-white/20">
                <Link to="/quote" onClick={() => { setIsMobileMenuOpen(false); trackQuoteClick({ location: 'mobile_nav' }); }}>Get Quote</Link>
              </Button>
              <Button asChild className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <Link to="/booking" onClick={() => { setIsMobileMenuOpen(false); trackBookNowClick({ location: 'mobile_nav' }); }}>Book Now</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
