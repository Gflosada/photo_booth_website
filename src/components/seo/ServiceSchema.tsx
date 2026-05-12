import { Helmet } from 'react-helmet-async';
import { SITE_NAME, absoluteUrl } from '@/lib/constants';

export function ServiceSchema({ name, description, path }: { name: string; description: string; path: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    areaServed: 'Orlando, Florida',
    provider: { '@type': 'LocalBusiness', name: SITE_NAME },
    url: absoluteUrl(path),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
