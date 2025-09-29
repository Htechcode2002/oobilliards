import Navbar from "@/components/navbar";
import AboutPageContent from "@/components/about-page-content";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutPageContent />
      <Footer />
    </div>
  );
}
