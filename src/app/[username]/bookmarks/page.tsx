import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

const bookmarks = [
  {
    title: "React Documentation",
    description:
      "The official React documentation with guides, API reference, and best practices.",
    url: "https://react.dev",
    category: "Documentation",
    tags: ["React", "Frontend", "JavaScript"],
  },
  {
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework packed with classes to build any design directly in your markup.",
    url: "https://tailwindcss.com",
    category: "CSS Framework",
    tags: ["CSS", "Styling", "Frontend"],
  },
  {
    title: "Framer Motion",
    description:
      "A production-ready motion library for React with declarative animations.",
    url: "https://www.framer.com/motion/",
    category: "Animation",
    tags: ["React", "Animation", "UI"],
  },
  {
    title: "TypeScript Handbook",
    description:
      "The complete guide to TypeScript with examples and best practices.",
    url: "https://www.typescriptlang.org/docs/",
    category: "Documentation",
    tags: ["TypeScript", "JavaScript", "Types"],
  },
  {
    title: "Vercel",
    description: "Deploy web projects with zero configuration and global CDN.",
    url: "https://vercel.com",
    category: "Deployment",
    tags: ["Hosting", "Deployment", "Next.js"],
  },
  {
    title: "Shadcn/ui",
    description:
      "Beautifully designed components built with Radix UI and Tailwind CSS.",
    url: "https://ui.shadcn.com",
    category: "UI Library",
    tags: ["Components", "React", "UI"],
  },
  {
    title: "MDN Web Docs",
    description:
      "Comprehensive resource for web developers with documentation on web standards.",
    url: "https://developer.mozilla.org",
    category: "Documentation",
    tags: ["Web Standards", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "GitHub",
    description:
      "The complete developer platform to build, scale, and deliver secure software.",
    url: "https://github.com",
    category: "Version Control",
    tags: ["Git", "Collaboration", "Open Source"],
  },
  {
    title: "Figma",
    description: "Collaborative interface design tool for teams.",
    url: "https://figma.com",
    category: "Design",
    tags: ["Design", "Prototyping", "Collaboration"],
  },
];

export default function BookmarksPage() {
  return (
    <div className="px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Bookmarks</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A curated collection of useful resources, tools, and documentation
          that I frequently reference.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarks.map((bookmark, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{bookmark.category}</Badge>
                    <Star className="size-4 text-yellow-500" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {bookmark.title}
                  </CardTitle>
                </div>
                <Button size="sm" variant="ghost" asChild>
                  <a
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
              <CardDescription>{bookmark.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {bookmark.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
