import { Fragment, type ReactNode } from "react";

const LINK = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|mailto:[^\s)]+)\)/g;

export function Inline({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  let key = 0;

  for (const match of text.matchAll(LINK)) {
    const index = match.index ?? 0;
    if (index > last) nodes.push(text.slice(last, index));
    const label = match[1] ?? "";
    const href = match[2] ?? "";
    nodes.push(
      <a key={key} href={href}>
        {label}
      </a>,
    );
    key += 1;
    last = index + match[0].length;
  }

  if (last < text.length) nodes.push(<Fragment key="tail">{text.slice(last)}</Fragment>);
  return <>{nodes}</>;
}
