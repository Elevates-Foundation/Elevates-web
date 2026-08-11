import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Doodle from "@/components/doodle";

export const metadata: Metadata = {
  title: "The Cluster System | ELEVATES Kerala",
  description: "Why Clusters Matter — turning open workshops into committed builders, real student projects, and future leaders.",
  alternates: {
    canonical: "/clusters",
  },
  openGraph: {
    title: "The Cluster System | ELEVATES Kerala",
    description: "Turning open workshops into committed builders and real software projects.",
    url: "https://www.elevates.live/clusters",
  },
};

const CLUSTERS = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning Cluster",
    badge: "AI & DATA",
    description: "Deep dive into Python, neural networks, LLM fine-tuning, and real-world AI applications.",
    projects: ["Campus AI Assistant", "Document QA Engine"],
    metrics: "24 Active Builders"
  },
  {
    id: "fullstack",
    title: "Full-Stack & Web Systems Cluster",
    badge: "WEB & DEVOPS",
    description: "High-concurrency web systems, Next.js, Turbo, and cloud deployment. Built Vibranium 400k platform.",
    projects: ["Vibranium Tech Fest (400k Requests)", "Arts Fest Platform"],
    metrics: "32 Active Builders"
  },
  {
    id: "cybersec",
    title: "Cybersec & CTF Defense Cluster",
    badge: "SECURITY",
    description: "Linux terminal mastery, Wireshark packet analysis, cryptography hashes, and CTF challenges.",
    projects: ["Escape Room CTF", "Campus Vulnerability Scanner"],
    metrics: "28 Active Builders"
  },
  {
    id: "hardware",
    title: "IoT & Hardware Prototyping Cluster",
    badge: "ELECTRONICS",
    description: "Physical hardware prototyping, breadboard circuits, Arduino C++, and ESP32 wireless sensors.",
    projects: ["Automated Gate System", "Environmental Sensor Nodes"],
    metrics: "18 Active Builders"
  },
  {
    id: "design",
    title: "UI/UX & Product Design Cluster",
    badge: "PRODUCT DESIGN",
    description: "User research, wireframing, Figma design systems, micro-animations, and frontend handoff.",
    projects: ["Elevates Design System", "Campus Event UI Templates"],
    metrics: "20 Active Builders"
  },
  {
    id: "branding",
    title: "Branding & Marketing Cluster",
    badge: "GROWTH & MEDIA",
    description: "Visual storytelling, video production, tech event marketing, and campus community growth.",
    projects: ["Vibranium Campaign", "Campus Media Engine"],
    metrics: "15 Active Builders"
  }
];

export default function ClustersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": "ELEVATES Cluster System",
    "description": "Project-based cluster learning system for student tech innovation in Kerala.",
    "provider": {
      "@type": "Organization",
      "name": "ELEVATES Foundation",
      "sameAs": "https://www.elevates.live",
    },
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
        <span className="text-graphite font-bold">Clusters</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(45,45,52,1)] mb-16 relative overflow-hidden">
        <div className="absolute -top-4 left-10 w-32 h-8 bg-flame/80 rotate-[-2deg] opacity-90 border border-graphite/30" />

        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg]">
            ELEVATES // THE CLUSTER ENGINE
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // WHY CLUSTERS MATTER
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-graphite mb-6">
          THE CLUSTER <span className="text-flame">SYSTEM</span>
        </h1>

        <p className="font-hand text-2xl md:text-3xl text-olive mb-6 max-w-4xl leading-relaxed">
          Open workshops attract students. Clusters identify committed learners. Projects create builders. Leadership creates future mentors.
        </p>

        <p className="font-mono text-sm md:text-base text-graphite/90 leading-relaxed max-w-3xl">
          Most student communities stop at conducting one-off workshops. The Elevates Cluster System takes committed learners beyond workshops into specialized hands-on teams that build real software and campus platforms.
        </p>

        <Doodle
          type="crown"
          color="#f26430"
          className="hidden md:block absolute right-8 top-8 w-28 h-28 rotate-12 opacity-30 pointer-events-none"
        />
      </section>

      {/* The 4-Stage Operating Model */}
      <section className="mb-16">
        <div className="border-b-4 border-graphite pb-4 mb-8 flex justify-between items-center">
          <div>
            <span className="font-mono text-xs text-flame font-bold uppercase tracking-widest block">HOW IT WORKS</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-graphite">
              THE 4-STAGE PIPELINE
            </h2>
          </div>
          <span className="font-mono text-xs text-olive font-bold hidden sm:inline">PROVEN MODEL</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-paper p-6 border-3 border-graphite rounded-sm shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] relative">
            <span className="font-mono font-bold text-3xl text-flame block mb-2">01</span>
            <h3 className="font-mono font-bold text-lg text-graphite mb-2">Open Workshops</h3>
            <p className="font-mono text-xs text-graphite/80 leading-relaxed">
              Open to everyone on campus. No fees, no department restrictions, no prior experience needed.
            </p>
          </div>

          <div className="bg-paper p-6 border-3 border-graphite rounded-sm shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] relative">
            <span className="font-mono font-bold text-3xl text-flame block mb-2">02</span>
            <h3 className="font-mono font-bold text-lg text-graphite mb-2">Mini Challenges</h3>
            <p className="font-mono text-xs text-graphite/80 leading-relaxed">
              Identifying students demonstrating Curiosity, Commitment, Consistency, and Problem Solving.
            </p>
          </div>

          <div className="bg-paper p-6 border-3 border-graphite rounded-sm shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] relative">
            <span className="font-mono font-bold text-3xl text-flame block mb-2">03</span>
            <h3 className="font-mono font-bold text-lg text-graphite mb-2">Cluster Selection</h3>
            <p className="font-mono text-xs text-graphite/80 leading-relaxed">
              Selected builders receive advanced mentorship, internal products, and real campus platform builds.
            </p>
          </div>

          <div className="bg-paper p-6 border-3 border-graphite rounded-sm shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] relative">
            <span className="font-mono font-bold text-3xl text-flame block mb-2">04</span>
            <h3 className="font-mono font-bold text-lg text-graphite mb-2">Leadership</h3>
            <p className="font-mono text-xs text-graphite/80 leading-relaxed">
              Cluster builders become chapter executive leaders, mentoring the next generation of students.
            </p>
          </div>
        </div>
      </section>

      {/* "No Hidden Talent Left Behind" Re-entry Policy */}
      <section className="bg-flame text-paper p-8 md:p-10 border-4 border-graphite rounded-sm shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] mb-16 relative">
        <div className="max-w-3xl space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest bg-paper text-graphite px-3 py-1 rounded-sm">
            EQUITY POLICY
          </span>
          <h3 className="text-2xl md:text-4xl font-black uppercase text-paper">
            NO HIDDEN TALENT SHOULD BE LEFT BEHIND
          </h3>
          <p className="font-mono text-xs md:text-sm text-paper/90 leading-relaxed">
            Didn't get selected during the initial workshop challenge? No problem. Students can complete an additional open mini-challenge anytime to join a cluster. Innovation belongs to everyone.
          </p>
        </div>
      </section>

      {/* Active Clusters Grid */}
      <section className="mb-16">
        <div className="border-b-4 border-graphite pb-4 mb-8 flex justify-between items-center">
          <h2 className="text-2xl md:text-4xl font-black uppercase text-graphite">
            ACTIVE DOMAIN CLUSTERS
          </h2>
          <span className="font-mono text-xs font-bold text-olive">6 CLUSTERS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLUSTERS.map((cluster) => (
            <div
              key={cluster.id}
              className="bg-paper p-6 rounded-sm border-4 border-graphite shadow-[8px_8px_0px_0px_rgba(45,45,52,1)] hover:shadow-[12px_12px_0px_0px_rgba(242,100,48,1)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4 border-b border-graphite/20 pb-3">
                  <span className="font-mono text-xs font-bold text-flame bg-flame/10 border border-flame px-2.5 py-0.5 rounded">
                    {cluster.badge}
                  </span>
                  <span className="font-mono text-xs text-olive font-bold">
                    👥 {cluster.metrics}
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase text-graphite mb-2">
                  {cluster.title}
                </h3>
                <p className="font-mono text-xs text-graphite/80 leading-relaxed mb-6">
                  {cluster.description}
                </p>
              </div>

              <div>
                <span className="font-mono text-[10px] text-olive font-bold uppercase block mb-2">PROJECTS BUILT</span>
                <div className="space-y-1 font-mono text-xs font-bold text-graphite mb-6">
                  {cluster.projects.map((p, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-flame" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/#footer"
                  className="w-full inline-flex justify-center items-center gap-1.5 bg-flame text-paper font-mono font-bold text-xs px-4 py-2.5 rounded-sm border border-graphite hover:scale-105 transition-transform uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  JOIN THIS CLUSTER ↗
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real Impact Proof Section */}
      <section className="bg-paper border-4 border-graphite p-8 rounded-sm shadow-[8px_8px_0px_0px_rgba(45,45,52,1)]">
        <h3 className="text-2xl font-black uppercase text-graphite mb-2">
          REAL PROJECTS. REAL IMPACT.
        </h3>
        <p className="font-mono text-xs text-olive mb-6">
          Real campus platforms engineered entirely by student cluster members:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
          <div className="bg-graphite text-paper p-4 rounded-sm border border-graphite">
            <span className="text-flame text-xl font-bold block mb-1">400,000+</span>
            <span className="text-xs font-bold block">Requests in 24 Hours</span>
            <span className="text-[10px] text-paper/70">Vibranium Tech Fest Platform</span>
          </div>

          <div className="bg-graphite text-paper p-4 rounded-sm border border-graphite">
            <span className="text-flame text-xl font-bold block mb-1">5 DAYS</span>
            <span className="text-xs font-bold block">Build Time</span>
            <span className="text-[10px] text-paper/70">Engineered from scratch</span>
          </div>

          <div className="bg-graphite text-paper p-4 rounded-sm border border-graphite">
            <span className="text-flame text-xl font-bold block mb-1">13+ EVENTS</span>
            <span className="text-xs font-bold block">Conducted</span>
            <span className="text-[10px] text-paper/70">Eranad Knowledge City Chapter</span>
          </div>

          <div className="bg-graphite text-paper p-4 rounded-sm border border-graphite">
            <span className="text-flame text-xl font-bold block mb-1">30 EXEC</span>
            <span className="text-xs font-bold block">Student Leaders</span>
            <span className="text-[10px] text-paper/70">Selected from 126 apps</span>
          </div>
        </div>
      </section>
    </main>
  );
}
