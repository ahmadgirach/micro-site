"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import Link from "next/link";

export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-0 shadow-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardHeader className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center">
            <AlertCircle className="w-8 h-8 text-red-600" />
          </div>

          <div className="space-y-2">
            <CardTitle className="text-2xl font-bold">
              Authentication Error
            </CardTitle>
            <CardDescription className="text-base">
              Something went wrong during the sign-in process
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 text-center">
          <p className="text-muted-foreground">
            We encountered an issue while trying to sign you in. This could be
            due to:
          </p>

          <ul className="text-sm text-muted-foreground space-y-2 text-left">
            <li>• The authentication link has expired</li>
            <li>• The link was already used</li>
            <li>• A temporary server issue</li>
          </ul>

          <div className="space-y-3">
            <Button asChild className="w-full">
              <Link href="/login">Try Again</Link>
            </Button>

            <Button variant="outline" asChild className="w-full">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
