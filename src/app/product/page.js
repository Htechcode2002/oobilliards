import Navbar from "@/components/navbar";
import ProductsPageSection from "@/components/products-page-section";
import Footer from "@/components/footer";

export const metadata = {
  title: "Premium Billiards Equipment & Accessories | O'O+ Billiards",
  description: "Shop professional billiards tables, cues, balls and accessories. Official partner of leading brands. Quality equipment for snooker and pool enthusiasts in Malaysia & Vietnam.",
  openGraph: {
    title: "Premium Billiards Equipment & Accessories | O'O+ Billiards",
    description: "Shop professional billiards tables, cues, balls and accessories. Official partner of leading brands. Quality equipment for snooker and pool enthusiasts in Malaysia & Vietnam.",
    images: ['/metalogo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Premium Billiards Equipment & Accessories | O'O+ Billiards",
    description: "Shop professional billiards tables, cues, balls and accessories. Official partner of leading brands.",
    images: ['/metalogo.png'],
  },
};

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductsPageSection />
      <Footer />
    </div>
  );
}
