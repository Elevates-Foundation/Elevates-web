"use client";

import { useState } from "react";

type Props = {
  eventSlug: string;
  eventTitle: string;
};

export default function EventRsvpForm({ eventSlug, eventTitle }: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/api/os/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventSlug,
          fullName,
          email,
          phone: phone || undefined,
          college: college || undefined,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Registration failed");
        return;
      }
      setStatus("ok");
      setMessage(
        data.message ??
          "Registration received: pending chapter approval. Check your email.",
      );
    } catch {
      setStatus("error");
      setMessage("Network error: please try again shortly.");
    }
  }

  if (status === "ok") {
    return (
      <div className="border-2 border-graphite bg-flame/10 p-5 rounded-lg shadow-[4px_4px_0px_0px_#2d2d34]">
        <p className="font-mono text-xs uppercase text-flame font-bold mb-2">
          RSVP submitted
        </p>
        <p className="font-mono text-sm text-graphite">{message}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border-2 border-graphite p-5 rounded-lg shadow-[4px_4px_0px_0px_#2d2d34] space-y-3"
    >
      <div>
        <p className="font-mono text-xs uppercase text-flame font-bold mb-1">
          Register for {eventTitle}
        </p>
        <p className="font-hand text-olive text-sm">
          Lands in the chapter approval queue on Elevates OS.
        </p>
      </div>
      <input
        required
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Full name"
        className="w-full border-2 border-graphite rounded-md px-3 py-2 font-mono text-sm bg-paper"
      />
      <input
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full border-2 border-graphite rounded-md px-3 py-2 font-mono text-sm bg-paper"
      />
      <input
        type="tel"
        inputMode="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone number (+91 ...)"
        className="w-full border-2 border-graphite rounded-md px-3 py-2 font-mono text-sm bg-paper"
      />

      <input
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        placeholder="College (optional)"
        className="w-full border-2 border-graphite rounded-md px-3 py-2 font-mono text-sm bg-paper"
      />
      {status === "error" && (
        <p className="font-mono text-xs text-red-700">{message}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-3 bg-flame text-paper font-bold uppercase tracking-wider border-2 border-graphite rounded-lg shadow-[4px_4px_0px_0px_#2d2d34] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#2d2d34] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all disabled:opacity-60"
      >
        {status === "loading" ? "Submitting…" : "Request seat →"}
      </button>
    </form>
  );
}
