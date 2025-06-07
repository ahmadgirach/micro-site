import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { Blog } from "@/components/sections/blog";
import { Skills } from "@/components/sections/skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Blog />
      <Testimonials />
    </div>
  );
}
