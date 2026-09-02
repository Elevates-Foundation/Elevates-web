import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ELEVATES Chapters: Pitch Deck 2026 | Building Kerala's Largest Student Innovation Network";
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
          padding: "52px 64px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* ── Grid overlay ── */}
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

        {/* ── Flame glow blobs ── */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "420px",
            height: "420px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(242,100,48,0.28) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(242,100,48,0.12) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* ── Left accent bar ── */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            background: "#f26430",
            display: "flex",
          }}
        />

        {/* ── Top row: PITCH DECK badge + slide count ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            zIndex: 10,
          }}
        >
          {/* Badge */}
          <div
            style={{
              background: "#f26430",
              color: "#f8fff4",
              padding: "7px 20px",
              fontSize: "13px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 900,
              transform: "rotate(-1.5deg)",
              display: "flex",
            }}
          >
            PITCH DECK · 2026
          </div>

          {/* Right info */}
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
            <span>// 24 SLIDES</span>
            <span>// PRIVATE · DO NOT DISTRIBUTE</span>
          </div>
        </div>

        {/* ── Centre: main copy ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            zIndex: 10,
          }}
        >
          {/* ELEVATES wordmark */}
          <div
            style={{
              fontSize: "130px",
              fontWeight: 900,
              color: "#f8fff4",
              letterSpacing: "-4px",
              lineHeight: 0.88,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            ELEVATES
          </div>

          {/* Tagline row */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "40px",
                height: "3px",
                background: "#f26430",
                display: "flex",
              }}
            />
            <div
              style={{
                fontSize: "22px",
                fontWeight: 400,
                color: "#f8fff4",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                opacity: 0.65,
                display: "flex",
              }}
            >
              CHAPTERS
            </div>
          </div>

          {/* Sub-headline */}
          <div
            style={{
              fontSize: "26px",
              fontWeight: 700,
              color: "#f8fff4",
              opacity: 0.85,
              display: "flex",
              marginTop: "4px",
            }}
          >
            Building Kerala&apos;s Largest Student Innovation Network
          </div>
        </div>

        {/* ── Bottom row ── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            zIndex: 10,
          }}
        >
          {/* Dashed divider */}
          <div
            style={{
              width: "100%",
              height: "2px",
              background:
                "repeating-linear-gradient(90deg, #f26430 0px, #f26430 8px, transparent 8px, transparent 18px)",
              display: "flex",
            }}
          />

          {/* Tags + domain */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", gap: "10px" }}>
              {["STUDENT-LED", "OPEN COMMUNITY", "PROJECT-DRIVEN", "CLUSTER-BASED", "EKC PROVEN"].map(
                (tag) => (
                  <div
                    key={tag}
                    style={{
                      background: "rgba(242,100,48,0.12)",
                      border: "1px solid rgba(242,100,48,0.4)",
                      color: "#f26430",
                      padding: "5px 13px",
                      fontSize: "10px",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      borderRadius: "2px",
                      display: "flex",
                    }}
                  >
                    {tag}
                  </div>
                )
              )}
            </div>

            <div
              style={{
                color: "#758173",
                fontSize: "14px",
                letterSpacing: "0.08em",
                display: "flex",
              }}
            >
              elevates.live
            </div>
          </div>
        </div>

        {/* ── Right-edge perforation dots ── */}
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
                border: "2px solid rgba(242,100,48,0.3)",
                display: "flex",
              }}
            />
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
