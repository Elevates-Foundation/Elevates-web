"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Doodle from "@/components/doodle";

gsap.registerPlugin(ScrollToPlugin);

const NAV_LINKS = [
    { name: "About", target: "#about" },
    { name: "Programs", target: "#programs" },
    { name: "Membership", target: "#membership" },
    { name: "Steps", target: "#workflow" },
    { name: "Fields", target: "#domains" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);

        // Parallax Effect for Explore Button
        const ctx = gsap.context(() => {
            gsap.to(".explore-trigger", {
                y: 50, // Move down slightly on scroll
                rotate: 5, // Rotate slightly
                opacity: 0, // Fade out eventually (handled by class, but this adds smoothness)
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "100px top",
                    scrub: 1
                }
            });
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            ctx.revert();
        };
    }, []);

    const handleScrollTo = (target: string) => {
        setMobileMenuOpen(false);
        gsap.to(window, { duration: 1.5, scrollTo: { y: target, autoKill: false }, ease: "power4.inOut" });
    };

    return (
        <>
            {/* Hero State -> Scrolled State: Persistent Tag Transition */}
            <div
                className={`fixed z-50 transition-all duration-500 cubic-bezier(0.76, 0, 0.24, 1) ${scrolled
                    ? "top-4 right-4 scale-90 md:top-6 md:right-6" // Scrolled: Tucked in tight
                    : "top-5 right-5 scale-100 md:top-8 md:right-8" // Hero: Less intrusive on mobile
                    }`}
            >
                <button
                    onClick={() => setMobileMenuOpen(true)}
                    className={`group relative transition-all duration-300 ${scrolled ? "hover:rotate-6 opacity-80 hover:opacity-100" : "hover:scale-105"
                        }`}
                >
                    {/* Shadow Layer (Subtler) */}
                    <div className={`absolute inset-0 bg-graphite rounded-sm transition-all duration-500 ${scrolled ? "translate-y-0.5 translate-x-0.5 opacity-20" : "translate-y-1 translate-x-1 rotate-2 opacity-100"
                        }`} />

                    {/* Main Button Layer */}
                    <div
                        className={`relative font-mono font-bold tracking-widest border rounded-sm overflow-hidden flex items-center justify-center gap-2 transition-all duration-500 ${scrolled
                            ? "bg-paper/80 backdrop-blur-md text-graphite px-2 py-1.5 md:px-3 md:py-2 text-[12px] md:text-base border-graphite/20 rotate-0 shadow-sm" // Scrolled: Slightly larger
                            : "bg-flame text-paper px-3 py-1 md:px-4 md:py-1.5 text-[12px] md:text-base rotate-[-2deg] border-graphite" // Hero: Slightly larger
                            }`}
                        style={{
                            backgroundImage: scrolled ? "none" : "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)"
                        }}
                    >
                        <span className="relative z-10 transition-all duration-300">
                            {scrolled ? "INDEX" : "EXPLORE"}
                        </span>
                        <Doodle
                            type={scrolled ? "scribble" : "arrow"}
                            color={scrolled ? "#2d2d34" : "#fff"}
                            className={`w-2.5 h-2.5 md:w-3 md:h-3 transition-colors duration-300 ${scrolled ? "rotate-0 opacity-50" : "rotate-[-45deg]"}`}
                        />
                    </div>
                </button>
            </div>
            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-paper transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                {/* Close Button (Top Right) - Replaces the Tag position visually */}
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-6 right-6 md:top-8 md:right-8 z-[70] group flex items-center gap-2 hover:scale-110 transition-transform"
                >
                    <span className="font-mono font-bold text-graphite text-xs tracking-widest opacity-50 group-hover:opacity-100">CLOSE</span>
                    <div className="relative w-8 h-8 flex items-center justify-center bg-flame text-paper rounded-full border border-graphite shadow-sm">
                        <Doodle type="cross" color="#fff" className="w-4 h-4" />
                    </div>
                </button>

                {/* Texture */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                {/* Bottom Border (Clean, no tear) */}
                <div className="absolute bottom-0 left-0 w-full h-2 bg-flame" />

                <div className="h-full flex flex-col items-center justify-center gap-8 relative z-50">
                    {/* Menu Title */}
                    <span className="font-mono text-olive/50 uppercase tracking-widest text-sm mb-4 border-b border-olive/20 pb-2">Directory</span>

                    {NAV_LINKS.map((link, i) => (
                        <button
                            key={link.name}
                            onClick={() => handleScrollTo(link.target)}
                            className="text-5xl md:text-7xl font-black uppercase text-graphite hover:text-flame transition-colors relative group"
                        >
                            <span className="relative z-10">{link.name}</span>
                            {/* Hover Strike-through */}
                            <span className="absolute left-0 top-1/2 w-0 h-4 bg-flame/50 -translate-y-1/2 group-hover:w-[110%] transition-all duration-300 -rotate-2 z-0" />
                        </button>
                    ))}

                    <button onClick={() => handleScrollTo("#footer")} className="mt-8 relative group">
                        <div className="absolute inset-0 bg-graphite translate-y-2 translate-x-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                        <div className="relative bg-flame text-paper px-10 py-4 font-mono text-xl font-bold uppercase border-2 border-graphite">
                            JOIN NOW
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
}
