import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  BarChart3,
  ClipboardCheck,
  FileCheck2,
  HandCoins,
  ShieldAlert,
} from "lucide-react";

import { ReimbursementCptTabs } from "@/components/site/reimbursement-cpt-tabs";
import { Reveal } from "@/components/site/reveal";
import { RoiCalculator } from "@/components/site/roi-calculator";
import { SectionHeading } from "@/components/site/section-heading";
import { revenueDisclaimer } from "@/content/siteContent";

const assumptions = [
  "Illustrative national averages for planning only",
  "Patient eligibility, consent, and program fit must be validated",
  "Monitoring days, documented time, and interaction quality drive claim readiness",
  "Final reimbursement varies by payer contracts, geography, and component split",
] as const;

const documentationGuardrails = [
  {
    level: "must-have",
    title: "Eligibility and consent evidence",
    detail: "Maintain clear documentation for program qualification and patient consent.",
  },
  {
    level: "must-have",
    title: "Time and interaction tracking",
    detail:
      "Capture monthly time thresholds and required interactions aligned to applicable codes.",
  },
  {
    level: "recommended",
    title: "Workflow QA before billing run",
    detail:
      "Run monthly quality checks for missing notes, duplicate submissions, and documentation gaps.",
  },
  {
    level: "context-dependent",
    title: "Payer-specific code pathway mapping",
    detail: "Validate local payer policies for code family selection and component ownership.",
  },
] as const;

const calculatorFlow = [
  {
    title: "Set per-program enrollment",
    detail: "Model RPM, RTM, CCM, and Cardiac independently to match your expected mix.",
  },
  {
    title: "Adjust adherence assumptions",
    detail: "Stress-test performance by varying patient adherence and participation levels.",
  },
  {
    title: "Review revenue by service line",
    detail: "See monthly and annual contribution by program instead of only aggregate totals.",
  },
  {
    title: "Validate billing readiness",
    detail: "Use model outputs with coding and compliance checks before operational rollout.",
  },
] as const;

const cptTables = [
  {
    program: "RPM",
    context:
      "RPM reimbursement depends on enrollment quality, transmission continuity, and staff time documentation.",
    pitfall:
      "Submitting management codes without complete monthly interaction and time records can increase denials.",
    rows: [
      {
        code: "99453",
        description: "Initial setup and patient education",
        approx: "$19.90",
      },
      {
        code: "99454",
        description: "Device supply and data transmission period",
        approx: "$50.72 monthly",
      },
      {
        code: "99445",
        description:
          "Remote monitoring of physiologic parameter(s); initial device(s) supply with daily recording(s) or programmed alert(s) transmission, 2-15 days in a 30-day period.",
        approx:
          "New 2026 code; reimbursed at a similar rate to the longer-duration device supply code (payer-specific).",
        isNew: true,
      },
      {
        code: "99457",
        description: "First 20 minutes of monitoring management",
        approx: "$50.18 monthly",
      },
      {
        code: "99470",
        description:
          "Remote physiologic monitoring treatment management services; physician/other qualified health care professional/clinical staff time in a calendar month requiring at least 1 real-time interactive communication; first 10 minutes (for 10-19 minutes total).",
        approx: "New 2026 code; use with existing add-on pathways when applicable.",
        isNew: true,
      },
      {
        code: "99458",
        description: "Each additional 20 minutes",
        approx: "$40.84 each increment",
      },
    ],
  },
  {
    program: "RTM",
    context:
      "RTM pathways rely on treatment-focused monitoring workflows with clear episode documentation.",
    pitfall:
      "Inconsistent tracking of episode activities and communication events can weaken claim support.",
    rows: [
      {
        code: "98975",
        description: "Initial setup and education for RTM episode",
        approx: "$19.38",
      },
      {
        code: "98976/98977",
        description: "Device supply and RTM data collection period",
        approx: "$50.72 monthly",
      },
      {
        code: "98984",
        description:
          "Device(s) supply for data access/transmissions to support monitoring of respiratory system, 2-15 days in a 30-day period.",
        approx: "New 2026 code; payer-specific reimbursement.",
        isNew: true,
      },
      {
        code: "98985",
        description:
          "Device(s) supply for data access/transmissions to support monitoring of musculoskeletal system, 2-15 days in a 30-day period.",
        approx: "New 2026 code; payer-specific reimbursement.",
        isNew: true,
      },
      {
        code: "98980",
        description: "First 20 minutes of RTM treatment management",
        approx: "$50.18 monthly",
      },
      {
        code: "98979",
        description:
          "Remote therapeutic monitoring treatment management services; physician/other qualified health care professional time in a calendar month requiring at least 1 real-time interactive communication; first 10 minutes (for 10-19 minutes).",
        approx: "New 2026 code; use with existing add-on pathways when applicable.",
        isNew: true,
      },
      {
        code: "98981",
        description: "Each additional 20 minutes of RTM management",
        approx: "$40.84 each increment",
      },
    ],
  },
  {
    program: "CCM",
    context:
      "CCM performance is tied to sustained longitudinal engagement and accurate monthly time capture.",
    pitfall:
      "Undocumented or fragmented staff activity can prevent eligible CCM increments from being billed.",
    rows: [
      {
        code: "99490",
        description: "First 20 minutes of CCM clinical staff services",
        approx: "$62.00 monthly",
      },
      {
        code: "99439",
        description: "Each additional 20 minutes of CCM services",
        approx: "$47.00 each increment",
      },
      {
        code: "99487",
        description: "Complex CCM, first 60 minutes",
        approx: "$130.00 monthly",
      },
      {
        code: "99489",
        description: "Complex CCM, each additional 30 minutes",
        approx: "$70.00 each increment",
      },
    ],
  },
  {
    program: "Cardiac",
    context:
      "Cardiac code family selection depends on modality, professional/technical split, and payer rules.",
    pitfall:
      "Using the wrong component split or insufficient interpretation documentation can disrupt reimbursement.",
    studyTables: [
      {
        study: "Mobile Cardiac Telemetry (MCT)",
        rows: [
          {
            code: "93228",
            description: "MCT technical component (global)",
            amount: "$26.61",
            frequency: "Per day",
          },
          {
            code: "93229",
            description: "MCT technical component (global)",
            amount: "$847.16",
            frequency: "Per monitoring period",
          },
        ],
        footnote:
          "*Average Medicare reimbursement. Actual amounts may vary by location and Medicare Administrative Contractor.",
      },
      {
        study: "Holter Monitoring",
        rows: [
          {
            code: "93225",
            description: "Holter monitor hookup",
            amount: "$26.61",
            frequency: "Per service",
          },
          {
            code: "93226",
            description: "Holter scanning and analysis",
            amount: "$37.79",
            frequency: "Per service",
          },
          {
            code: "93227",
            description: "Holter physician review and interpretation",
            amount: "$25.58",
            frequency: "Per service",
          },
        ],
        footnote:
          "*Average Medicare reimbursement. Actual amounts may vary by location and Medicare Administrative Contractor.",
      },
      {
        study: "Event Monitoring",
        rows: [
          {
            code: "93268",
            description: "Event monitor service (global)",
            amount: "$206.35",
            frequency: "Per monitoring period",
          },
          {
            code: "93270",
            description: "Event monitor recording",
            amount: "$9.46",
            frequency: "Per monitoring period",
          },
          {
            code: "93271",
            description: "Event monitor scanning and analysis",
            amount: "$166.14",
            frequency: "Per monitoring period",
          },
          {
            code: "93272",
            description: "Event monitor physician review",
            amount: "$25.58",
            frequency: "Per monitoring period",
          },
        ],
        footnote:
          "*Average Medicare reimbursement. Actual amounts may vary by location and Medicare Administrative Contractor.",
      },
    ],
  },
 ] as const;

const varianceDrivers = [
  {
    title: "Payer mix and contract terms",
    detail:
      "Medicare, Medicaid, and commercial plans can reimburse differently for the same operational workload.",
  },
  {
    title: "Documentation discipline",
    detail:
      "Stronger note quality and cleaner time capture directly improve claim acceptance and predictability.",
  },
  {
    title: "Adherence and engagement quality",
    detail:
      "Enrollment without sustained participation lowers realized revenue versus modeled potential.",
  },
  {
    title: "Operational consistency",
    detail:
      "Reliable outreach, escalation, and monthly QA cycles reduce leakage and variance over time.",
  },
] as const;

const executionTimeline = [
  {
    title: "Baseline and target setting",
    detail: "Define target cohorts, active panels, and expected program mix by specialty.",
  },
  {
    title: "Program and workflow mapping",
    detail: "Align clinical pathways to coding, operations ownership, and documentation checkpoints.",
  },
  {
    title: "Billing readiness setup",
    detail: "Set recurring monthly processes for time capture, quality checks, and handoffs.",
  },
  {
    title: "Go-live and first billing cycle",
    detail: "Track early claim outcomes, identify leakage points, and resolve process bottlenecks.",
  },
  {
    title: "Monthly optimization cadence",
    detail: "Improve adherence, documentation consistency, and service-line contribution over time.",
  },
] as const;

const getGuardrailTone = (level: (typeof documentationGuardrails)[number]["level"]) => {
  if (level === "must-have") {
    return "border border-rose-200 bg-rose-50 text-rose-900";
  }
  if (level === "recommended") {
    return "border border-cyan-200 bg-cyan-50 text-cyan-900";
  }
  return "border border-amber-200 bg-amber-50 text-amber-900";
};

const getGuardrailLabel = (level: (typeof documentationGuardrails)[number]["level"]) => {
  if (level === "must-have") return "Must-have";
  if (level === "recommended") return "Recommended";
  return "Context-dependent";
};

export default function ReimbursementRoiPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-14 px-6 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Reimbursement and ROI"
          title="Align outcomes with a strong financial model"
          description="Estimate potential revenue, communicate assumptions clearly, and operate with compliance-aware workflows."
        />
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 to-cyan-800 p-8 text-white shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-2xl font-semibold">Financial clarity with compliance-aware execution</h2>
              <p className="mt-3 max-w-3xl text-sm text-slate-100">
                Use a realistic planning model, understand reimbursement dependencies, and translate forecasts into reliable billing operations.
              </p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                <span className="rounded-full border border-cyan-300/60 bg-cyan-400/10 px-3 py-1 text-cyan-100">
                  Per-program revenue modeling
                </span>
                <span className="rounded-full border border-cyan-300/60 bg-cyan-400/10 px-3 py-1 text-cyan-100">
                  Adherence-adjusted estimates
                </span>
                <span className="rounded-full border border-cyan-300/60 bg-cyan-400/10 px-3 py-1 text-cyan-100">
                  Billing readiness guardrails
                </span>
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300"
                >
                  Book billing readiness review <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <article className="rounded-2xl border border-slate-600 bg-slate-800/60 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-300">Programs modeled</p>
                <p className="mt-1 text-2xl font-semibold">4</p>
              </article>
              <article className="rounded-2xl border border-slate-600 bg-slate-800/60 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-300">Patient sliders</p>
                <p className="mt-1 text-2xl font-semibold">0-3000</p>
              </article>
              <article className="rounded-2xl border border-slate-600 bg-slate-800/60 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-300">Modeling style</p>
                <p className="mt-1 text-lg font-semibold">Per program + total</p>
              </article>
              <article className="rounded-2xl border border-slate-600 bg-slate-800/60 p-4">
                <p className="text-xs uppercase tracking-wider text-slate-300">Use case</p>
                <p className="mt-1 text-lg font-semibold">Planning, not guarantee</p>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      <RoiCalculator />

      <Reveal>
        <section className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">How to use the calculator effectively</h2>
            <div className="mt-4 grid gap-3">
              {calculatorFlow.map((step, index) => (
                <article key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                    Step {index + 1}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">{step.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{step.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-slate-900">Assumptions and documentation guardrails</h2>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-700">Assumptions</p>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                {assumptions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-cyan-700" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid gap-3">
              {documentationGuardrails.map((guardrail) => (
                <article key={guardrail.title} className="rounded-xl border border-slate-200 bg-white p-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${getGuardrailTone(
                      guardrail.level
                    )}`}
                  >
                    {getGuardrailLabel(guardrail.level)}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-slate-900">{guardrail.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{guardrail.detail}</p>
                </article>
              ))}
            </div>
            <p className="rounded-xl bg-cyan-50 p-4 text-sm text-cyan-900">{revenueDisclaimer}</p>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              CPT references and approximate reimbursement by program
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Explore by program with billing context and common claim-preparation pitfalls.
            </p>
          </div>
          <ReimbursementCptTabs programs={cptTables} />
        </section>
      </Reveal>

      <Reveal>
        <section className="grid gap-5 md:grid-cols-2">
          {varianceDrivers.map((driver) => (
            <article key={driver.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-cyan-700" />
                <h3 className="font-semibold text-slate-900">{driver.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">{driver.detail}</p>
            </article>
          ))}
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">From estimate to execution</h2>
          <p className="mt-2 text-sm text-slate-600">
            A practical sequence for turning modeled ROI into billing-ready operations.
          </p>
          <ol className="mt-6 grid gap-4 md:grid-cols-2">
            {executionTimeline.map((step, index) => (
              <li key={step.title} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm font-semibold text-slate-900">{step.title}</p>
                </div>
                <p className="mt-2 text-sm text-slate-600">{step.detail}</p>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-2xl font-semibold">Need a payer-specific reimbursement blueprint?</h2>
              <p className="mt-2 text-sm text-slate-200">
                Atria can help align your program mix, staffing model, and documentation workflow to improve billing consistency.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300"
                >
                  Get a reimbursement readiness review <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex rounded-full border border-slate-600 bg-slate-800 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-300"
                >
                  Explore service operations model
                </Link>
              </div>
            </div>
            <div className="grid gap-3">
              <div className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-sm text-slate-100">
                <div className="flex items-center gap-2">
                  <ClipboardCheck className="h-4 w-4 text-cyan-300" />
                  Documentation quality controls
                </div>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-sm text-slate-100">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="h-4 w-4 text-cyan-300" />
                  Monthly billing readiness workflow
                </div>
              </div>
              <div className="rounded-xl border border-slate-700 bg-slate-800 p-4 text-sm text-slate-100">
                <div className="flex items-center gap-2">
                  <HandCoins className="h-4 w-4 text-cyan-300" />
                  Revenue leakage reduction focus
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 rounded-xl border border-amber-300/30 bg-amber-500/10 p-3 text-xs text-amber-100">
            <div className="flex items-start gap-2">
              <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                Estimates are planning tools and not payment guarantees. Final reimbursement depends on payer policy and compliant documentation.
              </p>
            </div>
          </div>
          <div className="mt-3 rounded-xl border border-rose-300/30 bg-rose-500/10 p-3 text-xs text-rose-100">
            <div className="flex items-start gap-2">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              <p>
                Always validate final code selection, component ownership, and eligibility requirements with your billing and compliance teams.
              </p>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
