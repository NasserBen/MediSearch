import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MediSearch",
  description: "Search for your health needs!",
  icons:{
    icon:['/faviconTingz/favicon.ico?v=4'],
    apple:['/faviconTingz/apple-touch-icon.png'],
    chrome:['/faviconTingz/android-chrome-192x192.png'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-custom-bg ${inter.className}`}>{children}</body>
    </html>
  );
}
