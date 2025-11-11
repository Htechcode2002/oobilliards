import Navbar from "@/components/navbar";
import AboutPageContent from "@/components/about-page-content";
import Footer from "@/components/footer";

export const metadata = {
  title: "About — O'O+ Billiards Group",
  description: "Learn about O'O+ Billiards Group: our story, values, and expansion.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <AboutPageContent />
      <Footer />
    </div>
  );
}
