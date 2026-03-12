"use client";

import { CtaLink } from "@/components/site/cta-link";

export function StickyDemoCta() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 hidden md:block">
      <div className="pointer-events-auto rounded-full border border-slate-200 bg-white/95 p-2 shadow-lg backdrop-blur">
        <CtaLink href="/contact" label="Book Demo" eventName="sticky_demo_cta_click" />
      </div>
    </div>
  );
}
