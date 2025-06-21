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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Plus,
  Star,
  Edit,
  Trash2,
  MessageSquare,
  Calendar,
  User,
} from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    company: "TechCorp Inc.",
    avatar:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    content:
      "Working with John was an absolute pleasure. His attention to detail and ability to translate complex requirements into beautiful, functional designs is remarkable. The project was delivered on time and exceeded our expectations.",
    rating: 5,
    project: "E-commerce Platform",
    status: "Published",
    addedAt: "March 15, 2024",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "CEO",
    company: "StartupXYZ",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
    content:
      "John's expertise in full-stack development helped us launch our MVP in record time. His code quality is exceptional, and he provided valuable insights throughout the development process.",
    rating: 5,
    project: "Task Management App",
    status: "Published",
    addedAt: "March 10, 2024",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "GrowthLab",
    avatar:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400",
    content:
      "The analytics dashboard John built for us has been instrumental in our decision-making process. The visualizations are clear, insightful, and the performance is outstanding.",
    rating: 5,
    project: "AI Analytics Dashboard",
    status: "Draft",
    addedAt: "March 8, 2024",
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO",
    company: "InnovateTech",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    content:
      "John is a rare find - a developer who combines technical excellence with great communication skills. He understood our vision perfectly and delivered a solution that scales beautifully.",
    rating: 5,
    project: "Microservices Architecture",
    status: "Published",
    addedAt: "March 5, 2024",
  },
];

export default function TestimonialsPage() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold mb-2">Testimonials</h1>
          <p className="text-muted-foreground">
            Showcase client feedback and build trust with potential customers.
          </p>
        </div>
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Testimonial
        </Button>
      </motion.div>

      {/* Testimonials Stats */}
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
                <p className="text-2xl font-bold">{testimonials.length}</p>
                <p className="text-sm text-muted-foreground">
                  Total Testimonials
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">
                  {testimonials.filter((t) => t.status === "Published").length}
                </p>
                <p className="text-sm text-muted-foreground">Published</p>
              </div>
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold">4.9</p>
                <p className="text-sm text-muted-foreground">Average Rating</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600 fill-current" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-lg h-full">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <Badge
                    variant={
                      testimonial.status === "Published"
                        ? "default"
                        : "secondary"
                    }
                    className={
                      testimonial.status === "Published"
                        ? "bg-green-100 text-green-800"
                        : ""
                    }
                  >
                    {testimonial.status}
                  </Badge>
                  <div className="flex items-center gap-1">
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

                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  "{testimonial.content}"
                </blockquote>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground pt-4 border-t">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {testimonial.addedAt}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.project}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {testimonials.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">No testimonials yet</h3>
          <p className="text-muted-foreground mb-6">
            Start collecting client feedback to build trust and credibility.
          </p>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Plus className="w-4 h-4 mr-2" />
            Add Your First Testimonial
          </Button>
        </motion.div>
      )}
    </div>
  );
}
