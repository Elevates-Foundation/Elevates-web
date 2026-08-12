import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Doodle from "@/components/doodle";

export const metadata: Metadata = {
  title: "About ELEVATES — A Student Tech Community in Kerala for Skilled, Quiet Builders",
  description:
    "We started because a chapter application window was closed. ELEVATES is a student-run tech community in Kerala that finds skilled but overlooked students, helps them build real projects, and makes sure the work gets seen.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About ELEVATES — A Student Tech Community in Kerala for Skilled, Quiet Builders",
    description:
      "We started because a chapter application window was closed. ELEVATES finds skilled but silent students, helps them build real projects, and makes sure the work gets seen.",
    url: "https://www.elevates.live/about",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "ELEVATES Foundation",
    "url": "https://www.elevates.live",
    "logo": "https://www.elevates.live/icon.png",
    "foundingDate": "2025-09",
    "description": "Student-driven tech community in Kerala finding skilled but overlooked students, giving them real work, and making sure the work is visible.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Cherukulam",
      "addressLocality": "Manjeri",
      "addressRegion": "Malappuram, Kerala",
      "postalCode": "676122",
      "addressCountry": "IN",
    },
    "areaServed": "Kerala, India",
    "founder": [
      {
        "@type": "Person",
        "name": "Sarhan Qadir KVM",
        "jobTitle": "Founder",
        "sameAs": "https://www.linkedin.com/in/sarhanqadir/",
      },
    ],
    "employee": [
      {
        "@type": "Person",
        "name": "Jasira KT",
        "jobTitle": "Faculty Head, CSE, Eranad Knowledge City",
      },
      {
        "@type": "Person",
        "name": "Anu K Soman",
        "jobTitle": "HOD, CSE, Eranad Knowledge City",
      },
    ],
    "sameAs": [
      "https://github.com/Elevates-Foundation",
      "https://www.linkedin.com/company/elevates-in",
      "https://www.instagram.com/elevates.club/",
    ],
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-5xl mx-auto selection:bg-flame selection:text-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-10 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">About</span>
      </nav>

      {/* ─── SCREEN 1: HERO ─── */}
      <header className="mb-14 max-w-4xl">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs font-bold uppercase tracking-widest bg-flame text-paper px-3 py-1 rounded-sm rotate-[-1deg] border border-graphite">
            ELEVATES // OUR STORY
          </span>
          <span className="font-mono text-xs text-olive font-bold hidden sm:inline">
            // KERALA MOVEMENT
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-graphite leading-[1.08] mb-5">
          WE STARTED BECAUSE WE <br className="hidden sm:inline" />
          <span className="text-flame">WERE TOLD TO WAIT.</span>
        </h1>

        <p className="font-hand text-xl md:text-2xl text-olive max-w-2xl leading-relaxed mb-3">
          ELEVATES is a student-built tech community in Kerala for the people who are already good and nobody knows it yet.
        </p>
        <p className="font-mono text-xs text-olive/80">
          Founded September 2025 in Kerala. Open to every campus across the state.
        </p>
      </header>

      {/* ─── SCREEN 2: THE ORIGIN ─── */}
      <section className="mb-14 bg-paper border-4 border-graphite rounded-sm p-8 md:p-10 shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] relative overflow-hidden">
        <div className="absolute -top-3.5 left-10 w-52 h-7 bg-flame/80 rotate-[-1.5deg] border border-graphite/30" />

        <h2 className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite mb-6 mt-2">
          THE APPLICATION WINDOW WAS CLOSED
        </h2>

        <div className="space-y-4 font-mono text-sm md:text-base text-graphite/85 leading-relaxed">
          <p>
            Four years ago, when we joined Eranad Knowledge City, we had one simple goal: join a tech community like TinkerHub.
          </p>
          <p>
            There wasn&apos;t one on our campus. So we tried to bring TinkerHub in. Every time, the reply was the same:
          </p>

          <blockquote className="border-l-4 border-flame pl-5 py-3 bg-flame/5 rounded-r-sm">
            <p className="font-bold text-graphite text-base md:text-lg italic">
              &quot;Sorry bro… the chapter application window is closed. Try next year.&quot;
            </p>
          </blockquote>

          <p>
            We tried the next year. And the year after that. Almost four years — the same answer.
          </p>
          <p>
            We understood the reason. Good programmes have to say no to stay good. But in our final year we tried one last time and got the same sentence back.
          </p>
          <p>
            At that moment, an idea struck. Why are we waiting for opportunities? Why can&apos;t we create one ourselves?
          </p>
          <p className="font-bold text-graphite">
            And that&apos;s how Elevates started in September 2025.
          </p>
          <p>
            Within months, our students had built a complete Event Management System in 5 days for Vibranium TechFest — handling 400,000 requests in 24 hours. Then a second platform for Aaroh Arts Fest. Cybersecurity workshops, automation sessions, industry tech.
          </p>
          <p className="font-bold text-flame">
            Nobody ever gave us a window. We stopped needing one.
          </p>
        </div>
      </section>

      {/* ─── SCREEN 3: THE REAL THESIS ─── */}
      <section className="mb-14">
        <h2 className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite mb-6 border-b-2 border-graphite/20 pb-3">
          THEN WE NOTICED SOMETHING WORSE
        </h2>

        <div className="space-y-4 font-mono text-sm md:text-base text-graphite/85 leading-relaxed mb-8">
          <p>
            Here is the part most communities leave off their website.
          </p>
          <p>
            We were not the students standing on stage. We were the back benchers. The ones the teachers kept an eye on. The ones who bunked class until third year. On paper, nobody's first pick for anything.
          </p>
          <p>
            But we loved technology. We were the ones taking tools apart at 2am.
          </p>
          <p>
            That is the gap nobody in Kerala is building for. Every community is designed around the student who applies, volunteers, speaks and posts. That student was going to be fine anyway.
          </p>
        </div>

        <div className="bg-graphite text-paper rounded-sm p-6 md:p-8 border-4 border-graphite shadow-[8px_8px_0px_0px_rgba(242,100,48,1)]">
          <p className="font-mono font-black text-xl md:text-3xl text-flame leading-snug mb-4">
            Skilled. Silent.<br />Graduating invisible.
          </p>
          <p className="font-mono text-sm text-paper/80 leading-relaxed">
            The one actually being wasted is sitting at the back with a half-finished project on a laptop — better than the people on stage — with an abandoned LinkedIn and no idea that any of it counts for anything. We know, because that was us.
          </p>
          <p className="font-mono text-sm text-paper font-bold mt-3">
            So we don't wait for applications. We go and find them.
          </p>
        </div>
      </section>

      {/* ─── SCREEN 4: WHAT WE DO ─── */}
      <section className="mb-14 border-l-4 border-flame pl-6 md:pl-8">
        <h2 className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite mb-4">
          WHAT WE ACTUALLY DO
        </h2>
        <div className="space-y-3 font-mono text-sm md:text-base text-graphite/85 leading-relaxed">
          <p>
            ELEVATES is a student-driven tech community in Kerala with one job: take students who are already skilled but not seen, give them real work and real support, and make sure the work is visible when they finish.
          </p>
          <p>
            We are not a lecture series. We are not a certificate mill. Nobody is getting a participation PDF from us.
          </p>
          <p>
            In our first months, our students built a complete Event Management System in 5 days for Vibranium TechFest — inspired by MakeMyPass — handling 400,000 requests in 24 hours. Then built a second platform for Aaroh Arts Fest. Not mock projects. The software the college actually ran on.
          </p>
          <p className="font-bold text-graphite">
            You come in. You build something real, with help. It goes on the internet with your name on it. That is the whole product.
          </p>
        </div>
      </section>

      {/* ─── SCREEN 5: HOW IT WORKS ─── */}
      <section className="mb-14">
        <h2 className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite mb-6 border-b-2 border-graphite/20 pb-3">
          FIVE STEPS — AND THE LAST ONE IS THE POINT
        </h2>

        <div className="space-y-3">
          {[
            ["SELECT", "We go looking. Referrals from juniors, seniors, faculty, and anyone who says \"there is someone in my class who…\". No application form deciding who deserves a chance."],
            ["TRAIN", "Small cohorts. Real mentors. Skills you use this month, not theory you use never."],
            ["BUILD", "A real project with a real deadline and someone checking on you. Building alone is how most students quietly give up."],
            ["COLLAB", "You work with other people. Most students leave college having never worked in a team on anything that mattered."],
            ["SHOWCASE", "The part everyone else skips. Your work gets published, credited, and put somewhere a recruiter can find it. A project nobody sees did not happen."],
          ].map(([step, desc], i) => (
            <div
              key={i}
              className={`flex gap-4 md:gap-6 p-5 rounded-sm border-2 transition-all ${step === "SHOWCASE"
                  ? "border-flame bg-flame/5 shadow-[4px_4px_0px_0px_rgba(242,100,48,1)]"
                  : "border-graphite/20 bg-paper"
                }`}
            >
              <span className={`font-mono font-black text-xs shrink-0 w-20 pt-0.5 ${step === "SHOWCASE" ? "text-flame" : "text-olive"}`}>
                {String(i + 1).padStart(2, "0")} {step}
              </span>
              <p className="font-mono text-xs md:text-sm text-graphite/85 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SCREEN 5b: SMALL ON PURPOSE ─── */}
      <section className="mb-14 bg-paper border-2 border-graphite rounded-sm p-7 shadow-[5px_5px_0px_0px_rgba(45,45,52,1)]">
        <h2 className="font-mono font-bold text-lg md:text-xl uppercase text-graphite mb-4">
          SMALL ON PURPOSE
        </h2>
        <div className="space-y-3 font-mono text-sm text-graphite/85 leading-relaxed">
          <p>
            We are not trying to be the biggest club on campus.
          </p>
          <p>
            25 executive members. Two representatives from every class, so there is always someone sitting in your own classroom you can talk to. After each workshop we split into learning clusters — small groups that keep going after the event is over.
          </p>
          <div className="flex items-center gap-2 md:gap-4 py-3 font-mono text-xs font-bold flex-wrap">
            <span className="bg-flame text-paper px-3 py-1.5 rounded-sm border border-graphite">EXECUTIVE TEAM</span>
            <span className="text-olive">→</span>
            <span className="bg-paper text-graphite px-3 py-1.5 rounded-sm border-2 border-graphite">CLASS REPS</span>
            <span className="text-olive">→</span>
            <span className="bg-paper text-graphite px-3 py-1.5 rounded-sm border-2 border-graphite">STUDENTS</span>
          </div>
          <p>
            Most clubs have four hundred members and twelve people who do anything. We would rather have twenty-five who ship.
          </p>
          <p className="text-olive text-xs italic">
            Your class rep is someone already sitting next to you. You never have to walk into a room of strangers to get noticed.
          </p>
        </div>
      </section>

      {/* ─── SCREEN 6: WHAT WE BELIEVE ─── */}
      <section className="mb-14">
        <h2 className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite mb-6 border-b-2 border-graphite/20 pb-3">
          FOUR THINGS WE ARE STUBBORN ABOUT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            ["No gatekeeping.", "We started on the wrong side of a closed application window. We are not going to run one. If you want in and you are willing to build, you are in."],
            ["Quiet is not the same as not capable.", "Some of the best engineers we know have never spoken at an event and never will. That is fine. We will make sure the work speaks."],
            ["Proof beats certificates.", "One shipped project you can show is worth more than eleven certificates nobody will ever open."],
            ["Credit goes to the student.", "Every project we help with carries the builder's name. Not ours."],
          ].map(([title, body], i) => (
            <div key={i} className="bg-paper border-2 border-graphite rounded-sm p-5 shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]">
              <h3 className="font-mono font-bold text-sm text-graphite mb-2">{title}</h3>
              <p className="font-mono text-xs text-olive leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SCREEN 7: PROOF ─── */}
      <section className="mb-14 bg-graphite text-paper rounded-sm border-4 border-graphite p-8 md:p-10 shadow-[10px_10px_0px_0px_rgba(242,100,48,1)] relative overflow-hidden">
        <div className="absolute -top-3.5 left-10 w-36 h-7 bg-flame/90 rotate-[-1.5deg] border border-graphite/30" />

        <h2 className="font-mono font-bold text-xl md:text-2xl uppercase text-paper mb-2">WHERE WE ARE</h2>
        <p className="font-mono text-xs text-paper/50 mb-8">Last updated: August 2026</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-7 font-mono mb-8">
          <div>
            <span className="text-flame text-3xl font-black block">Sep 2025</span>
            <span className="text-xs text-paper/70">Founded</span>
          </div>
          <div>
            <span className="text-flame text-3xl font-black block">2</span>
            <span className="text-xs text-paper/70">Production platforms shipped — Vibranium TechFest &amp; Aaroh Arts Fest</span>
          </div>
          <div>
            <span className="text-flame text-3xl font-black block">400K+</span>
            <span className="text-xs text-paper/70">Requests in 24h on the Vibranium event system. Built in 5 days.</span>
          </div>
          <div>
            <span className="text-flame text-3xl font-black block">120</span>
            <span className="text-xs text-paper/70">Seats at our annual Campus Launch Event — filled in 1–2 hours. Chief Guest: Shibili Rahiman KP.</span>
          </div>
          <div>
            <span className="text-flame text-3xl font-black block">30+</span>
            <span className="text-xs text-paper/70">Registrations in the first 5 minutes of the launch</span>
          </div>
          <div>
            <span className="text-flame text-3xl font-black block">25</span>
            <span className="text-xs text-paper/70">Executive members · 2 class reps in every class · 13 programmes</span>
          </div>
        </div>

        <div className="border-t border-paper/20 pt-6 space-y-1.5 font-mono text-xs text-paper/75">
          <p className="font-bold text-paper/90 mb-2">Faculty Support</p>
          <p>Jasira KT — Faculty Head, CSE · Eranad Knowledge City, Manjeri</p>
          <p>Anu K Soman — HOD, CSE · Eranad Knowledge City, Manjeri</p>
          <p className="pt-1 text-paper/40">Founded at Eranad Knowledge City · Expanding across all 14 districts in Kerala</p>
        </div>

        <Doodle
          type="star"
          color="#f26430"
          className="absolute right-6 top-6 w-20 h-20 opacity-20 rotate-12 pointer-events-none hidden md:block"
        />
      </section>

      {/* ─── SCREEN 8: THE PEOPLE ─── */}
      <section className="mb-14 bg-paper border-3 border-graphite rounded-sm p-7 md:p-8 shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-mono text-xs font-bold text-flame uppercase tracking-wider block mb-1">
            FOUNDING TEAM // THE PEOPLE BEHIND ELEVATES
          </span>
          <h2 className="font-mono font-bold text-xl md:text-2xl uppercase text-graphite mb-2">
            MEET THE 17 FOUNDERS &amp; ADVISORS
          </h2>
          <p className="font-mono text-xs md:text-sm text-olive max-w-xl">
            17 back benchers, main class bunkers, and quiet builders who stopped waiting for permission — plus our CSE faculty leadership.
          </p>
        </div>
        <Link
          href="/team"
          id="about-team-cta"
          className="bg-flame text-paper font-mono font-bold text-xs px-6 py-3.5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase shrink-0"
        >
          MEET THE TEAM ↗
        </Link>
      </section>

      {/* ─── SCREEN 9: CLOSE ─── */}
      <section className="border-t-4 border-graphite pt-10 text-center">
        <p className="font-hand text-2xl md:text-3xl text-graphite mb-3 max-w-2xl mx-auto leading-relaxed">
          If you have been building things quietly and nobody has noticed —
        </p>
        <p className="font-hand text-2xl md:text-3xl text-flame mb-10 max-w-2xl mx-auto leading-relaxed">
          that is exactly who this is for.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#footer"
            id="about-join-cta"
            className="bg-flame text-paper font-mono font-bold text-sm px-8 py-3.5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
          >
            JOIN ELEVATES ↗
          </Link>
          <Link
            href="/chapters"
            id="about-chapters-cta"
            className="bg-paper text-graphite font-mono font-bold text-sm px-8 py-3.5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
          >
            START A CHAPTER ↗
          </Link>
        </div>
      </section>
    </main>
  );
}
