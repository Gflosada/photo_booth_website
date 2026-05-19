import { Link } from 'react-router';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { SEO } from '@/components/seo/SEO';
import { packages } from '@/data/packages';
import { trackPackageSelect, trackQuoteClick } from '@/lib/analytics';

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <SEO title="Orlando Photo Booth Packages | ORLANDO PHOTO BOOTH EVENTS" description="Compare ORLANDO PHOTO BOOTH EVENTS photo booth packages for classic booths, premium events, 360 video booth experiences, weddings, parties, and corporate activations." path="/packages" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/80 mb-6"><Sparkles className="w-4 h-4 text-yellow-300" /> Custom Orlando event packages</div>
          <h1 className="text-5xl md:text-6xl text-white mb-6">Photo Booth <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Packages</span></h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">Choose a starting point, then customize backdrops, branding, prints, sharing, and 360 video options around your event.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card key={pkg.id} className={`bg-white/5 backdrop-blur-sm border ${index === 1 ? 'border-purple-400/60 shadow-2xl shadow-purple-500/20' : 'border-white/10'} rounded-3xl p-8 flex flex-col`}>
              <h2 className="text-2xl text-white mb-2">{pkg.name}</h2>
              <p className="text-purple-300 mb-4">{pkg.price}</p>
              <p className="text-white/60 mb-6">Ideal for {pkg.idealFor}. Recommended duration: {pkg.duration}.</p>
              <div className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => <div key={feature} className="flex gap-3 text-white/75"><Check className="w-5 h-5 text-green-400 flex-shrink-0" />{feature}</div>)}
              </div>
              <p className="text-white/50 text-sm mb-6">Popular add-ons: {pkg.addOns.join(', ')}</p>
              <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl py-6">
                <Link to="/quote" onClick={() => { trackPackageSelect(pkg.id); trackQuoteClick({ packageId: pkg.id }); }}>Check Availability</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
