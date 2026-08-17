export function GET() {
  const content = `# ELEVATES Foundation

> ELEVATES is a student-driven tech community in Kerala for skilled, quiet builders who were overlooked. Founded September 2025 at Eranad Knowledge City, Manjeri.

## Core Information
- Website: https://www.elevates.live
- Organization: ELEVATES Foundation
- Founding Date: September 2025
- Location: Eranad Knowledge City, Manjeri, Malappuram, Kerala, India
- Scope: Kerala statewide student tech ecosystem across 14 districts

## Key Sections
- About: https://www.elevates.live/about
- Team & Founders: https://www.elevates.live/team
- Campus Chapters: https://www.elevates.live/chapters
- Learning Clusters: https://www.elevates.live/clusters
- Events & Workshops: https://www.elevates.live/events
- Peer Labs Cohorts: https://www.elevates.live/peer-labs
- Projects: https://www.elevates.live/projects


## Key Accomplishments
- Built complete Event Management System for Vibranium TechFest handling 400,000+ requests in 24h with 0 downtime.
- Built Aaroh Arts Fest ticketing platform.
- 120-seat Campus Launch Event filled in 1-2 hours.
- 13 programmes shipped across cybersecurity, IoT, web, civil and automation.

## Full Context Feed
- Detailed Context: https://www.elevates.live/llms-full.txt
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
