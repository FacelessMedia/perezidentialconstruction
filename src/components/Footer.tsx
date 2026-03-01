import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Clock } from "lucide-react";
import { COMPANY, SERVICES, SERVICE_AREAS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* CTA Banner */}
      <div className="gold-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get a free, no-obligation quote for your remodeling or construction
            project. We&apos;d love to hear about your vision.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-accent-dark px-8 py-3.5 rounded-lg font-bold hover:bg-neutral-100 transition-colors shadow-lg"
          >
            Request Your Free Quote
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold tracking-tight">PEREZIDENTIAL</span>
              <br />
              <span className="text-sm tracking-[0.2em] text-accent-light uppercase">
                Construction
              </span>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed mb-6">
              Established in {COMPANY.founded}, Perezidential Construction has been
              transforming homes across McHenry County with quality craftsmanship and
              unwavering dedication to our clients.
            </p>
            <div className="flex gap-3">
              <a
                href={COMPANY.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-light">Our Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-neutral-300 hover:text-accent-light transition-colors text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-accent-light hover:text-accent transition-colors text-sm font-medium"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-light">Service Areas</h3>
            <ul className="space-y-2.5">
              {SERVICE_AREAS.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/service-areas/${area.slug}`}
                    className="text-neutral-300 hover:text-accent-light transition-colors text-sm"
                  >
                    {area.name}, {area.state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-light">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-start gap-3 text-neutral-300 hover:text-accent-light transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-start gap-3 text-neutral-300 hover:text-accent-light transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-neutral-300 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {COMPANY.address.full}
              </li>
              <li className="flex items-start gap-3 text-neutral-300 text-sm">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  Mon - Fri: 6:00 AM - 9:00 PM
                  <br />
                  Sat - Sun: Closed
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-neutral-400">
          <p>
            &copy; {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sitemap.xml" className="hover:text-neutral-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
