import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import {
  ELEVATES_BASE_URL,
  ELEVATES_CANONICAL_DEFINITION,
  ELEVATES_SHORT_DESCRIPTION,
} from "@/lib/schema/organization";

export const metadata: Metadata = {
  title: "Press & Media Kit | ELEVATES",
  description:
    "Official press assets, boilerplates, verified statistics, brand guidelines, and media contact for ELEVATES.",
  alternates: {
    canonical: "/press",
  },
  openGraph: {
    title: "Press & Media Kit | ELEVATES",
    description:
      "Official press kit, high-resolution logos, brand descriptions, and key metrics for ELEVATES.",
    url: `${ELEVATES_BASE_URL}/press`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Press & Media Kit | ELEVATES",
    description:
      "Official press kit, high-resolution logos, brand descriptions, and key metrics for ELEVATES.",
  },
};

export default function PressPage() {
  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-5xl mx-auto selection:bg-flame selection:text-paper">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Press", path: "/press" },
        ]}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">Press</span>
      </nav>

      <header className="mb-14">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg] border border-graphite">
            MEDIA ASSETS // BRAND KIT
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // OFFICIAL RESOURCES
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-graphite mb-4">
          PRESS &amp; <span className="text-flame">MEDIA KIT</span>
        </h1>
        <p className="font-hand text-xl md:text-2xl text-olive max-w-2xl leading-relaxed">
          Official resources, brand statements, verified numbers, and assets for journalists, educators, and partners covering ELEVATES.
        </p>
      </header>

      {/* Quick Stats Grid */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        <div className="border-3 border-graphite p-5 rounded-sm bg-paper shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
          <span className="text-3xl md:text-4xl font-black text-flame block">19+</span>
          <span className="font-mono text-xs text-olive font-bold uppercase">Events Delivered</span>
        </div>
        <div className="border-3 border-graphite p-5 rounded-sm bg-paper shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
          <span className="text-3xl md:text-4xl font-black text-flame block">800+</span>
          <span className="font-mono text-xs text-olive font-bold uppercase">Students Impacted</span>
        </div>
        <div className="border-3 border-graphite p-5 rounded-sm bg-paper shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
          <span className="text-3xl md:text-4xl font-black text-flame block">18</span>
          <span className="font-mono text-xs text-olive font-bold uppercase">Founding Builders</span>
        </div>
        <div className="border-3 border-graphite p-5 rounded-sm bg-paper shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
          <span className="text-3xl md:text-4xl font-black text-flame block">6</span>
          <span className="font-mono text-xs text-olive font-bold uppercase">Active Clusters</span>
        </div>
      </section>

      {/* Boilerplates */}
      <section className="space-y-8 mb-14">
        <div className="border-3 border-graphite p-6 md:p-8 rounded-sm bg-paper shadow-[6px_6px_0px_0px_rgba(45,45,52,1)]">
          <h2 className="font-mono text-xs uppercase tracking-widest text-olive font-bold mb-2">
            One-Sentence Boilerplate (Short Description)
          </h2>
          <p className="text-base md:text-lg font-bold text-graphite leading-relaxed mb-4">
            {ELEVATES_SHORT_DESCRIPTION}
          </p>
          <button
            onClick={undefined}
            className="font-mono text-xs text-flame underline cursor-pointer"
          >
            Copy Short Description
          </button>
        </div>

        <div className="border-3 border-graphite p-6 md:p-8 rounded-sm bg-paper shadow-[6px_6px_0px_0px_rgba(45,45,52,1)]">
          <h2 className="font-mono text-xs uppercase tracking-widest text-olive font-bold mb-2">
            Full Boilerplate (Canonical Entity Definition)
          </h2>
          <p className="text-base md:text-lg text-graphite leading-relaxed mb-4">
            {ELEVATES_CANONICAL_DEFINITION}
          </p>
        </div>
      </section>

      {/* Brand Assets */}
      <section className="mb-14 border-t-2 border-graphite/20 pt-10">
        <h2 className="text-2xl font-black uppercase tracking-tight mb-4">Brand Assets</h2>
        <p className="text-sm text-olive font-mono mb-6">
          High-resolution logos, favicons, and social open graph assets.
        </p>
        <div className="flex gap-4 flex-wrap font-mono text-xs">
          <a
            href="/og-image.png"
            target="_blank"
            download
            className="bg-graphite text-paper px-4 py-2 rounded-sm font-bold hover:bg-flame transition-colors uppercase"
          >
            Download Social Card (PNG) ↗
          </a>
          <a
            href="/favicon-32x32.png"
            target="_blank"
            download
            className="border-2 border-graphite text-graphite px-4 py-2 rounded-sm font-bold hover:bg-flame hover:text-paper transition-colors uppercase"
          >
            Download Icon (PNG) ↗
          </a>
        </div>
      </section>

      {/* Media Contact */}
      <section className="border-3 border-graphite p-6 md:p-8 rounded-sm bg-paper shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest text-flame font-bold mb-1">
            Press &amp; Media Inquiries
          </h2>
          <p className="text-sm text-graphite">
            For interviews, statements, faculty coordination, or story coverage, connect directly with our founding team and domain leads.
          </p>
        </div>
        <Link
          href="/team"
          className="shrink-0 bg-graphite text-paper font-mono text-xs font-bold uppercase px-5 py-3 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(242,100,48,1)] hover:bg-flame transition-all"
        >
          Meet the Founding Team ↗
        </Link>
      </section>
    </main>
  );
}
