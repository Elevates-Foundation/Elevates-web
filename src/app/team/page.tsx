import React from "react";
import { Metadata } from "next";
import { fetchTeam } from "@/lib/data/team";
import TeamClient from "./client";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ELEVATES_BASE_URL, organizationRef } from "@/lib/schema/organization";

export const metadata: Metadata = {
  title: "Meet the Team | ELEVATES",
  description:
    "Meet the 18 founding student builders and faculty advisors behind ELEVATES in Kerala.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Meet the Team | ELEVATES",
    description: "The 18 founding student builders and faculty advisors behind ELEVATES.",
    url: `${ELEVATES_BASE_URL}/team`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Meet the Team | ELEVATES",
    description: "The 18 founding student builders and faculty advisors behind ELEVATES.",
  },
};

export default async function TeamPage() {
  const { founders, advisors } = await fetchTeam();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${ELEVATES_BASE_URL}/team#page`,
    name: "ELEVATES Team & Founders",
    description: "Founding members and faculty advisors of the ELEVATES community.",
    url: `${ELEVATES_BASE_URL}/team`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        ...founders.map((f, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Person",
            "@id": `${ELEVATES_BASE_URL}/founders/${f.id}`,
            name: f.name,
            jobTitle: f.role,
            description: `${f.role} at ELEVATES. Specialization: ${f.specialization ?? f.proof}. Campus moniker: "${f.tag}".`,
            memberOf: organizationRef(),
            image: f.image.startsWith("http") ? f.image : `${ELEVATES_BASE_URL}${f.image}`,
            ...(f.linkedin ? { sameAs: f.linkedin } : {}),
          },
        })),
        ...advisors.map((adv, i) => ({
          "@type": "ListItem",
          position: founders.length + i + 1,
          item: {
            "@type": "Person",
            name: adv.name,
            jobTitle: `${adv.role}, ${adv.department}`,
            worksFor: organizationRef(),
            image: adv.image.startsWith("http") ? adv.image : `${ELEVATES_BASE_URL}${adv.image}`,
          },
        })),
      ],
    },
  };

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Team", path: "/team" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TeamClient founders={founders} advisors={advisors} />
    </>
  );
}

