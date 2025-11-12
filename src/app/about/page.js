import Navbar from "@/components/navbar";
import AboutPageContent from "@/components/about-page-content";
import Footer from "@/components/footer";

export const metadata = {
  title: "About O'O+ Billiards Group | Premium Billiards Venues in Asia",
  description: "Discover O'O+ Billiards Group's journey in providing world-class billiards facilities across Malaysia and Vietnam. Our passion for excellence in snooker and pool equipment.",
  openGraph: {
    title: "About O'O+ Billiards Group | Premium Billiards Venues in Asia",
    description: "Discover O'O+ Billiards Group's journey in providing world-class billiards facilities across Malaysia and Vietnam. Our passion for excellence in snooker and pool equipment.",
    images: ['/metalogo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About O'O+ Billiards Group | Premium Billiards Venues in Asia",
    description: "Discover O'O+ Billiards Group's journey in providing world-class billiards facilities across Malaysia and Vietnam.",
    images: ['/metalogo.png'],
  },
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
