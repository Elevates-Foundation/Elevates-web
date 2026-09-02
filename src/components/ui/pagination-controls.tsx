"use client";

import React from "react";

export interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pageSize: number;
  showAll: boolean;
  onPageChange: (page: number) => void;
  onToggleShowAll: () => void;
  className?: string;
}

/**
 * Reusable neo-brutalist pagination and view-mode control layer.
 * Can be plugged into any listing page (events, projects, blog, directory).
 */
export default function PaginationControls({
  currentPage,
  totalPages,
  totalItems,
  pageSize,
  showAll,
  onPageChange,
  onToggleShowAll,
  className = "",
}: PaginationControlsProps) {
  if (totalItems <= pageSize && !showAll) return null;

  return (
    <div
      className={`pt-8 border-t-2 border-graphite/20 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs ${className}`}
    >
      {/* View All / Paginated Toggle */}
      <button
        onClick={onToggleShowAll}
        className="font-bold px-4 py-2 border-2 border-graphite rounded-sm bg-paper hover:bg-graphite hover:text-paper shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] transition-all uppercase"
      >
        {showAll
          ? `← SHOW PAGINATED (${pageSize} PER PAGE)`
          : `VIEW ALL ${totalItems} ITEMS ↗`}
      </button>

      {/* Page Numbers Navigation */}
      {!showAll && totalPages > 1 && (
        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => {
              onPageChange(Math.max(1, currentPage - 1));
            }}
            className={`px-3 py-1.5 rounded-sm border-2 border-graphite font-bold transition-all ${
              currentPage === 1
                ? "opacity-40 cursor-not-allowed bg-paper"
                : "bg-paper hover:bg-flame hover:text-paper shadow-[2px_2px_0px_0px_rgba(45,45,52,1)]"
            }`}
          >
            PREV
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => onPageChange(num)}
              className={`w-8 h-8 rounded-sm border-2 border-graphite font-bold transition-all flex items-center justify-center ${
                currentPage === num
                  ? "bg-flame text-paper shadow-[2px_2px_0px_0px_rgba(45,45,52,1)] font-black"
                  : "bg-paper text-graphite hover:bg-graphite/10"
              }`}
            >
              {num}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => {
              onPageChange(Math.min(totalPages, currentPage + 1));
            }}
            className={`px-3 py-1.5 rounded-sm border-2 border-graphite font-bold transition-all ${
              currentPage === totalPages
                ? "opacity-40 cursor-not-allowed bg-paper"
                : "bg-paper hover:bg-flame hover:text-paper shadow-[2px_2px_0px_0px_rgba(45,45,52,1)]"
            }`}
          >
            NEXT
          </button>
        </div>
      )}
    </div>
  );
}
