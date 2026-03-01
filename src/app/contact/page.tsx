import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Facebook } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Remodeling Quote",
  description: `Contact Perezidential Construction for a free remodeling quote. Kitchen remodeling, bathroom remodeling, whole house remodeling & home additions in Wonder Lake, McHenry, Crystal Lake & surrounding areas. Call ${COMPANY.phone}.`,
  alternates: {
    canonical: `${COMPANY.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "Contact Us", url: `${COMPANY.url}/contact` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-primary py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/images/contact-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            Let&apos;s Talk About{" "}
            <span className="text-gold-gradient">Your Project</span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Ready to transform your home? Contact us today for a free,
            no-obligation consultation and estimate.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Phone</h3>
                    <a
                      href={`tel:${COMPANY.phone}`}
                      className="text-neutral-600 hover:text-accent transition-colors"
                    >
                      {COMPANY.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Email</h3>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-neutral-600 hover:text-accent transition-colors"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Address</h3>
                    <p className="text-neutral-600">{COMPANY.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Business Hours</h3>
                    <p className="text-neutral-600 text-sm">
                      Monday - Friday: 6:00 AM - 9:00 PM
                      <br />
                      Saturday: Closed
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Facebook className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Follow Us</h3>
                    <a
                      href={COMPANY.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-600 hover:text-accent transition-colors text-sm"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-neutral-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-neutral-500 p-8">
                  <MapPin className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm font-medium">Google Map</p>
                  <p className="text-xs mt-1">Wonder Lake, IL 60097</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-neutral-50 rounded-2xl p-8 sm:p-10 border border-neutral-200">
                <h2 className="text-2xl font-bold text-primary mb-2">
                  Request a Free Quote
                </h2>
                <p className="text-neutral-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24
                  hours with a free estimate for your project.
                </p>
                <ContactForm source="contact-page" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
