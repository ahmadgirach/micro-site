import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "Building Scalable React Applications with TypeScript",
    description:
      "Learn how to structure large React applications using TypeScript, focusing on maintainability and developer experience.",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "React",
    image:
      "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "The Future of Web Development: Server Components",
    description:
      "Exploring the benefits and implementation of React Server Components in modern web applications.",
    date: "March 10, 2024",
    readTime: "12 min read",
    category: "Next.js",
    image:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Optimizing Database Queries for Better Performance",
    description:
      "Techniques and strategies for improving database performance in web applications.",
    date: "March 5, 2024",
    readTime: "10 min read",
    category: "Backend",
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "CSS-in-JS vs Tailwind CSS: A Comprehensive Comparison",
    description:
      "Analyzing the pros and cons of different styling approaches in modern web development.",
    date: "February 28, 2024",
    readTime: "15 min read",
    category: "CSS",
    image:
      "https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Implementing Authentication in Next.js Applications",
    description:
      "A step-by-step guide to adding secure authentication to your Next.js projects.",
    date: "February 20, 2024",
    readTime: "18 min read",
    category: "Security",
    image:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Building Real-time Applications with WebSockets",
    description:
      "Learn how to implement real-time features using WebSockets in modern web applications.",
    date: "February 15, 2024",
    readTime: "14 min read",
    category: "WebSocket",
    image:
      "https://images.pexels.com/photos/11035224/pexels-photo-11035224.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function BlogPage() {
  return (
    <div className="px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development, technology,
          and best practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="aspect-video overflow-hidden rounded-t-lg">
              <img
                src={post.image}
                alt={post.title}
                className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
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
        ))}
      </div>
    </div>
  );
}
