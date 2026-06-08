import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { portfolio } from "@/lib/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${portfolio.site.name} — ${portfolio.site.title}`,
  description: portfolio.site.tagline,
  openGraph: {
    title: `${portfolio.site.name} — Portfolio`,
    description: portfolio.site.tagline,
    images: [portfolio.display.heroMedia],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}