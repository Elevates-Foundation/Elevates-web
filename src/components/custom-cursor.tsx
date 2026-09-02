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
                duration: 0.08,
                ease: "power2.out"
            });
            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.35,
                ease: "power3.out"
            });
        };

        const handleOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target && target.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer")) {
                gsap.to(follower, { scale: 1.5, opacity: 0.8, duration: 0.2 });
                gsap.to(cursor, { scale: 0.6, duration: 0.2 });
            } else {
                gsap.to(follower, { scale: 1, opacity: 0.5, duration: 0.2 });
                gsap.to(cursor, { scale: 1, duration: 0.2 });
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleOver);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="custom-cursor hidden lg:block fixed top-0 left-0 w-4 h-4 bg-flame rounded-full pointer-events-none z-[100002] mix-blend-difference -translate-x-1/2 -translate-y-1/2"
            />
            <div
                ref={followerRef}
                className="custom-cursor hidden lg:block fixed top-0 left-0 w-12 h-12 border-2 border-indigo rounded-full pointer-events-none z-[100001] opacity-50 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
            />
        </>
    );
}
