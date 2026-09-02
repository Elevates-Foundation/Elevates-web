---
title: "How We Built a Production Event Platform in 5 Days"
headline: "Handling 400,000 Requests Under High Fest Load"
excerpt: "The engineering case study of Vibranium TechFest: 5 days, 0 budget, zero downtime, and 400k live requests served by student builders."
category: "Engineering"
date: "2026-03-01"
readTime: "7 min read"
authorName: "Naseem Shan"
authorRole: "Co-Founder & Backend Systems Lead"
authorFounderId: "naseem-shan"
authorAvatar: "/images/founders/naseem-shan.jpeg"
tags: ["Architecture", "System Design", "Production Proof", "High Concurrency"]
---

Five days before the launch of the Vibranium 5.0 State TechFest, the organizers faced a critical problem: they needed an end-to-end ticketing, registration, and live check-in system capable of handling thousands of concurrent students. There was zero budget for commercial SaaS. Here is how student builders from ELEVATES built and deployed the system in under 120 hours.

## The Technical Constraints

- **Timeframe**: 5 calendar days from first commit to live ticketing.
- **Traffic Profile**: Sudden burst traffic when registrations opened across colleges in Malappuram and Kozhikode.
- **Reliability**: Failure during festival check-in meant thousands of students stuck outside audit halls.
- **Budget**: Zero external tooling budget. We had to use open web technologies, high-efficiency caching, and clean serverless architecture.

## System Architecture

- **Frontend**: Lightweight, responsive Next.js application optimized for mobile networks.
- **Backend & Database**: High-throughput API layer backed by PostgreSQL with transactional integrity for ticket reservations.
- **RFID & QR Fast Check-in**: Built offline-resilient scanning verification so network dropouts at the auditorium entrance would not halt entry queues.
- **Caching Layer**: Aggressive caching on static fest schedules and stage updates, offloading 85% of queries from the primary database.

## Launch Day Numbers

- **Total Requests Served**: 400,000+ over the festival weekend.
- **Peak Throughput**: Over 2,400 requests per minute during headline registrations.
- **Downtime**: Exactly 0 seconds. No dropped registrations, no payment mismatches.

> College students do not need toy to-do list apps for their portfolio. Real campus operations give you the real-world scale that tech recruiters care about.

---

**Key Takeaway**: Building under real deadlines for real users is the fastest way to turn an engineering student into an industry-grade software engineer.
