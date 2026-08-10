import type { Metadata } from "next";
import { Inter, Kalam, VT323 } from "next/font/google"; // Switched back to Inter
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import CustomCursor from "@/components/custom-cursor";
import Navbar from "@/components/navbar";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const kalam = Kalam({
  variable: "--font-kalam",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const vt323 = VT323({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "ELEVATES | Upskilling & Showcasing Skilled but Shy Students",
  description: "ELEVATES is a student community that finds skilled but shy or introverted students, upskills them through real projects and support, and showcases their work so they don't stay invisible.",
  keywords: [
    "ELEVATES",
    "skilled but shy students",
    "introverted tech students",
    "upskilling students",
    "showcasing student work",
    "student tech community",
    "making quiet talent visible",
    "student projects",
    "Kerala student tech community",
    "learn build grow"
  ],
  authors: [{ name: "ELEVATES Community" }],
  creator: "ELEVATES",
  publisher: "ELEVATES",
  metadataBase: new URL("https://www.elevates.live"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ELEVATES | Upskilling & Showcasing Skilled but Shy Students",
    description: "ELEVATES is a student community that finds skilled but shy or introverted students, upskills them through real projects and support, and showcases their work so they don't stay invisible.",
    url: "https://www.elevates.live",
    siteName: "ELEVATES",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ELEVATES | Upskilling & Showcasing Skilled but Shy Students",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELEVATES | Upskilling & Showcasing Skilled but Shy Students",
    description: "ELEVATES is a student community that finds skilled but shy or introverted students, upskills them through real projects and support, and showcases their work so they don't stay invisible.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "i_BW26dbbjET7TSb8s3Ho-AvuMiXFS1Mw6ARaSYFNo0",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "EducationalOrganization"],
      "@id": "https://www.elevates.live/#organization",
      "name": "ELEVATES",
      "alternateName": ["ELEVATES Community", "ELEVATES Student Tech Community"],
      "url": "https://www.elevates.live",
      "logo": "https://www.elevates.live/favicon-32x32.png",
      "image": "https://www.elevates.live/og-image.png",
      "description": "ELEVATES is a student-driven community based in Kerala, India, that finds skilled but shy or introverted students, upskills them through real projects and support, and showcases their work so they no longer stay invisible.",
      "slogan": "Upskilling and showcasing skilled but shy students.",
      "foundingDate": "2025",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Kerala, India"
      },
      "knowsAbout": [
        "Software Engineering",
        "Web Development",
        "Cybersecurity",
        "IoT & Hardware Robotics",
        "AI & Machine Learning",
        "Open Source Collaboration",
        "UI/UX Product Design"
      ],
      "sameAs": [
        "https://www.instagram.com/elevates.club/",
        "https://www.linkedin.com/company/elevates-in",
        "https://github.com/Elevates-Foundation"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.elevates.live/#website",
      "url": "https://www.elevates.live",
      "name": "ELEVATES | Upskilling & Showcasing Skilled but Shy Students",
      "description": "Official website of ELEVATES - Helping skilled but introverted students get seen and ship real projects.",
      "publisher": { "@id": "https://www.elevates.live/#organization" },
      "inLanguage": "en-US"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${kalam.variable} ${vt323.variable} antialiased cursor-none`}
      >
        <CustomCursor />
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
