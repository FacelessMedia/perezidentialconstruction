import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${COMPANY.url}/#business`,
    name: COMPANY.name,
    legalName: COMPANY.legalName,
    url: COMPANY.url,
    telephone: COMPANY.phone,
    email: COMPANY.email,
    foundingDate: COMPANY.founded,
    description: COMPANY.description,
    image: `${COMPANY.url}/images/logo.png`,
    logo: `${COMPANY.url}/images/logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY.address.street,
      addressLocality: COMPANY.address.city,
      addressRegion: COMPANY.address.state,
      postalCode: COMPANY.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.3861,
      longitude: -88.3487,
    },
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: `${area.name}, ${area.state}`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Remodeling & Construction Services",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
          url: `${COMPANY.url}/services/${service.slug}`,
        },
      })),
    },
    sameAs: [COMPANY.facebook],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "06:00",
        closes: "21:00",
      },
    ],
    priceRange: "$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({
  service,
}: {
  service: { title: string; description: string; slug: string; features: string[] };
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: COMPANY.name,
      url: COMPANY.url,
    },
    url: `${COMPANY.url}/services/${service.slug}`,
    areaServed: SERVICE_AREAS.map((area) => ({
      "@type": "City",
      name: `${area.name}, ${area.state}`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.features.map((feature) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: feature,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
