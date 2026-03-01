import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ArrowRight, Phone, ArrowLeft, MapPin, AlertCircle } from "lucide-react";
import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants";
import { COMBO_CONTENT } from "@/lib/combo-content";
import { BreadcrumbSchema, ServiceSchema } from "@/components/SchemaMarkup";
import ContactForm from "@/components/ContactForm";

type Props = {
  params: Promise<{ slug: string; area: string }>;
};

function getCombo(serviceSlug: string, areaSlug: string) {
  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const area = SERVICE_AREAS.find((a) => a.slug === areaSlug);
  const content = COMBO_CONTENT.find(
    (c) => c.serviceSlug === serviceSlug && c.areaSlug === areaSlug
  );
  if (!service || !area || !content) return null;
  return { service, area, content };
}

export async function generateStaticParams() {
  const params: { slug: string; area: string }[] = [];
  for (const service of SERVICES) {
    for (const area of SERVICE_AREAS) {
      params.push({ slug: service.slug, area: area.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, area } = await params;
  const combo = getCombo(slug, area);
  if (!combo) return {};

  const { service, area: areaData } = combo;

  return {
    title: `${service.title} in ${areaData.name}, ${areaData.state} ${areaData.zip} - ${COMPANY.name}`,
    description: `Professional ${service.title.toLowerCase()} services in ${areaData.name}, ${areaData.state}. ${service.shortDescription} Serving ${areaData.name} ${areaData.zip}. Call ${COMPANY.phone} for a free quote.`,
    alternates: {
      canonical: `${COMPANY.url}/services/${slug}/${area}`,
    },
    openGraph: {
      title: `${service.title} in ${areaData.name}, ${areaData.state} - ${COMPANY.name}`,
      description: `Expert ${service.title.toLowerCase()} in ${areaData.name}, IL. Local contractor with 9+ years experience. Free estimates.`,
      url: `${COMPANY.url}/services/${slug}/${area}`,
      type: "website",
    },
  };
}

export default async function ComboPage({ params }: Props) {
  const { slug, area } = await params;
  const combo = getCombo(slug, area);

  if (!combo) {
    notFound();
  }

  const { service, area: areaData, content } = combo;
  const otherServicesInArea = SERVICES.filter((s) => s.slug !== slug);
  const otherAreasForService = SERVICE_AREAS.filter((a) => a.slug !== area);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "Services", url: `${COMPANY.url}/services` },
          { name: service.title, url: `${COMPANY.url}/services/${slug}` },
          {
            name: `${areaData.name}, ${areaData.state}`,
            url: `${COMPANY.url}/services/${slug}/${area}`,
          },
        ]}
      />
      <ServiceSchema service={service} />

      {/* Hero */}
      <section className="relative bg-primary py-20 sm:py-28">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/520385268_1360936909368705_8169878145026067144_n.jpg"
            alt={`${service.title} in ${areaData.name}`}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href={`/services/${slug}`}
              className="text-accent-light hover:text-white transition-colors text-sm"
            >
              {service.title}
            </Link>
            <span className="text-neutral-500">/</span>
            <Link
              href={`/service-areas/${area}`}
              className="text-accent-light hover:text-white transition-colors text-sm"
            >
              {areaData.name}, {areaData.state}
            </Link>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 max-w-4xl">
            {service.title} in{" "}
            <span className="text-gold-gradient">
              {areaData.name}, {areaData.state}
            </span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-3xl leading-relaxed">
            {content.heroText}
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

      {/* Main Content */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Intro */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  {service.title} Services in {areaData.name}
                </h2>
                <p className="text-neutral-600 text-lg leading-relaxed">
                  {content.intro}
                </p>
              </div>

              {/* What We Offer */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  What Our {service.title} Service Includes
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 bg-neutral-50 rounded-lg p-4 border border-neutral-100"
                    >
                      <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-neutral-700 font-medium text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Considerations */}
              <div className="bg-primary rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-5">
                  <MapPin className="w-6 h-6 text-accent-light" />
                  <h3 className="text-xl font-bold text-white">
                    {areaData.name}-Specific Considerations
                  </h3>
                </div>
                <ul className="space-y-4">
                  {content.localConsiderations.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                      <span className="text-neutral-300 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Detailed Content */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {service.title} for {areaData.name} Homes
                </h3>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  {content.detailedContent}
                </p>
              </div>

              {/* Project Highlights */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Recent {areaData.name} Project Highlights
                </h3>
                <div className="space-y-4">
                  {content.projectHighlights.map((highlight, i) => (
                    <div
                      key={i}
                      className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 flex items-start gap-4"
                    >
                      <div className="w-8 h-8 gold-gradient rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-neutral-700 leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Us for This Area */}
              <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Why Choose Us for {service.title} in {areaData.name}
                </h3>
                <p className="text-neutral-600 leading-relaxed text-lg">
                  {content.whyUs}
                </p>
              </div>

              {/* Other Services in This Area */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Other Services We Offer in {areaData.name}
                </h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  {otherServicesInArea.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}/${area}`}
                      className="service-card bg-white rounded-xl p-5 border border-neutral-200 group text-center"
                    >
                      <h4 className="font-bold text-primary group-hover:text-accent transition-colors text-sm mb-2">
                        {s.title}
                      </h4>
                      <p className="text-neutral-500 text-xs">
                        in {areaData.name}, {areaData.state}
                      </p>
                      <span className="text-accent font-semibold text-xs flex items-center justify-center gap-1 mt-3 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-3 h-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* This Service in Other Areas */}
              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-lg font-bold text-primary mb-4">
                  {service.title} in Other Areas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {otherAreasForService.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/services/${slug}/${a.slug}`}
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
                {/* Quote Form */}
                <div className="bg-primary rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-white mb-1">
                    Free {service.title} Quote
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4">
                    For your {areaData.name} project
                  </p>
                  <div className="bg-white rounded-xl p-4">
                    <ContactForm
                      source={`combo-${slug}-${area}`}
                      compact
                    />
                  </div>
                </div>

                {/* Quick Links */}
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
                  <h3 className="font-bold text-primary mb-4">Quick Links</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link
                        href={`/services/${slug}`}
                        className="flex items-center justify-between text-neutral-600 hover:text-accent transition-colors text-sm font-medium"
                      >
                        All {service.title} Info
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={`/service-areas/${area}`}
                        className="flex items-center justify-between text-neutral-600 hover:text-accent transition-colors text-sm font-medium"
                      >
                        All {areaData.name} Services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/gallery"
                        className="flex items-center justify-between text-neutral-600 hover:text-accent transition-colors text-sm font-medium"
                      >
                        Project Gallery
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="flex items-center justify-between text-neutral-600 hover:text-accent transition-colors text-sm font-medium"
                      >
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Phone CTA */}
                <div className="bg-accent/10 border border-accent/20 rounded-2xl p-6 text-center">
                  <p className="text-primary font-bold mb-2">
                    Prefer to talk?
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-accent text-xl font-bold hover:text-accent-dark transition-colors"
                  >
                    {COMPANY.phone}
                  </a>
                  <p className="text-neutral-500 text-xs mt-2">
                    Mon-Fri 7am-6pm, Sat 8am-2pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
