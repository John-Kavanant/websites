"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type ServiceJourneyStep = {
  key: string;
  title: string;
  owner: string;
  description: string;
  outcome: string;
};

type ServicesJourneyRailProps = {
  steps: readonly ServiceJourneyStep[];
};

export function ServicesJourneyRail({ steps }: ServicesJourneyRailProps) {
  const [activeStep, setActiveStep] = useState(steps[0]?.key ?? "");
  const selected = steps.find((step) => step.key === activeStep) ?? steps[0];

  if (!selected) return null;

  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">Operating sequence</p>
        <div className="mt-4 space-y-2">
          {steps.map((step, index) => {
            const active = step.key === selected.key;
            return (
              <button
                key={step.key}
                type="button"
                onClick={() => setActiveStep(step.key)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition ${
                  active ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                <span
                  className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                    active ? "bg-white text-slate-900" : "bg-white text-slate-700"
                  }`}
                >
                  {index + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold">{step.title}</p>
                  <p className={`text-xs ${active ? "text-slate-200" : "text-slate-500"}`}>{step.owner}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <motion.article
        key={selected.key}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      >
        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">{selected.owner}</p>
        <h3 className="mt-2 text-xl font-semibold text-slate-900">{selected.title}</h3>
        <p className="mt-3 text-sm text-slate-600">{selected.description}</p>
        <div className="mt-5 rounded-xl border border-cyan-100 bg-cyan-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-cyan-800">Why it matters</p>
          <p className="mt-1 text-sm text-cyan-950">{selected.outcome}</p>
        </div>
      </motion.article>
    </div>
  );
}
