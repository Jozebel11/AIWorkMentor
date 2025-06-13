'use client'

import { useSession } from 'next-auth/react'
import { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Lock, Crown, Zap } from 'lucide-react'
import Link from 'next/link'
import { SubscriptionPermissions, UserSubscription } from '@/lib/subscription/permissions'

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
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <div className="animate-pulse bg-muted h-32 rounded-lg" />
  }

  const userSubscription: UserSubscription = {
    tier: (session?.user?.subscriptionTier as any) || 'free',
    status: (session?.user?.subscriptionStatus as any) || 'free'
  }

  const hasAccess = requiresPremium 
    ? SubscriptionPermissions.canAccessPremiumContent(userSubscription)
    : true

  if (hasAccess) {
    return <>{children}</>
  }

  if (fallback) {
    return <>{fallback}</>
  }

  return (
    <div className="relative">
      {blurContent && (
        <div className="blur-sm pointer-events-none">
          {children}
        </div>
      )}
      
      {showUpgradePrompt && (
        <div className={`${blurContent ? 'absolute inset-0 flex items-center justify-center' : ''}`}>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Crown className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="flex items-center justify-center gap-2">
                <Lock className="h-5 w-5" />
                Premium Content
              </CardTitle>
              <CardDescription>
                Upgrade to access this premium content and unlock your full potential with AI
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm">Access all prompt examples</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm">Unlimited job guides</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-primary" />
                  <span className="text-sm">Premium resources & tools</span>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                {!session ? (
                  <>
                    <Button asChild>
                      <Link href="/auth/signup">
                        Start Free Trial
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/auth/signin">
                        Sign In
                      </Link>
                    </Button>
                  </>
                ) : (
                  <Button asChild>
                    <Link href="/subscription/upgrade">
                      Upgrade to Premium
                    </Link>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}