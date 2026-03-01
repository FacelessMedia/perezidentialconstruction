import type { Metadata } from "next";
import Link from "next/link";
import { ChefHat, Bath, Home, Building, ArrowRight, CheckCircle } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Remodeling & Construction Services in McHenry County, IL",
  description:
    "Explore our full range of remodeling services: kitchen remodeling, bathroom remodeling, whole house remodeling, and home additions. Serving Wonder Lake, McHenry, Crystal Lake & surrounding areas.",
  alternates: {
    canonical: `${COMPANY.url}/services`,
  },
};

const iconMap: Record<string, React.ReactNode> = {
  ChefHat: <ChefHat className="w-10 h-10" />,
  Bath: <Bath className="w-10 h-10" />,
  Home: <Home className="w-10 h-10" />,
  Building: <Building className="w-10 h-10" />,
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "Services", url: `${COMPANY.url}/services` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-primary py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/images/services-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            Remodeling &amp; Construction{" "}
            <span className="text-gold-gradient">Services</span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            From kitchen transformations to complete home additions, we deliver
            expert craftsmanship and exceptional results on every project.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <div
                key={service.slug}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-5 text-accent">
                    {iconMap[service.icon]}
                  </div>
                  <h2 className="text-3xl font-bold text-primary mb-4">
                    {service.title}
                  </h2>
                  <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                        <span className="text-neutral-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="gold-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg inline-flex items-center gap-2"
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-neutral-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
                    <div className="text-center text-neutral-400 p-8">
                      <div className="mb-3">{iconMap[service.icon]}</div>
                      <p className="text-sm">{service.title} Photo</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Additional Services We Offer
            </h2>
            <p className="text-neutral-600 text-lg">
              Beyond our core specialties, we provide a wide range of construction
              and renovation services.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Drywall Installation & Repair",
              "Interior & Exterior Painting",
              "Millwork & Trim (Crown, Base, Casing)",
              "Wainscoting & Chair Rail",
              "Door & Window Installation",
              "Electrical Upgrades & Panel Work",
              "Deck & Patio Construction",
              "Gazebos & Pergolas",
              "Basement Finishing",
              "Flooring Installation",
              "Siding & Exterior Upgrades",
              "General Carpentry",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-lg p-4 flex items-center gap-3 border border-neutral-200"
              >
                <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                <span className="text-neutral-700 font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-neutral-600 text-lg">
              Get a free, no-obligation quote for any of our services.
            </p>
          </div>
          <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
            <ContactForm source="services-page" />
          </div>
        </div>
      </section>
    </>
  );
}
