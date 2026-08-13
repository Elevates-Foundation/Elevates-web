import { Chapter } from "./index";

export const eranadKnowledgeCityChapter: Chapter = {
  slug: "eranad-knowledge-city",
  chapterNumber: "01",
  name: "Eranad Knowledge City Chapter",
  college: "Eranad Knowledge City Technical Campus, Cherukulam, Manjeri",
  district: "Malappuram",
  foundedDate: "September 2025",
  lead: {
    name: "Adhinan K",
    role: "Campus Chapter Lead",
  },
  facultyCoordinator: {
    name: "Jasira KT",
    designation: "Faculty Head, CSE",
    department: "Computer Science & Engineering",
  },
  team: [
    { name: "EKC Chapter Lead", role: "Campus Lead", tag: "Chapter Lead" },
    { name: "Vice Lead", role: "Vice Chapter Lead", tag: "Operations" },
    { name: "Tech Lead", role: "Technical Lead", tag: "Engineering" },
    { name: "Events Lead", role: "Events & Workshops Lead", tag: "Logistics" },
    { name: "Design Lead", role: "Media & Branding Lead", tag: "Design" },
    { name: "Outreach Rep", role: "Class Representative Lead", tag: "Outreach" },
  ],
  events: [
    {
      title: "Campus Launch Event",
      date: "September 2025",
      headcount: 120,
      description: "Official campus launch with Chief Guest Shibili Rahiman KP. 120 seats filled in 1-2 hours.",
    },
    {
      title: "Cybersecurity & Web Defense Workshop",
      date: "October 2025",
      headcount: 45,
      description: "Hands-on security workshop on web vulnerability scanning and CTF basics.",
    },
    {
      title: "Vibranium TechFest Platform Sprint",
      date: "November 2025",
      headcount: 30,
      description: "5-day rapid dev sprint building the full fest event management system.",
    },
    {
      title: "Celestia CSE Relaunch & 1-Hour Build",
      date: "March 25, 2026",
      headcount: 250,
      description: "Coordinated CSE department relaunch event with Chief Guest Moosa Mehar MP (Co-Founder & CEO, TinkerHub). Rebuilt association website live on stage in 60 minutes.",
    },
  ],
  projects: [
    {
      slug: "vibranium-event-platform",
      url: "/projects/vibranium-event-platform",
      title: "Vibranium Event Platform",
      description: "Event management & ticketing engine handling 400,000+ requests in 24 hours.",
      builder: "ELEVATES EKC Dev Team",
    },
    {
      slug: "aaroh-arts-platform",
      url: "/projects/aaroh-arts-platform",
      title: "Aaroh Arts Platform",
      description: "Real-time registration and score portal for the campus arts festival.",
      builder: "ELEVATES EKC Dev Team",
    },
    {
      slug: "celestia",
      url: "/projects/celestia",
      title: "Celestia — CSE Association Website",
      description: "Full CSE department website rebuilt in 1 hour by 5 junior builders and launched live via gesture recognition.",
      builder: "5 Junior Student Builders",
    },
  ],
  stats: {
    eventsCount: 17,
    studentsImpacted: 400,
    platformRequests: "400K+ in 24h",
  },
};
