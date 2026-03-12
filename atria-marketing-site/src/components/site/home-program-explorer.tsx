"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

import type { Program } from "@/content/siteContent";

type HomeProgramExplorerProps = {
  programs: Program[];
};

export function HomeProgramExplorer({ programs }: HomeProgramExplorerProps) {
  const [activeSlug, setActiveSlug] = useState<Program["slug"]>(programs[0]?.slug ?? "rpm");

  const activeProgram = useMemo(
    () => programs.find((program) => program.slug === activeSlug) ?? programs[0],
    [activeSlug, programs]
  );

  if (!activeProgram) {
    return null;
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {programs.map((program) => {
          const active = program.slug === activeSlug;

          return (
            <button
              key={program.slug}
              type="button"
              onClick={() => setActiveSlug(program.slug)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {program.name.split(" (")[0]}
            </button>
          );
        })}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProgram.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid gap-6 lg:grid-cols-2"
          >
            <div>
              <h3 className="text-xl font-semibold text-slate-900">{activeProgram.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{activeProgram.summary}</p>
              <p className="mt-4 rounded-xl bg-cyan-50 p-3 text-sm text-cyan-900">
                {activeProgram.reimbursementNote}
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">Top outcomes</p>
                <ul className="mt-2 space-y-1 text-sm text-slate-700">
                  {activeProgram.outcomes.slice(0, 3).map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Workflow preview</p>
                <ol className="mt-2 space-y-1 text-sm text-slate-700">
                  {activeProgram.workflow.slice(0, 3).map((item, index) => (
                    <li key={item}>
                      {index + 1}. {item}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
