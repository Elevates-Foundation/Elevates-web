import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitch Deck: ELEVATES Chapters | Building Kerala's Largest Student Innovation Network",
  description:
    "The official ELEVATES pitch deck. A proven model from Ernad Knowledge City: open community, cluster system, real projects, and expanding across campuses in Kerala.",
  openGraph: {
    title: "ELEVATES Chapters: Pitch Deck 2026",
    description:
      "Building Kerala's Largest Student Innovation Network. Open community · Cluster-based · Project-driven · Student-led.",
    url: "https://elevates.live/pitch-2026",
    type: "website",
  },
  alternates: {
    canonical: "https://elevates.live/pitch-2026",
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function PitchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

import React from "react";
