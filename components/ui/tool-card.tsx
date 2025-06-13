import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

interface ToolCardProps {
  id: string
  name: string
  description: string
  image: string
  category: string
  url: string
}

export function ToolCard({ id, name, description, image, category, url }: ToolCardProps) {
  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Badge variant="outline">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {description.length > 100 ? `${description.substring(0, 100)}...` : description}
        </p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Link
          href={`/tools/${id}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          Learn more
        </Link>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          Visit site
          <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </CardFooter>
    </Card>
  )
}