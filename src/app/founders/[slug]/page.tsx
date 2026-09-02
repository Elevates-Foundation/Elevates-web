import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { FOUNDERS } from "@/data/team/founders";
import {
  ELEVATES_BASE_URL,
  organizationRef,
  getFounderSchema,
} from "@/lib/schema/organization";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FOUNDERS.map((f) => ({ slug: f.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const founder = FOUNDERS.find((f) => f.id === slug);

  if (!founder) {
    return {
      title: "Founder Not Found | ELEVATES",
    };
  }

  const title = `${founder.name} — ${founder.role} | ELEVATES`;
  const description = `${founder.name} (${founder.tag}) — ${founder.role} at ELEVATES. ${founder.proof}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/founders/${founder.id}`,
    },
    openGraph: {
      title,
      description,
      url: `${ELEVATES_BASE_URL}/founders/${founder.id}`,
      images: [
        {
          url: `${ELEVATES_BASE_URL}${founder.image}`,
          alt: founder.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${ELEVATES_BASE_URL}${founder.image}`],
    },
  };
}

export default async function FounderDetailPage({ params }: Props) {
  const { slug } = await params;
  const founder = FOUNDERS.find((f) => f.id === slug);

  if (!founder) {
    notFound();
  }

  const jsonLd = getFounderSchema({
    name: founder.name,
    role: founder.role,
    url: `${ELEVATES_BASE_URL}/founders/${founder.id}`,
    linkedin: founder.linkedin,
    image: founder.image,
    description: `${founder.name} is a ${founder.role} and core builder at ELEVATES. Proof: ${founder.proof}`,
  });

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto selection:bg-flame selection:text-paper">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Founders", path: "/founders" },
          { name: founder.name, path: `/founders/${founder.id}` },
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
        <Link href="/founders" className="hover:underline">Founders</Link>
        <span>/</span>
        <span className="text-graphite font-bold">{founder.name}</span>
      </nav>

      <article className="border-4 border-graphite rounded-sm bg-paper p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(45,45,52,1)] relative">
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 shrink-0 border-3 border-graphite overflow-hidden bg-olive/10 shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
            <Image
              src={founder.image}
              alt={`${founder.name} — ${founder.role}, ELEVATES Founding Collective`}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 160px, 192px"
              priority
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-graphite mb-1">
              {founder.name}
            </h1>

            <p className="font-mono text-base text-flame font-black mb-1">
              {founder.role}
            </p>

            {founder.specialization && (
              <p className="font-mono text-xs text-olive font-bold uppercase tracking-wide mb-3">
                Focus: {founder.specialization} · Founding Cohort {founder.cohort}
              </p>
            )}

            <div className="mb-5">
              <span className="font-mono text-[11px] font-bold text-graphite bg-olive/10 border border-graphite/30 px-2.5 py-1 rounded-sm inline-block">
                Moniker: &ldquo;{founder.tag}&rdquo;
              </span>
            </div>

            <div className="border-t-2 border-dashed border-graphite/20 pt-4 mb-6">
              <h2 className="font-mono text-xs uppercase font-bold text-olive mb-1">Production Proof &amp; Track Record</h2>
              <p className="text-base text-graphite leading-relaxed font-mono">
                {founder.proof}
              </p>
            </div>

            {founder.linkedin && (
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-graphite text-paper font-mono text-xs font-bold px-4 py-2 rounded-sm hover:bg-flame transition-colors uppercase"
              >
                <span>LinkedIn Profile</span>
                <span>↗</span>
              </a>
            )}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t-2 border-graphite/20 flex justify-between items-center text-xs font-mono">
          <Link href="/founders" className="text-flame font-bold hover:underline">
            ← All Founders
          </Link>
          <span className="text-olive">ELEVATES Foundation</span>
        </div>
      </article>
    </main>
  );
}
