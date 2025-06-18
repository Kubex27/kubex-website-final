"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Instagram, Facebook, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Web design & Development",
    href: "/services/web-design-development",
  },
  {
    title: "SEO Optimization",
    href: "/services/seo-optimization",
  },
  {
    title: "Social Media Marketing",
    href: "/services/social-media-marketing",
  },
  {
    title: "Content Strategy",
    href: "/services/content-strategy",
  },
  {
    title: "Email Campaigns",
    href: "/services/email-campaigns",
  },
  {
    title: "Branding & Identity",
    href: "/services/branding-identity",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-black text-white shadow-md">
      <div className="relative h-[80px] flex items-center justify-between px-6 max-w-7xl mx-auto">
        {/* Left: Logo */}
        <div className="absolute left-0">
          <Link href="/">
            <Image
              src="/6.PNG"
              alt="Kubex Logo"
              width={150}
              height={70}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Center: Navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex items-center space-x-10">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>

          {/* Services with dropdown and link */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              Services
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  className="absolute top-8 left-0 bg-white text-black rounded shadow-md w-64 z-50 py-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {service.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <Link href="/blogs" className="hover:underline">
            Blog
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>

        {/* Right: Social Media + Mobile Toggle */}
        <div className="absolute right-0 flex items-center space-x-4">
          <Link
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 text-pink-500 hover:scale-110 transition" />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6 text-blue-600 hover:scale-110 transition" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            aria-label="Twitter/X"
          >
            <Twitter className="w-6 h-6 text-sky-500 hover:scale-110 transition" />
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="ml-2 md:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center md:hidden py-4 space-y-4 z-40">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>
            Services
          </Link>
          <Link href="/blog" onClick={() => setIsOpen(false)}>
            Blog
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
