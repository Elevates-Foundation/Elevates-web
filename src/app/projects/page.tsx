import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Doodle from "@/components/doodle";
import { FLAGSHIP_PROJECTS, MEMBER_SHOWCASES } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Software Built by Students in Kerala | ELEVATES",
  description:
    "Event platforms and software tools built by ELEVATES students for real college fests in Kerala. Real clients, real deadlines, real load. Every project credited by name.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Software Built by Students in Kerala | ELEVATES",
    description:
      "Production platforms built by ELEVATES students. 400,000 requests handled, zero downtime, real impact.",
    url: "https://www.elevates.live/projects",
  },
};

export default function ProjectsIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "ELEVATES Student Projects & Case Studies",
    "url": "https://www.elevates.live/projects",
    "description": "Production event platforms and member projects built by ELEVATES students in Kerala.",
    "publisher": {
      "@type": "Organization",
      "name": "ELEVATES Foundation",
      "url": "https://www.elevates.live",
    },
    "hasPart": FLAGSHIP_PROJECTS.map((p) => ({
      "@type": "SoftwareApplication",
      "name": p.title,
      "url": `https://www.elevates.live/projects/${p.slug}`,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
    })),
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto selection:bg-flame selection:text-paper relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-10 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">Projects</span>
      </nav>

      {/* ─── BLOCK 1: HERO ─── */}
      <header className="mb-12 max-w-4xl relative">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest bg-flame text-paper px-3 py-1 rounded-sm rotate-[-1deg] border border-graphite">
            ELEVATES // PRODUCTION PROOF
          </span>
          <span className="font-mono text-xs text-olive font-bold hidden sm:inline">
            // EVIDENCE OVER CLAIMS
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-graphite mb-5 leading-none">
          BUILT AND <span className="text-flame">SHIPPED</span>
        </h1>

        <p className="font-hand text-xl md:text-2xl text-olive max-w-3xl leading-relaxed">
          Software our students wrote for real events, with real deadlines and real users. Not coursework. Not mock projects.
        </p>

        <Doodle
          type="scribble"
          color="#f26430"
          className="hidden md:block absolute right-0 top-2 w-28 h-28 rotate-12 opacity-30 pointer-events-none"
        />
      </header>

      {/* ─── BLOCK 2: STAT STRIP (STATIC) ─── */}
      <section className="mb-16 bg-graphite text-paper rounded-sm border-4 border-graphite p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(242,100,48,1)]" aria-label="Project Statistics">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-paper/20">
          <div className="pt-2 md:pt-0">
            <span className="text-flame text-4xl sm:text-5xl font-black block leading-none mb-1">
              400,000
            </span>
            <span className="text-xs uppercase tracking-wider text-paper/80 font-bold">
              requests in 24 hours
            </span>
          </div>

          <div className="pt-6 md:pt-0 md:pl-8">
            <span className="text-flame text-4xl sm:text-5xl font-black block leading-none mb-1">
              5
            </span>
            <span className="text-xs uppercase tracking-wider text-paper/80 font-bold">
              days to build it
            </span>
          </div>

          <div className="pt-6 md:pt-0 md:pl-8">
            <span className="text-flame text-4xl sm:text-5xl font-black block leading-none mb-1">
              2
            </span>
            <span className="text-xs uppercase tracking-wider text-paper/80 font-bold">
              production platforms live for college fests
            </span>
          </div>
        </div>
      </section>

      {/* ─── BLOCK 3: FLAGSHIP CASE STUDIES ─── */}
      <section className="mb-16" aria-labelledby="flagship-heading">
        <div className="flex flex-wrap items-end justify-between mb-8 border-b-2 border-graphite/20 pb-3 gap-2">
          <div>
            <h2 id="flagship-heading" className="text-2xl md:text-3xl font-black uppercase text-graphite">
              BUILT BY ELEVATES
            </h2>
            <p className="font-mono text-xs text-olive mt-0.5">
              Production software built for real clients under real deadlines.
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
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-bold text-xs text-paper bg-graphite px-2.5 py-0.5 rounded-sm">
                      0{idx + 1}
                    </span>
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
      <section className="mb-16" aria-labelledby="showcase-heading">
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

      {/* ─── BLOCK 5: DUAL CTA ─── */}
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
              Build real shippable software with peer mentorship. Your name, your work, published and credited forever.
            </p>
            <Link
              href="/chapters"
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
