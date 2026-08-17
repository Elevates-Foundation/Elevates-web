import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ELEVATES Kerala Events & Workshops | Hands-on Labs & Build Sprints";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    background: "#F4F5F0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "48px 56px",
                    fontFamily: "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                    border: "12px solid #2D2D34",
                }}
            >
                {/* ── Background Technical Grid ── */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(45, 45, 52, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 45, 52, 0.05) 1px, transparent 1px)",
                        backgroundSize: "36px 36px",
                        display: "flex",
                    }}
                />

                {/* ── Warm Flame glow corner ── */}
                <div
                    style={{
                        position: "absolute",
                        top: "-60px",
                        right: "-60px",
                        width: "380px",
                        height: "380px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(242, 100, 48, 0.16) 0%, transparent 70%)",
                        display: "flex",
                    }}
                />

                {/* ── Top Header Tape & Statewide Markers ── */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        zIndex: 10,
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        {/* Orange Tape Badge */}
                        <div
                            style={{
                                background: "#F26430",
                                color: "#FFFFFF",
                                padding: "8px 20px",
                                fontSize: "14px",
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                fontWeight: 900,
                                border: "3px solid #2D2D34",
                                boxShadow: "4px 4px 0px #2D2D34",
                                transform: "rotate(-1.5deg)",
                                display: "flex",
                            }}
                        >
                            ELEVATES // FOR QUIET TALENT
                        </div>

                        <div
                            style={{
                                background: "#2D2D34",
                                color: "#F4F5F0",
                                padding: "8px 16px",
                                fontSize: "12px",
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                fontWeight: 700,
                                display: "flex",
                            }}
                        >
                            KERALA TECH INITIATIVE
                        </div>
                    </div>

                    {/* Right Monospace Tags */}
                    <div
                        style={{
                            color: "#758173",
                            fontSize: "13px",
                            letterSpacing: "0.1em",
                            textAlign: "right",
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                            fontWeight: 700,
                        }}
                    >
                        <span>// MULTI-CAMPUS CHAPTERS</span>
                        <span>// 100% PROOF OF WORK</span>
                    </div>
                </div>

                {/* ── Main Typography Hero ── */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        zIndex: 10,
                        marginTop: "10px",
                    }}
                >
                    <div
                        style={{
                            fontSize: "74px",
                            fontWeight: 900,
                            color: "#2D2D34",
                            letterSpacing: "-2px",
                            lineHeight: 0.95,
                            textTransform: "uppercase",
                            display: "flex",
                            gap: "16px",
                        }}
                    >
                        <span>EVENTS &</span>
                        <span style={{ color: "#F26430" }}>WORKSHOPS</span>
                    </div>

                    <div
                        style={{
                            fontSize: "22px",
                            fontWeight: 500,
                            color: "#50514F",
                            letterSpacing: "-0.01em",
                            maxWidth: "960px",
                            lineHeight: 1.35,
                            display: "flex",
                        }}
                    >
                        Hands-on sprints, competitive CTFs, IoT hardware labs, AI automation & peer builds across Kerala engineering campuses.
                    </div>
                </div>

                {/* ── Statewide Technical Domains ── */}
                <div
                    style={{
                        display: "flex",
                        gap: "12px",
                        flexWrap: "wrap",
                        zIndex: 10,
                    }}
                >
                    {[
                        "AI & AUTOMATION",
                        "CYBER DEFENSE & CTFS",
                        "EMBEDDED & IOT",
                        "SYSTEMS & WEB",
                        "GEOSPATIAL TECH",
                        "PEER LABS",
                    ].map((track, i) => (
                        <div
                            key={i}
                            style={{
                                background: i === 0 ? "#F26430" : "#FFFFFF",
                                color: i === 0 ? "#FFFFFF" : "#2D2D34",
                                border: "2px solid #2D2D34",
                                padding: "7px 16px",
                                fontSize: "12px",
                                fontWeight: 800,
                                letterSpacing: "0.08em",
                                boxShadow: "2px 2px 0px #2D2D34",
                                display: "flex",
                            }}
                        >
                            {track}
                        </div>
                    ))}
                </div>

                {/* ── Bottom Strip ── */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderTop: "3px solid #2D2D34",
                        paddingTop: "16px",
                        zIndex: 10,
                    }}
                >
                    {/* Metrics / Mission */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#2D2D34",
                        }}
                    >
                        <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                            <span style={{ color: "#F26430", fontSize: "18px" }}>⚡</span>
                            Statewide Hands-on Sprints
                        </span>
                        <span style={{ color: "#758173" }}>•</span>
                        <span>Zero Boring Lectures</span>
                        <span style={{ color: "#758173" }}>•</span>
                        <span>Kerala, India</span>
                    </div>

                    {/* Official URL */}
                    <div
                        style={{
                            background: "#2D2D34",
                            color: "#F4F5F0",
                            padding: "6px 18px",
                            fontSize: "14px",
                            fontWeight: 800,
                            letterSpacing: "0.05em",
                            display: "flex",
                        }}
                    >
                        www.elevates.live/events
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
