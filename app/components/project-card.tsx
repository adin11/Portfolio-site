import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  githubLink: string
  blogLink: string
  tags: string[]
}

export default function ProjectCard({ title, description, image, githubLink, blogLink, tags }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <Link href={blogLink} target="_blank" className="block">
        <div className="mx-auto w-[88%] md:w-[82%] lg:w-[78%]">
          <div className="relative aspect-[21/9] rounded-md overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </div>
      </Link>
      <CardContent className="p-3">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0 flex gap-2">
        <Link href={githubLink} target="_blank">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <Github className="h-4 w-4" />
            View on GitHub
          </Button>
        </Link>
        <Link href={blogLink} target="_blank">
          <Button variant="outline" size="sm" className="gap-2 bg-transparent">
            <ExternalLink className="h-4 w-4" />
            Blog
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
