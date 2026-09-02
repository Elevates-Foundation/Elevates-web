/**
 * Unified CMS Data Access Layer for ELEVATES Web.
 *
 * Architecture:
 * - Every data getter first queries the live Elevates OS / Headless CMS API (if enabled).
 * - Falls back to verified local Markdown or static JSON files if offline or building statically.
 * - Supports on-demand tag revalidation via `/api/revalidate` webhooks.
 */

export * from "./blog";
export * from "./events";
export * from "./projects";
export * from "./chapters";
export * from "./peer-labs";
export * from "./team";
export * from "./stats";
