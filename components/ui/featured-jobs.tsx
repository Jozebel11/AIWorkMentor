import { getFeaturedJobs } from "@/lib/data/jobs"
import { JobCard } from "@/components/ui/job-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeaturedJobs() {
  const featuredJobs = getFeaturedJobs()
  
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Popular Professions</h2>
          <p className="mt-2 text-muted-foreground">
            Discover AI use cases for the most in-demand jobs
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredJobs.map((job) => (
            <JobCard
              key={job.id}
              id={job.id}
              title={job.title}
              description={job.description}
              useCaseCount={job.useCaseCount}
              image={job.image}
              tags={job.tags}
              featured={job.featured}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/jobs">
              View All Jobs
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}