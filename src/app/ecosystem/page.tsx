import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ELEVATES_BASE_URL, organizationRef } from "@/lib/schema/organization";
import Doodle from "@/components/doodle";

export const metadata: Metadata = {
  title: "ELEVATES Ecosystem Architecture | 4-Tier Innovation Model",
  description:
    "How ELEVATES connects Chapters, Colleges, Specialized Clusters, and Quiet Builders into a unified production network across Kerala.",
  alternates: {
    canonical: "/ecosystem",
  },
  openGraph: {
    title: "ELEVATES Ecosystem Architecture | 4-Tier Innovation Model",
    description:
      "A deep dive into the 4 structural layers of ELEVATES: Chapters, Campuses, Domain Clusters, and Individual Builders.",
    url: `${ELEVATES_BASE_URL}/ecosystem`,
  },
  twitter: {
    card: "summary_large_image",
    title: "ELEVATES Ecosystem Architecture | 4-Tier Innovation Model",
    description:
      "A deep dive into the 4 structural layers of ELEVATES: Chapters, Campuses, Domain Clusters, and Individual Builders.",
  },
};

export default function EcosystemPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${ELEVATES_BASE_URL}/ecosystem#page`,
    name: "ELEVATES Ecosystem Architecture",
    description:
      "Detailed architectural breakdown of the 4 structural layers of ELEVATES.",
    url: `${ELEVATES_BASE_URL}/ecosystem`,
    publisher: organizationRef(),
  };

  const layers = [
    {
      level: "LAYER 01",
      title: "Campus Chapters",
      role: "Physical Ground Station",
      desc: "Autonomously led student bodies embedded directly inside engineering and arts colleges across Kerala. Chapters coordinate physical meetups, lab sessions, and local hackathons.",
      href: "/chapters",
      linkText: "View Chapters",
    },
    {
      level: "LAYER 02",
      title: "Institutional Campuses",
      role: "College Infrastructure Partner",
      desc: "Colleges providing lab hardware, auditorium spaces, and institutional support. In turn, ELEVATES runs industry workshops, hands-on faculty partnerships, and student-built production platforms.",
      href: "/for-colleges",
      linkText: "Campus Partnerships",
    },
    {
      level: "LAYER 03",
      title: "Learning & Build Clusters",
      role: "Domain-Specific Engineering Pods",
      desc: "Specialized, cross-college technical clusters spanning Web Systems, Cyber Defense, IoT Hardware, and Creative Design. Small 4-8 student squads building software together.",
      href: "/clusters",
      linkText: "Explore Clusters",
    },
    {
      level: "LAYER 04",
      title: "Quiet Builders & Members",
      role: "The Individual Engineer",
      desc: "The core beneficiary. Students who code quietly without raising hands, given live production challenges, git workflows, and direct recruiter visibility.",
      href: "/team",
      linkText: "Meet the Team",
    },
  ];

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto selection:bg-flame selection:text-paper">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Ecosystem", path: "/ecosystem" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">Ecosystem</span>
      </nav>

      <header className="mb-14 border-b-4 border-graphite pb-8 relative">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg] border border-graphite">
            ARCHITECTURE // 4-TIER MODEL
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-graphite mb-4 leading-none">
          THE ELEVATES <span className="text-flame">ECOSYSTEM</span>
        </h1>
        <p className="font-hand text-xl md:text-2xl text-olive max-w-3xl leading-relaxed">
          How our 4 structural layers connect quiet student talent to production software and verified industry visibility.
        </p>

        <Doodle
          type="crown"
          color="#f26430"
          className="hidden md:block absolute right-4 top-2 w-20 h-20 opacity-20 pointer-events-none"
        />
      </header>

      {/* 4 Layers Timeline / Stack */}
      <div className="space-y-8 mb-16">
        {layers.map((layer, idx) => (
          <section
            key={layer.level}
            className="border-4 border-graphite rounded-sm bg-paper p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] hover:shadow-[10px_10px_0px_0px_rgba(242,100,48,1)] transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-2 border-graphite/20 pb-4 mb-4">
              <div>
                <span className="font-mono text-xs font-bold text-flame block mb-1">
                  {layer.level} // {layer.role}
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase text-graphite">
                  {layer.title}
                </h2>
              </div>
              <Link
                href={layer.href}
                className="self-start md:self-auto bg-graphite text-paper font-mono text-xs font-bold uppercase px-4 py-2 rounded-sm border-2 border-graphite hover:bg-flame transition-all"
              >
                {layer.linkText} ↗
              </Link>
            </div>
            <p className="font-mono text-sm sm:text-base text-graphite/85 leading-relaxed max-w-4xl">
              {layer.desc}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
