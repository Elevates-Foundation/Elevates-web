"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── Types ───────────────────────────────────────────────────────────
interface Slide { id: number; label: string; content: React.ReactNode; }

// ─── Helpers ─────────────────────────────────────────────────────────
function Tag({ children, color = "flame" }: { children: React.ReactNode; color?: string }) {
  const cls: Record<string, string> = { flame: "bg-flame text-paper", indigo: "bg-indigo text-paper", olive: "bg-olive text-paper", graphite: "bg-graphite text-paper" };
  return <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider ${cls[color] ?? cls.flame}`}>{children}</span>;
}
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="bg-paper border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] p-3 flex flex-col gap-0.5">
      <span className="font-mono text-2xl font-black text-flame leading-none">{value}</span>
      <span className="font-mono text-[10px] text-olive uppercase tracking-wider leading-tight">{label}</span>
    </div>
  );
}
function Check({ children }: { children: React.ReactNode }) {
  return <div className="flex items-start gap-2 py-0.5"><span className="text-flame font-black font-mono text-sm mt-0.5 shrink-0">✔</span><span className="font-sans text-graphite text-sm leading-snug">{children}</span></div>;
}
// Photo placeholder for slides that need real event photos not yet available
function PhotoSlot({ label, note, className = "" }: { label: string; note?: string; className?: string }) {
  return (
    <div className={`border-2 border-dashed border-graphite/40 bg-graphite/5 flex flex-col items-center justify-center gap-1.5 relative ${className}`}>
      <span className="font-mono text-[10px] text-graphite/50 font-bold uppercase tracking-wider text-center px-2">📷 {label}</span>
      {note && <span className="font-mono text-[9px] text-graphite/40 text-center px-3 leading-tight">{note}</span>}
    </div>
  );
}

// Native 3:4 Portrait Photo Card — designed specifically for mobile/vertical event & speaker shots
function PortraitCard({
  src,
  alt,
  label,
  sublabel,
  badge,
  className = "",
}: {
  src?: string;
  alt?: string;
  label?: string;
  sublabel?: string;
  badge?: string;
  className?: string;
}) {
  return (
    <div className={`border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] bg-paper flex flex-col overflow-hidden ${className}`}>
      <div className="relative aspect-[3/4] w-full bg-graphite/5 overflow-hidden">
        {src ? (
          <Image
            src={src}
            alt={alt ?? label ?? "Elevates Event Photo"}
            fill
            className="object-cover object-center"
          />
        ) : (
          <PhotoSlot label={label ?? "Event Photo"} note={sublabel} className="h-full w-full border-0 bg-transparent" />
        )}
        {badge && (
          <div className="absolute top-2 right-2">
            <span className="font-mono text-[8px] font-bold bg-flame text-paper px-1.5 py-0.5 shadow-sm">
              {badge}
            </span>
          </div>
        )}
      </div>
      {(label || sublabel) && (
        <div className="p-2.5 bg-paper border-t-2 border-graphite flex flex-col gap-0.5">
          {label && <p className="font-black text-xs text-graphite leading-tight">{label}</p>}
          {sublabel && <p className="font-mono text-[9px] text-olive leading-tight">{sublabel}</p>}
        </div>
      )}
    </div>
  );
}

// ─── Slides ──────────────────────────────────────────────────────────
const slides: Slide[] = [
  // ── 01 COVER ────────────────────────────────────────────────────────
  {
    id: 1, label: "Cover",
    content: (
      <div className="flex flex-col md:flex-row items-center h-full gap-4 md:gap-8">
        {/* Left — text */}
        <div className="flex flex-col gap-3 md:gap-4 flex-1 min-w-0">
          <div className="bg-flame text-paper font-mono text-[11px] font-bold px-4 py-1 rotate-[-1.5deg] shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] self-start select-none">
            PITCH DECK · 2026
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase text-graphite leading-none tracking-tight">ELEVATES</h1>
            <div className="flex items-center gap-3">
              <div className="h-[3px] w-10 bg-flame" />
              <span className="font-mono text-xs text-olive uppercase tracking-widest">Chapters</span>
            </div>
          </div>
          <p className="font-black text-lg md:text-2xl text-graphite leading-tight">
            Building Kerala's Largest<br />Student Innovation Network
          </p>
          <p className="font-hand text-base md:text-lg text-olive">A proven model from Ernad Knowledge City, now expanding across campuses.</p>
          <div className="flex gap-2 flex-wrap">
            {["Student-Led", "Open Community", "Project-Driven", "Cluster-Based"].map((t, i) => (
              <Tag key={t} color={["flame", "indigo", "olive", "graphite"][i]}>{t}</Tag>
            ))}
          </div>
        </div>
        {/* Right — campus launch photo */}
        <div className="shrink-0 w-full md:w-[340px] h-[180px] sm:h-[220px] md:h-[320px] border-2 border-graphite shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] overflow-hidden relative">
          <Image src="/images/elevates-campus-launch.jpeg" alt="ELEVATES Campus Launch at EKC" fill className="object-cover object-center" priority />
          <div className="absolute bottom-0 left-0 right-0 bg-graphite/80 px-3 py-1.5">
            <p className="font-mono text-[10px] text-paper font-bold">ELEVATES Campus Launch: Eranad Knowledge City</p>
          </div>
        </div>
      </div>
    ),
  },


  // ── 02 PROBLEM ──────────────────────────────────────────────────────
  {
    id: 2, label: "Hidden Talent",
    content: (
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 h-full items-center">
        {/* Left — text */}
        <div className="flex flex-col gap-3 md:gap-4 flex-1 min-w-0">
          <Tag color="indigo">The Problem</Tag>
          <h2 className="font-black text-3xl sm:text-4xl md:text-5xl uppercase text-graphite leading-none">Every Campus Has<br /><span className="text-flame">Hidden Talent.</span></h2>
          <p className="font-hand text-base md:text-lg text-olive">Every campus has students who…</p>
          <div className="flex flex-col gap-1.5">
            {["Have skills but lack confidence.", "Build quietly but never showcase their work.", "Want to learn but don't know where to start.", "Graduate without real project experience."].map(item => (
              <div key={item} className="flex items-center gap-3 bg-indigo/5 border border-indigo/20 px-3 py-2 rounded-sm">
                <span className="text-indigo font-black text-base shrink-0">→</span>
                <p className="font-sans text-xs md:text-sm text-graphite">{item}</p>
              </div>
            ))}
          </div>
          <div className="border-t-2 border-graphite/20 pt-2">
            <p className="font-black text-lg md:text-xl text-graphite">Talent isn't rare. <span className="text-flame">Opportunity is.</span></p>
          </div>
        </div>
        {/* Right — 3 stacked student photo cards — hidden on small mobile to save space */}
        <div className="hidden sm:flex shrink-0 w-full md:w-[280px] flex-col gap-2">
          <div className="relative h-[90px] md:h-[120px] border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] overflow-hidden">
            <Image src="/images/danish-teaching-basic-web.jpeg" alt="Danish teaching web development" fill className="object-cover object-[center_18%]" />
            <div className="absolute bottom-1 left-1.5"><span className="font-mono text-[8px] font-bold bg-graphite/85 text-paper px-1.5 py-0.5">Basic Web Workshop</span></div>
          </div>
          <div className="relative h-[90px] md:h-[120px] border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] overflow-hidden">
            <Image src="/images/students-doing-iot.jpeg" alt="Students building IoT hardware" fill className="object-cover object-center" />
            <div className="absolute bottom-1 left-1.5"><span className="font-mono text-[8px] font-bold bg-graphite/85 text-paper px-1.5 py-0.5">IoT & Hardware Team</span></div>
          </div>
          <div className="relative h-[90px] md:h-[120px] border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] overflow-hidden">
            <Image src="/images/anshiq-n8n-workshop.jpeg" alt="Anshiq presenting n8n automation" fill className="object-cover object-[center_25%]" />
            <div className="absolute bottom-1 left-1.5"><span className="font-mono text-[8px] font-bold bg-graphite/85 text-paper px-1.5 py-0.5">n8n Automation Session</span></div>
          </div>
        </div>
      </div>
    ),
  },

  // ── 03 MISSION ──────────────────────────────────────────────────────
  {
    id: 3, label: "Our Mission",
    content: (
      <div className="flex flex-col gap-3 md:gap-5 h-full justify-center">
        <Tag color="flame">Our Mission</Tag>
        <h2 className="font-black text-3xl md:text-4xl uppercase text-graphite leading-none">Why Elevates Exists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {/* Left — journey diagram */}
          <div className="flex flex-col items-start gap-0">
            {[
              { label: "Hidden Talent", bg: "bg-graphite/10 border-graphite/30 text-graphite", dot: "bg-graphite/40" },
              { label: "Confidence", bg: "bg-indigo/10 border-indigo/30 text-indigo", dot: "bg-indigo" },
              { label: "Skills", bg: "bg-olive/10 border-olive/30 text-olive", dot: "bg-olive" },
              { label: "Projects", bg: "bg-flame/10 border-flame/30 text-flame", dot: "bg-flame" },
              { label: "Industry Ready", bg: "bg-graphite text-paper border-graphite", dot: "bg-paper" },
            ].map((step, i, arr) => (
              <React.Fragment key={step.label}>
                <div className={`border-2 ${step.bg} px-6 py-3 font-black text-sm w-full shadow-[3px_3px_0px_0px_rgba(45,45,52,0.2)]`}>{step.label}</div>
                {i < arr.length - 1 && <div className="flex items-center gap-2 pl-6 my-0.5"><div className={`w-2 h-2 rounded-full ${step.dot}`} /><div className="w-[2px] h-4 bg-graphite/20" /></div>}
              </React.Fragment>
            ))}
          </div>
          {/* Right — mission cards */}
          <div className="flex flex-col gap-3">
            <p className="font-hand text-lg text-graphite/50 italic">We don't create talent.</p>
            {[
              { action: "Discover it.", icon: "🔍", desc: "We find students with untapped potential hiding in every classroom." },
              { action: "Nurture it.", icon: "🌱", desc: "We build structured pathways from curiosity to craft." },
              { action: "Showcase it.", icon: "🚀", desc: "We put real work in front of the world with full name credit." },
            ].map(item => (
              <div key={item.action} className="bg-paper border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] p-3 flex items-start gap-3">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div><p className="font-black text-sm text-flame">{item.action}</p><p className="font-sans text-xs text-olive leading-snug">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // ── 04 DIFFERENTIATION ──────────────────────────────────────────────
  {
    id: 4, label: "Differentiation",
    content: (
      <div className="flex flex-col gap-3 md:gap-5 h-full justify-center">
        <Tag color="graphite">Differentiation</Tag>
        <h2 className="font-black text-2xl sm:text-3xl md:text-4xl uppercase text-graphite leading-none">What Makes Elevates Different?</h2>
        {/* Two-path visual */}
        <div className="grid grid-cols-2 gap-3">
          {/* Traditional */}
          <div>
            <div className="bg-graphite/10 border-2 border-graphite/30 px-4 py-2 text-center mb-1">
              <p className="font-black text-sm text-graphite/60 uppercase">Traditional Club</p>
            </div>
            {["Membership", "Committee", "Permissions", "Event", "Done"].map((step, i, arr) => (
              <React.Fragment key={step}>
                <div className="border border-graphite/20 bg-paper px-3 py-2 text-center rounded-sm">
                  <p className="font-mono text-xs text-graphite/50 line-through">{step}</p>
                </div>
                {i < arr.length - 1 && <div className="text-graphite/20 text-center font-black text-sm">↓</div>}
              </React.Fragment>
            ))}
          </div>
          {/* Elevates */}
          <div>
            <div className="bg-flame text-paper border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] px-4 py-2 text-center mb-1">
              <p className="font-black text-sm uppercase">ELEVATES</p>
            </div>
            {["Everyone", "Open Event", "Cluster", "Projects", "Leadership", "Next Gen"].map((step, i, arr) => (
              <React.Fragment key={step}>
                <div className={`border-2 border-flame/30 px-3 py-2 text-center rounded-sm shadow-[2px_2px_0px_0px_rgba(242,100,48,0.3)] ${step === "Cluster" ? "bg-flame text-paper" : "bg-flame/5"}`}>
                  <p className={`font-mono text-xs font-bold ${step === "Cluster" ? "text-paper" : "text-flame"}`}>{step}</p>
                </div>
                {i < arr.length - 1 && <div className="text-flame text-center font-black text-sm">↓</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // ── 05 OPEN COMMUNITY ───────────────────────────────────────────────
  {
    id: 5, label: "Open Community",
    content: (
      <div className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] border-2 border-graphite shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] overflow-hidden rounded-sm">
        <Image src="/images/elevates-campus-launch.jpeg" alt="ELEVATES open community at Campus Launch" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-graphite/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 md:gap-4 text-center px-4 sm:px-8">
          <Tag color="olive">Community Model</Tag>
          <h2 className="font-black text-2xl sm:text-4xl md:text-5xl uppercase text-paper leading-none">Everyone Is An<br /><span className="text-flame">Elevates Member.</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 md:gap-2 max-w-lg w-full mt-1">
            {["Any Department", "Any Year", "Join Anytime", "No Membership Fee", "No Prior Experience", "No Restrictions"].map(item => (
              <div key={item} className="bg-paper/10 border border-paper/30 px-2 py-1.5 backdrop-blur-sm">
                <p className="font-mono text-[10px] md:text-xs text-paper font-bold">✔ {item}</p>
              </div>
            ))}
          </div>
          <p className="font-hand text-lg sm:text-xl md:text-2xl text-flame">Innovation belongs to everyone.</p>
        </div>
      </div>
    ),
  },

  // ── 06 MULTI-DISCIPLINARY ───────────────────────────────────────────
  {
    id: 6, label: "Multi-Disciplinary",
    content: (
      <div className="flex flex-col gap-3 md:gap-4 h-full justify-center">
        <Tag color="indigo">Scope</Tag>
        <h2 className="font-black text-2xl sm:text-3xl md:text-4xl uppercase text-graphite leading-none">Technology Has <span className="text-flame">No Department</span></h2>
        <p className="font-sans text-xs md:text-sm text-graphite/70">Elevates is not just for Computer Science. We promote innovation across every discipline.</p>
        {/* Domain visual collage */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {[
            { src: "/images/digital-marketing-workshop-by-kalkus.jpeg", label: "📈 Digital Marketing", sub: "Workshop by Kalkus", pos: "object-[center_45%]" },
            { src: "/images/civil-workshop.jpeg", label: "📐 Civil & Surveying", sub: "Civil Dept Workshop", pos: "object-[center_45%]" },
            { src: "/images/students-doing-iot.jpeg", label: "🛠️ Hardware & IoT", sub: "IoT Cluster Session", pos: "object-center" },
            { src: "/images/ai-session.jpeg", label: "🤖 AI & Automation", sub: "AI Hands-on Session", pos: "object-center" },
            { src: "/images/edvin-teaching-cybersecurity.jpeg", label: "🔐 Cybersecurity", sub: "Security Workshop", pos: "object-[center_54%]" },
            { src: "/images/anshiq-n8n-workshop.jpeg", label: "⚡ Workflow Tech", sub: "n8n Automation", pos: "object-[center_20%]" },
          ].map(d => (
            <div key={d.label} className="relative h-[90px] sm:h-[100px] md:h-[120px] border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] overflow-hidden">
              <Image src={d.src} alt={d.label} fill className={`object-cover ${d.pos}`} />
              <div className="absolute inset-0 bg-graphite/35" />
              <div className="absolute bottom-1 left-1.5 right-1.5">
                <p className="font-mono text-[9px] font-bold text-paper leading-tight">{d.label}</p>
                <p className="font-mono text-[7px] text-paper/80 hidden sm:block">{d.sub}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-graphite text-paper p-2 text-center shadow-[4px_4px_0px_0px_rgba(242,100,48,1)]">
          <p className="font-black text-xs md:text-sm">Technology × <span className="text-flame">Every Discipline</span></p>
        </div>
      </div>
    ),
  },

  // ── 07 HOW ELEVATES WORKS ───────────────────────────────────────────
  {
    id: 7, label: "How It Works",
    content: (
      <div className="flex flex-col gap-3 md:gap-5 h-full justify-center">
        <div>
          <Tag color="flame">The System</Tag>
          <h2 className="font-black text-2xl sm:text-3xl md:text-4xl uppercase text-graphite leading-none mt-2">How Elevates Works</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-start md:items-center justify-between w-full">
          {/* Left timeline steps */}
          <div className="flex flex-col gap-0 w-full md:w-[440px] shrink-0">
            {[
              { step: "ALL STUDENTS", note: "Everyone on campus", highlight: false },
              { step: "OPEN EVENTS", note: "Free, open, no restrictions", highlight: false },
              { step: "HANDS-ON WORKSHOP", note: "Build real things together", highlight: false },
              { step: "CHALLENGE", note: "Test curiosity & commitment", highlight: false },
              { step: "⭐ CLUSTER", note: "Identified, focused, mentored", highlight: true },
              { step: "ADVANCED LEARNING", note: "Structured, expert-led", highlight: false },
              { step: "PROJECTS", note: "Real platforms, real users", highlight: false },
              { step: "LEADERSHIP", note: "Become the next guide", highlight: false },
              { step: "INDUSTRY READY", note: "Portfolio · Skills · Network", highlight: false, last: true },
            ].map((item, i, arr) => (
              <React.Fragment key={item.step}>
                <div className={`flex items-center gap-2 ${item.highlight ? "" : "opacity-90"}`}>
                  <div className={`font-mono text-[10px] md:text-xs font-bold px-2.5 md:px-3.5 py-1 md:py-1.5 border-2 border-graphite w-[150px] md:w-[180px] shrink-0 ${item.highlight ? "bg-flame text-paper shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]" : item.last ? "bg-graphite text-paper" : "bg-paper text-graphite"}`}>
                    {item.step}
                  </div>
                  <span className="font-mono text-[9px] md:text-[10px] text-olive font-medium hidden sm:block">{item.note}</span>
                </div>
                {i < arr.length - 1 && <div className={`font-black text-xs ml-3 leading-none my-0.5 ${item.highlight ? "text-flame" : "text-graphite/30"}`}>↓</div>}
              </React.Fragment>
            ))}
          </div>

          {/* Right callout cards — hidden on mobile to avoid overflow */}
          <div className="hidden md:flex w-full md:w-[280px] shrink-0 flex-col gap-3">
            <div className="bg-flame/10 border-l-4 border-flame p-3.5 shadow-[2px_2px_0px_0px_rgba(242,100,48,0.2)]">
              <p className="font-black text-sm text-flame uppercase">The Turning Point</p>
              <p className="font-mono text-[10px] text-graphite mt-1 leading-relaxed">Open attendance transitions into focused mentorship.</p>
            </div>
            <div className="bg-graphite text-paper border-2 border-graphite p-3.5 shadow-[4px_4px_0px_0px_rgba(242,100,48,1)]">
              <p className="font-mono text-[10px] text-paper/60 uppercase font-bold mb-1">Core Rule</p>
              <p className="font-sans text-xs font-bold text-paper">Events are open.<br /><span className="text-flame font-black">Clusters are earned.</span></p>
            </div>
            <div className="bg-olive/10 border-l-4 border-olive p-3.5">
              <p className="font-mono text-[10px] text-graphite">Students progress from passive learners to real project builders.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ── 08 WHY CLUSTERS MATTER ──────────────────────────────────────────
  {
    id: 8, label: "Why Clusters Matter",
    content: (
      <div className="flex flex-col gap-3 md:gap-4 h-full justify-center">
        <div>
          <Tag color="indigo">Secret Operating Engine</Tag>
          <h2 className="font-black text-2xl sm:text-3xl md:text-4xl uppercase text-graphite leading-none mt-2">Why Clusters Matter</h2>
          <p className="font-hand text-base md:text-lg text-olive mt-1">Turning open workshop attendees into lifelong builders & mentors.</p>
        </div>

        {/* 4-Stage Operating Model Flow */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
          {[
            { step: "01. OPEN WORKSHOPS", action: "Attract Students", desc: "Open to all, zero restrictions. Finds curious minds across all departments.", color: "border-graphite bg-paper" },
            { step: "02. ELEVATES CLUSTERS", action: "Identify Committed Learners", desc: "Recognizes consistency, curiosity & problem solving through mini challenges.", color: "border-flame bg-flame/10" },
            { step: "03. REAL PROJECTS", action: "Create Production Builders", desc: "Mentored clusters build deployed campus platforms & open source code.", color: "border-indigo bg-indigo/10" },
            { step: "04. STUDENT LEADERSHIP", action: "Build Future Mentors", desc: "Experienced builders step up to lead events & mentor the next generation.", color: "border-graphite bg-graphite text-paper" },
          ].map((card) => (
            <div key={card.step} className={`border-2 p-2.5 md:p-3.5 flex flex-col justify-between gap-1.5 shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] rounded-sm ${card.color}`}>
              <div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider opacity-70">{card.step}</span>
                <p className="font-black text-xs md:text-sm leading-tight mt-1">{card.action}</p>
              </div>
              <p className="font-mono text-[9px] opacity-80 leading-relaxed hidden sm:block">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-graphite text-paper p-2.5 md:p-3.5 border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(242,100,48,1)]">
          <p className="font-mono text-[10px] md:text-xs text-paper font-bold">
            💡 <span className="text-flame">The Key Difference:</span> Without Clusters, workshops are just one-off events. Clusters turn passive curiosity into a self-sustaining innovation ecosystem.
          </p>
        </div>
      </div>
    ),
  },

  // ── 09 CLUSTER SYSTEM ───────────────────────────────────────────────
  {
    id: 9, label: "Cluster System",
    content: (
      <div className="flex flex-col md:flex-row gap-5 h-full items-center">
        {/* Left — 2 side-by-side vertical 3:4 portrait cards */}
        <div className="shrink-0 w-full md:w-[320px] grid grid-cols-2 gap-2.5">
          <PortraitCard
            src="/images/ai-session.jpeg"
            alt="Large Elevates workshop"
            label="Open Workshop"
            sublabel="100+ Students"
          />
          <PortraitCard
            src="/images/naval-teaching-iot.png"
            alt="Focused Cluster Group: Naval teaching IoT"
            label="Cluster Session"
            sublabel="Focused Mentorship"
            badge="CLUSTER"
          />
        </div>
        {/* Right — funnel diagram */}
        <div className="flex flex-col flex-1 gap-3">
          <Tag color="flame">Secret Sauce</Tag>
          <h2 className="font-black text-3xl uppercase text-graphite leading-none">The Cluster System</h2>
          
          <div className="flex flex-col gap-2">
            {[
              { title: "Every Workshop is Open", desc: "Everyone participates without restriction or prior prerequisites." },
              { title: "Identify Four Core Traits", desc: "We track Curiosity, Commitment, Consistency, and Problem Solving." },
              { title: "Enter the Elevates Cluster", desc: "Selected students unlock advanced mentorship, projects, and leadership roles." },
            ].map(item => (
              <div key={item.title} className="bg-paper border-2 border-graphite p-3 shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]">
                <p className="font-black text-xs text-graphite">{item.title}</p>
                <p className="font-mono text-[10px] text-olive mt-0.5">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-indigo/10 border-l-4 border-indigo p-3">
            <p className="font-mono text-xs text-graphite">
              <span className="font-bold text-indigo">Second Chance Rule:</span> Students not initially selected can complete a challenge and still enter the Cluster. No hidden talent should be left behind.
            </p>
          </div>
        </div>
      </div>
    ),
  },

  // ── 10 FROM LEARNING TO BUILDING (Project Showcase) ─────────────────
  {
    id: 10, label: "Projects",
    content: (
      <div className="flex flex-col gap-3.5 h-full justify-center">
        <Tag color="flame">Proof of Work</Tag>
        <h2 className="font-black text-2xl md:text-3xl uppercase text-graphite leading-none">
          We Don't Just Teach Technology. <span className="text-flame">We Build With It.</span>
        </h2>

        {/* 3 Showcase Cards — Real Students Building + Deployed Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {/* Card 1: Real Students Building Vibranium */}
          <div className="border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(242,100,48,1)] bg-paper overflow-hidden flex flex-col">
            <div className="relative h-[135px] md:h-[150px] w-full bg-graphite/5 overflow-hidden">
              <Image
                src="/images/building-vibranium.jpeg"
                alt="Students building Vibranium platform"
                fill
                className="object-cover object-center"
              />
              <div className="absolute top-2 left-2">
                <span className="font-mono text-[8px] font-bold bg-flame text-paper px-2 py-0.5 shadow-sm">
                  REAL WORKSHOP
                </span>
              </div>
            </div>
            <div className="px-2.5 py-1.5 bg-graphite text-paper flex items-center justify-between border-t-2 border-graphite">
              <div>
                <p className="font-black text-xs text-paper">BUILDING VIBRANIUM</p>
                <p className="font-mono text-[8px] text-paper/70">Students coding the engine</p>
              </div>
            </div>
          </div>

          {/* Card 2: Vibranium Platform */}
          <div className="border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] bg-paper overflow-hidden flex flex-col">
            <div className="relative h-[135px] md:h-[150px] w-full bg-graphite/95 overflow-hidden">
              <Image
                src="/projects/vibranium/organizer-dashboard.png"
                alt="Vibranium Tech Fest Platform"
                fill
                className="object-contain"
              />
              <div className="absolute top-2 right-2">
                <span className="font-mono text-[8px] font-bold bg-flame text-paper px-2 py-0.5 shadow-sm">
                  400K+ REQS
                </span>
              </div>
            </div>
            <div className="px-2.5 py-1.5 bg-graphite text-paper flex items-center justify-between border-t-2 border-graphite">
              <div>
                <p className="font-black text-xs text-paper">VIBRANIUM SYSTEM</p>
                <p className="font-mono text-[8px] text-paper/70">Tech Fest Engine</p>
              </div>
            </div>
          </div>

          {/* Card 3: Aaroh Platform */}
          <div className="border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] bg-paper overflow-hidden flex flex-col">
            <div className="relative h-[135px] md:h-[150px] w-full bg-graphite/95 overflow-hidden">
              <Image
                src="/projects/aaroh/dashboard-overview.png"
                alt="Aaroh Arts Fest Platform"
                fill
                className="object-contain"
              />
              <div className="absolute top-2 right-2">
                <span className="font-mono text-[8px] font-bold bg-indigo text-paper px-2 py-0.5 shadow-sm">
                  ARTS FEST
                </span>
              </div>
            </div>
            <div className="px-2.5 py-1.5 bg-graphite text-paper flex items-center justify-between border-t-2 border-graphite">
              <div>
                <p className="font-black text-xs text-paper">AAROH PLATFORM</p>
                <p className="font-mono text-[8px] text-paper/70">Arts Fest Engine</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Platform Pills */}
        <div className="flex flex-wrap gap-2 items-center justify-between bg-graphite/5 border-2 border-graphite p-2.5">
          <span className="font-mono text-[9px] font-bold text-graphite uppercase">Deployed Platforms:</span>
          <div className="flex flex-wrap gap-1.5">
            {["Vibranium Tech Fest", "Aaroh Arts Fest", "Sports Management System", "Elevates Platform"].map(p => (
              <span key={p} className="font-mono text-[9px] font-bold bg-paper border border-graphite px-2 py-0.5 text-graphite shadow-[2px_2px_0px_0px_rgba(45,45,52,1)]">
                ✔ {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // ── 11 STARTED AT EKC ───────────────────────────────────────────────
  {
    id: 11, label: "Started at EKC",
    content: (
      <div className="flex flex-col md:flex-row gap-5 h-full items-center">
        {/* Left — campus photo + timeline */}
        <div className="shrink-0 w-full md:w-[280px] flex flex-col gap-2">
          <div className="relative h-[180px] md:h-[220px] border-2 border-graphite shadow-[6px_6px_0px_0px_rgba(242,100,48,1)] overflow-hidden">
            <Image src="/images/founding-team.jpeg" alt="ELEVATES Founding Team at Ernad Knowledge City" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-graphite/30" />
            <div className="absolute bottom-0 left-0 right-0 bg-graphite/85 px-3 py-2">
              <p className="font-black text-[10px] text-paper">ERNAD KNOWLEDGE CITY</p>
              <p className="font-mono text-[9px] text-paper/70">Founding Team · Manjeri, Malappuram</p>
            </div>
          </div>
          {/* Timeline */}
          <div className="bg-graphite text-paper p-3 shadow-[4px_4px_0px_0px_rgba(242,100,48,1)]">
            <p className="font-mono text-[9px] text-paper/60 uppercase mb-1">Timeline</p>
            {["ELEVATES Founded", "→ First Workshop", "→ Cluster System Built", "→ 13+ Events", "→ Exec Selection", "→ Next Generation"].map(step => (
              <p key={step} className={`font-mono text-[9px] ${step.startsWith("→") ? "text-paper/70 pl-2" : "text-flame font-bold"}`}>{step}</p>
            ))}
          </div>
        </div>
        {/* Right — stats + narrative */}
        <div className="flex flex-col gap-3 flex-1">
          <Tag color="olive">Origin Story</Tag>
          <h2 className="font-black text-3xl uppercase text-graphite leading-none">Elevates Isn't An Idea.<br /><span className="text-flame">It Already Happened.</span></h2>
          <p className="font-hand text-base text-olive">8 months. One campus. A student-led initiative that became one of EKC's most active innovation communities.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[{ value: "13+", label: "Events" }, { value: "8 mo", label: "To Scale" }, { value: "350+", label: "New Admissions" }, { value: "126", label: "Exec Applications" }, { value: "30", label: "Exec Members" }, { value: "2", label: "Independent Events by New Team" }].map(s => <Stat key={s.label} value={s.value} label={s.label} />)}
          </div>
          <div className="bg-olive/10 border-l-4 border-olive p-3">
            <p className="font-sans text-xs text-graphite italic">"Look what happened at EKC. Now imagine this at your campus."</p>
          </div>
        </div>
      </div>
    ),
  },

  // ── 12 REAL IMPACT (Scale & Performance Proof) ─────────────────────
  {
    id: 12, label: "Real Impact",
    content: (
      <div className="flex flex-col gap-3.5 h-full justify-center">
        <Tag color="flame">Scale & Performance Proof</Tag>
        <h2 className="font-black text-2xl md:text-3xl uppercase text-graphite leading-none">
          400,000+ Requests. <span className="text-flame">Built In 5 Days.</span>
        </h2>

        {/* Scale Proof Layout — Left Hero Metric + Right Stats Grid */}
        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {/* Left — Vibranium Big Scale Hero */}
          <div className="flex-1 border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(242,100,48,1)] bg-graphite text-paper p-3 flex flex-col justify-between overflow-hidden relative">
            <div className="flex justify-between items-start z-10">
              <div>
                <p className="font-mono text-[10px] text-flame font-bold uppercase tracking-wider">VIBRANIUM TECH FEST</p>
                <p className="font-black text-xl text-paper mt-0.5">Campus Platform Scale</p>
              </div>
              <span className="font-mono text-[9px] font-bold bg-flame text-paper px-2 py-0.5">REAL METRICS</span>
            </div>

            {/* Giant Stat Display */}
            <div className="my-2 z-10">
              <p className="font-black text-4xl md:text-5xl text-flame leading-none drop-shadow-md">400,000+</p>
              <p className="font-mono text-[10px] text-paper/80 mt-0.5 uppercase tracking-widest font-bold">API Requests Handled in 24 Hours</p>
            </div>

            {/* Analytics screenshot snippet — Compact uncropped view */}
            <div className="relative h-[120px] md:h-[135px] w-full border border-paper/20 rounded-sm overflow-hidden bg-black/80 z-10 my-1">
              <Image
                src="/projects/vibranium/coordinator-analytics.png"
                alt="Vibranium real-time analytics"
                fill
                className="object-contain"
              />
            </div>

            <div className="bg-paper/10 border border-paper/20 p-1.5 text-center z-10">
              <p className="font-mono text-[10px] text-paper font-bold">✔ Zero Agency Fees · 100% Student Built · Zero Downtime</p>
            </div>
          </div>

          {/* Right — 3 Proof Cards */}
          <div className="w-full md:w-[300px] shrink-0 flex flex-col gap-2.5 justify-between">
            <div className="border-2 border-graphite bg-paper p-2.5 shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] flex flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <span className="font-black text-xs text-flame uppercase">⏱️ Speed & Agility</span>
                <span className="font-mono text-[8px] font-bold bg-flame/10 text-flame px-1.5 py-0.5">5 DAYS</span>
              </div>
              <p className="font-sans text-xs font-bold text-graphite">Built from scratch to deployment</p>
              <p className="font-mono text-[9px] text-olive leading-tight">Complete event registry, entry passes, and volunteer QR scanners built in under a week.</p>
            </div>

            <div className="border-2 border-graphite bg-paper p-2.5 shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] flex flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <span className="font-black text-xs text-indigo uppercase">🎭 Aaroh Arts Fest</span>
                <span className="font-mono text-[8px] font-bold bg-indigo/10 text-indigo px-1.5 py-0.5">100+ EVENTS</span>
              </div>
              <p className="font-sans text-xs font-bold text-graphite">Real-time Arts Fest Scoring</p>
              <p className="font-mono text-[9px] text-olive leading-tight">Instant result tabulation, judge scoring panels, and live campus leaderboard feeds.</p>
            </div>

            <div className="border-2 border-graphite bg-paper p-2.5 shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] flex flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <span className="font-black text-xs text-graphite uppercase">🏆 Sports & Launch</span>
                <span className="font-mono text-[8px] font-bold bg-graphite/10 text-graphite px-1.5 py-0.5">PAPERLESS</span>
              </div>
              <p className="font-sans text-xs font-bold text-graphite">Entire Campus Digitized</p>
              <p className="font-mono text-[9px] text-olive leading-tight">Replaced physical tokens with digital entry passes and instant smartphone verification.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 13, label: "Leadership Pipeline",
    content: (
      <div className="flex flex-col md:flex-row gap-5 h-full items-center">
        {/* Left — funnel */}
        <div className="flex flex-col gap-0 flex-1">
          <Tag color="indigo">Leadership</Tag>
          <h2 className="font-black text-3xl uppercase text-graphite leading-none mt-2">Building Leaders, <span className="text-flame">Not Just Events</span></h2>
          {/* Funnel */}
          <div className="flex flex-col items-center mt-3 gap-0">
            {[
              { label: "126 Applications", w: "w-full", bg: "bg-graphite/10 border-graphite/30 text-graphite" },
              { label: "80 Shortlisted", w: "w-4/5", bg: "bg-indigo/10 border-indigo/30 text-indigo" },
              { label: "30 Selected", w: "w-3/5", bg: "bg-flame/10 border-flame/30 text-flame" },
              { label: "Executive Team", w: "w-2/5", bg: "bg-flame text-paper border-flame" },
            ].map((tier, i, arr) => (
              <React.Fragment key={tier.label}>
                <div className={`${tier.w} border-2 ${tier.bg} px-4 py-2.5 text-center font-black text-sm shadow-[2px_2px_0px_0px_rgba(45,45,52,0.2)]`}>{tier.label}</div>
                {i < arr.length - 1 && <div className="text-graphite/30 font-black text-sm text-center">▼</div>}
              </React.Fragment>
            ))}
          </div>
          <div className="bg-indigo/10 border-l-4 border-indigo p-3 mt-3">
            <p className="font-sans text-xs text-graphite"><strong>Succession Proof:</strong> New Executive Team already independently conducted 2 successful events. Elevates continues beyond its founding team.</p>
          </div>
        </div>
        {/* Right — selection proof + new team photo */}
        <div className="shrink-0 w-full md:w-[270px] flex flex-col gap-2">
          <div className="relative h-[130px] border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] overflow-hidden">
            <Image src="/images/elevates-selection.jpeg" alt="126+ Executive Applications proof" fill className="object-cover object-top" />
            <div className="absolute bottom-0 left-0 right-0 bg-graphite/85 px-2 py-1"><p className="font-mono text-[9px] text-paper font-bold">Selection Proof · 126+ Registrations</p></div>
          </div>
          <div className="relative h-[140px] border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] overflow-hidden">
            <Image src="/images/new-execom-team.jpeg" alt="2026-27 Executive Team conducting events" fill className="object-cover object-center" />
            <div className="absolute bottom-0 left-0 right-0 bg-graphite/85 px-2 py-1"><p className="font-mono text-[9px] text-paper font-bold">2026-27 Executive Team (Independent)</p></div>
          </div>
        </div>
      </div>
    ),
  },

  // ── 14 INDUSTRY ─────────────────────────────────────────────────────
  {
    id: 14, label: "Industry Sessions",
    content: (
      <div className="flex flex-col gap-4 h-full justify-center">
        <Tag color="graphite">Industry Exposure</Tag>
        <h2 className="font-black text-3xl uppercase text-graphite leading-none">Learning Beyond <span className="text-flame">The Classroom</span></h2>
        <p className="font-sans text-sm text-graphite/70">Students learn directly from industry professionals and ecosystem leaders at Elevates events through real sessions and live interaction.</p>

        {/* 4 Portrait Cards Grid (3:4 ratio for phone/portrait shots) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <PortraitCard
            src="/guests/jobin-brototype.jpeg"
            alt="Jobin speaking at ELEVATES Vibe Coding Workshop"
            label="Jobin · Brototype"
            sublabel="Vibe Coding Workshop"
            badge="REAL SESSION"
          />
          <PortraitCard
            src="/guests/shiju-roy.jpeg"
            alt="Shiju Roy speaking at an ELEVATES session"
            label="Shiju Roy"
            sublabel="LinkedIn Top Voice · Speaker"
            badge="REAL SESSION"
          />
          <PortraitCard
            src="/guests/shibili-rahman-kp-campus-launch.jpeg"
            alt="Shibili Rahman KP speaking at ELEVATES session"
            label="Shibili Rahman KP"
            sublabel="Founder & Chairman, RAC GLOBAL"
            badge="CHIEF GUEST"
          />
          <PortraitCard
            src="/guests/mehar-mp-tinkerhub.jpeg"
            alt="Mehar MP speaking at ELEVATES event"
            label="Mehar MP"
            sublabel="Co-founder & CEO, TinkerHub"
            badge="CHIEF GUEST"
          />
        </div>
      </div>
    ),
  },



  // ── 15 INSTITUTIONAL IMPACT ─────────────────────────────────────────
  {
    id: 15, label: "Institutional Impact",
    content: (
      <div className="flex flex-col md:flex-row gap-5 h-full items-center">
        {/* Left — magazine feature + annual feedback screenshot */}
        <div className="shrink-0 w-full md:w-[320px] flex flex-col gap-2.5">
          <div className="border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(242,100,48,1)] overflow-hidden bg-graphite flex flex-col rounded-sm">
            <div className="relative h-[125px] w-full overflow-hidden">
              <Image src="/images/college-magazine.jpeg" alt="EKC College Magazine Feature of ELEVATES" fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-graphite/50" />
              <div className="absolute top-2 left-2">
                <span className="font-mono text-[8px] font-bold bg-flame text-paper px-2 py-0.5 shadow-sm">
                  EKC MAGAZINE FEATURE
                </span>
              </div>
            </div>
            <div className="p-3 bg-graphite text-paper flex flex-col gap-1 border-t-2 border-graphite">
              <p className="font-mono text-[9px] text-flame font-bold uppercase tracking-wider">EKC Admissions · During Same Period</p>
              <p className="font-black text-2xl text-paper leading-none">350+ <span className="text-xs font-normal text-paper/80">New admissions welcomed</span></p>
              <p className="font-mono text-[9px] text-paper/70 leading-snug mt-1">
                Many factors contribute to admissions. Elevates has helped strengthen the institution's student engagement, innovation culture, and campus visibility.
              </p>
            </div>
          </div>
          <div className="relative h-[95px] border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] overflow-hidden bg-graphite/5 rounded-sm">
            <Image src="/images/screenshot-of elevates-annual-feedback.png" alt="Annual Elevates Feedback Screenshot" fill className="object-contain" />
            <div className="absolute bottom-0 left-0 right-0 bg-graphite/90 px-2 py-0.5"><p className="font-mono text-[8px] text-paper font-bold">Verified Student Feedback Proof</p></div>
          </div>
        </div>
        {/* Right — impact list */}
        <div className="flex flex-col gap-3 flex-1">
          <Tag color="olive">Institutional Impact</Tag>
          <h2 className="font-black text-3xl uppercase text-graphite leading-none">What Elevates Does <span className="text-flame">For Institutions</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              { icon: "🔥", label: "Innovation Culture", "desc": "Students build real things, not just attend classes" },
              { icon: "📈", label: "Engagement", "desc": "Consistent participation across departments" },
              { icon: "👑", label: "Student Leadership", "desc": "Students run the community, not faculty" },
              { icon: "🤝", label: "Industry Interaction", "desc": "Real sessions with real professionals" },
              { icon: "🌐", label: "Campus Visibility", "desc": "Student-built platforms showcase the college" },
              { icon: "💼", label: "Career Readiness", "desc": "Portfolio, projects, GitHub contributions" },
            ].map(item => (
              <div key={item.label} className="bg-paper border-2 border-graphite shadow-[2px_2px_0px_0px_rgba(45,45,52,1)] px-3 py-2 flex items-start gap-2">
                <span className="text-lg shrink-0">{item.icon}</span>
                <div><p className="font-black text-xs text-graphite">{item.label}</p><p className="font-mono text-[9px] text-olive leading-tight">{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  // ── 16 STUDENT LEADERSHIP MODEL ─────────────────────────────────────
  {
    id: 16, label: "Leadership Model",
    content: (
      <div className="flex flex-col md:flex-row gap-5 h-full items-center">
        {/* Left — centered selection process flow */}
        <div className="flex flex-col gap-3 flex-1 items-start">
          <Tag color="flame">Leadership Model</Tag>
          <h2 className="font-black text-3xl uppercase text-graphite leading-none">Students Don't Just Participate. <span className="text-flame">They Lead.</span></h2>

          {/* Centered selection process steps */}
          <div className="flex flex-col items-center justify-center gap-1 w-full my-1">
            {["Application", "↓ Screening", "↓ Interview", "↓ Executive Team", "↓ Lead Events", "↓ Mentor Clusters", "↓ Handover to Next"].map((step, i) => (
              <div
                key={step}
                className={`font-mono text-xs font-bold px-4 py-1.5 w-full max-w-[240px] text-center rounded-sm ${i === 0
                  ? "bg-flame text-paper border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]"
                  : i === 6
                    ? "bg-graphite text-paper border-2 border-graphite shadow-[2px_2px_0px_0px_rgba(45,45,52,1)]"
                    : "bg-paper border border-graphite/40 text-graphite"
                  }`}
              >
                {step}
              </div>
            ))}
          </div>
          <div className="bg-olive/10 border-l-4 border-olive p-2.5 w-full">
            <p className="font-sans text-xs text-graphite"><strong>Every batch prepares the next.</strong> The 2026-27 team was trained by the 2025-26 founding team.</p>
          </div>
        </div>
        {/* Right — uncropped photos */}
        <div className="shrink-0 w-full md:w-[290px] flex flex-col gap-3">
          <div className="relative h-[150px] border-2 border-graphite shadow-[5px_5px_0px_0px_rgba(242,100,48,1)] overflow-hidden bg-graphite/90">
            <Image
              src="/images/elevates-interview.jpeg"
              alt="Elevates Executive Selection & Interview Process"
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-graphite/90 px-2 py-1 font-mono text-[9px] text-paper font-bold border-t border-graphite/40">
              Interview & Executive Selection
            </div>
          </div>
          <div className="relative h-[140px] border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] overflow-hidden">
            <Image src="/images/new-execom-team.jpeg" alt="2026-27 Executive Team" fill className="object-cover object-center" />
            <div className="absolute bottom-0 left-0 right-0 bg-graphite/85 px-2 py-1 font-mono text-[9px] text-paper font-bold">2026-27 Executive Team</div>
          </div>
        </div>
      </div>
    ),
  },

  // ── 17 CHAPTER STRUCTURE ────────────────────────────────────────────
  {
    id: 17, label: "Chapter Structure",
    content: (
      <div className="flex flex-col gap-5 h-full justify-center">
        <Tag color="flame">Structure</Tag>
        <h2 className="font-black text-3xl uppercase text-graphite leading-none">Campus Chapter Structure</h2>
        <div className="flex flex-col md:flex-row gap-5 items-start">
          {/* Org chart */}
          <div className="flex flex-col items-center gap-0 flex-1">
            {[
              { label: "🏛️  ELEVATES HQ", bg: "bg-graphite text-paper", shadow: "shadow-[4px_4px_0px_0px_rgba(242,100,48,1)]", w: "w-[280px]" },
              { label: "⚡  CAMPUS EXECUTIVE TEAM", bg: "bg-flame text-paper", shadow: "shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]", w: "w-[280px]" },
              { label: "👥  CLASS-WISE REPRESENTATIVES", bg: "bg-indigo text-paper", shadow: "shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]", w: "w-[280px]" },
              { label: "🎓  ALL STUDENTS", bg: "bg-paper text-graphite border-2 border-graphite", shadow: "shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]", w: "w-[280px]" },
            ].map((node, i, arr) => (
              <React.Fragment key={node.label}>
                <div className={`${node.bg} ${node.shadow} ${node.w} px-5 py-3 font-black text-sm text-center`}>{node.label}</div>
                {i < arr.length - 1 && <div className="w-[2px] h-5 bg-graphite/30" />}
              </React.Fragment>
            ))}
            {/* Faculty optional */}
            <div className="mt-3 border-2 border-dashed border-olive/60 bg-olive/5 px-5 py-2 font-mono text-[11px] text-olive text-center w-[280px]">
              📋  FACULTY COORDINATOR: <span className="font-bold">OPTIONAL</span>
            </div>
          </div>
          {/* Key points */}
          <div className="flex flex-col gap-3 w-full md:w-[220px]">
            <div className="bg-flame/10 border-l-4 border-flame p-3">
              <p className="font-black text-sm text-flame">Student leadership is essential.</p>
              <p className="font-mono text-[10px] text-graphite mt-1">The community runs because students run it, not because faculty manage it.</p>
            </div>
            <div className="bg-olive/10 border-l-4 border-olive p-3">
              <p className="font-black text-sm text-olive">Faculty is optional.</p>
              <p className="font-mono text-[10px] text-graphite mt-1">A faculty coordinator can support, but cannot replace student ownership.</p>
            </div>
            <div className="bg-indigo/10 border-l-4 border-indigo p-3">
              <p className="font-black text-sm text-indigo">Every class is represented.</p>
              <p className="font-mono text-[10px] text-graphite mt-1">Class-wise reps ensure no department or year is left behind.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ── 18 WHY THIS MODEL WORKS ─────────────────────────────────────────
  {
    id: 18, label: "Why It Works",
    content: (
      <div className="flex flex-col gap-4 h-full justify-center">
        <Tag color="graphite">Comparison</Tag>
        <h2 className="font-black text-3xl md:text-4xl uppercase text-graphite leading-none">Why This Model Works</h2>

        {/* Spacious 2-Column Comparison with Exact Matched Heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch w-full">
          {/* Traditional */}
          <div className="border-2 border-graphite bg-paper p-4 flex flex-col justify-between shadow-[5px_5px_0px_0px_rgba(45,45,52,1)] h-full">
            <div className="bg-graphite/20 border-2 border-graphite px-4 py-2.5 text-center">
              <p className="font-black text-base text-graphite/70 uppercase">Traditional College Club</p>
            </div>
            <div className="flex flex-col gap-2 my-2">
              {["Membership Fee Required", "Faculty-Heavy Approvals", "Infrequent One-off Events", "No Continuity / Single Term", "Zero Production Code Built"].map((step) => (
                <div key={step} className="border-2 border-graphite/30 bg-graphite/5 px-3.5 py-2.5 rounded-sm">
                  <p className="font-mono text-xs text-graphite/70 font-bold text-center">❌ {step}</p>
                </div>
              ))}
            </div>
            <div className="bg-graphite/10 border border-graphite/30 p-2 text-center">
              <p className="font-mono text-xs text-graphite/60 font-bold uppercase">Closed · Hierarchical · Inactive</p>
            </div>
          </div>

          {/* Elevates */}
          <div className="border-2 border-graphite bg-paper p-4 flex flex-col justify-between shadow-[5px_5px_0px_0px_rgba(242,100,48,1)] h-full">
            <div className="bg-flame text-paper border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] px-4 py-2.5 text-center">
              <p className="font-black text-base uppercase">ELEVATES CHAPTER MODEL</p>
            </div>
            <div className="flex flex-col gap-2 my-2">
              {["100% Free & Open To All", "Student-Led Autonomy", "Cluster Mentorship System", "Real Production Platforms", "Self-Sustaining Next Gen"].map((step, i) => (
                <div key={step} className={`border-2 px-3.5 py-2.5 rounded-sm ${i === 2 ? "bg-flame text-paper border-flame shadow-[2px_2px_0px_0px_rgba(45,45,52,1)]" : "border-graphite bg-paper text-graphite"}`}>
                  <p className={`font-mono text-xs font-bold text-center ${i === 2 ? "text-paper" : "text-graphite"}`}>✔ {step}</p>
                </div>
              ))}
            </div>
            <div className="bg-flame/10 border border-flame/30 p-2 text-center">
              <p className="font-mono text-xs text-flame font-black uppercase">Open · Scalable · Self-sustaining</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },

  // ── 19 STUDENT BENEFITS ─────────────────────────────────────────────
  {
    id: 19, label: "Student Benefits",
    content: (
      <div className="flex flex-col md:flex-row gap-6 h-full items-center justify-center">
        {/* Left — Large Impact Poster */}
        <div className="shrink-0 w-full md:w-[320px]">
          <div className="relative h-[280px] md:h-[340px] border-2 border-graphite shadow-[8px_8px_0px_0px_rgba(242,100,48,1)] overflow-hidden">
            <Image src="/images/students-doing-iot.jpeg" alt="Students building IoT projects" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-graphite/45" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center">
              {["BUILD", "LEAD", "NETWORK", "SHOWCASE"].map((w, i) => (
                <span key={w} className={`font-black text-2xl md:text-3xl text-paper drop-shadow-xl tracking-widest ${i === 0 ? "text-flame" : ""}`}>{w}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Spacious Benefit Cards */}
        <div className="flex flex-col gap-3.5 flex-1 w-full">
          <Tag color="indigo">For Students</Tag>
          <h2 className="font-black text-3xl md:text-5xl uppercase text-graphite leading-none">What Students Gain</h2>
          <p className="font-hand text-lg text-olive">Real skills. Real projects. Real career proof.</p>

          {/* 10 Large Neo-Brutalist Skill Cards */}
          <div className="grid grid-cols-2 gap-2.5">
            {[
              { label: "Practical Skills", icon: "⚡", color: "bg-flame text-paper border-flame" },
              { label: "Project Portfolio", icon: "💼", color: "bg-indigo text-paper border-indigo" },
              { label: "Real Platforms", icon: "🚀", color: "bg-olive text-paper border-olive" },
              { label: "GitHub Contributions", icon: "💻", color: "bg-graphite text-paper border-graphite" },
              { label: "Leadership Experience", icon: "👑", color: "bg-paper text-graphite border-graphite" },
              { label: "Industry Exposure", icon: "🤝", color: "bg-flame/10 text-graphite border-flame" },
              { label: "Communication", icon: "🗣️", color: "bg-indigo/10 text-graphite border-indigo" },
              { label: "Professional Network", icon: "🌐", color: "bg-olive/10 text-graphite border-olive" },
              { label: "Startup Mindset", icon: "💡", color: "bg-paper text-graphite border-graphite" },
              { label: "Career Readiness", icon: "🏆", color: "bg-flame text-paper border-flame" },
            ].map((item) => (
              <div key={item.label} className={`font-mono text-xs font-bold px-3.5 py-2.5 border-2 rounded-sm shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] flex items-center gap-2 ${item.color}`}>
                <span className="text-sm shrink-0">{item.icon}</span>
                <span className="truncate">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="bg-graphite text-paper p-3.5 shadow-[4px_4px_0px_0px_rgba(242,100,48,1)] border-2 border-graphite mt-1">
            <p className="font-mono text-xs text-paper">Confidence · Career · Community: Students graduate with <span className="text-flame font-black uppercase">real proof</span>, not just a certificate.</p>
          </div>
        </div>
      </div>
    ),
  },

  // ── 20 INSTITUTION BENEFITS ─────────────────────────────────────────
  {
    id: 20, label: "Institution Benefits",
    content: (
      <div className="flex flex-col gap-4 h-full justify-center">
        <div>
          <Tag color="olive">For Institutions</Tag>
          <h2 className="font-black text-3xl md:text-4xl uppercase text-graphite leading-none mt-2">What Institutions Gain</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 w-full">
          {[
            { icon: "🔥", label: "Innovation Culture", desc: "Students build real software, not just attend classes" },
            { icon: "📈", label: "Active Engagement", desc: "Consistent cross-department participation" },
            { icon: "👑", label: "Student Leadership", desc: "Self-sustaining, student-managed community" },
            { icon: "🤝", label: "Industry Interaction", desc: "Direct access to tech founders & leaders" },
            { icon: "🌐", label: "Campus Visibility", desc: "Student platforms showcased state-wide" },
            { icon: "💼", label: "Career Readiness", desc: "Verifiable GitHub portfolios & projects" },
            { icon: "🏆", label: "OBE Outcomes", desc: "Measurable outcome-based education growth" },
            { icon: "🎓", label: "Alumni Ecosystem", desc: "Senior student mentors training juniors" },
            { icon: "📊", label: "Interdisciplinary", desc: "CSE + Civil + ECE + all branches united" },
          ].map(item => (
            <div key={item.label} className="bg-paper border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] p-3 flex flex-col gap-1">
              <span className="text-xl">{item.icon}</span>
              <p className="font-black text-xs text-graphite">{item.label}</p>
              <p className="font-mono text-[9px] text-olive leading-tight font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-graphite text-paper p-3 shadow-[4px_4px_0px_0px_rgba(242,100,48,1)] border-2 border-graphite">
          <p className="font-mono text-xs text-paper font-bold">✔ Transforming campus culture from passive academics to active production software.</p>
        </div>
      </div>
    ),
  },

  // ── 21 CHAPTER KIT ──────────────────────────────────────────────────
  {
    id: 21, label: "Chapter Receives",
    content: (
      <div className="flex flex-col md:flex-row gap-5 h-full items-center">
        {/* Left — kit diagram */}
        <div className="relative w-full md:w-[360px] h-[300px] md:h-[360px] shrink-0 border-2 border-graphite shadow-[6px_6px_0px_0px_rgba(242,100,48,1)] overflow-hidden">
          <Image src="/pitch-chapter-kit.png" alt="Elevates Chapter Kit" fill className="object-contain bg-paper" />
        </div>
        {/* Right */}
        <div className="flex flex-col gap-3 flex-1">
          <Tag color="flame">HQ Support</Tag>
          <h2 className="font-black text-3xl uppercase text-graphite leading-none">Every Chapter Receives This</h2>
          <p className="font-hand text-lg text-olive">No chapter starts from scratch.</p>
          <div className="grid grid-cols-2 gap-1.5">
            {["Brand Identity", "Operations Playbook", "Recruitment System", "Cluster Framework", "Event Templates", "Speaker Network", "Mentor Network", "Technical Support", "Website & Registration", "Design Assets", "Social Media Kit", "Documentation"].map((item, i) => (
              <div key={item} className={`px-2.5 py-1.5 border border-graphite rounded-sm text-center ${i % 2 === 0 ? "bg-flame/10" : "bg-indigo/10"}`}>
                <p className="font-mono text-[9px] font-bold text-graphite">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-graphite text-paper p-2.5 shadow-[3px_3px_0px_0px_rgba(242,100,48,1)]">
            <p className="font-mono text-xs font-bold text-flame">No chapter starts from scratch. Everything is ready.</p>
          </div>
        </div>
      </div>
    ),
  },

  // ── 22 VISION ───────────────────────────────────────────────────────
  {
    id: 22, label: "Our Vision",
    content: (
      <div className="flex flex-col md:flex-row gap-5 h-full items-center">
        {/* Left — ladder */}
        <div className="flex flex-col gap-0 flex-1">
          <Tag color="indigo">Our Vision</Tag>
          <h2 className="font-black text-4xl uppercase text-graphite leading-none mt-2">From One Campus <span className="text-flame">To A Network</span></h2>
          <div className="flex flex-col items-start gap-0 mt-4">
            {[
              { label: "📍 Today: Ernad Knowledge City", bg: "bg-paper border-2 border-graphite text-graphite", shadow: "shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]", w: "w-48" },
              { label: "→  Campus 2", bg: "bg-graphite/10 border-2 border-graphite/40 text-graphite", shadow: "", w: "w-56" },
              { label: "→  10 Campuses", bg: "bg-olive text-paper", shadow: "shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]", w: "w-64" },
              { label: "→  50+ Campuses", bg: "bg-indigo text-paper", shadow: "shadow-[5px_5px_0px_0px_rgba(45,45,52,1)]", w: "w-72" },
              { label: "ELEVATES NETWORK (Kerala)", bg: "bg-graphite text-paper", shadow: "shadow-[6px_6px_0px_0px_rgba(242,100,48,1)]", w: "w-full" },
            ].map((node, i, arr) => (
              <React.Fragment key={node.label}>
                <div className={`${node.bg} ${node.shadow} ${node.w} px-4 py-2.5 font-black text-sm`}>{node.label}</div>
                {i < arr.length - 1 && <div className="font-black text-flame text-lg ml-5 my-0.5">↓</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
        {/* Right — Kerala map */}
        <div className="shrink-0 w-full md:w-[260px] h-[280px] md:h-[340px] border-2 border-graphite shadow-[6px_6px_0px_0px_rgba(65,64,102,0.5)] overflow-hidden relative">
          <Image src="/pitch-network.png" alt="Kerala campus expansion map" fill className="object-cover" />
          <div className="absolute bottom-0 left-0 right-0 bg-graphite/85 px-3 py-1.5">
            <p className="font-mono text-[10px] text-paper font-bold">Kerala Campus Network: Expanding</p>
          </div>
        </div>
      </div>
    ),
  },

  // ── 23 CTA ──────────────────────────────────────────────────────────
  {
    id: 23, label: "Become a Chapter",
    content: (
      <div className="relative h-[440px] md:h-[480px] w-full border-2 border-graphite shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] overflow-hidden rounded-sm my-auto">
        <Image src="/images/elevates-campus-launch.jpeg" alt="ELEVATES: Campus Launch Event" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-graphite/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center px-8">
          <h2 className="font-black text-3xl md:text-5xl uppercase text-paper leading-none max-w-2xl">
            Your Campus Has Talent.<br /><span className="text-flame">Let's Elevate It.</span>
          </h2>
          <div className="flex flex-col gap-1">
            {["Let's Discover It.", "Let's Build It.", "Let's Showcase It."].map(line => (
              <p key={line} className="font-hand text-xl md:text-2xl text-paper/80">{line}</p>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-3 mt-2">
            <div className="bg-paper/10 backdrop-blur-sm border-2 border-paper/30 text-paper p-3.5 flex flex-col gap-0.5 text-left">
              <p className="font-mono text-[9px] uppercase tracking-widest opacity-60">Contact</p>
              <p className="font-black text-sm">elevates.live</p>
              <p className="font-mono text-xs opacity-80">hello@elevates.live</p>
            </div>
            <Link href="/for-colleges" className="inline-flex items-center gap-2 bg-flame text-paper font-mono font-bold text-sm px-6 py-3.5 border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(0,0,0,0.4)] hover:translate-y-1 hover:shadow-none transition-all uppercase">
              Become an Elevates Chapter →
            </Link>
          </div>
        </div>
      </div>
    ),
  },

  // ── 24 CLOSING ──────────────────────────────────────────────────────
  {
    id: 24, label: "Closing",
    content: (
      <div className="flex flex-col items-center justify-center h-[440px] md:h-[480px] w-full gap-6 text-center bg-graphite border-2 border-graphite shadow-[6px_6px_0px_0px_rgba(242,100,48,1)] rounded-sm my-auto p-8">
        <div className="flex flex-col gap-3">
          <h2 className="font-black text-3xl md:text-5xl uppercase text-paper leading-none">Every Campus Has<br /><span className="text-flame">Hidden Talent.</span></h2>
          <div className="flex flex-col gap-1 mt-2">
            {["Let's Discover It.", "Let's Build It.", "Let's Showcase It."].map(line => (
              <p key={line} className="font-hand text-xl md:text-2xl text-paper/70">{line}</p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 mt-2">
          <div className="h-[2px] w-16 bg-flame" />
          <span className="font-black text-2xl md:text-3xl uppercase text-paper tracking-widest">ELEVATES</span>
          <div className="h-[2px] w-16 bg-flame" />
        </div>
        <p className="font-mono text-[10px] text-paper/40 uppercase tracking-widest">elevates.live · 2026</p>
      </div>
    ),
  },
];

// ─── Deck Shell ──────────────────────────────────────────────────────
export default function PitchDeckPage() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState<1 | -1>(1);
  const total = slides.length;
  const dotRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const dotsContainerRef = React.useRef<HTMLDivElement>(null);

  // Manually scroll the dots container so the active dot is centered
  useEffect(() => {
    const container = dotsContainerRef.current;
    const activeDot = dotRefs.current[current];
    if (container && activeDot) {
      const containerHalf = container.offsetWidth / 2;
      const dotOffset = activeDot.offsetLeft + activeDot.offsetWidth / 2;
      container.scrollLeft = dotOffset - containerHalf;
    }
  }, [current]);

  function goTo(idx: number) {
    if (animating || idx === current || idx < 0 || idx >= total) return;
    setDir(idx > current ? 1 : -1);
    setAnimating(true);
    setTimeout(() => { setCurrent(idx); setAnimating(false); }, 200);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1);
      if (e.key === "Escape") window.history.back();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const slide = slides[current];

  return (
    <div className="fixed inset-0 z-[9998] bg-paper flex flex-col overflow-hidden">
      {/* TOP BAR */}
      <div className="shrink-0 bg-graphite flex items-center justify-between px-3 sm:px-5 py-2 sm:py-2.5 gap-2 sm:gap-4 border-b-2 border-graphite">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Link href="/" className="font-mono text-[10px] sm:text-[11px] font-bold text-paper/70 hover:text-flame transition-colors uppercase tracking-wider shrink-0">← ELEVATES</Link>
          <div className="w-[1px] h-3.5 bg-paper/20 hidden sm:block" />
          <span className="font-mono text-[10px] text-paper/40 uppercase tracking-wider hidden sm:block truncate">Chapters Pitch Deck · 2026</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <span className="font-mono text-xs font-bold text-paper">{current + 1}<span className="text-paper/30 font-normal"> / {total}</span></span>
          <span className="font-mono text-[10px] text-paper/40 hidden md:block">· {slide.label}</span>
        </div>
      </div>

      {/* CANVAS */}
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-flame hidden md:block" />
        <div
          className="h-full px-3 sm:px-8 md:px-16 py-3 sm:py-4 md:py-8 overflow-y-auto"
          style={{ opacity: animating ? 0 : 1, transform: animating ? `translateX(${dir * 16}px)` : "translateX(0)", transition: "opacity 200ms ease, transform 200ms ease" }}
        >
          <div className="max-w-5xl mx-auto w-full min-h-full relative flex flex-col justify-center py-2">
            {slide.content}
            <div className="absolute bottom-0 right-0 font-mono font-black text-[80px] leading-none text-graphite/[0.05] select-none pointer-events-none z-0">
              {String(current + 1).padStart(2, "0")}
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM NAV */}
      <div className="shrink-0 border-t-2 border-graphite bg-paper flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 gap-2 sm:gap-3">
        <button onClick={() => goTo(current - 1)} disabled={current === 0} className="font-mono text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 bg-paper border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:bg-graphite hover:text-paper hover:shadow-none hover:translate-y-0.5 transition-all disabled:opacity-25 disabled:pointer-events-none uppercase shrink-0">← Prev</button>
        <div
          ref={dotsContainerRef}
          className="flex items-center gap-1 overflow-x-auto py-0.5 flex-1 md:justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {slides.map((s, i) => (
            <button
              key={s.id}
              ref={el => { dotRefs.current[i] = el; }}
              onClick={() => goTo(i)}
              title={s.label}
              className={`rounded-sm shrink-0 transition-all font-mono text-[9px] font-bold flex items-center justify-center ${i === current ? "bg-flame text-paper w-6 h-6 sm:w-7 sm:h-7 shadow-[2px_2px_0px_0px_rgba(45,45,52,1)]" : "bg-graphite/12 text-graphite/0 w-3 h-3 sm:w-3.5 sm:h-3.5 hover:bg-graphite/25"}`}>
              {i === current ? i + 1 : ""}
            </button>
          ))}
        </div>
        <button onClick={() => goTo(current + 1)} disabled={current === total - 1} className="font-mono text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1.5 sm:py-2 bg-flame text-paper border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:bg-graphite hover:shadow-none hover:translate-y-0.5 transition-all disabled:opacity-25 disabled:pointer-events-none uppercase shrink-0">Next →</button>
      </div>

      {/* keyboard hint */}
      <div className="fixed bottom-16 right-4 hidden md:flex items-center gap-1.5 bg-graphite/80 rounded-sm px-2.5 py-1.5 pointer-events-none">
        <kbd className="font-mono text-[10px] text-paper/60 bg-paper/10 px-1.5 py-0.5 rounded-sm">←</kbd>
        <kbd className="font-mono text-[10px] text-paper/60 bg-paper/10 px-1.5 py-0.5 rounded-sm">→</kbd>
        <span className="font-mono text-[10px] text-paper/40 ml-1">navigate</span>
      </div>
    </div>
  );
}
