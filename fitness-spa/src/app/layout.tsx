import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const getInter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fitness Spa – Revitalize Your Body and Mind",
  description:
    "Welcome to Fitness Spa, your ultimate destination for relaxation, rejuvenation, and holistic wellness. Offering top-tier spa treatments, fitness programs, and personalized care.",
  keywords:
    "fitness spa, wellness, relaxation, rejuvenation, fitness programs, spa treatments, body wellness, mind wellness",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getInter.className} antialiased`}>{children}</body>
    </html>
  );
}
