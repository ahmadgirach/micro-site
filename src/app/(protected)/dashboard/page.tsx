"use client";

import { useAuth } from "@/contexts/auth-context";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Plus,
  ExternalLink,
  BarChart3,
  Eye,
  MousePointer,
  Users,
  Globe,
  TrendingUp,
  Calendar,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const { user } = useAuth();

  const stats = [
    {
      label: "Profile Views",
      value: "2,847",
      change: "+12%",
      icon: Eye,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/30",
    },
    {
      label: "Link Clicks",
      value: "1,234",
      change: "+8%",
      icon: MousePointer,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/30",
    },
    {
      label: "Visitors",
      value: "892",
      change: "+15%",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/30",
    },
    {
      label: "Countries",
      value: "23",
      change: "+3",
      icon: Globe,
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/30",
    },
  ];

  const recentActivity = [
    {
      type: "view",
      message: "New visitor from United States",
      time: "2 min ago",
      color: "bg-green-500",
    },
    {
      type: "click",
      message: "LinkedIn link clicked",
      time: "5 min ago",
      color: "bg-blue-500",
    },
    {
      type: "project",
      message: "Portfolio project viewed",
      time: "12 min ago",
      color: "bg-purple-500",
    },
    {
      type: "view",
      message: "Profile shared on Twitter",
      time: "1 hour ago",
      color: "bg-cyan-500",
    },
  ];

  const quickActions = [
    { label: "Add social links", icon: Plus },
    { label: "Upload profile photo", icon: Plus },
    { label: "Create new project", icon: Plus },
    { label: "Write blog post", icon: Plus },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-6"
      >
        <Avatar className="w-20 h-20">
          <AvatarImage src={user?.user_metadata?.avatar_url} />
          <AvatarFallback className="text-2xl">
            {user?.user_metadata?.full_name?.charAt(0) ||
              user?.email?.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user?.user_metadata?.full_name || "Creator"}!
          </h1>
          <p className="text-muted-foreground mb-4">
            Here's what's happening with your microsite today.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <ExternalLink className="w-4 h-4 mr-2" />
              View My Site
            </Button>
            <Button variant="outline">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}
                  >
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Your latest site performance and visitor activity
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 ${activity.color} rounded-full`}
                    ></div>
                    <span className="text-sm">{activity.message}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Quick Actions
              </CardTitle>
              <CardDescription>
                Complete your profile and improve your microsite
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Profile completion</span>
                  <Badge variant="secondary">75%</Badge>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-2">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    className="w-full justify-start text-sm"
                  >
                    <action.icon className="w-4 h-4 mr-2" />
                    {action.label}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Performance Chart Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Performance Overview
            </CardTitle>
            <CardDescription>
              Your microsite performance over the last 30 days
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Analytics chart will be displayed here
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
