"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Doodle from "@/components/doodle";

interface Obstacle {
  x: number;
  width: number;
  height: number;
  label: string;
  type: "loud-talker" | "gatekeeper" | "cert-mill";
  passed?: boolean;
}

export default function NotFound() {
  const [gameState, setGameState] = useState<"IDLE" | "PLAYING" | "GAMEOVER">("IDLE");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [soundMuted, setSoundMuted] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const lastPointSoundRef = useRef<number>(0);

  // Physics State (Refs for 60fps performance)
  const playerRef = useRef({
    x: 80,
    y: 0, // 0 is ground
    vy: 0,
    width: 44,
    height: 44,
    isGrounded: true,
  });

  const obstaclesRef = useRef<Obstacle[]>([]);
  const scoreRef = useRef(0);
  const speedRef = useRef(7);

  // Ground position
  const [groundY, setGroundY] = useState(400);
  const groundYRef = useRef(400);

  const GRAVITY = 0.75;
  const JUMP_FORCE = -13.5;

  // Web Audio 8-Bit Retro Sound Effects Synthesizer
  const playSound = useCallback(
    (type: "jump" | "point" | "hit") => {
      if (soundMuted) return;
      try {
        if (!audioCtxRef.current) {
          const AudioContextClass =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          audioCtxRef.current = new AudioContextClass();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === "suspended") {
          ctx.resume();
        }

        const now = ctx.currentTime;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);

        if (type === "jump") {
          // Classic Dino Jump: 300Hz -> 650Hz
          osc.type = "square";
          osc.frequency.setValueAtTime(300, now);
          osc.frequency.exponentialRampToValueAtTime(650, now + 0.12);
          gain.gain.setValueAtTime(0.12, now);
          gain.gain.linearRampToValueAtTime(0.01, now + 0.12);
          osc.start(now);
          osc.stop(now + 0.12);
        } else if (type === "point") {
          // 100-Point Milestone Chime: 800Hz -> 1200Hz
          osc.type = "sine";
          osc.frequency.setValueAtTime(800, now);
          osc.frequency.setValueAtTime(1200, now + 0.08);
          gain.gain.setValueAtTime(0.15, now);
          gain.gain.linearRampToValueAtTime(0.01, now + 0.18);
          osc.start(now);
          osc.stop(now + 0.18);
        } else if (type === "hit") {
          // Game Over Hit: 250Hz -> 60Hz sawtooth buzz
          osc.type = "sawtooth";
          osc.frequency.setValueAtTime(250, now);
          osc.frequency.exponentialRampToValueAtTime(60, now + 0.25);
          gain.gain.setValueAtTime(0.2, now);
          gain.gain.linearRampToValueAtTime(0.01, now + 0.25);
          osc.start(now);
          osc.stop(now + 0.25);
        }
      } catch {
        // Silently handle audio policy restrictions
      }
    },
    [soundMuted]
  );

  // Handle Resize for Full Screen Canvas
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current && containerRef.current) {
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        canvasRef.current.width = w;
        canvasRef.current.height = h;
        const gy = h * 0.78; // Ground sits 78% from top for optimal clearance
        setGroundY(gy);
        groundYRef.current = gy;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Jump Action
  const jump = useCallback(() => {
    const canvas = canvasRef.current;
    const w = canvas ? canvas.width : 800;
    const baseSpeed = Math.max(3.8, Math.min(6.5, w / 160));

    if (gameState === "IDLE" || gameState === "GAMEOVER") {
      setGameState("PLAYING");
      scoreRef.current = 0;
      lastPointSoundRef.current = 0;
      setScore(0);
      obstaclesRef.current = [];
      speedRef.current = baseSpeed;
      playerRef.current.y = 0;
      playerRef.current.vy = JUMP_FORCE;
      playerRef.current.isGrounded = false;
      playSound("jump");
    } else if (gameState === "PLAYING" && playerRef.current.isGrounded) {
      playerRef.current.vy = JUMP_FORCE;
      playerRef.current.isGrounded = false;
      playSound("jump");
    }
  }, [gameState, playSound]);

  // Global Key Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        jump();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [jump]);

  // Main Canvas Render Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastSpawn = 0;

    const gameLoop = (timestamp: number) => {
      const w = canvas.width;
      const h = canvas.height;
      const gy = groundYRef.current;
      const isMobile = w < 500;

      // Clear screen
      ctx.clearRect(0, 0, w, h);

      // Responsive Player Dimensions & X Position
      const p = playerRef.current;
      p.width = isMobile ? 36 : 44;
      p.height = isMobile ? 36 : 44;
      p.x = Math.min(80, Math.max(30, w * 0.1));

      // Draw Grid Pattern Background
      ctx.strokeStyle = "rgba(45, 45, 52, 0.06)";
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Draw Main Ground Line
      ctx.strokeStyle = "#2d2d34";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, gy);
      ctx.lineTo(w, gy);
      ctx.stroke();

      // Draw Ground Slanted Hatching
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = "#8b8b7a";
      for (let x = (timestamp % 30) * -1; x < w; x += 24) {
        ctx.beginPath();
        ctx.moveTo(x, gy + 2);
        ctx.lineTo(x - 8, gy + 18);
        ctx.stroke();
      }

      if (gameState === "PLAYING") {
        // Player Physics Update
        p.vy += GRAVITY;
        p.y += p.vy;

        if (p.y >= 0) {
          p.y = 0;
          p.vy = 0;
          p.isGrounded = true;
        }

        // Obstacle Spawning (Responsive delay)
        const spawnDelay = isMobile ? Math.max(1300, 2400 - speedRef.current * 80) : Math.max(900, 2000 - speedRef.current * 70);

        if (timestamp - lastSpawn > spawnDelay) {
          lastSpawn = timestamp;
          const types: Array<"loud-talker" | "gatekeeper" | "cert-mill"> = [
            "gatekeeper",
            "loud-talker",
            "cert-mill",
          ];
          const type = types[Math.floor(Math.random() * types.length)];
          let label = "GATE";
          // Gatekeeper: narrow + tall (needs high jump)
          let obsW = isMobile ? 30 : 42;
          let obsH = isMobile ? 52 : 68;

          if (type === "loud-talker") {
            label = "TALKER";
            // Loud Talker: wide + medium (person with head)
            obsW = isMobile ? 36 : 48;
            obsH = isMobile ? 46 : 62;
          } else if (type === "cert-mill") {
            label = "CERT";
            // Cert Mill: wide + short (scroll on ground)
            obsW = isMobile ? 48 : 64;
            obsH = isMobile ? 28 : 36;
          }

          obstaclesRef.current.push({
            x: w,
            width: obsW,
            height: obsH,
            label,
            type,
          });
        }

        // Increase Speed gradually
        speedRef.current += 0.0008;

        // Update Score
        scoreRef.current += 0.3;
        const currentScore = Math.floor(scoreRef.current);
        setScore(currentScore);

        // Milestone Sound every 100 points
        if (currentScore > 0 && currentScore % 100 === 0 && lastPointSoundRef.current !== currentScore) {
          lastPointSoundRef.current = currentScore;
          playSound("point");
        }

        // Move and Draw Obstacles (Unique pixel-art per type)
        obstaclesRef.current.forEach((obs) => {
          obs.x -= speedRef.current;
          const obsY = gy - obs.height;
          const ox = obs.x;
          const ow = obs.width;
          const oh = obs.height;
          ctx.save();

          if (obs.type === "gatekeeper") {
            // ═══ GATEKEEPER ═══
            // Tall orange gate with vertical bars and spiky top
            // Gate frame
            ctx.fillStyle = "#f26430";
            ctx.fillRect(ox, obsY, ow, oh);
            ctx.strokeStyle = "#2d2d34";
            ctx.lineWidth = 2.5;
            ctx.strokeRect(ox, obsY, ow, oh);

            // Vertical bars (3 bars inside the gate)
            ctx.fillStyle = "#2d2d34";
            const barW = Math.max(3, ow / 10);
            const barCount = 3;
            const barSpacing = ow / (barCount + 1);
            for (let b = 1; b <= barCount; b++) {
              ctx.fillRect(ox + barSpacing * b - barW / 2, obsY + 4, barW, oh - 8);
            }

            // Spikes on top (3 triangles)
            ctx.fillStyle = "#f26430";
            ctx.strokeStyle = "#2d2d34";
            ctx.lineWidth = 1.5;
            const spikeW = ow / 4;
            for (let s = 0; s < 3; s++) {
              const sx = ox + s * spikeW + spikeW * 0.5;
              ctx.beginPath();
              ctx.moveTo(sx - spikeW * 0.4, obsY);
              ctx.lineTo(sx, obsY - (isMobile ? 8 : 12));
              ctx.lineTo(sx + spikeW * 0.4, obsY);
              ctx.closePath();
              ctx.fill();
              ctx.stroke();
            }

            // GATE label on top bar
            ctx.fillStyle = "#f6f5ef";
            ctx.font = `bold ${isMobile ? 7 : 9}px monospace`;
            ctx.textAlign = "center";
            ctx.fillText("GATE", ox + ow / 2, obsY + 12);

          } else if (obs.type === "loud-talker") {
            // ═══ LOUD TALKER ═══
            // Person silhouette: body + round head + speech bubble !!
            const bodyH = oh * 0.65;
            const headR = ow * 0.28;
            const headCX = ox + ow / 2;
            const headCY = obsY + headR + 1;
            const bodyY = obsY + headR * 2;

            // Body
            ctx.fillStyle = "#2d2d34";
            ctx.fillRect(ox + ow * 0.15, bodyY, ow * 0.7, bodyH);
            ctx.strokeStyle = "#f26430";
            ctx.lineWidth = 2;
            ctx.strokeRect(ox + ow * 0.15, bodyY, ow * 0.7, bodyH);

            // Head (circle)
            ctx.fillStyle = "#2d2d34";
            ctx.beginPath();
            ctx.arc(headCX, headCY, headR, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#f26430";
            ctx.lineWidth = 2;
            ctx.stroke();

            // Eyes (two dots)
            ctx.fillStyle = "#f6f5ef";
            ctx.fillRect(headCX - headR * 0.45, headCY - 2, Math.max(2, headR * 0.2), Math.max(2, headR * 0.2));
            ctx.fillRect(headCX + headR * 0.2, headCY - 2, Math.max(2, headR * 0.2), Math.max(2, headR * 0.2));

            // Open mouth (shouting)
            ctx.fillStyle = "#f26430";
            ctx.fillRect(headCX - headR * 0.3, headCY + headR * 0.2, headR * 0.6, headR * 0.35);

            // Speech bubble with "!!"
            const bubX = ox + ow * 0.7;
            const bubY = headCY - headR * 2.5;
            const bubW = isMobile ? 14 : 18;
            const bubH = isMobile ? 10 : 13;
            ctx.fillStyle = "#f6f5ef";
            ctx.strokeStyle = "#2d2d34";
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.roundRect(bubX, bubY, bubW, bubH, 3);
            ctx.fill();
            ctx.stroke();
            // Bubble tail
            ctx.beginPath();
            ctx.moveTo(bubX + 2, bubY + bubH);
            ctx.lineTo(headCX + headR * 0.5, headCY - headR);
            ctx.lineTo(bubX + bubW * 0.5, bubY + bubH);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            ctx.fillStyle = "#2d2d34";
            ctx.font = `bold ${isMobile ? 7 : 9}px monospace`;
            ctx.textAlign = "center";
            ctx.fillText("!!", bubX + bubW / 2, bubY + bubH * 0.75);

            // Legs
            ctx.fillStyle = "#2d2d34";
            ctx.fillRect(ox + ow * 0.2, bodyY + bodyH, ow * 0.22, gy - (bodyY + bodyH));
            ctx.fillRect(ox + ow * 0.58, bodyY + bodyH, ow * 0.22, gy - (bodyY + bodyH));

          } else if (obs.type === "cert-mill") {
            // ═══ CERT MILL ═══
            // Wide scroll/diploma shape (shorter, lies on ground)
            const scrollH = oh;
            const rollW = isMobile ? 7 : 10;

            // Main scroll body
            ctx.fillStyle = "#8b8b7a"; // olive/khaki
            ctx.fillRect(ox + rollW, obsY, ow - rollW * 2, scrollH);
            ctx.strokeStyle = "#2d2d34";
            ctx.lineWidth = 2;
            ctx.strokeRect(ox + rollW, obsY, ow - rollW * 2, scrollH);

            // Left rolled end
            ctx.fillStyle = "#6b6b5a";
            ctx.beginPath();
            ctx.ellipse(ox + rollW, obsY + scrollH / 2, rollW, scrollH / 2, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = "#2d2d34";
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // Right rolled end
            ctx.fillStyle = "#6b6b5a";
            ctx.beginPath();
            ctx.ellipse(ox + ow - rollW, obsY + scrollH / 2, rollW, scrollH / 2, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Horizontal text lines on scroll
            ctx.fillStyle = "#2d2d34";
            const lineY1 = obsY + scrollH * 0.3;
            const lineY2 = obsY + scrollH * 0.5;
            const lineY3 = obsY + scrollH * 0.7;
            const lineX1 = ox + rollW + 4;
            const lineX2 = ox + ow - rollW - 4;
            ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.moveTo(lineX1, lineY1); ctx.lineTo(lineX2, lineY1); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(lineX1, lineY2); ctx.lineTo(lineX2, lineY2); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(lineX1 + (lineX2 - lineX1) * 0.2, lineY3); ctx.lineTo(lineX2 - (lineX2 - lineX1) * 0.2, lineY3); ctx.stroke();

            // FAKE stamp
            ctx.font = `bold ${isMobile ? 7 : 9}px monospace`;
            ctx.textAlign = "center";
            ctx.fillStyle = "#f26430";
            ctx.fillText("FAKE", ox + ow / 2, obsY + scrollH * 0.52);
          }

          ctx.restore();

          // Collision detection (same for all types)
          const playerRect = {
            left: p.x + 4,
            right: p.x + p.width - 4,
            top: gy - p.height - p.y + 4,
            bottom: gy - p.y - 2,
          };

          const obsRect = {
            left: obs.x + 3,
            right: obs.x + obs.width - 3,
            top: obsY + 3,
            bottom: gy,
          };

          if (
            playerRect.right > obsRect.left &&
            playerRect.left < obsRect.right &&
            playerRect.bottom > obsRect.top &&
            playerRect.top < obsRect.bottom
          ) {
            playSound("hit");
            setGameState("GAMEOVER");
            setHighScore((prev) => Math.max(prev, currentScore));
          }
        });

        // Remove off-screen obstacles
        obstaclesRef.current = obstaclesRef.current.filter((obs) => obs.x + obs.width > 0);
      }

      // Draw Player (Shy Builder Pixel Avatar)
      const playerY = gy - p.height - p.y;

      // Player Body
      ctx.fillStyle = "#f26430"; // Flame
      ctx.fillRect(p.x, playerY, p.width, p.height);
      ctx.strokeStyle = "#2d2d34";
      ctx.lineWidth = 3.5;
      ctx.strokeRect(p.x, playerY, p.width, p.height);

      // Builder Glasses
      ctx.fillStyle = "#2d2d34";
      ctx.fillRect(p.x + 22, playerY + 10, 16, 8);
      ctx.fillStyle = "#f6f5ef";
      ctx.fillRect(p.x + 24, playerY + 12, 4, 3);

      // Laptop Graphic under arm
      ctx.fillStyle = "#8b8b7a";
      ctx.fillRect(p.x + 6, playerY + 22, 14, 10);

      // Animated Legs
      if (p.isGrounded && gameState === "PLAYING") {
        const legToggle = Math.floor(timestamp / 70) % 2;
        ctx.fillStyle = "#2d2d34";
        if (legToggle === 0) {
          ctx.fillRect(p.x + 8, gy, 8, 8);
          ctx.fillRect(p.x + 28, gy - 6, 8, 6);
        } else {
          ctx.fillRect(p.x + 8, gy - 6, 8, 6);
          ctx.fillRect(p.x + 28, gy, 8, 8);
        }
      }

      animFrameRef.current = requestAnimationFrame(gameLoop);
    };

    animFrameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [gameState, playSound]);

  return (
    <div
      ref={containerRef}
      onClick={jump}
      className="fixed inset-0 w-screen h-screen bg-paper text-graphite overflow-hidden select-none cursor-pointer flex flex-col justify-between"
    >
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-25 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Floating Decorative Doodles */}
      <Doodle
        type="star"
        color="#f26430"
        className="absolute top-20 left-12 w-16 h-16 rotate-12 opacity-30 pointer-events-none hidden sm:block z-0"
      />
      <Doodle
        type="crown"
        color="#2d2d34"
        className="absolute bottom-32 right-12 w-20 h-20 -rotate-12 opacity-20 pointer-events-none hidden sm:block z-0"
      />

      {/* ─── FLOATING TOP HEADER BAR ─── */}
      <header className="relative z-20 flex flex-wrap items-center justify-between pt-28 md:pt-32 pb-4 px-6 md:px-12 max-w-7xl mx-auto w-full gap-4">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest bg-flame text-paper px-3.5 py-1.5 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]">
            ERROR 404 // SHY BUILDER RUNNER
          </span>
          <span className="font-mono text-xs text-olive font-bold hidden md:inline">
            // PAGE NOT FOUND
          </span>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs md:text-sm font-bold">
          {/* Sound Toggle Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSoundMuted(!soundMuted);
            }}
            className="bg-paper text-graphite px-3 py-2 border-2 border-graphite rounded-sm shadow-[3px_3px_0px_0px_rgba(45,45,52,1)] hover:scale-105 transition-transform"
          >
            {soundMuted ? "🔇 MUTED" : "🔊 SOUND ON"}
          </button>

          <div className="flex items-center gap-4 bg-paper px-4 py-2 border-2 border-graphite rounded-sm shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]">
            <span>LINES SHIPPED: <strong className="text-flame text-sm md:text-base">{String(score).padStart(5, "0")}</strong></span>
            <span className="text-olive">|</span>
            <span>HIGH: <strong>{String(highScore).padStart(5, "0")}</strong></span>
          </div>
        </div>
      </header>

      {/* ─── FULLSCREEN CANVAS GAME LAYER ─── */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* ─── GAME STATE OVERLAYS ─── */}

      {/* Start Overlay */}
      {gameState === "IDLE" && (
        <div className="absolute inset-0 z-30 bg-graphite/50 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(45,45,52,1)] max-w-xl">
            <span className="font-mono text-xs font-bold text-flame uppercase tracking-widest block mb-2">
              PAGE NOT FOUND // 404 ARCADE
            </span>
            <h1 className="text-3xl md:text-5xl font-black uppercase text-graphite mb-4 leading-tight">
              SHY BUILDER<br />RUNNER
            </h1>
            <p className="font-mono text-xs md:text-sm text-olive mb-8 leading-relaxed">
              Dodge the Loud Talkers, Gatekeepers, and Certificate Mills. Jump over obstacles and ship lines of code.
            </p>

            <button
              onClick={jump}
              className="bg-flame text-paper font-mono font-bold text-sm md:text-base px-8 py-4 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:scale-105 transition-transform uppercase tracking-wider animate-bounce"
            >
              PRESS SPACE OR TAP TO START 🚀
            </button>
          </div>
        </div>
      )}

      {/* Game Over Overlay */}
      {gameState === "GAMEOVER" && (
        <div className="absolute inset-0 z-30 bg-graphite/80 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(242,100,48,1)] max-w-xl">
            <span className="font-mono text-xs font-bold text-flame uppercase tracking-widest block mb-2">
              OUT OF BOUNDS
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-flame mb-3">
              GATEKEEPED!
            </h2>
            <p className="font-mono text-sm md:text-base text-graphite mb-6 font-bold">
              You shipped <span className="text-flame text-xl font-black">{score}</span> lines of code before getting interrupted!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={jump}
                className="bg-flame text-paper font-mono font-bold text-sm px-8 py-3.5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:scale-105 transition-transform uppercase"
              >
                RESTART [ SPACE / TAP ] ↺
              </button>
              <Link
                href="/"
                className="bg-paper text-graphite font-mono font-bold text-sm px-8 py-3.5 rounded-sm border-2 border-graphite shadow-[4px_4px_0px_0px_rgba(45,45,52,1)] hover:scale-105 transition-transform uppercase"
              >
                RETURN HOME ↗
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ─── FLOATING BOTTOM ACTION BAR ─── */}
      <footer className="relative z-20 flex flex-col sm:flex-row items-center justify-between p-6 md:p-8 max-w-7xl mx-auto w-full gap-4">
        <div className="font-mono text-xs font-bold text-graphite bg-paper px-4 py-2 border-2 border-graphite rounded-sm shadow-[3px_3px_0px_0px_rgba(45,45,52,1)]">
          CONTROLS: <span className="text-flame">SPACE / ARROW UP / CLICK ANYWHERE TO JUMP</span>
        </div>

        <Link
          href="/"
          onClick={(e) => e.stopPropagation()}
          className="bg-graphite text-paper font-mono font-bold text-xs px-6 py-2.5 rounded-sm border-2 border-graphite shadow-[3px_3px_0px_0px_rgba(242,100,48,1)] hover:translate-y-0.5 hover:shadow-none transition-all uppercase"
        >
          ← EXIT TO ELEVATES HOME
        </Link>
      </footer>
    </div>
  );
}
