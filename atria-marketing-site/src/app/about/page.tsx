import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CircleDashed,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { audienceSegments, testimonials, trustSignals } from "@/content/siteContent";

const whyAtria = [
  "Platform + devices + logistics + care coordination + support + revenue cycle services in one model",
  "Built for operational reliability across clinics, hospitals, and physician groups",
  "Designed to reduce internal workload while improving patient and financial outcomes",
];

const operatingPrinciples = [
  {
    title: "Execution over handoffs",
    detail:
      "We reduce fragmentation by running connected workflows instead of pushing complex operations back to your staff.",
  },
  {
    title: "Patient simplicity first",
    detail:
      "Out-of-box patient experiences and proactive support reduce friction and increase participation.",
  },
  {
    title: "Clinical and financial alignment",
    detail:
      "Programs are structured so care quality, documentation discipline, and reimbursement readiness move together.",
  },
  {
    title: "Trust through transparency",
    detail:
      "Clear processes, audit-friendly documentation, and accountable support teams build long-term confidence.",
  },
];

const serviceModelComparison = [
  {
    category: "Delivery model",
    typicalVendor: "Software platform only",
    atria: "End-to-end operating partner",
  },
  {
    category: "Operational support",
    typicalVendor: "Limited onboarding",
    atria: "Continuous operations and escalation support",
  },
  {
    category: "Patient assistance",
    typicalVendor: "Basic help channels",
    atria: "24/7 patient and technical support",
  },
  {
    category: "Revenue workflow support",
    typicalVendor: "Documentation templates",
    atria: "Integrated revenue cycle workflow support",
  },
];

export default function AboutPage() {
  const renderComparisonValue = (value: string, emphasize = false) => {
    if (emphasize) {
      return (
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-900">
          <BadgeCheck className="h-3.5 w-3.5" />
          {value}
        </span>
      );
    }

    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
        <CircleDashed className="h-3.5 w-3.5" />
        {value}
      </span>
    );
  };

  return (
    <div className="mx-auto max-w-6xl space-y-14 px-6 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="About Atria"
          title="Built to help care teams scale without operational chaos"
          description="Atria is built around one principle: healthcare organizations should not have to choose between growth, quality, and operational sanity."
        />
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 to-cyan-800 p-8 text-white shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-2xl font-semibold">Who we are</h2>
              <p className="mt-3 max-w-3xl text-sm text-slate-100">
                We help healthcare organizations launch and scale RPM, RTM, CCM, and cardiac pathways
                with a complete service model that combines technology, people, and execution.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full border border-cyan-300/60 bg-cyan-500/10 px-3 py-1 text-cyan-100">
                  End-to-end operating model
                </span>
                <span className="rounded-full border border-cyan-300/60 bg-cyan-500/10 px-3 py-1 text-cyan-100">
                  Clinical + operational + billing alignment
                </span>
                <span className="rounded-full border border-cyan-300/60 bg-cyan-500/10 px-3 py-1 text-cyan-100">
                  24/7 patient and technical support
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300"
                >
                  Talk to our team <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex rounded-full border border-slate-500 bg-slate-950/30 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300"
                >
                  Explore full services model
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-600 bg-slate-800/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Why organizations choose Atria
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-100">
                {whyAtria.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2">
              <HeartHandshake className="h-5 w-5 text-cyan-700" />
              <h2 className="text-xl font-semibold text-slate-900">Who we serve</h2>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {audienceSegments.map((segment) => (
                <li key={segment} className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                  {segment}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-cyan-700" />
              <h2 className="text-xl font-semibold text-slate-900">Trust commitments</h2>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              {trustSignals.map((signal) => (
                <li key={signal} className="flex items-start gap-2">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                  {signal}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">How we are different from typical vendors</h2>
          <p className="mt-2 text-sm text-slate-600">
            The difference is not just software capability, but accountable execution across the full model.
          </p>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-[680px] w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Typical vendor</th>
                  <th className="px-4 py-3">Atria</th>
                </tr>
              </thead>
              <tbody>
                {serviceModelComparison.map((row) => (
                  <tr key={row.category} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-900">{row.category}</td>
                    <td className="px-4 py-3">{renderComparisonValue(row.typicalVendor)}</td>
                    <td className="px-4 py-3">{renderComparisonValue(row.atria, true)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <div className="flex items-center gap-2">
            <Workflow className="h-5 w-5 text-cyan-700" />
            <h2 className="text-2xl font-semibold text-slate-900">Our operating principles</h2>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {operatingPrinciples.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">What teams say</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-slate-700">&ldquo;{item.quote}&rdquo;</p>
                <footer className="mt-4 text-sm font-semibold text-slate-900">{item.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold">Ready to evaluate Atria for your organization?</h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-200">
            We can map your goals, staffing reality, and target programs into a practical execution plan.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300"
            >
              Book a strategy conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
