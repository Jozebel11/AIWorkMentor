import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface JobCardProps {
  id: string
  title: string
  description: string
  useCaseCount: number
  image: string
  tags: string[]
  featured?: boolean
}

export function JobCard({ id, title, description, useCaseCount, image, tags, featured }: JobCardProps) {
  return (
    <Link href={`/jobs/${id}`}>
      <Card className={`h-full overflow-hidden transition-all hover:shadow-md ${featured ? 'border-primary/50' : ''}`}>
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
          {featured && (
            <div className="absolute right-2 top-2">
              <Badge className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {useCaseCount} use case{useCaseCount !== 1 ? 's' : ''}
          </span>
          <span className="flex items-center text-sm font-medium text-primary">
            View details
            <ArrowRight className="ml-1 h-4 w-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  )
}