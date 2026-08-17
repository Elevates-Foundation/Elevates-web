import React from "react";

type DoodleType = "arrow" | "circle" | "underline" | "spark" | "scribble" | "star" | "bulb" | "rocket" | "brain" | "crown" | "eye" | "cross";

interface DoodleProps {
    type: DoodleType;
    color?: string;
    className?: string;
}

export default function Doodle({ type, color = "currentColor", className = "" }: DoodleProps) {
    const getDoodlePath = () => {
        switch (type) {
            case "arrow":
                return (
                    // Messy hand-drawn arrow
                    <path
                        d="M20,70 Q50,40 80,60 M70,55 L80,60 L75,70"
                        stroke={color}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                );
            case "circle":
                return (
                    // Messy multi-loop circle
                    <path
                        d="M50,15 C20,10 10,40 15,60 C20,85 50,95 75,80 C95,65 90,30 65,20 C45,15 25,25 20,50 C18,60 25,75 40,80"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                    />
                );
            case "underline":
                return (
                    // Vigorous underline
                    <path
                        d="M5,20 Q30,5 50,25 T95,15 M10,25 Q40,15 90,25"
                        stroke={color}
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                    />
                );
            case "spark":
                return (
                    // Burst sparkle
                    <path
                        d="M50,5 L50,25 M50,75 L50,95 M5,50 L25,50 M75,50 L95,50 M18,18 L32,32 M68,68 L82,82 M18,82 L32,68 M68,32 L82,18"
                        stroke={color}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                    />
                );
            case "scribble":
                return (
                    // Chaotic scribble
                    <path
                        d="M10,50 Q20,20 30,50 T50,50 T70,50 T90,50 M15,45 Q40,10 60,60 T90,40"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        fill="none"
                    />
                );
            case "star":
                return (
                    // Rough hand-drawn star
                    <path
                        d="M50,5 L61,35 L95,35 L68,55 L78,90 L50,70 L22,90 L32,55 L5,35 L39,35 Z"
                        stroke={color}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                );
            case "bulb":
                return (
                    // Lightbulb
                    <g stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M35,65 C35,65 20,50 20,35 C20,20 35,5 50,5 C65,5 80,20 80,35 C80,50 65,65 65,65" />
                        <path d="M40,75 L60,75 M42,82 L58,82 M45,90 L55,90" />
                        <path d="M50,20 L50,45 M35,35 L65,35" strokeWidth="2" /> {/* Filament */}
                    </g>
                );
            case "rocket":
                return (
                    // Rough rocket
                    <g stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M50,5 Q70,30 70,60 L50,65 L30,60 Q30,30 50,5 Z" />
                        <path d="M30,60 L20,80 L35,75 M70,60 L80,80 L65,75" />
                        <path d="M45,70 L45,85 M55,70 L55,85" />
                        <circle cx="50" cy="35" r="8" />
                    </g>
                );
            case "brain":
                return (
                    // Cloudy brain
                    <path
                        d="M20,50 Q10,30 30,20 Q40,5 60,10 Q80,5 90,30 Q100,60 80,75 Q70,95 50,90 Q30,95 20,75 Q5,70 20,50 M50,20 L50,90 M30,40 Q50,30 70,40"
                        stroke={color}
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                    />
                );
            case "crown":
                return (
                    // Basquiat Crown
                    <path
                        d="M10,70 L10,30 L30,50 L50,10 L70,50 L90,30 L90,70 Z"
                        stroke={color}
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                    />
                );
            case "eye":
                return (
                    // All-seeing eye
                    <g stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10,50 Q50,10 90,50 Q50,90 10,50 Z" />
                        <circle cx="50" cy="50" r="15" />
                        <circle cx="50" cy="50" r="5" fill={color} />
                    </g>
                );
            case "cross":
                return (
                    <path
                        d="M20,20 L80,80 M80,20 L20,80"
                        fill="none"
                        stroke={color}
                        strokeWidth="8"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                    />
                );
            default:
                return null;
        }
    };

    return (
        <svg
            viewBox="0 0 100 100"
            className={`overflow-visible ${className}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {getDoodlePath()}
        </svg>
    );
}
