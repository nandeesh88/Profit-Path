import { Card } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

interface BudgetCategory {
  name: string
  spent: number
  budget: number
  icon?: string
}

const budgetData: BudgetCategory[] = [
  { name: 'Food & Dining', spent: 450, budget: 600 },
  { name: 'Entertainment', spent: 150, budget: 300 },
  { name: 'Transportation', spent: 200, budget: 250 },
  { name: 'Utilities', spent: 180, budget: 200 },
  { name: 'Clothing', spent: 100, budget: 150 },
]

export function BudgetTracker() {
  return (
    <Card className="backdrop-blur-md bg-white/60 border border-white/30 shadow-md">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-6">Budget Tracker</h3>
        <div className="space-y-5">
          {budgetData.map((category) => {
            const percentage = Math.min((category.spent / category.budget) * 100, 100)
            const isOverBudget = category.spent > category.budget

            return (
              <div key={category.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-foreground">{category.name}</p>
                  <span className={`text-sm font-semibold ${isOverBudget ? 'text-destructive' : 'text-accent'}`}>
                    ${category.spent} / ${category.budget}
                  </span>
                </div>
                <Progress
                  value={percentage}
                  className="h-2 bg-white/50"
                  style={{
                    background: 'hsl(var(--color-muted))',
                  } as any}
                />
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  )
}
