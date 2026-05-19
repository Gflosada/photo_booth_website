import { GalleryPage as FigmaGalleryPage } from '@/app/components/GalleryPage';
import { SEO } from '@/components/seo/SEO';

export default function GalleryPage() {
  return (
    <>
      <SEO title="Orlando Photo Booth Gallery | ORLANDO PHOTO BOOTH EVENTS" description="View Orlando photo booth rental examples for weddings, parties, corporate events, 360 booth activations, backdrops, and branded events." path="/gallery" />
      <FigmaGalleryPage />
    </>
  );
}
