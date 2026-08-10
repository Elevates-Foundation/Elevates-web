"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsomorphicLayoutEffect from "@/hooks/use-isomorphic-layout-effect";
import Doodle from "@/components/doodle";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
    {
        title: "SELECT",
        desc: "Selection Process",
        details: "We select up to 25 students across departments & years based on curiosity and willingness to learn."
    },
    {
        title: "TRAIN",
        desc: "Workshops",
        details: "Intensive hands-on workshops and focused sessions led by industry mentors."
    },
    {
        title: "BUILD",
        desc: "Real Projects",
        details: "Building real, fun, and chaotic projects in specialized clusters."
    },
    {
        title: "COLLAB",
        desc: "Open Source",
        details: "Collaborating on open-source repositories and internal community challenges."
    },
    {
        title: "SHOWCASE",
        desc: "Demo Day",
        details: "Presenting products at Hackathon-lite or Demo Day events."
    }
];

export default function Workflow() {
    const containerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    // const [activeStep, setActiveStep] = useRef<{ title: string, details: string } | null>(null); // This line was incorrect and not used, removed.

    // Mouse movement logic for tooltip
    const xTo = useRef<any>(null);
    const yTo = useRef<any>(null);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Setup QuickTo for performance
            xTo.current = gsap.quickTo(tooltipRef.current, "x", { duration: 0.2, ease: "power3" });
            yTo.current = gsap.quickTo(tooltipRef.current, "y", { duration: 0.2, ease: "power3" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 1,
                }
            });

            // Draw the connecting line (simulated reveal)
            tl.from(".workflow-line", { scaleX: 0, transformOrigin: "left center", ease: "none" });

            // Pop steps
            gsap.utils.toArray(".workflow-step").forEach((step: any, i) => {
                gsap.from(step, {
                    scale: 0,
                    opacity: 0,
                    rotation: -45,
                    duration: 0.5,
                    ease: "back.out(2)",
                    scrollTrigger: {
                        trigger: step,
                        start: "top 80%",
                    }
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        // Disable custom cursor logic on mobile
        if (typeof window !== "undefined" && window.innerWidth < 768) return;

        if (xTo.current && yTo.current) {
            const { clientX, clientY } = e;
            const tooltipWidthHalf = 160; // Approx half of max-w-xs (320px)
            const tooltipHeightHalf = 100; // Approx half height

            // Constrain to viewport
            const clampedX = Math.min(Math.max(clientX, tooltipWidthHalf + 10), window.innerWidth - tooltipWidthHalf - 10);
            const clampedY = Math.min(Math.max(clientY, tooltipHeightHalf + 10), window.innerHeight - tooltipHeightHalf - 10);

            xTo.current(clampedX);
            yTo.current(clampedY);
        }
    };

    // We need state to render the content
    const [hoveredContent, setHoveredContent] = useState<{ title: string, details: string } | null>(null);

    return (
        <section
            ref={containerRef}
            className="py-40 bg-paper relative overflow-hidden cursor-crosshair"
            onMouseMove={handleMouseMove}
        >
            {/* Custom Cursor Tooltip */}
            <div
                ref={tooltipRef}
                className={`fixed z-[60] pointer-events-none p-4 w-[90%] md:w-auto md:max-w-xs bg-graphite text-paper md:-rotate-2 border-2 border-flame shadow-[8px_8px_0px_0px_rgba(242,100,48,1)] transition-opacity duration-300
                bottom-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:top-0 md:left-0 md:bottom-auto
                ${hoveredContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            // Remove initial transform style as we handle mobile via class and desktop via GSAP
            >
                {hoveredContent && (
                    <>
                        <h4 className="font-black text-flame uppercase text-lg mb-1">{hoveredContent.title}</h4>
                        <p className="font-mono text-xs leading-relaxed">{hoveredContent.details}</p>
                    </>
                )}
            </div>

            <div className="container mx-auto px-4 text-center mb-20 relative z-10">
                <h2 className="text-4xl md:text-6xl font-black uppercase text-graphite mb-4">
                    THE PIPELINE
                </h2>
                <Doodle type="underline" color="#f26430" className="w-[300px] h-10 mx-auto" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-[140px] left-0 w-full h-2 bg-graphite/10 rounded-full workflow-line">
                    <div className="absolute inset-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-50" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                    {STEPS.map((step, i) => (
                        <div
                            key={i}
                            className="workflow-step flex flex-col items-center group relative perspective-1000"
                            onMouseEnter={() => setHoveredContent({ title: step.title, details: step.details })}
                            onMouseLeave={() => setHoveredContent(null)}
                        >
                            {/* Circle Number */}
                            <div className="w-24 h-24  md:w-32 md:h-32 rounded-full border-4 border-graphite bg-paper flex items-center justify-center relative mb-6 transition-all duration-300 transform group-hover:-translate-y-2 cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(242,100,48,1)]">
                                <span className="font-black text-4xl md:text-5xl text-graphite group-hover:text-flame transition-colors relative z-10">
                                    0{i + 1}
                                </span>

                                {/* Orbit Doodle */}
                                <Doodle type="circle" color="#758173" className="absolute inset-0 w-[120%] h-[120%] left-[-10%] top-[-10%] opacity-0 group-hover:opacity-50 animate-spin-slow" />
                            </div>

                            <h3 className="text-2xl font-black uppercase text-flame mb-2 text-center group-hover:scale-110 transition-transform">
                                {step.title}
                            </h3>

                            {/* Short Desc (Always visible now, no fade out) */}
                            <p className="font-mono text-xs md:text-sm text-center text-olive uppercase tracking-wide max-w-[120px]">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chaotic Arrow linking back to start */}
            <div className="hidden md:block absolute bottom-20 left-1/2 -translate-x-1/2 opacity-20">
                <p className="font-hand text-xl text-graphite rotate-6 text-center">
                    Repeat.<br />
                    Iterate.<br />
                    Grow.
                </p>
            </div>

        </section>
    );
}
