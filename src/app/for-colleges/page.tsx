import React from "react";
import { Metadata } from "next";
import offersData from "@/data/for-colleges/offers.json";
import benefitsData from "@/data/for-colleges/benefits.json";
import faqsData from "@/data/for-colleges/faqs.json";
import timelineData from "@/data/for-colleges/first-90-days.json";
import universityLookupsData from "@/data/for-colleges/university-lookups.json";
import ForCollegesClient from "@/app/for-colleges/client";

export const metadata: Metadata = {
  title: "Bring ELEVATES to Your College — Chapter Partnerships in Kerala | ELEVATES",
  description:
    "Project-based programmes, event operations and documented student activity — mapped to NAAC and to your own university's requirements. Any college in Kerala. No fee.",
  alternates: {
    canonical: "/for-colleges",
  },
  openGraph: {
    title: "Bring ELEVATES to Your College | College & Faculty Guide",
    description:
      "Project-based programmes, event operations and documented student activity — mapped to NAAC and to your own university's requirements. No fee.",
    url: "https://www.elevates.live/for-colleges",
  },
};

export default function ForCollegesPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "ELEVATES Campus Chapter Partnership & Event Operations",
      "provider": {
        "@type": "Organization",
        "name": "ELEVATES Foundation",
        "url": "https://www.elevates.live",
      },
      "areaServed": {
        "@type": "State",
        "name": "Kerala",
      },
      "audience": {
        "@type": "EducationalAudience",
        "educationalRole": "College Principal, HOD, Faculty Coordinator, IEDC Nodal Officer",
      },
      "description":
        "On-campus student tech programming, learning clusters, event operations, and documented accreditation proof for KTU, NAAC, NBA, Calicut, MG, Kerala, Kannur, and Autonomous colleges.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Institutional Partnership Options",
        "itemListElement": offersData.map((offer, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": offer.title,
            "description": offer.desc,
          },
          "price": "0",
          "priceCurrency": "INR",
          "position": index + 1,
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqsData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.elevates.live",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "For Colleges",
          "item": "https://www.elevates.live/for-colleges",
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ForCollegesClient
        offers={offersData}
        benefits={benefitsData}
        faqs={faqsData}
        timeline={timelineData}
        universityLookups={universityLookupsData}
      />
    </>
  );
}
