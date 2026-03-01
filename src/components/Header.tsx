"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
    { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
    { name: "Whole House Remodeling", href: "/services/whole-house-remodeling" },
    { name: "Home Additions", href: "/services/home-additions" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
          <p className="hidden sm:block text-neutral-300">
            Serving McHenry County &amp; Surrounding Areas
          </p>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${COMPANY.phone}`}
              className="flex items-center gap-1.5 hover:text-accent-light transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0">
              <Image
                src="/images/perezidential construction logo.png"
                alt="Perezidential Construction Logo"
                width={220}
                height={60}
                className="h-12 sm:h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-neutral-700 hover:text-accent font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-neutral-700 hover:text-accent font-medium transition-colors"
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="/services"
                  className="text-neutral-700 hover:text-accent font-medium transition-colors flex items-center gap-1"
                >
                  Services
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2 w-64">
                    <div className="bg-white rounded-lg shadow-xl border border-neutral-200 py-2 overflow-hidden">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-5 py-3 text-neutral-700 hover:bg-neutral-50 hover:text-accent transition-colors text-sm font-medium"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/service-areas"
                className="text-neutral-700 hover:text-accent font-medium transition-colors"
              >
                Service Areas
              </Link>
              <Link
                href="/gallery"
                className="text-neutral-700 hover:text-accent font-medium transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-neutral-700 hover:text-accent font-medium transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="gold-gradient text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden p-2 text-primary"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-neutral-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <Link
                href="/"
                className="block px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="block px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                All Services
              </Link>
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="block px-8 py-2.5 rounded-lg text-neutral-600 hover:bg-neutral-50 text-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
              <Link
                href="/service-areas"
                className="block px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Service Areas
              </Link>
              <Link
                href="/gallery"
                className="block px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 rounded-lg text-neutral-700 hover:bg-neutral-50 font-medium"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-3 px-4">
                <Link
                  href="/contact"
                  className="block gold-gradient text-white text-center px-6 py-3 rounded-lg font-semibold"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
