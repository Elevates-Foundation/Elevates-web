import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Doodle from "@/components/doodle";
import { FOUNDERS } from "@/data/team/founders";
import { ADVISORS } from "@/data/team/advisors";

export const metadata: Metadata = {
  title: "Meet the Team | ELEVATES Kerala",
  description:
    "Meet the 18 founders and faculty advisors behind ELEVATES Kerala.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Meet the Team | ELEVATES Kerala",
    description: "The 18 founding members and faculty behind ELEVATES Kerala.",
    url: "https://www.elevates.live/team",
  },
};

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function TeamPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ELEVATES Foundation",
    "url": "https://www.elevates.live",
    "foundingDate": "2025-09-02",
    "member": FOUNDERS.map((f) => ({
      "@type": "Person",
      "name": f.name,
      "jobTitle": f.tag,
      ...(f.linkedin ? { "sameAs": [f.linkedin] } : {}),
    })),
    "employee": ADVISORS.map((f) => ({
      "@type": "Person",
      "name": f.name,
      "jobTitle": `${f.role}, ${f.department}`,
    })),
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto selection:bg-flame selection:text-paper relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="mb-14 border-b-4 border-graphite pb-8 relative">
        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-graphite mb-4 leading-none">
          MEET THE <span className="text-flame">TEAM</span>
        </h1>
        <p className="font-hand text-xl md:text-2xl text-olive max-w-3xl leading-relaxed">
          18 back benchers, front benchers, and quiet builders who stopped waiting for permission and built the thing themselves. Founded September 2025.
        </p>
        <Doodle
          type="crown"
          color="#f26430"
          className="hidden md:block absolute right-0 top-2 w-24 h-24 rotate-12 opacity-30 pointer-events-none"
        />
      </header>

      {/* ─── FOUNDERS PHOTO ─── */}
      <div className="mb-14 relative group">
        <div className="relative border-4 border-graphite shadow-[8px_8px_0px_0px_rgba(45,45,52,1)] overflow-hidden">
          <img
            src="/team/elevates-founders.jpeg"
            alt="The 18 founding members of ELEVATES at Eranad Knowledge City, September 2025"
            className="w-full object-cover"
            style={{ height: "520px", objectPosition: "center 80%" }}
          />
          {/* Overlay tape label */}
          <div className="absolute bottom-0 left-0 right-0 bg-graphite/80 backdrop-blur-sm px-6 py-4 flex flex-wrap items-center justify-between gap-2">
            <div>
              <p className="font-mono font-black text-xs uppercase tracking-widest text-flame">
                THE 18
              </p>
              <p className="font-mono text-[11px] text-paper/70 mt-0.5">
                Eranad Knowledge City · Manjeri · September 2025
              </p>
            </div>
            <span className="font-mono text-[10px] font-bold text-paper/50 hidden sm:inline">
              // FOUNDING BATCH · 2025–26
            </span>
          </div>
        </div>
        {/* Decorative corner tape strips */}
        <div className="absolute -top-2 -left-2 w-12 h-5 bg-flame rotate-[-2deg] z-10" />
        <div className="absolute -top-2 -right-2 w-12 h-5 bg-flame rotate-[2deg] z-10" />
      </div>

      {/* 18 Founding Members */}
      <section className="mb-14">
        <div className="flex items-center justify-between mb-6 border-b-2 border-graphite/20 pb-3">
          <h2 className="text-xl md:text-2xl font-black uppercase text-graphite">
            THE FOUNDING MEMBERS
          </h2>
          <span className="font-mono text-xs font-bold text-paper bg-graphite px-3 py-1 rounded-sm">
            18 FOUNDERS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FOUNDERS.map((f, i) => (
            <div
              key={f.id}
              className="group bg-paper p-4 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:shadow-[5px_5px_0px_0px_rgba(242,100,48,1)] hover:border-flame transition-all flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-olive text-paper font-mono font-bold text-xs flex items-center justify-center border border-graphite shrink-0 group-hover:bg-flame transition-colors">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-mono font-bold text-sm text-graphite truncate group-hover:text-flame transition-colors">
                  {f.name}
                </h3>
                <span className="font-mono text-[11px] font-bold text-flame bg-flame/10 px-2 py-0.5 rounded border border-flame/30 inline-block mt-0.5">
                  {f.tag}
                </span>
                <p className="font-mono text-[10px] font-bold text-olive uppercase tracking-wide mt-1.5">
                  {f.role}
                </p>
                <p className="font-mono text-[10px] text-graphite/60 mt-0.5 leading-snug">
                  {f.proof}
                </p>
              </div>
              {f.linkedin && (
                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${f.name} on LinkedIn`}
                  className="shrink-0 text-olive/40 hover:text-flame transition-colors"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Faculty Advisors */}
      <section className="mb-14 bg-graphite text-paper rounded-sm border-4 border-graphite p-8 shadow-[8px_8px_0px_0px_rgba(242,100,48,1)]">
        <h2 className="font-mono font-bold text-lg md:text-xl uppercase text-paper mb-6">
          FACULTY SUPPORT &amp; ADVISORS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ADVISORS.map((f) => (
            <div key={f.name} className="bg-paper/10 border border-paper/20 rounded-sm p-5">
              <div className="w-10 h-10 rounded-full bg-flame text-paper font-mono font-bold text-sm flex items-center justify-center border border-paper/30 mb-3">
                {f.name.charAt(0)}
              </div>
              <h3 className="font-mono font-bold text-base text-paper">{f.name}</h3>
              <span className="font-mono text-xs font-bold text-flame block mb-0.5">
                {f.role} · {f.department}
              </span>
              <span className="font-mono text-[11px] text-paper/60">📍 {f.college}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t-4 border-graphite">
        <span className="font-hand text-xl text-olive">Want to be part of the story?</span>
        <div className="flex items-center gap-3">
          <Link
            href="/#footer"
            className="bg-flame text-paper font-mono font-bold text-xs px-6 py-3 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
          >
            JOIN ELEVATES ↗
          </Link>
          <Link
            href="/chapters"
            className="bg-paper text-graphite font-mono font-bold text-xs px-6 py-3 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
          >
            START A CHAPTER ↗
          </Link>
        </div>
      </div>
    </main>
  );
}
