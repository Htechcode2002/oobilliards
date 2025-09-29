import "./globals.css";
import { Poppins, Kanit } from 'next/font/google';

// Premium font configuration for snooker website
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "OOBilliards - Premium Billiards Equipment",
  description: "Feel The Joy, One Ball At A Time! Professional billiards tables and equipment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${kanit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
