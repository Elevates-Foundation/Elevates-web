import { PeerLabSeries } from "@/types/peer-lab";

export const PEER_LABS: PeerLabSeries[] = [
  {
    id: "operation-java",
    slug: "operation-java",
    title: "Operation Java",
    subtitle: "A 6-session hands-on Peer Lab designed for quiet & shy students to master OOPs, Data Structures, and real software architecture.",
    description: "Built specifically for introverted & quiet talent ready to transition from passive learners to shippable builders. Day 1: Java basics & syntax. Day 2: OOPs, collections & exception handling. Zero gatekeeping, hands-on support, and pair mentorship.",
    campusName: "Model Engineering College, Thrikkakara",
    status: "Completed",
    joinedCount: 62,
    facilitators: [
      { name: "Hashim Mohamed T A", role: "Peer Lead" },
      { name: "Ajay Ajith Nair", role: "Mentor" },
      { name: "Melbin Kuriakose Mathew", role: "Mentor" },
      { name: "Jayasankar Menon V", role: "Mentor" },
      { name: "Tejaswini B", role: "Mentor" },
      { name: "Miliya Eldhose", role: "Mentor" },
      { name: "Aswin S", role: "Mentor" },
      { name: "John Thomas Mathew", role: "Mentor" },
      { name: "S. Sreeshankar", role: "Mentor" },
      { name: "Kiran P Nandakumar", role: "Mentor" }
    ],
    resources: [
      { title: "Java OOPs Cheat Sheet & Architecture Guide", url: "https://github.com/Elevates-Foundation", type: "PDF Resource" },
      { title: "Operation Java GitHub Starter Code Repository", url: "https://github.com/Elevates-Foundation", type: "GitHub Repo" },
      { title: "Problem Set 01 — Classes & Inheritance Exercises", url: "https://github.com/Elevates-Foundation", type: "Exercises" }
    ],
    lessons: [
      { id: "day-1", slug: "day-1-basics", title: "Lab 01: Core Syntax & JVM Basics", date: "27 Jul 2025", time: "04:30 PM", location: "CCF Lab", eventSlug: "oops-again-java" },
      { id: "day-2", slug: "day-2-deep-dive", title: "Lab 02: Classes & Inheritance Deep Dive", date: "29 Jul 2025", time: "04:30 PM", location: "CCF Lab", eventSlug: "oops-again-java" },
      { id: "day-3", slug: "day-3-recap", title: "Lab 03: Interfaces & Abstract Architecture", date: "03 Aug 2025", time: "04:30 PM", location: "Online Stream", eventSlug: "oops-again-java" },
      { id: "day-4", slug: "day-4-oops", title: "Lab 04: Exception Handling & Collections", date: "05 Aug 2025", time: "08:00 PM", location: "Online Stream", eventSlug: "oops-again-java" },
      { id: "day-5", slug: "day-5-oops-bakki", title: "Lab 05: Practical Design Patterns", date: "06 Aug 2025", time: "04:30 PM", location: "CCF Lab", eventSlug: "oops-again-java" },
      { id: "day-6", slug: "oops-again-java", title: "Lab 06: Final Project Showcase (OOPS AGAIN)", date: "10 Aug 2025", time: "04:30 PM", location: "CCF Lab", eventSlug: "oops-again-java" }
    ],
    featured: true,
  },
  {
    id: "cybersec-defense-lab",
    slug: "cybersec-defense-lab",
    title: "Cybersec Defense & CTF Lab",
    subtitle: "4-session hands-on Linux, Wireshark, Cryptography & Capture-The-Flag peer learning series.",
    description: "Master terminal navigation, network packet inspection with Wireshark, password hashing algorithms, and hands-on capture-the-flag challenge solving in a safe environment.",
    campusName: "Malappuram Tech Hub & Campus Arena",
    status: "Completed",
    joinedCount: 48,
    facilitators: [
      { name: "Fahad", role: "Security Lead" },
      { name: "Sarhan Qadir", role: "Lab Facilitator" }
    ],
    resources: [
      { title: "Linux Command Line Security Cheatsheet", url: "https://github.com/Elevates-Foundation", type: "Doc" },
      { title: "Wireshark Packet Analysis Labs", url: "https://github.com/Elevates-Foundation", type: "Labs" }
    ],
    lessons: [
      { id: "cs-1", slug: "cybersec-basics", title: "Lab 01: Linux Terminal & Network Mapping", date: "05 Sep 2025", time: "10:00 AM", location: "Malappuram Lab", eventSlug: "cybersec-basics" },
      { id: "cs-2", slug: "cybersec-basics", title: "Lab 02: Packet Inspection & Wireshark", date: "12 Sep 2025", time: "02:00 PM", location: "Malappuram Lab", eventSlug: "cybersec-basics" },
      { id: "cs-3", slug: "cybersec-escape-room", title: "Lab 03: Cryptography & Hashes", date: "20 Sep 2025", time: "03:00 PM", location: "Online", eventSlug: "cybersec-escape-room" },
      { id: "cs-4", slug: "cybersec-escape-room", title: "Lab 04: ESCAPE ROOM CTF Challenge", date: "04 Apr 2026", time: "10:00 AM", location: "Thrissur Campus", eventSlug: "cybersec-escape-room" }
    ]
  },
  {
    id: "spark-electronics-lab",
    slug: "spark-electronics-lab",
    title: "Spark Electronics & Hardware Lab",
    subtitle: "3-part hardware prototyping series from breadboards and soldering to ESP32 microcontrollers.",
    description: "Build physical hardware projects step-by-step. Understand voltage dividers, digital sensors, Arduino C++, and ESP32 Wi-Fi microcontrollers without gatekeeping.",
    campusName: "MES College & Kozhikode Innovation Lab",
    status: "Completed",
    joinedCount: 54,
    facilitators: [
      { name: "Rayan", role: "Hardware Lead" }
    ],
    resources: [
      { title: "Arduino & ESP32 Pinout Cheat Sheet", url: "https://github.com/Elevates-Foundation", type: "PDF" },
      { title: "Circuit Schematics & Sensor Datasheets", url: "https://github.com/Elevates-Foundation", type: "Schematics" }
    ],
    lessons: [
      { id: "se-1", slug: "spark-electronics", title: "Lab 01: Breadboards & Circuit Fundamentals", date: "12 Oct 2025", time: "09:30 AM", location: "MES Campus", eventSlug: "spark-electronics" },
      { id: "se-2", slug: "spark-electronics", title: "Lab 02: Microcontrollers & Sensor Interfacing", date: "19 Oct 2025", time: "10:00 AM", location: "MES Campus", eventSlug: "spark-electronics" },
      { id: "se-3", slug: "spark-electronics", title: "Lab 03: ESP32 Wireless Sensor Nodes", date: "26 Oct 2025", time: "02:00 PM", location: "Innovation Lab", eventSlug: "spark-electronics" }
    ]
  }
];

export function getPeerLabBySlug(slug: string): PeerLabSeries | undefined {
  return PEER_LABS.find((p) => p.slug === slug || p.id === slug);
}
