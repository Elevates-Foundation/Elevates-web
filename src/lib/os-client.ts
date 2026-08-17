/**
 * Elevates OS public API client for Elevates-web.
 * Falls back to static src/data when OS is down or USE_LIVE_DATA is off.
 */

const BASE = process.env.OS_API_URL; // https://os.elevates.live/api/public/v1

export function isLiveDataEnabled() {
  return (
    process.env.NEXT_PUBLIC_USE_LIVE_DATA === "true" ||
    process.env.NEXT_PUBLIC_USE_LIVE_DATA === "1"
  );
}

export async function osGet<T>(
  path: string,
  tags: string[] = [],
): Promise<T | null> {
  if (!BASE || !isLiveDataEnabled()) return null;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000); // 5s max wait
  try {
    const res = await fetch(`${BASE}${path}`, {
      headers: {
        "x-elevates-client": "web",
        Accept: "application/json",
      },
      next: { revalidate: 300, tags },
      signal: controller.signal,
    });
    clearTimeout(timeout);
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    clearTimeout(timeout);
    return null;
  }
}

export async function osPost<T>(
  path: string,
  body: unknown,
): Promise<{ ok: true; data: T } | { ok: false; error: string; status?: number }> {
  if (!BASE) {
    return { ok: false, error: "OS_API_URL not configured" };
  }
  try {
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      "x-elevates-client": "web",
    };
    const token = process.env.OS_API_TOKEN;
    if (token) headers["x-elevates-token"] = token;

    const res = await fetch(`${BASE}${path}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      cache: "no-store",
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      return {
        ok: false,
        error: (data as { error?: string }).error ?? `OS ${path} → ${res.status}`,
        status: res.status,
      };
    }
    return { ok: true, data: data as T };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}
