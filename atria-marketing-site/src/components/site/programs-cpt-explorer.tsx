"use client";

import { useState } from "react";

type CptRow = {
  code: string;
  description: string;
  frequency: string;
  useCase: string;
};

type ProgramsCptExplorerProps = {
  rows: CptRow[];
  compact?: boolean;
};

function codeFamilyBadge(code: string) {
  if (code.includes("99453") || code.includes("98975")) return "Setup";
  if (
    code.includes("99454") ||
    code.includes("98976") ||
    code.includes("98977") ||
    code.includes("9322") ||
    code.includes("9326")
  )
    return "Monitoring/Device";
  if (
    code.includes("99457") ||
    code.includes("99458") ||
    code.includes("98980") ||
    code.includes("98981") ||
    code.includes("99490") ||
    code.includes("99439") ||
    code.includes("99487") ||
    code.includes("99489")
  )
    return "Management Time";
  if (code.includes("9379") || code.includes("G042")) return "Rehab";
  return "Reference";
}

export function ProgramsCptExplorer({ rows, compact = false }: ProgramsCptExplorerProps) {
  const [openCode, setOpenCode] = useState<string | null>(null);
  const textSizeClass = compact ? "text-xs" : "text-sm";

  return (
    <div className="space-y-3">
      {rows.map((row) => {
        const isOpen = openCode === row.code;
        const badge = codeFamilyBadge(row.code);

        return (
          <div key={row.code} className="rounded-xl border border-slate-200 bg-white">
            <button
              type="button"
              onClick={() => setOpenCode((current) => (current === row.code ? null : row.code))}
              className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
            >
              <div>
                <p className="font-semibold text-slate-900">{row.code}</p>
                <p className={`${textSizeClass} text-slate-700`}>{row.description}</p>
              </div>
              <span className="rounded-full border border-cyan-200 bg-cyan-50 px-2.5 py-1 text-xs font-semibold text-cyan-800">
                {badge}
              </span>
            </button>
            {isOpen ? (
              <div className={`border-t border-slate-200 px-4 py-3 ${textSizeClass} text-slate-700`}>
                <p>
                  <span className="font-semibold text-slate-900">Frequency:</span> {row.frequency}
                </p>
                <p className="mt-1">
                  <span className="font-semibold text-slate-900">Use case:</span> {row.useCase}
                </p>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
