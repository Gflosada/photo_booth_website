import { AboutPage as FigmaAboutPage } from '@/app/components/AboutPage';
import { SEO } from '@/components/seo/SEO';

export default function AboutPage() {
  return (
    <>
      <SEO title="About Oralndo Ohiti Booth Events | Orlando Event Photo Booth Team" description="Learn about Oralndo Ohiti Booth Events, an Orlando photo booth rental brand focused on premium event experiences, beautiful captures, and easy guest sharing." path="/about" />
      <FigmaAboutPage />
    </>
  );
}
