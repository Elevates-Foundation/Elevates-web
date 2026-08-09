"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const follower = followerRef.current;

        if (!cursor || !follower) return;

        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1, // Instant follow
                ease: "power2.out"
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.5, // Laggy follow
                ease: "back.out(1.7)"
            });
        };

        window.addEventListener("mousemove", moveCursor);

        // Cleanup
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="hidden lg:block fixed top-0 left-0 w-4 h-4 bg-flame rounded-full pointer-events-none z-[9999] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={followerRef}
                className="hidden lg:block fixed top-0 left-0 w-12 h-12 border-2 border-indigo rounded-full pointer-events-none z-[9998] opacity-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            />
        </>
    );
}
