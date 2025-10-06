import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';
import { SiteContentProvider } from './context/SiteContentContext';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
  title: 'Erin Ijesa — Olumirin Waterfalls & Cultural Escape',
  description:
    'Discover Erin Ijesa in Osun State, Nigeria. Explore the majestic Olumirin Waterfalls, Yoruba heritage, eco-adventures, and plan your next getaway.',
  keywords: [
    'Erin Ijesa',
    'Olumirin Waterfalls',
    'Osun State tourism',
    'Nigeria travel',
    'Yoruba culture',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable}`}>
        <SiteContentProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </SiteContentProvider>
      </body>
    </html>
  );
}
