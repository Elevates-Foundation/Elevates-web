import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ELEVATES_BASE_URL, organizationRef } from "@/lib/schema/organization";
import Doodle from "@/components/doodle";

export const metadata: Metadata = {
  title: "ELEVATES OS | Digital Infrastructure for Student Innovation",
  description:
    "ELEVATES OS is the multi-role operating software connecting campus chapters, student clusters, faculty liaisons, and executive operations across Kerala.",
  alternates: {
    canonical: "/elevates-os",
  },
  openGraph: {
    title: "ELEVATES OS | Digital Infrastructure for Student Innovation",
    description:
      "The multi-role operating software connecting campus chapters, student clusters, faculty liaisons, and executive operations across Kerala.",
    url: `${ELEVATES_BASE_URL}/elevates-os`,
  },
  twitter: {
    card: "summary_large_image",
    title: "ELEVATES OS | Digital Infrastructure for Student Innovation",
    description:
      "The multi-role operating software connecting campus chapters, student clusters, faculty liaisons, and executive operations across Kerala.",
  },
};

export default function ElevatesOsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${ELEVATES_BASE_URL}/elevates-os#software`,
    name: "ELEVATES OS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
    },
    creator: organizationRef(),
    description:
      "The multi-role digital operating platform built with Next.js 15 for campus tech communities, featuring dedicated portals for HQ leadership, faculty coordinators, campus executives, class representatives, and student builders.",
    url: `${ELEVATES_BASE_URL}/elevates-os`,
  };

  const coreMetrics = [
    { value: "4", label: "Dedicated Portals", note: "HQ, Executive, Faculty, Student" },
    { value: "6", label: "Governed Roles", note: "Founder, Admin, Faculty, Lead, CR, Student" },
    { value: "19", label: "Campus Events Delivered", note: "Chapter 01 @ EKC operations" },
    { value: "₹0", label: "Institutional Fee", note: "100% free for affiliated chapters" },
  ];

  const rolePortals = [
    {
      role: "FOUNDER & HQ ADMIN",
      portal: "HQ Network Command",
      path: "/hq",
      badge: "STATEWIDE GOVERNANCE",
      desc: "Central oversight center for network expansion. Monitors multi-chapter health, institutional compliance, statewide leaderboards, user access permissions, and core brand assets.",
      features: [
        "Network-wide analytics & calendar sync (/hq/analytics, /hq/calendar)",
        "Chapter directory & onboarding governance (/hq/chapters)",
        "Statewide leadership directory & RBAC role manager (/hq/permissions)",
        "Accreditation & compliance report repository (/hq/reports)",
        "System security audit trail & event notification logs (/hq/audit)",
      ],
    },
    {
      role: "CAMPUS LEAD & SECRETARY",
      portal: "Executive Operations Desk",
      path: "/executive",
      badge: "CHAPTER OPERATIONS",
      desc: "Day-to-day command desk for the student executive committee. Orchestrates event calendars, dynamic registration forms, attendance check-ins, cluster assignments, and task management.",
      features: [
        "Real-time chapter desk & event schedule (/executive, /chapter/[slug]/calendar)",
        "Dynamic form builder & registration collector (/chapter/[slug]/forms)",
        "Live event session attendance tracking (/chapter/[slug]/attendance)",
        "Class Representative assignment & coordination (/chapter/[slug]/classes)",
        "Chapter task board & member announcements (/chapter/[slug]/tasks)",
      ],
    },
    {
      role: "FACULTY COORDINATOR",
      portal: "Faculty Liaison Console",
      path: "/faculty",
      badge: "ACADEMIC OVERSIGHT",
      desc: "Dedicated institutional dashboard for faculty advisors. Enables event sanctioning, student attendance verification, outcome monitoring, and formatted documentation for NAAC and university audits.",
      features: [
        "Independent faculty review desk (/faculty)",
        "Chapter program oversight & calendar approvals (/chapter/[slug]/events)",
        "Student roster tracking & class-wise verification (/chapter/[slug]/students)",
        "Outcome-based education reporting exports (/chapter/[slug]/reports)",
        "Activity points & attendance sign-offs",
      ],
    },
    {
      role: "STUDENT BUILDER",
      portal: "Student Explorer Portal",
      path: "/chapter/[slug]",
      badge: "STUDENT ACCESS",
      desc: "Clean, barrier-free gateway for campus students. Lets members browse upcoming workshops, register for events, join technical clusters, explore peer code repositories, and track standings.",
      features: [
        "Chapter feed & event catalog (/chapter/[slug]/events)",
        "Technical cluster registration & group work (/chapter/[slug]/clusters)",
        "Peer projects directory & showcase links (/chapter/[slug]/projects)",
        "Direct form submissions & feedback surveys (/forms/[formId]/fill)",
        "Campus builder leaderboard & announcements (/leaderboards)",
      ],
    },
  ];

  const operatingEngines = [
    {
      badge: "PROGRAMS & EVENTS",
      title: "Event Pipeline & Dynamic Forms",
      desc: "Replaces chaotic Google Forms and spreadsheets with custom forms (/chapter/[slug]/forms) that route participant registrations directly into event rosters with live capacity tracking.",
    },
    {
      badge: "ATTENDANCE TRACKING",
      title: "Live Session Check-in Desk",
      desc: "Real-time attendance logging system (/chapter/[slug]/attendance) enabling volunteer stewards to verify arrivals instantly and export audited attendance data for faculty sign-off.",
    },
    {
      badge: "ACCREDITATION",
      title: "NAAC & University Report Generator",
      desc: "Structured reporting engine (/chapter/[slug]/reports) producing named, dated, and metric-backed activity reports formatted to KTU activity point and NAAC AQAR standards.",
    },
    {
      badge: "CAMPUS INTEGRATION",
      title: "Class Representative Network",
      desc: "Granular class-level coordination console (/chapter/[slug]/classes) connecting elected student representatives across departments to ensure transparent communication.",
    },
    {
      badge: "CLUSTER FRAMEWORK",
      title: "Domain Project Pods",
      desc: "Operating framework dividing chapter talent into 6 focused technical clusters (AI/ML, Web, CyberSec, IoT, Flutter, UI/UX) with private project tracking (/chapter/[slug]/projects).",
    },
    {
      badge: "SECURITY & COMPLIANCE",
      title: "System Audit & Role Permissions",
      desc: "Full administrative audit logging (/hq/audit) and role-based access control (/hq/permissions) ensuring student data privacy and clean leadership transitions across academic terms.",
    },
  ];

  const deployedPlatforms = [
    {
      title: "Vibranium Event Platform",
      category: "Flagship Production System",
      desc: "Powered event management, digital entry passes, and real-time gate validation for Eranad Knowledge City's annual tech fest.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Vercel Edge"],
      href: "/projects/vibranium-event-platform",
    },
    {
      title: "Aaroh Arts Platform",
      category: "Production Fest Scoring Portal",
      desc: "Full-lifecycle management system for the campus arts festival: handled 50+ stage events, 4 role dashboards, and automated roster PDF exports.",
      tech: ["React 18", "Vite", "Supabase", "TanStack Query", "jsPDF"],
      href: "/projects/aaroh-arts-platform",
    },
    {
      title: "Celestia Association Platform",
      category: "Rapid Deployment Showcase",
      desc: "Complete CSE Department website rebuilt live by five junior student builders in 60 minutes and launched via computer vision gesture recognition.",
      tech: ["HTML5", "CSS3", "JavaScript", "MediaPipe Gestures"],
      href: "/projects/celestia",
    },
    {
      title: "RoadUndo Open Data API",
      category: "Civic Public Data Tool",
      desc: "Free public data API and real-time disaster dashboard tracking 18 Kerala reservoirs, 5,057 post offices, and emergency district control rooms.",
      tech: ["Next.js 15", "Neon Postgres", "Drizzle ORM", "Leaflet"],
      href: "/projects/roadundo",
    },
  ];

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto selection:bg-flame selection:text-paper">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "ELEVATES OS", path: "/elevates-os" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">ELEVATES OS</span>
      </nav>

      {/* Header */}
      <header className="mb-12 border-b-4 border-graphite pb-8 relative">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg] border border-graphite">
            PLATFORM // SOFTWARE ENGINE
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // NEXT.JS 15 MULTI-ROLE SYSTEM
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-graphite mb-4 leading-none">
          ELEVATES <span className="text-flame">OS</span>
        </h1>
        <p className="font-hand text-xl md:text-2xl text-olive max-w-3xl leading-relaxed">
          The multi-role operating platform that powers campus chapters, program lifecycles, faculty liaison, and verified student credentials.
        </p>

        <Doodle
          type="star"
          color="#f26430"
          className="hidden md:block absolute right-4 top-2 w-20 h-20 opacity-20 pointer-events-none"
        />
      </header>

      {/* Proof Stats Strip */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {coreMetrics.map((stat) => (
          <div
            key={stat.label}
            className="bg-paper border-3 border-graphite p-5 rounded-sm shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]"
          >
            <span className="block font-black text-3xl sm:text-4xl text-flame mb-1">
              {stat.value}
            </span>
            <span className="block font-mono text-xs font-bold text-graphite uppercase mb-1">
              {stat.label}
            </span>
            <span className="block font-mono text-[11px] text-olive">
              {stat.note}
            </span>
          </div>
        ))}
      </section>

      {/* Direct Answer Platform Definition Card */}
      <section className="border-4 border-graphite rounded-sm bg-paper p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(45,45,52,1)] mb-14">
        <div className="flex items-center justify-between gap-4 flex-wrap mb-3">
          <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-flame">
            PURPOSE-BUILT CAMPUS OPERATING SYSTEM
          </h2>
          <span className="font-mono text-[10px] font-bold bg-olive/15 text-olive px-2.5 py-1 rounded border border-olive/30">
            NEXT.JS 15 ENGINE
          </span>
        </div>
        <p className="font-mono text-base sm:text-lg font-semibold text-graphite leading-relaxed mb-6">
          ELEVATES OS replaces fragmented WhatsApp announcement channels, ad-hoc spreadsheets, and paper registers with dedicated, role-scoped web portals. Every participant from network founders down to first-year student builders interacts through purpose-built interfaces tailored to their responsibilities.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
          <div className="bg-graphite/5 border border-graphite/20 p-3 rounded-sm">
            <strong className="block text-graphite font-bold uppercase text-[11px] mb-1">Core Architecture</strong>
            <span className="text-graphite/80">Next.js 15, TypeScript, Tailwind CSS</span>
          </div>
          <div className="bg-graphite/5 border border-graphite/20 p-3 rounded-sm">
            <strong className="block text-graphite font-bold uppercase text-[11px] mb-1">Access Model</strong>
            <span className="text-graphite/80">6 Role Keys across 4 Scoped Workspaces</span>
          </div>
          <div className="bg-graphite/5 border border-graphite/20 p-3 rounded-sm">
            <strong className="block text-graphite font-bold uppercase text-[11px] mb-1">Campus Cost</strong>
            <span className="text-flame font-bold">₹0 (Free for all affiliated colleges)</span>
          </div>
        </div>
      </section>

      {/* The 4 Core Role Portals */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-1">
            ROLE-BASED WORKSPACES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-graphite">
            THE FOUR OPERATING PORTALS
          </h2>
          <p className="font-mono text-xs text-olive mt-1">
            Tailored navigation trees and permission models designed for every stakeholder in the campus tech ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rolePortals.map((portal) => (
            <div
              key={portal.portal}
              className="border-3 border-graphite rounded-sm p-6 bg-paper shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] hover:shadow-[8px_8px_0px_0px_rgba(242,100,48,1)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
                  <span className="font-mono text-[10px] font-bold text-flame border border-flame px-2 py-0.5 rounded uppercase">
                    {portal.badge}
                  </span>
                  <span className="font-mono text-[11px] font-bold text-olive">
                    Default Landing: {portal.path}
                  </span>
                </div>

                <h3 className="text-xl font-black uppercase text-graphite mb-1">
                  {portal.portal}
                </h3>
                <span className="font-mono text-xs font-bold text-flame block mb-3">
                  Scope: {portal.role}
                </span>
                <p className="font-mono text-xs text-graphite/85 leading-relaxed mb-4">
                  {portal.desc}
                </p>

                <div className="bg-graphite/5 border border-graphite/20 p-3 rounded-sm mb-4">
                  <span className="font-mono text-[10px] font-bold uppercase text-graphite block mb-2">
                    Verified Portal Routes:
                  </span>
                  <ul className="space-y-1.5 font-mono text-[11px] text-graphite/90">
                    {portal.features.map((f) => (
                      <li key={f} className="flex items-start gap-2">
                        <span className="text-flame font-bold shrink-0">✔</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-dashed border-graphite/20 font-mono text-xs text-olive font-semibold">
                Mapped to real seeded accounts in Elevates OS
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Subsystems Breakdown */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-1">
            FUNCTIONAL ENGINES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-graphite">
            OPERATIONAL SUBSYSTEMS
          </h2>
          <p className="font-mono text-xs text-olive mt-1">
            The underlying modules powering events, attendance, class coordination, and accreditation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {operatingEngines.map((sub) => (
            <div
              key={sub.title}
              className="border-3 border-graphite rounded-sm p-5 bg-paper shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[9px] font-bold text-flame border border-flame px-2 py-0.5 rounded uppercase inline-block mb-2.5">
                  {sub.badge}
                </span>
                <h3 className="text-lg font-black uppercase text-graphite mb-2">
                  {sub.title}
                </h3>
                <p className="font-mono text-xs text-graphite/85 leading-relaxed">
                  {sub.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Production Platforms Showcase */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-1">
            VERIFIED PROOF
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase text-graphite">
            PLATFORMS RUNNING ON THIS INFRASTRUCTURE
          </h2>
          <p className="font-mono text-xs text-olive mt-1">
            Real production systems designed, coded, and deployed for campus operations by student builders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {deployedPlatforms.map((p) => (
            <article
              key={p.title}
              className="bg-paper border-3 border-graphite rounded-sm p-6 shadow-[5px_5px_0px_0px_rgba(45,45,52,1)] flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] font-bold text-olive uppercase block mb-1">
                  {p.category}
                </span>
                <h3 className="text-xl font-black uppercase text-graphite mb-2">
                  <Link href={p.href} className="hover:text-flame transition-colors">
                    {p.title} ↗
                  </Link>
                </h3>
                <p className="font-mono text-xs text-graphite/85 leading-relaxed mb-4">
                  {p.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] font-bold px-2 py-0.5 bg-graphite/5 border border-graphite/20 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={p.href}
                  className="font-mono text-xs font-black text-flame uppercase hover:underline"
                >
                  Read Technical Breakdown →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-paper border-4 border-graphite p-8 rounded-sm shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-1">
            EXPANSION READY
          </span>
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-graphite mb-2">
            Bring ELEVATES OS to Your Campus
          </h2>
          <p className="font-mono text-xs text-graphite/80 max-w-xl leading-relaxed">
            Every approved ELEVATES chapter receives dedicated instance provisioning, role-based governance desks, and zero-fee event operations support.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0 flex-wrap">
          <Link
            href="/for-colleges"
            className="bg-flame text-paper font-mono text-xs font-bold uppercase px-6 py-3.5 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:bg-graphite transition-all"
          >
            For Colleges Guide →
          </Link>
          <Link
            href="/chapters"
            className="bg-paper text-graphite font-mono text-xs font-bold uppercase px-6 py-3.5 rounded-sm border-2 border-graphite hover:bg-graphite/10 transition-all"
          >
            Explore Chapters
          </Link>
        </div>
      </section>
    </main>
  );
}
