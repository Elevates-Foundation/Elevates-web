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

            // Horizontal Scroll Animation
            const totalWidth = slider.scrollWidth - window.innerWidth;

            gsap.to(slider, {
                x: -totalWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: () => `+=${totalWidth}`,
                    pin: true,
                    scrub: 1,
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
        <section ref={containerRef} className="relative h-screen overflow-hidden bg-graphite text-paper">
            <div ref={sliderRef} className="flex h-full items-center w-[500vw] relative">

                {/* Panel 1: WHO - Elevates */}
                <div className="w-screen h-full flex flex-col justify-center items-center relative border-r-2 border-paper/10 px-4">
                    <h2 className="text-[20vw] md:text-[15vw] font-black leading-none uppercase mix-blend-difference">
                        ELEVATES
                    </h2>
                    <Doodle type="crown" color="#f26430" className="about-doodle w-24 h-24 md:w-48 md:h-48 absolute top-10 right-4 md:top-20 md:right-20 opacity-80" />
                    <p className="absolute bottom-10 left-4 md:bottom-20 md:left-20 font-mono text-sm md:text-xl max-w-[90%] md:max-w-md">
                        // SKILLED BUT SHY. <br />
                        // UPSKILLED & SUPPORTED. <br />
                        // UNSEEN NO MORE.
                    </p>
                </div>

                {/* Panel 2: VISION - Explore/Experiment */}
                <div className="w-screen h-full flex justify-center items-center relative bg-paper text-graphite skew-x-[-5deg] px-4">
                    <div className="flex flex-col items-center">
                        <h2 className="text-[12vw] md:text-[8vw] font-black leading-none uppercase tracking-tighter transform rotate-2 text-olive">
                            UPSKILL.
                        </h2>
                        <h2 className="text-[12vw] md:text-[8vw] font-black leading-none uppercase tracking-tighter transform -rotate-2 text-flame">
                            SUPPORT.
                        </h2>
                        <h2 className="text-[12vw] md:text-[8vw] font-black leading-none uppercase tracking-tighter transform rotate-2 text-graphite">
                            SHOWCASE.
                        </h2>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[120%] border-4 border-flame opacity-20 rotate-[-2deg]" />
                    <Doodle type="rocket" color="#414066" className="about-doodle w-32 h-32 md:w-64 md:h-64 absolute bottom-4 left-4 md:bottom-10 md:left-10" />
                </div>

                {/* Panel 3: MISSION - Hands on Learning */}
                <div className="w-[100vw] h-full flex flex-col items-center justify-center relative bg-olive overflow-hidden px-4">
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] bg-[linear-gradient(#2d2d34_1px,transparent_1px),linear-gradient(90deg,#2d2d34_1px,transparent_1px)]" />

                    <h2 className="relative z-10 text-[14vw] md:text-[10vw] font-black text-paper mix-blend-normal text-center leading-none">
                        GET <br /> <span className="text-flame">SEEN</span>
                    </h2>
                    <p className="font-mono text-sm md:text-xl text-paper mt-4 md:mt-8 max-w-2xl text-center z-10">
                        Finding skilled but introverted students, upskilling them with real projects, <br />
                        and putting their work in front of the world so quiet talent gets the visibility it deserves.
                    </p>
                    <Doodle type="scribble" color="#f26430" className="hidden md:block absolute top-1/4 right-1/4 w-96 h-96 opacity-50 rotate-12" />
                </div>

                {/* Panel 4: VALUES - Collaboration */}
                <div className="w-screen h-full flex flex-col justify-center items-center relative bg-zinc-900 border-l-4 border-flame z-10 px-4">
                    <h2 className="text-[16vw] md:text-[12vw] font-black leading-[0.9] uppercase text-paper text-center z-20 relative">
                        REAL <br /> IMPACT
                    </h2>
                    <h3 className="text-[5vw] md:text-[4vw] font-bold text-flame uppercase mt-4 z-20 relative">
                        & COLLABORATION
                    </h3>
                    <Doodle type="bulb" color="#f26430" className="about-doodle w-20 h-20 md:w-40 md:h-40 absolute top-1/3 right-4 md:right-1/4 animate-pulse opacity-50 z-0" />
                    <p className="font-hand text-xl md:text-4xl text-flame absolute bottom-[10%] md:bottom-[15%] rotate-[-6deg] z-20 drop-shadow-md text-center max-w-[90%]">
                        Built for Introverted Talent. Zero Gatekeeping.
                    </p>
                </div>

                {/* Panel 5: CTA */}
                <div className="w-screen h-full flex flex-col justify-center items-center relative bg-flame text-paper px-4">
                    <h2 className="text-[14vw] md:text-[10vw] font-black leading-none uppercase mb-6 md:mb-10 text-center">
                        JOIN THE <br /> MOVEMENT
                    </h2>
                    <Doodle type="arrow" color="#1a1a1a" className="w-20 h-20 md:w-32 md:h-32 rotate-90" />
                </div>

            </div>

            {/* Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat z-50 mix-blend-overlay" />
        </section>
    );
}
