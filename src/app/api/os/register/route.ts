import { NextResponse } from "next/server";
import { osPost } from "@/lib/os-client";

export async function POST(req: Request) {
  let body: {
    eventSlug?: string;
    fullName?: string;
    email?: string;
    phone?: string;
    college?: string;
    turnstileToken?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (!body.eventSlug || !body.fullName || !body.email) {
    return NextResponse.json(
      { error: "eventSlug, fullName, and email are required" },
      { status: 400 },
    );
  }

  const result = await osPost<{
    registrationId: string;
    status: string;
    message?: string;
  }>(`/events/${body.eventSlug}/register`, {
    fullName: body.fullName,
    email: body.email,
    phone: body.phone,
    college: body.college,
    turnstileToken: body.turnstileToken,
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error },
      { status: result.status ?? 502 },
    );
  }

  return NextResponse.json(result.data, { status: 201 });
}
