import Link from "next/link";
import Image from "next/image";
import {
  ChefHat,
  Bath,
  Home,
  Building,
  Star,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Users,
  MapPin,
  Phone,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { SERVICES, SERVICE_AREAS, TESTIMONIALS, COMPANY } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  ChefHat: <ChefHat className="w-8 h-8" />,
  Bath: <Bath className="w-8 h-8" />,
  Home: <Home className="w-8 h-8" />,
  Building: <Building className="w-8 h-8" />,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-primary">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
                <Award className="w-4 h-4 text-accent-light" />
                <span className="text-accent-light text-sm font-medium">
                  Trusted Since {COMPANY.founded}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Your Dream Project{" "}
                <span className="text-gold-gradient">Starts Here</span>
              </h1>
              <p className="text-lg sm:text-xl text-neutral-300 mb-8 max-w-xl leading-relaxed">
                Premier remodeling and construction services in McHenry County.
                We transform homes with expert craftsmanship, quality materials,
                and a commitment to exceeding your expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="gold-gradient text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg text-center"
                >
                  Get Your Free Quote
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors text-center"
                >
                  Our Services
                </Link>
              </div>
              <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center gap-2 text-white hover:text-accent-light transition-colors"
                >
                  <Phone className="w-5 h-5 text-accent-light" />
                  <span className="font-semibold">{COMPANY.phone}</span>
                </a>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-accent-light fill-accent-light"
                    />
                  ))}
                  <span className="text-white/80 ml-2 text-sm">5-Star Rated</span>
                </div>
              </div>
            </div>

            {/* Hero Contact Form */}
            <div className="hidden lg:block bg-white rounded-2xl shadow-2xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-2">
                Request a Free Quote
              </h2>
              <p className="text-neutral-600 mb-6 text-sm">
                Tell us about your project and we&apos;ll get back to you within 24 hours.
              </p>
              <ContactForm source="homepage-hero" compact />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-primary text-lg">Licensed &amp; Insured</h3>
              <p className="text-neutral-600 text-sm mt-1">Full coverage protection</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Clock className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-primary text-lg">9+ Years</h3>
              <p className="text-neutral-600 text-sm mt-1">Of proven experience</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Award className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-primary text-lg">Quality Guaranteed</h3>
              <p className="text-neutral-600 text-sm mt-1">Craftsmanship you can trust</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-primary text-lg">100% Satisfaction</h3>
              <p className="text-neutral-600 text-sm mt-1">Our clients love us</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
              Our Remodeling &amp; Construction Services
            </h2>
            <p className="text-neutral-600 text-lg">
              From kitchen makeovers to complete home transformations, we deliver
              exceptional results that elevate your living space.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="service-card bg-white rounded-2xl p-8 shadow-sm border border-neutral-200 group"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-5 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {service.shortDescription}
                </p>
                <span className="text-accent font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-6">
                We Do What We Say, And Say What We Do
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Perezidential Construction started as a dream and has grown into
                one of McHenry County&apos;s most trusted remodeling companies.
                Established in {COMPANY.founded}, we bring nearly a decade of hands-on
                experience to every project.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                We&apos;re not just contractors — we&apos;re craftsmen who take
                pride in transforming houses into dream homes. From the initial
                consultation to the final walkthrough, we handle every detail
                with precision and care. Our reputation is built on transparent
                communication, fair pricing, and work that speaks for itself.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  Learn More About Us <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-neutral-200 rounded-2xl aspect-[4/3] overflow-hidden relative">
                <Image
                  src="/images/520385268_1360936909368705_8169878145026067144_n.jpg"
                  alt="Perezidential Construction - Front porch remodel project"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-white p-6 rounded-xl shadow-lg hidden sm:block">
                <p className="text-3xl font-bold">9+</p>
                <p className="text-sm text-white/80">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-neutral-400 text-lg">
              Don&apos;t just take our word for it — hear from homeowners who trusted
              us with their renovation projects.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((testimonial, index) => (
              <div
                key={index}
                className="bg-primary-light rounded-2xl p-6 border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent-light fill-accent-light"
                    />
                  ))}
                </div>
                <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-neutral-400 text-xs">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-neutral-50 py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Where We Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">
              Proudly Serving McHenry County &amp; Beyond
            </h2>
            <p className="text-neutral-600 text-lg">
              We provide expert remodeling and construction services across
              Northern Illinois.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="service-card bg-white rounded-xl p-6 text-center shadow-sm border border-neutral-200 group"
              >
                <MapPin className="w-8 h-8 text-accent mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-primary group-hover:text-accent transition-colors">
                  {area.name}
                </h3>
                <p className="text-neutral-500 text-sm">{area.state} {area.zip}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Contact Form */}
      <section className="lg:hidden bg-white py-20">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-2">
              Request a Free Quote
            </h2>
            <p className="text-neutral-600">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>
          </div>
          <ContactForm source="homepage-mobile" />
        </div>
      </section>
    </>
  );
}
