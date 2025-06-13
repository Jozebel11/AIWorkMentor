import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, ArrowRight } from "lucide-react"

interface UseCaseCardProps {
  id: string
  jobId: string
  title: string
  description: string
  difficulty: string
  timeEstimate: string
  tools: string[]
}

export function UseCaseCard({ id, jobId, title, description, difficulty, timeEstimate, tools }: UseCaseCardProps) {
  return (
    <Link href={`/jobs/${jobId}/${id}`}>
      <Card className="h-full transition-all hover:shadow-md">
        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg">{title}</CardTitle>
            <Badge
              className={
                difficulty === "Beginner"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                  : difficulty === "Intermediate"
                  ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
              }
            >
              {difficulty}
            </Badge>
          </div>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-1 h-4 w-4" />
            {timeEstimate}
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {tools.slice(0, 3).map((tool, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tool}
              </Badge>
            ))}
            {tools.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tools.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <span className="flex items-center text-sm font-medium text-primary">
            View guide
            <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}