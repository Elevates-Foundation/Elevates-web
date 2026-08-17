import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { fetchEventBySlug, fetchEvents, fetchEventSlugs } from "@/lib/data/events";
import EventBadge from "@/components/events/event-badge";
import Doodle from "@/components/doodle";
import EventRsvpForm from "@/components/events/event-rsvp-form";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await fetchEventSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const event = await fetchEventBySlug(resolvedParams.slug);

  if (!event) {
    return {
      title: "Event Not Found | ELEVATES Kerala",
    };
  }

  return {
    title: `${event.title} | ELEVATES Kerala Events`,
    description: event.description,
    alternates: {
      canonical: `/events/${event.slug}`,
    },
    openGraph: {
      title: `${event.title} | ELEVATES Kerala`,
      description: event.description,
      url: `https://www.elevates.live/events/${event.slug}`,
      type: "article",
      images: [
        {
          url: event.coverImage || "/og-image.png",
          alt: event.title,
        },
      ],
    },
  };
}

export default async function EventDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const event = await fetchEventBySlug(resolvedParams.slug);

  if (!event) {
    notFound();
  }

  const allEvents = await fetchEvents();
  const relatedEvents = allEvents.filter((e) => e.id !== event.id).slice(0, 3);

  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.description,
    "startDate": event.isoStartDate,
    "endDate": event.isoEndDate,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": event.venue.toLowerCase().includes("remote") || event.venue.toLowerCase().includes("online")
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": event.venue,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": event.locationName,
        "addressRegion": "Kerala",
        "addressCountry": "IN",
      },
    },
    "organizer": event.organizer.map((org) => ({
      "@type": "Organization",
      "name": org.name,
      "url": "https://www.elevates.live",
    })),
    "performer": event.hosts.map((host) => ({
      "@type": "Person",
      "name": host.name,
    })),
    "image": `https://www.elevates.live${event.coverImage}`,
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-32 md:pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto selection:bg-flame selection:text-paper relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />

      {/* Breadcrumb Navigation Bar */}
      <nav aria-label="Breadcrumb" className="mb-6 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href="/events" className="hover:underline">Events</Link>
        <span>/</span>
        <span className="text-graphite font-bold">{event.title}</span>
      </nav>

      {/* Master Event Card Container */}
      <div className="bg-paper border-4 border-graphite rounded-sm p-6 md:p-10 shadow-[12px_12px_0px_0px_rgba(45,45,52,1)] mb-14 relative">
        {/* Top Tape Graphic */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-flame/80 rotate-[-1deg] opacity-90 border border-graphite/30" />

        {/* 2-Column Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT COLUMN (Span 6): Cover Poster, Title, Attendees, Date */}
          <div className="lg:col-span-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r-2 border-graphite/20 pb-8 lg:pb-0 lg:pr-10">
            <div>
              {/* Event Cover Image Card */}
              <div className="relative mb-4 rounded-sm overflow-hidden border-3 border-graphite shadow-md bg-graphite/5 flex items-center justify-center">
                <img
                  src={event.coverImage}
                  alt={event.title}
                  className="w-full max-h-[500px] object-contain rounded-sm"
                />
              </div>

              {/* Dynamic Peer Lab Link (Only if linked) */}
              {event.peerLabSlug && (
                <Link
                  href={`/peer-labs/${event.peerLabSlug}`}
                  className="mb-6 bg-flame hover:bg-graphite text-paper p-3 font-mono text-xs md:text-sm font-bold flex justify-between items-center transition-colors rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]"
                >
                  <span>{event.peerLabTitle || "View Connected Peer Lab Series"}</span>
                  <span>↗</span>
                </Link>
              )}

              {/* Title & Tagline */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-graphite leading-[1.15] mb-2">
                {event.title}
              </h1>

              <p className="font-mono text-xs md:text-sm text-graphite/70 mb-6 font-medium">
                {event.tagline}
              </p>

              {/* Attendees & CTA Pill Box */}
              <div className="flex items-center justify-between bg-graphite/5 p-4 rounded-sm border border-graphite/20 mb-8 gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2 overflow-hidden">
                    {event.hosts.slice(0, 3).map((h, i) => (
                      <div
                        key={i}
                        className="inline-block h-7 w-7 rounded-full ring-2 ring-paper bg-flame text-paper font-mono font-bold text-[10px] flex items-center justify-center"
                      >
                        {h.name.charAt(0)}
                      </div>
                    ))}
                  </div>
                  <span className="font-mono text-xs font-bold text-graphite">
                    <strong className="text-flame">{event.attendeesCount} shy builders</strong> attended
                  </span>
                </div>

                {event.registrationUrl && event.status !== "Completed" ? (
                  <a
                    href={event.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-flame text-paper font-mono font-bold px-5 py-2 rounded-sm border border-graphite hover:scale-105 transition-transform text-xs uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    Apply For Invite ↗
                  </a>
                ) : (
                  <span className="bg-graphite text-paper font-mono font-bold px-4 py-2 rounded-sm text-xs uppercase">
                    REGISTRATIONS CLOSED
                  </span>
                )}
              </div>
            </div>

            {/* Date & Time Footer Row */}
            <div className="pt-6 border-t-2 border-dashed border-graphite/20 font-mono flex items-center justify-between text-xs md:text-sm text-graphite">
              <div className="flex items-center gap-2">
                <span className="text-base">📅</span>
                <div>
                  <strong className="block font-bold">{event.startDate}</strong>
                  <span className="text-olive text-[11px]">{event.startTime}</span>
                </div>
              </div>
              <span className="text-xl font-bold text-flame">—</span>
              <div className="flex items-center gap-2 text-right">
                <div>
                  <strong className="block font-bold">{event.endDate}</strong>
                  <span className="text-olive text-[11px]">{event.endTime}</span>
                </div>
                <span className="text-base">📅</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (Span 6): Badges, Hosted By, Shy Leaders, Topics, Description */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Format Badges Row */}
            <div className="flex items-center gap-2 flex-wrap">
              <EventBadge type={event.format} />
              <EventBadge type={event.category} />
              <EventBadge type={event.status} />
            </div>

            {/* Hosted By Section */}
            <div className="border-b border-graphite/15 pb-4">
              <span className="block font-mono text-xs text-flame uppercase tracking-widest mb-2 font-bold">
                HOSTED BY
              </span>
              <div className="space-y-1 font-mono text-sm font-bold text-graphite">
                {event.organizer.map((org, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-flame inline-block" />
                    <span>{org.name}</span>
                  </div>
                ))}
              </div>
              <div className="font-mono text-xs text-olive mt-2 pl-4">
                📍 {event.venue}, {event.locationName}
              </div>
            </div>

            {/* Shy Leaders & Mentors Grid */}
            <div className="border-b border-graphite/15 pb-4">
              <span className="block font-mono text-xs text-flame uppercase tracking-widest mb-3 font-bold">
                SHY LEADERS & MENTORS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {event.hosts.map((host, i) => (
                  <div key={i} className="flex items-center gap-3 bg-graphite/5 p-2.5 rounded-sm border border-graphite/15">
                    <div className="w-7 h-7 rounded-full bg-olive text-paper font-mono font-bold text-xs flex items-center justify-center">
                      {host.name.charAt(0)}
                    </div>
                    <div>
                      <span className="block font-mono text-xs font-bold text-graphite">{host.name}</span>
                      {host.role && <span className="block font-mono text-[10px] text-olive">{host.role}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Topics & Domains */}
            <div className="border-b border-graphite/15 pb-4">
              <span className="block font-mono text-xs text-flame uppercase tracking-widest mb-2 font-bold">
                TOPICS & DOMAINS
              </span>
              <div className="flex flex-wrap gap-1.5">
                {event.topics.map((t, i) => (
                  <span key={i} className="font-mono text-xs bg-paper border border-graphite/30 text-graphite px-3 py-1 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* About This Event Description */}
            <div>
              <span className="block font-mono text-xs text-flame uppercase tracking-widest mb-2 font-bold">
                ABOUT THIS EVENT
              </span>
              <p className="font-mono text-xs md:text-sm text-graphite/90 leading-relaxed whitespace-pre-line">
                {event.fullDescription}
              </p>
            </div>

            {(event.status === "Upcoming" || event.status === "Open") && (
              <div className="pt-4">
                <EventRsvpForm eventSlug={event.slug} eventTitle={event.title} />
              </div>
            )}

          </div>

        </div>
      </div>

      {/* UPCOMING & RELATED LABS Section */}
      {relatedEvents.length > 0 && (
        <>
          <div className="border-b-4 border-graphite my-12" />
          <section>
            <h2 className="text-2xl md:text-3xl font-black uppercase text-graphite mb-8">
              UPCOMING & RELATED LABS
            </h2>

            <div className="space-y-4">
              {relatedEvents.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/events/${rel.slug}`}
                  className="group bg-paper p-5 border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:shadow-[6px_6px_0px_0px_rgba(242,100,48,1)] transition-all flex items-center justify-between flex-wrap gap-4 rounded-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-flame/10 rounded-sm border border-flame flex items-center justify-center font-mono font-bold text-flame text-xs">
                      {rel.category.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-mono font-bold text-base text-graphite group-hover:text-flame transition-colors">
                        {rel.title}
                      </h3>
                      <span className="font-mono text-xs text-olive">
                        📍 {rel.venue} • {rel.startDate}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <EventBadge type={rel.format} />
                    <span className="font-mono text-sm font-bold text-flame group-hover:translate-x-1 transition-transform">
                      ↗
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
