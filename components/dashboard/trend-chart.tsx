'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card } from '@/components/ui/card'

const data = [
  { month: 'Jan', income: 5000, expense: 3200 },
  { month: 'Feb', income: 5200, expense: 3400 },
  { month: 'Mar', income: 5500, expense: 3100 },
  { month: 'Apr', income: 5800, expense: 3600 },
  { month: 'May', income: 6000, expense: 3300 },
  { month: 'Jun', income: 6200, expense: 3800 },
]

export function TrendChart() {
  return (
    <Card className="backdrop-blur-md bg-white/60 border border-white/30 shadow-md">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Income vs Expenses</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 0, 0, 0.05)" />
            <XAxis dataKey="month" stroke="hsl(var(--color-muted-foreground))" />
            <YAxis stroke="hsl(var(--color-muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
              }}
              formatter={(value) => `$${value}`}
            />
            <Line
              type="monotone"
              dataKey="income"
              stroke="hsl(var(--color-accent))"
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--color-accent))', r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="expense"
              stroke="hsl(var(--color-destructive))"
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--color-destructive))', r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
