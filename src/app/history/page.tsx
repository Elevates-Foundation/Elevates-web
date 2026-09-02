import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ELEVATES_BASE_URL } from "@/lib/schema/organization";

export const metadata: Metadata = {
  title: "History & Milestones | ELEVATES",
  description:
    "The history of ELEVATES from September 2025: founding at Eranad Knowledge City, first platforms shipped, chapter expansion, and milestones.",
  alternates: {
    canonical: "/history",
  },
  openGraph: {
    title: "History & Milestones | ELEVATES",
    description:
      "From a rejected chapter application to shipping production software for 400,000+ requests. The ELEVATES timeline.",
    url: `${ELEVATES_BASE_URL}/history`,
  },
  twitter: {
    card: "summary_large_image",
    title: "History & Milestones | ELEVATES",
    description:
      "From a rejected chapter application to shipping production software for 400,000+ requests. The ELEVATES timeline.",
  },
};

const TIMELINE_EVENTS = [
  {
    date: "September 2025",
    title: "The Founding Decision",
    tag: "GENESIS",
    description:
      "After years of seeing college chapter application windows closed, a small group of 18 students at Eranad Knowledge City (EKC), Manjeri decided to stop waiting for external club approvals and build their own community layer for quiet talent.",
  },
  {
    date: "October 2025",
    title: "First Production Platform Built in 5 Days",
    tag: "PRODUCTION PROOF",
    description:
      "Built and deployed the Vibranium TechFest 5.0 event platform under extreme time constraints. Successfully served over 400,000 live requests with zero downtime, proving that student-built software could match commercial tools.",
  },
  {
    date: "November 2025",
    title: "Second Platform Shipped (Aaroh Arts Fest)",
    tag: "SCALE",
    description:
      "Shipped the Aaroh Arts Fest management platform, handling real-time stage schedules, judging scorecards, and multi-day student event logistics.",
  },
  {
    date: "December 2025",
    title: "Launch of the Cluster System",
    tag: "INNOVATION",
    description:
      "Formalized the Cluster Engine, dividing open workshop attendees into 6 specialized working groups: Full-Stack, Cybersec, AI/ML, IoT/Robotics, UI/UX, and Cloud/DevOps.",
  },
  {
    date: "January 2026",
    title: "ELEVATES Campus Launch Event (120 Seats)",
    tag: "CAMPUS LAUNCH",
    description:
      "Conducted the official physical launch event at Eranad Knowledge City. Over 120 students packed the hall, inaugurating Chapter 01.",
  },
  {
    date: "2026 & Beyond",
    title: "Statewide Expansion & ELEVATES OS",
    tag: "FUTURE",
    description:
      "Expanding chapters across engineering colleges in Kerala and releasing open tools like RoadUndo Open Data API to support student builders statewide.",
  },
];

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto selection:bg-flame selection:text-paper">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "History", path: "/history" },
        ]}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">History</span>
      </nav>

      <header className="mb-14">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg] border border-graphite">
            CHRONOLOGY // TIMELINE
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // FROM DAY ZERO
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-graphite mb-4">
          COMMUNITY <span className="text-flame">HISTORY</span>
        </h1>
        <p className="font-hand text-xl md:text-2xl text-olive leading-relaxed">
          How a closed application window turned into Kerala&apos;s most active student builder movement.
        </p>
      </header>

      {/* Vertical Timeline */}
      <div className="relative border-l-4 border-graphite ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
        {TIMELINE_EVENTS.map((event, index) => (
          <div key={index} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[35px] md:-left-[51px] top-1 w-5 h-5 bg-flame border-3 border-graphite rounded-full group-hover:scale-125 transition-transform" />

            <div className="border-3 border-graphite p-6 rounded-sm bg-paper shadow-[5px_5px_0px_0px_rgba(45,45,52,1)]">
              <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                <span className="font-mono text-xs font-bold text-olive">{event.date}</span>
                <span className="font-mono text-[10px] uppercase font-bold bg-flame text-paper px-2 py-0.5 rounded-sm">
                  {event.tag}
                </span>
              </div>

              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-graphite mb-3">
                {event.title}
              </h2>

              <p className="text-sm md:text-base text-graphite/90 leading-relaxed font-sans">
                {event.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/about"
          className="inline-block bg-graphite text-paper font-mono text-xs font-bold uppercase px-6 py-3 rounded-sm hover:bg-flame transition-colors"
        >
          Read the Full About Story →
        </Link>
      </div>
    </main>
  );
}
