export type EventFormat = "Open to All" | "Campus Exclusive" | "Invite Only" | "Pre-Invite";
export type EventCategory = "Workshop" | "Peer Labs" | "Hackathon" | "Meetup" | "Learning Program" | "Challenge";
export type EventStatus = "Upcoming" | "Open" | "Registrations Closed" | "Completed";

export interface EventHost {
  name: string;
  role?: string;
  avatar?: string;
}

export interface EventOrganizer {
  name: string;
  logo?: string;
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  format: EventFormat;
  category: EventCategory;
  status: EventStatus;
  startDate: string; // e.g. "Aug 16, 2025"
  endDate: string;   // e.g. "Aug 16, 2025"
  startTime: string; // e.g. "9:00 AM"
  endTime: string;   // e.g. "6:00 PM"
  isoStartDate: string; // ISO 8601 string for Schema.org
  isoEndDate: string;
  venue: string;
  locationName: string;
  organizer: EventOrganizer[];
  hosts: EventHost[];
  topics: string[];
  attendeesCount: number;
  maxSeats?: number;
  coverImage: string;
  registrationUrl?: string;
  featured?: boolean;
}
