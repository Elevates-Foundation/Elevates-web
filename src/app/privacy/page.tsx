import React from "react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy & Data Governance | ELEVATES Kerala",
  description:
    "ELEVATES privacy policy and data governance practices compliant with India's Digital Personal Data Protection (DPDP) Act. Student data rights, consent, photography notices, and institutional safeguards.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-paper text-graphite pt-32 md:pt-40 pb-24 px-6 md:px-12 max-w-5xl mx-auto selection:bg-flame selection:text-paper">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">Privacy Policy</span>
      </nav>

      <div className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(45,45,52,1)] mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-graphite px-3 py-1 font-bold rounded-sm">
            LEGAL &amp; GOVERNANCE
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // DPDP COMPLIANCE
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-black uppercase text-graphite mb-6 leading-tight">
          PRIVACY POLICY &amp; DATA GOVERNANCE
        </h1>

        <p className="font-mono text-sm text-olive mb-6">
          Last updated: August 2026 • ELEVATES Foundation (Registered Non-Profit Community)
        </p>

        <div className="space-y-8 font-sans text-sm leading-relaxed text-graphite/90 border-t-2 border-graphite/20 pt-8">
          <section>
            <h2 className="font-mono font-black text-xl text-graphite uppercase mb-3 flex items-center gap-2">
              <span className="text-flame">01.</span> Commitment to Student Privacy &amp; DPDP Act Compliance
            </h2>
            <p>
              ELEVATES Foundation (&quot;ELEVATES&quot;, &quot;we&quot;, &quot;our&quot;) is committed to protecting the privacy of students, faculty, event participants, and institutional partners. As a Data Fiduciary under India&apos;s <strong>Digital Personal Data Protection (DPDP) Act</strong>, we collect personal data strictly for non-commercial educational programming, workshop execution, certificate verification, and institutional accreditation reporting.
            </p>
          </section>

          <section>
            <h2 className="font-mono font-black text-xl text-graphite uppercase mb-3 flex items-center gap-2">
              <span className="text-flame">02.</span> Information We Collect &amp; Purpose
            </h2>
            <p className="mb-3">We collect minimal personal information necessary to deliver educational programming and document student activities for KTU, NAAC, and NBA verification:</p>
            <ul className="list-disc pl-6 space-y-2 font-mono text-xs text-graphite">
              <li><strong>Registration Data:</strong> Name, college email, phone number, institution name, department, academic year, and KTU register number (optional).</li>
              <li><strong>Academic Output:</strong> Workshop attendance logs, project repository links, hackathon submissions, and activity point verification records.</li>
              <li><strong>Event Photography &amp; Media:</strong> Group photographs and video snippets captured during public campus events.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-mono font-black text-xl text-graphite uppercase mb-3 flex items-center gap-2">
              <span className="text-flame">03.</span> Student Consent &amp; Non-Commercial Guarantee
            </h2>
            <p className="mb-3">
              Personal data collected via event forms is obtained through explicit, affirmative consent. ELEVATES maintains a strict <strong>Zero-Commercialization Guarantee</strong>:
            </p>
            <div className="bg-graphite/5 border-2 border-graphite p-4 font-mono text-xs space-y-2">
              <p>✔ Student data is NEVER sold, rented, or shared with commercial recruiters, advertisers, or third-party lead brokers.</p>
              <p>✔ Contact information is used exclusively for event notifications, cluster mentorship announcements, and certificate dispatch.</p>
              <p>✔ Students retain full ownership and intellectual property rights over software code, hardware designs, and content they build in ELEVATES clusters.</p>
            </div>
          </section>

          <section>
            <h2 className="font-mono font-black text-xl text-graphite uppercase mb-3 flex items-center gap-2">
              <span className="text-flame">04.</span> Event Photography &amp; Media Consent
            </h2>
            <p>
              During ELEVATES workshops and campus fests, photography and videography may occur for documentation, institutional reporting (NAAC/NBA AQAR evidence), and community showcase. Notice is provided on all event registration forms and at venue entrances. Individuals wishing not to appear in published media may inform event organizers on-site or contact <a href="mailto:privacy@elevates.live" className="text-flame underline">privacy@elevates.live</a>.
            </p>
          </section>

          <section>
            <h2 className="font-mono font-black text-xl text-graphite uppercase mb-3 flex items-center gap-2">
              <span className="text-flame">05.</span> Minors &amp; High-School Programming
            </h2>
            <p>
              ELEVATES campus programming is designed for higher-education students aged 18 and above. In accordance with the DPDP Act, any specialized secondary-school programming involving individuals under 18 requires verifiable parental consent prior to registration.
            </p>
          </section>

          <section>
            <h2 className="font-mono font-black text-xl text-graphite uppercase mb-3 flex items-center gap-2">
              <span className="text-flame">06.</span> Data Rights &amp; Officer Contact
            </h2>
            <p className="mb-3">
              Students and faculty partners may request access to their stored personal records, request corrections, or withdraw consent at any time.
            </p>
            <div className="bg-paper border-2 border-graphite p-4 font-mono text-xs">
              <p className="font-bold text-graphite mb-1">Data Protection Officer</p>
              <p className="text-olive">ELEVATES Foundation Legal &amp; Governance Cell</p>
              <p className="text-flame mt-2">Email: privacy@elevates.live</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
