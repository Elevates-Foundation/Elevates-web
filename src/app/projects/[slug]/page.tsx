import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Doodle from "@/components/doodle";
import { FLAGSHIP_PROJECTS } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FLAGSHIP_PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = FLAGSHIP_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | ELEVATES",
    };
  }

  return {
    title: `${project.title} — ${project.metrics[0]?.value} ${project.metrics[0]?.label} | ELEVATES`,
    description: project.tagline || project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — Case Study | ELEVATES`,
      description: project.tagline,
      url: `https://www.elevates.live/projects/${project.slug}`,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = FLAGSHIP_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

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
        "headline": `${project.title} — ${project.tagline}`,
        "datePublished": "2025-10-09",
        "author": { "@id": "https://elevates.live/#organization" },
        "about": {
          "@type": "SoftwareApplication",
          "@id": `https://elevates.live/projects/${project.slug}#app`,
          "name": project.title,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "author": { "@id": "https://elevates.live/#organization" },
          "contributor": project.builders.map((b) => ({
            "@id": `https://elevates.live/team#${b.founderId}`,
          })),
        },
      },
    ],
  };

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
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest bg-flame text-paper px-3 py-1 rounded-sm rotate-[-1deg] border border-graphite">
            CASE STUDY // PRODUCTION PROOF
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

      {/* ─── SECTION 4: HOW IT HELD UP ─── */}
      <section className="mb-14 bg-paper border-3 border-graphite rounded-sm p-8 shadow-[6px_6px_0px_0px_rgba(45,45,52,1)]">
        <h2 className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite mb-4">
          4. HOW IT HELD UP
        </h2>

        <p className="font-mono text-sm md:text-base text-graphite/85 leading-relaxed mb-6">
          {project.howItHeldUp.summary}
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

      {/* ─── SECTION 5: WHAT WE WOULD DO DIFFERENTLY ─── */}
      <section className="mb-14 bg-graphite/5 border-4 border-graphite rounded-sm p-8 shadow-[8px_8px_0px_0px_rgba(45,45,52,1)]">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold text-paper bg-flame px-3 py-1 rounded-sm">
            HONEST RETROSPECTIVE
          </span>
          <h2 className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite">
            5. WHAT WE WOULD DO DIFFERENTLY
          </h2>
        </div>

        <div className="space-y-3 font-mono text-xs md:text-sm text-graphite/85 leading-relaxed">
          {project.whatWeWouldDoDifferently.map((item, i) => (
            <div key={i} className="flex items-start gap-3 bg-paper p-4 border-2 border-graphite rounded-sm">
              <span className="text-flame font-bold shrink-0">⚠️</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 6: WHO BUILT IT ─── */}
      <section className="mb-14" aria-labelledby="builders-heading">
        <div className="flex items-center justify-between mb-6 border-b-2 border-graphite/20 pb-3">
          <h2 id="builders-heading" className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite">
            6. WHO BUILT IT
          </h2>
          <span className="font-mono text-xs font-bold text-paper bg-graphite px-3 py-1 rounded-sm">
            NAMED CONTRIBUTORS
          </span>
        </div>

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
                {b.role}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SECTION 7: STACK AND CODE ─── */}
      <section className="mb-14 border-2 border-graphite p-8 rounded-sm shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] bg-paper">
        <h2 className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite mb-6 border-b-2 border-graphite/20 pb-3">
          7. STACK AND CODE
        </h2>

        <div className="space-y-4 font-mono text-xs md:text-sm">
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

          {project.stackAndCode.repoUrl && (
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
      </section>
    </main>
  );
}
