"use client"

import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
  featured = false
}: JobCardProps) {
  return (
    <Card className={`group transition-all hover:shadow-lg ${featured ? 'ring-2 ring-primary/20' : ''}`}>
      <Link href={`/jobs/${id}`} className="block">
        <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          {featured && (
            <div className="absolute top-2 right-2">
              <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            </div>
          )}
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              {useCaseCount} use cases
            </span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}