import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleDashed, Sparkles, TrendingUp, XCircle } from "lucide-react";

import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { ServicesJourneyRail } from "@/components/site/services-journey-rail";
import { ServicesRoleTabs } from "@/components/site/services-role-tabs";
import {
  serviceComparisonRows,
  serviceImpactPoints,
  serviceJourneySteps,
  serviceKpis,
  serviceModelSummary,
  serviceRoleViews,
  services,
} from "@/content/siteContent";

export default function ServicesPage() {
  const renderComparisonValue = (value: boolean | string, emphasize = false) => {
    if (typeof value === "boolean") {
      return (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold ${
            value
              ? "border border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border border-rose-200 bg-rose-50 text-rose-700"
          }`}
        >
          {value ? <CheckCircle2 className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />}
          {value ? "Included" : "Not included"}
        </span>
      );
    }

    const toneClass = value === "Partial" || value === "Limited" || value === "Basic"
      ? "border border-amber-200 bg-amber-50 text-amber-800"
      : "border border-slate-200 bg-slate-50 text-slate-700";

    if (typeof value === "string") {
      return (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold ${
            emphasize ? "border border-cyan-200 bg-cyan-50 text-cyan-900" : toneClass
          }`}
        >
          {emphasize ? <CheckCircle2 className="h-3.5 w-3.5" /> : <CircleDashed className="h-3.5 w-3.5" />}
          {value}
        </span>
      );
    }

    return null;
  };

  return (
    <div className="mx-auto max-w-6xl space-y-14 px-6 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Services"
          title="A complete service suite that most vendors do not provide"
          description="Atria delivers operational ownership across care coordination, support, logistics, and billing so your teams can focus on patient care."
        />
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 to-cyan-800 p-8 text-white shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-2xl font-semibold">More than software. A true operating partner.</h2>
              <p className="mt-3 max-w-3xl text-sm text-slate-100">
                Most monitoring vendors stop at platform access. Atria combines platform, devices,
                logistics, care coordination, support, and revenue cycle workflows in one unified model.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full border border-cyan-300/60 bg-cyan-500/10 px-3 py-1 text-cyan-100">
                  24/7 support operations
                </span>
                <span className="rounded-full border border-cyan-300/60 bg-cyan-500/10 px-3 py-1 text-cyan-100">
                  Certified cardiac technicians
                </span>
                <span className="rounded-full border border-cyan-300/60 bg-cyan-500/10 px-3 py-1 text-cyan-100">
                  End-to-end billing workflows
                </span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300"
                >
                  Discuss your service model <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/reimbursement-roi"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-500 bg-slate-950/30 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300"
                >
                  Explore reimbursement and ROI <TrendingUp className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-600 bg-slate-800/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                Service model highlights
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-100">
                {serviceModelSummary.map((item) => (
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
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceKpis.map((kpi) => (
            <article key={kpi.label} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-2xl font-semibold text-slate-900">{kpi.value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">{kpi.label}</p>
              <p className="mt-2 text-xs text-slate-600">{kpi.detail}</p>
            </article>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Typical vendor vs Atria services</h2>
          <p className="mt-2 text-sm text-slate-600">
            This is where practices feel the difference in day-to-day operations and revenue consistency.
          </p>
          <div className="mt-4 rounded-xl border border-cyan-100 bg-cyan-50 p-3 text-sm text-cyan-900">
            Common gaps in support, logistics, and billing ownership are where teams lose time and revenue quality.
          </div>
          <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-[680px] w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Service component</th>
                  <th className="px-4 py-3">Typical vendor</th>
                  <th className="px-4 py-3">Atria</th>
                </tr>
              </thead>
              <tbody>
                {serviceComparisonRows.map((row) => (
                  <tr key={row.category} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-900">{row.category}</td>
                    <td className="px-4 py-3 text-slate-700">{renderComparisonValue(row.typicalVendor)}</td>
                    <td className="px-4 py-3 font-semibold text-cyan-800">
                      {renderComparisonValue(row.atria, true)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Service operating sequence</h2>
          <p className="text-sm text-slate-600">
            A connected flow that links enrollment, support, escalation, billing, and optimization.
          </p>
          <ServicesJourneyRail steps={serviceJourneySteps} />
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">What changes by role</h2>
          <p className="text-sm text-slate-600">
            See how providers, managers, billing teams, and patient support staff experience the model.
          </p>
          <ServicesRoleTabs views={serviceRoleViews} />
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h2 className="text-2xl font-semibold text-slate-900">Complete services delivered by Atria</h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <h2 className="text-lg font-semibold text-slate-900">{service.title}</h2>
                <p className="mt-2 text-sm text-slate-600">{service.detail}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid gap-5 md:grid-cols-2">
          {serviceImpactPoints.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-cyan-700" />
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
            </article>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold">Want a service blueprint for your organization?</h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-200">
            We can map your staffing model, target programs, and billing workflow into a practical rollout plan.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300"
            >
              Book a services strategy demo
            </Link>
            <Link
              href="/reimbursement-roi"
              className="inline-flex rounded-full border border-slate-600 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300"
            >
              Review program reimbursement assumptions
            </Link>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
