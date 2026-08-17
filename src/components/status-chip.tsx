import React from "react";
import { ProjectStatus } from "@/types/project";

interface Props {
  status: ProjectStatus;
  className?: string;
}

const STATUS_CONFIG: Record<
  ProjectStatus,
  { label: string; bgClass: string; textClass: string; borderClass: string }
> = {
  live: {
    label: "LIVE",
    bgClass: "bg-emerald-500",
    textClass: "text-paper",
    borderClass: "border-graphite",
  },
  "live-incomplete": {
    label: "LIVE · INCOMPLETE",
    bgClass: "bg-amber-500",
    textClass: "text-paper",
    borderClass: "border-graphite",
  },
  "live-unmaintained": {
    label: "LIVE · UNMAINTAINED",
    bgClass: "bg-amber-500",
    textClass: "text-paper",
    borderClass: "border-graphite",
  },
  paused: {
    label: "PAUSED",
    bgClass: "bg-yellow-500",
    textClass: "text-graphite",
    borderClass: "border-graphite",
  },
  archived: {
    label: "ARCHIVED",
    bgClass: "bg-stone-500",
    textClass: "text-paper",
    borderClass: "border-graphite",
  },
  "never-launched": {
    label: "NEVER LAUNCHED",
    bgClass: "bg-rose-600",
    textClass: "text-paper",
    borderClass: "border-graphite",
  },
};

export default function ProjectStatusChip({ status, className = "" }: Props) {
  const config = STATUS_CONFIG[status] || STATUS_CONFIG["live"];

  return (
    <span
      className={`inline-flex items-center font-mono text-[10px] sm:text-xs font-bold uppercase px-2.5 py-0.5 rounded-sm border shadow-[1.5px_1.5px_0px_0px_rgba(45,45,52,1)] ${config.bgClass} ${config.textClass} ${config.borderClass} ${className}`}
    >
      {config.label}
    </span>
  );
}
