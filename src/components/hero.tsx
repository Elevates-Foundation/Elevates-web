"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import useIsomorphicLayoutEffect from "@/hooks/use-isomorphic-layout-effect";
import Doodle from "@/components/doodle";

gsap.registerPlugin(ScrollTrigger, Draggable);

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Tape Stack Parallax (Subtle Mouse Follow)
            containerRef.current?.addEventListener("mousemove", (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 20;

                gsap.to(badgeRef.current, {
                    x: x,
                    y: y,
                    duration: 1,
                    ease: "power2.out"
                });
            });

            // Marquee Scroll
            const marquee = marqueeRef.current;
            if (marquee) {
                gsap.to(marquee, {
                    xPercent: -50,
                    ease: "none",
                    duration: 20,
                    repeat: -1
                });
            }

            // Draggable Stickers
            const stickers = gsap.utils.toArray(".sticker");
            stickers.forEach((sticker: any) => {
                Draggable.create(sticker, {
                    type: "x,y",
                    inertia: true,
                    bounds: containerRef.current,
                    edgeResistance: 0.65,
                });

                // Float animation
                gsap.to(sticker, {
                    y: "random(-15, 15)",
                    rotate: "random(-5, 5)",
                    duration: "random(2, 4)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });

            // Floating Background Paper
            const blobs = gsap.utils.toArray(".paper-blob");
            blobs.forEach((blob: any) => {
                gsap.to(blob, {
                    y: "random(-30, 30)",
                    x: "random(-20, 20)",
                    rotate: "random(-5, 5)",
                    duration: "random(4, 7)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-paper flex flex-col items-center justify-center select-none">
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none z-0 bg-[linear-gradient(#2d2d34_1px,transparent_1px),linear-gradient(90deg,#2d2d34_1px,transparent_1px)] bg-[size:4rem_4rem]" />

            {/* Layered Paper Collage Background */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Torn Paper 1 (Top Right) */}
                <div className="paper-blob absolute -top-[10%] -right-[10%] w-[50vw] h-[50vw] bg-olive/20 rotate-12 backdrop-blur-sm mix-blend-multiply" style={{ clipPath: "polygon(10% 0, 100% 0, 100% 80%, 80% 100%, 0 80%, 0 20%)" }} />
                <div className="paper-blob absolute top-[5%] right-[5%] w-[40vw] h-[40vw] bg-graphite/5 rotate-[15deg] mix-blend-multiply" style={{ clipPath: "polygon(0 0, 100% 10%, 90% 100%, 10% 90%)" }} />

                {/* Torn Paper 2 (Bottom Left) */}
                <div className="paper-blob absolute -bottom-[10%] -left-[5%] w-[45vw] h-[45vw] bg-flame/10 -rotate-6 mix-blend-multiply" style={{ clipPath: "polygon(20% 0, 80% 0, 100% 60%, 70% 100%, 0 100%, 0 20%)" }} />
            </div>

            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-30 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />

            {/* Marquee Background */}
            <div className="absolute top-1/2 left-0 w-[200vw] -translate-y-1/2 opacity-5 pointer-events-none z-0">
                <div ref={marqueeRef} className="flex whitespace-nowrap text-[20vw] font-black uppercase leading-none text-graphite">
                    ELEVATES . BUILD . GROW . SHIP . REPEAT . ELEVATES . BUILD . GROW . SHIP . REPEAT .
                </div>
            </div>

            {/* Accessible SEO H1 */}
            <h1 className="sr-only">
                ELEVATES – Upskilling & Showcasing Skilled but Shy Students
            </h1>

            {/* Central Kinetic Tape Stack (3 Strips: LEARN. BUILD. SHIP.) */}
            <div ref={badgeRef} className="relative z-10 flex flex-col items-center justify-center -space-y-4 md:-space-y-8 mix-blend-hard-light hover:mix-blend-normal active:mix-blend-normal transition-all duration-300">
                {/* Strip 1: LEARN (Foundation) */}
                <div className="tape-strip bg-graphite text-paper px-6 py-2 md:px-12 md:py-3 rotate-[-3deg] shadow-lg transform hover:scale-105 active:scale-105 transition-transform duration-300 origin-bottom-left cursor-default z-30">
                    <span className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none block">
                        LEARN
                    </span>
                </div>

                {/* Strip 2: BUILD (Action) */}
                <div className="tape-strip bg-paper text-graphite px-6 py-2 md:px-12 md:py-3 rotate-[2deg] shadow-xl z-20 transform hover:scale-105 active:scale-105 transition-transform duration-300 cursor-default border-4 border-graphite">
                    <span className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none block">
                        BUILD
                    </span>
                </div>

                {/* Strip 3: GROW (Goal) */}
                <div className="tape-strip bg-flame text-paper px-6 py-2 md:px-12 md:py-3 rotate-[-2deg] shadow-lg transform hover:scale-105 active:scale-105 transition-transform duration-300 origin-top-right cursor-default z-10">
                    <span className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none font-[family-name:var(--font-pixel)] block">
                        GROW
                    </span>
                </div>
            </div>

            {/* Draggable Stickers / Keywords - Hidden on small screens */}
            <div className="hidden md:block absolute top-[15%] left-[10%] sticker cursor-grab active:cursor-grabbing z-30">
                <div className="bg-olive text-paper font-mono text-sm md:text-xl px-4 py-2 rotate-[-5deg] shadow-lg border border-graphite hover:scale-110 transition-transform">
                    {'{ CODE }'}
                </div>
            </div>

            <div className="hidden md:block absolute bottom-[20%] right-[10%] sticker cursor-grab active:cursor-grabbing z-30">
                <div className="bg-flame text-paper font-mono text-sm md:text-xl px-6 py-3 rotate-[10deg] shadow-lg border border-graphite hover:scale-110 transition-transform skew-x-[-10deg]">
                    GET SEEN!
                </div>
            </div>

            <div className="hidden md:block absolute top-[25%] right-[20%] sticker cursor-grab active:cursor-grabbing z-30">
                <Doodle type="star" color="#2d2d34" className="w-16 h-16 md:w-24 md:h-24 drop-shadow-md" />
            </div>

            <div className="hidden md:block absolute bottom-[15%] left-[20%] sticker cursor-grab active:cursor-grabbing z-30">
                <div className="font-[family-name:var(--font-pixel)] text-6xl md:text-8xl text-graphite opacity-80 rotate-[-15deg] hover:text-flame transition-colors">
                    UNSEEN NO MORE
                </div>
            </div>

            {/* Bottom Manifesto (Pinned Note) */}
            <div className="absolute bottom-10 left-10 z-20 hidden md:block max-w-sm sticker cursor-grab active:cursor-grabbing">
                <div className="bg-paper p-6 shadow-xl border border-graphite/10 rotate-1 hover:rotate-0 transition-transform duration-300 relative group">
                    {/* Pin/Tape Graphic */}
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-flame/80 rounded-full opacity-80 backdrop-blur-sm shadow-sm" />

                    <p className="font-mono text-xs uppercase tracking-widest text-olive mb-3 border-b border-olive/20 pb-1">Manifesto 001</p>
                    <p className="font-medium text-graphite text-sm leading-relaxed font-hand">
                        ELEVATES is a student-driven community built for skilled but shy or introverted students. We upskill them, give them real projects and support, and showcase their work so quiet talent no longer stays invisible.
                    </p>

                    {/* Decorative Doodle */}
                    <Doodle type="scribble" color="#f26430" className="absolute -bottom-4 -right-4 w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </div>

            {/* Scroll Indication */}
            <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-10 z-20 flex flex-col items-center animate-bounce">
                <span className="font-mono text-[10px] md:text-xs text-olive uppercase tracking-widest mb-2">Scroll</span>
                <Doodle type="arrow" color="#f26430" className="w-5 h-5 md:w-6 md:h-6 rotate-90" />
            </div>

        </section>
    );
}
