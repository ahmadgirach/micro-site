import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Heart } from "lucide-react";
import { bricolageGrotesque } from "@/app/ui/fonts";

export function FooterLanding() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    product: [
      { name: "Home", href: "/" },
      { name: "Features", href: "#features" },
      { name: "Why Choose Us?", href: "#why-choose-us" },
      { name: "Pricing", href: "#pricing" },
      { name: "FAQs", href: "#faqs" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
    ],
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/ahmadgirach/microsite",
      icon: Github,
    },
    { name: "Twitter", href: "https://x.com/MrAhmadGirach", icon: Twitter },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/ahmadgirach",
      icon: Linkedin,
    },
    { name: "Email", href: "mailto:ahmedkhatri6@gmail.com", icon: Mail },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <h3
              className={`${bricolageGrotesque.className} text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-tighter`}
            >
              Microsite
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-md text-balance">
              Build stunning portfolio page with your bio, socials, projects and
              blog — all in one place. No coding experience needed. Open Source.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Microsite. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="size-4 font-medium fill-red-700 stroke-0" />
              <span>by</span>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://ahmadgirach.com"
                className="text-indigo-400"
              >
                Ahmad Girach.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
