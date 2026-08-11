import { FlagshipProject, MemberShowcase } from "@/types/project";

export const FLAGSHIP_PROJECTS: FlagshipProject[] = [
  {
    slug: "vibranium-event-platform",
    title: "Vibranium Event Platform",
    client: "Eranad Knowledge City TechFest (Chapter 01)",
    date: "October 2025",
    type: "flagship",
    tagline: "Five days to build it. 400,000 requests in the first 24 hours. It did not go down.",
    summary: "A complete event management system, running the fest end to end under extreme load.",
    metrics: [
      { value: "400,000", label: "requests in first 24h" },
      { value: "5", label: "days to build & launch" },
      { value: "0", label: "minutes of downtime" },
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL"],
    repo: null,
    live: null,
    cover: "/team/elevates-founders.jpeg",
    inspiredBy: {
      name: "MakeMyPass",
      url: "https://makemypass.com",
    },
    situation: {
      title: "The Application Window Was Closed",
      paragraphs: [
        "Vibranium is Eranad Knowledge City's flagship annual tech fest.",
        "Five days before registrations opened, it had no system to handle them. The options were a Google Form and a spreadsheet, or something that actually worked.",
        "ELEVATES was about a month old at that point — founded in September 2025. In our final year, we stopped waiting for permission and built the software our college actually ran on.",
      ],
      highlight: "A community that was one month old built the production software its college ran on.",
    },
    numbers: [
      { value: "400,000", label: "HTTP requests in first 24 hours" },
      { value: "5", label: "days from start to live production" },
      { value: "0", label: "minutes of downtime during fest" },
      { value: "1,000+", label: "student registrations processed" },
    ],
    whatWeBuilt: [
      "Registration and ticketing flow for multiple parallel technical & non-technical events",
      "QR & venue check-in verification for volunteer gate managers from mobile devices",
      "Real-time live dashboard for faculty and student event organizers",
      "Automated confirmation email dispatch and participant badge generation",
      "Participant & winner certificate issuance workflow",
    ],
    howItHeldUp: {
      summary: "Registration opened and traffic arrived all at once — a college fest does not get a gentle ramp, it gets everyone in the same hour.",
      metrics: [
        { value: "400,000", label: "Total requests logged in 24h" },
        { value: "100%", label: "System uptime during peak traffic" },
      ],
      details: [
        "We optimized database queries, implemented edge caching on static assets, and kept payload size under 50KB to withstand high concurrent surges.",
        "Volunteers at gate entry checked in attendees in under 2 seconds per scan using standard mobile browser cameras.",
      ],
    },
    whatWeWouldDoDifferently: [
      "We did not load-test until day four — that nearly cost us. In future builds, load testing starts on day two.",
      "We built custom admin filters at 3am on launch night that could have been simplified with standard URL parameters.",
      "Offline caching on gate scanner devices should have been aggressive from minute one in case campus Wi-Fi dropped.",
    ],
    builders: [
      { role: "Founder & Full-Stack Lead", name: "Sarhan Qadir KVM", founderId: "sarhan-qadir-kvm" },
      { role: "Backend & Systems Lead", name: "Naseem Shan", founderId: "naseem-shan" },
      { role: "Infrastructure & Load", name: "Mohammed Shahin E K", founderId: "mohammed-shahin-ek" },
      { role: "Design & Brand UI", name: "Muhammed Nafih P", founderId: "muhammed-nafih-p" },
      { role: "Operations & Campus Launch", name: "Shifna K P", founderId: "shifna-kp" },
      { role: "Embedded & Check-In", name: "Muhammed Shanif P", founderId: "muhammed-shanif-p" },
    ],
    stackAndCode: {
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Vercel Edge"],
      repoUrl: null,
      repoNote: "Private repository — production software built for Eranad Knowledge City (Chapter 01) TechFest.",
      attribution: {
        name: "MakeMyPass",
        url: "https://makemypass.com",
        note: "Inspired by MakeMyPass. We looked at MakeMyPass while building this. It is a great product and we are not pretending we invented the category — we needed something running in five days for our own fest, so we built it.",
      },
    },
  },
  {
    slug: "aaroh-arts-platform",
    title: "Aaroh Arts Platform",
    client: "Eranad Knowledge City Arts Fest (Chapter 01)",
    date: "January 5, 2026",
    type: "flagship",
    tagline: "The second platform. This time we knew what we were doing.",
    summary: "Sophisticated web application streamlining the entire lifecycle of an arts festival — from student enrollment and event scheduling to real-time participation monitoring and automated PDF reporting.",
    metrics: [
      { value: "2nd", label: "production platform shipped" },
      { value: "50+", label: "stage competitions & events" },
      { value: "100%", label: "repeat college deployment" },
    ],
    stack: ["React 18", "Vite", "TypeScript", "Tailwind CSS", "Supabase", "TanStack Query", "Zod", "jsPDF"],
    repo: "https://github.com/elevates-club/aaroh",
    live: null,
    cover: "/team/elevates-founders.jpeg",
    situation: {
      title: "The Repeat Client",
      paragraphs: [
        "Aaroh (meaning 'Ascent') is Eranad Knowledge City's annual inter-department arts festival.",
        "After Vibranium 5.0 succeeded, the college leadership returned to ask ELEVATES to build the complete event management, scoring, and scheduling system for the arts fest.",
        "A repeat client is the strongest proof available — one platform is luck, two platforms is a pattern.",
      ],
      highlight: "After Vibranium succeeded under 400k requests, our college returned to ask ELEVATES to build the arts fest platform.",
    },
    numbers: [
      { value: "4", label: "Role dashboards (Admin, Manager, Coordinator, Student)" },
      { value: "50+", label: "Arts competitions & stage events managed" },
      { value: "Real-time", label: "Supabase live monitoring & audit logs" },
    ],
    whatWeBuilt: [
      "Role-Based Access Control: Dedicated dashboards for Admins, Event Managers, Coordinators, and Students.",
      "Dynamic Event Management: Create and manage diverse event categories with custom capacity limits and registration deadlines.",
      "Real-Time Monitoring: Live tracking of event participation levels (Low Participation vs. At Capacity) powered by Supabase.",
      "Automated Registrations: Smart validation for on-stage and off-stage event limits per student using React Hook Form & Zod.",
      "Operational Oversight: Comprehensive Audit Logs to monitor system-wide configuration changes and user logins.",
      "Professional Reporting: Integrated PDF generation for student registrations and event rosters using jsPDF.",
    ],
    howItHeldUp: {
      summary: "Built with lessons learned from Vibranium — cleaner architecture with Vite + Supabase, zero rush-hour bugs, and instant real-time result updates.",
      metrics: [
        { value: "0", label: "critical bugs during live scoring" },
        { value: "Real-time", label: "Supabase live sync for 1,000+ audience" },
      ],
      details: [
        "Handled simultaneous stage updates from multiple venues without race conditions or score calculation errors using Row Level Security (RLS) policies.",
      ],
    },
    whatWeWouldDoDifferently: [
      "We should have provided offline judge draft saving in local storage before pushing to Supabase.",
      "Batch PDF roster generation for 50+ events should be offloaded to a background web worker.",
    ],
    builders: [
      { role: "Founder & Full-Stack Lead", name: "Sarhan Qadir KVM", founderId: "sarhan-qadir-kvm" },
      { role: "Design & UI Lead", name: "Muhammed Nafih P", founderId: "muhammed-nafih-p" },
      { role: "Development", name: "Anil Das P", founderId: "anil-das-p" },
      { role: "Events & Operations", name: "Sona Varghese", founderId: "sona-varghese" },
    ],
    stackAndCode: {
      technologies: ["React 18", "Vite", "TypeScript", "Tailwind CSS", "shadcn/ui", "Supabase (DB & Auth)", "TanStack Query", "Zod", "jsPDF", "Recharts"],
      repoUrl: "https://github.com/elevates-club/aaroh",
      repoNote: "Open-source repository specialized for the Aaroh Arts Festival under ELEVATES Club.",
    },
  },
];

export const MEMBER_SHOWCASES: MemberShowcase[] = [
  {
    id: "roadundo",
    title: "RoadUndo",
    builder: "Sarhan Qadir KVM",
    builderId: "sarhan-qadir-kvm",
    cohort: "2025-26",
    description: "Open source developer utility for infrastructure & shell automation.",
    repo: "https://github.com/Elevates-Foundation/RoadUndo",
    live: null,
  },
];
