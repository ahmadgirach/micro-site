"use client";

import { useAuth } from "@/contexts/auth-context";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Plus,
  ExternalLink,
  BarChart3,
  Settings,
  LogOut,
  Globe,
  Users,
  Eye,
  MousePointer,
} from "lucide-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { user, loading, signOut } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <div className="size-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-muted-foreground">Loading...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
  }

  const stats = [
    {
      label: "Profile Views",
      value: "2,847",
      icon: Eye,
      color: "text-blue-600",
    },
    {
      label: "Link Clicks",
      value: "1,234",
      icon: MousePointer,
      color: "text-green-600",
    },
    { label: "Visitors", value: "892", icon: Users, color: "text-purple-600" },
    { label: "Countries", value: "23", icon: Globe, color: "text-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Microsite
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src={user.user_metadata?.avatar_url} />
                <AvatarFallback>
                  {user.user_metadata?.full_name?.charAt(0) ||
                    user.email?.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <Avatar className="w-16 h-16">
              <AvatarImage src={user.user_metadata?.avatar_url} />
              <AvatarFallback className="text-xl">
                {user.user_metadata?.full_name?.charAt(0) ||
                  user.email?.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, {user.user_metadata?.full_name || "Creator"}!
              </h1>
              <p className="text-muted-foreground">
                Ready to build something amazing today?
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Plus className="w-4 h-4 mr-2" />
              Create New Site
            </Button>
            <Button variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              View My Site
            </Button>
            <Button variant="outline">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                    <div
                      className={`w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-700 flex items-center justify-center ${stat.color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Recent Activity */}
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Your latest site performance and visitor activity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">
                    New visitor from United States
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">2 min ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">LinkedIn link clicked</span>
                </div>
                <span className="text-xs text-muted-foreground">5 min ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Portfolio project viewed</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  12 min ago
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Quick Start */}
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Quick Start
              </CardTitle>
              <CardDescription>
                Get the most out of your microsite
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Complete your profile</span>
                  <Badge variant="secondary">80%</Badge>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add social links
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Upload profile photo
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-sm"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Connect custom domain
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
