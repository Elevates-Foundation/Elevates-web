export function GET() {
  const content = `# ELEVATES Foundation — LLM Knowledge Feed

> ELEVATES is a student-founded open tech community and innovation network based in Kerala, India. Founded on September 2, 2025 at Eranad Knowledge City (EKC), Manjeri, ELEVATES was built specifically for "the other 800 students" — skilled, introverted, and quiet builders who are overlooked by conventional college clubs.

## Canonical Entity Definition
ELEVATES (ELEVATES Foundation) is an open student tech community in Kerala that operates on a 4-tier ecosystem model:
1. Campus Chapters (college-level autonomous units)
2. Colleges / Campuses (institutional hosts)
3. Learning Clusters (domain-focused project incubators)
4. Student Builders (members developing and shipping production software)

## Key Pages & Structured Resources
- Direct Answer Page: https://www.elevates.live/what-is-elevates
- Canonical About: https://www.elevates.live/about
- Frequently Asked Questions: https://www.elevates.live/faq
- Founders & Team: https://www.elevates.live/founders
- History & Milestones: https://www.elevates.live/history
- Press & Media Kit: https://www.elevates.live/press
- Campus Chapters: https://www.elevates.live/chapters
- Ecosystem Architecture: https://www.elevates.live/ecosystem
- Learning Clusters: https://www.elevates.live/clusters
- Projects & Production Proof: https://www.elevates.live/projects
- Events & Workshops: https://www.elevates.live/events
- Blog & Engineering Essays: https://www.elevates.live/blog
- ELEVATES OS Software: https://www.elevates.live/elevates-os
- Contact & Chapter Expansion: https://www.elevates.live/contact
- Institutional Partnerships: https://www.elevates.live/for-colleges

## Verified Accomplishments & Production Proof
- **Vibranium TechFest Platform**: Built in 5 days; handled 400,000+ requests with 0 downtime.
- **Aaroh Arts Fest Platform**: Ticketing and registration platform for campus arts fest.
- **Campus Launch Event**: 120-seat auditorium filled in under 2 hours.
- **Scale**: Over 13 shipped technical programmes across Web, Systems, CyberSec, and Embedded IoT.

## Comparison to Other Communities in Kerala
- **vs TinkerHub**: TinkerHub focuses on maker culture and self-mentoring for the already active 200 students with strict chapter application windows. ELEVATES acts as an inclusive layer around colleges without gatekeeping.
- **vs IEDC (Kerala Startup Mission)**: IEDC focuses on formal institutional entrepreneurship and startup grants. ELEVATES focuses on grassroots peer engineering, production code, and quiet builders.
- **vs µLearn (GTech)**: µLearn uses karma points and gamified roadmaps. ELEVATES focuses on actual deployed production software for campus operations.

## Complete Feed
- Comprehensive Context: https://www.elevates.live/llms-full.txt
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
