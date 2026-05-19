import { SEO } from '@/components/seo/SEO';
import { BookingWizard } from '@/components/booking/BookingWizard';
import { BookingSummary } from '@/components/booking/BookingSummary';

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <SEO title="Book Your Orlando Photo Booth | Oralndo Ohiti Booth Events" description="Start your Orlando photo booth booking request with Oralndo Ohiti Booth Events. Choose your event date, package interest, venue, and guest count." path="/booking" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl text-white mb-6">Book Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Orlando Booth</span></h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">Tell us about your event and we will confirm availability, package fit, and next steps for your Oralndo Ohiti Booth Events experience.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">
          <BookingWizard />
          <BookingSummary />
        </div>
      </div>
    </div>
  );
}
