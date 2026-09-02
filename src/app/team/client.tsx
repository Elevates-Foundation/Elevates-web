"use client";

import React, { useState } from "react";
import Link from "next/link";
import Doodle from "@/components/doodle";
import { Founder } from "@/data/team/founders";
import { Advisor } from "@/data/team/advisors";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface Props {
  founders: Founder[];
  advisors: Advisor[];
}

export default function TeamClient({ founders, advisors }: Props) {
  const [selectedFounder, setSelectedFounder] = useState<Founder | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "polaroid">("grid");

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto selection:bg-flame selection:text-paper relative overflow-hidden">
      {/* Header */}
      <header className="mb-12 border-b-4 border-graphite pb-8 relative">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg]">
            FOUNDING TEAM // BATCH 2025–26
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // 18 FOUNDERS
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-graphite mb-4 leading-none">
          MEET THE <span className="text-flame">TEAM</span>
        </h1>
        <p className="font-hand text-xl md:text-2xl text-olive max-w-3xl leading-relaxed mb-6">
          18 back benchers, front benchers, and quiet builders who stopped waiting for permission and built the thing themselves. Founded September 2025.
        </p>

        {/* View mode toggle controls */}
        <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t-2 border-dashed border-graphite/20 font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="text-olive font-bold uppercase">CARD VIEW:</span>
            <button
              onClick={() => setViewMode("grid")}
              className={`px-3 py-1.5 rounded-sm border-2 font-bold transition-all ${
                viewMode === "grid"
                  ? "bg-flame text-paper border-graphite shadow-[2px_2px_0px_0px_rgba(45,45,52,1)]"
                  : "bg-paper text-graphite border-graphite hover:bg-graphite/10"
              }`}
            >
              GRID CARDS
            </button>
            <button
              onClick={() => setViewMode("polaroid")}
              className={`px-3 py-1.5 rounded-sm border-2 font-bold transition-all ${
                viewMode === "polaroid"
                  ? "bg-flame text-paper border-graphite shadow-[2px_2px_0px_0px_rgba(45,45,52,1)]"
                  : "bg-paper text-graphite border-graphite hover:bg-graphite/10"
              }`}
            >
              POLAROID STACK 📸
            </button>
          </div>

          <span className="text-olive font-semibold hidden md:inline">
            💡 Click any team card for full spotlight view
          </span>
        </div>

        <Doodle
          type="crown"
          color="#f26430"
          className="hidden md:block absolute right-0 top-2 w-24 h-24 rotate-12 opacity-30 pointer-events-none"
        />
      </header>

      {/* ─── GROUP FOUNDERS PHOTO ─── */}
      <div className="mb-16 relative group transform-gpu">
        <div className="relative border-4 border-graphite shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] overflow-hidden rounded-sm bg-graphite/10">
          <img
            src="/team/elevates-founders.jpeg"
            alt="The 18 founding members of ELEVATES at Eranad Knowledge City, September 2025"
            loading="eager"
            decoding="async"
            className="w-full object-cover group-hover:scale-[1.01] transition-transform duration-200"
            style={{ height: "520px", objectPosition: "center 80%" }}
          />
          {/* Overlay tape label */}
          <div className="absolute bottom-0 left-0 right-0 bg-graphite/90 px-6 py-4 flex flex-wrap items-center justify-between gap-2 border-t-2 border-graphite">
            <div>
              <p className="font-mono font-black text-sm uppercase tracking-widest text-flame">
                THE 18 FOUNDERS
              </p>
              <p className="font-mono text-xs text-paper/80 mt-0.5">
                Eranad Knowledge City · Manjeri · September 2025
              </p>
            </div>
            <span className="font-mono text-xs font-bold text-paper/60 hidden sm:inline bg-paper/10 px-3 py-1 rounded border border-paper/20">
              // FOUNDING BATCH · 2025–26
            </span>
          </div>
        </div>
        {/* Decorative corner tape strips */}
        <div className="absolute -top-3 -left-3 w-16 h-6 bg-flame rotate-[-3deg] z-10 border border-graphite shadow-sm" />
        <div className="absolute -top-3 -right-3 w-16 h-6 bg-flame rotate-[3deg] z-10 border border-graphite shadow-sm" />
      </div>

      {/* ─── 18 FOUNDING MEMBERS CARDS ─── */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8 border-b-3 border-graphite pb-3">
          <div>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-graphite">
              THE 18 FOUNDING MEMBERS
            </h2>
            <p className="font-mono text-xs text-olive">Hover over cards for zoom &amp; badge tilt. Click for spotlight view.</p>
          </div>
          <span className="font-mono text-xs font-bold text-paper bg-graphite px-3 py-1 rounded-sm">
            18 FOUNDERS
          </span>
        </div>

        {/* VARIETY GRID MODE */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {founders.map((f, i) => (
              <div
                key={f.id}
                onClick={() => setSelectedFounder(f)}
                className="group cursor-pointer bg-paper p-5 rounded-sm border-3 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:shadow-[7px_7px_0px_0px_rgba(242,100,48,1)] hover:border-flame hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between relative overflow-hidden transform-gpu will-change-transform"
              >
                {/* Number Watermark */}
                <div className="absolute top-2 right-3 font-mono font-black text-3xl text-graphite/10 select-none group-hover:text-flame/20 transition-colors">
                  #{String(i + 1).padStart(2, "0")}
                </div>

                <div className="flex items-start gap-4 mb-4">
                  {/* Founder Photo Avatar */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-sm border-2 border-graphite overflow-hidden relative shrink-0 shadow-[2px_2px_0px_0px_rgba(45,45,52,1)] group-hover:border-flame transition-colors bg-graphite/5">
                    <img
                      src={f.image}
                      alt={`${f.name} — ${f.role}, ELEVATES`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-mono font-black text-base text-graphite truncate group-hover:text-flame transition-colors">
                      {f.name}
                    </h3>
                    <p className="font-mono text-xs font-bold text-flame tracking-tight mt-0.5">
                      {f.role}
                    </p>
                    <div className="mt-1 flex items-center gap-1.5 flex-wrap">
                      <span className="font-mono text-[10px] text-olive/80 font-bold uppercase">
                        &ldquo;{f.tag}&rdquo;
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-dashed border-graphite/20 flex items-center justify-between gap-2">
                  <p className="font-mono text-[11px] text-graphite/80 leading-snug line-clamp-2">
                    ⚡ {f.proof}
                  </p>

                  {f.linkedin && (
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      aria-label={`${f.name} on LinkedIn`}
                      className="shrink-0 p-1.5 rounded bg-graphite/5 hover:bg-flame hover:text-paper border border-graphite text-graphite/70 transition-colors"
                    >
                      <LinkedInIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* POLAROID STACK MODE */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((f, i) => (
              <div
                key={f.id}
                onClick={() => setSelectedFounder(f)}
                className={`group cursor-pointer bg-paper p-4 pb-6 rounded-sm border-4 border-graphite shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] hover:shadow-[10px_10px_0px_0px_rgba(242,100,48,1)] hover:border-flame transition-all duration-150 relative transform-gpu ${
                  i % 3 === 0 ? "rotate-[-1deg]" : i % 3 === 1 ? "rotate-[1.5deg]" : "rotate-[-0.5deg]"
                } hover:rotate-0 hover:-translate-y-1.5`}
              >
                {/* Polaroid Tape Accent */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 bg-flame/80 border border-graphite rotate-[-2deg] z-10" />

                <div className="w-full aspect-square border-2 border-graphite rounded-sm overflow-hidden mb-4 relative bg-graphite/10">
                  <img
                    src={f.image}
                    alt={`${f.name} — ${f.role}, ELEVATES`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-2 left-2 bg-graphite/90 text-paper font-mono font-bold text-[10px] px-2 py-0.5 rounded border border-paper/30">
                    #{String(i + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="font-mono font-black text-lg text-graphite group-hover:text-flame transition-colors mb-0.5">
                    {f.name}
                  </h3>
                  <p className="font-mono text-xs text-flame font-bold mb-1">{f.role}</p>
                  <p className="font-mono text-[11px] text-olive/80 font-bold mb-2">
                    &ldquo;{f.tag}&rdquo;
                  </p>
                  <p className="font-mono text-[11px] text-graphite/70">⚡ {f.proof}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ─── FACULTY ADVISORS CARDS ─── */}
      <section className="mb-16 bg-graphite text-paper rounded-sm border-4 border-graphite p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(242,100,48,1)] relative overflow-hidden">
        <div className="flex items-center justify-between mb-8 border-b-2 border-paper/20 pb-4">
          <div>
            <span className="font-mono text-xs font-bold text-flame uppercase tracking-widest block mb-1">
              ACADEMIC LEADERSHIP
            </span>
            <h2 className="font-mono font-black text-2xl md:text-4xl uppercase text-paper">
              FACULTY SUPPORT &amp; ADVISORS
            </h2>
          </div>
          <span className="font-mono text-xs font-bold bg-flame text-paper px-3 py-1 rounded">
            CSE FACULTY
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advisors.map((adv) => (
            <div
              key={adv.name}
              className="group bg-paper text-graphite border-3 border-graphite rounded-sm p-6 shadow-[6px_6px_0px_0px_rgba(248,255,244,1)] hover:border-flame hover:shadow-[8px_8px_0px_0px_rgba(242,100,48,1)] transition-all flex items-start gap-5 transform-gpu"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-sm border-2 border-graphite overflow-hidden relative shrink-0 shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] group-hover:border-flame transition-colors bg-graphite/10">
                <img
                  src={adv.image}
                  alt={`${adv.name} — ${adv.role}, ${adv.department} (${adv.college})`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>

              <div className="min-w-0 flex-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-paper bg-flame px-2 py-0.5 rounded border border-graphite inline-block mb-1">
                  {adv.role}
                </span>
                <h3 className="font-mono font-black text-xl text-graphite group-hover:text-flame transition-colors">
                  {adv.name}
                </h3>
                <p className="font-mono text-xs font-bold text-olive mt-1">
                  {adv.department}
                </p>
                <p className="font-mono text-xs text-graphite/80 mt-1">
                  📍 {adv.college}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FOUNDER SPOTLIGHT MODAL ─── */}
      {selectedFounder && (
        <div
          onClick={() => setSelectedFounder(null)}
          className="fixed inset-0 z-[9999] bg-graphite/80 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-paper border-4 border-graphite rounded-sm p-6 md:p-8 max-w-xl w-full shadow-[12px_12px_0px_0px_rgba(242,100,48,1)] relative"
          >
            <button
              onClick={() => setSelectedFounder(null)}
              className="absolute top-4 right-4 bg-graphite text-paper font-mono font-bold w-8 h-8 flex items-center justify-center rounded-sm hover:bg-flame transition-colors"
            >
              ✕
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 border-b-2 border-graphite/20 pb-6">
              <div className="w-28 h-28 md:w-32 md:h-32 border-4 border-graphite rounded-sm overflow-hidden relative shrink-0 shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] bg-graphite/10">
                <img
                  src={selectedFounder.image}
                  alt={`${selectedFounder.name} — ${selectedFounder.role}, ELEVATES`}
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h3 className="font-mono font-black text-2xl md:text-3xl text-graphite">
                  {selectedFounder.name}
                </h3>
                <p className="font-mono text-sm font-bold text-flame tracking-wide mt-1">
                  {selectedFounder.role} · BATCH {selectedFounder.cohort}
                </p>
                {selectedFounder.specialization && (
                  <p className="font-mono text-xs text-olive font-semibold mt-0.5">
                    Domain: {selectedFounder.specialization}
                  </p>
                )}
                <span className="font-mono text-xs font-bold text-paper bg-graphite px-2.5 py-0.5 rounded border border-graphite uppercase inline-block mt-2">
                  &ldquo;{selectedFounder.tag}&rdquo;
                </span>
              </div>
            </div>

            <div className="space-y-4 font-mono text-xs mb-6">
              <div className="bg-graphite/5 border border-graphite/20 p-4 rounded-sm">
                <span className="font-bold text-flame block mb-1">⚡ Proven Contribution:</span>
                <p className="text-graphite/90 text-sm font-semibold">{selectedFounder.proof}</p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 pt-4 border-t-2 border-dashed border-graphite/20">
              {selectedFounder.linkedin ? (
                <a
                  href={selectedFounder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-flame text-paper font-mono font-bold px-6 py-2.5 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:bg-graphite transition-all uppercase text-xs inline-flex items-center gap-2"
                >
                  <LinkedInIcon className="w-4 h-4" />
                  CONNECT ON LINKEDIN ↗
                </a>
              ) : (
                <span className="font-mono text-xs text-olive font-bold">ELEVATES FOUNDATION HQ</span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* CTA Footer */}
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
            href="/for-colleges"
            className="bg-paper text-graphite font-mono font-bold text-xs px-6 py-3 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
          >
            FOR COLLEGES ↗
          </Link>
        </div>
      </div>
    </main>
  );
}
