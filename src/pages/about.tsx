import { motion } from "framer-motion";
import Image from "next/image";
import SEO from "@/components/SEO";
import CountUp from "react-countup";

export default function About() {
  const stats = [
    { label: "Projects Completed", value: 100, suffix: "+" },
    { label: "Clients Served", value: 50, suffix: "+" },
    { label: "Avg. ROI Growth", value: 4.7, suffix: "x" },
  ];

  return (
    <>
      <SEO
        title="About Us | Kubex - Your Growth Partner"
        description="Learn about our mission, team, and the passion behind Kubex’s digital excellence."
        url="https://kubexdigital.com/about"
      />
      <div className="text-[#626262]">
        {/* Hero Section */}
        <section className="relative h-[60vh] w-full">
          <Image
            src="/11.jpg"
            alt="About Our Marketing Agency"
            fill
            className="object-cover brightness-75"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center text-white px-6 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              About Our 360° Digital Marketing Agency
            </motion.h1>
          </div>
        </section>

        {/* About Content */}
        <section className="py-24 px-6 max-w-5xl mx-auto text-center bg-white rounded-lg shadow-lg">
          <motion.h2
            className="text-4xl font-extrabold mb-8 text-gray-900 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Who We Are
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700 mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            At <strong>Kubex Digital Marketing Agency</strong>, we are more than
            just marketers — we are your dedicated strategic partners in the
            ever-evolving digital landscape. Our expert team of SEO specialists,
            creative content strategists, brand architects, and cutting-edge
            technology innovators collaborate to help businesses build authentic
            connections, increase online visibility, and accelerate growth.
          </motion.p>
          <motion.p
            className="text-md leading-relaxed max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            We leverage data-driven insights, bold storytelling, and customized
            digital marketing solutions—including SEO optimization, social media
            marketing, content creation, email campaigns, and brand identity
            development—to deliver measurable results that convert visitors into
            loyal customers. Our mission is to empower your brand with
            innovative strategies that create lasting impact and sustainable
            success.
          </motion.p>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-100 py-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/10.jpg"
                alt="Our Digital Marketing Team"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-xl mx-auto text-left">
                <h3 className="text-3xl font-semibold mb-6 text-gray-900 border-l-4 border-indigo-600 pl-4">
                  Why Partner With Us?
                </h3>
                <ul className="space-y-5 text-lg text-gray-700 list-disc list-inside leading-relaxed">
                  <li>
                    Comprehensive 360° marketing solutions all in one place
                  </li>
                  <li>
                    SEO-first strategies to boost your online discoverability
                  </li>
                  <li>
                    Innovative and creative brand strategies that captivate
                    audiences
                  </li>
                  <li>
                    Performance-driven campaigns designed for measurable success
                  </li>
                  <li>
                    Dedicated marketing experts offering personalized attention
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 text-center px-6 max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-semibold mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Trusted by Brands Across the Globe
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-black">
            {stats.map(({ label, value, suffix }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3, ease: "easeOut" }}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="text-5xl font-extrabold mb-2 text-indigo-600">
                  <CountUp
                    start={0}
                    end={value}
                    duration={2.5}
                    decimals={value % 1 !== 0 ? 1 : 0}
                    suffix={suffix}
                  />
                </div>
                <div className="text-xl font-medium">{label}</div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
