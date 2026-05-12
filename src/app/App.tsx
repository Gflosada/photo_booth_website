import { lazy, Suspense, useRef } from 'react';
import { Route, Routes } from 'react-router';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileNavigation } from '@/components/layout/MobileNavigation';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { useGSAPPageTransition } from '@/components/animation/useGSAPPageTransition';
import { FloridaBackground } from './components/FloridaBackground';

const HomePage = lazy(() => import('@/pages/HomePage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const PackagesPage = lazy(() => import('@/pages/PackagesPage'));
const GalleryPage = lazy(() => import('@/pages/GalleryPage'));
const BookingPage = lazy(() => import('@/pages/BookingPage'));
const QuotePage = lazy(() => import('@/pages/QuotePage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ThankYouPage = lazy(() => import('@/pages/ThankYouPage'));
const SEOServicePage = lazy(() => import('@/pages/SEOServicePage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

export default function App() {
  const mainRef = useRef<HTMLElement>(null);
  useGSAPPageTransition(mainRef);

  return (
    <div className="min-h-screen bg-black relative">
      <ScrollToTop />
      <FloridaBackground />

      <div className="relative z-10">
        <Header />

        <main ref={mainRef}>
          <Suspense fallback={<div className="min-h-screen bg-black pt-32 text-center text-white">Loading Lumea Booth...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/quote" element={<QuotePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/thank-you" element={<ThankYouPage />} />
              <Route path="/photo-booth-rental-orlando" element={<SEOServicePage />} />
              <Route path="/wedding-photo-booth-orlando" element={<SEOServicePage />} />
              <Route path="/360-photo-booth-orlando" element={<SEOServicePage />} />
              <Route path="/corporate-photo-booth-orlando" element={<SEOServicePage />} />
              <Route path="/birthday-photo-booth-orlando" element={<SEOServicePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <MobileNavigation />
      </div>
    </div>
  );
}
