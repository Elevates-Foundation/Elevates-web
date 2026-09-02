import fs from "fs";
import path from "path";
import { osGet } from "@/lib/os-client";

export interface BlogPost {
  slug: string;
  title: string;
  headline: string;
  excerpt: string;
  category: "Manifesto" | "Ecosystem Guide" | "Comparison" | "Engineering";
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    founderId: string;
    avatar: string;
  };
  tags: string[];
  contentHtml: string;
  rawMarkdown: string;
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

/**
 * Lightweight frontmatter and markdown parser (zero external dependency).
 */
function parseMarkdownFile(fileContent: string, slug: string): BlogPost {
  const frontmatterRegex = /^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]+([\s\S]*)$/;
  const match = frontmatterRegex.exec(fileContent);

  const metadata: Record<string, string | string[]> = {};
  let body = fileContent;

  if (match) {
    const rawFrontmatter = match[1];
    body = match[2];

    const lines = rawFrontmatter.split("\n");
    for (const line of lines) {
      const colonIndex = line.indexOf(":");
      if (colonIndex !== -1) {
        const key = line.slice(0, colonIndex).trim();
        let val = line.slice(colonIndex + 1).trim();

        // Handle JSON array (e.g. tags: ["a", "b"])
        if (val.startsWith("[") && val.endsWith("]")) {
          try {
            metadata[key] = JSON.parse(val.replace(/'/g, '"'));
          } catch {
            metadata[key] = val
              .slice(1, -1)
              .split(",")
              .map((s) => s.trim().replace(/^["']|["']$/g, ""));
          }
        } else {
          // Remove wrapping quotes
          val = val.replace(/^["']|["']$/g, "");
          metadata[key] = val;
        }
      }
    }
  }

  return {
    slug,
    title: (metadata.title as string) || slug,
    headline: (metadata.headline as string) || "",
    excerpt: (metadata.excerpt as string) || "",
    category: ((metadata.category as string) || "Manifesto") as BlogPost["category"],
    date: (metadata.date as string) || "2026-01-01",
    readTime: (metadata.readTime as string) || "5 min read",
    author: {
      name: (metadata.authorName as string) || "ELEVATES Builder",
      role: (metadata.authorRole as string) || "Core Team",
      founderId: (metadata.authorFounderId as string) || "sarhan-qadir-kvm",
      avatar: (metadata.authorAvatar as string) || "/images/founders/sarhan-qadir.jpeg",
    },
    tags: Array.isArray(metadata.tags) ? metadata.tags : ["Community", "Kerala Tech"],
    contentHtml: convertMarkdownToHtml(body),
    rawMarkdown: body,
  };
}

/**
 * Basic semantic Markdown to HTML converter for blogs.
 */
function convertMarkdownToHtml(md: string): string {
  let html = md
    // Bold
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    // Italic
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    // Blockquote
    .replace(/^>\s+(.*)$/gm, '<blockquote class="my-6 bg-graphite text-paper p-6 rounded-sm border-3 border-graphite shadow-[6px_6px_0px_0px_rgba(242,100,48,1)]"><p class="font-mono font-bold text-base sm:text-lg text-flame leading-snug">&ldquo;$1&rdquo;</p></blockquote>')
    // Headings
    .replace(/^### (.*$)/gm, '<h3 class="text-xl sm:text-2xl font-black uppercase tracking-tight text-graphite mt-6 mb-3">$1</h3>')
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl sm:text-3xl font-black uppercase tracking-tight text-graphite pt-6 border-b-2 border-graphite/20 pb-2 mb-4">$1</h2>')
    // Unordered list items
    .replace(/^\s*-\s+(.*)$/gm, '<li class="ml-4 list-disc">$1</li>')
    // Horizontal rule
    .replace(/^---$/gm, '<hr class="my-8 border-t-2 border-dashed border-graphite/20" />');

  // Convert double newlines to paragraphs (skip blockquotes, headings, lists, tables)
  const paragraphs = html.split(/\n\n+/);
  html = paragraphs
    .map((block) => {
      block = block.trim();
      if (!block) return "";
      if (
        block.startsWith("<h2") ||
        block.startsWith("<h3") ||
        block.startsWith("<blockquote") ||
        block.startsWith("<hr") ||
        block.startsWith("<table")
      ) {
        return block;
      }
      if (block.includes("<li")) {
        return `<ul class="space-y-2 my-4">${block}</ul>`;
      }
      // Table check
      if (block.includes("|")) {
        return renderMarkdownTable(block);
      }
      return `<p class="leading-relaxed mb-4">${block}</p>`;
    })
    .join("\n");

  return html;
}

function renderMarkdownTable(tableBlock: string): string {
  const lines = tableBlock.trim().split("\n").filter((l) => l.includes("|"));
  if (lines.length < 2) return tableBlock;

  const parseRow = (line: string) =>
    line
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim());

  const headers = parseRow(lines[0]);
  const rows = lines.slice(2).map(parseRow);

  return `
    <div class="overflow-x-auto my-6 border-3 border-graphite rounded-sm shadow-[4px_4px_0px_0px_rgba(45,45,52,1)]">
      <table class="w-full text-left font-mono text-xs sm:text-sm">
        <thead class="bg-graphite text-paper">
          <tr>
            ${headers.map((h) => `<th class="p-3 font-bold uppercase">${h}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row, rIdx) => `
              <tr class="${rIdx % 2 === 0 ? "bg-paper" : "bg-paper/60"}">
                ${row.map((cell) => `<td class="p-3 border-t border-graphite/20">${cell}</td>`).join("")}
              </tr>`,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

/**
 * CMS layer for blog posts:
 * 1. Checks live Elevates OS API first if configured (future admin panel / headless CMS).
 * 2. Falls back to local Markdown files in /content/blog.
 */
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // 1. Live CMS check (Elevates OS)
  const live = await osGet<{ posts: BlogPost[] }>("/blog", ["blog"]);
  if (live?.posts?.length) {
    return live.posts;
  }

  // 2. Local Markdown fallback
  try {
    if (!fs.existsSync(BLOG_DIR)) return [];
    const files = fs.readdirSync(BLOG_DIR);
    const mdFiles = files.filter((f) => f.endsWith(".md"));

    const posts: BlogPost[] = mdFiles.map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(BLOG_DIR, filename);
      const fileContent = fs.readFileSync(fullPath, "utf-8");
      return parseMarkdownFile(fileContent, slug);
    });

    // Sort newest first
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (err) {
    console.error("Error reading blog markdown files:", err);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // 1. Live CMS check
  const live = await osGet<BlogPost>(`/blog/${slug}`, ["blog", `blog-${slug}`]);
  if (live) return live;

  // 2. Local Markdown fallback
  try {
    const fullPath = path.join(BLOG_DIR, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    const fileContent = fs.readFileSync(fullPath, "utf-8");
    return parseMarkdownFile(fileContent, slug);
  } catch (err) {
    console.error(`Error reading blog post ${slug}:`, err);
    return null;
  }
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  return posts.map((p) => p.slug);
}
