'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import Purchases, { PurchasesOffering, PurchasesPackage, CustomerInfo } from '@revenuecat/purchases-js'

interface RevenueCatContextType {
  offerings: PurchasesOffering[] | null
  customerInfo: CustomerInfo | null
  isLoading: boolean
  purchasePackage: (packageToPurchase: PurchasesPackage) => Promise<CustomerInfo | null>
  restorePurchases: () => Promise<CustomerInfo | null>
  error: string | null
}

const RevenueCatContext = createContext<RevenueCatContextType | undefined>(undefined)

interface RevenueCatProviderProps {
  children: ReactNode
}

export function RevenueCatProvider({ children }: RevenueCatProviderProps) {
  const { data: session } = useSession()
  const [offerings, setOfferings] = useState<PurchasesOffering[] | null>(null)
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const initializeRevenueCat = async () => {
      if (!session?.user?.id) {
        setIsLoading(false)
        return
      }

      try {
        // Initialize RevenueCat with your public API key
        await Purchases.configure({
          apiKey: process.env.NEXT_PUBLIC_REVENUECAT_PUBLIC_KEY!,
          appUserId: session.user.id
        })

        // Get current customer info
        const info = await Purchases.getCustomerInfo()
        setCustomerInfo(info)

        // Get available offerings
        const offerings = await Purchases.getOfferings()
        if (offerings.current) {
          setOfferings([offerings.current])
        }

        setError(null)
      } catch (err) {
        console.error('RevenueCat initialization error:', err)
        setError('Failed to initialize payment system')
      } finally {
        setIsLoading(false)
      }
    }

    initializeRevenueCat()
  }, [session?.user?.id])

  const purchasePackage = async (packageToPurchase: PurchasesPackage): Promise<CustomerInfo | null> => {
    try {
      setIsLoading(true)
      setError(null)

      const { customerInfo } = await Purchases.purchasePackage(packageToPurchase)
      setCustomerInfo(customerInfo)

      // Update user subscription status in our database
      await updateUserSubscription(customerInfo)

      return customerInfo
    } catch (err: any) {
      console.error('Purchase error:', err)
      
      if (err.userCancelled) {
        setError('Purchase was cancelled')
      } else {
        setError('Purchase failed. Please try again.')
      }
      
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const restorePurchases = async (): Promise<CustomerInfo | null> => {
    try {
      setIsLoading(true)
      setError(null)

      const customerInfo = await Purchases.restorePurchases()
      setCustomerInfo(customerInfo)

      // Update user subscription status in our database
      await updateUserSubscription(customerInfo)

      return customerInfo
    } catch (err) {
      console.error('Restore purchases error:', err)
      setError('Failed to restore purchases')
      return null
    } finally {
      setIsLoading(false)
    }
  }

  const updateUserSubscription = async (customerInfo: CustomerInfo) => {
    try {
      const response = await fetch('/api/subscription/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerInfo: {
            entitlements: customerInfo.entitlements,
            activeSubscriptions: customerInfo.activeSubscriptions,
            originalAppUserId: customerInfo.originalAppUserId
          }
        })
      })

      if (!response.ok) {
        console.error('Failed to update subscription status')
      }
    } catch (error) {
      console.error('Error updating subscription:', error)
    }
  }

  const value: RevenueCatContextType = {
    offerings,
    customerInfo,
    isLoading,
    purchasePackage,
    restorePurchases,
    error
  }

  return (
    <RevenueCatContext.Provider value={value}>
      {children}
    </RevenueCatContext.Provider>
  )
}

export function useRevenueCat() {
  const context = useContext(RevenueCatContext)
  if (context === undefined) {
    throw new Error('useRevenueCat must be used within a RevenueCatProvider')
  }
  return context
}