import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PEER_LABS, getPeerLabBySlug } from "@/data/peer-labs";
import Doodle from "@/components/doodle";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PEER_LABS.map((lab) => ({
    slug: lab.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lab = getPeerLabBySlug(resolvedParams.slug);

  if (!lab) {
    return {
      title: "Peer Lab Not Found | ELEVATES Kerala",
    };
  }

  return {
    title: `${lab.title} Peer Lab | ELEVATES Kerala`,
    description: lab.subtitle,
    alternates: {
      canonical: `/peer-labs/${lab.slug}`,
    },
    openGraph: {
      title: `${lab.title} Peer Lab | ELEVATES Kerala`,
      description: lab.subtitle,
      url: `https://www.elevates.live/peer-labs/${lab.slug}`,
    },
  };
}

export default async function PeerLabDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lab = getPeerLabBySlug(resolvedParams.slug);

  if (!lab) {
    notFound();
  }

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": lab.title,
    "description": lab.description,
    "provider": {
      "@type": "Organization",
      "name": "ELEVATES Foundation",
      "sameAs": "https://www.elevates.live",
    },
    "hasCourseInstance": lab.lessons.map((lesson) => ({
      "@type": "CourseInstance",
      "name": lesson.title,
      "startDate": lesson.date,
      "location": lesson.location,
    })),
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-32 md:pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto selection:bg-flame selection:text-paper relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-6 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href="/peer-labs" className="hover:underline">Peer Labs</Link>
        <span>/</span>
        <span className="text-graphite font-bold">{lab.title}</span>
      </nav>

      {/* 1. ELEVATES Full-Width Hero Section */}
      <section className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(45,45,52,1)] mb-12 relative">
        {/* Tape Graphic */}
        <div className="absolute -top-4 left-10 w-32 h-8 bg-flame/80 rotate-[-2deg] opacity-80" />

        <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg]">
              ELEVATES // PEER LAB
            </span>
            <span className="font-mono text-xs text-olive font-bold">
              📍 {lab.campusName}
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-olive">
            <div className="flex -space-x-2 overflow-hidden">
              {lab.facilitators.slice(0, 4).map((f, i) => (
                <div
                  key={i}
                  className="inline-block h-7 w-7 rounded-full ring-2 ring-paper bg-flame text-paper font-mono font-bold text-xs flex items-center justify-center"
                >
                  {f.name.charAt(0)}
                </div>
              ))}
            </div>
            <span><strong className="text-flame font-bold">{lab.joinedCount} shy builders</strong> enrolled</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black italic uppercase tracking-tight text-graphite mb-4">
          {lab.title}
        </h1>

        <p className="font-hand text-xl md:text-2xl text-olive mb-6 max-w-3xl">
          {lab.subtitle}
        </p>

        <p className="font-mono text-sm text-graphite/90 leading-relaxed max-w-3xl mb-8">
          {lab.description}
        </p>

        <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t-2 border-dashed border-graphite/20">
          <span className="font-hand text-base text-olive bg-olive/10 px-4 py-1.5 rounded-sm rotate-[-1deg]">
            Built for shy & introverted talent. Zero gatekeeping.
          </span>

          <button className="bg-flame text-paper font-mono font-bold px-8 py-3.5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase text-sm">
            JOIN COHORT ↗
          </button>
        </div>

        <Doodle
          type="crown"
          color="#f26430"
          className="hidden md:block absolute right-8 top-8 w-24 h-24 rotate-12 opacity-30 pointer-events-none"
        />
      </section>

      {/* 2. Asymmetric Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

        {/* LEFT COLUMN (Span 7): Lab Sessions Timeline */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border-b-4 border-graphite pb-4 flex justify-between items-center">
            <h2 className="text-2xl md:text-3xl font-black uppercase text-graphite">
              LAB SESSIONS & TIMELINE
            </h2>
            <span className="font-mono text-xs font-bold text-flame bg-flame/10 px-3 py-1 rounded-sm border border-flame">
              {lab.lessons.length} STAGES
            </span>
          </div>

          <div className="space-y-4">
            {lab.lessons.map((lesson, idx) => (
              <Link
                key={lesson.id}
                href={`/events/${lesson.eventSlug || lesson.slug}`}
                className="group bg-paper p-5 border-3 border-graphite shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] hover:shadow-[10px_10px_0px_0px_rgba(242,100,48,1)] transition-all flex items-center justify-between gap-4 rounded-sm"
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono font-bold text-2xl text-flame group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="font-mono font-bold text-base md:text-lg text-graphite group-hover:text-flame transition-colors">
                      {lesson.title}
                    </h3>
                    <span className="font-mono text-xs text-olive">
                      📍 {lesson.location} • 📅 {lesson.date} at {lesson.time}
                    </span>
                  </div>
                </div>

                <span className="font-mono font-bold text-sm text-flame group-hover:translate-x-1 transition-transform">
                  OPEN ↗
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN (Span 5): Shy Leaders & Learning Materials */}
        <div className="lg:col-span-5 space-y-8">

          {/* Shy Leaders & Mentors */}
          <div className="bg-paper border-4 border-graphite p-6 rounded-sm shadow-[8px_8px_0px_0px_rgba(45,45,52,1)]">
            <h3 className="font-mono text-xs font-bold text-olive uppercase tracking-widest mb-4 border-b-2 border-graphite/20 pb-2">
              SHY LEADERS & MENTORS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {lab.facilitators.map((fac, i) => (
                <div key={i} className="flex items-center gap-3 bg-graphite/5 p-2.5 rounded-sm border border-graphite/20 hover:border-flame transition-colors">
                  <div className="w-8 h-8 rounded-full bg-olive text-paper font-mono font-bold text-xs flex items-center justify-center">
                    {fac.name.charAt(0)}
                  </div>
                  <div>
                    <span className="block font-mono text-xs font-bold text-graphite">{fac.name}</span>
                    {fac.role && <span className="block font-mono text-[10px] text-olive">{fac.role}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Materials & Resources */}
          <div className="bg-paper border-4 border-graphite p-6 rounded-sm shadow-[8px_8px_0px_0px_rgba(45,45,52,1)]">
            <h3 className="font-mono text-xs font-bold text-olive uppercase tracking-widest mb-4 border-b-2 border-graphite/20 pb-2">
              LEARNING MATERIALS & RESOURCES
            </h3>
            <div className="space-y-3">
              {lab.resources.map((res, i) => (
                <a
                  key={i}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center bg-graphite/5 hover:bg-flame/10 p-3.5 rounded-sm border border-graphite/20 transition-colors group font-mono text-xs"
                >
                  <span className="font-bold text-graphite group-hover:text-flame">📄 {res.title}</span>
                  <span className="font-bold text-flame group-hover:translate-x-1 transition-transform">VIEW ↗</span>
                </a>
              ))}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
