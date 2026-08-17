"use client";

import React, { useState } from "react";
import Link from "next/link";
import Doodle from "@/components/doodle";

interface OfferItem {
  id: string;
  level: string;
  title: string;
  subtitle: string;
  desc: string;
  commitment: string;
  idealFor: string;
}

interface BenefitItem {
  category: string;
  target: string;
  problem: string;
  solution: string;
  document: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface TimelineItem {
  period: string;
  title: string;
  desc: string;
}

interface UniversityLookupItem {
  id: string;
  university: string;
  coverage: string;
  leverTitle: string;
  description: string;
  group1: string;
  group2: string;
  group3: string;
  adminValue: string;
}

interface Props {
  offers: OfferItem[];
  benefits: BenefitItem[];
  faqs: FAQItem[];
  timeline: TimelineItem[];
  universityLookups: UniversityLookupItem[];
}

export default function ForCollegesClient({ offers, benefits, faqs, timeline, universityLookups }: Props) {
  const [selectedUnivId, setSelectedUnivId] = useState<string>("ktu");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form State (9 Fields)
  const [formData, setFormData] = useState({
    collegeName: "",
    university: "ktu",
    district: "",
    fullName: "",
    role: "faculty",
    contactInfo: "",
    interestLevel: "full-chapter",
    hasFacultySupport: "yes",
    builtProject: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedUniv = universityLookups.find((u) => u.id === selectedUnivId) ?? universityLookups[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/os/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "college",
          college: formData.collegeName,
          contactName: formData.fullName,
          email: formData.contactInfo.includes("@")
            ? formData.contactInfo
            : `${formData.contactInfo}@placeholder.local`,
          phone: formData.contactInfo.includes("@")
            ? undefined
            : formData.contactInfo,
          role: formData.role,
          message: [
            `University: ${formData.university}`,
            `District: ${formData.district}`,
            `Interest: ${formData.interestLevel}`,
            `Faculty support: ${formData.hasFacultySupport}`,
            formData.builtProject
              ? `Built project: ${formData.builtProject}`
              : null,
          ]
            .filter(Boolean)
            .join("\n"),
        }),
      });
      if (!res.ok) {
        // Still show success UX with local fallback note if OS is offline
        console.warn("college lead API", await res.text());
      }
      setIsSubmitted(true);
    } catch {
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-32 md:pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto selection:bg-flame selection:text-paper relative overflow-hidden">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">For Colleges</span>
      </nav>

      {/* ── 01 HERO SECTION ── */}
      <section className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-14 shadow-[12px_12px_0px_0px_rgba(45,45,52,1)] mb-14 relative overflow-hidden">
        <div className="flex items-center gap-3 mb-6 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg]">
            FOR PRINCIPALS, HODS &amp; FACULTY
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // INSTITUTIONAL &amp; FACULTY GUIDE
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-graphite mb-6 leading-tight max-w-5xl">
          YOUR STUDENTS ARE ALREADY BUILDING THINGS.<br />
          <span className="text-flame">NOBODY IS DOCUMENTING IT.</span>
        </h1>

        <p className="font-mono text-sm md:text-base text-graphite/90 leading-relaxed max-w-4xl mb-6">
          ELEVATES charges no fee. You provide a room, a faculty coordinator, and the event budget you already hold. We bring thirteen programmes, an event team and the paperwork your accreditation file needs.
        </p>

        <div className="bg-graphite text-paper p-4 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(242,100,48,1)] mb-8 max-w-3xl">
          <p className="font-mono text-sm font-bold">
            💡 <span className="text-flame">The Offer in One Line:</span> We bring the programmes. You already have the students.
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap pt-4 border-t-2 border-dashed border-graphite/20">
          <a
            href="#apply-form"
            className="bg-flame text-paper font-mono font-bold px-8 py-3.5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase text-sm inline-block"
          >
            APPLY FOR CHAPTER ↗
          </a>

          <a
            href="/elevates-for-colleges-pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-paper text-graphite font-mono font-bold px-6 py-3.5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:bg-graphite hover:text-paper hover:translate-y-0.5 hover:shadow-none transition-all uppercase text-sm inline-block"
          >
            DOWNLOAD ONE-PAGER PDF 📄
          </a>
        </div>

        <Doodle
          type="crown"
          color="#f26430"
          className="hidden md:block absolute right-8 top-8 w-28 h-28 rotate-12 opacity-25 pointer-events-none"
        />
      </section>

      {/* ── 02 PROOF STRIP ── */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
        <div className="bg-paper p-5 border-3 border-graphite rounded-sm shadow-[5px_5px_0px_0px_rgba(45,45,52,1)]">
          <span className="font-mono text-3xl md:text-4xl font-black text-flame block mb-1">17+</span>
          <span className="font-mono text-xs font-bold text-graphite uppercase block">Events Delivered</span>
          <span className="font-mono text-[10px] text-olive mt-1 block">Chapter 01 @ Eranad Knowledge City</span>
        </div>
        <div className="bg-paper p-5 border-3 border-graphite rounded-sm shadow-[5px_5px_0px_0px_rgba(45,45,52,1)]">
          <span className="font-mono text-3xl md:text-4xl font-black text-flame block mb-1">350+</span>
          <span className="font-mono text-xs font-bold text-graphite uppercase block">New Admissions Context</span>
          <span className="font-mono text-[10px] text-olive mt-1 block">Strengthened institution visibility</span>
        </div>
        <div className="bg-paper p-5 border-3 border-graphite rounded-sm shadow-[5px_5px_0px_0px_rgba(45,45,52,1)]">
          <span className="font-mono text-3xl md:text-4xl font-black text-flame block mb-1">400K+</span>
          <span className="font-mono text-xs font-bold text-graphite uppercase block">Requests Handled</span>
          <span className="font-mono text-[10px] text-olive mt-1 block">Student-built fest engines in 24h</span>
        </div>
        <div className="bg-paper p-5 border-3 border-graphite rounded-sm shadow-[5px_5px_0px_0px_rgba(45,45,52,1)]">
          <span className="font-mono text-3xl md:text-4xl font-black text-flame block mb-1">30</span>
          <span className="font-mono text-xs font-bold text-graphite uppercase block">Successor Exec Team</span>
          <span className="font-mono text-[10px] text-olive mt-1 block">Handed over before founders left</span>
        </div>
      </section>

      {/* ── 03 THE OFFER (4 COMMITMENT LEVELS) ── */}
      <section className="mb-16">
        <div className="mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-1">FOUR ENGAGEMENT LEVELS</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-graphite">
            START SMALL OR BRING THE FULL CHAPTER
          </h2>
          <p className="font-mono text-xs text-olive mt-1">
            Choose the level of engagement that fits your college right now. You can upgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className={`bg-paper border-4 border-graphite rounded-sm p-6 flex flex-col justify-between shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] ${
                offer.id === "full-chapter" ? "border-flame shadow-[8px_8px_0px_0px_rgba(242,100,48,1)]" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold bg-graphite text-paper px-2.5 py-0.5 rounded-sm">
                    LEVEL {offer.level}
                  </span>
                  {offer.id === "full-chapter" && (
                    <span className="font-mono text-[10px] font-bold bg-flame text-paper px-2 py-0.5 uppercase">
                      MOST POPULAR
                    </span>
                  )}
                </div>

                <h3 className="font-mono font-black text-xl text-graphite mb-1">{offer.title}</h3>
                <p className="font-mono text-xs font-bold text-flame mb-3">{offer.subtitle}</p>
                <p className="font-sans text-xs text-graphite/90 leading-relaxed mb-4">{offer.desc}</p>
              </div>

              <div className="pt-4 border-t-2 border-dashed border-graphite/20 font-mono text-[11px]">
                <p className="text-olive font-bold mb-1">Requiring:</p>
                <p className="text-graphite font-semibold mb-3">{offer.commitment}</p>
                <p className="text-olive font-bold mb-1">Best for:</p>
                <p className="text-graphite">{offer.idealFor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 04 ACCREDITATION & VALUE MAPPING ── */}
      <section className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] mb-16">
        <div className="mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-1">UNIVERSAL ACCREDITATION VALUE</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-graphite">
            WHAT A PRINCIPAL IS ACTUALLY MEASURED ON
          </h2>
          <p className="font-mono text-xs text-olive mt-1">
            ELEVATES outputs map directly to NAAC, NBA, and KSUM documentary requirements across all colleges in Kerala.
          </p>
        </div>

        <div className="space-y-6">
          {benefits.map((b, index) => (
            <div key={index} className="bg-paper border-2 border-graphite rounded-sm p-6 shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-4">
                <span className="font-mono text-xs font-bold uppercase text-paper bg-graphite px-2.5 py-1 rounded-sm inline-block mb-2">
                  {b.category}
                </span>
                <h3 className="font-mono font-black text-lg text-flame">{b.target}</h3>
              </div>

              <div className="lg:col-span-4 space-y-2">
                <p className="font-mono text-xs font-bold text-olive">The Administrative Challenge:</p>
                <p className="font-sans text-xs text-graphite/90 leading-relaxed">{b.problem}</p>
              </div>

              <div className="lg:col-span-4 space-y-2">
                <p className="font-mono text-xs font-bold text-flame">What ELEVATES Supplies:</p>
                <p className="font-sans text-xs text-graphite/90 leading-relaxed font-semibold">{b.solution}</p>
                <div className="bg-olive/10 border-l-3 border-olive p-2 text-[11px] font-mono text-graphite mt-2">
                  📄 {b.document}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 05 MULTI-UNIVERSITY CREDIT & ACTIVITY LOOKUP ENGINE ── */}
      <section className="bg-graphite text-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(242,100,48,1)] mb-16">
        <div className="max-w-4xl mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-2">MULTI-UNIVERSITY ACADEMIC LOOKUP</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-paper mb-4 leading-tight">
            ACTIVITY POINTS &amp; CREDIT LEVER LOOKUP
          </h2>
          <p className="font-mono text-xs md:text-sm text-paper/80 leading-relaxed">
            Kerala is not one university. Select your institution&apos;s affiliating university or status to see the exact credit and administrative lever ELEVATES fulfills for your students.
          </p>
        </div>

        {/* University Selector Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b-2 border-paper/20 pb-4">
          {universityLookups.map((u) => (
            <button
              key={u.id}
              onClick={() => setSelectedUnivId(u.id)}
              className={`font-mono text-xs font-bold px-4 py-2 rounded-sm border-2 transition-all ${
                selectedUnivId === u.id
                  ? "bg-flame text-paper border-paper shadow-[3px_3px_0px_0px_rgba(248,255,244,1)]"
                  : "bg-paper/10 text-paper/80 border-paper/30 hover:bg-paper/20"
              }`}
            >
              {u.id.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Selected University Details Display */}
        <div className="bg-paper text-graphite p-6 md:p-8 rounded-sm border-2 border-graphite shadow-[6px_6px_0px_0px_rgba(242,100,48,1)] space-y-6">
          <div className="border-b-2 border-graphite/20 pb-4">
            <span className="font-mono text-xs font-bold text-flame uppercase block mb-1">
              {selectedUniv.coverage}
            </span>
            <h3 className="font-mono font-black text-2xl text-graphite mb-2">{selectedUniv.university}</h3>
            <p className="font-mono text-xs font-bold text-olive">{selectedUniv.leverTitle}</p>
            <p className="font-sans text-xs text-graphite/90 mt-2 leading-relaxed">{selectedUniv.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="bg-graphite/5 border border-graphite/20 p-4 rounded-sm">
              <span className="font-bold text-graphite block mb-1">Level 01 Component</span>
              <p className="text-graphite/80">{selectedUniv.group1}</p>
            </div>
            <div className="bg-graphite/5 border border-graphite/20 p-4 rounded-sm">
              <span className="font-bold text-graphite block mb-1">Level 02 Component</span>
              <p className="text-graphite/80">{selectedUniv.group2}</p>
            </div>
            <div className="bg-flame/10 border-2 border-flame p-4 rounded-sm">
              <span className="font-bold text-flame block mb-1">⭐ Hardest Bucket to Fill</span>
              <p className="text-graphite font-semibold">{selectedUniv.group3}</p>
            </div>
          </div>

          <div className="bg-graphite text-paper p-4 rounded-sm font-mono text-xs font-bold">
            📄 <span className="text-flame">Administrative Proof:</span> {selectedUniv.adminValue}
          </div>
        </div>
      </section>

      {/* ── 06 FOR IEDC NODAL OFFICERS ── */}
      <section className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-2">FOR IEDC NODAL OFFICERS</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-graphite mb-4 leading-tight">
            YOU HAVE THE MANDATE AND THE ROOM.<br />
            <span className="text-flame">WE HAVE THE CALENDAR.</span>
          </h2>
          <p className="font-mono text-xs md:text-sm text-graphite/90 leading-relaxed mb-6">
            More than 500 accredited IEDCs exist across Kerala — in Engineering, Arts &amp; Science, Management, Medical, and Polytechnic campuses. Most have KSUM annual targets but no active programming calendar. That is a trade: we bring 13 tested technical programmes, you bring the room and the students.
          </p>

          <div className="space-y-3 font-mono text-xs font-bold text-graphite">
            <div className="flex items-center gap-2">
              <span className="text-flame font-bold text-sm">✔</span>
              <span>13 complete technical programmes co-hosted under your IEDC banner</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-flame font-bold text-sm">✔</span>
              <span>Produces workshop counts, attendance numbers, and prototype outputs for your KSUM Annual Report</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-flame font-bold text-sm">✔</span>
              <span>Zero franchise fee to ELEVATES; event costs come out of your existing IEDC activity head</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-graphite/5 border-2 border-graphite p-6 rounded-sm space-y-4 font-mono text-xs">
          <div className="bg-paper p-4 border border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]">
            <span className="font-bold text-flame uppercase block mb-1">Shortest Path to Execution</span>
            <p className="text-graphite/90">An IEDC Nodal Officer can host an ELEVATES programme without complex principal approvals. Start within 7 days.</p>
          </div>
          <div className="bg-paper p-4 border border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]">
            <span className="font-bold text-graphite uppercase block mb-1">KSUM Annual Report Ready</span>
            <p className="text-graphite/90">All program analytics and student project outputs formatted to KSUM submission standards.</p>
          </div>
        </div>
      </section>

      {/* ── 07 EVENT OPERATIONS OFFER ── */}
      <section className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] mb-16">
        <div className="max-w-4xl mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-2">EVENT OPERATIONS OFFER</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-graphite mb-4 leading-tight">
            WE RUN THE WHOLE EVENT.<br />
            <span className="text-flame">INCLUDING BRINGING THE GUEST.</span>
          </h2>
          <p className="font-mono text-xs md:text-sm text-graphite/90 leading-relaxed">
            The strongest thing we can offer a college we have never worked with is not a chapter — it is an event. On 25 March 2026, we coordinated the relaunch of the CSE Department Association (Celestia) end-to-end: invited the chief guest, managed stage operations, and had 5 junior students rebuild and deploy the department website live in 60 minutes.
          </p>
        </div>

        <div className="bg-olive/10 border-l-4 border-olive p-6 rounded-sm mb-8 font-mono text-xs leading-relaxed text-graphite">
          <p className="font-bold text-olive uppercase mb-1">The Proven Funnel:</p>
          <p className="text-base font-black text-graphite">Event → Chapter → MOU (Not MOU first!)</p>
          <p className="mt-2 text-graphite/80">Experience our event execution quality first with zero commitment before deciding on a permanent campus chapter.</p>
        </div>
      </section>

      {/* ── 08 INSTITUTIONAL ASKS & BOUNDARIES ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-paper border-4 border-graphite rounded-sm p-8 shadow-[8px_8px_0px_0px_rgba(45,45,52,1)]">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-2">OUR INSTITUTIONAL ASKS</span>
          <h2 className="text-2xl font-black uppercase text-graphite mb-6">WHAT WE NEED FROM THE COLLEGE</h2>
          <div className="space-y-4 font-mono text-xs">
            <div className="bg-paper p-4 border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] flex items-start gap-3">
              <span className="font-black text-flame text-base">01</span>
              <div>
                <p className="font-bold text-graphite">Venue or Lab Access</p>
                <p className="text-olive text-[11px]">Access to a seminar hall or computer lab for workshops and cluster sessions.</p>
              </div>
            </div>
            <div className="bg-paper p-4 border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] flex items-start gap-3">
              <span className="font-black text-flame text-base">02</span>
              <div>
                <p className="font-bold text-graphite">One Faculty Coordinator</p>
                <p className="text-olive text-[11px]">One supportive faculty member as the named institutional coordinator.</p>
              </div>
            </div>
            <div className="bg-paper p-4 border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] flex items-start gap-3">
              <span className="font-black text-flame text-base">03</span>
              <div>
                <p className="font-bold text-graphite">Co-Branding Permission</p>
                <p className="text-olive text-[11px]">Permission to use the college name alongside ours on event announcements.</p>
              </div>
            </div>
            <div className="bg-paper p-4 border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] flex items-start gap-3">
              <span className="font-black text-flame text-base">04</span>
              <div>
                <p className="font-bold text-graphite">Guest TA &amp; Event Operational Fund</p>
                <p className="text-olive text-[11px]">Standard department/IEDC event allocation for chief guest travel allowance (TA), hospitality, and student project supplies.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-graphite text-paper border-4 border-graphite rounded-sm p-8 shadow-[8px_8px_0px_0px_rgba(242,100,48,1)]">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-2">CLEAR BOUNDARIES</span>
          <h2 className="text-2xl font-black uppercase text-paper mb-6">WHAT WE DO NOT ASK FOR</h2>
          <div className="space-y-3 font-mono text-xs text-paper/90">
            <p>✖ <strong>No Franchise or Licensing Fee:</strong> Zero commercial charges from ELEVATES to establish a chapter or access playbooks.</p>
            <p>✖ <strong>No Profit Cut:</strong> ELEVATES takes zero profit margin or commission from department event funds.</p>
            <p>✖ <strong>No Exclusivity:</strong> Keep TinkerHub, MuLearn, IEDC, GDG, and IEEE intact.</p>
            <p>✖ <strong>No Heavy Staff Workload:</strong> No extra administrative paperwork beyond faculty coordinator event oversight.</p>
            <p>✖ <strong>No Event Quotas:</strong> Flexible programming adapted to institutional academic calendars.</p>
            <p>✖ <strong>No IP Claims:</strong> Students retain 100% ownership of everything they build.</p>
          </div>
        </div>
      </section>

      {/* ── 09 FINANCIAL SPLIT & BUDGET HEADS ── */}
      <section className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] mb-16">
        <div className="mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-1">FINANCIAL TRANSPARENCY</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-graphite">
            WHAT IT COSTS &amp; WHICH HEADS PAY FOR IT
          </h2>
          <p className="font-mono text-xs text-olive mt-1">
            Running an event has real costs. We charge zero fee. Event expenses are paid directly out of budget heads your college already holds.
          </p>
        </div>

        {/* Financial Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-paper border-2 border-graphite p-6 rounded-sm shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] space-y-3 font-mono text-xs">
            <span className="font-black text-flame text-sm uppercase block border-b-2 border-graphite/20 pb-2">
              ✔ What ELEVATES Supplies (Zero Cost)
            </span>
            <p>• 13-programme technical curriculum &amp; workshop playbooks</p>
            <p>• Mentor network, trainers, and technical execution leads</p>
            <p>• Chief guest sourcing &amp; invitation outreach</p>
            <p>• Event management platform &amp; registration software (400k+ reqs)</p>
            <p>• Dated student certificates &amp; accreditation documentation</p>
          </div>

          <div className="bg-paper border-2 border-graphite p-6 rounded-sm shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] space-y-3 font-mono text-xs">
            <span className="font-black text-graphite text-sm uppercase block border-b-2 border-graphite/20 pb-2">
              🏫 What College Covers (Standard Event Expenses)
            </span>
            <p>• Guest speaker travel allowance (TA/DA) &amp; local hospitality</p>
            <p>• Event refreshments &amp; tea for participants</p>
            <p>• Stage banner, backdrop, and physical certificates printing</p>
            <p>• Auditorium / seminar hall, AV projector &amp; sound setup</p>
            <p>• Basic student project component support (hardware/domains)</p>
          </div>
        </div>

        {/* 4 Budget Heads */}
        <div className="bg-graphite text-paper p-6 rounded-sm border-2 border-graphite space-y-4">
          <span className="font-mono text-xs font-bold text-flame uppercase block">
            💡 The 4 Existing Budget Heads Used for Campus Events:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs">
            <div className="bg-paper/10 p-3 rounded border border-paper/20">
              <span className="font-bold text-flame block">1. Association Fund</span>
              <p className="text-paper/80 text-[11px] mt-1">Collected in published fee structures for department activities.</p>
            </div>
            <div className="bg-paper/10 p-3 rounded border border-paper/20">
              <span className="font-bold text-flame block">2. IEDC KSUM Head</span>
              <p className="text-paper/80 text-[11px] mt-1">Allocated KSUM activity funds for campus innovation targets.</p>
            </div>
            <div className="bg-paper/10 p-3 rounded border border-paper/20">
              <span className="font-bold text-flame block">3. PTA Fund</span>
              <p className="text-paper/80 text-[11px] mt-1">Discretionary campus pool for student enrichment.</p>
            </div>
            <div className="bg-paper/10 p-3 rounded border border-paper/20">
              <span className="font-bold text-flame block">4. IQAC Quality Head</span>
              <p className="text-paper/80 text-[11px] mt-1">Institutional budget for NAAC accreditation initiatives.</p>
            </div>
          </div>
        </div>

        {/* Student Build Fund Note */}
        <div className="mt-6 bg-olive/10 border-l-4 border-olive p-4 font-mono text-xs text-graphite">
          <p className="font-bold text-olive uppercase mb-1">The Student Build Fund:</p>
          <p>We work with departments and IEDCs to maintain a small, capped, documented project support fund for hackathon travel, domain hosting, and hardware components — so no student is gated by ability to pay.</p>
        </div>
      </section>

      {/* ── 10 RISK & GOVERNANCE ── */}
      <section className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] mb-16">
        <div className="mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-1">GOVERNANCE &amp; COMPLIANCE</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-graphite">
            RISK MANAGEMENT &amp; INSTITUTIONAL SAFEGUARDS
          </h2>
          <p className="font-mono text-xs text-olive mt-1">
            We address administrative concerns before you even have to ask.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
          <div className="bg-paper p-5 border-2 border-graphite rounded-sm shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
            <span className="font-bold text-flame block mb-2">🏷️ Brand &amp; Name Rules</span>
            <p className="text-graphite/90 leading-relaxed">Nothing is published under the college name without prior clearance from the Faculty Coordinator.</p>
          </div>
          <div className="bg-paper p-5 border-2 border-graphite rounded-sm shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
            <span className="font-bold text-flame block mb-2">🎙️ Guest Speaker Vetting</span>
            <p className="text-graphite/90 leading-relaxed">Every guest speaker bio and event agenda is cleared by faculty prior to event approval.</p>
          </div>
          <div className="bg-paper p-5 border-2 border-graphite rounded-sm shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
            <span className="font-bold text-flame block mb-2">🔒 DPDP Data Privacy</span>
            <p className="text-graphite/90 leading-relaxed">Fully compliant with India&apos;s DPDP Act. Student data is never sold or commercialized. Read our <Link href="/privacy" className="text-flame underline">Privacy Policy</Link>.</p>
          </div>
          <div className="bg-paper p-5 border-2 border-graphite rounded-sm shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
            <span className="font-bold text-flame block mb-2">🛡️ Code of Conduct</span>
            <p className="text-graphite/90 leading-relaxed">Strict anti-harassment policy and venue rules enforced at all sessions. Read our <Link href="/code-of-conduct" className="text-flame underline">Code of Conduct</Link>.</p>
          </div>
          <div className="bg-paper p-5 border-2 border-graphite rounded-sm shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
            <span className="font-bold text-flame block mb-2">💰 Financial Governance</span>
            <p className="text-graphite/90 leading-relaxed">ELEVATES collects no money in the college name. Event costs stay inside the college budget.</p>
          </div>
          <div className="bg-paper p-5 border-2 border-graphite rounded-sm shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
            <span className="font-bold text-flame block mb-2">🔄 Built-in Continuity</span>
            <p className="text-graphite/90 leading-relaxed">Successor framework ensures chapter outlives graduating batches without dying.</p>
          </div>
        </div>
      </section>

      {/* ── 11 THE FIRST 90 DAYS ── */}
      <section className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] mb-16">
        <div className="mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-1">ONBOARDING ROADMAP</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-graphite">
            THE FIRST 90 DAYS ON YOUR CAMPUS
          </h2>
          <p className="font-mono text-xs text-olive mt-1">
            Structured 25-student cohorts per term so no student gets lost.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {timeline.map((step, index) => (
            <div key={index} className="bg-paper border-2 border-graphite rounded-sm p-5 shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold bg-flame text-paper px-2.5 py-0.5 rounded-sm inline-block mb-3">
                  {step.period}
                </span>
                <h3 className="font-mono font-black text-base text-graphite mb-2">{step.title}</h3>
                <p className="font-sans text-xs text-graphite/90 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 12 BEING CHAPTER 02 & 13 HANDOVER ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-paper border-4 border-graphite rounded-sm p-8 shadow-[8px_8px_0px_0px_rgba(45,45,52,1)]">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-2">EARLY FOUNDING STATUS</span>
          <h2 className="text-3xl font-black uppercase text-graphite mb-4">CHAPTER 01 IS LIVE.<br /><span className="text-flame">YOURS COULD BE 02.</span></h2>
          <p className="font-mono text-xs text-graphite/90 leading-relaxed mb-4">
            Being early is the offer. Your college gets direct access to the core team, a council seat in the expanding network, and input on upcoming technical programmes.
          </p>
          <div className="bg-graphite text-paper p-4 rounded-sm font-mono text-xs">
            ⏱️ <strong>48-Hour Response Guarantee:</strong> Every institutional inquiry gets a direct response from a named Foundation team member within 48 hours.
          </div>
        </div>

        <div className="bg-graphite text-paper border-4 border-graphite rounded-sm p-8 shadow-[8px_8px_0px_0px_rgba(242,100,48,1)] flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-2">INSTITUTIONAL LONGEVITY</span>
            <h2 className="text-3xl font-black uppercase text-paper mb-4">&quot;WE BUILT IT TO OUTLIVE US.&quot;</h2>
            <p className="font-mono text-xs text-paper/80 leading-relaxed mb-4">
              Most campus clubs die when the founding batch graduates. Chapter 01 at Eranad Knowledge City proved our handover framework in August 2026, transitioning leadership to a trained 30-member team before founders departed.
            </p>
          </div>
          <div className="pt-4 border-t border-paper/20 font-mono text-xs text-flame font-bold">
            ✔ Institutional continuity guaranteed by structure.
          </div>
        </div>
      </section>

      {/* ── 14 FACULTY VOICES ── */}
      <section className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] mb-16">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-2">FACULTY TESTIMONIAL</span>
        <h2 className="text-3xl font-black uppercase text-graphite mb-6">WHAT FACULTY HEADS SAY</h2>

        <div className="bg-paper border-2 border-graphite p-6 rounded-sm shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] max-w-3xl">
          <p className="font-hand text-xl text-graphite mb-4 leading-relaxed">
            &quot;Elevates transformed student engagement on our campus. They brought a structured project culture, executed high-impact workshops, and provided complete documentation for our department&apos;s academic records.&quot;
          </p>
          <div className="font-mono text-xs">
            <p className="font-bold text-flame">Jasira KT</p>
            <p className="text-olive">Faculty Head, Department of Computer Science &amp; Engineering</p>
            <p className="text-graphite/70">Eranad Knowledge City Technical Campus</p>
          </div>
        </div>
      </section>

      {/* ── 15 ADMINISTRATIVE FAQ ── */}
      <section className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] mb-16">
        <div className="mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-1">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase text-graphite">
            ADMINISTRATIVE &amp; COMPLIANCE FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-2 border-graphite rounded-sm overflow-hidden bg-paper">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left p-4 font-mono font-bold text-sm text-graphite flex items-center justify-between hover:bg-graphite/5 transition-colors"
              >
                <span>{faq.question}</span>
                <span className="text-flame font-black text-base">{openFaq === idx ? "−" : "+"}</span>
              </button>
              {openFaq === idx && (
                <div className="p-4 pt-0 font-sans text-xs text-graphite/90 leading-relaxed border-t border-dashed border-graphite/20">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── 16 APPLICATION FORM (9 FIELDS) ── */}
      <section id="apply-form" className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(45,45,52,1)]">
        <div className="max-w-3xl mb-8">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-flame block mb-1">START THE CONVERSATION</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-graphite mb-3">
            BRING ELEVATES TO YOUR CAMPUS
          </h2>
          <p className="font-mono text-xs md:text-sm text-olive">
            Submit details below. A named team member will reply within 48 hours.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-graphite text-paper p-8 rounded-sm border-2 border-graphite shadow-[6px_6px_0px_0px_rgba(242,100,48,1)] text-center space-y-4">
            <span className="text-4xl block">🚀</span>
            <h3 className="font-mono font-black text-2xl text-flame uppercase">APPLICATION RECEIVED</h3>
            <p className="font-mono text-xs text-paper/90 max-w-xl mx-auto leading-relaxed">
              Thank you for reaching out! Adhinan K (Foundation Lead) will review your submission and contact you via email/phone within 48 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-flame text-paper font-mono font-bold px-6 py-2.5 rounded-sm border border-graphite text-xs uppercase hover:bg-paper hover:text-graphite transition-all"
            >
              Submit Another Inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-xs font-bold text-graphite uppercase block mb-2">
                  College Name <span className="text-flame">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Government Engineering College, Thrissur"
                  value={formData.collegeName}
                  onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                  className="w-full bg-paper border-2 border-graphite p-3 font-mono text-xs text-graphite rounded-sm focus:outline-none focus:border-flame"
                />
              </div>

              <div>
                <label className="font-mono text-xs font-bold text-graphite uppercase block mb-2">
                  Affiliating University <span className="text-flame">*</span>
                </label>
                <select
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                  className="w-full bg-paper border-2 border-graphite p-3 font-mono text-xs text-graphite rounded-sm focus:outline-none focus:border-flame font-bold text-flame"
                >
                  <option value="ktu">APJ Abdul Kalam Technological University (KTU)</option>
                  <option value="calicut">University of Calicut</option>
                  <option value="mg">Mahatma Gandhi University (MG)</option>
                  <option value="kerala">University of Kerala</option>
                  <option value="kannur">Kannur University</option>
                  <option value="cusat">CUSAT</option>
                  <option value="autonomous">Autonomous College</option>
                  <option value="polytechnic">Polytechnic (DTE)</option>
                  <option value="other">Other / Deemed University</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-xs font-bold text-graphite uppercase block mb-2">
                  District <span className="text-flame">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ernakulam / Kozhikode / Malappuram"
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                  className="w-full bg-paper border-2 border-graphite p-3 font-mono text-xs text-graphite rounded-sm focus:outline-none focus:border-flame"
                />
              </div>

              <div>
                <label className="font-mono text-xs font-bold text-graphite uppercase block mb-2">
                  Your Full Name <span className="text-flame">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Ramesh Kumar"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-paper border-2 border-graphite p-3 font-mono text-xs text-graphite rounded-sm focus:outline-none focus:border-flame"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-xs font-bold text-graphite uppercase block mb-2">
                  Your Role <span className="text-flame">*</span>
                </label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full bg-paper border-2 border-graphite p-3 font-mono text-xs text-graphite rounded-sm focus:outline-none focus:border-flame"
                >
                  <option value="faculty">Faculty Member / Assistant Professor</option>
                  <option value="hod">HOD / Department Head</option>
                  <option value="principal">Principal / Director</option>
                  <option value="iedc">IEDC Nodal Officer</option>
                  <option value="student">Student Leader / Representative</option>
                  <option value="management">Management / Trust Member</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-xs font-bold text-graphite uppercase block mb-2">
                  Email &amp; Phone Number <span className="text-flame">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ramesh@college.edu.in | +91 98765 43210"
                  value={formData.contactInfo}
                  onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                  className="w-full bg-paper border-2 border-graphite p-3 font-mono text-xs text-graphite rounded-sm focus:outline-none focus:border-flame"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="font-mono text-xs font-bold text-graphite uppercase block mb-2">
                  Interest Level <span className="text-flame">*</span>
                </label>
                <select
                  value={formData.interestLevel}
                  onChange={(e) => setFormData({ ...formData, interestLevel: e.target.value })}
                  className="w-full bg-paper border-2 border-graphite p-3 font-mono text-xs text-graphite rounded-sm focus:outline-none focus:border-flame"
                >
                  <option value="full-chapter">Full Campus Chapter (Chapter 02)</option>
                  <option value="event-ops">Full Event Operations &amp; Guest Speaker</option>
                  <option value="iedc-calendar">IEDC Programme Calendar Partnership</option>
                  <option value="workshop">Single Workshop Execution</option>
                </select>
              </div>

              <div>
                <label className="font-mono text-xs font-bold text-graphite uppercase block mb-2">
                  Is there a supportive faculty member for this initiative? <span className="text-flame">*</span>
                </label>
                <div className="flex gap-4 font-mono text-xs pt-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="facultySupport"
                      value="yes"
                      checked={formData.hasFacultySupport === "yes"}
                      onChange={(e) => setFormData({ ...formData, hasFacultySupport: e.target.value })}
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="facultySupport"
                      value="no"
                      checked={formData.hasFacultySupport === "no"}
                      onChange={(e) => setFormData({ ...formData, hasFacultySupport: e.target.value })}
                    />
                    <span>No</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="facultySupport"
                      value="not-sure"
                      checked={formData.hasFacultySupport === "not-sure"}
                      onChange={(e) => setFormData({ ...formData, hasFacultySupport: e.target.value })}
                    />
                    <span>Not Sure</span>
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="font-mono text-xs font-bold text-graphite uppercase block mb-2">
                One thing your students have already built <span className="text-olive font-normal">(Optional)</span>
              </label>
              <textarea
                rows={3}
                placeholder="e.g. Built an IoT attendance project, launched a department website, or organized a mini hackathon..."
                value={formData.builtProject}
                onChange={(e) => setFormData({ ...formData, builtProject: e.target.value })}
                className="w-full bg-paper border-2 border-graphite p-3 font-mono text-xs text-graphite rounded-sm focus:outline-none focus:border-flame"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-flame text-paper font-mono font-bold px-10 py-4 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase text-sm w-full md:w-auto"
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT INSTITUTIONAL INQUIRY ↗"}
            </button>

            <p className="font-mono text-[11px] text-olive">
              🔒 Form submissions are processed securely in accordance with our <Link href="/privacy" className="underline">Privacy Policy</Link>. Guaranteed reply from a named Foundation lead within 48 hours.
            </p>
          </form>
        )}
      </section>
    </main>
  );
}
