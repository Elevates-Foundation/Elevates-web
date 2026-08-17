"use client";

import React, { useEffect } from "react";
import Link from "next/link";

export default function ForCollegesPDFPage() {
  const triggerPrint = () => {
    if (typeof window !== "undefined") {
      try {
        window.print();
      } catch (err) {
        console.error("Print error:", err);
      }
    }
  };

  useEffect(() => {
    // Native click event listener fallback
    const btn = document.getElementById("print-pdf-btn");
    const handleNativeClick = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      triggerPrint();
    };

    if (btn) {
      btn.addEventListener("click", handleNativeClick);
    }

    const handleBeforePrint = () => {
      document.documentElement.classList.add("is-printing");
    };
    const handleAfterPrint = () => {
      document.documentElement.classList.remove("is-printing");
    };

    window.addEventListener("beforeprint", handleBeforePrint);
    window.addEventListener("afterprint", handleAfterPrint);

    return () => {
      if (btn) {
        btn.removeEventListener("click", handleNativeClick);
      }
      window.removeEventListener("beforeprint", handleBeforePrint);
      window.removeEventListener("afterprint", handleAfterPrint);
    };
  }, []);

  return (
    <div className="pdf-page-wrapper bg-paper text-graphite font-mono selection:bg-flame selection:text-paper pb-16">
      {/* ─── WEB-ONLY FLOATING ACTION TOOLBAR ─── */}
      <div className="no-print sticky top-0 z-[99999] bg-graphite text-paper border-b-4 border-graphite px-4 sm:px-8 py-3 flex items-center justify-between shadow-lg pointer-events-auto">
        <div className="flex items-center gap-4">
          <Link
            href="/for-colleges"
            className="text-xs font-bold text-paper hover:text-flame transition-colors flex items-center gap-1 uppercase relative z-10"
          >
            ← BACK TO FOR COLLEGES
          </Link>
          <span className="text-paper/40 hidden sm:inline">|</span>
          <span className="text-xs font-bold text-flame hidden sm:inline uppercase tracking-widest">
            INSTITUTIONAL ONE-PAGER (A4 FORMAT)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="print-pdf-btn"
            type="button"
            onClick={triggerPrint}
            className="bg-flame text-paper font-mono font-black text-xs px-5 py-2 rounded-sm border-2 border-paper shadow-[3px_3px_0px_0px_rgba(248,255,244,1)] hover:bg-paper hover:text-graphite transition-all uppercase flex items-center gap-2 cursor-pointer relative z-10"
          >
            <span>⎙</span> SAVE / PRINT AS PDF ↗
          </button>
        </div>
      </div>

      {/* ─── PRINTABLE DOCUMENT CONTAINER ─── */}
      <div className="printable-doc max-w-5xl mx-auto px-4 sm:px-8 pt-6 sm:pt-10">
        <div className="printable-card bg-paper border-4 border-graphite rounded-sm p-6 sm:p-10 shadow-[8px_8px_0px_0px_rgba(45,45,52,1)] relative">
          {/* Header Band */}
          <div className="bg-graphite text-paper p-5 border-3 border-graphite mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-paper">
                  ELEVATES<span className="text-flame">.</span>
                </span>
                <span className="font-mono text-[10px] uppercase font-bold text-flame bg-flame/20 px-2 py-0.5 rounded border border-flame/40">
                  INSTITUTIONAL PARTNERSHIP
                </span>
              </div>
              <p className="text-xs text-paper/70 font-mono">
                elevates.live/for-colleges · partner@elevates.live
              </p>
            </div>

            <div className="text-left sm:text-right border-t sm:border-t-0 border-paper/20 pt-3 sm:pt-0 w-full sm:w-auto">
              <span className="font-mono text-xs font-bold text-flame block">
                FACULTY &amp; INSTITUTIONAL GUIDE
              </span>
              <span className="font-mono text-[11px] text-paper/60 block">
                Kerala Student Tech Network · 2026–27
              </span>
            </div>
          </div>

          {/* Hero Title Box */}
          <div className="border-3 border-graphite p-6 bg-paper shadow-[5px_5px_0px_0px_rgba(45,45,52,1)] mb-6 relative">
            <div className="absolute -top-3 left-6 w-24 h-4 bg-flame rotate-[-1.5deg] border border-graphite/40" />
            <h1 className="text-xl sm:text-3xl font-black uppercase text-graphite leading-tight mb-2">
              BRING <span className="text-flame">ELEVATES</span> TO YOUR CAMPUS —<br className="hidden sm:inline" />
              ZERO COST. REAL PROOF. FULLY DOCUMENTED.
            </h1>
            <p className="font-mono text-xs sm:text-sm text-olive font-semibold">
              Project-based student tech programming · Accreditation-mapped · Event operations included · Any college in Kerala
            </p>
          </div>

          {/* Key Proof Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
            <div className="bg-paper p-3.5 border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]">
              <span className="font-black text-xl sm:text-2xl text-flame block leading-none">17+</span>
              <span className="font-mono text-[10px] text-olive font-bold uppercase block mt-1">
                Events Delivered (Chapter 01)
              </span>
            </div>
            <div className="bg-paper p-3.5 border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]">
              <span className="font-black text-xl sm:text-2xl text-flame block leading-none">400K+</span>
              <span className="font-mono text-[10px] text-olive font-bold uppercase block mt-1">
                Platform Requests (24h)
              </span>
            </div>
            <div className="bg-paper p-3.5 border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]">
              <span className="font-black text-xl sm:text-2xl text-flame block leading-none">₹0</span>
              <span className="font-mono text-[10px] text-olive font-bold uppercase block mt-1">
                Franchise / Licensing Fee
              </span>
            </div>
            <div className="bg-paper p-3.5 border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]">
              <span className="font-black text-xl sm:text-2xl text-flame block leading-none">120</span>
              <span className="font-mono text-[10px] text-olive font-bold uppercase block mt-1">
                Launch Seats (2 Hours)
              </span>
            </div>
          </div>

          {/* 2-Column Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Left Box: §1 What ELEVATES Is */}
            <div className="bg-paper border-3 border-graphite p-5 shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
              <span className="font-mono text-[10px] font-bold text-flame uppercase tracking-widest block mb-1">
                §1 — WHAT ELEVATES IS
              </span>
              <h2 className="font-mono font-black text-base uppercase text-graphite mb-3">
                WHAT YOU GET
              </h2>
              <ul className="space-y-2 text-xs text-graphite/90">
                <li className="flex items-start gap-2">
                  <span className="text-flame font-bold">→</span>
                  <span>Open, project-based tech community operating on campus with zero licensing fees.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-flame font-bold">→</span>
                  <span><strong>Learning Clusters:</strong> 13-programme calendar (Web, AI, IoT, Cyber, DSA, Design, Open Source).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-flame font-bold">→</span>
                  <span><strong>Peer Labs:</strong> Cohort-based, mentor-run programs producing real shipped software.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-flame font-bold">→</span>
                  <span><strong>Event Operations:</strong> ELEVATES runs the full event stack (MC, tech platform, attendance, reports).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-flame font-bold">→</span>
                  <span><strong>Compliance Output:</strong> Formatted proof documents delivered after every session for NAAC / KTU / IEDC files.</span>
                </li>
              </ul>
            </div>

            {/* Right Box: §2 Compliance & Accreditation */}
            <div className="bg-paper border-3 border-graphite p-5 shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
              <span className="font-mono text-[10px] font-bold text-flame uppercase tracking-widest block mb-1">
                §2 — ACCREDITATION MAPPING
              </span>
              <h2 className="font-mono font-black text-base uppercase text-graphite mb-3">
                UNIVERSITY COMPLIANCE
              </h2>
              <div className="space-y-2 text-xs">
                <div className="pb-1.5 border-b border-dashed border-graphite/20">
                  <span className="font-bold text-graphite block">KTU (Engg / Design / BBA / BCA):</span>
                  <span className="text-olive text-[11px]">Activity Points (120 pts / 3 credits). Group III filled by shipped projects.</span>
                </div>
                <div className="pb-1.5 border-b border-dashed border-graphite/20">
                  <span className="font-bold text-graphite block">FYUGP (Calicut / MG / Kerala / Kannur):</span>
                  <span className="text-olive text-[11px]">Skill Enhancement Courses, mandatory internship &amp; research project credits.</span>
                </div>
                <div className="pb-1.5 border-b border-dashed border-graphite/20">
                  <span className="font-bold text-graphite block">Autonomous &amp; DTE:</span>
                  <span className="text-olive text-[11px]">Fast-track Academic Council VACs &amp; diploma practical innovation projects.</span>
                </div>
                <div>
                  <span className="font-bold text-graphite block">NAAC (5.1.3 / 5.3.3) &amp; KSUM IEDC:</span>
                  <span className="text-olive text-[11px]">ICT skill programs, tech fests, and 3-yr rolling data for annual reports.</span>
                </div>
              </div>
            </div>

            {/* Left Box: §3 College Contribution & Budget */}
            <div className="bg-paper border-3 border-graphite p-5 shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
              <span className="font-mono text-[10px] font-bold text-flame uppercase tracking-widest block mb-1">
                §3 — COLLEGE CONTRIBUTION
              </span>
              <h2 className="font-mono font-black text-base uppercase text-graphite mb-3">
                WHAT YOU PROVIDE
              </h2>
              <ol className="space-y-1.5 text-xs text-graphite/90 mb-3">
                <li>1. Venue access (seminar hall / lab) for workshops.</li>
                <li>2. One named Faculty Coordinator (1–2 hrs/month).</li>
                <li>3. Co-branding permission alongside institution name.</li>
                <li>4. Operational expenses paid from existing heads:</li>
              </ol>

              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="text-[10px] font-bold bg-flame text-paper px-2 py-0.5 rounded border border-graphite">
                  Dept Association Fund
                </span>
                <span className="text-[10px] font-bold bg-graphite/10 text-graphite px-2 py-0.5 rounded border border-graphite">
                  IEDC KSUM Budget
                </span>
                <span className="text-[10px] font-bold bg-graphite/10 text-graphite px-2 py-0.5 rounded border border-graphite">
                  PTA Fund
                </span>
                <span className="text-[10px] font-bold bg-graphite/10 text-graphite px-2 py-0.5 rounded border border-graphite">
                  IQAC Quality Head
                </span>
              </div>
            </div>

            {/* Right Box: §4 Zero Obligations & Governance */}
            <div className="bg-paper border-3 border-graphite p-5 shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
              <span className="font-mono text-[10px] font-bold text-flame uppercase tracking-widest block mb-1">
                §4 — ZERO OBLIGATIONS &amp; RISK
              </span>
              <h2 className="font-mono font-black text-base uppercase text-graphite mb-3">
                NO ASKS &amp; GOVERNANCE
              </h2>
              <div className="grid grid-cols-2 gap-1.5 text-xs text-graphite/90 mb-3">
                <div className="flex items-center gap-1 text-graphite font-semibold">
                  <span className="text-flame font-bold">✕</span> No franchise fee
                </div>
                <div className="flex items-center gap-1 text-graphite font-semibold">
                  <span className="text-flame font-bold">✕</span> No licensing cost
                </div>
                <div className="flex items-center gap-1 text-graphite font-semibold">
                  <span className="text-flame font-bold">✕</span> No profit cut
                </div>
                <div className="flex items-center gap-1 text-graphite font-semibold">
                  <span className="text-flame font-bold">✕</span> No exclusivity
                </div>
              </div>
              <div className="border-t border-dashed border-graphite/20 pt-2 text-[11px] text-olive space-y-1">
                <p>• <strong>Faculty Clearance:</strong> All speakers &amp; agendas cleared in advance.</p>
                <p>• <strong>DPDP Compliant:</strong> Student data never sold or shared commercially.</p>
                <p>• <strong>IP Rights:</strong> Students &amp; college retain 100% project ownership.</p>
              </div>
            </div>
          </div>

          {/* MOU Terms Summary */}
          <div className="bg-paper border-3 border-graphite p-5 shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] mb-6">
            <span className="font-mono text-[10px] font-bold text-flame uppercase tracking-widest block mb-1">
              §5 — MOU TERMS SUMMARY
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="font-bold text-graphite block mb-0.5">Duration:</span>
                <p className="text-olive text-[11px]">1 academic year, renewable. Either party exits with 30-day notice, zero penalty.</p>
              </div>
              <div>
                <span className="font-bold text-graphite block mb-0.5">ELEVATES Provides:</span>
                <p className="text-olive text-[11px]">Named chapter listing, compliance templates, Peer Lab access, event ops support.</p>
              </div>
              <div>
                <span className="font-bold text-graphite block mb-0.5">Accountability:</span>
                <p className="text-olive text-[11px]">Quarterly review with Faculty Coordinator. Semester compliance report delivered.</p>
              </div>
            </div>
          </div>

          {/* Contact Band */}
          <div className="bg-flame text-paper p-5 border-3 border-graphite shadow-[5px_5px_0px_0px_rgba(45,45,52,1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono font-black text-lg uppercase tracking-tight block">
                APPLY FOR CHAPTER 02 →
              </span>
              <p className="font-mono text-xs text-paper/90">
                Email: partner@elevates.live · Reply guaranteed within 48 hours.
              </p>
            </div>
            <div className="bg-graphite text-paper px-4 py-2 rounded border-2 border-paper font-mono text-xs font-bold text-center shrink-0">
              elevates.live/for-colleges
            </div>
          </div>
        </div>
      </div>

      {/* ─── PRINT CSS STYLES ─── */}
      <style>{`
        @media print {
          html, body, main, .pdf-page-wrapper, .printable-doc, .printable-card {
            background: #f8fff4 !important;
            color: #2d2d34 !important;
            margin: 0 !important;
            padding: 0 !important;
            height: auto !important;
            min-height: 0 !important;
            max-height: none !important;
            overflow: visible !important;
            position: static !important;
            transform: none !important;
            box-shadow: none !important;
            float: none !important;
          }

          .no-print,
          nav,
          header,
          footer,
          .navbar,
          [data-navbar],
          [class*="CustomCursor"],
          [class*="cursor-none"] {
            display: none !important;
            visibility: hidden !important;
          }

          .printable-doc {
            display: block !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
          }

          .printable-card {
            border: 2px solid #2d2d34 !important;
            box-shadow: none !important;
            padding: 12px !important;
            background: #f8fff4 !important;
          }

          @page {
            size: A4 portrait;
            margin: 6mm 8mm;
          }
        }
      `}</style>
    </div>
  );
}
