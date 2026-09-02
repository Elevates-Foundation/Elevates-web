"use client";

import React, { useState, useMemo } from "react";
import EventCard from "@/components/events/event-card";
import PaginationControls from "@/components/ui/pagination-controls";
import type { EventItem } from "@/types/event";

interface EventsDirectoryClientProps {
  events: EventItem[];
}

const ITEMS_PER_PAGE = 9;

export default function EventsDirectoryClient({ events }: EventsDirectoryClientProps) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);

  // Extract unique categories for filter pills
  const categories = useMemo(() => {
    const cats = Array.from(new Set(events.map((e) => e.category || "Workshop")));
    return ["all", ...cats];
  }, [events]);

  // Filter events
  const filteredEvents = useMemo(() => {
    return events.filter((e) => {
      const matchesCat =
        selectedCategory === "all" ||
        (e.category && e.category.toLowerCase() === selectedCategory.toLowerCase());

      const q = search.toLowerCase().trim();
      const matchesSearch =
        !q ||
        e.title.toLowerCase().includes(q) ||
        (e.tagline && e.tagline.toLowerCase().includes(q)) ||
        (e.description && e.description.toLowerCase().includes(q)) ||
        (e.venue && e.venue.toLowerCase().includes(q)) ||
        (e.topics && e.topics.some((t) => t.toLowerCase().includes(q)));

      return matchesCat && matchesSearch;
    });
  }, [events, selectedCategory, search]);

  // Reset page when search or category changes
  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
  };

  // Pagination slice
  const totalPages = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);
  const paginatedEvents = useMemo(() => {
    if (showAll) return filteredEvents;
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredEvents.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredEvents, currentPage, showAll]);

  return (
    <section aria-labelledby="all-events-heading">
      {/* ─── CONTROLS: CATEGORY PILLS & INSTANT SEARCH ─── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b-2 border-graphite/20">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-[10px] font-black uppercase tracking-wider text-paper bg-flame px-2 py-0.5 rounded-sm">
              DIRECTORY
            </span>
            <span className="font-mono text-xs text-olive font-bold">
              • Showing {paginatedEvents.length} of {filteredEvents.length} events
            </span>
          </div>
          <h2 id="all-events-heading" className="text-2xl md:text-3xl font-black uppercase text-graphite tracking-tight">
            ALL EVENTS &amp; MEETUPS
          </h2>
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            placeholder="Search events, topics, tech, fests..."
            value={search}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full bg-paper border-2 border-graphite rounded-sm px-3.5 py-2 font-mono text-xs text-graphite placeholder:text-olive/60 focus:outline-none focus:border-flame shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]"
          />
          {search && (
            <button
              onClick={() => handleSearchChange("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 font-mono text-xs text-olive hover:text-flame font-bold"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ─── CATEGORY FILTER PILLS ─── */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          const count =
            cat === "all"
              ? events.length
              : events.filter((e) => e.category?.toLowerCase() === cat.toLowerCase()).length;

          return (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`font-mono text-xs font-bold px-3.5 py-1.5 rounded-sm border-2 transition-all shrink-0 flex items-center gap-2 ${
                isSelected
                  ? "bg-flame text-paper border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] -translate-y-0.5"
                  : "bg-paper text-graphite border-graphite/40 hover:border-graphite hover:text-flame"
              }`}
            >
              <span className="uppercase">{cat === "all" ? "All Events" : cat}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                  isSelected ? "bg-paper text-graphite" : "bg-olive/10 text-olive"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ─── EVENTS GRID ─── */}
      {filteredEvents.length === 0 ? (
        <div className="p-12 text-center border-3 border-dashed border-graphite/30 rounded-sm bg-paper font-mono text-olive">
          <p className="font-bold text-base text-graphite mb-1">No events match your search &quot;{search}&quot;</p>
          <span className="text-xs text-olive">Try searching for &quot;Vibranium&quot;, &quot;Kali&quot;, &quot;IoT&quot;, or &quot;LinkedIn&quot;</span>
          <div className="mt-4">
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory("all");
              }}
              className="font-mono text-xs font-bold text-flame underline"
            >
              Reset all filters
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}

      {/* ─── REUSABLE PAGINATION & "SHOW ALL" LAYER ─── */}
      <PaginationControls
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={filteredEvents.length}
        pageSize={ITEMS_PER_PAGE}
        showAll={showAll}
        onPageChange={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 400, behavior: "smooth" });
        }}
        onToggleShowAll={() => setShowAll((prev) => !prev)}
        className="mt-14"
      />
    </section>
  );
}
