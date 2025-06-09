// app/terms/page.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 space-y-10">
      <h1 className="text-4xl font-bold text-center">Terms of Service</h1>
      <p className="text-sm text-center text-gray-500">
        Last updated: June 9, 2025
      </p>

      <Card>
        <CardContent className="space-y-8 py-6 px-4 md:px-6">
          <section>
            <h2 className="text-2xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700">
              By using Microsite, you agree to these Terms of Service and our
              Privacy Policy. If you do not agree, please do not use the app.
            </p>
          </section>
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Use of Service</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>
                You may use the service to build and host personal microsites
              </li>
              <li>You must not use it for illegal or harmful purposes</li>
              <li>You're responsible for the content you publish</li>
            </ul>
          </section>
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Account & Access</h2>
            <p className="text-gray-700">
              You are responsible for maintaining your login credentials and
              access to your Google account. We are not liable for unauthorized
              access due to your actions.
            </p>
          </section>
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              4. Pro Features & Payment
            </h2>
            <p className="text-gray-700">
              Pro features are offered as a onetime payment for early adopters.
              We might change this to monthly/annual subscription later.
            </p>
          </section>
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">
              5. Content & Ownership
            </h2>
            <p className="text-gray-700">
              You retain ownership of your content. By posting, you grant us a
              license to display and store your content on our platform.
            </p>
          </section>
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Termination</h2>
            <p className="text-gray-700">
              We reserve the right to suspend or terminate your account for
              violation of these terms or abuse of the platform.
            </p>
          </section>
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Modifications</h2>
            <p className="text-gray-700">
              We may update these terms at any time. Changes will be posted
              here, and major changes may be notified via email or in-app.
            </p>
          </section>
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">8. Liability</h2>
            <p className="text-gray-700">
              We are not liable for data loss, downtime, or damages caused by
              third-party services or misuse of the app.
            </p>
          </section>
          <Separator />

          <section>
            <h2 className="text-2xl font-semibold mb-2">9. Contact</h2>
            <p className="text-gray-700">
              For questions, send us an{" "}
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
