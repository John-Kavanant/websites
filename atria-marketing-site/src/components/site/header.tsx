"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

import { navLinks } from "@/content/siteContent";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-3 text-xl font-semibold text-slate-900">
          <Image
            src="/Atria%20Logo.png"
            alt="Atria Health logo"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span>Atria Health</span>
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-md border border-slate-200 p-2.5 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <Menu className="h-5 w-5 text-slate-700" />
        </button>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base transition ${
                  isActive
                    ? "font-semibold text-slate-900"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-base font-semibold text-white transition hover:bg-slate-700"
          >
            Book Demo
          </Link>
        </nav>
      </div>

      {open ? (
        <div className="border-t border-slate-200 px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-base text-slate-700 hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
