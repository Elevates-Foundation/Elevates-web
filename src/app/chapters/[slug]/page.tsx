import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Doodle from "@/components/doodle";
import { getChapterBySlug, getAllChapterSlugs } from "@/data/chapters";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllChapterSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

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
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": `ELEVATES ${chapter.name}`,
    "url": `https://www.elevates.live/chapters/${chapter.slug}`,
    "description": `Campus chapter of ELEVATES at ${chapter.college}.`,
    "parentOrganization": {
      "@type": "Organization",
      "name": "ELEVATES Foundation",
      "url": "https://www.elevates.live",
    },
    "member": chapter.team.map((m) => ({
      "@type": "Person",
      "name": m.name,
      "jobTitle": m.role,
    })),
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-32 sm:pt-36 md:pt-40 pb-20 sm:pb-24 px-4 sm:px-6 md:px-12 max-w-6xl mx-auto selection:bg-flame selection:text-paper relative overflow-hidden">
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
          {chapter.stats.platformRequests && (
            <div className="col-span-2 sm:col-span-1">
              <span className="text-flame text-xl sm:text-2xl font-black block">{chapter.stats.platformRequests}</span>
              <span className="text-olive font-bold">Platform Traffic</span>
            </div>
          )}
        </div>

        <Doodle
          type="crown"
          color="#f26430"
          className="hidden md:block absolute right-6 top-6 w-24 h-24 rotate-12 opacity-25 pointer-events-none"
        />
      </header>

      {/* ─── CHAPTER TEAM ─── */}
      <section className="mb-10 sm:mb-14">
        <div className="flex items-center justify-between mb-6 border-b-2 border-graphite/20 pb-3 gap-2">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-black uppercase text-graphite">
              CHAPTER TEAM &amp; LEADERSHIP
            </h2>
            <p className="font-mono text-xs text-olive mt-0.5">The student leads running operations, workshops, and cohorts at {chapter.name}.</p>
          </div>
          <span className="font-mono text-xs font-bold text-paper bg-graphite px-3 py-1 rounded-sm shrink-0">
            LOCAL TEAM
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {chapter.team.map((member, i) => (
            <div
              key={member.name}
              className="bg-paper p-4 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:border-flame hover:shadow-[5px_5px_0px_0px_rgba(242,100,48,1)] transition-all flex items-center gap-4 group"
            >
              <div className="w-10 h-10 rounded-full bg-flame text-paper font-mono font-bold text-xs flex items-center justify-center border border-graphite shrink-0">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0">
                <h3 className="font-mono font-bold text-sm text-graphite truncate group-hover:text-flame transition-colors">
                  {member.name}
                </h3>
                <span className="font-mono text-xs text-olive block">{member.role}</span>
                {member.tag && (
                  <span className="font-mono text-[10px] font-bold text-flame bg-flame/10 px-2 py-0.5 rounded border border-flame/30 inline-block mt-0.5">
                    {member.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FACULTY COORDINATOR ─── */}
      {chapter.facultyCoordinator && (
        <section className="mb-10 sm:mb-14 bg-graphite text-paper rounded-sm border-4 border-graphite p-5 sm:p-8 shadow-[6px_6px_0px_0px_rgba(242,100,48,1)] sm:shadow-[8px_8px_0px_0px_rgba(242,100,48,1)]">
          <span className="font-mono text-xs font-bold text-flame uppercase tracking-wider block mb-1.5">
            FACULTY LEADERSHIP
          </span>
          <h2 className="font-mono font-bold text-base sm:text-lg md:text-xl uppercase text-paper mb-4">
            FACULTY COORDINATOR
          </h2>
          <div className="bg-paper/10 border border-paper/20 rounded-sm p-4 sm:p-5 max-w-md">
            <h3 className="font-mono font-bold text-base text-paper">{chapter.facultyCoordinator.name}</h3>
            <span className="font-mono text-xs font-bold text-flame block mb-0.5">{chapter.facultyCoordinator.designation}</span>
            <span className="font-mono text-xs text-paper/70 block">{chapter.facultyCoordinator.department}</span>
            <span className="font-mono text-[11px] text-paper/50 block mt-1">📍 {chapter.college}</span>
          </div>
        </section>
      )}

      {/* ─── EVENTS RUN HERE ─── */}
      <section className="mb-10 sm:mb-14">
        <h2 className="text-lg sm:text-xl md:text-2xl font-black uppercase text-graphite mb-6 border-b-2 border-graphite/20 pb-3">
          EVENTS &amp; WORKSHOPS CONDUCTED HERE
        </h2>
        <div className="space-y-4">
          {chapter.events.map((evt, i) => (
            <div
              key={i}
              className="bg-paper p-4 sm:p-5 border-2 border-graphite rounded-sm shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] sm:shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="font-mono text-xs font-bold text-flame">{evt.date}</span>
                  <span className="text-olive">•</span>
                  <span className="font-mono text-xs text-olive font-bold">{evt.headcount} attendees</span>
                </div>
                <h3 className="font-mono font-bold text-base text-graphite mb-1">{evt.title}</h3>
                <p className="font-mono text-xs text-graphite/80 leading-relaxed">{evt.description}</p>
              </div>
              <span className="font-mono text-xs font-bold text-paper bg-graphite px-3 py-1.5 rounded-sm shrink-0 self-start md:self-center">
                COMPLETED
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── PROJECTS BUILT HERE ─── */}
      <section className="mb-10 sm:mb-14">
        <h2 className="text-lg sm:text-xl md:text-2xl font-black uppercase text-graphite mb-6 border-b-2 border-graphite/20 pb-3">
          PROJECTS SHIPPED AT THIS CAMPUS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chapter.projects.map((proj, i) => {
            const projectUrl = proj.url || (proj.slug ? `/projects/${proj.slug}` : "/projects");
            return (
              <Link
                key={i}
                href={projectUrl}
                className="group bg-paper p-4 sm:p-5 border-2 border-graphite rounded-sm shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] sm:shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:border-flame hover:shadow-[5px_5px_0px_0px_rgba(242,100,48,1)] transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-[10px] font-bold text-flame uppercase tracking-wider block mb-1">
                    PRODUCTION SHIPPED
                  </span>
                  <h3 className="font-mono font-bold text-base md:text-lg text-graphite group-hover:text-flame transition-colors mb-2">
                    {proj.title}
                  </h3>
                  <p className="font-mono text-xs text-olive mb-4 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-graphite/20 pt-3 mt-2">
                  <span className="font-mono text-xs font-bold text-graphite">
                    Builder: {proj.builder}
                  </span>
                  <span className="font-mono font-bold text-xs text-flame group-hover:translate-x-0.5 transition-transform">
                    Read Case Study →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

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
