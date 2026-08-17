import type { MetadataRoute } from "next";
import { EVENTS } from "@/data/events";
import { PEER_LABS } from "@/data/peer-labs";
import { CHAPTERS } from "@/data/chapters";
import { ALL_CASE_STUDIES } from "@/data/projects";
import { fetchEventSlugs } from "@/lib/data/events";
import { fetchPeerLabSlugs } from "@/lib/data/peer-labs";
import { fetchProjectSlugs } from "@/lib/data/projects";
import { fetchChapters } from "@/lib/data/chapters";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.elevates.live";
  const currentDate = new Date();

  const [projectSlugs, eventSlugs, peerLabSlugs, chapters] = await Promise.all([
    fetchProjectSlugs().catch(() => ALL_CASE_STUDIES.map((p) => p.slug)),
    fetchEventSlugs().catch(() => EVENTS.map((e) => e.slug)),
    fetchPeerLabSlugs().catch(() => PEER_LABS.map((p) => p.slug)),
    fetchChapters().catch(() => CHAPTERS),
  ]);

  const projectEntries: MetadataRoute.Sitemap = projectSlugs.map((slug) => ({
    url: `${baseUrl}/projects/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const eventEntries: MetadataRoute.Sitemap = eventSlugs.map((slug) => ({
    url: `${baseUrl}/events/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const peerLabEntries: MetadataRoute.Sitemap = peerLabSlugs.map((slug) => ({
    url: `${baseUrl}/peer-labs/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const chapterEntries: MetadataRoute.Sitemap = chapters.map((ch) => ({
    url: `${baseUrl}/chapters/${ch.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
      images: [`${baseUrl}/og-image.png`, `${baseUrl}/favicon-32x32.png`],
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/events`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/peer-labs`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/chapters`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/join`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectEntries,
    ...eventEntries,
    ...peerLabEntries,
    ...chapterEntries,
  ];
}
