import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ELEVATES_BASE_URL, organizationRef } from "@/lib/schema/organization";
import Doodle from "@/components/doodle";

export const metadata: Metadata = {
  title: "ELEVATES OS | Digital Infrastructure for Student Innovation",
  description:
    "ELEVATES OS is the digital operating layer connecting campus chapters, student clusters, production projects, and verified builder credentials.",
  alternates: {
    canonical: "/elevates-os",
  },
  openGraph: {
    title: "ELEVATES OS | Digital Infrastructure for Student Innovation",
    description:
      "The operating software powering chapters, clusters, project showcases, and student credentials across Kerala.",
    url: `${ELEVATES_BASE_URL}/elevates-os`,
  },
  twitter: {
    card: "summary_large_image",
    title: "ELEVATES OS | Digital Infrastructure for Student Innovation",
    description:
      "The operating software powering chapters, clusters, project showcases, and student credentials across Kerala.",
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
      "The unified digital operating software powering campus chapters, focused student clusters, event ticketing, and verified builder records across Kerala.",
    url: `${ELEVATES_BASE_URL}/elevates-os`,
  };

  const modules = [
    {
      title: "Cluster & Chapter Network",
      badge: "CORE ENGINE",
      desc: "Connects cross-campus engineering pods. Enables private cluster repositories, peer code reviews, and chapter governance without administrative friction.",
    },
    {
      title: "Production Event Engine",
      badge: "HIGH CONCURRENCY",
      desc: "Built to handle massive campus bursts. Powered Vibranium 5.0 State TechFest with 400,000 requests served at 0 downtime.",
    },
    {
      title: "Cryptographic Certificate Verification",
      badge: "TAMPER-PROOF",
      desc: "Instant public verification for workshop completion, hackathon awards, and production contributions. Every credential links back to github commits.",
    },
    {
      title: "Recruiter Portfolio Pipeline",
      badge: "PROOF OF WORK",
      desc: "Translates dorm-room code commits and production platform deployments into verifiable proof-of-work profiles for engineering hiring partners.",
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

      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">ELEVATES OS</span>
      </nav>

      <header className="mb-14 border-b-4 border-graphite pb-8 relative">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg] border border-graphite">
            PLATFORM // SOFTWARE ENGINE
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // V1.0 PRODUCTION
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-graphite mb-4 leading-none">
          ELEVATES <span className="text-flame">OS</span>
        </h1>
        <p className="font-hand text-xl md:text-2xl text-olive max-w-3xl leading-relaxed">
          The digital operating layer that powers campus chapters, clusters, ticketing, and verified engineering credentials.
        </p>

        <Doodle
          type="star"
          color="#f26430"
          className="hidden md:block absolute right-4 top-2 w-20 h-20 opacity-20 pointer-events-none"
        />
      </header>

      {/* Direct Answer Entity Card for AI/Search */}
      <section className="border-4 border-graphite rounded-sm bg-paper p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(45,45,52,1)] mb-12">
        <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-flame mb-2">
          CANONICAL PLATFORM DEFINITION
        </h2>
        <p className="font-mono text-base sm:text-lg font-semibold text-graphite leading-relaxed mb-4">
          ELEVATES OS is the proprietary web application and management platform built by ELEVATES student engineers. It replaces fragmented WhatsApp groups and static spreadsheets with a unified operational system for campus chapters, event access passes, and builder portfolios.
        </p>
        <div className="flex flex-wrap gap-4 text-xs font-mono">
          <span className="bg-graphite/5 border border-graphite/20 px-3 py-1.5 rounded">
            <strong>Engine:</strong> Next.js &amp; PostgreSQL
          </span>
          <span className="bg-graphite/5 border border-graphite/20 px-3 py-1.5 rounded">
            <strong>Throughput:</strong> 400k+ Requests Proven
          </span>
          <span className="bg-graphite/5 border border-graphite/20 px-3 py-1.5 rounded">
            <strong>Access:</strong> Free for Affiliated Chapters
          </span>
        </div>
      </section>

      {/* Modules Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {modules.map((m) => (
          <div
            key={m.title}
            className="border-3 border-graphite rounded-sm p-6 bg-paper shadow-[5px_5px_0px_0px_rgba(45,45,52,1)] flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-[11px] font-bold text-flame border border-flame px-2 py-0.5 rounded uppercase block w-fit mb-3">
                {m.badge}
              </span>
              <h3 className="text-xl font-black uppercase text-graphite mb-2">
                {m.title}
              </h3>
              <p className="font-mono text-xs text-graphite/85 leading-relaxed">
                {m.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="bg-graphite text-paper p-8 rounded-sm border-4 border-graphite shadow-[8px_8px_0px_0px_rgba(242,100,48,1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-black uppercase tracking-tight text-paper mb-2">
            Bring ELEVATES OS to Your Campus
          </h2>
          <p className="font-mono text-xs text-paper/80 max-w-xl leading-relaxed">
            Every approved ELEVATES campus chapter receives dedicated instance provisioning, cluster governance tooling, and zero-fee event infrastructure.
          </p>
        </div>
        <Link
          href="/chapters"
          className="shrink-0 bg-flame text-paper font-mono text-xs font-bold uppercase px-6 py-3.5 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:bg-paper hover:text-graphite transition-all"
        >
          Explore Chapters ↗
        </Link>
      </div>
    </main>
  );
}
