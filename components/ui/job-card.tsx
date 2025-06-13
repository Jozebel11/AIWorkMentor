import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

interface JobCardProps {
  id: string
  title: string
  description: string
  useCaseCount: number
  image: string
  tags: string[]
  featured?: boolean
}

export function JobCard({
  id,
  title,
  description,
  useCaseCount,
  image,
  tags,
  featured
}: JobCardProps) {
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
            <div className="absolute top-2 right-2">
              <Badge className="bg-primary text-primary-foreground">
                Featured
              </Badge>
            </div>
          )}
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Briefcase className="mr-1 h-4 w-4" />
            <span>{useCaseCount} use case{useCaseCount !== 1 ? 's' : ''}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}