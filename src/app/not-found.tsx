"use client";

import Link from "next/link";
import Doodle from "@/components/doodle";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-paper flex flex-col items-center justify-center relative overflow-hidden text-center p-6">
            {/* Background Texture */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Floating Doodles */}
            <div className="absolute top-20 left-10 md:left-40 animate-bounce delay-700">
                <Doodle type="star" color="#f26430" className="w-12 h-12 md:w-16 md:h-16 rotate-12" />
            </div>
            <div className="absolute bottom-20 right-10 md:right-40 animate-pulse">
                <Doodle type="scribble" color="#2d2d34" className="w-16 h-16 md:w-24 md:h-24 -rotate-12 opacity-50" />
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center gap-6">

                {/* 404 Graphic */}
                <div className="relative">
                    <h1 className="text-[120px] md:text-[200px] font-black text-flame leading-none font-[family-name:var(--font-pixel)] select-none">
                        404
                    </h1>
                    {/* Tape Overlays */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-4 bg-graphite rotate-[-15deg] opacity-80" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-4 bg-graphite rotate-[15deg] opacity-80" />
                </div>

                {/* Text */}
                <h2 className="text-2xl md:text-4xl font-bold uppercase text-graphite font-mono tracking-widest">
                    Lost in the Chaos?
                </h2>
                <p className="max-w-md text-olive font-hand text-lg md:text-xl transform -rotate-1">
                    Looks like this page got scraped. <br />
                    Let's get you back to the build.
                </p>

                {/* Back Home Button (Sticker Style) */}
                <Link href="/" className="mt-8 group relative inline-block">
                    <div className="absolute inset-0 bg-graphite translate-y-2 translate-x-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3 rounded-sm" />
                    <div className="relative bg-flame text-paper px-8 py-3 md:px-10 md:py-4 font-mono text-lg md:text-xl font-bold uppercase border-2 border-graphite rounded-sm flex items-center gap-3">
                        <Doodle type="arrow" color="#fff" className="w-4 h-4 md:w-5 md:h-5 rotate-[135deg]" />
                        <span>Return Home</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
