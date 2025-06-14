'use client'

import { useEffect, useState } from 'react'
import { getAllTools } from "@/lib/data/tools"
import { ToolCard } from "@/components/ui/tool-card"
import type { Tool } from "@/lib/database/supabase"

export function FeaturedTools() {
  const [tools, setTools] = useState<Tool[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFeaturedTools = async () => {
      try {
        const allTools = await getAllTools()
        // Get first 6 tools as featured
        const featuredTools = allTools.slice(0, 6)
        setTools(featuredTools)
      } catch (error) {
        console.error('Error loading featured tools:', error)
        setTools([])
      } finally {
        setLoading(false)
      }
    }

    loadFeaturedTools()
  }, [])

  if (loading) {
    return (
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Essential AI Tools</h2>
            <p className="mt-2 text-muted-foreground">
              Powerful tools to enhance your productivity
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="rounded-lg border bg-muted h-48"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (tools.length === 0) {
    return null
  }

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Essential AI Tools</h2>
          <p className="mt-2 text-muted-foreground">
            Powerful tools to enhance your productivity
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              id={tool.id}
              name={tool.name}
              description={tool.description}
              image={tool.image}
              category={tool.category}
              url={tool.url}
            />
          ))}
        </div>
      </div>
    </section>
  )
}