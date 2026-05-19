import { Link } from 'react-router';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { SEO } from '@/components/seo/SEO';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 flex items-center">
      <SEO title="Thank You | ORLANDO PHOTO BOOTH EVENTS" description="Thank you for contacting ORLANDO PHOTO BOOTH EVENTS about your Orlando photo booth rental." path="/thank-you" />
      <div className="max-w-3xl mx-auto px-4 text-center">
        <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto mb-6" />
        <h1 className="text-5xl text-white mb-6">Thank you</h1>
        <p className="text-xl text-white/70 mb-8">Your request has been prepared. If Supabase is configured, it will be stored for follow-up. Otherwise, connect production integrations before launch.</p>
        <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-8 py-6"><Link to="/">Back to Home</Link></Button>
      </div>
    </div>
  );
}
