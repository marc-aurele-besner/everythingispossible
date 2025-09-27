import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EverythingIsPossible - Absurd Motivational Affirmations",
  description: "Get surprised by hilariously absurd motivational slogans delivered straight to your notifications. Because everything is possible, even eating the moon.",
  keywords: ["motivation", "affirmations", "notifications", "humor", "inspiration"],
  authors: [{ name: "EverythingIsPossible Team" }],
  creator: "EverythingIsPossible",
  publisher: "EverythingIsPossible",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://everythingispossible.vercel.app"),
  openGraph: {
    title: "EverythingIsPossible - Absurd Motivational Affirmations",
    description: "Get surprised by hilariously absurd motivational slogans delivered straight to your notifications.",
    url: "https://everythingispossible.vercel.app",
    siteName: "EverythingIsPossible",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EverythingIsPossible - Absurd Motivational Affirmations",
    description: "Get surprised by hilariously absurd motivational slogans delivered straight to your notifications.",
    creator: "@everythingispossible",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a0a0a] text-[#ededed] min-h-screen`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
