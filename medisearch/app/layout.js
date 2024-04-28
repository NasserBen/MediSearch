import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'MediSearch',
  description: 'Search for your health needs!',
  icons:{
    icon:['/faviconPackage/favicon.ico?v=4'],
    apple:['/faviconPackage/apple-touch-icon.png'],
    chrome:['/faviconPackage/android-chrome-192x192.png'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-custom-bg ${inter.className}`}>{children}</body>
    </html>
  );
}
