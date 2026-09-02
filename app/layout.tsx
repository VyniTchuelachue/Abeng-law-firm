import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const signature = Dancing_Script({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Abeng Law Firm | Douala, Cameroon",
  description:
    "The Abeng Law Firm is a full-service law firm in Douala, Cameroon, led by Barrister Abeng, Council Member of the Commonwealth Lawyers Association. Local knowledge, international perspective.",
};

export const viewport: Viewport = {
  themeColor: "#06101F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${signature.variable}`}>
      <body className="font-sans text-navy antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
