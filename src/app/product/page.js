import Navbar from "@/components/navbar";
import ProductsPageSection from "@/components/products-page-section";
import Footer from "@/components/footer";

export const metadata = {
  title: "Products — O'O+ Billiards Group",
  description: "Browse premium billiards equipment and accessories from our official partners.",
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
