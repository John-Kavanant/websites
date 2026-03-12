"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { ProgramsCptExplorer } from "@/components/site/programs-cpt-explorer";

type Study = {
  name: string;
  description: string;
  cptReferences: {
    code: string;
    description: string;
    billingContext: string;
  }[];
};

type ProgramsCardiacStudiesTabsProps = {
  studies: Study[];
};

export function ProgramsCardiacStudiesTabs({ studies }: ProgramsCardiacStudiesTabsProps) {
  const [activeName, setActiveName] = useState(studies[0]?.name ?? "");
  const activeStudy = studies.find((study) => study.name === activeName) ?? studies[0];

  if (!activeStudy) return null;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {studies.map((study) => {
          const selected = study.name === activeStudy.name;
          return (
            <button
              key={study.name}
              type="button"
              onClick={() => setActiveName(study.name)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                selected
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {study.name}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStudy.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="rounded-xl border border-slate-200 bg-white p-4"
        >
          <h4 className="font-semibold text-slate-900">{activeStudy.name}</h4>
          <p className="mt-2 text-sm text-slate-600">{activeStudy.description}</p>
          <div className="mt-4">
            <ProgramsCptExplorer
              compact
              rows={activeStudy.cptReferences.map((row) => ({
                code: row.code,
                description: row.description,
                frequency: "Varies by payer and component split",
                useCase: row.billingContext,
              }))}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
