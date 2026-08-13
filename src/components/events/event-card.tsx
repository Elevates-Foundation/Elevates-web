import React from "react";
import Link from "next/link";
import { EventItem } from "@/types/event";
import EventBadge from "./event-badge";
import Doodle from "@/components/doodle";

interface EventCardProps {
  event: EventItem;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="group relative bg-paper text-graphite p-6 flex flex-col justify-between border-4 border-graphite shadow-[8px_8px_0px_0px_rgba(45,45,52,1)] hover:shadow-[12px_12px_0px_0px_rgba(242,100,48,1)] transition-all duration-300 hover:-translate-y-1">
      {/* Top badges bar */}
      <div className="flex justify-between items-center border-b-2 border-dashed border-graphite/20 pb-4 mb-4 gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          <EventBadge type={event.format} />
          <EventBadge type={event.category} />
        </div>
        <span className="font-mono text-xs text-flame font-bold border border-flame px-2 py-0.5 rounded rotate-1">
          {event.status}
        </span>
      </div>

      {/* Main Title & Description */}
      <div className="flex-grow flex flex-col justify-center py-2">
        <h3 className="text-2xl md:text-3xl font-black uppercase leading-tight text-graphite group-hover:text-flame transition-colors mb-2">
          <Link href={`/events/${event.slug}`} className="hover:underline">
            {event.title}
          </Link>
        </h3>
        <p className="font-hand text-olive text-base mb-3 line-clamp-2">
          {event.tagline}
        </p>
        <p className="font-mono text-xs text-graphite/70 line-clamp-2 mb-4">
          {event.description}
        </p>
      </div>

      {/* Date & Location Footer */}
      <div className="pt-4 border-t-2 border-dashed border-graphite/20 flex flex-col gap-3 mt-auto">
        <div className="flex justify-between items-center font-mono text-xs text-olive">
          <span className="truncate max-w-[180px]">📍 {event.venue}</span>
          <span className="font-bold shrink-0">{event.startDate}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="font-mono text-xs text-graphite/60">
            👥 {event.attendeesCount} attended
          </span>
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-1 font-mono text-xs font-bold text-flame group-hover:translate-x-1 transition-transform"
          >
            VIEW DETAILS ↗
          </Link>
        </div>
      </div>

      <Doodle
        type="scribble"
        color="#f26430"
        className="absolute bottom-4 right-4 w-20 h-20 opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"
      />
    </div >
  );
}
