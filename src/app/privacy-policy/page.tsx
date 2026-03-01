import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${COMPANY.name}. Learn how we collect, use, and protect your personal information.`,
  alternates: {
    canonical: `${COMPANY.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "Privacy Policy", url: `${COMPANY.url}/privacy-policy` },
        ]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-primary mb-8">Privacy Policy</h1>
          <div className="prose prose-neutral max-w-none text-neutral-600 space-y-6">
            <p className="text-lg">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8">Information We Collect</h2>
            <p>
              When you contact us through our website forms, we collect personal
              information including your name, email address, phone number, and
              details about your project. This information is used solely to
              respond to your inquiry and provide you with the services you request.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8">How We Use Your Information</h2>
            <p>We use the information you provide to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to your inquiries and provide project estimates</li>
              <li>Communicate with you about your remodeling or construction project</li>
              <li>Improve our website and services</li>
              <li>Send follow-up communications related to your inquiry (with your consent)</li>
            </ul>

            <h2 className="text-2xl font-bold text-primary mt-8">Information Sharing</h2>
            <p>
              We do not sell, trade, or share your personal information with third
              parties, except as necessary to provide our services or as required by
              law.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal
              information from unauthorized access, alteration, or disclosure.
            </p>

            <h2 className="text-2xl font-bold text-primary mt-8">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us
              at{" "}
              <a href={`mailto:${COMPANY.email}`} className="text-accent hover:underline">
                {COMPANY.email}
              </a>{" "}
              or call us at{" "}
              <a href={`tel:${COMPANY.phone}`} className="text-accent hover:underline">
                {COMPANY.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
