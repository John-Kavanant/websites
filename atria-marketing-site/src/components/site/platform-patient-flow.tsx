"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type Step = {
  title: string;
  detail: string;
};

type PlatformPatientFlowProps = {
  steps: Step[];
};

export function PlatformPatientFlow({ steps }: PlatformPatientFlowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="space-y-5">
      <div className="grid gap-3 md:grid-cols-3">
        {steps.map((step, index) => {
          const active = index === activeIndex;
          return (
            <button
              key={step.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`rounded-2xl border p-5 text-left transition ${
                active
                  ? "border-cyan-300 bg-cyan-50 shadow-md"
                  : "border-slate-200 bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-md"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                Step {index + 1}
              </p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{step.title}</h3>
            </button>
          );
        })}
      </div>

      <motion.div
        key={steps[activeIndex]?.title}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white"
      >
        <p className="text-xs uppercase tracking-wider text-cyan-300">Active step detail</p>
        <p className="mt-2 text-sm text-slate-100">{steps[activeIndex]?.detail}</p>
      </motion.div>
    </div>
  );
}
