import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cluely - Live AI Meeting Assistant | Real-Time Meeting Notes and AI Insights",
  description: "AI meeting assistant that provides live meeting notes, instant answers, and real-time insights during calls. Unlike Otter or Granola, helps you during meetings, not just after.",
  openGraph: {
    title: "Cluely - Live AI Meeting Assistant | Real-Time Meeting Notes and AI Insights",
    description: "AI meeting assistant that provides live meeting notes, instant answers, and real-time insights during calls. Unlike Otter or Granola, helps you during meetings, not just after.",
    images: [
      { url: '/images/seo.jpg', width: 1280, height: 780, alt: "Cluely - Live AI Meeting Assistant | Real-Time Meeting Notes and AI Insights" }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@cluely-clone",
    creator: "@creator",
    images: "/images/seo.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
