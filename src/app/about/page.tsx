import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Award,
  Users,
  CheckCircle,
  ArrowRight,
  Hammer,
  Eye,
  Heart,
} from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { BreadcrumbSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "About Us - Premier Remodeling Contractor in McHenry County",
  description: `Learn about Perezidential Construction, established in ${COMPANY.founded}. We're a trusted remodeling and construction company serving Wonder Lake, McHenry, Crystal Lake, Woodstock & Lake in the Hills, IL.`,
  alternates: {
    canonical: `${COMPANY.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: COMPANY.url },
          { name: "About Us", url: `${COMPANY.url}/about` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-primary py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mt-3 mb-6">
            We Do What We Say,{" "}
            <span className="text-gold-gradient">And Say What We Do</span>
          </h1>
          <p className="text-neutral-300 text-lg max-w-2xl mx-auto">
            Built on trust, driven by craftsmanship, and committed to
            transforming your vision into reality.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-6">
                From Dream to Reality
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Perezidential Construction started out as a distant dream. Established
                in {COMPANY.founded}, we may be newer to the game, but the way we handle
                our business stands up to the big boys.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                After years in the construction industry, we knew there was a better
                way to serve homeowners — with honesty, transparency, and
                craftsmanship that speaks for itself. We founded Perezidential
                Construction with a simple promise: we do what we say, and say what
                we do.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Today, we&apos;re proud to be one of McHenry County&apos;s most
                trusted remodeling companies, serving Wonder Lake, McHenry, Crystal
                Lake, Woodstock, Lake in the Hills, and surrounding communities.
                Every project we take on — from a kitchen remodel to a full home
                addition — receives our complete dedication and attention to detail.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-200">
                <div>
                  <p className="text-3xl font-bold text-accent">9+</p>
                  <p className="text-neutral-600 text-sm mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">100%</p>
                  <p className="text-neutral-600 text-sm mt-1">Satisfaction Rate</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">5★</p>
                  <p className="text-neutral-600 text-sm mt-1">Client Rating</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-neutral-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-neutral-500 p-8">
                  <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-sm">Team Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                <Hammer className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Expert Craftsmanship</h3>
              <p className="text-neutral-600 leading-relaxed">
                Every cut, every joint, every finish is executed with precision.
                We take pride in delivering work that stands the test of time and
                exceeds industry standards.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Full Transparency</h3>
              <p className="text-neutral-600 leading-relaxed">
                No hidden fees, no surprises. We provide detailed estimates,
                maintain open communication throughout your project, and keep
                you informed every step of the way.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-200">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5">
                <Heart className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Client-First Approach</h3>
              <p className="text-neutral-600 leading-relaxed">
                Your satisfaction is our top priority. We listen to your needs,
                respect your home, and go above and beyond to deliver results
                that make you proud.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
              How We Work
            </h2>
            <p className="text-neutral-600 text-lg">
              A streamlined process designed to make your renovation experience
              smooth, transparent, and stress-free.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We meet with you to understand your vision, assess the space, and discuss your budget and timeline.",
              },
              {
                step: "02",
                title: "Design & Planning",
                desc: "Our team creates a detailed plan with material selections, layout designs, and a comprehensive estimate.",
              },
              {
                step: "03",
                title: "Construction",
                desc: "Our skilled crew executes the plan with precision, keeping you informed with regular updates throughout.",
              },
              {
                step: "04",
                title: "Final Walkthrough",
                desc: "We do a thorough inspection together to ensure every detail meets your expectations before project completion.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 gold-gradient rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-8">
                We Make A Living, Not A Killing Off Our Clients
              </h2>
              <ul className="space-y-4">
                {[
                  "Licensed, bonded, and fully insured",
                  "Transparent pricing with detailed estimates",
                  "Clean, respectful job sites — we treat your home like our own",
                  "On-time project completion commitment",
                  "Full-service remodeling — we handle every trade",
                  "Drywall, painting, millwork, trim, crown molding, and more",
                  "Electrical upgrades from switches to full panel upgrades",
                  "Decks, gazebos, pergolas, and outdoor living spaces",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-light shrink-0 mt-0.5" />
                    <span className="text-neutral-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary-light rounded-2xl p-6 border border-white/10 text-center">
                <Shield className="w-10 h-10 text-accent-light mx-auto mb-3" />
                <h3 className="text-white font-bold">Licensed & Insured</h3>
              </div>
              <div className="bg-primary-light rounded-2xl p-6 border border-white/10 text-center">
                <Award className="w-10 h-10 text-accent-light mx-auto mb-3" />
                <h3 className="text-white font-bold">Quality Guaranteed</h3>
              </div>
              <div className="bg-primary-light rounded-2xl p-6 border border-white/10 text-center">
                <Users className="w-10 h-10 text-accent-light mx-auto mb-3" />
                <h3 className="text-white font-bold">Family Owned</h3>
              </div>
              <div className="bg-primary-light rounded-2xl p-6 border border-white/10 text-center">
                <CheckCircle className="w-10 h-10 text-accent-light mx-auto mb-3" />
                <h3 className="text-white font-bold">Fair Pricing</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-neutral-600 text-lg mb-8">
            Let&apos;s discuss your project. Contact us today for a free,
            no-obligation consultation and estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="gold-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg inline-flex items-center justify-center gap-2"
            >
              Get Your Free Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={`tel:${COMPANY.phone}`}
              className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold text-lg hover:bg-accent hover:text-white transition-colors text-center"
            >
              Call {COMPANY.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
