"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import type { Chapter, ChapterEvent } from "@/data/chapters";
import ChapterTreeSection from "@/components/chapters/chapter-tree-section";

interface ChapterViewClientProps {
  chapter: Chapter;
}

type TabType = "leadership" | "events" | "projects";

export default function ChapterViewClient({ chapter }: ChapterViewClientProps) {
  const [activeTab, setActiveTab] = useState<TabType>("leadership");
  const [eventSearch, setEventSearch] = useState("");

  // Filter events based on search
  const filteredEvents = useMemo(() => {
    if (!eventSearch.trim()) return chapter.events;
    const q = eventSearch.toLowerCase().trim();
    return chapter.events.filter(
      (e) =>
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        e.date.toLowerCase().includes(q)
    );
  }, [chapter.events, eventSearch]);

  const totalAttendees = useMemo(() => {
    return chapter.events.reduce((acc, curr) => acc + (curr.headcount || 0), 0);
  }, [chapter.events]);

  return (
    <div>
      {/* ─── STICKY SUB-NAVIGATION TABS ─── */}
      <div className="sticky top-20 z-20 bg-paper/95 backdrop-blur-md border-y-3 border-graphite py-3 mb-10 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-12 md:px-12 shadow-[0_4px_0_0_rgba(45,45,52,0.06)]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 overflow-x-auto no-scrollbar py-1">
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Tab 1: Leadership */}
            <button
              onClick={() => setActiveTab("leadership")}
              className={`font-mono text-xs sm:text-sm font-black px-4 py-2 rounded-sm border-2 transition-all flex items-center gap-2 ${
                activeTab === "leadership"
                  ? "bg-flame text-paper border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] -translate-y-0.5"
                  : "bg-paper text-graphite border-graphite/40 hover:border-graphite hover:text-flame"
              }`}
            >
              <span>LEADERSHIP &amp; EXECOM</span>
              <span
                className={`font-mono text-[10px] font-bold px-1.5 py-0.2 rounded ${
                  activeTab === "leadership"
                    ? "bg-paper text-graphite"
                    : "bg-olive/10 text-olive"
                }`}
              >
                TREE
              </span>
            </button>

            {/* Tab 2: Events */}
            <button
              onClick={() => setActiveTab("events")}
              className={`font-mono text-xs sm:text-sm font-black px-4 py-2 rounded-sm border-2 transition-all flex items-center gap-2 ${
                activeTab === "events"
                  ? "bg-flame text-paper border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] -translate-y-0.5"
                  : "bg-paper text-graphite border-graphite/40 hover:border-graphite hover:text-flame"
              }`}
            >
              <span>EVENTS &amp; WORKSHOPS</span>
              <span
                className={`font-mono text-[10px] font-bold px-1.5 py-0.2 rounded ${
                  activeTab === "events"
                    ? "bg-paper text-graphite"
                    : "bg-flame/15 text-flame font-black"
                }`}
              >
                {chapter.events.length}
              </span>
            </button>

            {/* Tab 3: Projects */}
            <button
              onClick={() => setActiveTab("projects")}
              className={`font-mono text-xs sm:text-sm font-black px-4 py-2 rounded-sm border-2 transition-all flex items-center gap-2 ${
                activeTab === "projects"
                  ? "bg-flame text-paper border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] -translate-y-0.5"
                  : "bg-paper text-graphite border-graphite/40 hover:border-graphite hover:text-flame"
              }`}
            >
              <span>SHIPPED PROJECTS</span>
              <span
                className={`font-mono text-[10px] font-bold px-1.5 py-0.2 rounded ${
                  activeTab === "projects"
                    ? "bg-paper text-graphite"
                    : "bg-olive/10 text-olive"
                }`}
              >
                {chapter.projects.length}
              </span>
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-3 font-mono text-xs text-olive font-bold">
            <span>📍 {chapter.district}, Kerala</span>
          </div>
        </div>
      </div>

      {/* ─── TAB 1: LEADERSHIP & EXECOM TREE ─── */}
      {activeTab === "leadership" && (
        <div>
          {chapter.terms && chapter.terms.length > 0 ? (
            <ChapterTreeSection chapterName={chapter.name} terms={chapter.terms} />
          ) : (
            <section className="mb-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {chapter.team.map((member, i) => (
                  <div
                    key={member.name}
                    className="bg-paper p-4 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:border-flame transition-all flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-flame text-paper font-mono font-bold text-xs flex items-center justify-center border border-graphite shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-mono font-bold text-sm text-graphite truncate group-hover:text-flame transition-colors">
                        {member.name}
                      </h3>
                      <span className="font-mono text-xs text-olive block">{member.role}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Faculty Coordinator Banner */}
          {chapter.facultyCoordinator && (
            <section className="mb-14 bg-graphite text-paper rounded-sm border-4 border-graphite p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(242,100,48,1)] flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <span className="font-mono text-[10px] font-bold text-flame uppercase tracking-widest block mb-1">
                  INSTITUTIONAL ADVISORY
                </span>
                <h3 className="font-mono font-black text-xl md:text-2xl uppercase text-paper mb-1">
                  FACULTY COORDINATOR
                </h3>
                <p className="font-mono text-xs text-paper/70">
                  Supporting student-led innovation and academic association revival.
                </p>
              </div>

              <div className="bg-paper/10 border border-paper/20 rounded-sm p-4 sm:p-5 flex items-center gap-4 min-w-[300px]">
                {chapter.facultyCoordinator.image && (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-sm border-2 border-paper/40 overflow-hidden relative shrink-0 shadow-[2px_2px_0px_0px_rgba(242,100,48,1)] bg-graphite/40">
                    <img
                      src={chapter.facultyCoordinator.image}
                      alt={`${chapter.facultyCoordinator.name}, ${chapter.facultyCoordinator.designation}, ELEVATES Advisor`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h4 className="font-mono font-bold text-base sm:text-lg text-paper truncate">{chapter.facultyCoordinator.name}</h4>
                  <span className="font-mono text-xs font-bold text-flame block mt-0.5">{chapter.facultyCoordinator.designation}</span>
                  <span className="font-mono text-xs text-paper/70 block">{chapter.facultyCoordinator.department}</span>
                  <span className="font-mono text-[11px] text-paper/50 block mt-1">📍 {chapter.college}</span>
                </div>
              </div>
            </section>
          )}
        </div>
      )}

      {/* ─── TAB 2: EVENTS & WORKSHOPS (COMPACT 2-COLUMN GRID + SEARCH) ─── */}
      {activeTab === "events" && (
        <section className="mb-16">
          {/* Header & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-4 border-b-2 border-graphite/20 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-paper bg-flame px-2 py-0.5 rounded-sm">
                  TOTAL: {chapter.events.length} EVENTS
                </span>
                <span className="font-mono text-xs text-olive font-bold">
                  • {totalAttendees}+ Total Attendees
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase text-graphite tracking-tight">
                EVENTS &amp; WORKSHOPS CONDUCTED
              </h2>
            </div>

            {/* Quick Filter Search */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search events, topics, tech..."
                value={eventSearch}
                onChange={(e) => setEventSearch(e.target.value)}
                className="w-full bg-paper border-2 border-graphite rounded-sm px-3.5 py-2 font-mono text-xs text-graphite placeholder:text-olive/60 focus:outline-none focus:border-flame shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]"
              />
              {eventSearch && (
                <button
                  onClick={() => setEventSearch("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 font-mono text-xs text-olive hover:text-flame font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Compact 2-Column Grid */}
          {filteredEvents.length === 0 ? (
            <div className="p-10 text-center border-2 border-dashed border-graphite/30 rounded-sm bg-paper font-mono text-olive">
              <p className="font-bold text-sm">No events match &quot;{eventSearch}&quot;</p>
              <button
                onClick={() => setEventSearch("")}
                className="mt-2 text-xs text-flame font-bold underline"
              >
                Clear filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredEvents.map((evt, idx) => {
                const eventUrl = evt.slug ? `/events/${evt.slug}` : "/events";
                return (
                  <div
                    key={(evt.slug || evt.title) + idx}
                    className="bg-paper p-5 border-2 border-graphite rounded-sm shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:border-flame hover:shadow-[6px_6px_0px_0px_rgba(242,100,48,1)] transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs font-black text-flame">
                          📅 {evt.date}
                        </span>
                        <span className="font-mono text-[10px] font-bold text-paper bg-graphite px-2 py-0.5 rounded-sm shrink-0">
                          {evt.headcount} ATTENDEES
                        </span>
                      </div>

                      <Link href={eventUrl} className="block group-hover:text-flame transition-colors">
                        <h3 className="font-mono font-black text-base text-graphite group-hover:text-flame transition-colors mb-2 leading-snug">
                          {evt.title}
                        </h3>
                      </Link>

                      <p className="font-mono text-xs text-graphite/80 leading-relaxed line-clamp-3">
                        {evt.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-graphite/20 pt-3 mt-4 font-mono text-[11px] gap-2">
                      <span className="text-olive font-semibold truncate">📍 {chapter.college}</span>
                      <Link
                        href={eventUrl}
                        className="inline-flex items-center gap-1 font-mono text-xs font-black text-flame hover:underline shrink-0 group-hover:translate-x-0.5 transition-transform"
                      >
                        <span>VIEW EVENT</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* ─── TAB 3: SHIPPED PROJECTS (2-COLUMN CARDS) ─── */}
      {activeTab === "projects" && (
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-graphite/20 gap-4">
            <div>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-paper bg-flame px-2 py-0.5 rounded-sm inline-block mb-1">
                PRODUCTION PROOF
              </span>
              <h2 className="text-2xl md:text-3xl font-black uppercase text-graphite tracking-tight">
                PROJECTS SHIPPED AT THIS CAMPUS
              </h2>
            </div>
            <span className="font-mono text-xs font-bold text-paper bg-graphite px-3 py-1 rounded-sm shrink-0">
              {chapter.projects.length} PROJECTS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {chapter.projects.map((proj, i) => {
              const projectUrl = proj.url || (proj.slug ? `/projects/${proj.slug}` : "/projects");
              return (
                <Link
                  key={i}
                  href={projectUrl}
                  className="group bg-paper p-6 border-3 border-graphite rounded-sm shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] hover:border-flame hover:shadow-[8px_8px_0px_0px_rgba(242,100,48,1)] hover:-translate-y-1 transition-all flex flex-col justify-between relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-[10px] font-bold text-flame uppercase tracking-wider">
                        PRODUCTION SHIPPED
                      </span>
                      <span className="font-mono text-xs font-bold text-paper bg-graphite px-2 py-0.5 rounded-sm">
                        0{i + 1}
                      </span>
                    </div>

                    <h3 className="font-mono font-black text-xl text-graphite group-hover:text-flame transition-colors mb-2">
                      {proj.title}
                    </h3>
                    <p className="font-mono text-xs text-olive leading-relaxed mb-6">
                      {proj.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t-2 border-dashed border-graphite/20 pt-4">
                    <span className="font-mono text-xs font-bold text-graphite">
                      Builder: {proj.builder}
                    </span>
                    <span className="font-mono font-bold text-xs text-flame group-hover:translate-x-1 transition-transform">
                      Case Study →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
