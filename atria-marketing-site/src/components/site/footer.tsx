import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-white">Atria Health</p>
          <p className="mt-2 max-w-xl text-sm text-slate-300">
            End-to-end remote monitoring operations for clinics, hospitals, and
            physician groups.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-5 text-sm">
          <Link href="/platform">Platform</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/services">Services</Link>
          <Link href="/reimbursement-roi">ROI</Link>
          <Link href="/contact">Book Demo</Link>
        </div>
      </div>
    </footer>
  );
}
