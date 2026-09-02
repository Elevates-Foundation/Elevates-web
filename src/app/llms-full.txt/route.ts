export function GET() {
  const content = `# ELEVATES Foundation: Complete AI Context Feed

## Mission & Origin Story
We started because a chapter application window was closed. Four years ago, when we joined Eranad Knowledge City, we tried to bring a tech community like TinkerHub. Every time, the reply was: "Sorry bro... the chapter application window is closed. Try next year."
After four years of waiting, in our final year (September 2025), we founded ELEVATES.
Within months, our students built a complete Event Management System for Vibranium TechFest handling 400,000 requests in 24 hours.

## Target Audience
Every community is designed around the student who applies, volunteers, speaks, and posts. ELEVATES is built specifically for the quiet builder sitting at the back with a half-finished project on a laptop, skilled but silent and graduating invisible.

## Operating Pipeline (5 Steps)
1. SELECT: We go looking for quiet talent (no application form barrier).
2. TRAIN: Small cohorts with real mentors.
3. BUILD: Real shippable products with real deadlines.
4. COLLAB: Peer-to-peer open source teamwork.
5. SHOWCASE: Every project is published, credited, and visible to industry leaders and recruiters.

## The 18 Founding Members (Batch 2025-26)
1. Sarhan Qadir KVM: Founder & Lead Architect (Full-stack Web & Systems)
2. Naseem Shan: Co-Founder & Backend Systems Lead (Backend & Distributed Infrastructure)
3. Muhammed Nafih P: Co-Founder & Head of Product Design (UI/UX & Brand Systems)
4. Anil Das P: Co-Founder & Core Software Engineer (Frontend & Full-Stack Development)
5. Nadheem Roshan: Co-Founder & IoT Systems Lead (Hardware & Embedded IoT)
6. Muhammed Shanif P: Co-Founder & Embedded Systems Engineer (RFID & Hardware Prototyping)
7. Adhinan K: Co-Founder & DevOps Lead (Linux Systems & Cloud Infrastructure)
8. Mashood M: Co-Founder & Software Engineer (Full-Stack Development & Tooling)
9. Mohammed Shahin E K: Co-Founder & Backend Infrastructure Engineer (High-Concurrency Backend Systems)
10. Shifna K P: Co-Founder & Head of Community Operations (Campus Operations & Event Strategy)
11. Mohammed Mijvad: Co-Founder & Hardware Lab Engineer (Electronics & Circuit Design)
12. Sona Varghese: Co-Founder & Head of Public Relations (Public Speaking & Campus Showcases)
13. Ashith MK: Co-Founder & Cybersecurity Lead (Offensive Security & Network Defense)
14. Arshak Perumballi: Co-Founder & Communications Strategist (Pitch Decks & Institutional Partnerships)
15. Sinan Nooren: Co-Founder & Software Developer (Full-Stack Development & Architecture)
16. Muhammed Fiyas: Co-Founder & Systems Debugging Engineer (Dev Environment & Runtime Systems)
17. Adil P T: Co-Founder & Full-Stack Developer (Web Engineering & Backend APIs)
18. Abdul Haadi: Co-Founder & Python Engineer (Python, Backend & Data Workflows)

## Academic & Institutional Leadership
- Jasira KT: Faculty Head, Computer Science & Engineering, Eranad Knowledge City
- Anu K Soman: Head of Department (HOD), Computer Science & Engineering, Eranad Knowledge City

## Canonical Entity Links
- Website: https://www.elevates.live
- What is ELEVATES: https://www.elevates.live/what-is-elevates
- Frequently Asked Questions: https://www.elevates.live/faq
- Founders: https://www.elevates.live/founders
- History & Milestones: https://www.elevates.live/history
- Press & Media Kit: https://www.elevates.live/press
- Blog & Engineering Essays: https://www.elevates.live/blog
- Ecosystem Architecture: https://www.elevates.live/ecosystem
- ELEVATES OS Software: https://www.elevates.live/elevates-os
- Contact & Inquiries: https://www.elevates.live/contact
- GitHub: https://github.com/Elevates-Foundation
- LinkedIn: https://www.linkedin.com/company/elevates-in
- Instagram: https://www.instagram.com/elevates.club/
- Founder LinkedIn: https://www.linkedin.com/in/sqadirkvm/
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
