import type { MetadataRoute } from "next";
import { EVENTS } from "@/data/events";
import { PEER_LABS } from "@/data/peer-labs";
import { CHAPTERS } from "@/data/chapters";
import { FLAGSHIP_PROJECTS } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.elevates.live";
  const currentDate = new Date();

  const projectEntries: MetadataRoute.Sitemap = FLAGSHIP_PROJECTS.map((proj) => ({
    url: `${baseUrl}/projects/${proj.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const eventEntries: MetadataRoute.Sitemap = EVENTS.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const peerLabEntries: MetadataRoute.Sitemap = PEER_LABS.map((lab) => ({
    url: `${baseUrl}/peer-labs/${lab.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const chapterEntries: MetadataRoute.Sitemap = CHAPTERS.map((ch) => ({
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
      images: [
        `${baseUrl}/og-image.png`,
        `${baseUrl}/favicon-32x32.png`,
      ],
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
    ...projectEntries,
    ...eventEntries,
    ...peerLabEntries,
    ...chapterEntries,
  ];
}
