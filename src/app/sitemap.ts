import type { MetadataRoute } from "next";
import { EVENTS } from "@/data/events";
import { PEER_LABS } from "@/data/peer-labs";
import { CHAPTERS } from "@/data/chapters";
import { ALL_CASE_STUDIES } from "@/data/projects";
import { FOUNDERS } from "@/data/team/founders";
import { getAllBlogPosts } from "@/lib/data/blog";
import { fetchEventSlugs } from "@/lib/data/events";
import { fetchPeerLabSlugs } from "@/lib/data/peer-labs";
import { fetchProjectSlugs } from "@/lib/data/projects";
import { fetchChapters } from "@/lib/data/chapters";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.elevates.live";
  const currentDate = new Date();

  const [projectSlugs, eventSlugs, peerLabSlugs, chapters, allPosts] = await Promise.all([
    fetchProjectSlugs().catch(() => ALL_CASE_STUDIES.map((p) => p.slug)),
    fetchEventSlugs().catch(() => EVENTS.map((e) => e.slug)),
    fetchPeerLabSlugs().catch(() => PEER_LABS.map((p) => p.slug)),
    fetchChapters().catch(() => CHAPTERS),
    getAllBlogPosts(),
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

  const founderEntries: MetadataRoute.Sitemap = FOUNDERS.map((f) => ({
    url: `${baseUrl}/founders/${f.id}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
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
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/what-is-elevates`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/events`,
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
      url: `${baseUrl}/clusters`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/peer-labs`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/founders`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/history`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/press`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/for-colleges`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/join`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/code-of-conduct`,
      lastModified: currentDate,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/elevates-os`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/ecosystem`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...allPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...projectEntries,
    ...eventEntries,
    ...peerLabEntries,
    ...chapterEntries,
    ...founderEntries,
  ];
}
