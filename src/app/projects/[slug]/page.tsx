import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Doodle from "@/components/doodle";
import ProjectStatusChip from "@/components/status-chip";
import { ALL_CASE_STUDIES } from "@/data/projects";
import { fetchProjectBySlug } from "@/lib/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_CASE_STUDIES.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await fetchProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | ELEVATES",
    };
  }

  if (slug === "celestia") {
    return {
      title: "Celestia: College Department Website Rebuilt in One Hour | ELEVATES",
      description:
        "We were running the event. The guest we had invited was arriving at two o'clock. We had two hours, five juniors, and a specification written on the way to campus. We finished in one hour.",
      keywords: [
        "college department website design kerala",
        "cse association website",
        "college association website template",
        "student built college website",
        "ai coding agent build brief",
      ],
      alternates: { canonical: `/projects/${project.slug}` },
      openGraph: {
        title: "Celestia: CSE Association Website Rebuilt in 1 Hour | ELEVATES",
        description: project.summary,
        url: `https://www.elevates.live/projects/${project.slug}`,
      },
    };
  }

  if (slug === "roadundo") {
    return {
      title: "RoadUndo: Kerala Dam Levels, Pincodes & Open Data API | ELEVATES",
      description:
        "A free open API for Kerala: 5,057 pincodes with LSGD ward mapping, OpenStreetMap roads, live KSEB dam levels and IMD district alerts. Built and open-sourced by students at ELEVATES.",
      keywords: [
        "kerala open data api",
        "kerala dam water level api",
        "kerala pincode api",
        "kseb dam level today",
        "kerala lsgd ward map",
        "idukki dam water level today",
      ],
      alternates: { canonical: `/projects/${project.slug}` },
      openGraph: {
        title: "RoadUndo: Kerala Open Data API & Disaster Board | ELEVATES",
        description: project.summary,
        url: `https://www.elevates.live/projects/${project.slug}`,
      },
    };
  }

  return {
    title: `${project.title}: ${project.metrics[0]?.value} ${project.metrics[0]?.label} | ELEVATES`,
    description: project.tagline || project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title}: Case Study | ELEVATES`,
      description: project.tagline,
      url: `https://www.elevates.live/projects/${project.slug}`,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = await fetchProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Google Dataset schemas if project emits datasets
  const datasetSchemas = project.datasets
    ? project.datasets.map((ds) => ({
    "@type": "Dataset",
    "name": ds.name,
    "description": ds.description,
    "license": "https://creativecommons.org/licenses/by/4.0/",
    "creator": { "@id": "https://www.elevates.live/#organization" },
    "spatialCoverage": "Kerala, India",
    "distribution": [
      {
        "@type": "DataDownload",
        "encodingFormat": "application/json",
        "contentUrl": ds.endpoint,
      },
    ],
  }))
: [];

  // JSON-LD with strict entity graph contributor links to /team#id
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.elevates.live",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://www.elevates.live/projects",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `https://www.elevates.live/projects/${project.slug}`,
          },
        ],
      },
      {
        "@type": "Article",
        "@id": `https://www.elevates.live/projects/${project.slug}#article`,
        "headline": `${project.title}: ${project.tagline}`,
        "datePublished": "2025-10-09",
        "author": { "@id": "https://www.elevates.live/#organization" },
        "about": {
          "@type": project.type === "open-tool" ? "SoftwareApplication" : "SoftwareApplication",
          "@id": `https://www.elevates.live/projects/${project.slug}#app`,
          "name": project.title,
          "applicationCategory": project.type === "open-tool" ? "UtilitiesApplication" : "BusinessApplication",
          "operatingSystem": "Web",
          "author": { "@id": "https://www.elevates.live/#organization" },
          "contributor": project.builders.map((b) => ({
            "@id": `https://www.elevates.live/team#${b.founderId}`,
          })),
        },
      },
      ...datasetSchemas,
    ],
  };

  const isOpenTool = project.type === "open-tool" || project.status === "live-unmaintained";

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-5xl mx-auto selection:bg-flame selection:text-paper relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-10 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href="/projects" className="hover:underline">Projects</Link>
        <span>/</span>
        <span className="text-graphite font-bold">{project.title}</span>
      </nav>

      {/* ─── HERO ─── */}
      <header className="mb-14 border-b-4 border-graphite pb-8 relative">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <ProjectStatusChip status={project.status} />
          <span className="font-mono text-xs font-bold uppercase tracking-widest bg-flame text-paper px-3 py-1 rounded-sm rotate-[-1deg] border border-graphite">
            {isOpenTool ? "OPEN DATA UTILITY" : "CASE STUDY // PRODUCTION PROOF"}
          </span>
          <span className="font-mono text-xs text-olive font-bold hidden sm:inline">
            📍 {project.client} · {project.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-graphite mb-4 leading-tight">
          {project.title}
        </h1>

        <p className="font-hand text-xl md:text-2xl text-flame max-w-3xl leading-relaxed font-bold">
          {project.tagline}
        </p>

        <Doodle
          type="crown"
          color="#f26430"
          className="hidden md:block absolute right-0 top-2 w-24 h-24 rotate-12 opacity-30 pointer-events-none"
        />
      </header>

      {/* ─── SECTION 1: THE SITUATION ─── */}
      <section className="mb-14 bg-paper border-4 border-graphite rounded-sm p-8 md:p-10 shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] relative overflow-hidden">
        <div className="absolute -top-3.5 left-10 w-44 h-7 bg-flame/80 rotate-[-1.5deg] border border-graphite/30" />

        <h2 className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite mb-6 mt-2">
          1. THE SITUATION
        </h2>

        <div className="space-y-4 font-mono text-sm md:text-base text-graphite/85 leading-relaxed">
          {project.situation.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          {project.situation.highlight && (
            <blockquote className="border-l-4 border-flame pl-5 py-3 bg-flame/5 rounded-r-sm mt-4">
              <p className="font-bold text-graphite text-base md:text-lg italic">
                &quot;{project.situation.highlight}&quot;
              </p>
            </blockquote>
          )}
        </div>
      </section>

      {/* ─── SECTION 2: THE NUMBERS ─── */}
      <section className="mb-14 bg-graphite text-paper rounded-sm border-4 border-graphite p-8 shadow-[8px_8px_0px_0px_rgba(242,100,48,1)]">
        <h2 className="font-mono font-bold text-xl uppercase text-paper mb-6">
          2. THE NUMBERS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-mono">
          {project.numbers.map((m) => (
            <div key={m.label} className="bg-paper/10 border border-paper/20 rounded-sm p-5">
              <span className="text-flame text-3xl md:text-4xl font-black block mb-1">
                {m.value}
              </span>
              <span className="text-xs text-paper/80 font-bold uppercase tracking-wide">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 3: WHAT WE BUILT ─── */}
      <section className="mb-14 border-l-4 border-flame pl-6 md:pl-8">
        <h2 className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite mb-6">
          3. WHAT WE BUILT
        </h2>

        <div className="space-y-3 font-mono text-sm md:text-base">
          {project.whatWeBuilt.map((feature, i) => (
            <div key={i} className="flex items-start gap-3 bg-paper border-2 border-graphite p-4 rounded-sm shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]">
              <span className="text-flame font-bold shrink-0">▸</span>
              <p className="text-graphite/90 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── UI SCREENSHOT GALLERY (IF AVAILABLE) ─── */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="mb-14" aria-labelledby="gallery-heading">
          <div className="flex items-center justify-between mb-6 border-b-2 border-graphite/20 pb-3">
            <h2 id="gallery-heading" className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite">
              PRODUCTION SYSTEM INTERFACE &amp; DASHBOARDS
            </h2>
            <span className="font-mono text-xs font-bold text-paper bg-flame px-3 py-1 rounded-sm border border-graphite">
              {project.gallery.length} REAL SCREENSHOTS
            </span>
          </div>

          <div className="space-y-8">
            {project.gallery.map((img, idx) => (
              <figure
                key={idx}
                className="bg-paper border-4 border-graphite rounded-sm p-4 md:p-6 shadow-[8px_8px_0px_0px_rgba(45,45,52,1)]"
              >
                <div className="relative w-full aspect-[16/10] bg-graphite rounded-sm overflow-hidden border-2 border-graphite mb-3">
                  <Image
                    src={img.src}
                    alt={img.caption}
                    fill
                    className="object-contain bg-graphite/95"
                    sizes="(max-width: 1200px) 100vw, 1000px"
                    priority={idx === 0}
                  />
                </div>
                <figcaption className="font-mono text-xs md:text-sm text-graphite/85 font-bold flex items-start gap-2 leading-relaxed">
                  <span className="text-flame shrink-0">📸 [0{idx + 1}]</span>
                  <span>{img.caption}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* ─── SECTION 4: HOW IT HELD UP / WHAT ACTUALLY RUNS ─── */}
      <section className="mb-14 bg-paper border-3 border-graphite rounded-sm p-8 shadow-[6px_6px_0px_0px_rgba(45,45,52,1)]">
        <h2 className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite mb-4">
          4. {isOpenTool ? "WHAT ACTUALLY RUNS TODAY" : "HOW IT HELD UP"}
        </h2>

        <p className="font-mono text-sm md:text-base text-graphite/85 leading-relaxed mb-6">
          {project.whatActuallyRunsToday || project.howItHeldUp.summary}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {project.howItHeldUp.metrics.map((m) => (
            <div key={m.label} className="bg-flame/10 border border-flame/40 p-4 rounded-sm">
              <span className="font-mono font-black text-2xl text-flame block">
                {m.value}
              </span>
              <span className="font-mono text-xs text-olive font-bold uppercase">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-3 font-mono text-xs md:text-sm text-graphite/80 leading-relaxed border-t-2 border-graphite/20 pt-4">
          {project.howItHeldUp.details.map((d, i) => (
            <p key={i}>• {d}</p>
          ))}
        </div>
      </section>

      {/* ─── SECTION 5: WHAT STALLED / WHAT WE WOULD DO DIFFERENTLY ─── */}
      <section className="mb-14 bg-graphite/5 border-4 border-graphite rounded-sm p-8 shadow-[8px_8px_0px_0px_rgba(45,45,52,1)]">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold text-paper bg-flame px-3 py-1 rounded-sm">
            {isOpenTool ? "POST-MORTEM & HONEST FINDINGS" : "HONEST RETROSPECTIVE"}
          </span>
          <h2 className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite">
            5. {isOpenTool ? "WHAT STALLED & LESSONS" : "WHAT WE WOULD DO DIFFERENTLY"}
          </h2>
        </div>

        {project.whatStalled && (
          <div className="mb-6 bg-flame/10 border-l-4 border-flame p-5 rounded-r-sm font-mono text-xs md:text-sm text-graphite leading-relaxed">
            <span className="font-bold text-flame block mb-1 uppercase tracking-wider">
              The Cold-Start Lesson:
            </span>
            <p>{project.whatStalled}</p>
          </div>
        )}

        <div className="space-y-3 font-mono text-xs md:text-sm text-graphite/85 leading-relaxed">
          {project.whatWeWouldDoDifferently.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-paper p-4 border-2 border-graphite rounded-sm">
              <span className="text-flame font-bold shrink-0">⚠️</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── OPEN DATA ENDPOINTS & DATASETS (IF APPLICABLE) ─── */}
      {project.datasets && project.datasets.length > 0 && (
        <section className="mb-14 bg-graphite text-paper border-4 border-graphite p-8 rounded-sm shadow-[8px_8px_0px_0px_rgba(242,100,48,1)]">
          <div className="flex items-center justify-between mb-6 border-b border-paper/20 pb-3">
            <h2 className="font-mono font-bold text-xl uppercase text-paper">
              OPEN DATASET ENDPOINTS
            </h2>
            <span className="font-mono text-xs font-bold text-paper bg-flame px-3 py-1 rounded-sm">
              FREE &amp; CORS UNRESTRICTED
            </span>
          </div>

          <div className="space-y-4 font-mono">
            {project.datasets.map((ds) => (
              <div key={ds.name} className="bg-paper/10 border border-paper/20 p-4 rounded-sm">
                <h3 className="font-bold text-flame text-sm mb-1">{ds.name}</h3>
                <p className="text-xs text-paper/80 mb-3">{ds.description}</p>
                <code className="bg-graphite text-flame text-xs p-2 rounded block break-all font-mono border border-paper/20">
                  {ds.endpoint}
                </code>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── SECTION 5: WHO BUILT IT / WHO MADE IT POSSIBLE ─── */}
      <section className="mb-14" aria-labelledby="builders-heading">
        <div className="flex items-center justify-between mb-6 border-b-2 border-graphite/20 pb-3">
          <h2 id="builders-heading" className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite">
            5. WHO BUILT IT
          </h2>
          <span className="font-mono text-xs font-bold text-paper bg-graphite px-3 py-1 rounded-sm">
            PRODUCTION TEAM
          </span>
        </div>

        {/* If project has distinct code authors (contributors), render WHO WROTE IT first */}
        {project.contributors && project.contributors.length > 0 ? (
          <div className="space-y-8">
            {/* Block 1: Code Authors */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono font-bold text-sm uppercase text-olive tracking-wider">
                  WHO WROTE IT
                </h3>
                <span className="font-mono text-xs font-bold text-paper bg-flame px-2.5 py-0.5 rounded-sm">
                  {project.contributors.length} BUILDERS
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.contributors.map((c) => (
                  <div
                    key={c.name}
                    className="bg-paper p-5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]"
                  >
                    <h4 className="font-mono font-bold text-base text-graphite mb-0.5">
                      {c.name}
                    </h4>
                    <span className="font-mono text-xs text-olive font-bold block">
                      {c.detail}
                    </span>
                    {c.did && (
                      <span className="font-mono text-xs text-flame font-bold block mt-1.5 pt-1.5 border-t border-graphite/10">
                        ✦ {c.did}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Block 2: Operations / Made It Possible */}
            <div className="pt-6 border-t-2 border-graphite/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-mono font-bold text-sm uppercase text-olive tracking-wider">
                  WHO MADE IT POSSIBLE
                </h3>
                <span className="font-mono text-xs font-bold text-graphite bg-paper border border-graphite px-2.5 py-0.5 rounded-sm">
                  0 LINES OF CODE
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {project.builders.map((b) => (
                  <div
                    key={b.name}
                    className="bg-paper p-5 rounded-sm border-2 border-graphite/80 shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:border-flame transition-all"
                  >
                    <h4 className="font-mono font-bold text-base text-graphite mb-0.5">
                      <Link
                        href={`/team#${b.founderId}`}
                        className="hover:text-flame hover:underline"
                      >
                        {b.name} ↗
                      </Link>
                    </h4>
                    <span className="font-mono text-xs font-bold text-flame block">
                      {b.did || b.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Standard Flagship Project Builders */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {project.builders.map((b) => (
              <div
                key={b.name}
                className="bg-paper p-5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:border-flame transition-all"
              >
                <h3 className="font-mono font-bold text-base text-graphite mb-0.5">
                  <Link
                    href={`/team#${b.founderId}`}
                    className="hover:text-flame hover:underline"
                  >
                    {b.name} ↗
                  </Link>
                </h3>
                <span className="font-mono text-xs font-bold text-flame block">
                  {b.did || b.role}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Faculty Authorization & Support */}
        {project.faculty && project.faculty.length > 0 && (
          <div className="mt-8 pt-6 border-t-2 border-graphite/20">
            <h3 className="font-mono font-bold text-sm uppercase text-olive mb-4 tracking-wider">
              FACULTY AUTHORIZATION &amp; SUPPORT
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.faculty.map((f) => (
                <div
                  key={f.name}
                  className="bg-flame/5 p-4 rounded-sm border-2 border-flame/40 shadow-[3px_3px_0px_0px_rgba(242,100,48,0.4)]"
                >
                  <h4 className="font-mono font-bold text-sm text-graphite mb-0.5">
                    {f.name}
                  </h4>
                  <span className="font-mono text-xs text-flame font-bold block">
                    {f.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* ─── SECTION 7: STACK AND CODE ─── */}
      <section className="mb-14 border-2 border-graphite p-8 rounded-sm shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] bg-paper">
        <h2 className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite mb-6 border-b-2 border-graphite/20 pb-3">
          7. STACK AND CODE
        </h2>

        <div className="space-y-4 font-mono text-xs md:text-sm">
          {project.stackAndCode?.technologies && (
            <div>
              <span className="text-olive font-bold block mb-2">Technologies Used:</span>
              <div className="flex flex-wrap gap-2">
                {project.stackAndCode.technologies.map((t) => (
                  <span
                    key={t}
                    className="bg-graphite text-paper px-3 py-1 rounded-sm text-xs font-bold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.stackAndCode?.repoUrl && (
            <div className="pt-2">
              <span className="text-olive font-bold block mb-1">Source Code Repository:</span>
              <a
                href={project.stackAndCode.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-flame font-bold hover:underline inline-flex items-center gap-1 text-sm"
              >
                {project.stackAndCode.repoUrl} ↗
              </a>
              <p className="text-graphite/60 text-xs mt-1">
                {project.stackAndCode.repoNote}
              </p>
            </div>
          )}

          {project.stackAndCode.attributionsList && project.stackAndCode.attributionsList.length > 0 && (
            <div className="pt-4 border-t border-graphite/20 bg-flame/5 p-4 rounded-sm border border-flame/30">
              <span className="text-flame font-bold block mb-2">
                Data Sources &amp; Public Attributions:
              </span>
              <ul className="list-disc list-inside space-y-1 text-graphite/85 text-xs">
                {project.stackAndCode.attributionsList.map((attr, idx) => (
                  <li key={idx}>{attr}</li>
                ))}
              </ul>
            </div>
          )}

          {project.stackAndCode.attribution && (
            <div className="pt-4 border-t border-graphite/20 bg-flame/5 p-4 rounded-sm border border-flame/30">
              <span className="text-flame font-bold block mb-1">
                Attribution &amp; Prior Art:
              </span>
              <p className="text-graphite/85 leading-relaxed text-xs">
                {project.stackAndCode.attribution.note}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ─── SECTION 8: CTA ─── */}
      <section className="border-t-4 border-graphite pt-10 text-center">
        {project.slug === "celestia" ? (
          <>
            <h2 className="font-mono font-black text-2xl md:text-3xl text-graphite uppercase mb-3 max-w-2xl mx-auto leading-tight">
              Your department has a website that has not been touched since 2022.
            </h2>
            <p className="font-hand text-2xl md:text-3xl text-flame mb-8 max-w-2xl mx-auto leading-relaxed font-bold">
              We do this.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#footer"
                className="bg-flame text-paper font-mono font-bold text-sm px-8 py-3.5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
              >
                TALK TO US ↗
              </Link>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-paper text-graphite font-mono font-bold text-sm px-8 py-3.5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
                >
                  SEE THE SITE ↗
                </a>
              )}
            </div>
          </>
        ) : isOpenTool ? (
          <>
            <h2 className="font-mono font-black text-2xl md:text-3xl text-graphite uppercase mb-3">
              The data layer works. The reporting layer needs people.
            </h2>
            <p className="font-hand text-xl md:text-2xl text-olive mb-8 max-w-2xl mx-auto leading-relaxed">
              If you want to help maintain RoadUndo, or use the free open API endpoints in something you are building, the repository and endpoints are open.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={project.live || "https://roadundo.vercel.app"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-flame text-paper font-mono font-bold text-sm px-8 py-3.5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
              >
                READ THE API DOCS ↗
              </a>
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-paper text-graphite font-mono font-bold text-sm px-8 py-3.5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
                >
                  CONTRIBUTE ON GITHUB ↗
                </a>
              )}
            </div>
          </>
        ) : (
          <>
            <h2 className="font-mono font-black text-2xl md:text-3xl text-graphite uppercase mb-3">
              Running a fest and need something like this?
            </h2>
            <p className="font-hand text-xl md:text-2xl text-olive mb-8 max-w-2xl mx-auto leading-relaxed">
              We have built two. We are students, we work fast, and we know what a college fest actually needs because we have run them.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#footer"
                className="bg-flame text-paper font-mono font-bold text-sm px-8 py-3.5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
              >
                TALK TO US ↗
              </Link>
              <Link
                href="/chapters"
                className="bg-paper text-graphite font-mono font-bold text-sm px-8 py-3.5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
              >
                BRING ELEVATES TO YOUR CAMPUS ↗
              </Link>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
