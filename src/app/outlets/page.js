import Navbar from "@/components/navbar";
import OutletsSection from "@/components/outlets-section";
import Footer from "@/components/footer";

export const metadata = {
  title: "Outlets — O'O+ Billiards Group",
  description: "Find our outlets across Malaysia and Vietnam, locations and contact details.",
};

export default function OutletsPage() {
  return (
    <div className="min-h-screen">
      <Navbar /> 
      <OutletsSection />
      <Footer />
    </div>
  );
}
