'use client'

import { useSession } from 'next-auth/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Check, Crown, Zap, Star } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function UpgradePage() {
  const { data: session } = useSession()
  const router = useRouter()

  const handleUpgrade = async () => {
    if (!session) {
      router.push('/auth/signin')
      return
    }

    // In a real implementation, this would integrate with RevenueCat
    // For now, we'll redirect to a placeholder
    alert('RevenueCat integration would handle the subscription flow here')
  }

  const features = [
    'Access to all prompt examples and templates',
    'Unlimited job-specific AI guides',
    'Premium resources and case studies',
    'Advanced AI workflow tutorials',
    'Priority customer support',
    'Early access to new features'
  ]

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
            <Crown className="h-4 w-4 mr-1" />
            Premium Plan
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Unlock Your AI Potential
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Get unlimited access to premium AI productivity content and accelerate your career growth
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Free Plan */}
          <Card className="relative">
            <CardHeader>
              <CardTitle className="text-2xl">Free Plan</CardTitle>
              <CardDescription>Perfect for getting started</CardDescription>
              <div className="text-3xl font-bold">$0<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Access to 1 prompt example per job</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">1 AI guide per profession</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Basic AI tools directory</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Community support</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full mt-6" disabled>
                Current Plan
              </Button>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="relative border-primary shadow-lg">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white">
                <Star className="h-3 w-3 mr-1" />
                Most Popular
              </Badge>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Crown className="h-6 w-6 text-primary" />
                Premium Plan
              </CardTitle>
              <CardDescription>Everything you need to thrive with AI</CardDescription>
              <div className="text-3xl font-bold">$19<span className="text-lg font-normal text-muted-foreground">/month</span></div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button onClick={handleUpgrade} className="w-full mt-6">
                Upgrade to Premium
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-2">
                Cancel anytime. No long-term commitments.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I cancel anytime?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Yes, you can cancel your subscription at any time. You'll continue to have access to premium features until the end of your billing period.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We accept all major credit cards, PayPal, and other payment methods through our secure payment processor.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is there a free trial?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Yes! New users get a 7-day free trial of our Premium plan. No credit card required to start.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer refunds?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We offer a 30-day money-back guarantee. If you're not satisfied, contact us for a full refund.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}