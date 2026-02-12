import { Sidebar } from '@/components/dashboard/sidebar'
import { KPICard } from '@/components/dashboard/kpi-card'
import { ExpenseChart } from '@/components/dashboard/expense-chart'
import { TrendChart } from '@/components/dashboard/trend-chart'
import { BudgetTracker } from '@/components/dashboard/budget-tracker'
import { ProtectedRoute } from '@/components/protected-route'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard - Profit Path',
  description: 'Your financial command center',
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-background">
        <Sidebar />

        <main className="flex-1 md:ml-0 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">Command Center</h1>
              <p className="text-muted-foreground">Welcome back! Here's your financial overview.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <KPICard
                title="Total Balance"
                value="$18,450"
                description="Across all accounts"
                trend={12}
                icon="wallet"
              />
              <KPICard
                title="Monthly Income"
                value="$6,200"
                description="Expected this month"
                trend={8}
                icon="income"
              />
              <KPICard
                title="Monthly Expense"
                value="$3,800"
                description="Tracked this month"
                trend={-5}
                icon="expense"
              />
              <KPICard
                title="Net Savings"
                value="$2,400"
                description="Available to invest"
                trend={15}
                icon="savings"
              />
            </div>

            {/* Charts and Tracker */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="lg:col-span-2">
                <TrendChart />
              </div>
              <div>
                <ExpenseChart />
              </div>
            </div>

          {/* Budget Tracker */}
          <BudgetTracker />
        </div>
      </main>
    </div>
    </ProtectedRoute>
  )
}
