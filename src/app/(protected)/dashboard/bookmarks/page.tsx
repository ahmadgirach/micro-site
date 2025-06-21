"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  ExternalLink,
  Star,
  Edit,
  Trash2,
  Bookmark,
  Search,
  Filter,
} from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

const bookmarks = [
  {
    id: 1,
    title: "React Documentation",
    description:
      "The official React documentation with guides, API reference, and best practices for building user interfaces.",
    url: "https://react.dev",
    category: "Documentation",
    tags: ["React", "Frontend", "JavaScript"],
    isFavorite: true,
    addedAt: "March 15, 2024",
  },
  {
    id: 2,
    title: "Tailwind CSS",
    description:
      "A utility-first CSS framework packed with classes to build any design directly in your markup.",
    url: "https://tailwindcss.com",
    category: "CSS Framework",
    tags: ["CSS", "Styling", "Frontend"],
    isFavorite: true,
    addedAt: "March 12, 2024",
  },
  {
    id: 3,
    title: "Framer Motion",
    description:
      "A production-ready motion library for React with declarative animations and gestures.",
    url: "https://www.framer.com/motion/",
    category: "Animation",
    tags: ["React", "Animation", "UI"],
    isFavorite: false,
    addedAt: "March 10, 2024",
  },
  {
    id: 4,
    title: "TypeScript Handbook",
    description:
      "The complete guide to TypeScript with examples, best practices, and advanced concepts.",
    url: "https://www.typescriptlang.org/docs/",
    category: "Documentation",
    tags: ["TypeScript", "JavaScript", "Types"],
    isFavorite: true,
    addedAt: "March 8, 2024",
  },
  {
    id: 5,
    title: "Vercel Platform",
    description:
      "Deploy web projects with zero configuration, automatic scaling, and global CDN.",
    url: "https://vercel.com",
    category: "Deployment",
    tags: ["Hosting", "Deployment", "Next.js"],
    isFavorite: false,
    addedAt: "March 5, 2024",
  },
  {
    id: 6,
    title: "Shadcn/ui Components",
    description:
      "Beautifully designed components built with Radix UI and Tailwind CSS. Copy and paste into your apps.",
    url: "https://ui.shadcn.com",
    category: "UI Library",
    tags: ["Components", "React", "UI"],
    isFavorite: true,
    addedAt: "March 3, 2024",
  },
];

const categories = [
  "All",
  "Documentation",
  "CSS Framework",
  "Animation",
  "Deployment",
  "UI Library",
];

export default function BookmarksPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Bookmarks</h1>
          <p className="text-muted-foreground">
            Save and organize useful resources, tools, and documentation.
          </p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Bookmark
        </Button>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input placeholder="Search bookmarks..." className="pl-10" />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className="whitespace-nowrap"
            >
              {category}
            </Button>
          ))}
        </div>
      </motion.div>

      {/* Bookmarks Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">{bookmarks.length}</p>
                <p className="text-sm text-muted-foreground">Total Bookmarks</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Bookmark className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">
                  {bookmarks.filter((b) => b.isFavorite).length}
                </p>
                <p className="text-sm text-muted-foreground">Favorites</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">{categories.length - 1}</p>
                <p className="text-sm text-muted-foreground">Categories</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <Filter className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Bookmarks Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookmarks.map((bookmark, index) => (
          <motion.div
            key={bookmark.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-lg h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline">{bookmark.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Star
                        className={`w-4 h-4 ${
                          bookmark.isFavorite
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    </Button>
                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {bookmark.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {bookmark.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {bookmark.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    Added {bookmark.addedAt}
                  </span>
                  <Button size="sm" asChild>
                    <a
                      href={bookmark.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Visit
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {bookmarks.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <Bookmark className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No bookmarks yet</h3>
          <p className="text-muted-foreground mb-6">
            Start building your collection of useful resources and tools.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Your First Bookmark
          </Button>
        </motion.div>
      )}
    </div>
  );
}
