import { useNavigate } from 'react-router';
import { ServicesPage as FigmaServicesPage } from '@/app/components/ServicesPage';
import { SEO } from '@/components/seo/SEO';
import { ServiceSchema } from '@/components/seo/ServiceSchema';

const pageMap: Record<string, string> = { booking: '/booking', contact: '/contact', services: '/services' };

export default function ServicesPage() {
  const navigate = useNavigate();
  return (
    <>
      <SEO title="Orlando Photo Booth Services | Weddings, 360 Booths, Corporate Events" description="Explore ORLANDO PHOTO BOOTH EVENTS photo booth services in Orlando, including wedding photo booths, 360 video booths, corporate activations, glam booths, and custom backdrops." path="/services" />
      <ServiceSchema name="Orlando Photo Booth Services" description="Premium photo booth and 360 booth services for Orlando events." path="/services" />
      <FigmaServicesPage onNavigate={(page) => navigate(pageMap[page] || '/services')} />
    </>
  );
}
