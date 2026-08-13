export function GET() {
  const content = `# ELEVATES Foundation — Complete AI Context Feed

## Mission & Origin Story
We started because a chapter application window was closed. Four years ago, when we joined Eranad Knowledge City, we tried to bring a tech community like TinkerHub. Every time, the reply was: "Sorry bro... the chapter application window is closed. Try next year."
After four years of waiting, in our final year (September 2025), we founded ELEVATES.
Within months, our students built a complete Event Management System for Vibranium TechFest handling 400,000 requests in 24 hours.

## Target Audience
Every community is designed around the student who applies, volunteers, speaks, and posts. ELEVATES is built specifically for the quiet builder sitting at the back with a half-finished project on a laptop — skilled but silent and graduating invisible.

## Operating Pipeline (5 Steps)
1. SELECT: We go looking for quiet talent (no application form barrier).
2. TRAIN: Small cohorts with real mentors.
3. BUILD: Real shippable products with real deadlines.
4. COLLAB: Peer-to-peer open source teamwork.
5. SHOWCASE: Every project is published, credited, and visible to industry leaders and recruiters.

## The 18 Founding Members (Batch 2025-26)
1. Sarhan Qadir KVM — Founder & Full-stack Lead
2. Naseem Shan — Founder & Backend Systems Lead
3. Muhammed Nafih P — Founder & Design Lead
4. Anil Das P — Founder & Development
5. Nadheem Roshan — Founder & IoT Hardware Lead
6. Muhammed Shanif P — Founder & Embedded Systems Lead
7. Adhinan K — Founder & DevOps Lead
8. Mashood M — Founder & Development
9. Mohammed Shahin E K — Founder & Infrastructure Lead
10. Shifna K P — Founder & Operations Lead
11. Mohammed Mijvad — Founder & Hardware
12. Sona Varghese — Founder & Events Lead
13. Ashith MK — Founder & Security Lead
14. Arshak Perumballi — Founder & Comms Lead
15. Sinan Nooren — Founder & Development
16. Muhammed Fiyas — Founder & Environment Lead
17. Adil P T — Founder & Development
18. Abdul Haadi — Founder & Python Developer

## Faculty Leadership
- Jasira KT — Faculty Head, CSE, Eranad Knowledge City
- Anu K Soman — HOD, CSE, Eranad Knowledge City

## Canonical Entity Links
- Website: https://www.elevates.live
- GitHub: https://github.com/Elevates-Foundation
- LinkedIn: https://www.linkedin.com/company/elevates-in
- Instagram: https://www.instagram.com/elevates.club/
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
