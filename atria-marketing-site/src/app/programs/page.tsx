import Link from "next/link";
import { BookOpen, ShieldCheck, Stethoscope, WalletCards } from "lucide-react";

import { ProgramsCardiacStudiesTabs } from "@/components/site/programs-cardiac-studies-tabs";
import { ProgramsCptExplorer } from "@/components/site/programs-cpt-explorer";
import { ProgramsStickyNav } from "@/components/site/programs-sticky-nav";
import { ProgramsWorkflowLanes } from "@/components/site/programs-workflow-lanes";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { programs, revenueDisclaimer } from "@/content/siteContent";

export default function ProgramsPage() {
  const programAnchors = programs.map((program) => ({
    id: program.slug,
    label: program.name.split(" (")[0],
  }));

  return (
    <div className="mx-auto max-w-6xl space-y-14 px-6 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Programs"
          title="Program education for clinical and operational decision-makers"
          description="Understand each program in depth: clinical purpose, operational model, workflow, and billing references."
        />
      </Reveal>

      <section className="rounded-3xl border border-slate-200 bg-gradient-to-r from-slate-900 to-cyan-800 p-8 text-white shadow-sm">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-2xl font-semibold">Learn before you launch</h2>
            <p className="mt-3 max-w-3xl text-sm text-slate-100">
              This page is designed to help clinics, hospitals, and physician groups evaluate each
              program with clarity: what it does, how it works, what data is involved, and what
              billing pathways may apply.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-600 bg-slate-800/60 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Quick navigation
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {programs.map((program) => (
                <a
                  key={program.slug}
                  href={`#${program.slug}`}
                  className="rounded-full border border-slate-500 px-3 py-1 text-xs font-semibold text-slate-100 hover:border-cyan-300"
                >
                  {program.name.split(" (")[0]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <ProgramsStickyNav programs={programAnchors} />
        <div className="space-y-10">
        {programs.map((program) => {
          const isCardiacProgram = program.slug === "cardiac";

          return (
          <article
            key={program.slug}
            id={program.slug}
            className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">{program.name}</h2>
                <p className="mt-3 text-sm text-slate-600">{program.summary}</p>
                <p className="mt-3 rounded-xl bg-cyan-50 p-4 text-sm text-cyan-900">
                  <span className="font-semibold">What it is:</span> {program.definition}
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">Who it is ideal for</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {program.idealFor.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-cyan-700" />
                <h3 className="font-semibold text-slate-900">Workflow map</h3>
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-semibold text-slate-700">
                  Patient + Provider lanes
                </span>
              </div>
              <ProgramsWorkflowLanes
                patientJourney={program.patientJourney}
                providerWorkflow={program.providerWorkflow}
              />
            </section>

            <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">Data captured</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {program.dataCaptured.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-900"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <h3 className="mt-6 font-semibold text-slate-900">Clinical impact</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {program.outcomes.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-900">What Atria handles</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {program.atriaResponsibilities.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
                <p className="mt-5 rounded-xl bg-cyan-50 p-3 text-sm text-cyan-900">
                  {program.reimbursementNote}
                </p>
              </div>
            </section>

            {program.subStudies && program.subStudies.length > 0 ? (
              <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">
                  Cardiac studies and CPT references
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  The following studies are supported in cardiac pathways with code selection based on
                  payer policy, component split, and documented clinical context.
                </p>
                <div className="mt-5">
                  <ProgramsCardiacStudiesTabs studies={program.subStudies} />
                </div>
              </section>
            ) : null}

            {isCardiacProgram ? (
              <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">
                  Billing guardrails and compliance guidance
                </summary>
                <div className="mt-4 grid gap-3 text-sm text-slate-700">
                  <p>
                    CPT mapping for Holter, MCT, Event Monitoring, and Cardiac Rehab is already shown
                    in the Cardiac Studies section above. Use that section as your primary study-to-code reference.
                  </p>
                  <ul className="space-y-2">
                    <li>- Confirm modality-to-code selection based on payer policy and component split requirements.</li>
                    <li>- Document medical necessity, episode context, and interpretation requirements clearly.</li>
                    <li>- Validate technical vs professional billing ownership before claims submission.</li>
                    <li>- Follow payer-specific guidance for rehab session coding and intensive rehab pathways.</li>
                  </ul>
                </div>
                <p className="mt-4 rounded-xl bg-cyan-50 p-3 text-xs text-cyan-900">{revenueDisclaimer}</p>
              </details>
            ) : (
              <details className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <summary className="cursor-pointer font-semibold text-slate-900">
                  Billing deep dive: CPT references and descriptions
                </summary>
                <div className="mt-4">
                  <ProgramsCptExplorer rows={program.cptTable} />
                </div>
                <p className="mt-4 rounded-xl bg-cyan-50 p-3 text-xs text-cyan-900">{revenueDisclaimer}</p>
              </details>
            )}

            <section className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-cyan-700" />
                  <h3 className="font-semibold text-slate-900">Compliance checkpoints</h3>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {program.complianceNotes.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-cyan-700" />
                  <h3 className="font-semibold text-slate-900">Program FAQ</h3>
                </div>
                <div className="mt-3 space-y-2">
                  {program.faq.map((item) => (
                    <details key={item.question} className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                      <summary className="cursor-pointer text-sm font-semibold text-slate-900">
                        {item.question}
                      </summary>
                      <p className="mt-2 text-sm text-slate-700">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            </section>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-slate-900">
                Want this {program.name.split(" (")[0]} pathway mapped for your organization?
              </p>
              <div className="mt-3">
                <Link
                  href="/contact"
                  className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Get a program blueprint
                </Link>
              </div>
            </div>
          </article>
        )})}
        </div>
      </div>

      <section className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
        <div className="flex items-center gap-2">
          <WalletCards className="h-5 w-5 text-cyan-300" />
          <h2 className="text-2xl font-semibold">Need a payer-specific billing walkthrough?</h2>
        </div>
        <p className="mt-3 max-w-3xl text-sm text-slate-100">
          Atria can map your target programs, staffing model, and documentation workflow into a practical billing readiness plan.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex rounded-full border border-slate-400 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-300"
          >
            Book a program strategy demo
          </Link>
        </div>
      </section>
    </div>
  );
}
