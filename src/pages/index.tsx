"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import AnimatedWord from "@/components/AnimatedWord";
import Link from "next/link";
import SEO from "@/components/SEO";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <>
      <SEO
        title="Kubex - 360° Digital Marketing Agency"
        description="Elevate your brand with data-driven digital marketing strategies by Kubex."
        url="https://kubexdigital.com/"
      />

      {/* Hero Section */}
      <section className="relative h-[100vh] w-full">
        <Image
          src="/13.jpg"
          alt="About Our Marketing Agency"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{ letterSpacing: "-0.03em" }}
            >
              Elevate Your Brand with <AnimatedWord />
            </h1>
            <p className="mb-6 text-lg md:text-xl max-w-2xl mx-auto text-white/90">
              We blend strategy, design, and technology to grow your business
              online.
            </p>
            <Link href="/services" passHref>
              <Button  style={{ cursor: 'pointer' }} className="bg-white text-black px-6 py-3 rounded-full text-lg hover:bg-black hover:text-white transition-colors duration-300">
                Get Started
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-28 px-6 bg-gradient-to-b from-white to-gray-100 text-center"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold mb-14 text-gray-900 relative inline-block mx-auto"
        >
          Our Services
          <span className="block w-20 h-1 bg-indigo-600 rounded mt-2 mx-auto"></span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 max-w-6xl mx-auto">
          {[
            { title: "Web Design & Development", icon: "🖥️" },
            { title: "SEO Optimization", icon: "📈" },
            { title: "Social Media Marketing", icon: "📱" },
            { title: "Content Strategy", icon: "📝" },
            { title: "Email Campaigns", icon: "📧" },
            { title: "Branding & Identity", icon: "🎨" },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                scale: 1.07,
                boxShadow: "0 15px 40px rgba(0,0,0,0.18)",
                backgroundColor: "#111827",
                color: "white",
              }}
              transition={{ delay: i * 0.15, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-10 shadow-lg cursor-default transition-colors duration-300"
            >
              <div className="absolute -top-10 left-10 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-md text-white">
                {service.icon}
              </div>
              <h3 className="mt-14 text-xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-gray-600 group-hover:text-gray-300 transition-colors duration-300 text-sm leading-relaxed">
                Elevate your digital presence with our experts in{" "}
                {service.title.toLowerCase()} solutions.
              </p>
            </motion.div>
          ))}
        </div>

        <Link href="/services" passHref>
          <Button style={{ cursor: 'pointer' }} className="bg-black text-white px-8 py-3 rounded-md text-lg mt-12">
            LET&apos;S WORK TOGETHER
          </Button>
        </Link>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-white via-gray-50 to-white text-center px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 tracking-tight">
            Who We Are
          </h2>

          <div className="w-20 h-1 bg-black mx-auto mb-8 rounded-full" />

          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
            We&apos;re a full-service digital agency that partners with businesses to
            build
            <span className="text-black font-semibold"> memorable brands</span>,
            grow online presence, and convert leads into
            <span className="text-black font-semibold"> loyal customers</span>.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-gray-100 to-white px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-8 text-left relative"
              >
                <p className="text-lg italic text-gray-700 leading-relaxed">
                  “{testimonial.quote}”
                </p>
                <div className="mt-6 font-semibold text-gray-900">
                  — {testimonial.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Ready to elevate your brand? Fill out the form below and we&apos;ll get
            back to you shortly.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-3xl p-8">
          <form
            method="POST"
            action="https://formspree.io/f/mzzgvegv"
            className="grid grid-cols-1 gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              pattern="[0-9]{10}"
              maxLength={10}
              className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-300 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

            <Button  style={{ cursor: 'pointer' }} className="bg-black hover:bg-white hover:text-black border-2 border-black text-white transition-colors px-6 py-3 rounded-full text-lg font-semibold">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </>
  );
}
