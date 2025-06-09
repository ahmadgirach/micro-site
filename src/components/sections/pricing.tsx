"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started with your digital presence",
    badge: null,
    features: [
      "Beautiful Microsite page",
      "Single default theme",
      "Social links",
      "Projects Showcase",
      "Mobile optimized",
    ],
    cta: "Get Started for Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "lifetime",
    description: "Everything you need to build a professional online presence",
    // badge: "Most Popular",
    badge: null,
    features: [
      "Everything in Free",
      "Testimonials Showcase",
      "Markdown Blog",
      "Save/Show Bookmarks",
      "One-click PDF resume export",
      "Analytics",
      "Video Introduction",
      "Multiple themes",
      "Remove Microsite branding",
    ],
    cta: "Coming Soon",
    popular: true,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Start free and upgrade when you're ready. No monthly fees, no hidden
            costs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "md:scale-105" : ""}`}
            >
              <Card
                className={`h-full ${
                  plan.popular
                    ? "border-2 border-blue-500 shadow-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20"
                    : "border shadow-lg"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl md:text-5xl font-bold">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      / {plan.period}
                    </span>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center ${
                            plan.popular
                              ? "bg-blue-100 dark:bg-blue-900/30"
                              : "bg-gray-100 dark:bg-gray-800"
                          }`}
                        >
                          <Check
                            className={`w-3 h-3 ${
                              plan.popular
                                ? "text-blue-600"
                                : "text-gray-600 dark:text-gray-400"
                            }`}
                          />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full py-6 text-lg ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.popular && <Zap className="w-5 h-5 mr-2" />}
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-full">
            <span className="text-sm font-medium">💡 Pro tip:</span>
            <span className="text-sm text-muted-foreground">
              Pay once, own forever. No subscription hassles!
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
