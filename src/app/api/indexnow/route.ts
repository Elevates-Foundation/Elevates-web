import { NextResponse } from "next/server";

/**
 * IndexNow API integration for instant search engine URL submission (Bing, Yandex, etc.)
 * Usage:
 * POST /api/indexnow
 * { "urlList": ["https://www.elevates.live/blog/new-article"] }
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const urlList: string[] = body.urlList || [];

    if (!urlList.length) {
      return NextResponse.json(
        { error: "No URLs provided in urlList" },
        { status: 400 }
      );
    }

    const host = "www.elevates.live";
    const key = process.env.INDEXNOW_KEY || "894deca79d944a4ab8f253cb738c330f";
    const keyLocation = `https://${host}/${key}.txt`;

    const payload = {
      host,
      key,
      keyLocation,
      urlList,
    };

    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(payload),
    });

    if (res.ok || res.status === 202) {
      return NextResponse.json({
        success: true,
        submitted: urlList.length,
        status: res.status,
      });
    }

    return NextResponse.json(
      { error: "IndexNow submission failed", status: res.status },
      { status: res.status }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error", details: String(error) },
      { status: 500 }
    );
  }
}
