import type { Metadata } from 'next';

export function generatePageMetadata(
  title: string,
  description?: string
): Metadata {
  return {
    title,
    description: description ?? 'Wayzzo — Hyperlocal On-Demand Delivery across Indian cities.',
    openGraph: {
      title: `${title} | Wayzzo`,
      description: description,
    },
  };
}
