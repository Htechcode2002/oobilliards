import Navbar from "@/components/navbar";
import FaqSection from "@/components/faq-section";
import Footer from "@/components/footer";

export const metadata = {
  title: "FAQ — O'O+ Billiards Group",
  description: "Frequently asked questions about our services, coaching and outlets.",
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
