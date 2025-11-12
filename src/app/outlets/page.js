import Navbar from "@/components/navbar";
import OutletsSection from "@/components/outlets-section";
import Footer from "@/components/footer";

export const metadata = {
  title: "O'O+ Billiards Outlets | Locations in Malaysia & Vietnam",
  description: "Find O'O+ Billiards venues near you. Professional billiards facilities in Kuala Lumpur, Seremban, and Ho Chi Minh City. Book your table today!",
  openGraph: {
    title: "O'O+ Billiards Outlets | Locations in Malaysia & Vietnam",
    description: "Find O'O+ Billiards venues near you. Professional billiards facilities in Kuala Lumpur, Seremban, and Ho Chi Minh City. Book your table today!",
    images: ['/metalogo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "O'O+ Billiards Outlets | Locations in Malaysia & Vietnam",
    description: "Find O'O+ Billiards venues near you. Professional billiards facilities in Kuala Lumpur, Seremban, and Ho Chi Minh City.",
    images: ['/metalogo.png'],
  },
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
