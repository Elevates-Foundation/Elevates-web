"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsomorphicLayoutEffect from "@/hooks/use-isomorphic-layout-effect";
import Doodle from "@/components/doodle";

gsap.registerPlugin(ScrollTrigger);

const BENEFITS = [
    { title: "SKILLS", desc: "Learn in-demand tech stacks." },
    { title: "PORTFOLIO", desc: "Build real, shippable projects." },
    { title: "GITHUB", desc: "Open-source contributions." },
    { title: "CAREER", desc: "Placement & Startup ready." }
];

const CRITERIA = [
    "Curiosity & Hunger",
    "Willingness to Learn",
    "Cross-Dept Mindset",
    "Beginner Friendly"
];

export default function Membership() {
    const containerRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".membership-item", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-20 bg-olive text-paper relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fdfbf7_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">

                {/* Left: Why Join? (Benefits) */}
                <div>
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-10 text-flame mix-blend-screen">
                        WHY JOIN?
                    </h2>
                    <div className="grid grid-cols-1 gap-6">
                        {BENEFITS.map((b, i) => (
                            <div key={i} className="membership-item flex items-center gap-6 group">
                                <span className="font-mono text-flame text-xl font-bold">0{i + 1}</span>
                                <div>
                                    <h3 className="text-2xl font-black uppercase text-paper group-hover:translate-x-2 transition-transform">
                                        {b.title}
                                    </h3>
                                    <p className="font-mono text-sm text-paper/70 group-hover:text-paper transition-colors">
                                        {b.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Who we want? (Selection) */}
                <div className="relative border-4 border-paper/10 p-8 md:p-10 rotate-1 bg-graphite/20 backdrop-blur-sm">
                    {/* Tape */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-flame/80 rotate-[-2deg] opacity-80" />

                    <h3 className="text-3xl font-black uppercase mb-6 text-paper text-center">
                        PROFILES WANTED
                    </h3>
                    <p className="font-mono text-center mb-8 text-paper/60">
                        Max Cohort Size: <strong className="text-flame">25 Students</strong>
                    </p>

                    <ul className="space-y-4 font-hand text-xl md:text-2xl text-center">
                        {CRITERIA.map((c, i) => (
                            <li key={i} className="membership-item">
                                {c}
                            </li>
                        ))}
                    </ul>

                    <Doodle type="arrow" color="#f26430" className="absolute -bottom-8 -right-8 w-16 h-16 rotate-[135deg]" />
                </div>

            </div>
        </section>
    );
}
