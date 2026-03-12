"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

type HomeLifecycleRailProps = {
  steps: string[];
};

export function HomeLifecycleRail({ steps }: HomeLifecycleRailProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStep = useMemo(() => steps[activeIndex], [activeIndex, steps]);

  return (
    <div className="space-y-5">
      <div className="relative grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={step}
              type="button"
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-2xl border p-5 text-left transition ${
                isActive
                  ? "border-cyan-300 bg-cyan-50 shadow-md"
                  : "border-slate-200 bg-white shadow-sm hover:-translate-y-0.5 hover:shadow-md"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">
                Step {index + 1}
              </p>
              <p className="mt-2 font-semibold text-slate-900">{step}</p>
              {isActive ? (
                <motion.span
                  layoutId="active-lifecycle-glow"
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-2 ring-cyan-300/60"
                />
              ) : null}
            </button>
          );
        })}
      </div>

      <motion.div
        key={activeStep}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="rounded-2xl border border-slate-200 bg-slate-900 p-5 text-white"
      >
        <p className="text-xs uppercase tracking-wider text-cyan-300">Active step</p>
        <p className="mt-2 text-lg font-semibold">{activeStep}</p>
        <p className="mt-2 text-sm text-slate-200">
          This is part of Atria&apos;s connected operating model that keeps platform, people, and reimbursement workflows aligned.
        </p>
      </motion.div>
    </div>
  );
}
