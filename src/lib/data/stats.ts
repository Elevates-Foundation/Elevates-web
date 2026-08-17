import { osGet } from "@/lib/os-client";

export type LiveStats = {
  chapters: number;
  events: number;
  projects: number;
  students: number;
};

const FALLBACK: LiveStats = {
  chapters: 1,
  events: 8,
  projects: 3,
  students: 400,
};

export async function fetchStats(): Promise<LiveStats> {
  const live = await osGet<LiveStats>("/stats", ["stats"]);
  if (!live) return FALLBACK;
  return {
    chapters: live.chapters || FALLBACK.chapters,
    events: live.events || FALLBACK.events,
    projects: live.projects || FALLBACK.projects,
    students: live.students || FALLBACK.students,
  };
}

export type CertificateVerify = {
  certificateId: string;
  holder: string;
  eventTitle: string;
  issuedAt: string;
  chapterName?: string;
  valid: boolean;
};

export async function verifyCertificate(
  id: string,
): Promise<CertificateVerify | null> {
  return osGet<CertificateVerify>(`/verify/certificate/${id}`, [
    "certificates",
  ]);
}
