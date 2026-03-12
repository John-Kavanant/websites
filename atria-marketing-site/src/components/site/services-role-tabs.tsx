"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type ServiceRoleView = {
  key: string;
  label: string;
  title: string;
  summary: string;
  bullets: readonly string[];
};

type ServicesRoleTabsProps = {
  views: readonly ServiceRoleView[];
};

export function ServicesRoleTabs({ views }: ServicesRoleTabsProps) {
  const [activeKey, setActiveKey] = useState(views[0]?.key ?? "");
  const active = views.find((view) => view.key === activeKey) ?? views[0];

  if (!active) return null;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {views.map((view) => {
          const selected = view.key === active.key;
          return (
            <button
              key={view.key}
              type="button"
              onClick={() => setActiveKey(view.key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                selected
                  ? "bg-slate-900 text-white"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              {view.label}
            </button>
          );
        })}
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold text-slate-900">{active.title}</h3>
            <p className="text-sm text-slate-600">{active.summary}</p>
            <ul className="grid gap-2 md:grid-cols-2">
              {active.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-xl border border-cyan-100 bg-cyan-50 p-3 text-sm text-cyan-950"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
