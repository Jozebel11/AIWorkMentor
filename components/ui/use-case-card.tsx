"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock } from "lucide-react"
import { getToolById } from "@/lib/data/tools"

interface UseCaseCardProps {
  id: string
  jobId: string
  title: string
  description: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  timeEstimate: string
  tools: string[]
}

export function UseCaseCard({
  id,
  jobId,
  title,
  description,
  difficulty,
  timeEstimate,
  tools
}: UseCaseCardProps) {
  const toolNames = tools.map(toolId => {
    const tool = getToolById(toolId)
    return tool ? tool.name : toolId
  }).slice(0, 3) // Show max 3 tools

  return (
    <Card className="group transition-all hover:shadow-lg">
      <Link href={`/jobs/${jobId}/${id}`} className="block">
        <CardHeader>
          <div className="flex items-center justify-between">
            <Badge 
              variant={
                difficulty === "Beginner" ? "default" : 
                difficulty === "Intermediate" ? "secondary" : 
                "outline"
              }
              className={
                difficulty === "Beginner" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100" :
                difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100" :
                "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
              }
            >
              {difficulty}
            </Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1 h-3 w-3" />
              {timeEstimate}
            </div>
          </div>
          <CardTitle className="text-lg group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1">
            {toolNames.map((toolName, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {toolName}
              </Badge>
            ))}
            {tools.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tools.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}