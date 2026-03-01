import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/SchemaMarkup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://perezidentialconstruction.com"),
  title: {
    default:
      "Perezidential Construction | Kitchen & Bathroom Remodeling in Wonder Lake, IL",
    template: "%s | Perezidential Construction",
  },
  description:
    "Perezidential Construction is a premier remodeling company serving Wonder Lake, McHenry, Crystal Lake, Woodstock & Lake in the Hills, IL. Kitchen remodeling, bathroom remodeling, whole house remodeling & home additions. Call for a free quote!",
  keywords: [
    "remodeling contractor Wonder Lake IL",
    "kitchen remodeling McHenry County",
    "bathroom remodeling Crystal Lake IL",
    "whole house remodeling Woodstock IL",
    "home additions Lake in the Hills IL",
    "general contractor McHenry County IL",
    "home renovation Wonder Lake",
    "construction company northern Illinois",
    "Perezidential Construction",
  ],
  authors: [{ name: "Perezidential Construction LLC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://perezidentialconstruction.com",
    siteName: "Perezidential Construction",
    title: "Perezidential Construction | Premier Remodeling in McHenry County, IL",
    description:
      "Transform your home with Perezidential Construction. Expert kitchen remodeling, bathroom remodeling, whole house remodeling & home additions serving Wonder Lake, McHenry, Crystal Lake & surrounding areas.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Perezidential Construction - Premier Remodeling Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Perezidential Construction | Premier Remodeling in McHenry County, IL",
    description:
      "Transform your home with expert remodeling services. Kitchen, bathroom, whole house remodeling & home additions.",
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
  alternates: {
    canonical: "https://perezidentialconstruction.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
