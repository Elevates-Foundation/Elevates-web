import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.elevates.live";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/auth/", "/verify/", "/pitch-2026/", "/elevates-for-colleges-pdf/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "cohere-ai",
        ],
        allow: ["/", "/llms.txt", "/llms-full.txt", "/what-is-elevates", "/faq", "/history", "/founders"],
        disallow: ["/api/", "/auth/", "/verify/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
