'use client'

import { useEffect, useState } from 'react'
import { ToolCard } from "@/components/ui/tool-card"
import { getAllTools } from "@/lib/data/tools"
import type { Tool } from "@/lib/database/supabase"

export function FeaturedTools() {
  const [tools, setTools] = useState<Tool[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTools = async () => {
      try {
        const allTools = await getAllTools()
        setTools(allTools.slice(0, 6)) // Show first 6 tools
      } catch (error) {
        console.error('Error loading tools:', error)
        setTools([])
      } finally {
        setLoading(false)
      }
    }

    loadTools()
  }, [])

  if (loading) {
    return (
      <section className="bg-muted/40 py-12 md:py-16">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Essential AI Tools</h2>
            <p className="mt-2 text-muted-foreground">
              Discover the most powerful AI tools to enhance your productivity
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="rounded-lg border bg-background h-48"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  return (
    <section className="bg-muted/40 py-12 md:py-16">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Essential AI Tools</h2>
          <p className="mt-2 text-muted-foreground">
            Discover the most powerful AI tools to enhance your productivity
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