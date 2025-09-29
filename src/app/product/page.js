import Navbar from "@/components/navbar";
import ProductsPageSection from "@/components/products-page-section";
import Footer from "@/components/footer";

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProductsPageSection />
      <Footer />
    </div>
  );
}
