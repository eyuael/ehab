import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EHAB Accountancy Services | Expert Financial Solutions",
  description: "Professional accounting and financial services for businesses and individuals. Expert tax planning, bookkeeping, financial consulting, and business advisory services in New York.",
  keywords: [
    "accountancy",
    "accounting services",
    "tax planning",
    "bookkeeping",
    "financial consulting",
    "business advisory",
    "CPA",
    "New York accountant",
    "tax preparation",
    "payroll services"
  ],
  authors: [{ name: "EHAB Accountancy Services" }],
  creator: "EHAB Accountancy Services",
  publisher: "EHAB Accountancy Services",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ehab-accountancy.com",
    title: "EHAB Accountancy Services | Expert Financial Solutions",
    description: "Professional accounting and financial services for businesses and individuals. Expert tax planning, bookkeeping, financial consulting, and business advisory services.",
    siteName: "EHAB Accountancy Services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EHAB Accountancy Services - Professional Financial Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EHAB Accountancy Services | Expert Financial Solutions",
    description: "Professional accounting and financial services for businesses and individuals.",
    images: ["/og-image.jpg"],
    creator: "@ehab_accountancy",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://ehab-accountancy.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
