"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface ContactFormProps {
  source?: string;
  compact?: boolean;
}

export default function ContactForm({ source = "website", compact = false }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // GHL webhook integration - replace with actual GHL webhook URL
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      message: formData.get("message"),
      source: source,
    };

    try {
      // TODO: Replace with your GHL webhook URL
      // await fetch("https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_ID", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      console.log("Form submission data:", data);
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700">
          We&apos;ve received your request and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1.5">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-neutral-800"
            placeholder="John"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-neutral-800"
            placeholder="Doe"
          />
        </div>
      </div>

      <div className={compact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-neutral-800"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-neutral-800"
            placeholder="(815) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-neutral-800 bg-white"
        >
          <option value="">Select a service...</option>
          <option value="Kitchen Remodeling">Kitchen Remodeling</option>
          <option value="Bathroom Remodeling">Bathroom Remodeling</option>
          <option value="Whole House Remodeling">Whole House Remodeling</option>
          <option value="Home Additions">Home Additions</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1.5">
          Tell Us About Your Project
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 5}
          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all text-neutral-800 resize-none"
          placeholder="Describe your project, timeline, and any specific requirements..."
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full gold-gradient text-white px-6 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading ? (
          "Sending..."
        ) : (
          <>
            <Send className="w-4 h-4" />
            Request Free Quote
          </>
        )}
      </button>

      <p className="text-xs text-neutral-500 text-center">
        By submitting this form, you agree to be contacted regarding your project. We respect your privacy.
      </p>
    </form>
  );
}
