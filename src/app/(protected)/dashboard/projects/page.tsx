"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Plus,
  ExternalLink,
  Github,
  Edit,
  Trash2,
  FolderOpen,
  Calendar,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution built with Next.js, featuring product management, cart functionality, and payment integration.",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    status: "Published",
    views: 1234,
    createdAt: "March 15, 2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image:
      "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    status: "Draft",
    views: 567,
    createdAt: "March 10, 2024",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI-Powered Analytics",
    description:
      "A data visualization dashboard that uses machine learning to provide insights and predictions for business metrics.",
    image:
      "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Python", "React", "TensorFlow", "D3.js"],
    status: "Published",
    views: 2341,
    createdAt: "March 5, 2024",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Projects</h1>
          <p className="text-muted-foreground">
            Showcase your work and manage your project portfolio.
          </p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          New Project
        </Button>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-lg">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge
                    variant={
                      project.status === "Published" ? "default" : "secondary"
                    }
                    className={
                      project.status === "Published"
                        ? "bg-green-100 text-green-800"
                        : ""
                    }
                  >
                    {project.status}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Eye className="w-4 h-4" />
                    {project.views}
                  </div>
                </div>

                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {project.createdAt}
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between pt-4 border-t">
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Live
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </Button>
                </div>

                <div className="flex gap-1">
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
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <FolderOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
          <p className="text-muted-foreground mb-6">
            Start showcasing your work by creating your first project.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Create Your First Project
          </Button>
        </motion.div>
      )}
    </div>
  );
}
