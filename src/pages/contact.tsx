"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function ContactDetails() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage("");

    try {
      const response = await fetch("https://formspree.io/f/mzzgvegv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSuccessMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setSuccessMessage("Server error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">
      {/* Contact Form */}
      <motion.div
        className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-3xl font-semibold mb-6 text-center md:text-left text-gray-900"
          variants={itemVariants}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="mb-10 text-lg text-center md:text-left text-gray-600"
          variants={itemVariants}
        >
          Ready to start your digital journey? Let’s talk.
        </motion.p>
        <motion.form
          className="grid grid-cols-1 gap-6"
          onSubmit={handleSubmit}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email", required: true },
            { name: "phone", type: "tel", placeholder: "Your Phone Number", pattern: "[0-9]{10}", maxLength: 10, required: true },
          ].map(({ name, type, placeholder, required, pattern, maxLength }) => (
            <motion.input
              key={name}
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name as keyof typeof formData]}
              onChange={handleChange}
              required={required}
              pattern={pattern}
              maxLength={maxLength}
              variants={itemVariants}
              className="border border-gray-300 rounded-md px-5 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-shadow duration-300 shadow-sm hover:shadow-md"
            />
          ))}
          <motion.textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            variants={itemVariants}
            className="border border-gray-300 rounded-md px-5 py-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 transition-shadow duration-300 shadow-sm hover:shadow-md resize-none"
          />
          <motion.div variants={itemVariants}>
            <Button  style={{ cursor: 'pointer' }}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full w-full font-semibold tracking-wide shadow-lg transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </motion.div>
          {successMessage && (
            <motion.p
              className={`text-center font-medium mt-4 ${
                successMessage.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
              variants={itemVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {successMessage}
            </motion.p>
          )}
        </motion.form>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 space-y-10"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center md:text-left text-gray-900">
          Contact Information
        </h2>
        <p className="text-lg leading-relaxed text-center md:text-left text-gray-600">
          Have questions or want to work with us? Reach out anytime!
        </p>

        {[
          {
            icon: <MapPin size={26} className="text-indigo-600" />,
            content: "C46, First Floor Chattarpur Area, Delhi India",
            isLink: false,
          },
          {
            icon: <Phone size={26} className="text-indigo-600" />,
            content: "+91-7060270627",
            href: "tel:+91-7060270627",
            isLink: true,
          },
          {
            icon: <Mail size={26} className="text-indigo-600" />,
            content: "kubexdigital@gmail.com",
            href: "mailto:kubexdigital@gmail.com",
            isLink: true,
          },
        ].map(({ icon, content, href, isLink }, idx) => (
          <motion.div
            key={idx}
            className="flex items-center space-x-4 text-gray-800 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15 + 0.3 }}
          >
            {icon}
            {isLink ? (
              <a
                href={href}
                className="hover:text-indigo-600 transition-colors duration-300"
              >
                {content}
              </a>
            ) : (
              <span>{content}</span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
