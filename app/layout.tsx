import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "YetiGrowth - Digital Growth Agency",
  description: "Helping businesses scale with cutting-edge web development, SEO, and digital marketing strategies.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "YetiGrowth - Digital Growth Agency",
    description: "Helping businesses scale with cutting-edge web development, SEO, and digital marketing strategies.",
    url: "https://yeti-growth.vercel.app",
    siteName: "YetiGrowth",
    images: [
      {
        url: "/og-image.png", // Must be at least 1200x630px
        width: 1200,
        height: 630,
        alt: "YetiGrowth - Digital Growth Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YetiGrowth - Digital Growth Agency",
    description: "Helping businesses scale with cutting-edge web development, SEO, and digital marketing strategies.",
    images: ["/og-image.png"], // Same image as Open Graph
  },
   verification: {
    google: 'QO9XBRMAt28mRZFbx39FPdlABb2AZNykZWiKNsHddAk',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}