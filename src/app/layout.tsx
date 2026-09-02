import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Kalam, VT323 } from "next/font/google"; // Switched back to Inter
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import CustomCursor from "@/components/custom-cursor";
import Navbar from "@/components/navbar";
import { OrganizationJsonLd } from "@/components/seo/organization-jsonld";
import {
  ELEVATES_CANONICAL_DEFINITION,
  ELEVATES_SHORT_DESCRIPTION,
} from "@/lib/schema/organization";

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
  title: {
    default: "ELEVATES | Student Innovation & Technology Community in Kerala",
    template: "%s | ELEVATES",
  },
  description: ELEVATES_CANONICAL_DEFINITION,
  keywords: [
    "ELEVATES",
    "student tech community kerala",
    "tech community for college students kerala",
    "student innovation ecosystem kerala",
    "student community manjeri",
    "student community malappuram",
    "project based learning community kerala",
    "introverted tech students",
    "skilled but shy students",
    "upskilling students kerala",
    "student projects kerala",
    "learn build grow",
  ],
  authors: [{ name: "ELEVATES Community" }],
  creator: "ELEVATES",
  publisher: "ELEVATES",
  metadataBase: new URL("https://www.elevates.live"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ELEVATES | Student Innovation & Technology Community in Kerala",
    description: ELEVATES_SHORT_DESCRIPTION,
    url: "https://www.elevates.live",
    siteName: "ELEVATES",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ELEVATES: Student Innovation & Technology Community in Kerala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELEVATES | Student Innovation & Technology Community in Kerala",
    description: ELEVATES_SHORT_DESCRIPTION,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <OrganizationJsonLd />
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7J7QQSR9ZZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-7J7QQSR9ZZ');
          `}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "y0d06obyfo");
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${kalam.variable} ${vt323.variable} antialiased cursor-none`}
        suppressHydrationWarning
      >
        <CustomCursor />
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
