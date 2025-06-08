"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { motion } from "framer-motion";

export function HeroLanding() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-[90%] mx-auto px-4 py-20 lg:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Sparkles className="w-4 h-4" />
                Perfect for Designers, Developers & Creators
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Create Your Perfect
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Microsite
                </span>
                <br />
                in Minutes
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg"
              >
                Build stunning bio pages with your social links, projects, and
                blog. No coding experience needed. Share one link that contains
                everything about you.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
              >
                Start Building Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-lg group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Free Forever
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                No Credit Card
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                Setup in 5 Minutes
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Phone mockup */}
              <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900 rounded-t-[2.5rem] flex items-center justify-center">
                    <div className="w-20 h-1 bg-gray-600 rounded-full"></div>
                  </div>

                  {/* Screen content */}
                  <div className="pt-12 px-6 h-full bg-gradient-to-br from-blue-50 to-purple-50">
                    {/* Profile section */}
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
                      <h3 className="font-bold text-lg text-gray-900">
                        Sarah Chen
                      </h3>
                      <p className="text-gray-600 text-sm">UI/UX Designer</p>
                    </div>

                    {/* Links */}
                    <div className="space-y-3">
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg"></div>
                          <span className="text-gray-800 font-medium">
                            Portfolio
                          </span>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-purple-100 rounded-lg"></div>
                          <span className="text-gray-800 font-medium">
                            Instagram
                          </span>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-100 rounded-lg"></div>
                          <span className="text-gray-800 font-medium">
                            Contact
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 blur-xl"></div>

              {/* Floating stats */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-8 top-20 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2.5k</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Profile Views
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -right-8 bottom-32 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">98%</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    Click Rate
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
