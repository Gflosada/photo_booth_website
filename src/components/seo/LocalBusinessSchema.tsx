import { Helmet } from 'react-helmet-async';
import { BUSINESS_EMAIL, BUSINESS_PHONE, SITE_NAME, SITE_URL, serviceAreas } from '@/lib/constants';

export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    areaServed: serviceAreas.map((name) => ({ '@type': 'City', name })),
    address: { '@type': 'PostalAddress', addressLocality: 'Orlando', addressRegion: 'FL', addressCountry: 'US' },
    priceRange: '$$',
    description: 'Premium photo booth rentals for Orlando weddings, parties, corporate events, quinceaneras, and private celebrations.',
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
