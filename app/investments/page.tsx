import { Sidebar } from '@/components/dashboard/sidebar'
import { InvestmentCard } from '@/components/investments/investment-card'
import { InvestmentRecommendation } from '@/components/investments/investment-recommendation'
import { ProtectedRoute } from '@/components/protected-route'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investments - Profit Path',
  description: 'Explore investment opportunities and recommendations',
}

const investments = [
  {
    name: 'Monthly SIP Plan',
    type: 'sip' as const,
    description: 'Systematic Investment Plan for consistent wealth building',
    riskLevel: 'low' as const,
    expectedReturn: 8,
    minInvestment: 500,
    recommendedFor: ['Beginners', 'Long-term'],
  },
  {
    name: 'Growth Mutual Fund',
    type: 'mutual-fund' as const,
    description: 'Diversified portfolio targeting capital appreciation',
    riskLevel: 'medium' as const,
    expectedReturn: 12,
    minInvestment: 1000,
    recommendedFor: ['Growth seekers', 'Medium Risk'],
  },
  {
    name: 'Tech Stock Bundle',
    type: 'stock' as const,
    description: 'Curated selection of technology sector leaders',
    riskLevel: 'high' as const,
    expectedReturn: 18,
    minInvestment: 2000,
    recommendedFor: ['Aggressive', 'Tech savvy'],
  },
  {
    name: 'Fixed Income Fund',
    type: 'mutual-fund' as const,
    description: 'Stable returns with lower volatility',
    riskLevel: 'low' as const,
    expectedReturn: 6,
    minInvestment: 750,
    recommendedFor: ['Conservative', 'Income focused'],
  },
  {
    name: 'Balanced Fund',
    type: 'mutual-fund' as const,
    description: 'Perfect mix of equity and debt instruments',
    riskLevel: 'medium' as const,
    expectedReturn: 10,
    minInvestment: 1500,
    recommendedFor: ['Balanced', 'Risk averse'],
  },
  {
    name: 'Index Fund - S&P 500',
    type: 'stock' as const,
    description: 'Track the broader market with minimal fees',
    riskLevel: 'medium' as const,
    expectedReturn: 11,
    minInvestment: 1000,
    recommendedFor: ['Passive', 'Diversified'],
  },
]

export default function InvestmentsPage() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-background">
        <Sidebar />

        <main className="flex-1 md:ml-0 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">Investment Hub</h1>
              <p className="text-muted-foreground">
                Explore personalized investment opportunities based on your financial goals and risk tolerance
              </p>
            </div>

            {/* AI Recommendations */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">AI-Powered Recommendations</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <InvestmentRecommendation
                  title="Build Your Emergency Fund"
                  description="Start with a safe, liquid savings account"
                  reason="You currently lack adequate emergency savings. We recommend 3-6 months of expenses."
                  savingsNeeded={4500}
                  potentialGain={180}
                  timeframe="6-12 months"
                />
                <InvestmentRecommendation
                  title="Begin SIP Investment"
                  description="Monthly systematic investment to build wealth"
                  reason="Your monthly savings can support consistent investments for long-term growth."
                  savingsNeeded={2400}
                  potentialGain={8640}
                  timeframe="5 years"
                />
              </div>
            </div>

            {/* Available Investments */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Available Investment Options</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {investments.map((investment) => (
                  <InvestmentCard key={investment.name} {...investment} />
                ))}
            </div>
          </div>
        </div>
      </main>
      </div>
    </ProtectedRoute>
  )
}
