import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  title: "Shuvium - Align Your Daily Energy",
  description: "Guiding modern seekers to inner peace through AI-personalized Vedic wisdom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cinzel.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Shuvium",
              "operatingSystem": "Web Application, Android, iOS",
              "applicationCategory": "HealthApplication",
              "creator": {
                "@type": "Person",
                "name": "Suvam Gupta"
              },
              "description": "An AI-powered spiritual wellness platform that combines ancient Vedic wisdom with modern AI to provide personalized micro-rituals and sacred routines.",
              "url": "https://shuvium.com",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
      </head>
      <body className="bg-shuvium-blue text-white font-sans antialiased overflow-x-hidden">
        <Header />
        {children}
      </body>
    </html>
  );
}
