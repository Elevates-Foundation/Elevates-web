import React from "react";
import { Metadata } from "next";
import { FOUNDERS } from "@/data/team/founders";
import { ADVISORS } from "@/data/team/advisors";
import TeamClient from "./client";

export const metadata: Metadata = {
  title: "Meet the Team | ELEVATES Kerala",
  description:
    "Meet the 18 founders and faculty advisors behind ELEVATES Kerala.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Meet the Team | ELEVATES Kerala",
    description: "The 18 founding members and faculty behind ELEVATES Kerala.",
    url: "https://www.elevates.live/team",
  },
};

export default function TeamPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ELEVATES Foundation",
    "url": "https://www.elevates.live",
    "foundingDate": "2025-09-02",
    "member": FOUNDERS.map((f) => ({
      "@type": "Person",
      "name": f.name,
      "jobTitle": f.tag,
      "image": `https://www.elevates.live${f.image}`,
      ...(f.linkedin ? { "sameAs": [f.linkedin] } : {}),
    })),
    "employee": ADVISORS.map((f) => ({
      "@type": "Person",
      "name": f.name,
      "jobTitle": `${f.role}, ${f.department}`,
      "image": `https://www.elevates.live${f.image}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TeamClient founders={FOUNDERS} advisors={ADVISORS} />
    </>
  );
}
