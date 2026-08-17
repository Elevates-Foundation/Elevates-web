"use client";

import { useState } from "react";
import Link from "next/link";
import Doodle from "@/components/doodle";

const SOCIAL_LINKS = [
    { name: "Instagram", href: "https://www.instagram.com/elevates.club/", isExternal: true },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/elevates-in", isExternal: true },
    { name: "GitHub", href: "https://github.com/Elevates-Foundation", isExternal: true },
    { name: "Chapters", href: "/chapters", isExternal: false },
    { name: "Clusters", href: "/clusters", isExternal: false },
];

export default function Footer() {
    const [email, setEmail] = useState("");

    return (
        <footer
            className="relative min-h-screen md:h-screen overflow-hidden bg-graphite flex items-center justify-center text-paper py-20 md:py-0"
            style={{ clipPath: "polygon(0% 0, 100% 5%, 100% 100%, 0 100%)" }}
        >
            {/* Messy paper background texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="relative z-10 w-full max-w-4xl px-6 md:p-10 flex flex-col items-center text-center">

                <h2 className="text-[18vw] md:text-[12vw] leading-[0.8] font-black uppercase text-paper mb-12 md:mb-16 mix-blend-difference">
                    KEEP <br />
                    <span className="text-flame">IN TOUCH</span>
                </h2>

                <div className="w-full max-w-lg relative mb-12 md:mb-16 group">
                    <p className="font-hand text-lg md:text-2xl text-olive absolute -top-7 md:-top-8 left-0 -rotate-2">
                        Get the alpha:
                        <Doodle type="arrow" color="#758173" className="w-6 h-6 md:w-8 md:h-8 inline-block ml-2 rotate-90" />
                    </p>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full bg-transparent border-b-4 border-paper/20 text-2xl md:text-4xl py-3 md:py-4 font-mono text-paper placeholder:text-paper/20 focus:outline-none focus:border-flame transition-colors text-center"
                    />
                    <button className="mt-4 md:mt-0 md:absolute md:right-0 md:bottom-4 text-flame font-bold text-lg md:text-xl uppercase tracking-widest hover:scale-110 transition-transform">
                        Send It
                    </button>
                    <Doodle type="underline" color="#f26430" className="absolute -bottom-4 left-0 w-full h-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm md:text-base font-mono tracking-widest text-olive uppercase w-full">
                    {SOCIAL_LINKS.map((link, i) => (
                        link.isExternal ? (
                            <a
                                key={i}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative group hover:text-white transition-colors flex items-center justify-center py-2"
                            >
                                {link.name} ↗
                                <Doodle type="scribble" color="#414066" className="absolute w-[120%] h-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                            </a>
                        ) : (
                            <Link
                                key={i}
                                href={link.href}
                                className="relative group hover:text-white transition-colors flex items-center justify-center py-2"
                            >
                                {link.name}
                                <Doodle type="scribble" color="#414066" className="absolute w-[120%] h-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                            </Link>
                        )
                    ))}
                </div>

                <div className="mt-12 md:mt-16 relative">
                    <p className="font-hand text-xs md:text-sm text-paper/50">
                        &copy; {new Date().getFullYear()} ELEVATES Foundation // Kerala, India.
                    </p>
                    <Doodle type="brain" color="#f26430" className="hidden md:block w-20 h-20 absolute -right-28 -top-8 rotate-12 opacity-80" />
                </div>
            </div>
        </footer>
    );
}
