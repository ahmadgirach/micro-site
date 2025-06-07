"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const featuredPosts = [
  {
    title: "Building Scalable React Applications with TypeScript",
    description:
      "Learn how to structure large React applications using TypeScript for better maintainability.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "React",
  },
  {
    title: "The Future of Web Development: Server Components",
    description:
      "Exploring the benefits and implementation of React Server Components in modern web apps.",
    date: "March 10, 2024",
    readTime: "12 min read",
    category: "Next.js",
  },
  {
    title: "Optimizing Database Queries for Better Performance",
    description:
      "Techniques and strategies for improving database performance in web applications.",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Backend",
  },
];

export function Blog() {
  return (
    <section className="px-4 py-16">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Latest Blog Posts
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Thoughts and insights about web development, technology, and best
          practices
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {featuredPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="size-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors h-22">
                  {post.title}
                </CardTitle>
                <CardDescription className="h-14">
                  {post.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="size-4 mr-2" />
                  {post.date}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <Button asChild size="lg">
          <Link href="/blog">View All Posts</Link>
        </Button>
      </motion.div>
    </section>
  );
}
