"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { EVENTS } from "@/data/events";
import { PEER_LABS } from "@/data/peer-labs";
import { CHAPTERS } from "@/data/chapters";
import { FLAGSHIP_PROJECTS, MEMBER_SHOWCASES } from "@/data/projects";

export interface SearchItem {
  id: string;
  title: string;
  subtitle: string;
  category: "Peer Labs" | "Events" | "Chapters" | "Section" | "Team" | "Projects" | "Blog" | "Guide";
  url: string;
  tags: string[];
}

// Build full comprehensive index dynamically from datasets + site sections
const DYNAMIC_SEARCH_INDEX: SearchItem[] = [
  // ─── Core Architecture & Info Pages ───
  {
    id: "sec-what-is-elevates",
    title: "What is ELEVATES?",
    subtitle: "Direct-answer definition, 4-tier model, and comparison with TinkerHub/IEDC",
    category: "Guide",
    url: "/what-is-elevates",
    tags: ["what is elevates", "definition", "overview", "800 students", "quiet talent", "kerala"],
  },
  {
    id: "sec-ecosystem",
    title: "Ecosystem Architecture",
    subtitle: "4-tier structural model: Chapters → Campuses → Clusters → Members",
    category: "Guide",
    url: "/ecosystem",
    tags: ["ecosystem", "architecture", "structure", "tiers", "chapters", "clusters"],
  },
  {
    id: "sec-elevates-os",
    title: "ELEVATES OS (Platform Engine)",
    subtitle: "The digital operating software powering chapters, clusters, and 400k+ requests",
    category: "Guide",
    url: "/elevates-os",
    tags: ["elevates os", "os", "platform", "software", "tools", "verification", "credentials"],
  },
  {
    id: "sec-blog-all",
    title: "Blog & Engineering Essays",
    subtitle: "Manifestos, Kerala tech community comparisons, and production case studies",
    category: "Blog",
    url: "/blog",
    tags: ["blog", "essays", "articles", "stories", "notes", "writeups", "engineering"],
  },
  {
    id: "sec-faq",
    title: "Frequently Asked Questions (FAQ)",
    subtitle: "Answers on fees, membership, eligibility, chapter criteria, and quiet talent",
    category: "Guide",
    url: "/faq",
    tags: ["faq", "questions", "answers", "membership", "cost", "eligibility", "fees"],
  },
  {
    id: "sec-history",
    title: "History & Milestones Timeline",
    subtitle: "Our journey from 4 years of closed community windows to 18 founders and 400k requests",
    category: "Guide",
    url: "/history",
    tags: ["history", "timeline", "milestones", "origin", "founded", "growth"],
  },
  {
    id: "sec-press",
    title: "Press & Media Kit",
    subtitle: "Media assets, factual statements, statistics, and founding team directory",
    category: "Guide",
    url: "/press",
    tags: ["press", "media", "kit", "brand", "inquiries", "journalists", "coverage"],
  },
  {
    id: "sec-contact",
    title: "Contact & Campus Inquiries",
    subtitle: "Start a campus chapter, partner with your college, or connect with domain leads",
    category: "Guide",
    url: "/contact",
    tags: ["contact", "inquiry", "email", "support", "expansion", "connect"],
  },

  // ─── Flagship Blog Articles ───
  {
    id: "blog-800-students",
    title: "What Happens to the 800 Students Nobody Picks?",
    subtitle: "Manifesto by Sarhan Qadir KVM — The problem every college tech club ignores",
    category: "Blog",
    url: "/blog/what-happens-to-the-800-students",
    tags: ["800 students", "manifesto", "sarhan", "quiet talent", "introverts", "college tech club"],
  },
  {
    id: "blog-kerala-communities",
    title: "Every Tech Community in Kerala: The 2026 Student Guide",
    subtitle: "Guide by Arshak Perumballi — TinkerHub, IEDC, µLearn, GDG, and ELEVATES",
    category: "Blog",
    url: "/blog/every-tech-community-in-kerala-2026-guide",
    tags: ["kerala", "tech community", "communities", "tinkerhub", "iedc", "mulearn", "gdg", "arshak"],
  },
  {
    id: "blog-tinkerhub-vs-iedc",
    title: "TinkerHub vs IEDC vs µLearn: An Honest Comparison",
    subtitle: "Comparison by Mashood M — Candid strengths, trade-offs, and who each is best for",
    category: "Blog",
    url: "/blog/tinkerhub-vs-iedc-vs-mulearn-comparison",
    tags: ["comparison", "tinkerhub", "iedc", "mulearn", "mashood", "which community", "difference"],
  },
  {
    id: "blog-vibranium-architecture",
    title: "How We Built a Production Event Platform in 5 Days (400k Requests)",
    subtitle: "Engineering case study by Naseem Shan — High fest load, zero budget, zero downtime",
    category: "Blog",
    url: "/blog/how-we-built-vibranium-event-platform-400k-requests",
    tags: ["vibranium", "architecture", "naseem", "engineering", "system design", "400k", "concurrency"],
  },

  // ─── Site Main Pages & Sections ───
  {
    id: "sec-projects-all",
    title: "Projects & Production Proof",
    subtitle: "Built & Shipped — 400k requests handled, zero downtime, real fest software",
    category: "Projects",
    url: "/projects",
    tags: ["projects", "vibranium", "aaroh", "proof", "showcase", "400k", "makemypass"],
  },
  {
    id: "sec-team",
    title: "Meet the Team (18 Founders)",
    subtitle: "Foundation HQ core, 18 founding members, and faculty advisors",
    category: "Team",
    url: "/team",
    tags: ["team", "founders", "sarhan", "naseem", "haadi", "advisors", "back benchers", "front benchers"],
  },
  {
    id: "sec-about",
    title: "About ELEVATES Kerala",
    subtitle: "Our origin story, manifesto, and mission for quiet builders",
    category: "Section",
    url: "/about",
    tags: ["manifesto", "about", "origin", "tinkerhub", "ekc", "introverts"],
  },
  {
    id: "sec-chapters-dir",
    title: "Campus Chapters & Expansion",
    subtitle: "Chapter 01 is live at Eranad Knowledge City. Start a chapter at your campus.",
    category: "Section",
    url: "/chapters",
    tags: ["chapters", "expansion", "campus", "college", "playbook", "network"],
  },
  {
    id: "sec-clusters",
    title: "The Cluster System",
    subtitle: "4-stage operating engine: open workshops → mini challenges → cluster selection",
    category: "Section",
    url: "/clusters",
    tags: ["cluster", "pipeline", "vibranium", "projects", "challenges"],
  },
  {
    id: "sec-peer-labs-all",
    title: "All Peer Labs & Cohorts",
    subtitle: "Browse all hands-on multi-week peer learning labs across Kerala",
    category: "Section",
    url: "/peer-labs",
    tags: ["peer labs", "cohorts", "java", "cybersec", "hardware", "workshops"],
  },
  {
    id: "sec-events-all",
    title: "All Events & Workshops",
    subtitle: "Browse upcoming and past ELEVATES workshops, make-a-thons, and meetups",
    category: "Section",
    url: "/events",
    tags: ["events", "workshops", "makeathon", "meetup", "hackathon"],
  },

  // Dynamic Flagship Projects
  ...FLAGSHIP_PROJECTS.map((proj) => ({
    id: `proj-${proj.slug}`,
    title: proj.title,
    subtitle: `${proj.client} · ${proj.tagline}`,
    category: "Projects" as const,
    url: `/projects/${proj.slug}`,
    tags: [proj.title, proj.client, "flagship", "case study", ...proj.stack],
  })),

  // Dynamic Member Showcase
  ...MEMBER_SHOWCASES.map((item) => ({
    id: `show-${item.id}`,
    title: item.title,
    subtitle: `Built by ${item.builder} (${item.cohort}) — ${item.description}`,
    category: "Projects" as const,
    url: item.repo || "/projects",
    tags: [item.title, item.builder, "showcase", item.cohort],
  })),
  {
    id: "sec-membership",
    title: "Membership Benefits",
    subtitle: "01 Skills • 02 Portfolio • 03 GitHub • 04 Career growth",
    category: "Section",
    url: "/#membership",
    tags: ["benefits", "membership", "skills", "portfolio", "github"],
  },
  {
    id: "sec-workflow",
    title: "How ELEVATES Works",
    subtitle: "4-step beginner friendly journey from curiosity to shipping",
    category: "Section",
    url: "/#workflow",
    tags: ["workflow", "steps", "process", "beginner"],
  },
  {
    id: "sec-domains",
    title: "Tech & Design Domains",
    subtitle: "AI, Full-Stack, Cybersec, Microcontrollers, and Design",
    category: "Section",
    url: "/#domains",
    tags: ["ai", "fullstack", "hardware", "design", "domains"],
  },

  // Dynamic Peer Labs
  ...PEER_LABS.map((lab) => ({
    id: `pl-${lab.slug}`,
    title: lab.title,
    subtitle: `${lab.campusName} · ${lab.joinedCount} shy builders enrolled`,
    category: "Peer Labs" as const,
    url: `/peer-labs/${lab.slug}`,
    tags: [lab.campusName, "peer lab", lab.title],
  })),

  // Dynamic Events
  ...EVENTS.map((evt) => ({
    id: `ev-${evt.slug}`,
    title: evt.title,
    subtitle: `${evt.startDate} · ${evt.venue || evt.locationName}`,
    category: "Events" as const,
    url: `/events/${evt.slug}`,
    tags: [evt.category, evt.locationName, ...(evt.topics || [])],
  })),

  // Dynamic Chapters
  ...CHAPTERS.map((ch) => ({
    id: `ch-${ch.slug}`,
    title: `${ch.name} (Chapter #${ch.chapterNumber})`,
    subtitle: `${ch.college} · Lead: ${ch.lead.name}`,
    category: "Chapters" as const,
    url: `/chapters/${ch.slug}`,
    tags: [ch.name, ch.college, ch.district, ch.lead.name, "chapter"],
  })),
];

interface SpotlightSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SpotlightSearch({ isOpen, onClose }: SpotlightSearchProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Filter items based on query
  const filteredResults = DYNAMIC_SEARCH_INDEX.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.tags.some((t) => t.toLowerCase().includes(q))
    );
  });

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard Navigation (Up, Down, Enter, Esc)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredResults.length));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredResults.length) % Math.max(1, filteredResults.length));
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (filteredResults[selectedIndex]) {
          const selected = filteredResults[selectedIndex];
          onClose();
          router.push(selected.url);
        }
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[10001] flex items-start justify-center pt-20 md:pt-28 px-4 bg-graphite/60 backdrop-blur-md transition-opacity">
      {/* Backdrop Click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl bg-paper border-4 border-graphite rounded-sm shadow-[16px_16px_0px_0px_rgba(45,45,52,1)] overflow-hidden">
        
        {/* Top Tape Graphic */}
        <div className="absolute -top-3 left-8 w-28 h-6 bg-flame/80 rotate-[-2deg] opacity-90 border border-graphite/30" />

        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 border-b-3 border-graphite bg-paper">
          <span className="text-xl">🔍</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search peer labs, events, chapters, team..."
            className="w-full bg-transparent font-mono text-base text-graphite placeholder-olive/60 focus:outline-none font-bold"
          />
          <button
            onClick={onClose}
            className="bg-flame text-paper font-mono font-bold text-xs px-2.5 py-1 rounded border border-graphite hover:scale-105 transition-transform shrink-0"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-2">
          {filteredResults.length === 0 ? (
            <div className="p-8 text-center font-mono text-olive">
              <p className="text-sm font-bold">No matching results found for &quot;{query}&quot;</p>
              <span className="text-xs text-olive/70 mt-1 block">Try searching for &quot;Java&quot;, &quot;Team&quot;, &quot;Eranad&quot;, or &quot;Cybersec&quot;</span>
            </div>
          ) : (
            filteredResults.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => {
                  onClose();
                  router.push(item.url);
                }}
                onMouseEnter={() => setSelectedIndex(idx)}
                className={`w-full text-left p-3.5 rounded-sm border-2 transition-all flex items-center justify-between gap-4 ${
                  selectedIndex === idx
                    ? "bg-flame text-paper border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] -translate-y-0.5"
                    : "bg-paper text-graphite border-graphite/20 hover:border-graphite/60"
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className={`font-mono text-[10px] font-bold uppercase px-2 py-0.5 rounded border shrink-0 ${
                    selectedIndex === idx
                      ? "bg-paper text-graphite border-paper"
                      : "bg-olive/10 text-olive border-olive/30"
                  }`}>
                    {item.category}
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-mono font-bold text-sm leading-snug truncate">
                      {item.title}
                    </h4>
                    <p className={`font-mono text-xs truncate ${
                      selectedIndex === idx ? "text-paper/90" : "text-olive"
                    }`}>
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <span className="font-mono font-bold text-sm shrink-0">
                  {selectedIndex === idx ? "SELECT ↵" : "↗"}
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer Shortcut Bar */}
        <div className="bg-graphite/5 p-3 border-t-2 border-graphite/20 flex items-center justify-between font-mono text-[11px] text-olive">
          <div className="flex items-center gap-4">
            <span><strong className="text-graphite">↑ ↓</strong> Navigate</span>
            <span><strong className="text-graphite">↵</strong> Select</span>
            <span><strong className="text-graphite">ESC</strong> Close</span>
          </div>
          <span className="font-bold text-flame">ELEVATES COMMAND PALETTE</span>
        </div>

      </div>
    </div>
  );
}
