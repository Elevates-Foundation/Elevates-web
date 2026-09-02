import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ELEVATES_BASE_URL, organizationRef } from "@/lib/schema/organization";
import Doodle from "@/components/doodle";

export const metadata: Metadata = {
  title: "Contact & Campus Inquiries | ELEVATES",
  description:
    "Get in touch with the ELEVATES founding collective for college chapter expansions, student clusters, sponsorships, and partnerships.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Campus Inquiries | ELEVATES",
    description:
      "Get in touch with ELEVATES for college chapter applications, student queries, and partnerships.",
    url: `${ELEVATES_BASE_URL}/contact`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Campus Inquiries | ELEVATES",
    description:
      "Get in touch with ELEVATES for college chapter applications, student queries, and partnerships.",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${ELEVATES_BASE_URL}/contact#page`,
    name: "Contact ELEVATES",
    description: "Official contact points for ELEVATES community and chapter coordination.",
    url: `${ELEVATES_BASE_URL}/contact`,
    mainEntity: organizationRef(),
  };

  const contactOptions = [
    {
      title: "Start a Campus Chapter",
      desc: "For student leaders and faculty interested in bringing an official ELEVATES chapter to their college.",
      actionText: "Chapter Expansion Guide ↗",
      href: "/chapters",
      tag: "CAMPUS EXPANSION",
    },
    {
      title: "College & Institutional Partnerships",
      desc: "For college principals, HODs, and IEDC nodal officers wanting production workshop partnerships.",
      actionText: "Institutional Brief ↗",
      href: "/for-colleges",
      tag: "INSTITUTIONS",
    },
    {
      title: "Press & Media Inquiries",
      desc: "For journalists, tech publications, and story coverage regarding student projects and Kerala tech.",
      actionText: "Press Kit & Assets ↗",
      href: "/press",
      tag: "PRESS",
    },
    {
      title: "Connect with the Founding Team",
      desc: "Reach out directly to all 18 founders and domain leads across Web Systems, CyberSec, IoT, and Operations.",
      actionText: "Meet the Team ↗",
      href: "/team",
      tag: "DIRECTORY",
    },
  ];

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto selection:bg-flame selection:text-paper">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">Contact</span>
      </nav>

      <header className="mb-14 border-b-4 border-graphite pb-8 relative">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg] border border-graphite">
            REACH OUT // INQUIRIES
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-graphite mb-4 leading-none">
          GET IN <span className="text-flame">TOUCH</span>
        </h1>
        <p className="font-hand text-xl md:text-2xl text-olive max-w-3xl leading-relaxed">
          Whether you want to launch a chapter in your college, collaborate on a production project, or report a story.
        </p>

        <Doodle
          type="scribble"
          color="#f26430"
          className="hidden md:block absolute right-4 top-2 w-20 h-20 opacity-20 pointer-events-none"
        />
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {contactOptions.map((opt) => (
          <div
            key={opt.title}
            className="border-3 border-graphite rounded-sm p-6 md:p-8 bg-paper shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-xs font-bold text-flame border border-flame px-2 py-0.5 rounded uppercase block w-fit mb-3">
                {opt.tag}
              </span>
              <h2 className="text-2xl font-black uppercase text-graphite mb-2">
                {opt.title}
              </h2>
              <p className="font-mono text-xs text-graphite/85 leading-relaxed mb-6">
                {opt.desc}
              </p>
            </div>
            <Link
              href={opt.href}
              className="bg-flame text-paper font-mono text-xs font-bold uppercase px-4 py-2.5 rounded-sm border-2 border-graphite shadow-[2px_2px_0px_0px_rgba(45,45,52,1)] hover:bg-graphite transition-all text-center"
            >
              {opt.actionText}
            </Link>
          </div>
        ))}
      </div>

      {/* Direct Social Handles */}
      <section className="border-4 border-graphite rounded-sm bg-paper p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(45,45,52,1)]">
        <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-flame mb-4">
          OFFICIAL CHANNELS
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
          <a
            href="https://www.linkedin.com/company/elevates-in"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-graphite p-3 rounded-sm hover:bg-flame hover:text-paper transition-all"
          >
            <strong>LinkedIn:</strong> elevates-in ↗
          </a>
          <a
            href="https://github.com/Elevates-Foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-graphite p-3 rounded-sm hover:bg-flame hover:text-paper transition-all"
          >
            <strong>GitHub:</strong> Elevates-Foundation ↗
          </a>
          <a
            href="https://www.instagram.com/elevates.club/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-graphite p-3 rounded-sm hover:bg-flame hover:text-paper transition-all"
          >
            <strong>Instagram:</strong> @elevates.club ↗
          </a>
        </div>
      </section>
    </main>
  );
}
