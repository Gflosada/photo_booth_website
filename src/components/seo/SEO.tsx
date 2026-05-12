import { Helmet } from 'react-helmet-async';
import { absoluteUrl, SITE_NAME } from '@/lib/constants';

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function SEO({ title, description, path = '/', image = '/og-image.jpg' }: SEOProps) {
  const canonical = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
