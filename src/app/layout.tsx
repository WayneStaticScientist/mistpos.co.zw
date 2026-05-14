import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Mistpos | Modern Point of Sale & Inventory Management",
  description: "Experience the next generation of retail management with Mistpos. Inventory, multi-printer support, real-time analytics, and more.",
  keywords: ["POS", "Point of Sale", "Inventory Management", "Receipt Printing", "Retail Software", "Mistpos"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="font-sans min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
