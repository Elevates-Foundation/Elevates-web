import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { fetchChapters } from "@/lib/data/chapters";

export const metadata: Metadata = {
  title: "ELEVATES Chapters | Campus Communities Across Kerala",
  description:
    "Explore active ELEVATES campus chapters across engineering and technology institutions in Kerala. Chapter 01 is live at Eranad Knowledge City, Manjeri.",
  alternates: {
    canonical: "/chapters",
  },
  openGraph: {
    title: "ELEVATES Chapters | Campus Communities Across Kerala",
    description: "Explore active ELEVATES campus chapters. Chapter 01 is live at Eranad Knowledge City.",
    url: "https://www.elevates.live/chapters",
  },
  twitter: {
    card: "summary_large_image",
    title: "ELEVATES Chapters | Campus Communities Across Kerala",
    description: "Explore active ELEVATES campus chapters. Chapter 01 is live at Eranad Knowledge City.",
  },
};

export default async function ChaptersPage() {
  const CHAPTERS = await fetchChapters();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "ELEVATES Campus Network Directory",
    "url": "https://www.elevates.live/chapters",
    "description": "Directory of active ELEVATES campus chapters across colleges in Kerala.",
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto selection:bg-flame selection:text-paper relative overflow-hidden">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Chapters", path: "/chapters" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">Chapters</span>
      </nav>

      {/* Directory Header */}
      <section className="bg-paper border-4 border-graphite rounded-sm p-5 sm:p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] sm:shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] mb-8 sm:mb-12 relative overflow-hidden">
        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-paper bg-graphite px-2.5 sm:px-3 py-1 font-bold rounded-sm">
            CAMPUS DIRECTORY
          </span>
          <span className="font-mono text-[11px] sm:text-xs text-olive font-bold">
            // ACTIVE CHAPTERS
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-graphite mb-3 sm:mb-4 leading-tight">
          ELEVATES CAMPUS CHAPTERS
        </h1>

        <p className="font-mono text-xs sm:text-sm text-graphite/90 leading-relaxed max-w-3xl mb-6">
          Directory of official ELEVATES chapters operating on campus. Explore local campus teams, project portfolios, and event records.
        </p>

        <div className="bg-olive/10 border-l-4 border-olive p-4 rounded-sm font-mono text-xs text-graphite flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <span className="leading-relaxed">
            🎓 Looking to bring ELEVATES to your college or start a new chapter?
          </span>
          <Link
            href="/for-colleges"
            className="bg-flame text-paper font-bold px-4 py-2 rounded-sm border border-graphite hover:bg-graphite transition-colors uppercase text-center shrink-0"
          >
            VIEW COLLEGE &amp; FACULTY GUIDE ↗
          </Link>
        </div>
      </section>

      {/* Active Campus Chapters Directory */}
      <section className="bg-paper border-4 border-graphite rounded-sm p-5 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] sm:shadow-[8px_8px_0px_0px_rgba(45,45,52,1)] mb-8 sm:mb-12">
        <div className="flex items-start sm:items-center justify-between mb-6 border-b-2 border-graphite/20 pb-4 gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-graphite">
              ACTIVE CAMPUS CHAPTERS
            </h2>
            <p className="font-mono text-xs text-olive mt-0.5">Select a chapter to view its student leads, local events, and project portfolio.</p>
          </div>
          <span className="font-mono text-xs font-bold text-paper bg-graphite px-3 py-1 rounded-sm shrink-0">
            {CHAPTERS.length} ACTIVE
          </span>
        </div>

        <div className="space-y-4 font-mono">
          {CHAPTERS.map((ch) => (
            <Link
              key={ch.slug}
              href={`/chapters/${ch.slug}`}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 md:p-6 bg-paper border-2 border-graphite rounded-sm shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] sm:shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:border-flame hover:shadow-[5px_5px_0px_0px_rgba(242,100,48,1)] transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <span className="text-xs font-bold text-paper bg-flame px-3 py-1 rounded-sm border border-graphite shrink-0 self-start sm:self-auto">
                  CHAPTER #{ch.chapterNumber}
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg text-graphite group-hover:text-flame transition-colors leading-snug">
                    {ch.name}
                  </h3>
                  <span className="text-xs text-olive block mt-0.5 leading-normal">{ch.college}</span>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-dashed border-graphite/20 shrink-0">
                <div className="text-left sm:text-right">
                  <span className="text-xs font-bold text-graphite block">
                    Lead: {ch.lead.name}
                  </span>
                  <span className="text-[11px] text-olive block">
                    {ch.stats.studentsImpacted}+ Students • {ch.district}, Kerala
                  </span>
                </div>
                <span className="text-xs sm:text-sm font-bold text-flame group-hover:translate-x-1 transition-transform shrink-0 whitespace-nowrap bg-flame/10 sm:bg-transparent px-2 py-1 sm:p-0 rounded border border-flame/30 sm:border-0">
                  View Chapter ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Institutional Callout Banner */}
      <section className="bg-graphite text-paper border-4 border-graphite p-5 sm:p-8 rounded-sm shadow-[6px_6px_0px_0px_rgba(242,100,48,1)] sm:shadow-[8px_8px_0px_0px_rgba(242,100,48,1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
        <div>
          <span className="font-mono text-xs font-bold text-flame uppercase tracking-widest block mb-1">
            FOR INSTITUTIONAL LEADERS &amp; FACULTY
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-paper leading-tight">
            SHOULD WE BRING ELEVATES TO YOUR CAMPUS?
          </h2>
          <p className="font-mono text-xs text-paper/80 mt-1 max-w-2xl leading-relaxed">
            Explore our complete faculty guide mapping ELEVATES outputs to KTU activity points, NAAC, NBA, and KSUM requirements.
          </p>
        </div>

        <Link
          href="/for-colleges"
          className="bg-flame text-paper font-mono font-bold px-6 sm:px-8 py-3 rounded-sm border-2 border-paper shadow-[3px_3px_0px_0px_rgba(248,255,244,1)] hover:bg-paper hover:text-graphite transition-all uppercase text-xs sm:text-sm text-center shrink-0 w-full sm:w-auto"
        >
          EXPLORE COLLEGE GUIDE ↗
        </Link>
      </section>
    </main>
  );
}
