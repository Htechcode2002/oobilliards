import Navbar from "@/components/navbar";
import HeroBanner from "@/components/hero-banner";
import OutletsCarousel from "@/components/outlets-carousel";
import CoachingPrograms from "@/components/coaching-programs";
import CoachesSection from "@/components/coaches-section";
import AboutUsSection from "@/components/about-us-section";
import StatisticsSection from "@/components/statistics-section";
import EventsPromotions from "@/components/events-promotions";
import ProductSection from "@/components/product-section";
import Footer from "@/components/footer";

export const metadata = {
  title: "O'O+ Billiards | Premium Snooker & Pool Tables in Malaysia & Vietnam",
  description: "Premier billiards venues in Malaysia & Vietnam offering professional snooker tables, pool tables, expert coaching and quality equipment. Visit our outlets in KL, Seremban & Ho Chi Minh City.",
  openGraph: {
    title: "O'O+ Billiards | Premium Snooker & Pool Tables in Malaysia & Vietnam",
    description: "Premier billiards venues in Malaysia & Vietnam offering professional snooker tables, pool tables, expert coaching and quality equipment. Visit our outlets in KL, Seremban & Ho Chi Minh City.",
    images: ['/metalogo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "O'O+ Billiards | Premium Snooker & Pool Tables in Malaysia & Vietnam",
    description: "Premier billiards venues in Malaysia & Vietnam offering professional snooker tables, pool tables, expert coaching and quality equipment.",
    images: ['/metalogo.png'],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <OutletsCarousel />
      <CoachingPrograms />
      {/* <CoachesSection /> */}
      <AboutUsSection />
      <StatisticsSection />
      <EventsPromotions />
      <ProductSection />
      <Footer />
    </div>
  );
}
