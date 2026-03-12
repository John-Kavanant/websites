"use client";

import { motion } from "framer-motion";

type PlatformWorkflowMapProps = {
  steps: string[];
};

export function PlatformWorkflowMap({ steps }: PlatformWorkflowMapProps) {
  return (
    <div className="relative space-y-3">
      <div className="absolute left-[15px] top-3 h-[calc(100%-20px)] w-0.5 bg-slate-700" />
      {steps.map((step, index) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, x: -8 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.06, duration: 0.25, ease: "easeOut" }}
          className="relative ml-8 rounded-xl border border-slate-700 bg-slate-800 p-4 text-sm text-slate-100"
        >
          <span className="absolute -left-8 top-4 flex h-4 w-4 items-center justify-center rounded-full border border-cyan-300 bg-cyan-500" />
          <span className="mr-2 font-semibold text-cyan-300">{index + 1}.</span>
          {step}
        </motion.div>
      ))}
    </div>
  );
}
