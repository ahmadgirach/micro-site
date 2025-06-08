"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Palette, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";

const reasons = [
  {
    icon: Github,
    title: "Open Source",
    description:
      "Completely open source and transparent. Contribute to the project and help shape the future.",
    badge: "Community Driven",
    color: "text-gray-700 dark:text-gray-300",
  },
  {
    icon: Palette,
    title: "Superior Design",
    description:
      "Beautiful, modern templates that make you stand out. No more boring, cookie-cutter profiles.",
    badge: "Design First",
    color: "text-pink-600",
  },
  {
    icon: Shield,
    title: "Privacy Focused",
    description:
      "Your data belongs to you. No tracking, no ads, no selling your information to third parties.",
    badge: "Privacy First",
    color: "text-green-600",
  },
  {
    icon: Users,
    title: "Built for Everyone",
    description:
      "From creators to professionals, our platform adapts to your needs with flexible customization.",
    badge: "Inclusive",
    color: "text-blue-600",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose Our Platform?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We're not just another link-in-bio tool. Here's what makes us
            different from the competition.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className={`w-6 h-6 ${reason.color}`} />
                        </div>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                            {reason.title}
                          </h3>
                          <Badge variant="secondary" className="text-xs">
                            {reason.badge}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 px-6 py-3 rounded-full shadow-lg">
            <span className="text-sm font-medium">
              Join 50,000+ creators who chose us over
            </span>
            <span className="text-sm text-muted-foreground line-through">
              about.me
            </span>
            <span className="text-sm text-muted-foreground line-through">
              linktree
            </span>
            <span className="text-sm text-muted-foreground line-through">
              bio.link
            </span>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
