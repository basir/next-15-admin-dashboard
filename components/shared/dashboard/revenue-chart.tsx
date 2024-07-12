'use client'

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export default function RevenueChart({
  revenue,
}: {
  revenue: { month: string; revenue: number }[]
}) {
  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>
  }

  return (
    <ResponsiveContainer width="100%" height={450} className="p-2">
      <BarChart data={revenue}>
        <XAxis dataKey="month" />
        <YAxis />
        <Bar
          dataKey="revenue"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
          minPointSize={4}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
      </BarChart>
    </ResponsiveContainer>
  )
}
