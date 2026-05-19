import { useNavigate } from 'react-router';
import { HomePage as FigmaHomePage } from '@/app/components/HomePage';
import { SEO } from '@/components/seo/SEO';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { faqs } from '@/data/faqs';

const pageMap: Record<string, string> = {
  home: '/',
  gallery: '/gallery',
  booking: '/booking',
  about: '/about',
  contact: '/contact',
  quote: '/quote',
};

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <SEO title="Orlando Photo Booth Rentals | Oralndo Ohiti Booth Events" description="Premium Orlando photo booth rentals for weddings, parties, corporate events, quinceaneras, and private celebrations across Central Florida." />
      <LocalBusinessSchema />
      <FAQSchema faqs={faqs} />
      <FigmaHomePage onNavigate={(page) => navigate(pageMap[page] || '/')} />
    </>
  );
}
