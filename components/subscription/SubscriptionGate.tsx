'use client'

import { useSession } from 'next-auth/react'
import { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Lock, Crown, Zap } from 'lucide-react'
import Link from 'next/link'

interface SubscriptionGateProps {
  children: ReactNode
  requiresPremium?: boolean
  fallback?: ReactNode
  blurContent?: boolean
  showUpgradePrompt?: boolean
}

export function SubscriptionGate({ 
  children, 
  requiresPremium = false,
  fallback,
  blurContent = false,
  showUpgradePrompt = true
}: SubscriptionGateProps) {
  // For now, we'll just show all content since we're migrating away from RevenueCat
  return <>{children}</>
}