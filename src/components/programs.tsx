"use client";

import Link from "next/link";
import Doodle from "@/components/doodle";
import { EVENTS } from "@/data/events";
import type { EventItem } from "@/types/event";

type ProgramItem = {
  name: string;
  type: string;
  status: string;
  slug: string;
};

const DEFAULT_PROGRAMS: ProgramItem[] = [
  { name: "DECODE LINKEDIN", type: "WORKSHOP & BRANDING", status: "COMPLETED", slug: "decode-linkedin-shiju-mishal" },
  { name: "CAREER CATALYST", type: "WORKSHOP & PLACEMENTS", status: "COMPLETED", slug: "career-catalyst-baiju" },
  { name: "VIBE CODING", type: "WORKSHOP & AI DEV", status: "COMPLETED", slug: "vibe-coding-brototype" },
  { name: "CSE REVAMP", type: "ASSOCIATION & TINKERHUB", status: "COMPLETED", slug: "cse-association-revamp-mehar" },
  { name: "AI & DS INAUGURATION", type: "ASSOCIATION & ELYST AI", status: "COMPLETED", slug: "aids-association-inauguration" },
  { name: "CAMPUS LAUNCH", type: "CHAPTER OPENING", status: "COMPLETED", slug: "elevates-campus-launch-ekctc" },
  { name: "BASICS OF IOT", type: "EMBEDDED & SENSORS", status: "COMPLETED", slug: "basics-of-iot-naval" },
  { name: "DGPS LAND SURVEY", type: "GEOSPATIAL & CIVIL", status: "COMPLETED", slug: "dgps-land-survey-favad" },
  { name: "WEB DESIGN", type: "WORKSHOP & BOOTSTRAP", status: "COMPLETED", slug: "modern-web-design-danish" },
  { name: "NO-CODE AI (N8N)", type: "WORKSHOP & AGENTS", status: "COMPLETED", slug: "no-code-ai-anshiq" },
  { name: "DIGITAL MARKETING", type: "WORKSHOP (Kalkus)", status: "COMPLETED", slug: "digital-marketing-kalkus" },
  { name: "CYBER RAID CTF", type: "CAPTURE THE FLAG", status: "COMPLETED", slug: "cyber-raid-ctf" },
  { name: "VIBE CODING", type: "SPEED CHALLENGE", status: "COMPLETED", slug: "vibranium-vibe-coding" },
  { name: "AI BATTLE ARENA", type: "LLM CHESS EXHIBITION", status: "COMPLETED", slug: "vibranium-ai-battle" },
  { name: "BUZZER TO BUZZER", type: "TECH QUIZ BATTLE", status: "COMPLETED", slug: "buzzer-to-buzzer" },
  { name: "VIBRANIUM QR HUNT", type: "TECH CHALLENGE", status: "COMPLETED", slug: "vibranium-qr-treasure-hunt" },
  { name: "FIRST SPARK", type: "ELECTRONICS", status: "COMPLETED", slug: "first-spark-electronics" },
  { name: "STAP", type: "SKILL ASSESSMENT (SkillTrai)", status: "COMPLETED", slug: "stap-skill-assessment" },
  { name: "CYBERSEC BASICS", type: "WORKSHOP", status: "COMPLETED", slug: "cybersec-basics" },
  { name: "BUILD-A-THON", type: "USELESS PROJECTS", status: "COMING SOON", slug: "build-a-thon" },
  { name: "ESCAPE ROOM", type: "CYBERSEC CHALLENGE", status: "COMING SOON", slug: "cybersec-escape-room" },
  { name: "HACKATHON-LITE", type: "CAPSTONE", status: "COMING SOON", slug: "build-a-thon" },
];

export default function Programs({ initialEvents }: { initialEvents?: EventItem[] }) {
  const displayPrograms: ProgramItem[] = initialEvents && initialEvents.length > 0
    ? initialEvents.map((e) => ({
        name: e.title.toUpperCase(),
        type: (e.category || e.format || "WORKSHOP").toUpperCase(),
        status: (e.status || "UPCOMING").toUpperCase(),
        slug: e.slug,
      }))
    : DEFAULT_PROGRAMS;

  return (
    <section className="h-screen bg-graphite text-paper relative flex flex-col justify-center">
      <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

      {/* Header (Absolute Top) */}
      <div className="absolute top-6 md:top-10 left-0 w-full px-4 md:px-10 z-20 pointer-events-none">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b-2 border-paper/20 pb-4 pr-4 md:pr-10">
          <h2 className="text-4xl md:text-[6vw] font-black leading-none uppercase text-flame mix-blend-screen">
            THE LINEUP
          </h2>
          <p className="font-mono text-xs md:text-lg text-olive text-left md:text-right mt-2 md:mt-0">
            // ACADEMIC YEAR 2025 - 2026 <br />
            // TOUR DATES & LIVE EVENTS
          </p>
        </div>
      </div>

      {/* Horizontal Slider */}
      <div
        className="flex gap-8 px-4 md:px-10 items-center w-full h-full pt-32 pb-10 overflow-x-auto snap-x snap-mandatory relative z-10 scroll-smooth"
        style={{ scrollbarWidth: "thin", scrollbarColor: "#f26430 transparent" }}
      >
        {/* Spacer for initial padding */}
        <div className="w-1 md:w-2 shrink-0" />

        {displayPrograms.map((prog, i) => {
          const href = `/events/${prog.slug}`;
          return (
            <Link
              key={`${prog.slug}-${i}`}
              href={href}
              className="program-card snap-center shrink-0 group relative w-[300px] h-[450px] md:w-[400px] md:h-[550px] bg-paper text-graphite p-6 flex flex-col justify-between border-4 border-transparent hover:border-flame transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Perforated Edge (Left) */}
              <div
                className="absolute left-[-2px] top-0 bottom-0 w-4 radial-perforation bg-graphite"
                style={{
                  backgroundSize: "20px 20px",
                  backgroundImage: "radial-gradient(circle, transparent 30%, #fdfbf7 31%)",
                  opacity: 0,
                }}
              />

              {/* Top Meta */}
              <div className="flex justify-between items-start border-b-2 border-dashed border-graphite/20 pb-4 mb-4">
                <span className="font-mono text-xs text-olive uppercase tracking-widest bg-graphite/5 px-2 py-1 rounded">
                  NO. {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs text-flame font-bold border border-flame px-2 py-1 rounded rotate-2">
                  ADMIT ONE
                </span>
              </div>

              {/* Main Content */}
              <div className="flex-grow flex flex-col justify-center relative z-10">
                <h3 className="text-3xl md:text-5xl font-black uppercase leading-[0.85] text-graphite group-hover:text-flame transition-colors mb-4 break-words hyphens-auto group-hover:font-[family-name:var(--font-pixel)]">
                  {prog.name}
                </h3>
                <div className="flex flex-col gap-1 items-start">
                  <span className="font-mono text-xs md:text-sm text-olive uppercase bg-olive/10 px-2 py-1 rounded">
                    // {prog.type}
                  </span>
                  <span className="font-mono text-[10px] text-olive/60 uppercase">
                    VALID FOR ENTRY
                  </span>
                </div>
              </div>

              {/* Footer / Barcode feel */}
              <div className="mt-4 pt-4 border-t-2 border-dashed border-graphite/30 flex justify-between items-end relative z-10">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] text-olive uppercase tracking-tight">
                    CURRENT STATUS
                  </span>
                  <span
                    className={`font-black text-lg md:text-xl uppercase ${
                      prog.status === "COMPLETED"
                        ? "text-olive line-through decoration-2"
                        : "text-flame"
                    }`}
                  >
                    {prog.status}
                  </span>
                </div>

                {/* QR Code Graphic */}
                <div className="w-12 h-12 border-2 border-graphite p-1 opacity-70 group-hover:opacity-100 transition-opacity">
                  <div className="w-full h-full bg-graphite/20 grid grid-cols-4 grid-rows-4 gap-0.5">
                    {[...Array(16)].map((_, k) => (
                      <div
                        key={k}
                        className={`bg-graphite ${
                          (k * 7 + i * 3) % 5 > 2 ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Background Texture */}
              <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-multiply" />
              <Doodle
                type="scribble"
                color="#f26430"
                className="absolute bottom-20 right-4 w-32 h-32 opacity-0 group-hover:opacity-10 rotate-12 transition-opacity pointer-events-none"
              />

              {/* Hover Effect: Tape */}
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-paper/20 rotate-[-2deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.1)" }}
              />
            </Link>
          );
        })}

        {/* Spacer for end padding */}
        <div className="w-4 md:w-10 shrink-0" />
      </div>

      {/* Progress / Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 text-olive opacity-80 z-20 pointer-events-none">
        <Doodle type="arrow" color="#f26430" className="w-6 h-6 rotate-180" />
        <span className="font-mono text-xs uppercase tracking-widest">
          Scroll / Swipe Through
        </span>
        <Doodle type="arrow" color="#f26430" className="w-6 h-6 rotate-0" />
      </div>
    </section>
  );
}
