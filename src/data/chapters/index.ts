import { eranadKnowledgeCityChapter } from "./eranad-knowledge-city";

export interface ChapterMember {
  name: string;
  role: string;
  tag?: string;
  github?: string;
  linkedin?: string;
}

export interface ExecomMember {
  name: string;
  role: string;
  year?: string;
  branch?: string;
  tag?: string;
  github?: string;
  linkedin?: string;
}

export interface ExecomTeamGroup {
  teamName: string;
  tagline?: string;
  badge: string;
  heads: ExecomMember[];
  members: ExecomMember[];
}

export interface ChapterTerm {
  id: string;
  termNumber: string; // e.g. "02"
  academicYear: string; // e.g. "2026-27"
  isCurrent: boolean;
  executiveCore: {
    chairman: ExecomMember;
    secretary: ExecomMember;
    viceChairmen: ExecomMember[];
    jointSecretaries: ExecomMember[];
  };
  yearCoordinators: {
    year: string;
    coordinators: ExecomMember[];
  }[];
  domainTeams: ExecomTeamGroup[];
}

export interface ChapterEvent {
  slug?: string;
  title: string;
  date: string;
  headcount: number;
  description: string;
}

export interface ChapterProject {
  slug?: string;
  title: string;
  description: string;
  url?: string;
  builder: string;
}

export interface Chapter {
  slug: string;
  chapterNumber: string;
  name: string;
  college: string;
  district: string;
  foundedDate: string;
  lead: {
    name: string;
    role: string;
  };
  facultyCoordinator?: {
    name: string;
    designation: string;
    department: string;
    image?: string;
  };
  team: ChapterMember[]; // Backward compatibility flat list
  terms?: ChapterTerm[]; // Multi-term tree structure
  events: ChapterEvent[];
  projects: ChapterProject[];
  stats: {
    eventsCount: number;
    studentsImpacted: number;
    platformRequests?: string;
  };
}

export const CHAPTERS: Chapter[] = [
  eranadKnowledgeCityChapter,
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  const s = slug.toLowerCase();
  return CHAPTERS.find(
    (c) =>
      c.slug === s ||
      ((s === "ekc" || s === "ekctc" || s === "eranad-knowledge-city") &&
        (c.slug === "ekc" || c.slug === "eranad-knowledge-city"))
  );
}

export function getAllChapterSlugs(): string[] {
  return ["eranad-knowledge-city", "ekc", "ekctc"];
}
