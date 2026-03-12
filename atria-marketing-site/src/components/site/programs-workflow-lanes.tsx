"use client";

import { motion } from "framer-motion";

type ProgramsWorkflowLanesProps = {
  patientJourney: string[];
  providerWorkflow: string[];
};

export function ProgramsWorkflowLanes({
  patientJourney,
  providerWorkflow,
}: ProgramsWorkflowLanesProps) {
  const rows = Math.max(patientJourney.length, providerWorkflow.length);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Patient lane</p>
        <div className="mt-4 space-y-3">
          {Array.from({ length: rows }).map((_, index) => {
            const step = patientJourney[index];
            if (!step) {
              return null;
            }
            return (
              <motion.div
                key={`patient-${step}`}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05, duration: 0.25 }}
                className="rounded-xl border border-cyan-200 bg-cyan-50 p-3 text-sm text-cyan-900"
              >
                <span className="mr-2 font-semibold text-cyan-800">{index + 1}.</span>
                {step}
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-semibold text-slate-900">Provider and operations lane</p>
        <div className="mt-4 space-y-3">
          {Array.from({ length: rows }).map((_, index) => {
            const step = providerWorkflow[index];
            if (!step) {
              return null;
            }
            return (
              <motion.div
                key={`provider-${step}`}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.05, duration: 0.25 }}
                className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm text-slate-700"
              >
                <span className="mr-2 font-semibold text-slate-900">{index + 1}.</span>
                {step}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
