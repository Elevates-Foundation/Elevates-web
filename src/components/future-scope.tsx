"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsomorphicLayoutEffect from "@/hooks/use-isomorphic-layout-effect";
import Doodle from "@/components/doodle";

gsap.registerPlugin(ScrollTrigger);

const FUTURE_ITEMS = [
    { title: "FRANCHISE", desc: "Expansion to multiple institutions." },
    { title: "SCHOOLS", desc: "Outreach to introduce code & AI." },
    { title: "PLATFORM", desc: "Dedicated app for projects & network." },
    { title: "PARTNERS", desc: "Industry mentorships & real projects." }
];

export default function FutureScope() {
    const containerRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".future-card", {
                y: 100,
                opacity: 0,
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
        <section ref={containerRef} className="py-20 bg-graphite text-paper relative overflow-hidden">
            {/* Background Scribbles */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-black uppercase mb-16 text-paper mix-blend-difference">
                    <span className="text-flame">FUTURE</span> SCOPE
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {FUTURE_ITEMS.map((item, i) => (
                        <div key={i} className="future-card group relative border border-paper/20 p-8 hover:bg-paper/5 transition-colors">
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 bg-flame opacity-50" />
                            <div className="absolute top-0 right-0 w-2 h-2 bg-flame opacity-50" />
                            <div className="absolute bottom-0 left-0 w-2 h-2 bg-flame opacity-50" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 bg-flame opacity-50" />

                            <h3 className="text-2xl font-black uppercase mb-4 text-olive group-hover:text-flame transition-colors">
                                {item.title}
                            </h3>
                            <p className="font-mono text-sm text-paper/60 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-20">
                    <p className="font-hand text-2xl text-paper/40 rotate-2">
                        Just getting started...
                    </p>
                </div>
            </div>
        </section>
    );
}
