/**
 * ELEVATES: Canonical Entity Definition & Structured Data
 *
 * This file is the single source of truth for:
 * 1. The canonical ELEVATES definition sentence
 * 2. Organization schema (@id-linked)
 * 3. WebSite schema
 * 4. Helper functions for entity-specific schemas (Event, Chapter, Project, Person)
 *
 * All structured data across the site references `#organization` via @id,
 * forming a connected entity graph that search engines and LLMs can parse.
 */

// ─── Canonical Constants ────────────────────────────────────────────────────

export const ELEVATES_BASE_URL = "https://www.elevates.live";

export const ELEVATES_CANONICAL_DEFINITION =
  "ELEVATES is an open student tech community founded in Kerala, India. We find skilled students who code and build quietly without raising their hands, connect them to real production projects, and put their work in front of recruiters and the industry.";

export const ELEVATES_SHORT_DESCRIPTION =
  "A student tech community in Kerala for quiet builders. We build real production projects and get quiet talent noticed.";

export const ELEVATES_FOUNDING_DATE = "2025-09";

export const ELEVATES_SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/elevates.club/",
  linkedin: "https://www.linkedin.com/company/elevates-in",
  github: "https://github.com/Elevates-Foundation",
} as const;

// ─── Organization Schema ────────────────────────────────────────────────────

export const ELEVATES_ORGANIZATION_ID = `${ELEVATES_BASE_URL}/#organization`;
export const ELEVATES_WEBSITE_ID = `${ELEVATES_BASE_URL}/#website`;

export function getOrganizationSchema() {
  return {
    "@type": ["Organization", "EducationalOrganization"] as const,
    "@id": ELEVATES_ORGANIZATION_ID,
    name: "ELEVATES",
    alternateName: [
      "ELEVATES Foundation",
      "ELEVATES Community",
      "ELEVATES Student Tech Community",
    ],
    url: ELEVATES_BASE_URL,
    logo: `${ELEVATES_BASE_URL}/favicon.png`,
    image: `${ELEVATES_BASE_URL}/og-image.png`,
    description: ELEVATES_CANONICAL_DEFINITION,
    slogan: "Learn. Build. Grow.",
    foundingDate: ELEVATES_FOUNDING_DATE,
    areaServed: {
      "@type": "AdministrativeArea" as const,
      name: "Kerala, India",
    },
    address: {
      "@type": "PostalAddress" as const,
      addressLocality: "Manjeri",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    founder: {
      "@type": "Person" as const,
      name: "Sarhan Qadir KVM",
      jobTitle: "Founder",
      sameAs: "https://www.linkedin.com/in/sqadirkvm/",
    },
    knowsAbout: [
      "Software Engineering",
      "Web Development",
      "Cybersecurity",
      "IoT & Hardware Robotics",
      "AI & Machine Learning",
      "Open Source Collaboration",
      "UI/UX Product Design",
    ],
    sameAs: [
      ELEVATES_SOCIAL_LINKS.instagram,
      ELEVATES_SOCIAL_LINKS.linkedin,
      ELEVATES_SOCIAL_LINKS.github,
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite" as const,
    "@id": ELEVATES_WEBSITE_ID,
    url: ELEVATES_BASE_URL,
    name: "ELEVATES",
    description: ELEVATES_SHORT_DESCRIPTION,
    publisher: { "@id": ELEVATES_ORGANIZATION_ID },
    inLanguage: "en-US",
  };
}

export function getGlobalBreadcrumbSchema() {
  return {
    "@type": "BreadcrumbList" as const,
    "@id": `${ELEVATES_BASE_URL}/#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem" as const,
        position: 1,
        name: "Home",
        item: `${ELEVATES_BASE_URL}/`,
      },
      {
        "@type": "ListItem" as const,
        position: 2,
        name: "About",
        item: `${ELEVATES_BASE_URL}/about`,
      },
      {
        "@type": "ListItem" as const,
        position: 3,
        name: "Clusters",
        item: `${ELEVATES_BASE_URL}/clusters`,
      },
      {
        "@type": "ListItem" as const,
        position: 4,
        name: "Projects",
        item: `${ELEVATES_BASE_URL}/projects`,
      },
      {
        "@type": "ListItem" as const,
        position: 5,
        name: "Events",
        item: `${ELEVATES_BASE_URL}/events`,
      },
    ],
  };
}

/**
 * Combined Organization + WebSite + BreadcrumbList graph for the root layout.
 * Injected once globally so every page inherits the entity definition and hierarchy.
 */
export function getGlobalSchemaGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getWebSiteSchema(),
      getGlobalBreadcrumbSchema(),
    ],
  };
}

// ─── Entity Helper Functions ────────────────────────────────────────────────

/** Reference to the canonical ELEVATES Organization @id */
export function organizationRef() {
  return { "@id": ELEVATES_ORGANIZATION_ID };
}

/**
 * Generate BreadcrumbList structured data.
 * @param items - Array of { name, url } pairs, in order from root to current page.
 */
export function getBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Event schema linked to #organization as organizer.
 */
export function getEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  venue: string;
  locationName?: string;
  url: string;
  image?: string;
  attendeeCount?: number;
  status?: "scheduled" | "completed" | "cancelled";
  isOnline?: boolean;
}) {
  const statusMap = {
    scheduled: "https://schema.org/EventScheduled",
    completed: "https://schema.org/EventScheduled",
    cancelled: "https://schema.org/EventCancelled",
  };

  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: statusMap[event.status ?? "scheduled"],
    eventAttendanceMode: event.isOnline
      ? "https://schema.org/OnlineEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.venue,
      address: {
        "@type": "PostalAddress",
        addressLocality: event.locationName || "Manjeri",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
    },
    organizer: organizationRef(),
    url: event.url,
    ...(event.image && { image: event.image }),
    ...(event.attendeeCount && {
      maximumAttendeeCapacity: event.attendeeCount,
    }),
  };
}

/**
 * Generate chapter schema linked to #organization as parentOrganization.
 */
export function getChapterSchema(chapter: {
  name: string;
  college: string;
  url: string;
  description?: string;
  team?: Array<{ name: string; role: string }>;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: `ELEVATES ${chapter.name}`,
    url: chapter.url,
    description:
      chapter.description ??
      `Campus chapter of ELEVATES at ${chapter.college}.`,
    parentOrganization: organizationRef(),
    ...(chapter.team && {
      member: chapter.team.map((m) => ({
        "@type": "Person",
        name: m.name,
        jobTitle: m.role,
      })),
    }),
  };
}

/**
 * Generate project/software schema linked to #organization as creator.
 */
export function getProjectSchema(project: {
  name: string;
  description: string;
  url: string;
  repoUrl?: string | null;
  liveUrl?: string | null;
  technologies?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.name,
    description: project.description,
    url: project.url,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    creator: organizationRef(),
    ...(project.repoUrl && {
      codeRepository: project.repoUrl,
    }),
    ...(project.liveUrl && {
      installUrl: project.liveUrl,
    }),
  };
}

/**
 * Generate Person schema linked to #organization.
 */
export function getFounderSchema(founder: {
  name: string;
  role: string;
  url: string;
  linkedin?: string;
  image?: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.role,
    url: founder.url,
    memberOf: organizationRef(),
    ...(founder.linkedin && { sameAs: founder.linkedin }),
    ...(founder.image && { image: `${ELEVATES_BASE_URL}${founder.image}` }),
    ...(founder.description && { description: founder.description }),
  };
}
