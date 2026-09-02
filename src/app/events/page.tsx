import React from "react";
import Link from "next/link";
import EventCard from "@/components/events/event-card";
import EventBadge from "@/components/events/event-badge";
import Doodle from "@/components/doodle";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import EventsDirectoryClient from "@/components/events/events-directory-client";
import { fetchEvents } from "@/lib/data/events";

export const metadata = {
  title: "Events & Workshops | ELEVATES",
  description: "Browse ELEVATES events, workshops, hackathons, and meetups across Kerala. Hands-on learning for quiet builders and introverted students.",
  alternates: {
    canonical: "/events",
  },
  openGraph: {
    title: "Events & Workshops | ELEVATES",
    description: "Browse ELEVATES events, workshops, hackathons, and meetups across Kerala. Hands-on learning for quiet builders.",
    url: "https://www.elevates.live/events",
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Events & Workshops | ELEVATES",
    description: "Browse ELEVATES events, workshops, hackathons, and meetups across Kerala. Hands-on learning for quiet builders.",
  },
};

export default async function EventsPage() {
  const allEvents = await fetchEvents();
  const featuredEvent = allEvents.find((e) => e.featured) || allEvents[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "ELEVATES Technical Events & Workshops",
    "description": "Directory of ELEVATES events, workshops, and hackathons in Kerala.",
    "itemListElement": allEvents.map((event, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": event.title,
      "url": `https://www.elevates.live/events/${event.slug}`,
    })),
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-40 md:pt-48 pb-24 px-6 md:px-12 max-w-7xl mx-auto selection:bg-flame selection:text-paper relative overflow-hidden">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Events", path: "/events" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">Events</span>
      </nav>

      {/* Header Section */}
      <div className="mb-14 border-b-4 border-graphite pb-8 relative">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 border border-graphite font-bold rounded-sm rotate-[-1deg]">
            ELEVATES // WORKSHOPS &amp; MEETUPS
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // SINGLE &amp; MULTI-DAY EVENTS
          </span>
        </div>

        <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tight text-graphite">
          EVENTS &amp; <span className="text-flame">WORKSHOPS</span>
        </h1>
        <p className="font-hand text-xl md:text-2xl text-olive mt-3 max-w-3xl">
          Hands-on workshops, hackathons, and campus meetups designed for quiet &amp; introverted talent across Kerala.
        </p>

        {/* Tape Graphic */}
        <div className="absolute -top-6 right-10 w-28 h-8 bg-flame/80 rotate-[-2deg] opacity-70 hidden md:block" />
        <Doodle
          type="star"
          color="#f26430"
          className="hidden md:block absolute right-4 top-2 w-20 h-20 rotate-12 opacity-80"
        />
      </div>

      {/* Featured Event Hero Banner */}
      {featuredEvent && (
        <section className="mb-16 bg-graphite text-paper p-6 sm:p-8 md:p-12 rounded-sm border-4 border-graphite shadow-[12px_12px_0px_0px_rgba(242,100,48,1)] relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column (Span 7) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  <EventBadge type={featuredEvent.format} />
                  <EventBadge type={featuredEvent.category} />
                  <span className="font-mono text-xs text-flame font-bold bg-paper px-2.5 py-0.5 rounded text-graphite">
                    FEATURED EVENT
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-paper mb-3 leading-tight tracking-tight">
                  {featuredEvent.title}
                </h2>
                <p className="font-hand text-flame text-xl md:text-2xl mb-4">
                  {featuredEvent.tagline}
                </p>
                <p className="font-mono text-xs sm:text-sm text-paper/80 mb-6 leading-relaxed max-w-xl">
                  {featuredEvent.description}
                </p>

                <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs text-olive mb-6 flex-wrap">
                  <span>📍 {featuredEvent.venue}</span>
                  <span>📅 {featuredEvent.startDate}</span>
                  <span>👥 {featuredEvent.attendeesCount} Quiet Builders Attended</span>
                </div>
              </div>

              <div>
                <Link
                  href={`/events/${featuredEvent.slug}`}
                  className="inline-flex items-center gap-2 bg-flame text-paper font-mono font-bold px-6 py-3 border-2 border-paper hover:bg-paper hover:text-graphite transition-colors text-xs sm:text-sm rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  VIEW EVENT DETAILS ↗
                </Link>
              </div>
            </div>

            {/* Right Column (Span 5): Uncropped Full Poster */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative border-4 border-paper/30 p-2 sm:p-3 bg-paper/10 rounded-sm shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)] w-full max-w-sm flex items-center justify-center">
                <img
                  src={featuredEvent.coverImage}
                  alt={featuredEvent.title}
                  className="w-full h-auto max-h-[460px] md:max-h-[500px] object-contain rounded-sm shadow-sm"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Directory Grid with Filters, Search, and Pagination */}
      <EventsDirectoryClient events={allEvents} />
    </main>
  );
}
