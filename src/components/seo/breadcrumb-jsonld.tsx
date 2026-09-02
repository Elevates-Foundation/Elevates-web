import { getBreadcrumbSchema, ELEVATES_BASE_URL } from "@/lib/schema/organization";

interface BreadcrumbItem {
  name: string;
  /** Path relative to base URL, e.g. "/chapters" or "/chapters/ekc" */
  path: string;
}

interface BreadcrumbJsonLdProps {
  items: BreadcrumbItem[];
}

/**
 * Server component that renders BreadcrumbList structured data.
 * Pass an array of { name, path } pairs from root to current page.
 *
 * Usage:
 * ```tsx
 * <BreadcrumbJsonLd items={[
 *   { name: "Home", path: "/" },
 *   { name: "Chapters", path: "/chapters" },
 *   { name: "EKC", path: "/chapters/eranad-knowledge-city" },
 * ]} />
 * ```
 */
export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const data = getBreadcrumbSchema(
    items.map((item) => ({
      name: item.name,
      url: `${ELEVATES_BASE_URL}${item.path}`,
    }))
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
