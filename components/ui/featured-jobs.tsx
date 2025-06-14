'use client'

import { useEffect, useState } from 'react'
import { getFeaturedJobs } from "@/lib/data/jobs"
import { JobCard } from "@/components/ui/job-card"
import type { Job } from "@/lib/database/supabase"

export function FeaturedJobs() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadFeaturedJobs = async () => {
      try {
        const featuredJobs = await getFeaturedJobs(3)
        setJobs(featuredJobs)
      } catch (error) {
        console.error('Error loading featured jobs:', error)
        setJobs([])
      } finally {
        setLoading(false)
      }
    }

    loadFeaturedJobs()
  }, [])

  if (loading) {
    return (
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Featured Professions</h2>
            <p className="mt-2 text-muted-foreground">
              Popular AI use cases for different careers
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="rounded-lg border bg-muted h-64"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (jobs.length === 0) {
    return null
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Featured Professions</h2>
          <p className="mt-2 text-muted-foreground">
            Popular AI use cases for different careers
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              description={job.description}
              useCaseCount={job.use_case_count}
              image={job.image}
              tags={job.tags}
              featured={job.featured}
            />
          ))}
        </div>
      </div>
    </section>
  )
}