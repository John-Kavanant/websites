"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type CptRow = {
  code: string;
  description: string;
  approx: string;
  isNew?: boolean;
};

type CardiacStudyRow = {
  code: string;
  description: string;
  amount: string;
  frequency: string;
};

type CardiacStudyTable = {
  study: string;
  footnote?: string;
  rows: readonly CardiacStudyRow[];
};

type CptProgram = {
  program: string;
  context: string;
  pitfall: string;
  rows?: readonly CptRow[];
  studyTables?: readonly CardiacStudyTable[];
};

type ReimbursementCptTabsProps = {
  programs: readonly CptProgram[];
};

export function ReimbursementCptTabs({ programs }: ReimbursementCptTabsProps) {
  const [activeProgram, setActiveProgram] = useState(programs[0]?.program ?? "");
  const selected = programs.find((program) => program.program === activeProgram) ?? programs[0];

  if (!selected) return null;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {programs.map((program) => {
          const active = program.program === selected.program;
          return (
            <button
              key={program.program}
              type="button"
              onClick={() => setActiveProgram(program.program)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {program.program}
            </button>
          );
        })}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected.program}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="space-y-4 p-5"
          >
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-cyan-100 bg-cyan-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-cyan-800">
                  Billing context
                </p>
                <p className="mt-1 text-sm text-cyan-950">{selected.context}</p>
              </div>
              <div className="rounded-xl border border-amber-100 bg-amber-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">
                  Common pitfall to avoid
                </p>
                <p className="mt-1 text-sm text-amber-950">{selected.pitfall}</p>
              </div>
            </div>

            {selected.studyTables && selected.studyTables.length > 0 ? (
              <div className="space-y-4">
                {selected.studyTables.map((table) => (
                  <article key={`${selected.program}-${table.study}`} className="rounded-xl border border-slate-200">
                    <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
                      <h4 className="text-sm font-semibold text-slate-900">{table.study}</h4>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="min-w-[720px] w-full text-left text-sm">
                        <thead className="bg-slate-100 text-slate-700">
                          <tr>
                            <th className="px-4 py-3">CPT Code</th>
                            <th className="px-4 py-3">Description</th>
                            <th className="px-4 py-3">Amount*</th>
                            <th className="px-4 py-3">Frequency</th>
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row) => (
                            <tr key={`${table.study}-${row.code}`} className="border-t border-slate-200">
                              <td className="px-4 py-3">
                                <span className="inline-flex rounded-full border border-slate-300 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-800">
                                  {row.code}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-slate-700">{row.description}</td>
                              <td className="px-4 py-3 text-slate-700">{row.amount}</td>
                              <td className="px-4 py-3 text-slate-700">{row.frequency}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {table.footnote ? (
                      <p className="border-t border-slate-200 bg-slate-50 px-4 py-2 text-xs text-slate-500">
                        {table.footnote}
                      </p>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : (
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="min-w-[660px] w-full text-left text-sm">
                  <thead className="bg-slate-100 text-slate-700">
                    <tr>
                      <th className="px-4 py-3">Code</th>
                      <th className="px-4 py-3">Description</th>
                      <th className="px-4 py-3">Approx reimbursement</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(selected.rows ?? []).map((row) => (
                      <tr key={`${selected.program}-${row.code}`} className="border-t border-slate-200">
                        <td className="px-4 py-3">
                          <span
                            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                              row.isNew
                                ? "border border-emerald-300 bg-emerald-50 text-emerald-800"
                                : "border border-slate-300 bg-slate-50 text-slate-800"
                            }`}
                          >
                            {row.code}
                          </span>
                          {row.isNew ? (
                            <span className="ml-2 inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                              New 2026
                            </span>
                          ) : null}
                        </td>
                        <td className={`px-4 py-3 ${row.isNew ? "text-emerald-700" : "text-slate-700"}`}>
                          {row.description}
                        </td>
                        <td className={`px-4 py-3 ${row.isNew ? "text-emerald-700" : "text-slate-700"}`}>
                          {row.approx}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
