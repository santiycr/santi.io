import type { ReactNode } from "react";

const LINK = /\[([^\]]+)\]\(([^)]+)\)/g;

function safeHref(href: string): string | null {
  if (
    href.startsWith("https://") ||
    href.startsWith("http://") ||
    href.startsWith("mailto:") ||
    href.startsWith("/") ||
    href.startsWith("#")
  ) {
    return href;
  }
  return null;
}

export function TextLink({
  href,
  children,
  me = false,
}: {
  href: string;
  children: ReactNode;
  me?: boolean;
}) {
  const external = href.startsWith("http://") || href.startsWith("https://");
  const rel = external ? (me ? "me noreferrer" : "noreferrer") : undefined;
  return (
    <a href={href} className="link" rel={rel}>
      {children}
    </a>
  );
}

export function RichText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    const label = match[1];
    const href = safeHref(match[2]);
    nodes.push(
      href ? (
        <TextLink key={`${href}-${index}`} href={href}>
          {label}
        </TextLink>
      ) : (
        label
      ),
    );
    last = index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return <>{nodes}</>;
}
