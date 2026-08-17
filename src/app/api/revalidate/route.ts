import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let body: { tags?: string[]; secret?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || body.secret !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const tags = body.tags ?? [];
  for (const tag of tags) {
    // Next.js 16 cache tag invalidation
    try {
      revalidateTag(tag, { expire: 0 });
    } catch {
      // fallback if signature differs
      (revalidateTag as unknown as (t: string) => void)(tag);
    }
  }

  return NextResponse.json({ revalidated: true, tags });
}
