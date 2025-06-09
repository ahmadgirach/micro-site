// app/privacy/page.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 space-y-10">
      <h1 className="text-4xl font-bold text-center">Privacy Policy</h1>
      <p className="text-sm text-center text-gray-500">
        Last updated: June 9, 2025
      </p>

      <Card>
        <CardContent className="space-y-8 py-6 px-4 md:px-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Google sign-in: name, email, and profile photo</li>
              <li>
                Your profile: bio, projects, blogs, bookmarks, social links
              </li>
              <li>Pro analytics: visits, device type, referrer, timestamps</li>
              <li>Preferences: theme, layout, visibility</li>
            </ul>
          </section>
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>To build and host your microsite</li>
              <li>To improve performance and reliability</li>
              <li>To show analytics (for Pro users)</li>
              <li>To respond to support requests</li>
            </ul>
            <p className="text-gray-700 mt-2">
              We <strong>do not</strong> sell or share your data with
              advertisers.
            </p>
          </section>
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Cookies</h2>
            <p className="text-gray-700">We use cookies to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
              <li>Keep you logged in</li>
              <li>Store your theme and layout preferences</li>
              <li>Track basic usage for performance</li>
            </ul>
          </section>
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              4. Data Sharing & Third Parties
            </h2>
            <p className="text-gray-700">
              We use trusted third-party services:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
              <li>Supabase – database & auth</li>
              <li>Vercel – hosting</li>
              <li>Cloudinary – image storage</li>
              <li>Analytics platform – visitor stats</li>
            </ul>
          </section>
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              5. Your Data, Your Control
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Edit or delete your content any time</li>
              <li>Request full data deletion by contacting us</li>
              <li>Control analytics visibility (public/private)</li>
            </ul>
          </section>
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              6. Children’s Privacy
            </h2>
            <p className="text-gray-700">
              This app is not for children under 13. We don’t knowingly collect
              data from minors.
            </p>
          </section>
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-700">
              We may update this policy from time to time. Major changes will be
              announced via email or in-app.
            </p>
          </section>
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">8. Contact Us</h2>
            <p className="text-gray-700">
              Questions? Send us an{" "}
              <a
                href="mailto:ahmedkhatri6@gmail.com"
                className="text-blue-600 underline"
              >
                Email
              </a>
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
