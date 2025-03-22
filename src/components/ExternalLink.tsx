import { ReactNode } from "react";

export default function ExternalLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 underline hover:opacity-80 font-semibold"
    >
      {children}
      <span aria-hidden>↗</span>
    </a>
  );
}
