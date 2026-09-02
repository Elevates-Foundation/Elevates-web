import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ELEVATES_BASE_URL } from "@/lib/schema/organization";
import { getAllBlogPosts } from "@/lib/data/blog";
import Doodle from "@/components/doodle";

export const metadata: Metadata = {
  title: "Stories & Engineering Articles | ELEVATES",
  description:
    "Engineering case studies, Kerala student community comparisons, and the quiet builder philosophy from ELEVATES.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Stories & Engineering Articles | ELEVATES",
    description:
      "Engineering case studies, Kerala student community comparisons, and the quiet builder philosophy from ELEVATES.",
    url: `${ELEVATES_BASE_URL}/blog`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Stories & Engineering Articles | ELEVATES",
    description:
      "Engineering case studies, Kerala student community comparisons, and the quiet builder philosophy from ELEVATES.",
  },
};

export default async function BlogIndexPage() {
  const posts = await getAllBlogPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${ELEVATES_BASE_URL}/blog#page`,
    name: "ELEVATES Stories & Engineering Blog",
    description:
      "Engineering writeups, community guides, and builder essays from the ELEVATES community.",
    url: `${ELEVATES_BASE_URL}/blog`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "BlogPosting",
          "@id": `${ELEVATES_BASE_URL}/blog/${post.slug}`,
          headline: post.title,
          description: post.excerpt,
          datePublished: post.date,
          author: {
            "@type": "Person",
            name: post.author.name,
            url: `${ELEVATES_BASE_URL}/founders/${post.author.founderId}`,
          },
          url: `${ELEVATES_BASE_URL}/blog/${post.slug}`,
        },
      })),
    },
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto selection:bg-flame selection:text-paper">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <span className="text-graphite font-bold">Blog</span>
      </nav>

      {/* Header */}
      <header className="mb-14 border-b-4 border-graphite pb-8 relative">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg] border border-graphite">
            PUBLIC ESSAYS // FIELD NOTES
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // {posts.length} ARTICLES
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-graphite mb-4 leading-none">
          STORIES &amp; <span className="text-flame">ENGINEERING</span>
        </h1>
        <p className="font-hand text-xl md:text-2xl text-olive max-w-3xl leading-relaxed">
          Real case studies, Kerala student community comparisons, and practical notes from building software that matters.
        </p>

        <Doodle
          type="crown"
          color="#f26430"
          className="hidden md:block absolute right-4 top-2 w-20 h-20 opacity-20 pointer-events-none"
        />
      </header>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="border-4 border-graphite rounded-sm bg-paper p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(45,45,52,1)] hover:shadow-[10px_10px_0px_0px_rgba(242,100,48,1)] hover:border-flame hover:-translate-y-1 transition-all duration-150 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs font-bold text-paper bg-graphite px-2.5 py-0.5 rounded-sm uppercase">
                  {post.category}
                </span>
                <span className="font-mono text-xs text-olive font-semibold">
                  {post.readTime}
                </span>
              </div>

              <Link href={`/blog/${post.slug}`} className="group block">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-graphite group-hover:text-flame transition-colors mb-2 leading-snug">
                  {post.title}
                </h2>
                <p className="font-mono text-xs font-bold text-flame mb-3">
                  {post.headline}
                </p>
                <p className="text-sm text-graphite/85 leading-relaxed font-mono mb-6">
                  {post.excerpt}
                </p>
              </Link>
            </div>

            <div className="pt-4 border-t-2 border-dashed border-graphite/20 flex items-center justify-between gap-4 font-mono text-xs">
              <div>
                <span className="text-olive font-bold block">{post.author.name}</span>
                <span className="text-[11px] text-graphite/60">{post.date}</span>
              </div>

              <Link
                href={`/blog/${post.slug}`}
                className="bg-flame text-paper font-bold px-4 py-2 rounded-sm border-2 border-graphite shadow-[2px_2px_0px_0px_rgba(45,45,52,1)] hover:bg-graphite transition-all uppercase tracking-wider"
              >
                Read ↗
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
