import { NextResponse } from "next/server";
import { osPost } from "@/lib/os-client";

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const type = body.type as string | undefined;

  if (type === "college") {
    const result = await osPost("/leads/college", {
      college: body.college,
      contactName: body.contactName,
      email: body.email,
      phone: body.phone,
      role: body.role,
      message: body.message,
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

  if (type === "join") {
    const result = await osPost("/join", {
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      college: body.college,
      year: body.year,
      interests: body.interests,
      message: body.message,
      chapterSlug: body.chapterSlug,
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

  return NextResponse.json({ error: "Unknown lead type" }, { status: 400 });
}
