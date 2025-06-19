"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Laptop,
  Megaphone,
  PenTool,
  BarChart2,
  Mail,
  Sparkles,
} from "lucide-react";
import SEO from "@/components/SEO";

const services = [
  {
    title: "Web Design & Development",
    description:
      "Modern, responsive websites that turn visitors into customers.",
    icon: (
      <Laptop className="w-10 h-10 text-blue-600 group-hover:scale-110 transition-transform" />
    ),
    href: "/services/web-design-development", // ✅ Correct slug format
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your visibility on search engines with advanced SEO techniques.",
    icon: (
      <BarChart2 className="w-10 h-10 text-indigo-600 group-hover:scale-110 transition-transform" />
    ),
    href: "/services/seo-optimization",
  },
  {
    title: "Social Media Marketing",
    description:
      "Grow your brand and reach your audience through impactful campaigns.",
    icon: (
      <Megaphone className="w-10 h-10 text-pink-600 group-hover:scale-110 transition-transform" />
    ),
    href: "/services/social-media-marketing",
  },
  {
    title: "Content Strategy",
    description:
      "Engaging, keyword-rich content tailored to your audience and goals.",
    icon: (
      <PenTool className="w-10 h-10 text-yellow-500 group-hover:scale-110 transition-transform" />
    ),
    href: "/services/content-strategy",
  },
  {
    title: "Email Campaigns",
    description:
      "Convert leads with well-designed, personalized email workflows.",
    icon: (
      <Mail className="w-10 h-10 text-green-500 group-hover:scale-110 transition-transform" />
    ),
    href: "/services/email-campaigns",
  },
  {
    title: "Branding & Identity",
    description:
      "Create a strong, lasting brand image that resonates with customers.",
    icon: (
      <Sparkles className="w-10 h-10 text-purple-500 group-hover:scale-110 transition-transform" />
    ),
    href: "/services/branding-identity",
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Our Services | Kubex Digital Agency"
        description="Discover full-suite digital marketing services tailored to elevate your business growth with Kubex."
        url="https://kubexdigital/services"
      />

      <main className="bg-white text-gray-800 pt-16 pb-12 px-6">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Expert Services
          </motion.h1>
          <motion.p
            className="text-lg max-w-2xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Kubex offers powerful full-service marketing to take your brand to
            the next level.
          </motion.p>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          ></motion.div>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <div className="group p-6 rounded-2xl shadow-md hover:shadow-2xl transition-all bg-white cursor-pointer h-full flex flex-col gap-4">
                  <div>{service.icon}</div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </section>
        <section className="text-center mb-16 mt-16">
        <Link
          href="/contact"
          className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition"
        >
          Book Free Consultation
        </Link>
        </section>
      </main>
    </>
  );
}
