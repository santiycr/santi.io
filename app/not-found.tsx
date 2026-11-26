import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.notFound.title,
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-[40rem] px-5 py-24 sm:px-6">
      <h1 className="font-display text-4xl tracking-tight">{site.notFound.title}</h1>
      <p className="mt-4 text-[1.075rem] leading-7">{site.notFound.body}</p>
      <p className="mt-6">
        <Link href="/" className="link inline-flex min-h-11 items-center">
          {site.notFound.home}
        </Link>
      </p>
    </main>
  );
}
