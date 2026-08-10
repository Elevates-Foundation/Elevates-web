"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import useIsomorphicLayoutEffect from "@/hooks/use-isomorphic-layout-effect";
import Doodle from "@/components/doodle";

export default function Loader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const counterRef = useRef<HTMLSpanElement>(null);
    const [complete, setComplete] = useState(false);

    useIsomorphicLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => setComplete(true),
            });

            // 1. Initial State: Chaos
            gsap.set(".loader-doodle", { scale: 0, opacity: 0 });
            gsap.set(".loader-sticker", { y: 100, opacity: 0, rotate: "random(-20, 20)" });
            gsap.set(".loader-word", { opacity: 0, scale: 0.5, y: 20 }); // Setup for new words

            // 2. Counter Animation (Chaotic Numbers 0 -> 100)
            const counterObj = { val: 0 };
            tl.addLabel("start"); // Sync point

            tl.to(counterObj, {
                val: 100,
                duration: 2.5,
                ease: "power2.inOut",
                onUpdate: () => {
                    if (counterRef.current) {
                        counterRef.current.innerText = Math.floor(counterObj.val).toString();
                    }
                }
            }, "start");

            // 3. Words: LEARN -> BUILD -> GROW (Sequenced flashes during count)
            tl.to(".loader-word-1", { // LEARN
                opacity: 1, scale: 1.2, y: 0, duration: 0.1, ease: "rough({ strength: 2, points: 5, template: none, randomize: true, clamp: false })"
            }, "start+=0.3");

            tl.to(".loader-word-2", { // BUILD
                opacity: 1, scale: 1.2, y: 0, duration: 0.1, ease: "rough({ strength: 2, points: 5, template: none, randomize: true, clamp: false })"
            }, "start+=0.9");

            tl.to(".loader-word-3", { // GROW
                opacity: 1, scale: 1.2, y: 0, duration: 0.1, ease: "rough({ strength: 2, points: 5, template: none, randomize: true, clamp: false })"
            }, "start+=1.5");


            // 4. Elements bursting in during count (Doodles)
            tl.to(".loader-doodle", {
                scale: 1,
                opacity: 1,
                duration: 0.5,
                stagger: {
                    amount: 1.5,
                    from: "random"
                },
                ease: "elastic.out(1, 0.5)"
            }, "start+=0.2");

            // 5. Stickers slapping on screen
            tl.to(".loader-sticker", {
                y: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.3,
                ease: "back.out(1.7)"
            }, "start+=1.0");

            // 6. Progress Bar Scribble (Sync with counter)
            tl.fromTo(".progress-scribble",
                { scaleX: 0 },
                { scaleX: 1, duration: 2.5, ease: "power2.inOut" },
                "start");

            // 7. Glitch Exit
            tl.to(".loader-content", {
                skewX: 20,
                scale: 1.1,
                opacity: 0,
                duration: 0.3,
                ease: "power2.in"
            });

            tl.to(containerRef.current, {
                yPercent: -100,
                duration: 0.6,
                ease: "power4.inOut",
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    if (complete) return null;

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-paper text-graphite overflow-hidden select-none"
        >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

            {/* Random Doodles Background */}
            <Doodle type="scribble" color="#f26430" className="loader-doodle absolute top-[15%] left-[20%] w-32 h-32 rotate-12 opacity-80" />
            <Doodle type="star" color="#758173" className="loader-doodle absolute bottom-[20%] right-[15%] w-24 h-24 -rotate-6 opacity-60" />
            <Doodle type="arrow" color="#2d2d34" className="loader-doodle absolute top-[30%] right-[25%] w-16 h-16 rotate-[135deg]" />
            <Doodle type="underline" color="#f26430" className="loader-doodle absolute bottom-[30%] left-[10%] w-40 h-8 -rotate-3" />

            {/* Main Content */}
            <div className="loader-content relative z-10 flex flex-col items-center gap-6">

                {/* LEARN. BUILD. GROW. Text Block */}
                <div className="flex gap-4 md:gap-8 items-end mb-4 h-16 md:h-24">
                    <span className="loader-word loader-word-1 font-black text-3xl md:text-5xl uppercase text-graphite -rotate-3">
                        Learn.
                    </span>
                    <span className="loader-word loader-word-2 font-black text-3xl md:text-5xl uppercase text-olive rotate-2">
                        Build.
                    </span>
                    <span className="loader-word loader-word-3 font-black text-3xl md:text-5xl uppercase text-flame -rotate-1">
                        Grow.
                    </span>
                </div>

                {/* Pixel Counter */}
                <div className="relative">
                    <h1 className="text-[100px] md:text-[150px] font-[family-name:var(--font-pixel)] leading-none text-graphite">
                        <span ref={counterRef}>0</span>%
                    </h1>
                    {/* Overlay Tape */}
                    <div className="loader-sticker absolute -top-4 -right-8 bg-flame/90 px-4 py-1 rotate-12 shadow-sm">
                        <span className="font-mono text-paper text-xs uppercase tracking-widest font-bold">Initializing</span>
                    </div>
                </div>

                {/* Loading Bar Container (Rough Border) */}
                <div className="w-64 md:w-80 h-4 border-2 border-graphite p-1 relative rounded-sm transform -rotate-1">
                    {/* Scribble Fill */}
                    <div className="progress-scribble w-full h-full bg-olive origin-left"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
                    />
                </div>

                <div className="loader-sticker bg-paper border border-graphite px-6 py-2 shadow-md rotate-2">
                    <p className="font-hand text-graphite text-lg md:text-xl">
                        Adding Chaos...
                    </p>
                </div>

            </div>
        </div>
    );
}
