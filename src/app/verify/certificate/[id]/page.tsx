import type { Metadata } from "next";
import Link from "next/link";
import { verifyCertificate } from "@/lib/data/stats";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return {
    title: `Certificate ${id}`,
    description: "Verify an ELEVATES event certificate",
    robots: { index: true, follow: true },
  };
}

export default async function VerifyCertificatePage({ params }: Props) {
  const { id } = await params;
  const cert = await verifyCertificate(id);

  return (
    <main className="min-h-screen bg-paper text-graphite pt-32 md:pt-40 pb-24 px-6 md:px-12 max-w-3xl mx-auto">
      <nav className="mb-8 font-mono text-xs text-olive flex items-center gap-2">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <span>/</span>
        <span className="text-graphite font-bold">Verify Certificate</span>
      </nav>

      <div className="bg-paper border-4 border-graphite rounded-sm p-8 md:p-12 shadow-[12px_12px_0px_0px_#2d2d34]">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 font-mono text-xs uppercase font-bold bg-flame/10 text-flame border border-flame rounded-md mb-6">
          <span className="w-2 h-2 rounded-full bg-flame animate-pulse" />
          {cert?.valid ? "Verified" : "Not Found"}
        </span>

        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">
          Certificate Check
        </h1>
        <p className="font-hand text-olive text-lg mb-8">
          Paste this URL on resumes — proof that ships.
        </p>

        {cert?.valid ? (
          <dl className="space-y-4 font-mono text-sm">
            <div className="border-2 border-graphite p-4 rounded-lg shadow-[4px_4px_0px_0px_#2d2d34]">
              <dt className="text-olive uppercase text-xs mb-1">Holder</dt>
              <dd className="text-xl font-bold">{cert.holder}</dd>
            </div>
            <div className="border-2 border-graphite p-4 rounded-lg shadow-[4px_4px_0px_0px_#2d2d34]">
              <dt className="text-olive uppercase text-xs mb-1">Event</dt>
              <dd className="text-lg font-bold">{cert.eventTitle}</dd>
            </div>
            {cert.chapterName && (
              <div className="border-2 border-graphite p-4 rounded-lg shadow-[4px_4px_0px_0px_#2d2d34]">
                <dt className="text-olive uppercase text-xs mb-1">Chapter</dt>
                <dd className="font-bold">{cert.chapterName}</dd>
              </div>
            )}
            <div className="border-2 border-graphite p-4 rounded-lg shadow-[4px_4px_0px_0px_#2d2d34]">
              <dt className="text-olive uppercase text-xs mb-1">Issued</dt>
              <dd>
                {new Date(cert.issuedAt).toLocaleDateString("en-IN", {
                  dateStyle: "long",
                })}
              </dd>
            </div>
            <div className="border-2 border-graphite p-4 rounded-lg shadow-[4px_4px_0px_0px_#2d2d34]">
              <dt className="text-olive uppercase text-xs mb-1">ID</dt>
              <dd className="break-all">{cert.certificateId}</dd>
            </div>
          </dl>
        ) : (
          <div className="border-2 border-graphite bg-indigo/5 p-6 rounded-lg">
            <p className="font-bold mb-2">No matching certificate</p>
            <p className="text-sm text-olive font-mono">
              ID <code>{id}</code> was not found. Check the QR / URL, or ask
              your chapter secretary.
            </p>
          </div>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/events"
            className="px-6 py-3 bg-flame text-paper font-bold uppercase tracking-wider border-2 border-graphite rounded-lg shadow-[4px_4px_0px_0px_#2d2d34] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#2d2d34] transition-all"
          >
            Browse events
          </Link>
          <a
            href={`${process.env.NEXT_PUBLIC_OS_URL ?? "https://os.elevates.live"}/login`}
            className="px-6 py-3 bg-paper text-graphite font-bold uppercase tracking-wider border-2 border-graphite rounded-lg shadow-[4px_4px_0px_0px_#2d2d34] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#2d2d34] transition-all"
          >
            Sign in to OS
          </a>
        </div>
      </div>
    </main>
  );
}
