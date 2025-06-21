"use client";

import { useAuth } from "@/contexts/auth-context";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const getBreadcrumbs = () => {
    const segments = pathname.split("/").filter(Boolean);
    const breadcrumbs = [];

    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i];
      const href = "/" + segments.slice(0, i + 1).join("/");
      const title = segment.charAt(0).toUpperCase() + segment.slice(1);

      breadcrumbs.push({
        title,
        href,
        isLast: i === segments.length - 1,
      });
    }

    return breadcrumbs;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-muted-foreground">Loading...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
  }

  const breadcrumbs = getBreadcrumbs();

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 flex flex-col min-h-dvh">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.map((breadcrumb, index) => (
                <div key={breadcrumb.href} className="flex items-center">
                  {index > 0 && <BreadcrumbSeparator className="mx-2" />}
                  <BreadcrumbItem>
                    {breadcrumb.isLast ? (
                      <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={breadcrumb.href}>
                        {breadcrumb.title}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex-1 p-6 bg-gray-50 dark:bg-gray-900">{children}</div>
      </main>
    </SidebarProvider>
  );
}
