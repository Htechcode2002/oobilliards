import "./globals.css";
import { Poppins, Kanit } from 'next/font/google';
import ScrollToTop from '@/components/scroll-to-top';
import AnnouncementDialog from '@/components/announcement-dialog';

// Premium font configuration for snooker website
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.oobilliards.com'),
  title: "O'O+ Billiards | Premium Snooker & Pool Tables in Malaysia & Vietnam",
  description: "Premier billiards venues offering professional snooker & pool tables, expert coaching, and quality equipment in Malaysia & Vietnam. Feel the joy, one ball at a time!",
  icons: {
    icon: '/metalogo.png',
    shortcut: '/metalogo.png',
    apple: '/metalogo.png',
  },
  openGraph: {
    title: "OOBilliards - Premium Billiards Equipment",
    description: "Feel The Joy, One Ball At A Time! Professional billiards tables and equipment.",
    images: ['/metalogo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "OOBilliards - Premium Billiards Equipment",
    description: "Feel The Joy, One Ball At A Time! Professional billiards tables and equipment.",
    images: ['/metalogo.png'],
  },
};

export default function RootLayout({ children }) { 
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${kanit.variable} antialiased`}
      >
        {children}
        <ScrollToTop />
        <AnnouncementDialog />
      </body>
    </html>
  );
}
