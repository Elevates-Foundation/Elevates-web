import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Doodle from "@/components/doodle";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import ChapterViewClient from "@/components/chapters/chapter-view-client";
import { getAllChapterSlugs } from "@/data/chapters";
import { fetchChapterBySlug } from "@/lib/data/chapters";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllChapterSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const chapter = await fetchChapterBySlug(slug);

  if (!chapter) {
    return { title: "Chapter Not Found | ELEVATES Kerala" };
  }

  return {
    title: `${chapter.name} | ELEVATES Student Tech Community`,
    description: `ELEVATES ${chapter.name} at ${chapter.college}. Local team, workshops, events, and student projects built here.`,
    alternates: {
      canonical: `/chapters/${chapter.slug}`,
    },
    openGraph: {
      title: `${chapter.name} | ELEVATES Kerala`,
      description: `Student tech community chapter at ${chapter.college}.`,
      url: `https://www.elevates.live/chapters/${chapter.slug}`,
    },
  };
}

export default async function ChapterDetailPage({ params }: Props) {
  const { slug } = await params;
  const chapter = await fetchChapterBySlug(slug);

  if (!chapter) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": `ELEVATES ${chapter.name}`,
    "url": `https://www.elevates.live/chapters/${chapter.slug}`,
    "description": `Campus chapter of ELEVATES at ${chapter.college}.`,
    "parentOrganization": { "@id": "https://www.elevates.live/#organization" },
    "member": chapter.team.map((m) => ({
      "@type": "Person",
      "name": m.name,
      "jobTitle": m.role,
    })),
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto selection:bg-flame selection:text-paper relative overflow-hidden">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Chapters", path: "/chapters" },
          { name: chapter.name, path: `/chapters/${chapter.slug}` },
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
        <Link href="/chapters" className="hover:underline">Chapters</Link>
        <span>/</span>
        <span className="text-graphite font-bold">{chapter.name}</span>
      </nav>

      {/* Hero Header */}
      <header className="bg-paper border-4 border-graphite rounded-sm p-5 sm:p-8 md:p-12 shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] sm:shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] mb-10 sm:mb-14 relative overflow-hidden">
        <div className="absolute -top-3.5 left-6 sm:left-8 w-28 sm:w-36 h-6 sm:h-7 bg-flame/80 rotate-[-1.5deg] border border-graphite/30" />

        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 flex-wrap">
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg]">
            CHAPTER #{chapter.chapterNumber}
          </span>
          <span className="font-mono text-[11px] sm:text-xs text-olive font-bold">
            // FOUNDED {chapter.foundedDate.toUpperCase()}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-graphite mb-3 leading-tight">
          {chapter.name}
        </h1>

        <p className="font-mono text-xs sm:text-base text-olive mb-6 font-bold leading-relaxed">
          📍 {chapter.college}
        </p>

        {/* Quick Proof Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-5 sm:pt-6 border-t-2 border-dashed border-graphite/20 font-mono text-xs">
          <div>
            <span className="text-flame text-xl sm:text-2xl font-black block">{chapter.stats.eventsCount}</span>
            <span className="text-olive">Events Conducted</span>
          </div>
          <div>
            <span className="text-flame text-xl sm:text-2xl font-black block">{chapter.stats.studentsImpacted}+</span>
            <span className="text-olive">Students Impacted</span>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="text-flame text-xl sm:text-2xl font-black block">Term 02</span>
            <span className="text-olive font-bold">Active Cycle (2026-27)</span>
          </div>
        </div>

        <Doodle
          type="crown"
          color="#f26430"
          className="hidden md:block absolute right-6 top-6 w-24 h-24 rotate-12 opacity-25 pointer-events-none"
        />
      </header>

      {/* ─── CHAPTER INTERACTIVE TABBED SECTIONS (LEADERSHIP | EVENTS | PROJECTS) ─── */}
      <ChapterViewClient chapter={chapter} />

      {/* ─── BOTTOM CTA ─── */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t-4 border-graphite">
        <span className="font-hand text-xl text-olive text-center sm:text-left">Are you a student at {chapter.name}?</span>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            href="/#footer"
            className="bg-flame text-paper font-mono font-bold text-xs px-6 py-3 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase text-center w-full sm:w-auto"
          >
            JOIN THIS CHAPTER ↗
          </Link>
          <Link
            href="/chapters"
            className="bg-paper text-graphite font-mono font-bold text-xs px-6 py-3 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase text-center w-full sm:w-auto"
          >
            ALL CHAPTERS ↗
          </Link>
        </div>
      </div>
    </main>
  );
}
