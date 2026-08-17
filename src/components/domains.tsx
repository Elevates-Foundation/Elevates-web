"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "@/hooks/use-isomorphic-layout-effect";
import Doodle from "@/components/doodle";

const DOMAINS = [
    {
        title: "Software & IT",
        doodle: "code",
        details: ["Web Development", "App Development", "AI & ML", "Cybersecurity", "Cloud Computing"]
    },
    {
        title: "Core Engineering",
        doodle: "gear",
        details: ["Civil Tech (CAD/BIM)", "Mech Tech (Robotics)", "Electrical (EV/PLC)", "Electronics & IoT"]
    },
    {
        title: "Specialized Fields",
        doodle: "bulb",
        details: ["Industrial Safety", "Environmental Tech", "Product Design", "Rapid Prototyping"]
    },
    {
        title: "Creative & Design",
        doodle: "scribble",
        details: ["UI/UX Design", "Game Dev", "Digital Art", "Content Creation"]
    }
];

export default function Domains() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(".domain-item",
                { y: 100, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.1,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top center+=100",
                    }
                }
            );
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const handleInteraction = (index: number) => {
        // Toggle on click/tap, mainly for mobile
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section ref={containerRef} className="py-40 bg-paper min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
            <h2 className="text-xl font-mono text-olive mb-10 tracking-widest uppercase">
                // Where We Play
            </h2>

            <div className="w-full max-w-6xl px-4 flex flex-col gap-4">
                {DOMAINS.map((domain, i) => (
                    <div
                        key={i}
                        onClick={() => handleInteraction(i)}
                        className={`domain-item group relative border-b-2 transition-colors duration-300 py-8 cursor-pointer ${activeIndex === i ? "border-graphite bg-paper/50" : "border-graphite/10 hover:border-graphite"
                            }`}
                    >
                        <div className="flex flex-col relative z-20">
                            {/* Title */}
                            <h3 className={`text-4xl md:text-8xl font-black uppercase text-graphite transition-transform duration-500 w-fit ${activeIndex === i ? "translate-x-4 md:translate-x-10" : "group-hover:translate-x-4 md:group-hover:translate-x-10"
                                }`}>
                                {domain.title}
                            </h3>

                            {/* Inline Details (Revealed on Hover OR Click) */}
                            <div className={`transition-all duration-500 overflow-hidden ${activeIndex === i
                                ? "max-h-[200px] opacity-100 pl-12"
                                : "max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 group-hover:pl-12"
                                }`}>
                                <ul className="flex flex-wrap gap-4 mt-4 font-mono text-sm text-olive">
                                    {domain.details.map((detail, j) => (
                                        <li key={j} className="border border-olive/30 px-3 py-1 rounded-full bg-paper">
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Hover Reveal Background (Brush Stroke) */}
                        <div className={`absolute inset-0 bg-flame transition-transform duration-500 origin-left -z-0 opacity-10 skew-x-12 ${activeIndex === i ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                            }`} />

                        {/* Floating Doodle */}
                        <div className={`absolute right-10 top-1/2 -translate-y-1/2 transition-all duration-500 z-20 pointer-events-none ${activeIndex === i
                            ? "opacity-100 rotate-12 scale-125"
                            : "opacity-0 group-hover:opacity-100 group-hover:rotate-12 group-hover:scale-125"
                            }`}>
                            <Doodle
                                // @ts-ignore
                                type={domain.doodle}
                                color="#f26430"
                                className="w-24 h-24"
                            />
                        </div>

                        {/* Little index number */}
                        <span className="absolute top-4 left-0 font-mono text-sm text-olive opacity-50 ml-1">
                            0{i + 1}
                        </span>
                    </div>
                ))}
            </div>

            <Doodle type="scribble" color="#758173" className="absolute top-20 left-10 w-48 h-48 opacity-10 rotate-45" />
        </section>
    );
}
