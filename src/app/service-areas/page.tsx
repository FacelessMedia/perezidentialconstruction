import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { COMPANY, SERVICE_AREAS, SERVICES } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Service Areas - Remodeling Services in McHenry County, IL",
  description:
    "Perezidential Construction serves Wonder Lake, McHenry, Crystal Lake, Woodstock, Lake in the Hills & surrounding areas in Northern Illinois. Kitchen & bathroom remodeling, whole house remodeling & home additions.",
  alternates: {
    canonical: `${COMPANY.url}/service-areas`,
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "Service Areas", url: `${COMPANY.url}/service-areas` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-primary py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/images/areas-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">
            Where We Work
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            Proudly Serving{" "}
            <span className="text-gold-gradient">McHenry County &amp; Beyond</span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            From our home base in Wonder Lake, we provide expert remodeling and
            construction services across Northern Illinois.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="service-card bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
                  <MapPin className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h2 className="text-2xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {area.name}, {area.state}
                </h2>
                <p className="text-neutral-500 text-sm mb-4">ZIP: {area.zip}</p>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {area.description.substring(0, 120)}...
                </p>
                <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Services Available in All Areas
          </h2>
          <p className="text-neutral-600 text-lg mb-12 max-w-2xl mx-auto">
            No matter where you are in our service area, you get access to our full
            range of professional remodeling and construction services.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200 hover:shadow-md hover:border-accent/30 transition-all"
              >
                <h3 className="font-bold text-primary mb-2">{service.title}</h3>
                <p className="text-neutral-600 text-sm">{service.shortDescription.substring(0, 80)}...</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t See Your Area?
          </h2>
          <p className="text-neutral-300 text-lg mb-8">
            We may still be able to serve you. Contact us to discuss your project
            location and we&apos;ll let you know if we can help.
          </p>
          <Link
            href="/contact"
            className="gold-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
