import Navbar from "@/components/navbar";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";

export const metadata = {
  title: "FAQ - Billiards Services & Coaching | O'O+ Billiards Group",
  description: "Get answers about our billiards facilities, coaching programs, table bookings, and equipment. Learn more about O'O+ Billiards services in Malaysia & Vietnam.",
  openGraph: {
    title: "FAQ - Billiards Services & Coaching | O'O+ Billiards Group",
    description: "Get answers about our billiards facilities, coaching programs, table bookings, and equipment. Learn more about O'O+ Billiards services in Malaysia & Vietnam.",
    images: ['/metalogo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FAQ - Billiards Services & Coaching | O'O+ Billiards Group",
    description: "Get answers about our billiards facilities, coaching programs, table bookings, and equipment.",
    images: ['/metalogo.png'],
  },
};

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <FaqSection />
      <Footer />
    </div>
  );
}
