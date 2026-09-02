"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { ChapterTerm } from "@/data/chapters";
import { FOUNDERS } from "@/data/team/founders";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

interface ChapterTreeSectionProps {
  chapterName: string;
  terms?: ChapterTerm[];
}

export default function ChapterTreeSection({ chapterName, terms }: ChapterTreeSectionProps) {
  if (!terms || terms.length === 0) return null;

  const [activeTermId, setActiveTermId] = useState<string>(
    terms.find((t) => t.isCurrent)?.id ?? terms[0].id
  );

  const activeTerm = terms.find((t) => t.id === activeTermId) ?? terms[0];
  const { executiveCore, yearCoordinators, domainTeams } = activeTerm;

  return (
    <section className="mb-16 sm:mb-24" aria-labelledby="chapter-tree-heading">
      {/* ─── SECTION HEADER & TERM SWITCHER ─── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-5 border-b-2 border-graphite/20 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-[10px] font-black uppercase tracking-wider text-paper bg-flame px-2.5 py-0.5 rounded-sm">
              {activeTerm.id === "term-1" ? "FOUNDING COHORT" : "ORGANIZATIONAL TREE"}
            </span>
            <span className="font-mono text-xs text-olive font-bold">
              • Term {activeTerm.termNumber} ({activeTerm.academicYear})
            </span>
          </div>
          <h2 id="chapter-tree-heading" className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-graphite tracking-tight">
            {activeTerm.id === "term-1" ? "THE 18 FOUNDING MEMBERS" : "CHAPTER EXECOM HIERARCHY"}
          </h2>
          <p className="font-mono text-xs text-olive mt-1">
            {activeTerm.id === "term-1"
              ? "The original 18 founders who started ELEVATES at EKC. Born September 2025."
              : `Visual decision tree from executive leadership down to domain heads, coordinators, and builder pods at ${chapterName}.`}
          </p>
        </div>

        {/* Term Tabs */}
        {terms.length > 1 && (
          <div className="inline-flex bg-paper border-2 border-graphite rounded-sm p-1 shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] self-start md:self-auto">
            {terms.map((t) => {
              const isActive = t.id === activeTermId;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTermId(t.id)}
                  className={`font-mono text-xs font-bold px-3.5 py-1.5 rounded-sm transition-all flex items-center gap-2 ${
                    isActive
                      ? "bg-flame text-paper shadow-[2px_2px_0px_0px_rgba(45,45,52,1)]"
                      : "text-graphite hover:text-flame"
                  }`}
                >
                  <span>{t.id === "term-1" ? "Term 01 (Founders)" : `Term ${t.termNumber}`}</span>
                  <span className="text-[10px] opacity-80">({t.academicYear})</span>
                  {t.isCurrent && (
                    <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-paper animate-pulse" : "bg-flame"}`} />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* ─── CONDITIONAL VIEW: TERM 1 (FOUNDERS) VS TERM 2 (TREE) ─── */}
      {activeTerm.id === "term-1" ? (
        /* ══════════════════════════════════════════════
            TERM 01: FOUNDERS GRID CARDS (EXACTLY AS IN /founders & /team)
        ══════════════════════════════════════════════ */
        <div className="space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FOUNDERS.map((f, i) => (
              <div
                key={f.id}
                className="group bg-paper p-5 rounded-sm border-3 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:shadow-[7px_7px_0px_0px_rgba(242,100,48,1)] hover:border-flame hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between relative overflow-hidden"
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
                      alt={`${f.name}, ${f.role}, ELEVATES`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <Link href={`/founders/${f.id}`}>
                      <h3 className="font-mono font-black text-base text-graphite truncate group-hover:text-flame transition-colors">
                        {f.name}
                      </h3>
                    </Link>
                    <p className="font-mono text-xs font-bold text-flame tracking-tight mt-0.5">
                      {f.role}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t-2 border-dashed border-graphite/20 flex items-center justify-between gap-2">
                  <p className="font-mono text-[11px] text-graphite/80 leading-snug line-clamp-2">
                    ⚡ {f.proof}
                  </p>

                  <div className="flex items-center gap-2 shrink-0">
                    <Link
                      href={`/founders/${f.id}`}
                      className="font-mono text-[10px] font-bold text-flame hover:underline"
                    >
                      VIEW PROFILE →
                    </Link>
                    {f.linkedin && (
                      <a
                        href={f.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${f.name} on LinkedIn`}
                        className="p-1.5 rounded bg-graphite/5 hover:bg-flame hover:text-paper border border-graphite text-graphite/70 transition-colors"
                      >
                        <LinkedInIcon className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/team"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-paper bg-graphite hover:bg-flame px-5 py-2.5 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:shadow-[5px_5px_0px_0px_rgba(242,100,48,1)] transition-all"
            >
              EXPLORE FULL FOUNDERS DIRECTORY &amp; ARCHIVE →
            </Link>
          </div>
        </div>
      ) : (
        /* ══════════════════════════════════════════════
            TERM 02+: INTERACTIVE VISUAL TREE CANVAS
        ══════════════════════════════════════════════ */
        <div className="overflow-x-auto pb-8 pt-4 px-2">
          <div className="min-w-[860px] flex flex-col items-center">

          {/* ══════════════════════════════════════════════
              ROOT NODE: CHAIRMAN
          ══════════════════════════════════════════════ */}
          <div className="flex flex-col items-center">
            <div className="bg-paper border-4 border-graphite p-5 rounded-sm shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] hover:shadow-[8px_8px_0px_0px_rgba(242,100,48,1)] hover:border-flame transition-all w-80 text-center relative group">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-flame text-paper font-mono font-black text-[10px] px-3 py-0.5 rounded-sm uppercase tracking-wider border border-graphite shadow-[2px_2px_0px_0px_rgba(45,45,52,1)]">
                CHAIRMAN • TOP OF TREE
              </div>
              <div className="mt-1">
                <h3 className="font-mono font-black text-xl text-graphite group-hover:text-flame transition-colors">
                  {executiveCore.chairman.name}
                </h3>
                <span className="font-mono text-xs text-olive font-bold block mt-0.5">
                  Campus Chapter Chairman
                </span>
                <span className="inline-block mt-2 font-mono text-[10px] font-bold text-flame bg-flame/10 border border-flame/30 px-2 py-0.5 rounded">
                  Executive Authority
                </span>
              </div>
            </div>

            {/* Tree Branch: Down to Core Spine */}
            <div className="w-0.5 h-10 bg-graphite relative">
              <span className="w-2 h-2 rounded-full bg-flame absolute -top-1 -left-[3px]" />
              <span className="w-2 h-2 rounded-full bg-graphite absolute -bottom-1 -left-[3px]" />
            </div>
          </div>

          {/* ══════════════════════════════════════════════
              LEVEL 2: SECRETARY & EXECUTIVE PILLARS
          ══════════════════════════════════════════════ */}
          <div className="w-full flex flex-col items-center">
            {/* Horizontal Bus Line between Executive Core */}
            <div className="w-[620px] h-0.5 bg-graphite relative">
              <span className="w-2.5 h-2.5 rounded-full bg-graphite absolute top-1/2 -left-1 -translate-y-1/2" />
              <span className="w-2.5 h-2.5 rounded-full bg-graphite absolute top-1/2 -right-1 -translate-y-1/2" />
              <span className="w-2.5 h-2.5 rounded-full bg-flame absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Drops to Secretary, Vice Chairmen, Joint Secretaries */}
            <div className="w-[620px] grid grid-cols-3 gap-6 pt-6 relative">
              {/* Drop Lines */}
              <div className="absolute top-0 left-[16.6%] w-0.5 h-6 bg-graphite" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-graphite" />
              <div className="absolute top-0 right-[16.6%] w-0.5 h-6 bg-graphite" />

              {/* 1. Vice Chairmen Pod */}
              <div className="bg-paper border-2 border-graphite p-4 rounded-sm shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] flex flex-col justify-between">
                <span className="font-mono text-[9px] font-black uppercase tracking-wider text-paper bg-flame px-2 py-0.5 rounded-sm self-start mb-2">
                  VICE CHAIRMEN
                </span>
                <div className="space-y-2">
                  {executiveCore.viceChairmen.map((vc) => (
                    <div key={vc.name} className="p-2 rounded bg-flame/5 border border-flame/20">
                      <span className="font-mono font-bold text-sm text-graphite block truncate">
                        {vc.name}
                      </span>
                      <span className="font-mono text-[10px] text-olive block">
                        Vice Chairman
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Secretary (Center Hub) */}
              <div className="bg-paper border-3 border-graphite p-4 rounded-sm shadow-[5px_5px_0px_0px_rgba(45,45,52,1)] flex flex-col justify-between relative">
                <span className="font-mono text-[10px] font-black uppercase tracking-wider text-paper bg-graphite px-2.5 py-0.5 rounded-sm self-start mb-2">
                  SECRETARY
                </span>
                <div className="p-2.5 rounded bg-graphite/5 border border-graphite/30">
                  <h4 className="font-mono font-black text-base text-graphite">
                    {executiveCore.secretary.name}
                  </h4>
                  <span className="font-mono text-xs text-olive font-bold block">
                    General Secretary
                  </span>
                  <span className="font-mono text-[10px] text-graphite font-bold bg-olive/15 px-2 py-0.5 rounded border border-graphite/30 inline-block mt-1.5">
                    Operations Secretariat
                  </span>
                </div>
              </div>

              {/* 3. Joint Secretaries Pod */}
              <div className="bg-paper border-2 border-graphite p-4 rounded-sm shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] flex flex-col justify-between">
                <span className="font-mono text-[9px] font-black uppercase tracking-wider text-paper bg-graphite px-2 py-0.5 rounded-sm self-start mb-2">
                  JOINT SECRETARIES
                </span>
                <div className="space-y-2">
                  {executiveCore.jointSecretaries.map((js) => (
                    <div key={js.name} className="p-2 rounded bg-olive/5 border border-graphite/20">
                      <span className="font-mono font-bold text-sm text-graphite block truncate">
                        {js.name}
                      </span>
                      <span className="font-mono text-[10px] text-olive block">
                        Joint Secretary
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tree Branch: Down from Secretary to Operations & Domains */}
            <div className="w-0.5 h-12 bg-graphite relative my-1">
              <span className="w-2.5 h-2.5 rounded-full bg-graphite absolute top-0 -left-1" />
              <span className="w-2.5 h-2.5 rounded-full bg-flame absolute bottom-0 -left-1" />
            </div>
          </div>

          {/* ══════════════════════════════════════════════
              LEVEL 3: YEAR-WISE BATCH COORDINATORS
          ══════════════════════════════════════════════ */}
          {yearCoordinators.length > 0 && (
            <div className="w-full flex flex-col items-center">
              {/* Year Coordinator Horizontal Bus Line */}
              <div className="w-[780px] h-0.5 bg-graphite relative">
                <span className="w-2 h-2 rounded-full bg-olive absolute top-1/2 left-0 -translate-y-1/2" />
                <span className="w-2 h-2 rounded-full bg-olive absolute top-1/2 right-0 -translate-y-1/2" />
              </div>

              <div className="w-[780px] grid grid-cols-3 gap-6 pt-5 relative">
                {/* Connector drops */}
                <div className="absolute top-0 left-[16.6%] w-0.5 h-5 bg-graphite" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-5 bg-graphite" />
                <div className="absolute top-0 right-[16.6%] w-0.5 h-5 bg-graphite" />

                {yearCoordinators.map((grp) => (
                  <div
                    key={grp.year}
                    className="bg-paper border-2 border-graphite rounded-sm p-3.5 shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]"
                  >
                    <div className="flex items-center justify-between pb-1.5 mb-2.5 border-b-2 border-dashed border-graphite/20">
                      <span className="font-mono text-xs font-black uppercase text-flame">
                        {grp.year} LIAISONS
                      </span>
                      <span className="font-mono text-[10px] text-olive font-bold">
                        2 Leads
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {grp.coordinators.map((coord) => (
                        <div key={coord.name} className="p-1.5 rounded bg-olive/5 border border-graphite/20 text-center">
                          <span className="font-mono font-bold text-xs text-graphite block truncate">
                            {coord.name}
                          </span>
                          <span className="font-mono text-[9px] text-olive block">
                            Coordinator
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tree Branch: Down to Domain Teams */}
              <div className="w-0.5 h-12 bg-graphite relative my-1">
                <span className="w-2.5 h-2.5 rounded-full bg-graphite absolute top-0 -left-1" />
                <span className="w-2.5 h-2.5 rounded-full bg-flame absolute bottom-0 -left-1" />
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════
              LEVEL 4: SPECIALIZED DOMAIN TEAMS TREE
          ══════════════════════════════════════════════ */}
          <div className="w-full flex flex-col items-center">
            {/* Domain Bus Line */}
            <div className="w-[840px] h-0.5 bg-graphite relative">
              <span className="w-2.5 h-2.5 rounded-full bg-flame absolute top-1/2 left-0 -translate-y-1/2" />
              <span className="w-2.5 h-2.5 rounded-full bg-flame absolute top-1/2 right-0 -translate-y-1/2" />
              <span className="w-2.5 h-2.5 rounded-full bg-graphite absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* 3 Domain Branches */}
            <div className="w-[840px] grid grid-cols-3 gap-6 pt-6 relative">
              {/* Connector Drops */}
              <div className="absolute top-0 left-[16.6%] w-0.5 h-6 bg-graphite" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-graphite" />
              <div className="absolute top-0 right-[16.6%] w-0.5 h-6 bg-graphite" />

              {domainTeams.map((team) => (
                <div
                  key={team.teamName}
                  className="bg-paper border-3 border-graphite rounded-sm shadow-[5px_5px_0px_0px_rgba(45,45,52,1)] flex flex-col overflow-hidden"
                >
                  {/* Domain Head Node */}
                  <div className="bg-graphite text-paper p-3.5 border-b-2 border-graphite">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-flame bg-flame/15 px-2 py-0.5 rounded border border-flame/30">
                        {team.badge}
                      </span>
                      <span className="font-mono text-[10px] text-paper/70 font-semibold">
                        {team.heads.length + team.members.length} Members
                      </span>
                    </div>
                    <h4 className="font-mono font-black text-base uppercase text-paper tracking-tight">
                      {team.teamName}
                    </h4>
                    {team.tagline && (
                      <p className="font-mono text-[10px] text-paper/70 mt-0.5 leading-snug">
                        {team.tagline}
                      </p>
                    )}
                  </div>

                  <div className="p-3.5 space-y-4 flex-1">
                    {/* Domain Leads Branch */}
                    <div>
                      <div className="flex items-center gap-1.5 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-flame" />
                        <span className="font-mono text-[10px] font-black uppercase text-flame tracking-wider">
                          TEAM HEADS (CO-LEADS)
                        </span>
                      </div>
                      <div className="space-y-1.5">
                        {team.heads.map((head) => (
                          <div
                            key={head.name}
                            className="p-2 rounded-sm bg-flame/10 border border-flame/30 flex items-center justify-between"
                          >
                            <span className="font-mono font-black text-xs text-graphite truncate">
                              {head.name}
                            </span>
                            <span className="font-mono text-[9px] font-black uppercase text-paper bg-flame px-1.5 py-0.5 rounded-sm shrink-0">
                              HEAD
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Subteam Branch with vertical stem */}
                    {team.members.length > 0 && (
                      <div>
                        <div className="flex items-center gap-1.5 mb-2 pt-2 border-t-2 border-dashed border-graphite/20">
                          <span className="w-1.5 h-1.5 rounded-full bg-graphite" />
                          <span className="font-mono text-[10px] font-black uppercase text-olive tracking-wider">
                            BUILDER MEMBERS ({team.members.length})
                          </span>
                        </div>

                        {/* Hierarchical Subtree List with connector branch markers */}
                        <div className="space-y-1.5 relative pl-3 border-l-2 border-graphite/30">
                          {team.members.map((member) => (
                            <div
                              key={member.name}
                              className="p-1.5 rounded-sm bg-olive/5 border border-graphite/20 relative before:content-[''] before:absolute before:-left-3 before:top-1/2 before:w-2.5 before:h-0.5 before:bg-graphite/40"
                            >
                              <div className="flex items-center justify-between gap-1">
                                <span className="font-mono font-bold text-xs text-graphite truncate">
                                  {member.name}
                                </span>
                                {(member.year || member.branch) && (
                                  <span className="font-mono text-[9px] font-semibold text-olive bg-paper px-1 py-0.2 rounded border border-graphite/20 shrink-0">
                                    {[member.year, member.branch].filter(Boolean).join(" · ")}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    )}
  </section>
);
}
