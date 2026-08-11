import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Doodle from "@/components/doodle";
import ProjectStatusChip from "@/components/status-chip";
import { FLAGSHIP_PROJECTS, MEMBER_SHOWCASES, ALSO_BUILT_ARCHIVE } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects & Production Proof — Software Built & Shipped | ELEVATES",
  description:
    "Production software built by ELEVATES for real college fests. Handling 400,000+ requests under extreme load with zero downtime. Proof beats certificates.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects & Production Proof — ELEVATES",
    description:
      "Production software built for real college fests with real load. Vibranium Event Platform, Aaroh Arts Platform, RoadUndo Open Data API.",
    url: "https://www.elevates.live/projects",
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "ELEVATES Projects & Production Proof",
    "description":
      "Production software built and shipped by ELEVATES for real college fests and open public utilities.",
    "url": "https://www.elevates.live/projects",
    "hasPart": FLAGSHIP_PROJECTS.map((proj) => ({
      "@type": "SoftwareApplication",
      "name": proj.title,
      "description": proj.summary,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "url": `https://www.elevates.live/projects/${proj.slug}`,
    })),
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto selection:bg-flame selection:text-paper relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">Projects</span>
      </nav>

      {/* ─── BLOCK 1: HERO ─── */}
      <header className="mb-14 relative max-w-4xl">
        <div className="flex flex-wrap items-center gap-3 mb-4 font-mono text-xs font-bold uppercase">
          <span className="bg-flame text-paper px-3 py-1 rounded-sm rotate-[-1deg] border border-graphite shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            ELEVATES // PRODUCTION PROOF
          </span>
          <span className="text-olive tracking-wider">
            // EVIDENCE OVER CLAIMS
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-graphite mb-4 leading-none">
          BUILT AND <span className="text-flame">SHIPPED</span>
        </h1>

        <p className="font-hand text-xl md:text-2xl text-olive max-w-3xl leading-relaxed">
          Software our students wrote for real events, with real deadlines and real users. Not coursework. Not mock projects.
        </p>

        <Doodle
          type="scribble"
          color="#f26430"
          className="hidden md:block absolute right-0 top-4 w-32 h-32 opacity-25 pointer-events-none"
        />
      </header>

      {/* ─── BLOCK 2: STAT STRIP ─── */}
      <section className="mb-16 bg-graphite text-paper rounded-sm border-4 border-graphite p-8 shadow-[8px_8px_0px_0px_rgba(242,100,48,1)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono divide-y md:divide-y-0 md:divide-x divide-paper/20">
          <div className="p-2 md:pr-6">
            <span className="text-flame text-4xl md:text-5xl font-black block mb-1">
              400,000
            </span>
            <span className="text-xs text-paper/80 font-bold uppercase tracking-wider block">
              REQUESTS IN 24 HOURS
            </span>
          </div>

          <div className="pt-4 md:pt-2 md:px-6">
            <span className="text-flame text-4xl md:text-5xl font-black block mb-1">
              5
            </span>
            <span className="text-xs text-paper/80 font-bold uppercase tracking-wider block">
              DAYS TO BUILD IT
            </span>
          </div>

          <div className="pt-4 md:pt-2 md:pl-6">
            <span className="text-flame text-4xl md:text-5xl font-black block mb-1">
              2
            </span>
            <span className="text-xs text-paper/80 font-bold uppercase tracking-wider block">
              PRODUCTION PLATFORMS LIVE FOR COLLEGE FESTS
            </span>
          </div>
        </div>
      </section>

      {/* ─── BLOCK 3: FLAGSHIP PROJECTS ─── */}
      <section className="mb-20" aria-labelledby="flagship-heading">
        <div className="flex flex-wrap items-end justify-between mb-8 border-b-2 border-graphite/20 pb-3 gap-2">
          <div>
            <h2 id="flagship-heading" className="text-2xl md:text-4xl font-black uppercase text-graphite">
              BUILT BY ELEVATES
            </h2>
            <p className="font-mono text-xs text-olive mt-0.5">
              Production software and open data utilities built under real constraints and real load.
            </p>
          </div>
          <span className="font-mono text-xs font-bold text-paper bg-flame px-3 py-1 rounded-sm border border-graphite shrink-0">
            FLAGSHIP CASE STUDIES
          </span>
        </div>

        {/* Stacked full-width cards */}
        <div className="space-y-8">
          {FLAGSHIP_PROJECTS.map((proj, idx) => (
            <article
              key={proj.slug}
              className="bg-paper border-4 border-graphite rounded-sm p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(45,45,52,1)] hover:shadow-[12px_12px_0px_0px_rgba(242,100,48,1)] transition-all group relative overflow-hidden"
            >
              {/* Top tape graphic */}
              <div className="absolute -top-3.5 left-8 w-32 h-6 bg-flame/80 rotate-[-2deg] opacity-90 border border-graphite/30" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono font-bold text-xs text-paper bg-graphite px-2.5 py-0.5 rounded-sm">
                      0{idx + 1}
                    </span>
                    <ProjectStatusChip status={proj.status} />
                    <span className="font-mono text-xs font-bold text-olive uppercase tracking-wider">
                      📍 {proj.client} · {proj.date}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-graphite group-hover:text-flame transition-colors leading-tight">
                    {proj.title}
                  </h3>

                  <p className="font-hand text-lg text-olive leading-relaxed">
                    {proj.tagline}
                  </p>

                  {/* Heavy visual weight metrics */}
                  <div className="flex flex-wrap gap-3 pt-2 font-mono">
                    {proj.metrics.map((m) => (
                      <span
                        key={m.label}
                        className="bg-flame/10 text-flame border border-flame/40 text-xs font-bold px-3 py-1 rounded-sm"
                      >
                        ⚡ {m.value} {m.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <div className="shrink-0 pt-4 lg:pt-0">
                  <Link
                    href={`/projects/${proj.slug}`}
                    className="inline-flex items-center justify-center gap-2 bg-flame text-paper font-mono font-bold text-xs px-6 py-3.5 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] group-hover:translate-y-0.5 group-hover:shadow-none transition-all uppercase"
                  >
                    <span>READ THE BUILD</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── BLOCK 4: MEMBER SHOWCASE ─── */}
      <section className="mb-20" aria-labelledby="showcase-heading">
        <div className="flex flex-wrap items-end justify-between mb-8 border-b-2 border-graphite/20 pb-3 gap-2">
          <div>
            <h2 id="showcase-heading" className="text-2xl md:text-3xl font-black uppercase text-graphite">
              BUILT BY OUR MEMBERS
            </h2>
            <p className="font-mono text-xs text-olive mt-0.5">
              Projects by students in the community. Every single project credited by name.
            </p>
          </div>
          <span className="font-mono text-xs font-bold text-paper bg-graphite px-3 py-1 rounded-sm shrink-0">
            MEMBER SHOWCASE
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {MEMBER_SHOWCASES.map((item) => (
            <article
              key={item.id}
              className="bg-paper p-5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:border-flame hover:shadow-[6px_6px_0px_0px_rgba(242,100,48,1)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] font-bold text-paper bg-olive px-2 py-0.5 rounded-sm">
                    {item.cohort}
                  </span>
                  <div className="flex items-center gap-2">
                    {item.status && <ProjectStatusChip status={item.status} />}
                    {item.repo && (
                      <a
                        href={item.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-flame font-bold hover:underline"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="font-mono font-bold text-lg text-graphite mb-1">
                  {item.title}
                </h3>

                <p className="font-mono text-xs text-olive font-bold mb-3">
                  Builder:{" "}
                  <Link
                    href={`/team#${item.builderId}`}
                    className="text-flame hover:underline"
                  >
                    {item.builder}
                  </Link>
                </p>

                <p className="font-mono text-xs text-graphite/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── BLOCK 5: ALSO BUILT ARCHIVE ─── */}
      <section className="mb-20 border-t-2 border-graphite/20 pt-10" aria-labelledby="archive-heading">
        <div className="flex flex-wrap items-end justify-between mb-6 gap-2">
          <div>
            <h2 id="archive-heading" className="text-xl md:text-2xl font-black uppercase text-graphite">
              ALSO BUILT // TRANSPARENT RECORD
            </h2>
            <p className="font-mono text-xs text-olive mt-0.5 max-w-2xl">
              Projects we started and stopped. Kept here because what did not work is usually more useful than what did.
            </p>
          </div>
          <span className="font-mono text-xs font-bold text-paper bg-olive px-3 py-1 rounded-sm shrink-0">
            HONEST POST-MORTEMS
          </span>
        </div>

        <div className="bg-paper border-2 border-graphite rounded-sm divide-y divide-graphite/20 font-mono text-xs shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
          {ALSO_BUILT_ARCHIVE.map((item) => (
            <div key={item.name} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-flame/5 transition-colors">
              <div className="flex items-center gap-3">
                <span className="font-bold text-graphite text-sm">{item.name}</span>
                <span className="text-olive">{item.year}</span>
                <ProjectStatusChip status={item.status} />
              </div>
              <p className="text-graphite/80 text-xs max-w-xl">{item.reason}</p>
              <div className="shrink-0 flex items-center gap-3">
                {item.slug && (
                  <Link href={`/projects/${item.slug}`} className="text-flame font-bold hover:underline">
                    Read Post-Mortem →
                  </Link>
                )}
                {item.repo && (
                  <a href={item.repo} target="_blank" rel="noopener noreferrer" className="text-olive font-bold hover:underline">
                    Repo ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BLOCK 6: DUAL CTA ─── */}
      <section className="bg-graphite text-paper rounded-sm border-4 border-graphite p-8 md:p-10 shadow-[10px_10px_0px_0px_rgba(242,100,48,1)] relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 divide-y md:divide-y-0 md:divide-x divide-paper/20">
          {/* Client CTA */}
          <div className="space-y-4 pr-0 md:pr-6">
            <span className="font-mono text-xs font-bold text-flame uppercase tracking-widest block">
              FOR FEST ORGANIZERS &amp; COLLEGES
            </span>
            <h3 className="font-mono font-black text-xl md:text-2xl text-paper uppercase leading-tight">
              Running a fest and need a platform?
            </h3>
            <p className="font-mono text-xs md:text-sm text-paper/80 leading-relaxed">
              We have built two. We work fast, handle extreme load, and know what a college fest actually needs because we have run them.
            </p>
            <Link
              href="/#footer"
              className="inline-flex items-center gap-2 bg-flame text-paper font-mono font-bold text-xs px-6 py-3 rounded-sm border-2 border-paper/30 hover:bg-paper hover:text-graphite transition-all uppercase"
            >
              <span>TALK TO US</span>
              <span>↗</span>
            </Link>
          </div>

          {/* Student CTA */}
          <div className="space-y-4 pt-6 md:pt-0 md:pl-8">
            <span className="font-mono text-xs font-bold text-flame uppercase tracking-widest block">
              FOR STUDENTS &amp; BUILDERS
            </span>
            <h3 className="font-mono font-black text-xl md:text-2xl text-paper uppercase leading-tight">
              Want your project here?
            </h3>
            <p className="font-mono text-xs md:text-sm text-paper/80 leading-relaxed">
              Join ELEVATES, ship a platform, and get your work listed here with full name credit and verifiable proof.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-paper text-graphite font-mono font-bold text-xs px-6 py-3 rounded-sm border-2 border-paper/30 hover:bg-flame hover:text-paper transition-all uppercase"
            >
              <span>JOIN ELEVATES</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
