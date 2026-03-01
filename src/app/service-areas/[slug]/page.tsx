import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, CheckCircle, ArrowRight, Phone, ArrowLeft } from "lucide-react";
import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";
import ContactForm from "@/components/ContactForm";

type Props = {
  params: Promise<{ slug: string }>;
};

function getArea(slug: string) {
  return SERVICE_AREAS.find((a) => a.slug === slug);
}

export async function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({
    slug: area.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};

  return {
    title: `Remodeling Contractor in ${area.name}, ${area.state} ${area.zip}`,
    description: `Perezidential Construction provides kitchen remodeling, bathroom remodeling, whole house remodeling & home additions in ${area.name}, ${area.state}. Trusted local contractor. Call for a free quote!`,
    alternates: {
      canonical: `${COMPANY.url}/service-areas/${slug}`,
    },
    openGraph: {
      title: `Remodeling Services in ${area.name}, ${area.state} - ${COMPANY.name}`,
      description: `Expert remodeling and construction services in ${area.name}, ${area.state}. Kitchen, bathroom, whole house remodeling & home additions.`,
      url: `${COMPANY.url}/service-areas/${slug}`,
      type: "website",
    },
  };
}

export default async function ServiceAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getArea(slug);

  if (!area) {
    notFound();
  }

  const otherAreas = SERVICE_AREAS.filter((a) => a.slug !== slug);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "Service Areas", url: `${COMPANY.url}/service-areas` },
          { name: `${area.name}, ${area.state}`, url: `${COMPANY.url}/service-areas/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-primary py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/images/areas-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 text-accent-light hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            All Service Areas
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <MapPin className="w-8 h-8 text-accent-light" />
            <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">
              Service Area
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Remodeling Contractor in{" "}
            <span className="text-gold-gradient">{area.name}, {area.state}</span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-3xl">
            Professional kitchen remodeling, bathroom remodeling, whole house
            remodeling, and home additions serving {area.name}, {area.state} {area.zip}
            and surrounding communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/contact"
              className="gold-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg text-center"
            >
              Get a Free Quote
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors text-center inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Expert Remodeling Services in {area.name}, {area.state}
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                {area.description}
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                As a trusted local contractor based in Wonder Lake, we understand the
                unique character of {area.name} homes. Whether you have a historic property
                that needs careful updating or a modern home that&apos;s ready for an upgrade,
                our team delivers exceptional results that enhance both your home&apos;s value
                and your quality of life.
              </p>

              {/* Services in this area */}
              <h3 className="text-2xl font-bold text-primary mb-6">
                Our Services in {area.name}
              </h3>
              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {SERVICES.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="service-card bg-neutral-50 rounded-xl p-6 border border-neutral-200 group"
                  >
                    <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                      {service.shortDescription}
                    </p>
                    <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>

              {/* Why choose us for this area */}
              <h3 className="text-2xl font-bold text-primary mb-6">
                Why {area.name} Homeowners Choose Us
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  `Local contractor just minutes from ${area.name}`,
                  "Licensed, bonded, and fully insured",
                  "Free, no-obligation estimates",
                  "Transparent pricing — no hidden fees",
                  "Quality materials and expert craftsmanship",
                  "Clean job sites — we respect your home",
                  "On-time project completion",
                  "Full-service remodeling from design to finish",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-neutral-600">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Other areas */}
              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-lg font-bold text-primary mb-4">
                  We Also Serve
                </h3>
                <div className="flex flex-wrap gap-2">
                  {otherAreas.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/service-areas/${a.slug}`}
                      className="bg-white px-4 py-2 rounded-full text-sm font-medium text-neutral-700 border border-neutral-200 hover:border-accent hover:text-accent transition-colors"
                    >
                      {a.name}, {a.state}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div className="bg-primary rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Free Quote for {area.name}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4">
                    Tell us about your project in {area.name} and get a free estimate.
                  </p>
                  <div className="bg-white rounded-xl p-5">
                    <ContactForm source={`area-${slug}`} compact />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
