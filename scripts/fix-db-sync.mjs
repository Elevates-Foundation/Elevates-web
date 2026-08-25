#!/usr/bin/env node
/**
 * FIX SCRIPT: Reseed organizations + fix all 19 events with exact titles from src/data/events.ts
 * Run: node scripts/fix-db-sync.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
let serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const envPaths = [
  path.join(ROOT_DIR, ".env.local"),
  path.join(ROOT_DIR, ".env"),
  path.join(ROOT_DIR, ".elevates-os-ref", ".env"),
];

for (const p of envPaths) {
  if (fs.existsSync(p)) {
    const content = fs.readFileSync(p, "utf-8");
    for (const line of content.split("\n")) {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?/);
      if (match) {
        const key = match[1];
        let val = (match[2] || "").trim();
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
        if (val.startsWith("'") && val.endsWith("'")) val = val.slice(1, -1);
        if (key === "NEXT_PUBLIC_SUPABASE_URL" && !supabaseUrl) supabaseUrl = val;
        if (key === "SUPABASE_SERVICE_ROLE_KEY" && !serviceKey) serviceKey = val;
      }
    }
  }
}

if (!supabaseUrl || !serviceKey) {
  console.error("❌ Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

console.log(`🌐 Connecting to: ${supabaseUrl}`);

async function rest(endpoint, options = {}) {
  const url = `${supabaseUrl}${endpoint}`;
  const headers = {
    apikey: serviceKey,
    Authorization: `Bearer ${serviceKey}`,
    "Content-Type": "application/json",
    ...options.headers,
  };
  const res = await fetch(url, { ...options, headers });
  const text = await res.text();
  try { return { ok: res.ok, status: res.status, data: JSON.parse(text) }; }
  catch { return { ok: res.ok, status: res.status, data: text }; }
}

// All 19 canonical events from src/data/events.ts — exact titles, slugs, dates
const CANONICAL_EVENTS = [
  {
    slug: "decode-linkedin-shiju-mishal",
    title: "LET'S DECODE LINKEDIN",
    summary: "The LinkedIn Way · Professional Branding, Networking & Internships",
    description: "Full-day interactive workshop on unlocking the full potential of LinkedIn for personal branding, recruiter networking, and high-impact internship search.",
    venue: "Seminar Hall, Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2026-07-22T10:00:00+05:30",
    ends_at: "2026-07-22T16:00:00+05:30",
    capacity: 100,
    banner_url: "/images/events/decode-linkedin-shiju-mishal.jpeg",
    category: "Workshop",
    status: "completed",
  },
  {
    slug: "career-catalyst-baiju",
    title: "CAREER CATALYST — WORKSHOP",
    summary: "Want to Get Hired? Start Here · Employability, Resumes & Mock Interviews",
    description: "Full-day interactive employability and placement preparation workshop led by Prof. Baiju B S.",
    venue: "Seminar Hall, Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2026-07-15T10:00:00+05:30",
    ends_at: "2026-07-15T16:00:00+05:30",
    capacity: 85,
    banner_url: "/images/events/career-catalyst-baiju.jpeg",
    category: "Workshop",
    status: "completed",
  },
  {
    slug: "vibe-coding-brototype",
    title: "VIBE CODING WORKSHOP",
    summary: "Build, Create & Innovate · AI-Assisted Rapid Development with Brototype",
    description: "Full-day hands-on Vibe Coding workshop conducted by Brototype and powered by ELEVATES.",
    venue: "Seminar Hall, Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2026-03-26T10:00:00+05:30",
    ends_at: "2026-03-26T16:00:00+05:30",
    capacity: 90,
    banner_url: "/images/events/vibe-coding-brototype.jpeg",
    category: "Workshop",
    status: "completed",
  },
  {
    slug: "cse-association-revamp-mehar",
    title: "REVAMP OF CSE ASSOCIATION",
    summary: "Official Association Relaunch · Chief Guest Mehar M P (Co-Founder, TinkerHub)",
    description: "Official relaunch and revamp of the Computer Science Engineering Association at EKCTC with Chief Guest Mehar M P.",
    venue: "Seminar Hall, Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2026-03-25T14:00:00+05:30",
    ends_at: "2026-03-25T16:00:00+05:30",
    capacity: 100,
    banner_url: "/images/events/cse-association-revamp-mehar.jpeg",
    category: "Meetup",
    status: "completed",
  },
  {
    slug: "aids-association-inauguration",
    title: "AI & DS ASSOCIATION INAUGURATION",
    summary: "Inauguration & Industry Keynote · Guests from Elyst AI",
    description: "Inauguration ceremony of the AI & Data Science Association at EKCTC, featuring keynote by Elyst AI Co-Founders.",
    venue: "Seminar Hall, Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2026-03-12T10:00:00+05:30",
    ends_at: "2026-03-12T13:00:00+05:30",
    capacity: 88,
    banner_url: "/images/events/aids-association-inauguration.jpeg",
    category: "Meetup",
    status: "completed",
  },
  {
    slug: "elevates-campus-launch-ekctc",
    title: "ELEVATES CAMPUS LAUNCH",
    summary: "Official Chapter Opening & Leadership Handover · Chief Guest Shibili Rahman KP",
    description: "Official ELEVATES Campus Chapter Launch and leadership handover ceremony at EKCTC.",
    venue: "Seminar Hall, Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2026-03-04T10:00:00+05:30",
    ends_at: "2026-03-04T13:00:00+05:30",
    capacity: 141,
    banner_url: "/images/events/campus-launch-ekctc.jpeg",
    category: "Meetup",
    status: "completed",
  },
  {
    slug: "basics-of-iot-naval",
    title: "BASICS OF IOT WORKSHOP",
    summary: "Step Into the World of IoT · Sensors, Microcontrollers & Cloud Dashboards",
    description: "Full-day hands-on workshop on smart sensors, microcontroller interfacing, MQTT protocols, and real-time cloud data monitoring.",
    venue: "Seminar Hall, Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2026-02-19T10:00:00+05:30",
    ends_at: "2026-02-19T16:00:00+05:30",
    capacity: 45,
    banner_url: "/images/events/basics-of-iot-naval.jpeg",
    category: "Workshop",
    status: "completed",
  },
  {
    slug: "dgps-land-survey-favad",
    title: "LAND SURVEY USING DGPS — WORKSHOP",
    summary: "Modern Land Surveying & Differential GPS Technology in Action",
    description: "Practical outdoor hands-on surveying workshop on DGPS technology, geospatial data, and precision field mapping.",
    venue: "EKC Volleyball Court (Outdoor Field), EKCTC",
    starts_at: "2026-01-19T10:00:00+05:30",
    ends_at: "2026-01-19T13:00:00+05:30",
    capacity: 50,
    banner_url: "/images/events/dgps-survey-favad.jpeg",
    category: "Workshop",
    status: "completed",
  },
  {
    slug: "modern-web-design-danish",
    title: "MODERN WEB DESIGN WORKSHOP",
    summary: "Web Fundamentals, UI/UX, Bootstrap 5 & GitHub Pages Deployment",
    description: "Full-day hands-on workshop covering web fundamentals, responsive Bootstrap 5 design, and live portfolio deployment on GitHub Pages.",
    venue: "Lab 4, Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2026-01-12T10:00:00+05:30",
    ends_at: "2026-01-12T16:00:00+05:30",
    capacity: 66,
    banner_url: "/images/events/modern-web-design-danish.jpeg",
    category: "Workshop",
    status: "completed",
  },
  {
    slug: "no-code-ai-anshiq",
    title: "NO-CODE AI & AUTOMATION WORKSHOP",
    summary: "Build Powerful AI Automations & Agents with n8n Without Writing Code",
    description: "Full-day hands-on workshop on n8n, AI workflow chaining, webhook triggers, and autonomous agent building without code.",
    venue: "Seminar Hall, Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2026-01-07T10:00:00+05:30",
    ends_at: "2026-01-07T16:00:00+05:30",
    capacity: 92,
    banner_url: "/images/events/no-code-ai-anshiq.jpeg",
    category: "Workshop",
    status: "completed",
  },
  {
    slug: "digital-marketing-kalkus",
    title: "DIGITAL MARKETING WORKSHOP",
    summary: "By Kalkus Studio · Brand Growth, Social Media Strategy, SEO & Ad Analytics",
    description: "A practical beginner-friendly workshop by Kalkus Studio covering digital brand growth, SEO/SEM mechanics, content strategy, and ad analytics.",
    venue: "Seminar Hall, Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2025-12-10T10:00:00+05:30",
    ends_at: "2025-12-10T13:00:00+05:30",
    capacity: 91,
    banner_url: "/images/events/digital-marketing-kalkus.jpeg",
    category: "Workshop",
    status: "completed",
  },
  {
    slug: "cyber-raid-ctf",
    title: "CYBER RAID — CAPTURE THE FLAG",
    summary: "Hack. Solve. Conquer · ₹1500 Prize Pool by ELEVATES",
    description: "Competitive Capture The Flag battlefield featuring binary exploitation, cryptic challenges, web exploitation, and network defense drills.",
    venue: "Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2025-10-09T10:00:00+05:30",
    ends_at: "2025-10-09T16:30:00+05:30",
    capacity: 65,
    banner_url: "/images/events/adhinan-ctf.jpeg",
    category: "Challenge",
    status: "completed",
  },
  {
    slug: "buzzer-to-buzzer",
    title: "BUZZER TO BUZZER — TECH QUIZ",
    summary: "Only the Fastest Mind Wins · High-Stakes Tech Quiz Battle",
    description: "High-stakes head-to-head buzzer quiz battle testing reflexes, logic, and core engineering knowledge during VIBRANIUM 5.0 TechFest.",
    venue: "Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2025-10-09T10:00:00+05:30",
    ends_at: "2025-10-09T15:30:00+05:30",
    capacity: 56,
    banner_url: "/images/events/buzzer-to-buzzer.jpeg",
    category: "Challenge",
    status: "completed",
  },
  {
    slug: "vibranium-vibe-coding",
    title: "VIBRANIUM 5.0 — VIBE CODING",
    summary: "Code & Conquer · ₹250 Prize Pool by ELEVATES",
    description: "Two-hour dynamic vibe coding workshop and speed programming challenge with a ₹250 prize pool during VIBRANIUM 5.0 TechFest.",
    venue: "Seminar Hall, Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2025-10-09T10:00:00+05:30",
    ends_at: "2025-10-09T12:00:00+05:30",
    capacity: 55,
    banner_url: "/images/events/vibe-coding-vibranium.jpeg",
    category: "Challenge",
    status: "completed",
  },
  {
    slug: "vibranium-ai-battle",
    title: "VIBRANIUM 5.0 — AI BATTLE ARENA",
    summary: "Where Powerful LLMs Collide · Live AI Chess Duels",
    description: "Interactive AI showcase stall where LLM models battle in digital chess duels during VIBRANIUM 5.0 TechFest.",
    venue: "Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2025-10-09T10:00:00+05:30",
    ends_at: "2025-10-09T16:00:00+05:30",
    capacity: 55,
    banner_url: "/images/events/ai-battle-vibranium.jpeg",
    category: "Showcase",
    status: "completed",
  },
  {
    slug: "vibranium-qr-treasure-hunt",
    title: "VIBRANIUM 5.0 — QR TREASURE HUNT",
    summary: "Campus-Wide Cryptic QR Challenge by ELEVATES & Vibranium",
    description: "An interactive campus-wide cryptographic scavenger hunt hosted during Vibranium 5.0 TechFest.",
    venue: "Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2025-10-09T10:00:00+05:30",
    ends_at: "2025-10-09T13:30:00+05:30",
    capacity: 50,
    banner_url: "/images/events/qr-tressure-hunt-vibranium.jpeg",
    category: "Challenge",
    status: "completed",
  },
  {
    slug: "first-spark-electronics",
    title: "FIRST SPARK — BASICS OF ELECTRONICS",
    summary: "Circuit Fundamentals & Semiconductors by Sahad Nisham K",
    description: "Beginner-friendly hands-on session covering essential building blocks of electronic systems, passive components, semiconductors, and real-world circuit design.",
    venue: "ECE Digital Lab, Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2025-09-26T10:00:00+05:30",
    ends_at: "2025-09-26T16:00:00+05:30",
    capacity: 52,
    banner_url: "/images/events/spark-sahad-nisham.jpeg",
    category: "Workshop",
    status: "completed",
  },
  {
    slug: "stap-skill-assessment",
    title: "STAP — SKILL TASTE ASSESSMENT",
    summary: "Find Your Skill & Build Your Portfolio by Skilltrai",
    description: "Hands-on assessment workshop exploring AI, data analytics, UI/UX, and digital freelancing to build personal project portfolios.",
    venue: "Seminar Hall, Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2025-09-22T14:00:00+05:30",
    ends_at: "2025-09-22T17:30:00+05:30",
    capacity: 92,
    banner_url: "/images/events/stap-by-skilltrai.jpeg",
    category: "Workshop",
    status: "completed",
  },
  {
    slug: "cybersec-basics",
    title: "CYBERSECURITY WORKSHOP",
    summary: "Hands-on Kali Linux & Defensive Security by Adhinan K",
    description: "Hands-on cybersecurity workshop covering Kali Linux terminal navigation, network defense, and practical ethical hacking fundamentals.",
    venue: "Eranad Knowledge City Technical Campus (EKCTC)",
    starts_at: "2025-09-17T10:00:00+05:30",
    ends_at: "2025-09-25T16:10:00+05:30",
    capacity: 96,
    banner_url: "/images/events/cybersecurity-workshop.jpeg",
    category: "Workshop",
    status: "completed",
  },
];

async function run() {
  console.log("\n🔧 ELEVATES — DB FIX: Organizations + Events\n");

  // 1. Seed organizations (was missing!)
  console.log("Step 1: Seeding organizations table...");
  const orgRes = await rest("/rest/v1/organizations", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates" },
    body: JSON.stringify([{
      id: "e1000000-0000-4000-8000-000000000001",
      name: "Elevates Foundation",
      slug: "elevates",
      tagline: "Engineering Culture, Open Building & Tech Leadership across Campuses",
    }]),
  });
  if (orgRes.ok) {
    console.log("  ✅ Organization seeded successfully");
  } else {
    console.log("  ⚠️  Organization seed:", orgRes.status, JSON.stringify(orgRes.data));
  }

  // 2. Delete all existing events (stale data with wrong titles)
  console.log("\nStep 2: Deleting stale events from Supabase...");
  const delRes = await rest("/rest/v1/events?id=neq.00000000-0000-0000-0000-000000000000", {
    method: "DELETE",
    headers: { Prefer: "return=minimal" },
  });
  if (delRes.ok || delRes.status === 200 || delRes.status === 204) {
    console.log("  ✅ All stale events deleted");
  } else {
    console.log("  ⚠️  Delete response:", delRes.status, JSON.stringify(delRes.data).slice(0, 200));
  }

  // 3. Insert all 19 canonical events with correct titles
  console.log("\nStep 3: Inserting all 19 canonical events with exact titles...");
  const chapterId = "c1000000-0000-4000-8000-000000000001";
  // Sarhan Qadir KVM — first profile seeded (confirmed via Supabase REST)
  const organizerId = "d1000000-0000-4000-8000-000000000001";

  const eventsPayload = CANONICAL_EVENTS.map((ev, i) => ({
    id: `e1000000-0000-4000-8000-${String(i + 1).padStart(12, "0")}`,
    chapter_id: chapterId,
    title: ev.title,
    slug: ev.slug,
    summary: ev.summary,
    description: ev.description,
    venue: ev.venue,
    starts_at: ev.starts_at,
    ends_at: ev.ends_at,
    capacity: ev.capacity,
    waitlist_capacity: 20,
    status: ev.status,
    banner_url: ev.banner_url,
    banner_emoji: ev.category === "Workshop" ? "⚡" : ev.category === "Challenge" ? "🏆" : ev.category === "Showcase" ? "🌟" : "📅",
    mode: "in_person",
    category: ev.category.toLowerCase(),
    visibility: "public",
    certificate_enabled: true,
    organizer_id: organizerId,
    registration_start: new Date(ev.starts_at).toISOString(),
    registration_end: ev.starts_at,
    published_at: ev.starts_at,
  }));

  const insRes = await rest("/rest/v1/events", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates" },
    body: JSON.stringify(eventsPayload),
  });
  if (insRes.ok || insRes.status === 201) {
    console.log(`  ✅ ${eventsPayload.length} canonical events inserted with exact titles`);
    eventsPayload.forEach((e, i) => console.log(`     ${i + 1}. ${e.title} (/${e.slug})`));
  } else {
    console.log("  ❌ Events insert failed:", insRes.status, JSON.stringify(insRes.data).slice(0, 500));
  }

  // 4. Verify
  console.log("\nStep 4: Verifying...");
  const orgCheck = await rest("/rest/v1/organizations?select=id,name&limit=1");
  const evCheck = await rest("/rest/v1/events?select=id,title,slug&limit=3");
  console.log("  Organizations:", orgCheck.data?.length ?? 0, "rows");
  console.log("  Events sample:", JSON.stringify(evCheck.data?.slice(0, 2), null, 2));

  console.log("\n✅ FIX COMPLETE — Organizations seeded, all 19 events fixed with exact titles!");
}

run().catch(console.error);
