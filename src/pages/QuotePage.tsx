import { SEO } from '@/components/seo/SEO';
import { QuoteForm } from '@/components/booking/QuoteForm';

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <SEO title="Get a Free Orlando Photo Booth Quote | ORLANDO PHOTO BOOTH EVENTS" description="Request a free quote for Orlando photo booth rental packages, 360 booth experiences, custom backdrops, corporate activations, and wedding booths." path="/quote" />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl text-white mb-6">Get a Free <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Photo Booth Quote</span></h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">Share your event details and ORLANDO PHOTO BOOTH EVENTS will follow up with availability, package recommendations, and transparent next steps.</p>
        </div>
        <QuoteForm />
      </div>
    </div>
  );
}
