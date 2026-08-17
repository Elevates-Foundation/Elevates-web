"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsomorphicLayoutEffect from "@/hooks/use-isomorphic-layout-effect";
import Doodle from "@/components/doodle";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const slider = sliderRef.current;
            if (!slider) return;

            // Recalculate on each refresh so mobile viewport is correct
            const getTotalWidth = () => slider.scrollWidth - window.innerWidth;

            gsap.to(slider, {
                x: () => -getTotalWidth(),
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: () => `+=${getTotalWidth()}`,
                    pin: true,
                    scrub: 1,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });

            // Parallax Doodles
            gsap.utils.toArray(".about-doodle").forEach((doodle: any, i) => {
                gsap.to(doodle, {
                    x: (i + 1) * 50,
                    rotation: (i % 2 === 0 ? 360 : -360),
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1.5,
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen overflow-hidden bg-graphite text-paper" style={{ touchAction: "pan-y" }}>
            <div ref={sliderRef} className="flex h-full items-center w-[500vw] relative">

                {/* Panel 1: WHO - Elevates */}
                <div className="w-screen h-full flex flex-col justify-center items-center relative border-r-2 border-paper/10 px-4">
                    <h2 className="text-[clamp(3rem,18vw,13rem)] font-black leading-none uppercase mix-blend-difference text-center">
                        ELEVATES
                    </h2>
                    <Doodle type="crown" color="#f26430" className="about-doodle w-16 h-16 md:w-48 md:h-48 absolute top-10 right-4 md:top-20 md:right-20 opacity-80" />
                    <p className="absolute bottom-8 left-4 md:bottom-20 md:left-20 font-mono text-xs sm:text-sm md:text-xl max-w-[90%] md:max-w-md leading-relaxed">
                        // MULTI-DISCIPLINARY. <br />
                        // STUDENT-DRIVEN. <br />
                        // CHAOS &amp; CODE.
                    </p>
                </div>

                {/* Panel 2: VISION - Explore/Experiment */}
                <div className="w-screen h-full flex justify-center items-center relative bg-paper text-graphite skew-x-[-5deg] px-4">
                    <div className="flex flex-col items-center">
                        <h2 className="text-[clamp(1.8rem,8vw,7rem)] font-black leading-none uppercase tracking-tighter transform rotate-2 text-olive">
                            EXPLORE.
                        </h2>
                        <h2 className="text-[clamp(1.8rem,8vw,7rem)] font-black leading-none uppercase tracking-tighter transform -rotate-2 text-flame">
                            EXPERIMENT.
                        </h2>
                        <h2 className="text-[clamp(1.8rem,8vw,7rem)] font-black leading-none uppercase tracking-tighter transform rotate-2 text-graphite">
                            EXCEL.
                        </h2>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[120%] border-4 border-flame opacity-20 rotate-[-2deg]" />
                    <Doodle type="rocket" color="#414066" className="about-doodle w-20 h-20 md:w-64 md:h-64 absolute bottom-4 left-4 md:bottom-10 md:left-10" />
                </div>

                {/* Panel 3: MISSION - Hands on Learning */}
                <div className="w-[100vw] h-full flex flex-col items-center justify-center relative bg-olive overflow-hidden px-4">
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[linear-gradient(#2d2d34_1px,transparent_1px),linear-gradient(90deg,#2d2d34_1px,transparent_1px)]" />

                    <h2 className="relative z-10 text-[clamp(2rem,12vw,9rem)] font-black text-paper mix-blend-normal text-center leading-none">
                        HANDS-ON <br /> <span className="text-flame">CHAOS</span>
                    </h2>
                    <p className="font-mono text-xs sm:text-sm md:text-xl text-paper mt-4 md:mt-8 max-w-2xl text-center z-10 leading-relaxed">
                        Bridging the gap between theory and reality. <br />
                        Our Goal: <strong>Getting Jobs</strong> or <strong>Creating Entrepreneurs</strong>.
                    </p>
                    <Doodle type="scribble" color="#f26430" className="hidden md:block absolute top-1/4 right-1/4 w-96 h-96 opacity-50 rotate-12" />
                </div>

                {/* Panel 4: VALUES - Real Impact */}
                <div className="w-screen h-full flex flex-col justify-center items-center relative bg-zinc-900 border-l-4 border-flame z-10 px-4">

                    <h2 className="text-[clamp(2.5rem,14vw,11rem)] font-black leading-[0.9] uppercase text-paper text-center z-20 relative">
                        REAL <br /> PLATFORMS
                    </h2>
                    <h3 className="text-[clamp(1rem,4vw,3.5rem)] font-bold text-flame uppercase mt-4 z-20 relative text-center">
                        &amp; CLUSTER ENGINE
                    </h3>
                    <Doodle type="bulb" color="#f26430" className="about-doodle w-14 h-14 md:w-40 md:h-40 absolute top-1/3 right-4 md:right-1/4 animate-pulse opacity-50 z-0" />
                    <p className="font-hand text-lg sm:text-2xl md:text-4xl text-neon-green absolute bottom-[10%] md:bottom-[15%] rotate-[-6deg] z-20 drop-shadow-md text-center max-w-[90%]">
                        Cross-Department. Introvert Friendly.
                    </p>
                </div>

                {/* Panel 5: CTA */}
                <div className="w-screen h-full flex flex-col justify-center items-center relative bg-flame text-paper px-4">
                    <h2 className="text-[clamp(2.5rem,12vw,9rem)] font-black leading-none uppercase mb-6 md:mb-10 text-center">
                        JOIN THE <br /> MOVEMENT
                    </h2>
                    <Doodle type="arrow" color="#1a1a1a" className="w-16 h-16 md:w-32 md:h-32 rotate-90" />
                </div>

            </div>

            {/* Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat z-50 mix-blend-overlay" />
        </section>
    );
}
