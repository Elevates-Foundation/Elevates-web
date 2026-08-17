import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  // 1. If accessed via any *.vercel.app domain, 301 redirect immediately to primary custom domain
  if (host.includes("vercel.app")) {
    const primaryUrl = `https://www.elevates.live${url.pathname}${url.search}`;
    const response = NextResponse.redirect(primaryUrl, 301);
    // Tell crawlers not to index any vercel.app subdomain
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    return response;
  }

  // 2. If accessed via apex domain elevates.live (without www), 301 redirect to www.elevates.live
  if (host === "elevates.live") {
    return NextResponse.redirect(`https://www.elevates.live${url.pathname}${url.search}`, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except static files & system routes
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
