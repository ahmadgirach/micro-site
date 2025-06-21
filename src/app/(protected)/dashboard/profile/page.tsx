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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Camera,
  Plus,
  X,
  MapPin,
  Globe,
  LucideIcon,
  UserPen,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  BehanceIcon,
  DribbleIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  StackOverflowIcon,
  XIcon,
  YouTubeIcon,
} from "@/components/icons";

type SocialLink = {
  platform: string;
  url: string;
  icon: LucideIcon | React.FC<React.SVGProps<SVGSVGElement>>;
};

export default function ProfilePage() {
  const { user } = useAuth();
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/",
      icon: LinkedInIcon,
    },
    { platform: "X", url: "https://x.com/", icon: XIcon },
    {
      platform: "Instagram",
      url: "https://instagram.com/",
      icon: InstagramIcon,
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/",
      icon: YouTubeIcon,
    },
    {
      platform: "GitHub",
      url: "https://github.com/",
      icon: GitHubIcon,
    },
    {
      platform: "StackOverflow",
      url: "https://stackoverflow.com/",
      icon: StackOverflowIcon,
    },
    {
      platform: "Dribbble",
      url: "https://dribbble.com/",
      icon: DribbleIcon,
    },
    {
      platform: "Behance",
      url: "https://behance.net/",
      icon: BehanceIcon,
    },
  ]);

  const [skills, setSkills] = useState([
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Python",
  ]);

  const addSocialLink = () => {
    setSocialLinks([
      ...socialLinks,
      { platform: "Website", url: "", icon: Globe },
    ]);
  };

  const removeSocialLink = (index: number) => {
    setSocialLinks(socialLinks.filter((_, i) => i !== index));
  };

  const addSkill = (skill: string) => {
    if (skill.trim() && !skills.includes(skill.trim())) {
      setSkills([...skills, skill.trim()]);
    }
  };

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your profile information and customize how you appear to
          visitors.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Picture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Picture
              </CardTitle>
              <CardDescription>
                Upload a professional photo that represents you
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={user?.user_metadata?.avatar_url} />
                  <AvatarFallback className="text-2xl">
                    {user?.user_metadata?.full_name?.charAt(0) ||
                      user?.email?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <Button variant="outline" className="w-full">
                  <Camera className="w-4 h-4 mr-2" />
                  Change Photo
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Basic Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserPen className="size-5" />
                Basic Information
              </CardTitle>
              <CardDescription>
                Your personal details and professional information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    defaultValue={user?.user_metadata?.full_name || ""}
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={user?.email || ""}
                    disabled
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Professional Title</Label>
                  <Input id="title" placeholder="Senior Product Designer" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="San Francisco, CA" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell visitors about yourself, your work, and what you're passionate about..."
                  className="min-h-[120px]"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Social Links</CardTitle>
            <CardDescription>
              Add your social media profiles and professional links
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                >
                  <div className="size-8 bg-white dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <Input type="url" defaultValue={link.url} />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeSocialLink(index)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              );
            })}

            <Button
              variant="outline"
              onClick={addSocialLink}
              className="w-full"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Social Link
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      {/* Skills & Interests */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle>Skills & Interests</CardTitle>
            <CardDescription>
              Showcase your expertise and areas of interest
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-3 py-1 cursor-pointer hover:bg-red-100 hover:text-red-800 transition-colors"
                  onClick={() => removeSkill(skill)}
                >
                  {skill}
                  <X className="w-3 h-3 ml-2" />
                </Badge>
              ))}
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Add a skill..."
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    addSkill(e.currentTarget.value);
                    e.currentTarget.value = "";
                  }
                }}
              />
              <Button variant="outline">
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div> */}

      {/* Save Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex justify-end"
      >
        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
          Save Changes
        </Button>
      </motion.div>
    </div>
  );
}
