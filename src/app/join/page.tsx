"use client";

import { useState } from "react";
import Link from "next/link";

export default function JoinPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [year, setYear] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/os/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "join",
          fullName,
          email,
          phone: phone || undefined,
          college: college || undefined,
          year: year || undefined,
          message: message || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setError(data.error ?? "Could not submit");
        return;
      }
      setStatus("ok");
    } catch {
      setStatus("error");
      setError("Network error");
    }
  }

  return (
    <main className="min-h-screen bg-paper text-graphite pt-32 md:pt-40 pb-24 px-6 md:px-12 max-w-2xl mx-auto">
      <nav className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span>/</span>
        <span className="text-graphite font-bold">Join</span>
      </nav>

      <div className="bg-paper border-4 border-graphite rounded-sm p-8 shadow-[12px_12px_0px_0px_#2d2d34]">
        <span className="inline-flex px-3 py-1 font-mono text-xs uppercase font-bold bg-flame text-paper border border-graphite rounded-md mb-4 rotate-[-1deg]">
          Join the network
        </span>
        <h1 className="text-3xl font-black uppercase tracking-tight mb-2">
          Become a member
        </h1>
        <p className="font-hand text-olive text-lg mb-8">
          Not an account yet — HQ reviews leads in Elevates OS.
        </p>

        {status === "ok" ? (
          <div className="border-2 border-graphite p-5 rounded-lg bg-flame/10">
            <p className="font-bold mb-1">Got it.</p>
            <p className="font-mono text-sm text-olive">
              We&apos;ll reach out when a chapter seat opens. Meanwhile, browse{" "}
              <Link href="/events" className="text-flame underline">
                events
              </Link>
              .
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-3">
            <input
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full name"
              className="w-full border-2 border-graphite rounded-md px-3 py-2 font-mono text-sm"
            />
            <input
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full border-2 border-graphite rounded-md px-3 py-2 font-mono text-sm"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
              className="w-full border-2 border-graphite rounded-md px-3 py-2 font-mono text-sm"
            />
            <input
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              placeholder="College"
              className="w-full border-2 border-graphite rounded-md px-3 py-2 font-mono text-sm"
            />
            <input
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Year (e.g. 2nd)"
              className="w-full border-2 border-graphite rounded-md px-3 py-2 font-mono text-sm"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="What do you want to build?"
              rows={3}
              className="w-full border-2 border-graphite rounded-md px-3 py-2 font-mono text-sm"
            />
            {status === "error" && (
              <p className="font-mono text-xs text-red-700">{error}</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full px-6 py-3 bg-flame text-paper font-bold uppercase tracking-wider border-2 border-graphite rounded-lg shadow-[4px_4px_0px_0px_#2d2d34] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#2d2d34] transition-all disabled:opacity-60"
            >
              {status === "loading" ? "Sending…" : "Submit interest →"}
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
