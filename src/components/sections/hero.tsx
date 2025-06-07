"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  const socialLinks = [
    { name: "GitHub", href: "#", icon: Github },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Email", href: "mailto:alex@example.com", icon: Mail },
  ];

  return (
    <section className="px-4 py-16 mt-12">
      <div className="flex flex-col md:flex-row gap-10 items-center justify-start">
        {/* Left Column - Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative">
            <Avatar className="size-50 rounded-md">
              <AvatarImage
                // src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ahmad Girach"
                className="object-cover rounded-md"
              />
              <AvatarFallback className="text-6xl rounded-md">
                AG
              </AvatarFallback>
            </Avatar>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 size-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 size-32 bg-primary/5 rounded-full blur-xl"></div>
          </div>
        </motion.div>

        {/* Right Column - Bio */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 text-center lg:text-left"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold"
            >
              <span className="text-primary">Ahmad Girach</span>
            </motion.h1>

            {/* <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground"
            >
              Full Stack Developer
            </motion.p> */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl text-muted-foreground leading-relaxed"
            >
              Sr. Software Engineer focusing on building scalable web apps.
            </motion.p>
          </div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Button size="lg" className="gap-2">
              <Download className="size-4" />
              Download Resume
            </Button>
            <Button size="lg" variant="outline">
              View My Work
            </Button>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors rounded-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="size-6" />
                  <span className="sr-only">{link.name}</span>
                </a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <div className="mt-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg text-muted-foreground leading-relaxed bg-secondary rounded-md p-8 text-balance"
        >
          I'm passionate about creating exceptional digital experiences through
          clean code, innovative solutions, and user-centered design.
          Specializing in React, Next.js, and modern web technologies to build
          scalable applications that make a difference.
        </motion.p>
      </div>
    </section>
  );
}
