import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Doodle from "@/components/doodle";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import {
  ELEVATES_CANONICAL_DEFINITION,
  ELEVATES_BASE_URL,
  organizationRef,
} from "@/lib/schema/organization";

export const metadata: Metadata = {
  title: "What is ELEVATES? | Student Innovation Ecosystem in Kerala",
  description:
    "Direct answer: What is ELEVATES? ELEVATES is a student-led innovation ecosystem in Kerala, India, finding skilled but quiet students, providing real projects, and showcasing their work.",
  alternates: {
    canonical: "/what-is-elevates",
  },
  openGraph: {
    title: "What is ELEVATES? | Student Innovation Ecosystem in Kerala",
    description:
      "Direct answer: What is ELEVATES? A student-led innovation ecosystem in Kerala that finds skilled but overlooked students and upskills them with real production projects.",
    url: `${ELEVATES_BASE_URL}/what-is-elevates`,
  },
  twitter: {
    card: "summary_large_image",
    title: "What is ELEVATES? | Student Innovation Ecosystem in Kerala",
    description:
      "Direct answer: What is ELEVATES? A student-led innovation ecosystem in Kerala that finds skilled but overlooked students and upskills them with real production projects.",
  },
};

export default function WhatIsElevatesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${ELEVATES_BASE_URL}/what-is-elevates#webpage`,
    url: `${ELEVATES_BASE_URL}/what-is-elevates`,
    name: "What is ELEVATES?",
    description: ELEVATES_CANONICAL_DEFINITION,
    isPartOf: { "@id": `${ELEVATES_BASE_URL}/#website` },
    about: organizationRef(),
    mainEntity: {
      "@type": "Question",
      name: "What is ELEVATES?",
      acceptedAnswer: {
        "@type": "Answer",
        text: ELEVATES_CANONICAL_DEFINITION,
      },
    },
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-5xl mx-auto selection:bg-flame selection:text-paper">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "What is ELEVATES?", path: "/what-is-elevates" },
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
        <span className="text-graphite font-bold">What is ELEVATES?</span>
      </nav>

      {/* Hero / Definition Section */}
      <header className="mb-14 relative">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest bg-flame text-paper px-3 py-1 rounded-sm rotate-[-1deg] border border-graphite">
            ENTITY DEFINITION // DIRECT ANSWER
          </span>
          <span className="font-mono text-xs text-olive font-bold hidden sm:inline">
            // CANONICAL REFERENCE
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-graphite leading-[1.08] mb-6">
          WHAT IS <span className="text-flame">ELEVATES?</span>
        </h1>

        {/* The Canonical Definition Block */}
        <div className="bg-paper border-4 border-graphite p-6 md:p-8 rounded-sm shadow-[8px_8px_0px_0px_rgba(45,45,52,1)] relative mb-8">
          <div className="absolute -top-3.5 left-6 w-24 h-6 bg-flame/80 rotate-[-2deg] border border-graphite/30" />
          <p className="font-mono text-xs uppercase tracking-widest text-olive mb-2 font-bold">
            The Canonical Definition
          </p>
          <p className="text-lg md:text-2xl font-bold text-graphite leading-relaxed">
            {ELEVATES_CANONICAL_DEFINITION}
          </p>
        </div>
      </header>

      {/* The 800 Students Problem */}
      <section className="mb-16 border-b-2 border-graphite/20 pb-12">
        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-4 flex items-center gap-3">
          <span>What Happens to the 800 Students?</span>
          <Doodle type="star" color="#f26430" className="w-6 h-6 inline-block" />
        </h2>
        <div className="space-y-4 text-base md:text-lg text-graphite/90 leading-relaxed font-sans">
          <p>
            In a typical campus of 1,000 engineering students, roughly 200 run the fests, talk on stage, and lead existing clubs. They already have visibility.
          </p>
          <p>
            <strong>What about the remaining 800?</strong> Many of them are building quiet side projects at 2 AM, debugging scripts in their dorms, or simply uncomfortable walking into a crowded room of strangers. They are not less capable. Often, the sharpest engineer in the batch is the quietest person in the room.
          </p>
          <p>
            ELEVATES is not here to replace existing college clubs. We act as an open support layer around them. We seek out the builders who do not raise their hands, hand them live project challenges, and make sure their work gets shipped and credited.
          </p>
        </div>
      </section>

      {/* How ELEVATES is Structured */}
      <section className="mb-16 border-b-2 border-graphite/20 pb-12">
        <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-6">
          How ELEVATES is Structured
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-3 border-graphite p-6 rounded-sm bg-paper shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
            <span className="font-mono text-xs font-bold text-flame block mb-1">01 // CAMPUS CHAPTERS</span>
            <h3 className="text-xl font-black uppercase mb-2">Autonomous College Hubs</h3>
            <p className="text-sm text-olive leading-relaxed">
              Decentralized student chapters in colleges across Kerala (e.g., Chapter 01 at Eranad Knowledge City, Manjeri).
            </p>
            <Link href="/chapters" className="inline-block mt-3 font-mono text-xs font-bold text-graphite underline hover:text-flame">
              Explore Chapters ↗
            </Link>
          </div>

          <div className="border-3 border-graphite p-6 rounded-sm bg-paper shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
            <span className="font-mono text-xs font-bold text-flame block mb-1">02 // CLUSTER ENGINE</span>
            <h3 className="text-xl font-black uppercase mb-2">Specialized Domain Groups</h3>
            <p className="text-sm text-olive leading-relaxed">
              Focused project clusters across Full-Stack Web Systems, Cybersec Defense, AI/ML, Hardware/Robotics, UI/UX, and Cloud/DevOps.
            </p>
            <Link href="/clusters" className="inline-block mt-3 font-mono text-xs font-bold text-graphite underline hover:text-flame">
              Explore Clusters ↗
            </Link>
          </div>

          <div className="border-3 border-graphite p-6 rounded-sm bg-paper shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
            <span className="font-mono text-xs font-bold text-flame block mb-1">03 // PRODUCTION PLATFORMS</span>
            <h3 className="text-xl font-black uppercase mb-2">Production Proof Over Certificates</h3>
            <p className="text-sm text-olive leading-relaxed">
              Students build production software deployed under live load (such as the Vibranium Event Platform handling 400,000+ requests).
            </p>
            <Link href="/projects" className="inline-block mt-3 font-mono text-xs font-bold text-graphite underline hover:text-flame">
              View Production Proof ↗
            </Link>
          </div>

          <div className="border-3 border-graphite p-6 rounded-sm bg-paper shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
            <span className="font-mono text-xs font-bold text-flame block mb-1">04 // HANDS-ON WORKSHOPS</span>
            <h3 className="text-xl font-black uppercase mb-2">Zero-Gatekeeping Events</h3>
            <p className="text-sm text-olive leading-relaxed">
              Interactive sessions, CTF escape rooms, peer labs, and practical code jams without attendance barriers.
            </p>
            <Link href="/events" className="inline-block mt-3 font-mono text-xs font-bold text-graphite underline hover:text-flame">
              Browse Events ↗
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Facts Table */}
      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight mb-4">
          Quick Entity Facts
        </h2>
        <div className="overflow-x-auto border-4 border-graphite shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] rounded-sm">
          <table className="w-full text-left font-mono text-sm">
            <tbody>
              <tr className="border-b border-graphite/20 bg-paper">
                <td className="p-3 font-bold text-olive w-1/3">Entity Name</td>
                <td className="p-3 font-bold text-graphite">ELEVATES Foundation</td>
              </tr>
              <tr className="border-b border-graphite/20 bg-paper/60">
                <td className="p-3 font-bold text-olive">Founded</td>
                <td className="p-3 text-graphite">September 2025 in Kerala, India</td>
              </tr>
              <tr className="border-b border-graphite/20 bg-paper">
                <td className="p-3 font-bold text-olive">Origin Campus</td>
                <td className="p-3 text-graphite">Eranad Knowledge City (EKC), Manjeri</td>
              </tr>
              <tr className="border-b border-graphite/20 bg-paper/60">
                <td className="p-3 font-bold text-olive">Type</td>
                <td className="p-3 text-graphite">Student-Led Innovation Ecosystem &amp; Tech Community</td>
              </tr>
              <tr className="border-b border-graphite/20 bg-paper">
                <td className="p-3 font-bold text-olive">Core Motto</td>
                <td className="p-3 text-graphite font-bold text-flame">Learn. Build. Grow.</td>
              </tr>
              <tr className="bg-paper/60">
                <td className="p-3 font-bold text-olive">Target Demographic</td>
                <td className="p-3 text-graphite">Skilled but quiet, introverted, or overlooked student builders in Kerala</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
