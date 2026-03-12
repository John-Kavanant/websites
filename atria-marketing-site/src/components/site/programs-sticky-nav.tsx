"use client";

import { useEffect, useMemo, useState } from "react";

type ProgramAnchor = {
  id: string;
  label: string;
};

type ProgramsStickyNavProps = {
  programs: ProgramAnchor[];
};

export function ProgramsStickyNav({ programs }: ProgramsStickyNavProps) {
  const [activeId, setActiveId] = useState(programs[0]?.id ?? "");

  useEffect(() => {
    const headerOffset = 180;

    const updateActive = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;
      let closestId = programs[0]?.id ?? "";
      let closestDistance = Number.POSITIVE_INFINITY;
      let lastPassedId = programs[0]?.id ?? "";

      for (const program of programs) {
        const element = document.getElementById(program.id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= headerOffset) {
          lastPassedId = program.id;
        }

        const isInViewBand = rect.bottom > headerOffset && rect.top < viewportHeight - 80;
        if (!isInViewBand) continue;

        const sectionCenter = rect.top + rect.height / 2;
        const distanceToViewportCenter = Math.abs(sectionCenter - viewportCenter);

        if (distanceToViewportCenter < closestDistance) {
          closestDistance = distanceToViewportCenter;
          closestId = program.id;
        }
      }

      setActiveId(closestDistance === Number.POSITIVE_INFINITY ? lastPassedId : closestId);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);

    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [programs]);

  const progress = useMemo(() => {
    const index = programs.findIndex((program) => program.id === activeId);
    return index >= 0 ? `${index + 1}/${programs.length}` : `1/${programs.length}`;
  }, [activeId, programs]);

  return (
    <aside className="sticky top-28 hidden self-start rounded-2xl border border-slate-200 bg-white p-4 shadow-sm lg:block">
      <p className="text-xs font-semibold uppercase tracking-wider text-cyan-700">Program navigator</p>
      <p className="mt-1 text-xs text-slate-500">Progress: {progress}</p>
      <div className="mt-3 space-y-2">
        {programs.map((program) => {
          const active = program.id === activeId;

          return (
            <a
              key={program.id}
              href={`#${program.id}`}
              onClick={() => setActiveId(program.id)}
              className={`block rounded-lg px-3 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-slate-900 text-white"
                  : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-white"
              }`}
            >
              {program.label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
