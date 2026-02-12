'use client'

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts'
import { Card } from '@/components/ui/card'

const data = [
  { name: 'Food & Dining', value: 450 },
  { name: 'Rent', value: 1200 },
  { name: 'Entertainment', value: 150 },
  { name: 'Transportation', value: 200 },
  { name: 'Utilities', value: 180 },
  { name: 'Other', value: 220 },
]

const COLORS = [
  'hsl(var(--color-accent))',
  'hsl(var(--color-destructive))',
  'hsl(var(--color-chart-3))',
  'hsl(var(--color-chart-4))',
  'hsl(var(--color-chart-5))',
  'hsl(var(--color-muted))',
]

export function ExpenseChart() {
  return (
    <Card className="backdrop-blur-md bg-white/60 border border-white/30 shadow-md">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Expense Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
              }}
              formatter={(value) => `$${value}`}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
