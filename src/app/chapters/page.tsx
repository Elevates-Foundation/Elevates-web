import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Doodle from "@/components/doodle";
import { CHAPTERS } from "@/data/chapters";

export const metadata: Metadata = {
  title: "Campus Chapters | ELEVATES Kerala",
  description:
    "Chapter 01 is live at Eranad Knowledge City. Bring ELEVATES to your campus and build Kerala's next student tech chapter.",
  alternates: {
    canonical: "/chapters",
  },
  openGraph: {
    title: "Campus Chapters | ELEVATES Kerala",
    description: "Chapter 01 is live at Eranad Knowledge City. Yours could be 02.",
    url: "https://www.elevates.live/chapters",
  },
};

const CHAPTER_PERKS = [
  "Brand Identity & Design Assets",
  "Operations Playbook & Recruitment System",
  "The Cluster Framework & Project Templates",
  "Event Templates & Registration Systems",
  "Speaker & Industry Mentor Network",
  "Technical Support & Web Infrastructure",
  "Social Media & Documentation Support",
  "State-wide Innovation Network Access",
];

export default function ChaptersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "ELEVATES Campus Network",
    "url": "https://www.elevates.live/chapters",
    "description": "Student innovation network expanding across campuses in Kerala.",
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto selection:bg-flame selection:text-paper relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">Chapters</span>
      </nav>

      {/* Hero Pitch Deck Header */}
      <section className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-14 shadow-[12px_12px_0px_0px_rgba(45,45,52,1)] mb-14 relative overflow-hidden">
        <div className="absolute -top-4 left-10 w-36 h-8 bg-flame/80 rotate-[-2deg] opacity-90 border border-graphite/30" />

        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg]">
            ELEVATES // CHAPTER EXPANSION
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // CAMPUS DIRECTORY
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-graphite mb-6">
          CHAPTER 01 IS LIVE.<br />
          <span className="text-flame">YOURS COULD BE 02.</span>
        </h1>

        <p className="font-hand text-2xl md:text-3xl text-olive mb-6 max-w-4xl leading-relaxed">
          Chapter 01 is live at Eranad Knowledge City, Manjeri. Yours could be 02.
        </p>

        <p className="font-mono text-sm md:text-base text-graphite/90 leading-relaxed max-w-3xl mb-8">
          Every campus has hidden talent — students who have skills but lack confidence, build quietly, or want to learn but don't know where to start. Elevates brings the complete framework to discover, nurture, and showcase student talent.
        </p>

        <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t-2 border-dashed border-graphite/20">
          <span className="font-mono text-xs font-bold text-olive bg-olive/10 px-4 py-2 rounded-sm">
            Proven at Eranad Knowledge City: 17 Events • 400k+ Platform Requests
          </span>

          <Link
            href="/#footer"
            className="bg-flame text-paper font-mono font-bold px-8 py-3.5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase text-sm"
          >
            START A CHAPTER ON YOUR CAMPUS ↗
          </Link>
        </div>

        <Doodle
          type="crown"
          color="#f26430"
          className="hidden md:block absolute right-8 top-8 w-28 h-28 rotate-12 opacity-30 pointer-events-none"
        />
      </section>

      {/* Chapter Directory Section (Names only as links, no heavy cards) */}
      <section className="mb-16 bg-paper border-4 border-graphite rounded-sm p-8 md:p-10 shadow-[8px_8px_0px_0px_rgba(45,45,52,1)]">
        <div className="flex items-center justify-between mb-6 border-b-2 border-graphite/20 pb-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-graphite">
              ACTIVE CAMPUS CHAPTERS
            </h2>
            <p className="font-mono text-xs text-olive">Click any chapter to view their campus team, local events, and projects.</p>
          </div>
          <span className="font-mono text-xs font-bold text-paper bg-graphite px-3 py-1 rounded-sm">
            DIRECTORY
          </span>
        </div>

        <div className="space-y-3 font-mono">
          {CHAPTERS.map((ch) => (
            <Link
              key={ch.slug}
              href={`/chapters/${ch.slug}`}
              className="flex items-center justify-between p-4 bg-paper border-2 border-graphite rounded-sm shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:border-flame hover:shadow-[5px_5px_0px_0px_rgba(242,100,48,1)] transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-paper bg-flame px-2.5 py-1 rounded-sm border border-graphite">
                  CHAPTER #{ch.chapterNumber}
                </span>
                <div>
                  <h3 className="font-bold text-base text-graphite group-hover:text-flame transition-colors">
                    {ch.name}
                  </h3>
                  <span className="text-xs text-olive block">{ch.college}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xs font-bold text-graphite hidden md:inline">
                  Lead: {ch.lead.name}
                </span>
                <span className="text-sm font-bold text-flame group-hover:translate-x-1 transition-transform">
                  View Chapter ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Open Community Policy */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div className="bg-paper p-8 border-4 border-graphite rounded-sm shadow-[8px_8px_0px_0px_rgba(45,45,52,1)]">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-2">OPEN COMMUNITY MODEL</span>
          <h2 className="text-3xl font-black uppercase text-graphite mb-4">
            NO MEMBERSHIP FEES. NO RESTRICTIONS.
          </h2>
          <p className="font-mono text-xs text-graphite/90 leading-relaxed mb-6">
            Everyone on campus is automatically an Elevates member. Innovation belongs to everyone.
          </p>

          <div className="space-y-2 font-mono text-xs font-bold text-graphite">
            <div className="flex items-center gap-2">
              <span className="text-flame font-bold">✓</span>
              <span>Join anytime without department restrictions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-flame font-bold">✓</span>
              <span>No year restrictions &amp; no prior experience required</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-flame font-bold">✓</span>
              <span>Interdisciplinary innovation: CS, AI, Civil, IoT, Design, Marketing</span>
            </div>
          </div>
        </div>

        <div className="bg-graphite text-paper p-8 border-4 border-graphite rounded-sm shadow-[8px_8px_0px_0px_rgba(242,100,48,1)] flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-2">INTERDISCIPLINARY FOCUS</span>
            <h2 className="text-3xl font-black uppercase text-paper mb-4">
              TECHNOLOGY HAS NO DEPARTMENT
            </h2>
            <p className="font-mono text-xs text-paper/80 leading-relaxed">
              Elevates is not just for Computer Science. We build technology solutions across Civil Engineering, Automation, Hardware IoT, UI/UX, and Marketing.
            </p>
          </div>

          <div className="pt-6 border-t border-paper/20 flex flex-wrap gap-2 font-mono text-[11px]">
            {["AI", "Web Dev", "Civil Tech", "IoT", "Branding", "UI/UX", "Automation"].map((t, i) => (
              <span key={i} className="bg-paper/10 border border-paper/30 text-paper px-2.5 py-1 rounded">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What Every Chapter Receives */}
      <section className="bg-paper border-4 border-graphite p-8 md:p-12 rounded-sm shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] mb-16">
        <h2 className="text-3xl md:text-5xl font-black uppercase text-graphite mb-2">
          WHAT EVERY CHAPTER RECEIVES FROM HQ
        </h2>
        <p className="font-mono text-sm text-olive mb-8">
          HQ provides the full operational machinery so student leads focus 100% on building.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CHAPTER_PERKS.map((perk, i) => (
            <div key={i} className="bg-paper p-4 border-2 border-graphite rounded-sm shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] flex items-start gap-3">
              <span className="font-mono font-bold text-flame text-sm shrink-0">
                0{i + 1}
              </span>
              <span className="font-mono text-xs font-bold text-graphite leading-snug">
                {perk}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t-4 border-graphite pt-10 text-center">
        <h2 className="font-mono font-black text-2xl md:text-4xl uppercase text-graphite mb-3">
          READY TO LEAD ELEVATES ON YOUR CAMPUS?
        </h2>
        <p className="font-hand text-xl text-olive mb-8 max-w-2xl mx-auto">
          We provide the playbook, branding, mentors, and platform. You bring the quiet builders.
        </p>

        <Link
          href="/#footer"
          className="bg-flame text-paper font-mono font-bold px-10 py-4 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase text-sm inline-block"
        >
          APPLY FOR CHAPTER LEADERSHIP ↗
        </Link>
      </section>
    </main>
  );
}
