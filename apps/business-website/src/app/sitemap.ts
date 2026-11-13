import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://wayzzo.delivery';

  const routes = [
    '',
    '/how-it-works',
    '/business',
    '/partners',
    '/about',
    '/contact',
    '/faq',
    '/privacy-policy',
    '/terms-and-conditions',
    '/partner-terms',
    '/cancellation-policy',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}

