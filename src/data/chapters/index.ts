import { eranadKnowledgeCityChapter } from "./eranad-knowledge-city";

export interface ChapterMember {
  name: string;
  role: string;
  tag?: string;
  github?: string;
  linkedin?: string;
}

export interface ChapterEvent {
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
  };
  team: ChapterMember[];
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
  return CHAPTERS.find((c) => c.slug === slug);
}

export function getAllChapterSlugs(): string[] {
  return CHAPTERS.map((c) => c.slug);
}
