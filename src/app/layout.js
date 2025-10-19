import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/common/NavBar";
import Footer from "@/component/common/Footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // Improves loading performance
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap', // Improves loading performance
});

// Comprehensive metadata for SEO
export const metadata = {
  title: {
    default: "Pixi Creative - Branding, Design, Development & Digital Solutions",
    template: "%s | Pixi Creative "
  },
  description: "Pixi Creative  offers premium creative services, business consulting, and academic training in branding, design, web development, and digital marketing.",
  keywords: "creative services, branding, graphic design, web development, digital marketing, business consulting, motion graphics, interior design, SEO, social media marketing, Pixi Academy, company, company in kabul, top company in kabul, software house in kabul, software house, afghanistan, kabul, share e now, web development company in kabul",
  authors: [{ name: "Pixi Creative " }],
  creator: "Pixi Creative ",
  publisher: "Pixi Creative ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.pixigroup.co'), // Replace with your actual domain
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "Pixi Creative Studio - Branding, Design & Digital Solutions",
    description: "Premium creative services, business consulting, and academic training in branding, design, and digital marketing.",
    url: 'https://www.pixigroup.co', // Replace with your actual domain
    siteName: 'Pixi Creative Studio',
    images: [
      {
        url: '/og-image.png', // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: 'Pixi Creative Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pixi Creative - Branding, Design & Digital Solutions',
    description: 'Premium creative services, business consulting, and academic training.',
    // images: ['/twitter-image.jpg'], // Replace with your actual Twitter image path
    creator: '@pixicreative', // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'creative services',
};

// Structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Pixi Creative',
  description: 'Premium creative services, business consulting, and academic training',
  url: 'http://www.pixigroup.co/', // Replace with your actual domain
  logo: 'http://www.pixigroup.co/logo.png', // Replace with your actual logo path
  sameAs: [
    
    'https://www.facebook.com/profile.php?id=61558183823286#',
    'https://www.linkedin.com/company/pixicreative/',
    'https://www.instagram.com/pixicreative_/',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+93705155015', // Replace with your actual phone number
    contactType: 'customer service',
    areaServed: 'AF', // Adjust based on your service area
    availableLanguage: 'en',
  },
  address: {
  '@type': 'PostalAddress',
  streetAddress: 'Karte Parwan, Street 2', // Replace with your actual street
  addressLocality: 'Kabul',
  addressRegion: 'Kabul',
  postalCode: '1001',
  addressCountry: 'AF',
},

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.png" />
        
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 `}
        suppressHydrationWarning={true}
      >
        <ToastContainer position="top-right" />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}