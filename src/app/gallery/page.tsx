import type { Metadata } from "next";
import Link from "next/link";
import { Camera } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Project Gallery - Our Remodeling Work",
  description:
    "Browse our portfolio of completed remodeling projects. Kitchen remodels, bathroom renovations, whole house remodeling & home additions in McHenry County, IL.",
  alternates: {
    canonical: `${COMPANY.url}/gallery`,
  },
};

const categories = [
  "All Projects",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Whole House Remodeling",
  "Home Additions",
];

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "Gallery", url: `${COMPANY.url}/gallery` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-primary py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/images/gallery-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            Project <span className="text-gold-gradient">Gallery</span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            See the quality of our craftsmanship. Browse our completed projects
            across McHenry County.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-neutral-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap bg-neutral-100 text-neutral-700 hover:bg-accent hover:text-white transition-colors first:bg-accent first:text-white"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="group relative bg-neutral-100 rounded-2xl aspect-[4/3] overflow-hidden flex items-center justify-center"
              >
                <div className="text-center text-neutral-400 p-8">
                  <Camera className="w-12 h-12 mx-auto mb-3 opacity-50" />
                  <p className="text-sm font-medium">Project Photo {i + 1}</p>
                  <p className="text-xs mt-1">Coming Soon</p>
                </div>
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div>
                    <p className="text-white font-bold">
                      {i < 3
                        ? "Kitchen Remodel"
                        : i < 5
                        ? "Bathroom Remodel"
                        : i < 7
                        ? "Whole House Remodel"
                        : "Home Addition"}
                    </p>
                    <p className="text-neutral-300 text-sm">
                      {i % 2 === 0 ? "Wonder Lake, IL" : "Crystal Lake, IL"}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-neutral-50 rounded-2xl p-12 border border-neutral-200">
              <Camera className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-primary mb-3">
                More Photos Coming Soon
              </h2>
              <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                We&apos;re adding more project photos to our gallery. Follow us on
                Facebook to see our latest work in real-time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={COMPANY.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-block"
                >
                  Follow Us on Facebook
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-accent text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
