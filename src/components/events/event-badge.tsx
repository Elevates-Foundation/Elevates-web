import React from "react";
import { EventFormat, EventCategory, EventStatus } from "@/types/event";

interface EventBadgeProps {
  type: EventFormat | EventCategory | EventStatus | string;
  variant?: "format" | "category" | "status";
  className?: string;
}

export default function EventBadge({ type, className = "" }: EventBadgeProps) {
  let badgeStyle = "bg-paper text-graphite border-graphite";

  switch (type) {
    case "Campus Exclusive":
      badgeStyle = "bg-indigo-600 text-white border-indigo-800";
      break;
    case "Open to All":
      badgeStyle = "bg-flame text-paper border-graphite";
      break;
    case "Pre-Invite":
    case "Invite Only":
      badgeStyle = "bg-purple-700 text-white border-purple-900";
      break;
    case "Peer Labs":
      badgeStyle = "bg-blue-600 text-white border-blue-800";
      break;
    case "Learning Program":
    case "Completed":
      badgeStyle = "bg-emerald-600 text-white border-emerald-800";
      break;
    case "Workshop":
      badgeStyle = "bg-olive text-paper border-graphite";
      break;
    case "Challenge":
    case "Hackathon":
      badgeStyle = "bg-amber-500 text-graphite border-graphite";
      break;
    case "Upcoming":
    case "Open":
      badgeStyle = "bg-flame text-paper border-graphite animate-pulse";
      break;
    default:
      badgeStyle = "bg-paper text-graphite border-graphite";
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-mono font-bold tracking-wider border shadow-sm ${badgeStyle} ${className}`}
    >
      {type}
    </span>
  );
}
