"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️", level: "Expert" },
  { name: "Next.js", icon: "▲", level: "Expert" },
  { name: "TypeScript", icon: "🔷", level: "Advanced" },
  { name: "JavaScript", icon: "🟨", level: "Expert" },
  { name: "Tailwind CSS", icon: "🎨", level: "Expert" },
  { name: "Node.js", icon: "🟢", level: "Advanced" },
  { name: "Python", icon: "🐍", level: "Advanced" },
  { name: "PostgreSQL", icon: "🐘", level: "Advanced" },
  { name: "MongoDB", icon: "🍃", level: "Intermediate" },
  { name: "Git", icon: "📝", level: "Expert" },
  { name: "AWS", icon: "☁️", level: "Intermediate" },
  { name: "Docker", icon: "🐳", level: "Intermediate" },
  { name: "Figma", icon: "🎯", level: "Advanced" },
  { name: "GraphQL", icon: "🔗", level: "Intermediate" },
  { name: "Redis", icon: "🔴", level: "Intermediate" },
  { name: "Prisma", icon: "⚡", level: "Advanced" },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Expert":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
    case "Advanced":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
  }
};

export function Skills() {
  return (
    <section className="px-4 py-16">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Technical Skills/Stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Technologies and tools I use frequently
        </motion.p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            whileHover={{
              y: -8,
              transition: { duration: 0.2 },
            }}
          >
            <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 h-full">
              <CardContent className="text-center space-y-3 h-full flex flex-col justify-center">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 },
                  }}
                  className="flex justify-center items-center"
                >
                  <div className="size-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center text-2xl group-hover:shadow-md">
                    {skill.icon}
                  </div>
                </motion.div>

                <div className="space-y-2">
                  <h4 className="text-sm font-semibold group-hover:text-primary transition-colors duration-300">
                    {skill.name}
                  </h4>
                  <Badge
                    variant="secondary"
                    className={`${getLevelColor(
                      skill.level
                    )} transition-all duration-300 group-hover:scale-105 text-xs px-2 py-0.5`}
                  >
                    {skill.level}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
