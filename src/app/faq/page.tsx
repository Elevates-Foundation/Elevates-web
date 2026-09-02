import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import {
  ELEVATES_CANONICAL_DEFINITION,
  ELEVATES_BASE_URL,
} from "@/lib/schema/organization";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | ELEVATES",
  description:
    "Common questions about ELEVATES: what it is, who it is for, how chapters and clusters work, and how students across Kerala can join.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions (FAQ) | ELEVATES",
    description:
      "Frequently asked questions about ELEVATES — Kerala's student-led innovation ecosystem for quiet and introverted builders.",
    url: `${ELEVATES_BASE_URL}/faq`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions (FAQ) | ELEVATES",
    description:
      "Frequently asked questions about ELEVATES — Kerala's student-led innovation ecosystem for quiet and introverted builders.",
  },
};

const FAQ_ITEMS = [
  {
    question: "What is ELEVATES?",
    answer: ELEVATES_CANONICAL_DEFINITION,
  },
  {
    question: "Who can join ELEVATES?",
    answer:
      "ELEVATES is open to college and university students across Kerala from all branches (engineering, arts, science, and polytechnics). It is especially focused on students who are skilled, quiet, introverted, or have felt invisible in typical loud college clubs.",
  },
  {
    question: "How does ELEVATES differ from TinkerHub, IEDC, or µLearn?",
    answer:
      "While TinkerHub champions maker culture, IEDC incubates startups, and µLearn provides gamified learning tracks, ELEVATES specifically acts as a layer reaching the 'other 800 students' in a 1,000-student campus who rarely join public clubs. ELEVATES focuses on zero-gatekeeping, hands-on production proof (real software under live traffic), and quiet cohort mentoring.",
  },
  {
    question: "What are ELEVATES Clusters?",
    answer:
      "Clusters are specialized domain working groups inside ELEVATES where members collaborate on concrete engineering projects, including Full-Stack Web Systems, Cybersec Defense, AI/ML, Hardware/IoT, UI/UX, and Cloud/DevOps.",
  },
  {
    question: "What is an ELEVATES Campus Chapter?",
    answer:
      "A chapter is an autonomous student community unit established inside a college (such as Chapter 01 at Eranad Knowledge City, Manjeri). Chapters run local meetups, maintain clusters, and represent their students in state-wide collaborative platforms.",
  },
  {
    question: "How can our college start an ELEVATES chapter?",
    answer:
      "Any team of motivated students along with a supporting faculty coordinator can request to establish a chapter by visiting our Chapters section or contacting the founding team. We review campus readiness, provide chapter kits, and onboard the student executive.",
  },
  {
    question: "Does ELEVATES charge any fees to students?",
    answer:
      "No. ELEVATES is a student-led non-profit initiative dedicated to accessibility and open peer learning. Core community access, peer labs, and workshops are free.",
  },
];

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${ELEVATES_BASE_URL}/faq#faqpage`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-5xl mx-auto selection:bg-flame selection:text-paper">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
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
        <span className="text-graphite font-bold">FAQ</span>
      </nav>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg] border border-graphite">
            QUESTIONS &amp; ANSWERS
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // FREQUENTLY ASKED
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-graphite mb-4">
          FREQUENTLY ASKED <span className="text-flame">QUESTIONS</span>
        </h1>
        <p className="font-hand text-xl md:text-2xl text-olive max-w-2xl leading-relaxed">
          Everything you need to know about ELEVATES, our philosophy, clusters, chapters, and community.
        </p>
      </header>

      <div className="space-y-6">
        {FAQ_ITEMS.map((item, index) => (
          <article
            key={index}
            className="border-3 border-graphite p-6 md:p-8 rounded-sm bg-paper shadow-[5px_5px_0px_0px_rgba(45,45,52,1)]"
          >
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-graphite mb-3">
              {item.question}
            </h2>
            <p className="text-base md:text-lg text-graphite/90 leading-relaxed font-sans">
              {item.answer}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-14 p-6 border-2 border-dashed border-graphite/30 rounded-sm text-center">
        <p className="font-mono text-xs text-olive uppercase font-bold mb-2">Have another question?</p>
        <p className="text-base text-graphite mb-4">
          Reach out directly to the community leads or read our founding story.
        </p>
        <div className="flex justify-center gap-4 flex-wrap font-mono text-xs font-bold">
          <Link href="/about" className="text-flame underline hover:text-graphite">
            Read Our Story ↗
          </Link>
          <Link href="/chapters" className="text-flame underline hover:text-graphite">
            Explore Chapters ↗
          </Link>
        </div>
      </div>
    </main>
  );
}
