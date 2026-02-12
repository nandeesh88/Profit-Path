'use client'

import React from "react"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { setAuthToken } from '@/lib/auth'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      // Simple validation
      if (!email || !password) {
        setError('Please enter both email and password')
        setIsLoading(false)
        return
      }

      // Mock authentication - set token and redirect
      setAuthToken('demo-token-' + Date.now())
      
      // Redirect to dashboard after 500ms
      setTimeout(() => {
        router.push('/dashboard')
      }, 500)
    } catch (err) {
      setError('Invalid email or password')
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md backdrop-blur-md bg-white/80 border border-white/20 shadow-lg">
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your Profit Path account</p>
        </div>

        <div className="mb-6 p-4 bg-accent/10 border border-accent/30 rounded-lg">
          <p className="text-sm text-foreground font-medium mb-2">Demo Credentials:</p>
          <p className="text-xs text-muted-foreground">Email: demo@example.com</p>
          <p className="text-xs text-muted-foreground">Password: (any password)</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-destructive/10 text-destructive text-sm rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/50 border-white/30 backdrop-blur-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground font-medium">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-white/50 border-white/30 backdrop-blur-sm"
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-11"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <p className="mt-6 text-center text-muted-foreground">
          Don't have an account?{' '}
          <Link href="/signup" className="text-accent font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </Card>
  )
}
