import { osGet } from "@/lib/os-client";
import { FOUNDERS } from "@/data/team/founders";
import { ADVISORS } from "@/data/team/advisors";
import type { Founder } from "@/data/team/founders";
import type { Advisor } from "@/data/team/advisors";

type OsTeamMember = {
  id: string;
  fullName: string;
  avatarUrl: string;
  bio: string;
  department?: string;
  year?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  chapterSlug?: string;
  chapterName?: string;
};

export async function fetchTeam(): Promise<{ founders: Founder[]; advisors: Advisor[] }> {
  const live = await osGet<{ team: OsTeamMember[] }>("/team", ["team"]);
  if (!live?.team?.length) {
    return { founders: FOUNDERS, advisors: ADVISORS };
  }

  const founders: Founder[] = live.team.map((m) => {
    const existing = FOUNDERS.find(
      (f) =>
        f.name.toLowerCase() === m.fullName.toLowerCase() ||
        m.fullName.toLowerCase().includes(f.name.toLowerCase()) ||
        f.name.toLowerCase().includes(m.fullName.toLowerCase()),
    );
    return {
      id: existing?.id ?? m.fullName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      name: m.fullName,
      tag: existing?.tag ?? (m.bio ? m.bio.split("·")[1]?.trim() ?? "Core Founder" : "Core Founder"),
      funTitle: existing?.funTitle ?? existing?.tag,
      role: existing?.role ?? "Co-Founder",
      specialization: existing?.specialization,
      proof: existing?.proof ?? m.bio ?? "Core builder & engineer",
      linkedin: existing?.linkedin ?? (m.linkedinUrl ? m.linkedinUrl : undefined),
      cohort: "2025-26" as const,
      image: existing?.image ?? m.avatarUrl ?? "/images/founders/sarhan.jpg",
    };
  });

  return { founders, advisors: ADVISORS };
}
