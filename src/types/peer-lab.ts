export interface PeerLabLesson {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  eventSlug?: string;
}

export interface PeerLabFacilitator {
  name: string;
  role?: string;
  avatar?: string;
}

export interface PeerLabResource {
  title: string;
  url: string;
  type?: string;
}

export interface PeerLabSeries {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  campusName: string;
  status: "Active" | "Upcoming" | "Completed";
  joinedCount: number;
  lessons: PeerLabLesson[];
  facilitators: PeerLabFacilitator[];
  resources: PeerLabResource[];
  coverImage?: string;
  featured?: boolean;
}
