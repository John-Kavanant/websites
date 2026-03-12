import Link from "next/link";
import { CheckCircle2, Smartphone, Workflow } from "lucide-react";

import { PlatformExperienceTabs } from "@/components/site/platform-experience-tabs";
import { PlatformPatientFlow } from "@/components/site/platform-patient-flow";
import { PlatformWorkflowMap } from "@/components/site/platform-workflow-map";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import {
  platformHighlights,
  platformComparisonRows,
  platformDifferentiators,
  platformExperienceViews,
  platformKpis,
  platformUsabilityPillars,
  platformWorkflow,
  patientJourneySteps,
} from "@/content/siteContent";

export default function PlatformPage() {
  const renderComparisonCell = (value: string, emphasize = false) => (
    <span className={emphasize ? "font-semibold text-cyan-800" : "text-slate-700"}>
      {value}
    </span>
  );

  return (
    <div className="mx-auto max-w-6xl space-y-14 px-6 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Platform"
          title="Powerful for providers. Effortless for patients."
          description="Atria platform delivers enterprise-grade clinical operations while keeping patient participation simple, frictionless, and reliable."
        />
      </Reveal>

      <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 to-cyan-800 p-8 text-white shadow-sm">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-2xl font-semibold">Zero-setup patient experience</h2>
              <p className="mt-3 max-w-3xl text-sm text-slate-100">
                No pairing. No complex configuration. No Bluetooth troubleshooting. Patients can
                take readings immediately and providers can review them in real time.
              </p>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300"
                >
                  See workflow in live demo
                </Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {platformKpis.map((kpi) => (
                <div key={kpi.label} className="rounded-2xl border border-slate-600 bg-slate-800/60 p-4">
                  <p className="text-xl font-semibold text-white">{kpi.value}</p>
                  <p className="mt-1 text-xs text-slate-200">{kpi.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="mt-8">
          <PlatformPatientFlow steps={patientJourneySteps} />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Built for real-world usability</h2>
            <p className="mt-2 text-sm text-slate-600">
              The platform is structured around practical daily operations, from enrollment and monitoring
              to escalation and reimbursement workflows.
            </p>
            <div className="mt-6 space-y-3">
              {platformUsabilityPillars.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                  <p className="text-sm text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2">
              <Smartphone className="h-5 w-5 text-cyan-700" />
              <h2 className="text-2xl font-semibold text-slate-900">Dynamic patient app</h2>
            </div>
            <p className="mt-3 text-sm text-slate-600">
              The patient experience is not locked to limited templates. App workflows can support
              evolving metric sets, questionnaires, and specialty-specific monitoring models.
            </p>
            <div className="mt-6 space-y-3">
              {platformDifferentiators.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-slate-200 p-4 transition hover:-translate-y-0.5 hover:shadow-sm"
                >
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="space-y-5">
        <Reveal>
          <h2 className="text-2xl font-semibold text-slate-900">Experience the platform by role</h2>
        </Reveal>
        <PlatformExperienceTabs views={platformExperienceViews} />
      </section>

      <section className="space-y-5">
        <Reveal>
          <h2 className="text-2xl font-semibold text-slate-900">What makes Atria different from typical vendors</h2>
        </Reveal>
        <Reveal>
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
              <p className="text-sm font-semibold text-rose-900">Typical vendor path</p>
              <ul className="mt-2 space-y-2 text-sm text-rose-900/90">
                <li>- Software delivered, operations left to internal staff</li>
                <li>- Device and support coordination create workflow friction</li>
                <li>- Billing quality becomes inconsistent under staffing pressure</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
              <p className="text-sm font-semibold text-emerald-900">Atria path</p>
              <ul className="mt-2 space-y-2 text-sm text-emerald-900/90">
                <li>- Platform plus operational ownership across core service layers</li>
                <li>- Faster activation and steadier patient participation</li>
                <li>- Clinical and financial execution remain aligned at scale</li>
              </ul>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Typical vendor</th>
                  <th className="px-4 py-3">Atria platform</th>
                </tr>
              </thead>
              <tbody>
                {platformComparisonRows.map((row) => (
                  <tr key={row.category} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-900">{row.category}</td>
                    <td className="px-4 py-3">{renderComparisonCell(row.typicalVendor)}</td>
                    <td className="px-4 py-3">{renderComparisonCell(row.atria, true)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      <section className="space-y-5">
        <Reveal>
          <h2 className="text-2xl font-semibold text-slate-900">Unified operations and clinical intelligence</h2>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {platformHighlights.map((item) => (
            <Reveal key={item.title}>
              <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.detail}</p>
                <p className="mt-3 rounded-lg bg-cyan-50 p-3 text-sm text-cyan-900">
                  <span className="font-semibold">Usability impact:</span> {item.usability}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
        <Reveal>
          <div className="flex items-center gap-2">
            <Workflow className="h-5 w-5 text-cyan-300" />
            <h2 className="text-2xl font-semibold">End-to-end platform workflow</h2>
          </div>
        </Reveal>
        <div className="mt-6">
          <PlatformWorkflowMap steps={platformWorkflow} />
        </div>
      </section>

      <section className="rounded-3xl border border-cyan-200 bg-cyan-50 p-8">
        <Reveal>
          <h2 className="text-2xl font-semibold text-cyan-900">
            Platform, devices, logistics, care teams, and revenue operations in one model.
          </h2>
          <p className="mt-3 max-w-4xl text-sm text-cyan-900">
            Atria is designed for organizations that need both technical power and practical execution.
            You are not buying disconnected tools. You are deploying a complete monitoring operating system.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
