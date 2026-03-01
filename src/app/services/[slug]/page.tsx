import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight, Phone, ArrowLeft } from "lucide-react";
import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants";
import { BreadcrumbSchema, ServiceSchema, FAQSchema } from "@/components/SchemaMarkup";
import ContactForm from "@/components/ContactForm";

type Props = {
  params: Promise<{ slug: string }>;
};

function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

const serviceFaqs: Record<string, { question: string; answer: string }[]> = {
  "kitchen-remodeling": [
    {
      question: "How long does a kitchen remodel take?",
      answer:
        "A typical kitchen remodel takes 4-8 weeks depending on the scope. Minor updates may take 2-3 weeks, while full gut renovations can take 8-12 weeks. We provide a detailed timeline during your consultation.",
    },
    {
      question: "How much does a kitchen remodel cost?",
      answer:
        "Kitchen remodel costs vary based on size, materials, and scope. We offer free, detailed estimates so you know exactly what to expect. Contact us for a personalized quote for your project.",
    },
    {
      question: "Do you handle permits for kitchen remodeling?",
      answer:
        "Yes, we handle all necessary permits and inspections for your kitchen remodel. We ensure all work meets local building codes and regulations in McHenry County.",
    },
  ],
  "bathroom-remodeling": [
    {
      question: "How long does a bathroom remodel take?",
      answer:
        "Most bathroom remodels take 2-5 weeks. A simple refresh may take 1-2 weeks, while a complete overhaul with layout changes can take 4-6 weeks. We'll provide an accurate timeline at your consultation.",
    },
    {
      question: "Can you make my bathroom ADA-compliant?",
      answer:
        "Absolutely. We specialize in ADA-compliant modifications including walk-in showers, grab bars, wider doorways, and accessible vanities. We ensure your bathroom is both beautiful and functional.",
    },
    {
      question: "Do you offer walk-in shower conversions?",
      answer:
        "Yes, walk-in shower conversions are one of our most popular bathroom remodeling services. We can convert your existing tub into a modern, accessible walk-in shower with custom tile work.",
    },
  ],
  "whole-house-remodeling": [
    {
      question: "What does whole house remodeling include?",
      answer:
        "Whole house remodeling can include everything from structural changes and open floor plan conversions to complete electrical, plumbing, drywall, painting, flooring, millwork, and finishing. We coordinate all trades for a seamless renovation.",
    },
    {
      question: "Can I live in my home during a whole house remodel?",
      answer:
        "It depends on the scope. For extensive renovations, we may recommend temporary relocation for safety and efficiency. For phased projects, you can often stay in the home while we work section by section.",
    },
    {
      question: "How do you handle whole house remodel budgets?",
      answer:
        "We provide detailed estimates broken down by phase and category. We work with you to prioritize areas and can phase the project to fit your budget. Transparent pricing is one of our core values.",
    },
  ],
  "home-additions": [
    {
      question: "Do I need a permit for a home addition?",
      answer:
        "Yes, home additions require building permits in McHenry County. We handle the entire permitting process, including plans, submissions, and inspections, so you don't have to worry about a thing.",
    },
    {
      question: "How long does a home addition take to build?",
      answer:
        "Home additions typically take 2-6 months depending on size and complexity. A simple room addition may take 2-3 months, while a second-story addition can take 4-6 months. We provide a detailed project timeline.",
    },
    {
      question: "Will a home addition match my existing home?",
      answer:
        "Absolutely. We pride ourselves on seamless architectural integration. We match rooflines, siding, windows, and interior finishes so your addition looks like it was always part of the original home.",
    },
  ],
  "new-home-construction": [
    {
      question: "How long does it take to build a new home?",
      answer:
        "New home construction typically takes 6-12 months depending on size, complexity, and weather conditions. We provide a detailed timeline during the planning phase and keep you updated throughout the build process.",
    },
    {
      question: "Do I need to have plans before contacting you?",
      answer:
        "No. While we can work from your existing architectural plans, we also help homeowners develop custom floor plans from scratch. We'll work with you to design a home that fits your lot, budget, and lifestyle.",
    },
    {
      question: "What does new home construction cost per square foot?",
      answer:
        "New home construction costs vary significantly based on specifications, materials, and finishes. We provide detailed, transparent estimates after understanding your project scope. Contact us for a free consultation and quote.",
    },
  ],
  "adu-guest-house-construction": [
    {
      question: "Do I need a permit to build an ADU or guest house?",
      answer:
        "Yes, ADUs and guest houses require building permits in McHenry County. We handle all zoning verification, permit applications, and inspections to ensure your ADU is fully compliant with local regulations.",
    },
    {
      question: "How much does it cost to build an ADU?",
      answer:
        "ADU costs depend on size, features, and site conditions. A basic studio unit starts at a different price point than a full one-bedroom with kitchen and bathroom. We provide free, detailed estimates for your specific project.",
    },
    {
      question: "Can I rent out my ADU?",
      answer:
        "Rental regulations for ADUs vary by municipality and zoning district. We research your specific property's zoning during the planning phase and advise you on what's permitted. Many McHenry County homeowners successfully use ADUs as rental properties.",
    },
  ],
  "modular-manufactured-homes": [
    {
      question: "Do you install new manufactured homes?",
      answer:
        "Yes, we provide complete manufactured and modular home installation services including site preparation, foundation work, delivery coordination, set-up, utility connections, skirting, and all finishing work.",
    },
    {
      question: "Can you remodel an existing manufactured home?",
      answer:
        "Absolutely. We specialize in manufactured home renovations including kitchen and bathroom remodels, flooring replacement, window upgrades, room additions, deck construction, and complete interior refreshes.",
    },
    {
      question: "What's the difference between modular and manufactured homes?",
      answer:
        "Modular homes are built in sections at a factory and assembled on-site on a permanent foundation, built to local building codes. Manufactured homes (formerly mobile homes) are built entirely in a factory on a steel chassis and meet HUD federal codes. We work with both types.",
    },
  ],
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const areaNames = SERVICE_AREAS.map((a) => a.name).join(", ");

  return {
    title: `${service.title} in McHenry County, IL - ${COMPANY.name}`,
    description: `Professional ${service.title.toLowerCase()} services in ${areaNames}, IL. ${service.shortDescription} Call Perezidential Construction for a free quote!`,
    alternates: {
      canonical: `${COMPANY.url}/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} - ${COMPANY.name}`,
      description: service.shortDescription,
      url: `${COMPANY.url}/services/${slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const faqs = serviceFaqs[slug] || [];
  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "Services", url: `${COMPANY.url}/services` },
          { name: service.title, url: `${COMPANY.url}/services/${slug}` },
        ]}
      />
      <ServiceSchema service={service} />
      {faqs.length > 0 && <FAQSchema faqs={faqs} />}

      {/* Hero */}
      <section className="relative bg-primary py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/images/services-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-accent-light hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            {service.title} in{" "}
            <span className="text-gold-gradient">McHenry County, IL</span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-3xl">
            {service.shortDescription}
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

      {/* Service Detail */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-primary mb-6">
                Professional {service.title} Services
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              <h3 className="text-xl font-bold text-primary mb-4">
                What&apos;s Included
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3 mb-12">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Service Area Callout */}
              <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                <h3 className="text-lg font-bold text-primary mb-4">
                  {service.title} Service Areas
                </h3>
                <p className="text-neutral-600 mb-4">
                  We provide {service.title.toLowerCase()} services throughout McHenry County, including:
                </p>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_AREAS.map((area) => (
                    <Link
                      key={area.slug}
                      href={`/service-areas/${area.slug}`}
                      className="bg-white px-4 py-2 rounded-full text-sm font-medium text-neutral-700 border border-neutral-200 hover:border-accent hover:text-accent transition-colors"
                    >
                      {area.name}, {area.state}
                    </Link>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              {faqs.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-primary mb-6">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-4">
                    {faqs.map((faq, i) => (
                      <div
                        key={i}
                        className="bg-neutral-50 rounded-xl p-6 border border-neutral-200"
                      >
                        <h4 className="font-bold text-primary mb-2">{faq.question}</h4>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Quote Form */}
                <div className="bg-primary rounded-2xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Get a Free Quote
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4">
                    Ready to start your {service.title.toLowerCase()} project?
                  </p>
                  <div className="bg-white rounded-xl p-5">
                    <ContactForm source={`service-${slug}`} compact />
                  </div>
                </div>

                {/* Other Services */}
                <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
                  <h3 className="font-bold text-primary mb-4">Other Services</h3>
                  <ul className="space-y-3">
                    {otherServices.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="flex items-center justify-between text-neutral-600 hover:text-accent transition-colors text-sm font-medium"
                        >
                          {s.title}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
