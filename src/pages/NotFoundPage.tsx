import { Link } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { SEO } from '@/components/seo/SEO';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 flex items-center">
      <SEO title="Page Not Found | Lumea Booth" description="The page you requested could not be found." path="/404" />
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-6xl text-white mb-6">Page not found</h1>
        <p className="text-xl text-white/70 mb-8">Explore our Orlando photo booth packages or request a quote for your event.</p>
        <Button asChild className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-8 py-6"><Link to="/quote">Get a Free Quote</Link></Button>
      </div>
    </div>
  );
}
