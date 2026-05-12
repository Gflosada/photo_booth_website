import { ContactPage as FigmaContactPage } from '@/app/components/ContactPage';
import { SEO } from '@/components/seo/SEO';

export default function ContactPage() {
  return (
    <>
      <SEO title="Contact Lumea Booth | Orlando Photo Booth Rental" description="Contact Lumea Booth for Orlando photo booth rental availability, package questions, event planning help, and custom quote requests." path="/contact" />
      <FigmaContactPage />
    </>
  );
}
