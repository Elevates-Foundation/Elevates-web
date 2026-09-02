import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ELEVATES For Colleges | One-Pager Summary",
  description:
    "Bring ELEVATES to your college. Project-based tech programming for Kerala students mapped to KTU, NAAC, NBA, FYUGP, and KSUM IEDC requirements.",
  robots: { index: false, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
