import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { FOUNDERS } from "@/data/team/founders";
import {
  ELEVATES_BASE_URL,
  organizationRef,
} from "@/lib/schema/organization";

export const metadata: Metadata = {
  title: "Founders & Founding Team | ELEVATES",
  description:
    "Meet the 18 founding student builders of ELEVATES who started the ecosystem from Eranad Knowledge City, Kerala.",
  alternates: {
    canonical: "/founders",
  },
  openGraph: {
    title: "Founders & Founding Team | ELEVATES",
    description:
      "The 18 student builders behind ELEVATES — born from a closed chapter application into Kerala's community for quiet talent.",
    url: `${ELEVATES_BASE_URL}/founders`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Founders & Founding Team | ELEVATES",
    description:
      "The 18 student builders behind ELEVATES — born from a closed chapter application into Kerala's community for quiet talent.",
  },
};

export default function FoundersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${ELEVATES_BASE_URL}/founders#page`,
    name: "ELEVATES Founders",
    description: "Directory of founding student builders of the ELEVATES community.",
    url: `${ELEVATES_BASE_URL}/founders`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: FOUNDERS.map((f, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Person",
          name: f.name,
          jobTitle: f.role,
          memberOf: organizationRef(),
          url: `${ELEVATES_BASE_URL}/founders/${f.id}`,
          ...(f.linkedin ? { sameAs: f.linkedin } : {}),
        },
      })),
    },
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto selection:bg-flame selection:text-paper">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Founders", path: "/founders" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">Founders</span>
      </nav>

      <header className="mb-14">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg] border border-graphite">
            FOUNDING COHORT // 2025-26
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // 18 QUIET BUILDERS
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-graphite mb-4">
          THE <span className="text-flame">FOUNDERS</span>
        </h1>
        <p className="font-hand text-xl md:text-2xl text-olive max-w-3xl leading-relaxed">
          The 18 students who got tired of waiting for permission, built their own platform, and proved that quiet talent can ship real software.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {FOUNDERS.map((founder) => (
          <Link
            key={founder.id}
            href={`/founders/${founder.id}`}
            className="group block border-3 border-graphite rounded-sm bg-paper p-5 shadow-[5px_5px_0px_0px_rgba(45,45,52,1)] hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(242,100,48,1)] transition-all"
          >
            <div className="relative w-full aspect-square mb-4 border-2 border-graphite overflow-hidden bg-olive/10">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
              <span className="absolute top-2 left-2 bg-graphite text-paper font-mono text-[10px] px-2 py-0.5 rounded-sm uppercase font-bold">
                {founder.tag}
              </span>
            </div>

            <h2 className="text-lg font-black uppercase tracking-tight text-graphite group-hover:text-flame transition-colors">
              {founder.name}
            </h2>
            <p className="font-mono text-xs text-flame font-bold mb-1">{founder.role}</p>
            <p className="text-xs text-olive font-mono line-clamp-2">{founder.proof}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
