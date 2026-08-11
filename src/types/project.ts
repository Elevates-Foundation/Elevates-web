export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectBuilder {
  role: string;
  name: string;
  founderId: string;
}

export interface FlagshipProject {
  slug: string;
  title: string;
  client: string;
  date: string;
  type: "flagship";
  summary: string;
  tagline: string;
  metrics: ProjectMetric[];
  stack: string[];
  repo: string | null;
  live: string | null;
  cover: string;
  inspiredBy?: {
    name: string;
    url: string;
  };
  situation: {
    title: string;
    paragraphs: string[];
    highlight?: string;
  };
  numbers: ProjectMetric[];
  whatWeBuilt: string[];
  howItHeldUp: {
    summary: string;
    metrics: ProjectMetric[];
    details: string[];
  };
  whatWeWouldDoDifferently: string[];
  builders: ProjectBuilder[];
  stackAndCode: {
    technologies: string[];
    repoUrl: string | null;
    repoNote: string;
    attribution?: {
      name: string;
      url: string;
      note: string;
    };
  };
}

export interface MemberShowcase {
  id: string;
  title: string;
  builder: string;
  builderId: string;
  cohort: string;
  description: string;
  repo: string | null;
  live: string | null;
  thumb?: string;
}
