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
  Edit,
  Trash2,
  Eye,
  Calendar,
  Clock,
  PenTool,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";

const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications with TypeScript",
    excerpt:
      "Learn how to structure large React applications using TypeScript, focusing on maintainability and developer experience. This comprehensive guide covers...",
    status: "Published",
    category: "React",
    publishedAt: "March 15, 2024",
    readTime: "8 min read",
    views: 2847,
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "The Future of Web Development: Server Components",
    excerpt:
      "Exploring the benefits and implementation of React Server Components in modern web applications. Discover how this new paradigm...",
    status: "Draft",
    category: "Next.js",
    publishedAt: "March 10, 2024",
    readTime: "12 min read",
    views: 0,
    image:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "Optimizing Database Queries for Better Performance",
    excerpt:
      "Techniques and strategies for improving database performance in web applications. From indexing to query optimization...",
    status: "Published",
    category: "Backend",
    publishedAt: "March 5, 2024",
    readTime: "10 min read",
    views: 1234,
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Blog Posts</h1>
          <p className="text-muted-foreground">
            Share your thoughts and expertise with your audience.
          </p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </motion.div>

      {/* Blog Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Total Posts</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">8,429</p>
                <p className="text-sm text-muted-foreground">Total Views</p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-muted-foreground">Drafts</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                <PenTool className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Blog Posts List */}
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-48 aspect-video md:aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={
                          post.status === "Published" ? "default" : "secondary"
                        }
                        className={
                          post.status === "Published"
                            ? "bg-green-100 text-green-800"
                            : ""
                        }
                      >
                        {post.status}
                      </Badge>
                      <Badge variant="outline">{post.category}</Badge>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors cursor-pointer">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.publishedAt}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>

                    {post.status === "Published" && (
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views.toLocaleString()} views
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {blogPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <PenTool className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No blog posts yet</h3>
          <p className="text-muted-foreground mb-6">
            Start sharing your knowledge and insights with your first blog post.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Write Your First Post
          </Button>
        </motion.div>
      )}
    </div>
  );
}
