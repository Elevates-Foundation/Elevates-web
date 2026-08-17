import { osGet } from "@/lib/os-client";
import { ALL_CASE_STUDIES } from "@/data/projects";
import type { FlagshipProject } from "@/types/project";

type OsProject = {
  id: string;
  title: string;
  slug: string;
  description?: string;
  stage?: string;
  repositoryUrl?: string;
  demoUrl?: string;
  awards?: string[];
  progress?: number;
  chapterName?: string;
};

/** Prefer live OS showcased projects, merge onto static case studies by slug. */
export async function fetchProjects(): Promise<FlagshipProject[]> {
  const live = await osGet<{ projects: OsProject[] }>("/projects", [
    "projects",
  ]);
  if (!live?.projects?.length) return ALL_CASE_STUDIES;

  return live.projects.map((p) => {
    const fallback = ALL_CASE_STUDIES.find((x) => x.slug === p.slug);
    if (fallback) {
      return {
        ...fallback,
        title: p.title || fallback.title,
        summary: p.description ?? fallback.summary,
        live: p.demoUrl ?? fallback.live,
        repo: p.repositoryUrl ?? fallback.repo,
      };
    }
    // Minimal projection when OS has a project not yet in static case studies
    return {
      slug: p.slug,
      title: p.title,
      client: p.chapterName ?? "ELEVATES",
      date: "",
      type: "open-tool",
      status: "live",
      summary: p.description ?? "",
      tagline: p.description?.slice(0, 80) ?? "",
      metrics: [],
      stack: [],
      repo: p.repositoryUrl ?? null,
      live: p.demoUrl ?? null,
      cover: "/og-image.png",
      situation: { title: p.title, paragraphs: [p.description ?? ""] },
      numbers: [],
      whatWeBuilt: [],
      howItHeldUp: { summary: "", metrics: [], details: [] },
      whatWeWouldDoDifferently: [],
      builders: [],
      stackAndCode: {
        technologies: [],
        repoUrl: p.repositoryUrl ?? null,
        repoNote: "",
      },
    } satisfies FlagshipProject;
  });
}

export async function fetchProjectBySlug(
  slug: string,
): Promise<FlagshipProject | undefined> {
  const live = await osGet<OsProject>(`/projects/${slug}`, [
    "projects",
    `project:${slug}`,
  ]);
  const fallback = ALL_CASE_STUDIES.find((p) => p.slug === slug);
  if (!live) return fallback;
  if (fallback) {
    return {
      ...fallback,
      title: live.title || fallback.title,
      summary: live.description ?? fallback.summary,
      live: live.demoUrl ?? fallback.live,
      repo: live.repositoryUrl ?? fallback.repo,
    };
  }
  return undefined;
}

export async function fetchProjectSlugs(): Promise<string[]> {
  const live = await osGet<{ projects: OsProject[] }>("/projects", [
    "projects",
  ]);
  if (!live?.projects?.length) return ALL_CASE_STUDIES.map((p) => p.slug);
  const liveSlugs = live.projects.map((p) => p.slug).filter(Boolean);
  return Array.from(
    new Set([...liveSlugs, ...ALL_CASE_STUDIES.map((p) => p.slug)]),
  );
}
