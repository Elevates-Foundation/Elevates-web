import { osGet } from "@/lib/os-client";
import { CHAPTERS, getChapterBySlug, type Chapter } from "@/data/chapters";

type OsChapterList = {
  chapters: Array<{
    id: string;
    name: string;
    slug: string;
    college: string;
    city?: string;
    district?: string;
    logoUrl?: string;
    memberCount?: number;
    eventCount?: number;
    projectCount?: number;
    foundedAt?: string;
  }>;
};

export async function fetchChapters(): Promise<Chapter[]> {
  const live = await osGet<OsChapterList>("/chapters", ["chapters"]);
  if (!live?.chapters?.length) return CHAPTERS;

  return live.chapters.map((c) => {
    const staticChapter = getChapterBySlug(c.slug);
    if (staticChapter) {
      return {
        ...staticChapter,
        name: c.name,
        college: c.college,
        district: c.district ?? staticChapter.district,
        stats: {
          ...staticChapter.stats,
          eventsCount: c.eventCount ?? staticChapter.stats.eventsCount,
          studentsImpacted:
            c.memberCount ?? staticChapter.stats.studentsImpacted,
        },
      };
    }
    return null;
  }).filter((c): c is Chapter => c !== null);
}

export async function fetchChapterBySlug(
  slug: string,
): Promise<Chapter | undefined> {
  const fallback = getChapterBySlug(slug) || getChapterBySlug("eranad-knowledge-city");
  
  const live = await osGet<{
    slug: string;
    name: string;
    college: string;
    district?: string;
    city?: string;
    notes?: string;
    memberCount?: number;
    eventCount?: number;
    roster?: Array<{ fullName: string; title: string; roleKey: string }>;
  }>(`/chapters/${slug}`, ["chapters", `chapter:${slug}`]);

  if (!live) return fallback;
  if (!fallback) {
    return {
      slug: live.slug,
      chapterNumber: "01",
      name: live.name,
      college: live.college,
      district: live.district ?? live.city ?? "Malappuram",
      foundedDate: "September 2025",
      lead: {
        name: live.roster?.[0]?.fullName ?? "Danish Gagarin",
        role: live.roster?.[0]?.title ?? "Campus Chapter Lead",
      },
      team:
        live.roster?.map((r) => ({
          name: r.fullName,
          role: r.title,
        })) ?? [],
      events: [],
      projects: [],
      stats: {
        eventsCount: live.eventCount ?? 17,
        studentsImpacted: live.memberCount ?? 400,
      },
    };
  }
  return {
    ...fallback,
    name: live.name || fallback.name,
    college: live.college || fallback.college,
    district: live.district ?? fallback.district,
    team:
      live.roster?.length ? live.roster.map((r) => ({
        name: r.fullName,
        role: r.title,
      })) : fallback.team,
    events: fallback.events,
    projects: fallback.projects,
    stats: {
      ...fallback.stats,
      eventsCount: live.eventCount ?? fallback.stats.eventsCount,
      studentsImpacted: live.memberCount ?? fallback.stats.studentsImpacted,
    },
  };
}
