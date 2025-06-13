import { getAllTools } from "@/lib/data/tools"
import { ToolCard } from "@/components/ui/tool-card"

export function FeaturedTools() {
  const tools = getAllTools().slice(0, 6) // Show first 6 tools
  
  return (
    <section className="bg-muted/40 py-12 md:py-16">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Essential AI Tools</h2>
          <p className="mt-2 text-muted-foreground">
            Discover the most powerful AI tools for productivity
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
        
        <div className="mt-8 text-center">
          <a
            href="/tools"
            className="inline-flex items-center text-primary hover:underline"
          >
            Explore all tools
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1 h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}