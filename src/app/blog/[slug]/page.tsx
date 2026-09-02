import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { ELEVATES_BASE_URL, organizationRef } from "@/lib/schema/organization";
import { getAllBlogSlugs, getBlogPostBySlug } from "@/lib/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | ELEVATES",
    };
  }

  const title = `${post.title} | ELEVATES`;
  const description = post.excerpt;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      url: `${ELEVATES_BASE_URL}/blog/${post.slug}`,
      images: [
        {
          url: `${ELEVATES_BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${ELEVATES_BASE_URL}/og-image.png`],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${ELEVATES_BASE_URL}/blog/${post.slug}#article`,
    headline: post.title,
    alternativeHeadline: post.headline,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      url: `${ELEVATES_BASE_URL}/founders/${post.author.founderId}`,
    },
    publisher: organizationRef(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${ELEVATES_BASE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
  };

  return (
    <main className="min-h-screen bg-paper text-graphite pt-36 md:pt-40 pb-24 px-6 md:px-12 max-w-4xl mx-auto selection:bg-flame selection:text-paper">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="mb-8 font-mono text-xs text-olive flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:underline">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:underline">Blog</Link>
        <span>/</span>
        <span className="text-graphite font-bold truncate max-w-xs sm:max-w-md">
          {post.title}
        </span>
      </nav>

      {/* Article Header */}
      <header className="mb-12 border-b-4 border-graphite pb-8">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-paper bg-flame px-3 py-1 font-bold rounded-sm rotate-[-1deg]">
            {post.category}
          </span>
          <span className="font-mono text-xs text-olive font-bold">
            // {post.readTime}
          </span>
          <span className="font-mono text-xs text-olive">
            // {post.date}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-graphite mb-4 leading-tight">
          {post.title}
        </h1>

        <p className="font-hand text-xl md:text-2xl text-flame leading-relaxed mb-6">
          {post.headline}
        </p>

        {/* Author Card */}
        <div className="flex items-center gap-4 pt-4 border-t-2 border-dashed border-graphite/20 font-mono text-xs">
          <div className="w-12 h-12 rounded-sm border-2 border-graphite overflow-hidden relative shrink-0 shadow-[2px_2px_0px_0px_rgba(45,45,52,1)] bg-olive/10">
            <Image
              src={post.author.avatar}
              alt={`${post.author.name} — ${post.author.role}`}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <div>
            <Link
              href={`/founders/${post.author.founderId}`}
              className="text-graphite font-bold hover:text-flame underline"
            >
              {post.author.name} ↗
            </Link>
            <p className="text-olive">{post.author.role}</p>
          </div>
        </div>
      </header>

      {/* Rendered HTML from Markdown / CMS */}
      <article
        className="font-sans text-base sm:text-lg text-graphite/90 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />

      {/* Tags */}
      <div className="pt-8 mt-12 border-t-2 border-graphite/20 flex items-center gap-2 flex-wrap font-mono text-xs">
        <span className="text-olive font-bold uppercase">Topics:</span>
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="bg-graphite/5 border border-graphite/30 px-2.5 py-1 rounded-sm text-graphite"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Back to Blog CTA */}
      <div className="mt-14 pt-8 border-t-4 border-graphite flex items-center justify-between gap-4 font-mono text-xs">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 font-bold text-graphite hover:text-flame underline"
        >
          ← Back to all essays
        </Link>
        <Link
          href="/chapters"
          className="bg-flame text-paper font-bold px-4 py-2 rounded-sm border-2 border-graphite shadow-[2px_2px_0px_0px_rgba(45,45,52,1)] hover:bg-graphite transition-all uppercase"
        >
          Start an ELEVATES Chapter ↗
        </Link>
      </div>
    </main>
  );
}
