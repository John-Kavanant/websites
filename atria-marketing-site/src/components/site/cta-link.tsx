"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/analytics";

type CtaLinkProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
  eventName?: string;
};

export function CtaLink({
  href,
  label,
  variant = "primary",
  eventName = "cta_click",
}: CtaLinkProps) {
  const classes =
    variant === "primary"
      ? "bg-slate-900 text-white hover:-translate-y-0.5 hover:bg-slate-700 hover:shadow-md"
      : "border border-slate-300 text-slate-800 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-sm";

  return (
    <Link
      href={href}
      onClick={() => trackEvent(eventName, { label, href })}
      className={`rounded-full px-5 py-3 text-sm font-semibold transition duration-200 ${classes}`}
    >
      {label}
    </Link>
  );
}
