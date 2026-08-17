import { osGet } from "@/lib/os-client";
import { EVENTS } from "@/data/events";
import type { EventItem, EventCategory } from "@/types/event";

type OsEvent = {
  id: string;
  title: string;
  slug: string;
  summary?: string;
  description?: string;
  venue?: string;
  startsAt: string;
  endsAt: string;
  capacity?: number;
  seatsLeft?: number;
  status?: string;
  bannerUrl?: string;
  mode?: string;
  category?: string;
  chapterSlug?: string;
  chapterName?: string;
  registrationOpen?: boolean;
};

function mapOsEvent(e: OsEvent): EventItem {
  const start = new Date(e.startsAt);
  const end = new Date(e.endsAt);
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  const time = (d: Date) =>
    d.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

  const staticMatch = EVENTS.find((x) => x.slug === e.slug);

  return {
    id: e.id,
    slug: e.slug,
    title: e.title,
    tagline: e.summary ?? staticMatch?.tagline ?? "",
    description: e.summary ?? e.description ?? staticMatch?.description ?? "",
    fullDescription:
      e.description ?? staticMatch?.fullDescription ?? e.summary ?? "",
    format: staticMatch?.format ?? "Campus Exclusive",
    category: (e.category as EventCategory) ?? staticMatch?.category ?? "Workshop",
    status:
      e.registrationOpen
        ? "Upcoming"
        : start < new Date()
          ? "Completed"
          : "Upcoming",
    startDate: fmt(start),
    endDate: fmt(end),
    startTime: time(start),
    endTime: time(end),
    isoStartDate: e.startsAt,
    isoEndDate: e.endsAt,
    venue: e.venue ?? staticMatch?.venue ?? "",
    locationName: staticMatch?.locationName ?? "",
    organizer: staticMatch?.organizer ?? [{ name: "ELEVATES" }],
    hosts: staticMatch?.hosts ?? [],
    topics: staticMatch?.topics ?? [],
    attendeesCount: staticMatch?.attendeesCount ?? 0,
    coverImage: e.bannerUrl ?? staticMatch?.coverImage ?? "/images/og-default.png",
    featured: staticMatch?.featured ?? false,
  };
}

export async function fetchEvents(
  status?: "upcoming" | "past",
): Promise<EventItem[]> {
  const qs = status ? `?status=${status}` : "";
  const live = await osGet<{ events: OsEvent[] }>(`/events${qs}`, ["events"]);
  if (!live?.events?.length) {
    if (status === "upcoming") {
      return EVENTS.filter((e) => e.status === "Upcoming" || e.status === "Open");
    }
    if (status === "past") {
      return EVENTS.filter((e) => e.status === "Completed");
    }
    return EVENTS;
  }
  return live.events.map(mapOsEvent);
}

export async function fetchEventBySlug(
  slug: string,
): Promise<EventItem | undefined> {
  const live = await osGet<OsEvent>(`/events/${slug}`, [
    "events",
    `event:${slug}`,
  ]);
  if (!live) return EVENTS.find((e) => e.slug === slug);
  return mapOsEvent(live);
}

export async function fetchEventSlugs(): Promise<string[]> {
  const live = await osGet<{ events: OsEvent[] }>("/events", ["events"]);
  if (!live?.events?.length) return EVENTS.map((e) => e.slug);
  return live.events.map((e) => e.slug).filter(Boolean);
}
