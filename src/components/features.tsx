"use client";

import Doodle from "@/components/doodle";

// Keywords for the marquee
const KEYWORDS = [
    "COMMUNITY",
    "OPEN SOURCE",
    "SPEED",
    "CREATIVE",
    "MENTORSHIP",
    "EVENTS",
    "CHAOS",
];

// Double for seamless loop
const MARQUEE_ITEMS = [...KEYWORDS, ...KEYWORDS];

export default function Features() {
    return (
        <section className="py-16 bg-graphite overflow-hidden relative">

            {/* Handdrawn Top Border */}
            <Doodle type="underline" color="#f8fff4" className="w-full h-3 opacity-30" />

            {/* Marquee Container - Matches Site Aesthetic */}
            <div className="w-full relative py-8 -rotate-1">

                {/* The Marquee Track */}
                <div className="animate-marquee-scroll flex whitespace-nowrap items-center">
                    {MARQUEE_ITEMS.map((text, i) => (
                        <div key={i} className="flex items-center gap-6 px-6 shrink-0 group">
                            {/* Text - Paper on Graphite, matching Footer flow */}
                            <span className="text-6xl md:text-8xl font-black uppercase text-paper tracking-tighter leading-none opacity-90 group-hover:text-flame transition-colors duration-300">
                                {text}
                            </span>

                            {/* Separator - Flame Star Doodle */}
                            <Doodle
                                type="star"
                                color="#f26430"
                                className="w-10 h-10 md:w-14 md:h-14 opacity-70"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Handdrawn Bottom Border */}
            <Doodle type="underline" color="#f8fff4" className="w-full h-3 opacity-30 -scale-y-100" />
        </section>
    );
}

