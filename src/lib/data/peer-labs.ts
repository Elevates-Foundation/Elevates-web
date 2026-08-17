import { osGet } from "@/lib/os-client";
import { PEER_LABS } from "@/data/peer-labs";
import type { PeerLabSeries } from "@/types/peer-lab";

type OsPeerLab = {
  id: string;
  slug: string;
  title: string;
  track?: string;
  description?: string;
  syllabus?: Array<{ week?: number; title?: string }>;
  status?: string;
  applicationsOpen?: boolean;
  bannerUrl?: string;
  enrolledCount?: number;
};

function mapStatus(s?: string): PeerLabSeries["status"] {
  if (s === "active" || s === "Active") return "Active";
  if (s === "completed" || s === "Completed") return "Completed";
  return "Upcoming";
}

export async function fetchPeerLabs(): Promise<PeerLabSeries[]> {
  const live = await osGet<{ peerLabs: OsPeerLab[] }>("/peer-labs", [
    "peer-labs",
  ]);
  if (!live?.peerLabs?.length) return PEER_LABS;

  return live.peerLabs.map((p) => {
    const fallback = PEER_LABS.find((x) => x.slug === p.slug);
    if (fallback) {
      return {
        ...fallback,
        title: p.title,
        description: p.description ?? fallback.description,
        joinedCount: p.enrolledCount ?? fallback.joinedCount,
        status: mapStatus(p.status),
        coverImage: p.bannerUrl ?? fallback.coverImage,
      };
    }
    return {
      id: p.id,
      slug: p.slug,
      title: p.title,
      subtitle: p.track ?? "",
      description: p.description ?? "",
      campusName: "ELEVATES",
      status: mapStatus(p.status),
      joinedCount: p.enrolledCount ?? 0,
      lessons:
        p.syllabus?.map((s, i) => ({
          id: `${p.slug}-${i}`,
          slug: p.slug,
          title: s.title ?? `Week ${s.week ?? i + 1}`,
          date: "",
          time: "",
          location: "",
        })) ?? [],
      facilitators: [],
      resources: [],
      coverImage: p.bannerUrl,
      featured: true,
    } satisfies PeerLabSeries;
  });
}

export async function fetchPeerLabBySlug(
  slug: string,
): Promise<PeerLabSeries | undefined> {
  const live = await osGet<OsPeerLab>(`/peer-labs/${slug}`, [
    "peer-labs",
    `peer-lab:${slug}`,
  ]);
  const fallback = PEER_LABS.find((p) => p.slug === slug || p.id === slug);
  if (!live) return fallback;
  if (fallback) {
    return {
      ...fallback,
      title: live.title,
      description: live.description ?? fallback.description,
      joinedCount: live.enrolledCount ?? fallback.joinedCount,
      status: mapStatus(live.status),
    };
  }
  return undefined;
}

export async function fetchPeerLabSlugs(): Promise<string[]> {
  const live = await osGet<{ peerLabs: OsPeerLab[] }>("/peer-labs", [
    "peer-labs",
  ]);
  if (!live?.peerLabs?.length) return PEER_LABS.map((p) => p.slug);
  return live.peerLabs.map((p) => p.slug).filter(Boolean);
}
