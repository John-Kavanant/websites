"use client";

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

type RoiRevenueChartProps = {
  data: {
    program: string;
    value: number;
  }[];
};

const formatCurrencyCompact = (value: number) =>
  `$${new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(value)}`;

export function RoiRevenueChart({ data }: RoiRevenueChartProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#d4d4d8" />
        <XAxis dataKey="program" />
        <YAxis />
        <Tooltip
          formatter={(value: number | string | undefined) =>
            typeof value === "number" ? formatCurrencyCompact(value) : value ?? ""
          }
        />
        <Bar dataKey="value" fill="#0e7490" radius={[8, 8, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
