import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface Blog {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
}

const blogs: Blog[] = [
  {
    slug: "how-to-build-an-seo-strategy",
    title: "How to Build an SEO Strategy That Works in 2025",
    description:
      "Discover the latest techniques for optimizing your website to rank higher on Google and increase organic traffic...",
    imageUrl: "/images/blogs/seo-strategy.jpg",
  },
  {
    slug: "branding-secrets-for-small-businesses",
    title: "Branding Secrets Every Small Business Should Know",
    description:
      "Your brand is your identity. Learn the key steps to creating a brand image that resonates with your audience and drives loyalty...",
    imageUrl: "/images/blogs/branding-secrets.jpg",
  },
];

export default function BlogPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.slug}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="relative w-full h-56">
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                fill
                className="object-cover"
                priority={index === 0} // preload the first image for better performance
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
              <Link
                href={`/blogs/${blog.slug}`}
                className="text-blue-600 hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
