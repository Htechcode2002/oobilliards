import Navbar from "@/components/navbar";
import HeroBanner from "@/components/hero-banner";
import CoachingPrograms from "@/components/coaching-programs";
import CoachesSection from "@/components/coaches-section";
import AboutUsSection from "@/components/about-us-section";
import StatisticsSection from "@/components/statistics-section";
import EventsPromotions from "@/components/events-promotions";
import ProductSection from "@/components/product-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroBanner />
      <CoachingPrograms />
      <CoachesSection />
      <AboutUsSection />
      <StatisticsSection />
      <EventsPromotions />
      <ProductSection />
      <Footer />
    </div>
  );
}
