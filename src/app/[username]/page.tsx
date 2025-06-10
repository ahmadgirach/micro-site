import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Testimonials } from "@/components/sections/testimonials";
import { Blog } from "@/components/sections/blog";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Projects />
      <Blog />
      <Testimonials />
    </div>
  );
}
