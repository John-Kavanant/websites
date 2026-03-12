"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";

import { revenueDisclaimer } from "@/content/siteContent";

type ProgramKey = "rpm" | "rtm" | "ccm" | "cardiac";

const RoiRevenueChart = dynamic(
  () =>
    import("@/components/site/roi-revenue-chart").then(
      (module) => module.RoiRevenueChart
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center text-sm text-slate-500">
        Loading chart...
      </div>
    ),
  }
);

const programConfig: {
  key: ProgramKey;
  label: string;
  monthlyPerPatient: number;
  note: string;
}[] = [
  {
    key: "rpm",
    label: "RPM",
    monthlyPerPatient: 105,
    note: "Physiologic monitoring and care management pathway",
  },
  {
    key: "rtm",
    label: "RTM",
    monthlyPerPatient: 95,
    note: "Therapeutic adherence and non-physiologic monitoring pathway",
  },
  {
    key: "ccm",
    label: "CCM",
    monthlyPerPatient: 100,
    note: "Longitudinal chronic care management pathway",
  },
  {
    key: "cardiac",
    label: "Cardiac",
    monthlyPerPatient: 600,
    note: "Cardiac monitoring service pathway by modality",
  },
];

const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(value);

export function RoiCalculator() {
  const [enrolledPatients, setEnrolledPatients] = useState<Record<ProgramKey, number>>({
    rpm: 100,
    rtm: 100,
    ccm: 100,
    cardiac: 40,
  });
  const [adherence, setAdherence] = useState(78);

  const results = useMemo(() => {
    const multiplier = adherence / 100;
    const perProgram = programConfig.map((program) => {
      const patients = enrolledPatients[program.key];
      const monthly = patients * program.monthlyPerPatient * multiplier;
      const annual = monthly * 12;

      return {
        key: program.key,
        program: program.label,
        patients,
        monthlyPerPatient: program.monthlyPerPatient,
        monthly,
        annual,
      };
    });

    const totalPatients = perProgram.reduce((total, item) => total + item.patients, 0);
    const monthlyTotal = perProgram.reduce((total, item) => total + item.monthly, 0);
    const annualTotal = perProgram.reduce((total, item) => total + item.annual, 0);

    return {
      totalPatients,
      monthlyTotal,
      annualTotal,
      perProgram,
      chart: perProgram.map((item) => ({
        program: item.program,
        value: Math.round(item.monthly),
      })),
    };
  }, [adherence, enrolledPatients]);

  const handlePatientChange = (programKey: ProgramKey, value: number) => {
    setEnrolledPatients((current) => ({
      ...current,
      [programKey]: value,
    }));
  };

  return (
    <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-900 p-4 text-white">
          <p className="text-xs uppercase tracking-wider text-slate-300">Total enrolled patients</p>
          <p className="mt-2 text-2xl font-semibold">{results.totalPatients}</p>
        </div>
        <div className="rounded-2xl bg-cyan-700 p-4 text-white">
          <p className="text-xs uppercase tracking-wider text-cyan-100">Monthly potential</p>
          <p className="mt-2 text-2xl font-semibold">${formatNumber(Math.round(results.monthlyTotal))}</p>
        </div>
        <div className="rounded-2xl bg-emerald-700 p-4 text-white">
          <p className="text-xs uppercase tracking-wider text-emerald-100">Annual potential</p>
          <p className="mt-2 text-2xl font-semibold">${formatNumber(Math.round(results.annualTotal))}</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-5">
        <h3 className="text-2xl font-semibold text-slate-900">Interactive ROI calculator</h3>
        <p className="text-sm text-slate-600">
          Set enrolled patients for each program to model per-program and total revenue impact.
        </p>

        <div className="space-y-4">
          {programConfig.map((program) => (
            <div key={program.key} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">{program.label}</p>
                  <p className="text-xs text-slate-600">{program.note}</p>
                </div>
                <label className="flex items-center gap-2 text-sm text-slate-700">
                  Enrolled:
                  <input
                    type="number"
                    min={0}
                    max={3000}
                    value={enrolledPatients[program.key]}
                    onChange={(event) => handlePatientChange(program.key, Number(event.target.value))}
                    className="w-20 rounded-md border border-slate-300 px-2 py-1 text-right"
                  />
                </label>
              </div>
              <input
                type="range"
                min={0}
                max={3000}
                step={5}
                value={enrolledPatients[program.key]}
                onChange={(event) => handlePatientChange(program.key, Number(event.target.value))}
                className="mt-3 w-full accent-cyan-700"
              />
            </div>
          ))}
        </div>

        <label className="block space-y-2">
          <span className="text-sm font-medium text-slate-700">Adherence rate: {adherence}%</span>
          <input
            type="range"
            min={40}
            max={100}
            step={1}
            value={adherence}
            onChange={(event) => setAdherence(Number(event.target.value))}
            className="w-full accent-cyan-700"
          />
        </label>

        <p className="text-xs text-slate-500">{revenueDisclaimer}</p>
      </div>

      <div className="space-y-4">
        <div className="h-[280px] rounded-2xl bg-slate-50 p-3">
          <RoiRevenueChart data={results.chart} />
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="px-4 py-3">Program</th>
                <th className="px-4 py-3">Enrolled</th>
                <th className="px-4 py-3">Approx monthly / patient</th>
                <th className="px-4 py-3">Approx monthly revenue</th>
                <th className="px-4 py-3">Approx annual revenue</th>
              </tr>
            </thead>
            <tbody>
              {results.perProgram.map((item) => (
                <tr key={item.key} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-semibold text-slate-900">{item.program}</td>
                  <td className="px-4 py-3 text-slate-700">{item.patients}</td>
                  <td className="px-4 py-3 text-slate-700">${item.monthlyPerPatient}</td>
                  <td className="px-4 py-3 text-slate-700">${formatNumber(Math.round(item.monthly))}</td>
                  <td className="px-4 py-3 text-slate-700">${formatNumber(Math.round(item.annual))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
}
