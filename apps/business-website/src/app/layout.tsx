import type { Metadata, Viewport } from 'next';
import { Geist, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#111111',
};

export const metadata: Metadata = {
  title: {
    default: 'wayzzo — Easy Local Deliveries Powered by Nearby Riders',
    template: '%s | wayzzo',
  },
  description:
    'A community delivery platform connecting local delivery needs with friendly nearby riders. Fast for customers, great for local shops, and flexible earnings for delivery partners.',
  keywords: [
    'local delivery',
    'two-wheeler courier',
    'bike delivery',
    'send parcels',
    'local shop delivery',
    'wayzzo',
  ],
  icons: {
    icon: '/wayzzo-logo.png',
  },
  openGraph: {
    title: 'wayzzo — Easy Local Deliveries Powered by Nearby Riders',
    description: 'A community delivery platform connecting local delivery needs with friendly nearby riders.',
    type: 'website',
    images: ['/wayzzo-logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-surface text-on-surface antialiased flex flex-col justify-between overflow-x-hidden selection:bg-secondary/20 selection:text-secondary relative">
        {/* Ambient Atmospheric Lighting for Glassmorphism Refraction */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
          {/* Subtle Ambient Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          
          {/* Top-Right Terracotta Radiant Aura */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(200,121,74,0.09)_0%,rgba(200,121,74,0.02)_45%,transparent_70%)] blur-2xl" />
          
          {/* Mid-Left Cool Waypoint Glow */}
          <div className="absolute top-[35%] -left-40 w-[650px] h-[650px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.06)_0%,rgba(52,211,153,0.02)_50%,transparent_70%)] blur-3xl" />
          
          {/* Lower-Right Warm Glow */}
          <div className="absolute top-[70%] -right-40 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(255,166,115,0.07)_0%,transparent_65%)] blur-3xl" />
        </div>

        {children}
      </body>
    </html>
  );
}
