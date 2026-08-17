import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { fetchPeerLabs } from "@/lib/data/peer-labs";
import Doodle from "@/components/doodle";

export const metadata: Metadata = {
  title: "Peer Labs | ELEVATES Kerala",
  description: "Collaborative multi-session learning series enhancing understanding through peer interaction and hands-on projects across Kerala.",
  alternates: {
    canonical: "/peer-labs",
  },
  openGraph: {
    title: "Peer Labs | ELEVATES Kerala",
    description: "Collaborative multi-session learning series enhancing understanding through peer interaction and hands-on projects across Kerala.",
    url: "https://www.elevates.live/peer-labs",
  },
};

export default async function PeerLabsPage() {
  const PEER_LABS = await fetchPeerLabs();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "ELEVATES Peer Labs & Study Series",
    "description": "Multi-session peer learning cohorts in Kerala.",
    "itemListElement": PEER_LABS.map((lab, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": lab.title,
      "url": `https://www.elevates.live/peer-labs/${lab.slug}`,
    })),
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto selection:bg-flame selection:text-paper relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Section */}
      <div className="mb-14 border-b-4 border-graphite pb-8 relative">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 border border-graphite font-bold rounded-sm rotate-[-1deg]">
            ELEVATES // PEER LABS
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // MULTI-SESSION COHORTS
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-graphite">
          PEER <span className="text-flame">LABS</span>
        </h1>
        <p className="font-hand text-xl md:text-2xl text-olive mt-3 max-w-3xl">
          Multi-week collaborative learning cohorts for quiet & introverted builders to learn, experiment, and ship real projects without gatekeeping.
        </p>

        {/* Tape Graphic */}
        <div className="absolute -top-6 right-10 w-28 h-8 bg-flame/80 rotate-[3deg] opacity-70 hidden md:block" />
        <Doodle
          type="crown"
          color="#f26430"
          className="hidden md:block absolute right-4 top-2 w-20 h-20 rotate-12 opacity-80"
        />
      </div>

      {/* Peer Labs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {PEER_LABS.map((lab, i) => (
          <div
            key={lab.id}
            className="group relative bg-paper text-graphite p-6 flex flex-col justify-between border-4 border-graphite shadow-[8px_8px_0px_0px_rgba(45,45,52,1)] hover:shadow-[12px_12px_0px_0px_rgba(242,100,48,1)] transition-all duration-300 hover:-translate-y-1 rounded-sm"
          >
            {/* Top Tape Graphic on Cards */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-flame/30 rotate-[-1deg] opacity-80" />

            <div>
              {/* Header Meta */}
              <div className="flex justify-between items-center border-b-2 border-dashed border-graphite/20 pb-4 mb-4">
                <span className="font-mono text-xs font-bold text-paper bg-graphite px-2.5 py-1 rounded-sm">
                  COHORT {i + 1}
                </span>
                <span className="font-mono text-xs text-flame font-bold border border-flame px-2 py-0.5 rounded rotate-1">
                  👥 {lab.joinedCount} BUILDERS ENROLLED
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black uppercase text-graphite group-hover:text-flame transition-colors mb-2">
                <Link href={`/peer-labs/${lab.slug}`} className="hover:underline">
                  {lab.title}
                </Link>
              </h2>

              <p className="font-hand text-olive text-base mb-4 line-clamp-2">
                {lab.subtitle}
              </p>

              <p className="font-mono text-xs text-graphite/80 line-clamp-3 mb-6">
                {lab.description}
              </p>
            </div>

            <div className="pt-4 border-t-2 border-dashed border-graphite/20 flex items-center justify-between font-mono text-xs">
              <span className="text-olive font-bold">📍 {lab.campusName}</span>
              <Link
                href={`/peer-labs/${lab.slug}`}
                className="font-mono font-bold text-flame group-hover:translate-x-1 transition-transform flex items-center gap-1"
              >
                OPEN LAB ↗
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
