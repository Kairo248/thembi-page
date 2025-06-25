import "./globals.css";
import FloatingWhatsAppButton from "../components/FloatingWhatsappButton";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Thembi's site",
  description: "Organic Wellness & Modern Fashion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Navbar />
        <FloatingWhatsAppButton />
      </body>
    </html>
  );
}
