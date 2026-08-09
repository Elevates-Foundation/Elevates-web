import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ELEVATES | Learn. Build. Grow.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "1200px",
                    height: "630px",
                    background: "#2d2d34",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "56px 64px",
                    fontFamily: "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* ── Grid overlay lines ── */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage:
                            "linear-gradient(rgba(242,100,48,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(242,100,48,0.06) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                        display: "flex",
                    }}
                />

                {/* ── Flame glow blob top-right ── */}
                <div
                    style={{
                        position: "absolute",
                        top: "-80px",
                        right: "-80px",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(242,100,48,0.25) 0%, transparent 70%)",
                        display: "flex",
                    }}
                />

                {/* ── Flame glow blob bottom-left ── */}
                <div
                    style={{
                        position: "absolute",
                        bottom: "-100px",
                        left: "-60px",
                        width: "320px",
                        height: "320px",
                        borderRadius: "50%",
                        background:
                            "radial-gradient(circle, rgba(242,100,48,0.15) 0%, transparent 70%)",
                        display: "flex",
                    }}
                />

                {/* ── Top row: badge + tagline ── */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        zIndex: 10,
                    }}
                >
                    {/* Admit-one badge */}
                    <div
                        style={{
                            border: "2px solid #f26430",
                            color: "#f26430",
                            padding: "6px 18px",
                            fontSize: "13px",
                            letterSpacing: "0.15em",
                            textTransform: "uppercase",
                            fontWeight: 700,
                            transform: "rotate(-1.5deg)",
                            display: "flex",
                        }}
                    >
                        ADMIT ONE
                    </div>

                    {/* Academic year */}
                    <div
                        style={{
                            color: "#758173",
                            fontSize: "13px",
                            letterSpacing: "0.12em",
                            textAlign: "right",
                            display: "flex",
                            flexDirection: "column",
                            gap: "4px",
                        }}
                    >
                        <span>// ACADEMIC YEAR 2025</span>
                        <span>// LEARN . BUILD . GROW</span>
                    </div>
                </div>

                {/* ── Centre: main wordmark ── */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        zIndex: 10,
                    }}
                >
                    {/* ELEVATES */}
                    <div
                        style={{
                            fontSize: "140px",
                            fontWeight: 900,
                            color: "#f26430",
                            letterSpacing: "-4px",
                            lineHeight: 0.88,
                            textTransform: "uppercase",
                            display: "flex",
                        }}
                    >
                        ELEVATES
                    </div>

                    {/* Subtitle */}
                    <div
                        style={{
                            fontSize: "22px",
                            fontWeight: 400,
                            color: "#f8fff4",
                            letterSpacing: "0.25em",
                            textTransform: "uppercase",
                            opacity: 0.65,
                            display: "flex",
                        }}
                    >
                        Multi-disciplinary student tech&nbsp;community
                    </div>
                </div>

                {/* ── Bottom row: divider + CTA chips ── */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        zIndex: 10,
                    }}
                >
                    {/* Dashed divider */}
                    <div
                        style={{
                            width: "100%",
                            height: "2px",
                            background:
                                "repeating-linear-gradient(90deg, #758173 0px, #758173 8px, transparent 8px, transparent 18px)",
                            display: "flex",
                        }}
                    />

                    {/* Programme chips + domain */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                            {[
                                "WORKSHOPS",
                                "HACKATHONS",
                                "OPEN SOURCE",
                                "HARDWARE",
                                "DESIGN",
                            ].map((tag) => (
                                <div
                                    key={tag}
                                    style={{
                                        background: "rgba(242,100,48,0.12)",
                                        border: "1px solid rgba(242,100,48,0.4)",
                                        color: "#f26430",
                                        padding: "5px 14px",
                                        fontSize: "11px",
                                        letterSpacing: "0.15em",
                                        textTransform: "uppercase",
                                        fontWeight: 700,
                                        borderRadius: "2px",
                                        display: "flex",
                                    }}
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>

                        {/* Domain */}
                        <div
                            style={{
                                color: "#758173",
                                fontSize: "14px",
                                letterSpacing: "0.08em",
                                display: "flex",
                            }}
                        >
                            elevates.vercel.app
                        </div>
                    </div>
                </div>

                {/* ── Ticket perforation dots (right edge) ── */}
                <div
                    style={{
                        position: "absolute",
                        right: "0px",
                        top: "50%",
                        transform: "translateY(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                    }}
                >
                    {Array.from({ length: 18 }).map((_, k) => (
                        <div
                            key={k}
                            style={{
                                width: "12px",
                                height: "12px",
                                borderRadius: "50%",
                                background: "#2d2d34",
                                border: "2px solid rgba(242,100,48,0.25)",
                                display: "flex",
                            }}
                        />
                    ))}
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
