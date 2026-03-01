import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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

const galleryImages = [
  { src: "/images/520385268_1360936909368705_8169878145026067144_n.jpg", alt: "Front porch remodel with new railings and steps", category: "Exterior Remodel" },
  { src: "/images/520650109_1360936832702046_7829660171014092706_n.jpg", alt: "Exterior home renovation project", category: "Exterior Remodel" },
  { src: "/images/522662673_1361867255942337_7750853074593686317_n.jpg", alt: "Interior drywall installation and renovation", category: "Whole House Remodel" },
  { src: "/images/522721960_1361867215942341_935614537688791050_n.jpg", alt: "Interior renovation in progress", category: "Whole House Remodel" },
  { src: "/images/522985057_1361867229275673_7531199503940458303_n.jpg", alt: "Interior construction work", category: "Whole House Remodel" },
  { src: "/images/565221943_1445042684291460_5820734178568943063_n.jpg", alt: "Sunroom ceiling renovation and construction", category: "Home Addition" },
  { src: "/images/565284976_1445042787624783_6709316486603429736_n.jpg", alt: "Construction project in progress", category: "Home Addition" },
  { src: "/images/561811675_1445042550958140_7549875278817469234_n.jpg", alt: "Home addition construction work", category: "Home Addition" },
  { src: "/images/562332136_1445042627624799_4545366312761835065_n.jpg", alt: "Renovation project detail", category: "Home Addition" },
  { src: "/images/524317134_1363794122416317_1218408093971614188_n.jpg", alt: "Deck and stair construction", category: "Exterior Remodel" },
  { src: "/images/524306461_1363794212416308_2674069888871105398_n.jpg", alt: "Outdoor construction project", category: "Exterior Remodel" },
  { src: "/images/524148966_1363794075749655_366603161095749114_n.jpg", alt: "Deck stairway construction", category: "Exterior Remodel" },
  { src: "/images/523031788_1360936859368710_2909442673100723995_n.jpg", alt: "Home exterior renovation", category: "Exterior Remodel" },
  { src: "/images/521536838_1361876309274765_3742177453114477910_n.jpg", alt: "Remodeling project work", category: "Whole House Remodel" },
  { src: "/images/522482717_1361876405941422_4141950833163740220_n.jpg", alt: "Interior renovation work", category: "Whole House Remodel" },
  { src: "/images/522744802_1361877922607937_1172947827794692985_n.jpg", alt: "Construction and remodeling project", category: "Whole House Remodel" },
  { src: "/images/524505806_1365514568910939_5307650851990153331_n.jpg", alt: "Completed remodeling project", category: "Whole House Remodel" },
  { src: "/images/525742857_1365514618910934_3066869920280597613_n.jpg", alt: "Finished renovation project", category: "Whole House Remodel" },
  { src: "/images/178678839_2885603515049910_1384686969196473779_n.jpg", alt: "Commercial renovation and remediation", category: "Remediation" },
  { src: "/images/178739627_2885603771716551_3107964097312324800_n.jpg", alt: "Building remediation work", category: "Remediation" },
  { src: "/images/178362228_2885603745049887_4334742690094930910_n.jpg", alt: "Commercial space renovation", category: "Remediation" },
  { src: "/images/493920641_1282050263924037_5966785287312016166_n.jpg", alt: "Construction project detail", category: "Whole House Remodel" },
  { src: "/images/494193762_1282050080590722_3170387008614030413_n.jpg", alt: "Remodeling work in progress", category: "Whole House Remodel" },
  { src: "/images/494011692_1282050383924025_2882457511853007529_n.jpg", alt: "Home renovation project", category: "Whole House Remodel" },
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
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/520385268_1360936909368705_8169878145026067144_n.jpg"
            alt="Perezidential Construction project"
            fill
            className="object-cover"
          />
        </div>
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

      {/* Gallery Grid */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, i) => (
              <div
                key={i}
                className="group relative bg-neutral-100 rounded-2xl aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white font-bold">{image.category}</p>
                    <p className="text-neutral-300 text-sm">McHenry County, IL</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-neutral-50 rounded-2xl p-12 border border-neutral-200">
              <h2 className="text-2xl font-bold text-primary mb-3">
                See More on Facebook
              </h2>
              <p className="text-neutral-600 mb-6 max-w-md mx-auto">
                Follow us on Facebook to see our latest projects, before &amp; after
                transformations, and behind-the-scenes updates.
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
