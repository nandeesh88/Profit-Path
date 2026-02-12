'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/dashboard/sidebar'
import { AddGoalForm, GoalData } from '@/components/goals/add-goal-form'
import { GoalCard } from '@/components/goals/goal-card'
import { ProtectedRoute } from '@/components/protected-route'

interface Goal extends GoalData {
  id: string
}

export default function GoalsPage() {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      name: 'Buy a House',
      targetAmount: 100000,
      currentAmount: 25000,
      deadline: '2027-12-31',
      priority: 'high',
    },
    {
      id: '2',
      name: 'Emergency Fund',
      targetAmount: 15000,
      currentAmount: 12000,
      deadline: '2025-12-31',
      priority: 'high',
    },
    {
      id: '3',
      name: 'Vacation to Europe',
      targetAmount: 8000,
      currentAmount: 3000,
      deadline: '2026-06-30',
      priority: 'medium',
    },
    {
      id: '4',
      name: 'New Car',
      targetAmount: 35000,
      currentAmount: 8000,
      deadline: '2028-06-30',
      priority: 'medium',
    },
    {
      id: '5',
      name: 'Retirement Fund',
      targetAmount: 500000,
      currentAmount: 80000,
      deadline: '2050-12-31',
      priority: 'low',
    },
  ])

  const handleAddGoal = (goal: GoalData) => {
    const newGoal: Goal = {
      ...goal,
      id: Date.now().toString(),
    }
    setGoals([...goals, newGoal])
  }

  const handleDeleteGoal = (id: string) => {
    setGoals(goals.filter((g) => g.id !== id))
  }

  const highPriorityGoals = goals.filter((g) => g.priority === 'high')
  const mediumPriorityGoals = goals.filter((g) => g.priority === 'medium')
  const lowPriorityGoals = goals.filter((g) => g.priority === 'low')

  const totalGoalAmount = goals.reduce((sum, g) => sum + g.targetAmount, 0)
  const totalSaved = goals.reduce((sum, g) => sum + g.currentAmount, 0)
  const totalRemaining = totalGoalAmount - totalSaved

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-background">
        <Sidebar />

        <main className="flex-1 md:ml-0 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">Financial Goals</h1>
              <p className="text-muted-foreground">Set, track, and achieve your financial objectives</p>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="backdrop-blur-md bg-white/60 border border-white/30 rounded-lg p-6 shadow-md">
                <p className="text-muted-foreground text-sm mb-2">Total Goal Amount</p>
                <h3 className="text-3xl font-bold text-foreground">${totalGoalAmount.toLocaleString()}</h3>
                <p className="text-xs text-muted-foreground mt-2">{goals.length} active goals</p>
              </div>
              <div className="backdrop-blur-md bg-white/60 border border-white/30 rounded-lg p-6 shadow-md">
                <p className="text-muted-foreground text-sm mb-2">Total Saved</p>
                <h3 className="text-3xl font-bold text-accent">${totalSaved.toLocaleString()}</h3>
                <p className="text-xs text-muted-foreground mt-2">
                  {((totalSaved / totalGoalAmount) * 100).toFixed(1)}% towards goals
                </p>
              </div>
              <div className="backdrop-blur-md bg-white/60 border border-white/30 rounded-lg p-6 shadow-md">
                <p className="text-muted-foreground text-sm mb-2">Still Needed</p>
                <h3 className="text-3xl font-bold text-foreground">${totalRemaining.toLocaleString()}</h3>
                <p className="text-xs text-muted-foreground mt-2">Average: ${(totalRemaining / goals.length).toFixed(0)}</p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Add Goal Form */}
              <div>
                <AddGoalForm onSubmit={handleAddGoal} />
              </div>

              {/* Goals List */}
              <div className="lg:col-span-2 space-y-8">
                {/* High Priority Goals */}
                {highPriorityGoals.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">High Priority</h2>
                    <div className="space-y-4">
                      {highPriorityGoals.map((goal) => (
                        <GoalCard
                          key={goal.id}
                          {...goal}
                          onDelete={handleDeleteGoal}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Medium Priority Goals */}
                {mediumPriorityGoals.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">Medium Priority</h2>
                    <div className="space-y-4">
                      {mediumPriorityGoals.map((goal) => (
                        <GoalCard
                          key={goal.id}
                          {...goal}
                          onDelete={handleDeleteGoal}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Low Priority Goals */}
                {lowPriorityGoals.length > 0 && (
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-4">Low Priority</h2>
                    <div className="space-y-4">
                      {lowPriorityGoals.map((goal) => (
                        <GoalCard
                          key={goal.id}
                          {...goal}
                          onDelete={handleDeleteGoal}
                        />
                      ))}
                    </div>
                  </div>
                )}
            </div>
          </div>
        </div>
      </main>
      </div>
    </ProtectedRoute>
  )
}
