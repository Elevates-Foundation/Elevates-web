import { getGlobalSchemaGraph } from "@/lib/schema/organization";

/**
 * Server component that renders the global Organization + WebSite JSON-LD.
 * Include in the root layout so every page inherits the entity definition.
 */
export function OrganizationJsonLd() {
  const data = getGlobalSchemaGraph();
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
