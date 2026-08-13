import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Code of Conduct & Event Governance | ELEVATES Kerala",
  description:
    "ELEVATES community code of conduct, event safety standards, anti-harassment policy, and faculty oversight rules for all campus workshops, hackathons, and cluster sessions.",
  alternates: {
    canonical: "/code-of-conduct",
  },
};

export default function CodeOfConductPage() {
  return (
    <main className="min-h-screen bg-paper text-graphite pt-32 md:pt-40 pb-24 px-6 md:px-12 max-w-5xl mx-auto selection:bg-flame selection:text-paper">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">Code of Conduct</span>
      </nav>

      <div className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(45,45,52,1)] mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm">
            COMMUNITY &amp; SAFETY
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // GOVERNANCE RULES
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black uppercase text-graphite mb-6 leading-tight">
          CODE OF CONDUCT &amp; EVENT SAFETY
        </h1>

        <p className="font-mono text-sm text-olive mb-6">
          Applies to all ELEVATES events, learning clusters, online repositories, and campus chapters.
        </p>

        <div className="space-y-8 font-sans text-sm leading-relaxed text-graphite/90 border-t-2 border-graphite/20 pt-8">
          <section>
            <h2 className="font-mono font-black text-xl text-graphite uppercase mb-3 flex items-center gap-2">
              <span className="text-flame">01.</span> Our Pledge
            </h2>
            <p>
              ELEVATES is dedicated to providing a safe, respectful, inclusive, and harassment-free learning environment for everyone, regardless of gender, academic branch, background, technical skill level, physical appearance, or socioeconomic status. We expect all student participants, leads, faculty coordinators, and guest speakers to adhere to this code.
            </p>
          </section>

          <section>
            <h2 className="font-mono font-black text-xl text-graphite uppercase mb-3 flex items-center gap-2">
              <span className="text-flame">02.</span> Expected Behavior
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs my-3">
              <div className="bg-paper border-2 border-graphite p-4">
                <span className="text-flame font-bold block mb-1">✔ Collaborative Mentorship</span>
                <p className="text-graphite/80">Support quiet builders. Senior builders and mentors share code and knowledge generously without condescension.</p>
              </div>
              <div className="bg-paper border-2 border-graphite p-4">
                <span className="text-flame font-bold block mb-1">✔ Respect Academic Spaces</span>
                <p className="text-graphite/80">Respect host institution property, faculty instructions, seminar hall guidelines, and lab equipment at all times.</p>
              </div>
              <div className="bg-paper border-2 border-graphite p-4">
                <span className="text-flame font-bold block mb-1">✔ Constructive Code Review</span>
                <p className="text-graphite/80">Provide practical, encouraging feedback on student projects. Credit all student builders publicly.</p>
              </div>
              <div className="bg-paper border-2 border-graphite p-4">
                <span className="text-flame font-bold block mb-1">✔ Faculty Oversight</span>
                <p className="text-graphite/80">Submit event agendas, speaker bios, and venue plans to the faculty coordinator in advance.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-mono font-black text-xl text-graphite uppercase mb-3 flex items-center gap-2">
              <span className="text-flame">03.</span> Unacceptable Behavior &amp; Zero Tolerance
            </h2>
            <p className="mb-3">The following behaviors will result in immediate removal from events and potential revocation of cluster membership:</p>
            <ul className="list-disc pl-6 space-y-2 font-mono text-xs text-graphite">
              <li>Harassment, intimidation, offensive comments, or discriminatory behavior in any form.</li>
              <li>Unauthorized collection of money or commercial solicitation during ELEVATES sessions.</li>
              <li>Misuse of the college name or ELEVATES brand without faculty clearance.</li>
              <li>Disruptive behavior in academic halls or unauthorized access to campus infrastructure.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono font-black text-xl text-graphite uppercase mb-3 flex items-center gap-2">
              <span className="text-flame">04.</span> Incident Reporting &amp; Escalation
            </h2>
            <p className="mb-3">
              If you witness or experience unacceptable behavior, please report it immediately:
            </p>
            <div className="bg-graphite text-paper border-2 border-graphite p-4 font-mono text-xs space-y-2">
              <p>📍 On Campus: Contact your designated Faculty Coordinator or Chapter Lead immediately.</p>
              <p>📩 Foundation Escalation: Email <a href="mailto:safety@elevates.live" className="text-flame underline">safety@elevates.live</a> or submit an anonymous report via our portal.</p>
              <p>🛡️ All reports are handled with confidentiality and investigated within 24 hours.</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
