"use client";

import { animate } from "framer-motion";
import { useEffect, useState } from "react";

type Metric = {
  label: string;
  value: string;
};

type HomeProofMetricsProps = {
  metrics: Metric[];
};

function AnimatedValue({ value }: { value: string }) {
  const numeric = Number.parseInt(value, 10);
  const hasLeadingNumber = Number.isFinite(numeric);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!hasLeadingNumber) {
      return;
    }
    const controls = animate(0, numeric, {
      duration: 1.1,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplayValue(Math.round(latest));
      },
    });
    return () => controls.stop();
  }, [hasLeadingNumber, numeric]);

  if (!hasLeadingNumber) {
    return <>{value}</>;
  }

  const suffix = value.replace(String(numeric), "");
  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}

export function HomeProofMetrics({ metrics }: HomeProofMetricsProps) {
  return (
    <div className="grid gap-3 md:grid-cols-4">
      {metrics.map((metric) => (
        <div key={metric.label} className="rounded-2xl border border-slate-200 bg-white/80 p-4 backdrop-blur-sm">
          <p className="text-2xl font-semibold text-slate-900">
            <AnimatedValue value={metric.value} />
          </p>
          <p className="text-sm text-slate-600">{metric.label}</p>
        </div>
      ))}
    </div>
  );
}
