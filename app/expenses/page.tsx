'use client'

import { useState } from 'react'
import { Sidebar } from '@/components/dashboard/sidebar'
import { AddExpenseForm, ExpenseData } from '@/components/expenses/add-expense-form'
import { ExpenseList } from '@/components/expenses/expense-list'
import { ProtectedRoute } from '@/components/protected-route'

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<(ExpenseData & { id: string })[]>([
    {
      id: '1',
      description: 'Coffee at Starbucks',
      amount: 5.5,
      category: 'food',
      date: '2024-01-15',
    },
    {
      id: '2',
      description: 'Monthly Rent',
      amount: 1200,
      category: 'rent',
      date: '2024-01-01',
    },
    {
      id: '3',
      description: 'Movie Tickets',
      amount: 30,
      category: 'entertainment',
      date: '2024-01-14',
    },
    {
      id: '4',
      description: 'Gas',
      amount: 45,
      category: 'transportation',
      date: '2024-01-13',
    },
  ])

  const handleAddExpense = (expense: ExpenseData) => {
    const newExpense = {
      ...expense,
      id: Date.now().toString(),
    }
    setExpenses([newExpense, ...expenses])
  }

  const handleDeleteExpense = (id: string) => {
    setExpenses(expenses.filter((e) => e.id !== id))
  }

  const handleEditExpense = (expense: (ExpenseData & { id: string })) => {
    console.log('Edit expense:', expense)
    // Implement edit functionality
  }

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0)
  const avgExpense = expenses.length > 0 ? (totalExpenses / expenses.length).toFixed(2) : 0

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-background">
        <Sidebar />

        <main className="flex-1 md:ml-0 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">Expense Management</h1>
              <p className="text-muted-foreground">Track and manage your spending patterns</p>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="backdrop-blur-md bg-white/60 border border-white/30 rounded-lg p-6 shadow-md">
                <p className="text-muted-foreground text-sm mb-2">Total Expenses</p>
                <h3 className="text-3xl font-bold text-foreground">${totalExpenses.toFixed(2)}</h3>
                <p className="text-xs text-muted-foreground mt-2">{expenses.length} transactions</p>
              </div>
              <div className="backdrop-blur-md bg-white/60 border border-white/30 rounded-lg p-6 shadow-md">
                <p className="text-muted-foreground text-sm mb-2">Average Expense</p>
                <h3 className="text-3xl font-bold text-foreground">${avgExpense}</h3>
                <p className="text-xs text-muted-foreground mt-2">Per transaction</p>
              </div>
              <div className="backdrop-blur-md bg-white/60 border border-white/30 rounded-lg p-6 shadow-md">
                <p className="text-muted-foreground text-sm mb-2">This Month</p>
                <h3 className="text-3xl font-bold text-accent">$3,800</h3>
                <p className="text-xs text-muted-foreground mt-2">Tracked expenses</p>
              </div>
            </div>

            {/* Add Expense Form */}
            <div className="mb-8">
              <AddExpenseForm onSubmit={handleAddExpense} />
            </div>

          {/* Expense List */}
          <ExpenseList
            expenses={expenses}
            onEdit={handleEditExpense}
            onDelete={handleDeleteExpense}
          />
        </div>
      </main>
      </div>
    </ProtectedRoute>
  )
}
