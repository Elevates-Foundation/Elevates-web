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
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.elevates.live/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.elevates.live/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About ELEVATES",
          "item": "https://www.elevates.live/#about"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Programs & Lineup",
          "item": "https://www.elevates.live/#programs"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Student Workflow",
          "item": "https://www.elevates.live/#workflow"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Domains & Fields",
          "item": "https://www.elevates.live/#domains"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.elevates.live/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is ELEVATES?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ELEVATES is a student-driven community based in Kerala, India, built for skilled but shy or introverted students. We upskill them through real projects and support, and showcase their work so quiet talent no longer stays invisible."
          }
        },
        {
          "@type": "Question",
          "name": "Who can join ELEVATES?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ELEVATES is open to students across all engineering departments and years who demonstrate curiosity, a willingness to learn, and a passion for building shippable projects in a zero-gatekeeping environment."
          }
        },
        {
          "@type": "Question",
          "name": "What programs and workshops does ELEVATES offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ELEVATES hosts hands-on workshops and challenges including Cybersecurity Basics, Spark Electronics, STAP Skill Assessment, DGPS Land Survey, IoT Hands-on, n8n Automations, Build-A-Thons, and Escape Rooms."
          }
        },
        {
          "@type": "Question",
          "name": "How does ELEVATES support introverted and shy students?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ELEVATES provides a supportive cohort environment (max 25 students), pair mentorship, and project-based showcase opportunities to help quiet talent gain confidence, build portfolios, and get seen by industry leaders."
          }
        }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.elevates.live/#programs-list",
      "name": "ELEVATES Programs & Workshops",
      "description": "List of active, completed, and upcoming technical programs by ELEVATES.",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "CYBERSEC BASICS - Workshop" },
        { "@type": "ListItem", "position": 2, "name": "SPARK - Electronics Workshop" },
        { "@type": "ListItem", "position": 3, "name": "STAP - Skill Assessment" },
        { "@type": "ListItem", "position": 4, "name": "DIGITAL MARKETING - Workshop" },
        { "@type": "ListItem", "position": 5, "name": "LAND SURVEY USING DGPS - Workshop" },
        { "@type": "ListItem", "position": 6, "name": "WEBSITE DEVELOPMENT - Industry Workshop" },
        { "@type": "ListItem", "position": 7, "name": "IOT HANDS-ON - Hardware Workshop" },
        { "@type": "ListItem", "position": 8, "name": "AUTOMATIONS - n8n / Make.com Workshop" },
        { "@type": "ListItem", "position": 9, "name": "BUILD-A-THON - Useless Projects Hackathon" },
        { "@type": "ListItem", "position": 10, "name": "ESCAPE ROOM - Cybersecurity Challenge" }
      ]
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
