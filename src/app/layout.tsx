import type { Metadata } from "next";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { geistMono, geistSans } from "./ui/fonts";

import "./globals.css";

export const metadata: Metadata = {
  title:
    "Microsite – Create a Personal Website with Projects, Blog, and Social Links. No Code, Open Source.",
  description:
    "Microsite is an open-source, no-code tool that lets developers, creators, and indie makers build beautiful personal sites to share their bio, blog, projects, and social links — all in one place.",
  keywords: [
    "microsite",
    "personal site builder",
    "no-code website builder",
    "open source website",
    "developer portfolio",
    "indie maker tools",
    "project showcase site",
    "free site builder",
    "show bookmarks",
    "resume pdf export",
    "video introduction portfolio",
  ],
  openGraph: {
    title: "Microsite – Build Your Personal Site in Minutes",
    description:
      "An open-source, no-code tool to create your own bio, blog, and project showcase. Perfect for indie makers and devs.",
    url: "https://yourdomain.com", // replace with actual domain
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-image.png", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Microsite preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsite – Personal Site Builder for Creators",
    description:
      "Create a beautiful site with blog, projects, and links. Open source and no code required.",
    images: ["https://yourdomain.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="min-h-dvh flex flex-col">
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
