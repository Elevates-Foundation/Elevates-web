"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Doodle from "@/components/doodle";
import SpotlightSearch from "@/components/spotlight-search";

gsap.registerPlugin(ScrollToPlugin);

const NAV_ITEMS = [
    {
        num: "01",
        name: "About",
        target: "/about",
        isExternal: true,
        desc: "The ELEVATES Story — born at EKC, built for quiet & introverted talent in Kerala.",
        badge: "MANIFESTO",
        tag: "Our Story",
        doodle: "crown"
    },
    {
        num: "02",
        name: "Peer Labs",
        target: "/peer-labs",
        isExternal: true,
        desc: "Multi-week hands-on learning series: Operation Java, Cybersec Defense, Spark Electronics.",
        badge: "3 ACTIVE LABS",
        tag: "62+ Enrolled",
        doodle: "star"
    },
    {
        num: "03",
        name: "Events",
        target: "/events",
        isExternal: true,
        desc: "Single & multi-day workshops, CTF escape rooms, and campus hackathons across Kerala.",
        badge: "WORKSHOPS & MEETUPS",
        tag: "8+ Events",
        doodle: "scribble"
    },
    {
        num: "04",
        name: "Clusters",
        target: "/clusters",
        isExternal: true,
        desc: "The Cluster Engine — turning open workshops into committed builders & real platforms.",
        badge: "CLUSTER ENGINE",
        tag: "Why Clusters Matter",
        doodle: "crown"
    },
    {
        num: "05",
        name: "Chapters",
        target: "/chapters",
        isExternal: true,
        desc: "Expand ELEVATES to your college — building Kerala's largest student innovation network.",
        badge: "EXPANSION",
        tag: "Campus Chapters",
        doodle: "arrow"
    },
];

export default function Navbar() {
    const pathname = usePathname();
    const isHomePage = pathname === "/";

    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [activeHoverIndex, setActiveHoverIndex] = useState(0);

    // Keyboard shortcut (Cmd+K or Ctrl+K)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setSearchOpen((prev) => !prev);
            }
        };

        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScrollTo = (target: string) => {
        setMobileMenuOpen(false);
        if (target.startsWith("#")) {
            gsap.to(window, { duration: 1.5, scrollTo: { y: target, autoKill: false }, ease: "power4.inOut" });
        }
    };

    const activeItem = NAV_ITEMS[activeHoverIndex] || NAV_ITEMS[0];

    return (
        <>
            {/* Spotlight Command Palette Modal */}
            <SpotlightSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

            {isHomePage ? (
                /* Landing Page: Original Corner Tag Sticker Button */
                <div
                    className={`fixed z-50 flex items-center gap-3 transition-all duration-500 cubic-bezier(0.76, 0, 0.24, 1) ${
                        scrolled
                            ? "top-4 right-4 scale-90 md:top-6 md:right-6"
                            : "top-5 right-5 scale-100 md:top-8 md:right-8"
                    }`}
                >
                    {/* Explore / Index Button */}
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className={`group relative cursor-pointer transition-all duration-300 ${
                            scrolled ? "hover:rotate-6 opacity-80 hover:opacity-100" : "hover:scale-105"
                        }`}
                    >
                        <div
                            className={`absolute inset-0 bg-graphite rounded-sm transition-all duration-500 ${
                                scrolled ? "translate-y-0.5 translate-x-0.5 opacity-20" : "translate-y-1 translate-x-1 rotate-2 opacity-100"
                            }`}
                        />

                        <div
                            className={`relative font-mono font-bold tracking-widest border rounded-sm overflow-hidden flex items-center justify-center gap-2 transition-all duration-500 ${
                                scrolled
                                    ? "bg-paper/80 backdrop-blur-md text-graphite px-2.5 py-1.5 md:px-3.5 md:py-2 text-[12px] md:text-sm border-graphite/20 rotate-0 shadow-sm"
                                    : "bg-flame text-paper px-3 py-1.5 md:px-4 md:py-2 text-[12px] md:text-sm rotate-[-2deg] border-graphite"
                            }`}
                            style={{
                                backgroundImage: scrolled
                                    ? "none"
                                    : "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)"
                            }}
                        >
                            <span className="relative z-10 transition-all duration-300">
                                {scrolled ? "INDEX" : "EXPLORE"}
                            </span>
                            <Doodle
                                type={scrolled ? "scribble" : "arrow"}
                                color={scrolled ? "#2d2d34" : "#fff"}
                                className={`w-3 h-3 transition-colors duration-300 ${
                                    scrolled ? "rotate-0 opacity-50" : "rotate-[-45deg]"
                                }`}
                            />
                        </div>
                    </button>
                </div>
            ) : (
                /* Inner Pages: 3D Neo-brutalist Floating Header Bar */
                <>
                    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl hidden md:flex items-center justify-between bg-paper/95 backdrop-blur-md px-6 py-2.5 border-4 border-graphite shadow-[8px_8px_0px_0px_rgba(45,45,52,1)] rounded-full transition-all">
                        <Link href="/" className="font-black text-xl uppercase tracking-tighter text-graphite hover:text-flame transition-colors flex items-center gap-2 cursor-pointer">
                            <span className="bg-flame text-paper px-3 py-1 rounded-sm font-mono text-xs rotate-[-2deg] border border-graphite shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                ELEVATES
                            </span>
                            <span className="font-hand text-base text-olive">for quiet talent</span>
                        </Link>

                        <nav className="flex items-center gap-5 font-mono text-xs uppercase font-bold text-graphite">
                            <Link href="/peer-labs" className={`hover:text-flame transition-colors cursor-pointer ${pathname.startsWith('/peer-labs') ? 'text-flame underline font-extrabold' : ''}`}>
                                Peer Labs
                            </Link>
                            <Link href="/events" className={`hover:text-flame transition-colors cursor-pointer ${pathname.startsWith('/events') ? 'text-flame underline font-extrabold' : ''}`}>
                                Events
                            </Link>
                            <Link href="/clusters" className={`hover:text-flame transition-colors cursor-pointer ${pathname.startsWith('/clusters') ? 'text-flame underline font-extrabold' : ''}`}>
                                Clusters
                            </Link>
                            <Link href="/chapters" className={`hover:text-flame transition-colors cursor-pointer ${pathname.startsWith('/chapters') ? 'text-flame underline font-extrabold' : ''}`}>
                                Chapters
                            </Link>
                            <Link href="/about" className={`hover:text-flame transition-colors cursor-pointer ${pathname.startsWith('/about') ? 'text-flame underline font-extrabold' : ''}`}>
                                About
                            </Link>
                        </nav>

                        {/* Search & Index Trigger Buttons */}
                        <div className="flex items-center gap-2.5">
                            <button
                                onClick={() => setSearchOpen(true)}
                                className="bg-paper text-graphite font-mono text-xs font-bold px-3 py-1 rounded-full border-2 border-graphite shadow-[2px_2px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-1.5 cursor-pointer"
                            >
                                <span>🔍</span>
                                <span className="hidden lg:inline">SEARCH</span>
                                <span className="bg-graphite/10 text-olive px-1.5 py-0.5 rounded text-[10px]">⌘K</span>
                            </button>

                            <button
                                onClick={() => setMobileMenuOpen(true)}
                                className="bg-flame text-paper font-mono text-xs font-bold px-3.5 py-1 rounded-full border-2 border-graphite shadow-[2px_2px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all flex items-center gap-1.5 uppercase cursor-pointer"
                            >
                                <span>INDEX</span>
                                <Doodle type="scribble" color="#fff" className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </header>

                    {/* Mobile Floating Buttons */}
                    <div className="fixed top-4 right-5 z-50 md:hidden flex items-center gap-2">
                        <button
                            onClick={() => setSearchOpen(true)}
                            className="bg-paper text-graphite font-mono font-bold text-xs p-2 rounded-full border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] cursor-pointer"
                        >
                            🔍
                        </button>

                        <button
                            onClick={() => setMobileMenuOpen(true)}
                            className="bg-flame text-paper font-mono font-bold text-xs px-4 py-2 rounded-full border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] flex items-center gap-2 cursor-pointer"
                        >
                            <span>MENU</span>
                            <Doodle type="arrow" color="#fff" className="w-3 h-3 rotate-[-45deg]" />
                        </button>
                    </div>
                </>
            )}

            {/* Mobile / Desktop Clean Full-Screen Overlay Menu */}
            <div
                className={`fixed inset-0 z-[9999] bg-paper transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] overflow-y-auto ${
                    mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="absolute inset-0 opacity-25 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none" />

                {/* Close Button */}
                <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="absolute top-6 right-6 md:top-8 md:right-8 z-[10000] group flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
                >
                    <span className="font-mono font-bold text-graphite text-xs tracking-widest opacity-60 group-hover:opacity-100">CLOSE</span>
                    <div className="relative bg-flame text-paper font-mono font-bold text-xs px-3 py-1 rounded-full border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] flex items-center gap-1.5 cursor-pointer">
                        <span>✕</span>
                    </div>
                </button>

                <div className="min-h-full max-w-6xl mx-auto flex flex-col justify-between py-10 px-6 md:px-12 relative z-50">

                    <div className="flex items-center justify-between border-b-4 border-graphite pb-4 pt-2 mb-6">
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-xs font-bold uppercase tracking-widest bg-flame text-paper px-3 py-1 rounded-sm rotate-[-1deg] border-2 border-graphite shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                ELEVATES KERALA
                            </span>
                            <span className="font-mono text-xs text-olive font-bold hidden sm:inline">
                                // DIRECTORY & NAVIGATION
                            </span>
                        </div>

                        <button
                            onClick={() => {
                                setMobileMenuOpen(false);
                                setSearchOpen(true);
                            }}
                            className="bg-paper text-graphite font-mono font-bold text-xs px-3 py-1 rounded border-2 border-graphite shadow-[2px_2px_0px_0px_rgba(45,45,52,1)] hover:scale-105 transition-transform flex items-center gap-1.5 cursor-pointer"
                        >
                            <span>🔍 SEARCH</span>
                            <span className="bg-graphite/10 text-olive px-1.5 py-0.5 rounded text-[10px]">⌘K</span>
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-2">

                        <div className="lg:col-span-7 space-y-3">
                            {NAV_ITEMS.map((item, idx) => (
                                <Link
                                    key={item.name}
                                    href={item.target}
                                    onClick={() => setMobileMenuOpen(false)}
                                    onMouseEnter={() => setActiveHoverIndex(idx)}
                                    className={`group flex items-center justify-between p-3 md:p-3.5 rounded-sm border-3 border-graphite transition-all duration-300 cursor-pointer ${
                                        activeHoverIndex === idx
                                            ? "bg-flame text-paper shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] -translate-y-1"
                                            : "bg-paper text-graphite hover:border-flame shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]"
                                    }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <span className={`font-mono text-sm font-bold ${
                                            activeHoverIndex === idx ? "text-paper" : "text-flame"
                                        }`}>
                                            [{item.num}]
                                        </span>
                                        <span className="text-2xl sm:text-3xl md:text-4xl font-black italic uppercase tracking-tight">
                                            {item.name}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <span className={`font-mono text-[10px] md:text-xs font-bold uppercase px-2 py-0.5 rounded border hidden sm:inline ${
                                            activeHoverIndex === idx ? "bg-paper text-graphite border-paper" : "bg-olive/10 text-olive border-olive/30"
                                        }`}>
                                            {item.badge}
                                        </span>
                                        <span className="font-mono text-base font-bold">↗</span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="lg:col-span-5 hidden lg:block">
                            <div className="bg-paper border-4 border-graphite rounded-sm p-6 shadow-[10px_10px_0px_0px_rgba(45,45,52,1)] relative transition-all duration-500">
                                <div className="absolute -top-3.5 left-8 w-28 h-6 bg-flame/80 rotate-[-2deg] opacity-90 border border-graphite/30" />

                                <div className="flex justify-between items-center mb-4">
                                    <span className="font-mono text-xs font-bold uppercase text-paper bg-graphite px-2.5 py-0.5 rounded-sm rotate-1">
                                        PREVIEW // {activeItem.num}
                                    </span>
                                    <span className="font-mono text-xs font-bold text-flame border border-flame px-2 py-0.5 rounded">
                                        {activeItem.tag}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-black italic uppercase tracking-tight text-graphite mb-2">
                                    {activeItem.name}
                                </h3>

                                <p className="font-hand text-lg text-olive mb-4">
                                    {activeItem.badge}
                                </p>

                                <p className="font-mono text-xs text-graphite/90 leading-relaxed mb-6 bg-graphite/5 p-3.5 rounded-sm border border-graphite/20">
                                    {activeItem.desc}
                                </p>

                                <Link
                                    href={activeItem.target}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="w-full inline-flex items-center justify-center gap-2 bg-flame text-paper font-mono font-bold px-5 py-2.5 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase text-xs cursor-pointer"
                                >
                                    <span>EXPLORE {activeItem.name.toUpperCase()}</span>
                                    <span>↗</span>
                                </Link>

                                <Doodle
                                    type={activeItem.doodle as "crown" | "star" | "scribble" | "arrow"}
                                    color="#f26430"
                                    className="absolute bottom-3 right-3 w-16 h-16 opacity-20 pointer-events-none"
                                />
                            </div>
                        </div>

                    </div>

                    <div className="pt-4 border-t-4 border-graphite flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
                        <span className="font-hand text-base text-olive">
                            Built for quiet & introverted builders ready to ship.
                        </span>

                        <Link
                            href="/team"
                            onClick={() => setMobileMenuOpen(false)}
                            className="bg-flame text-paper font-mono font-bold text-xs px-6 py-2.5 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase cursor-pointer"
                        >
                            MEET THE TEAM ↗
                        </Link>
                    </div>

                </div>

                <div className="absolute bottom-0 left-0 w-full h-3 bg-flame" />
            </div>
        </>
    );
}
