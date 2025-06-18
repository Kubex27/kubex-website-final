import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const blogs = [
  {
    slug: "how-to-build-an-seo-strategy",
    title: "How to Build an SEO Strategy That Works in 2025",
    imageUrl: "/images/blogs/seo-strategy.jpg",
    content: `
      Search Engine Optimization (SEO) is constantly evolving, and staying ahead of the curve is crucial for businesses. 
      In 2025, user experience, mobile performance, and AI-driven content are more important than ever.

      Start by auditing your current content and ensuring technical SEO fundamentals like page speed, schema markup, 
      and internal linking are optimized. Then, focus on producing value-rich content that answers user intent with 
      clarity and depth.

      Don’t forget about backlinks and domain authority – building quality relationships and citations remains essential.
    `,
  },
  {
    slug: "branding-secrets-for-small-businesses",
    title: "Branding Secrets Every Small Business Should Know",
    imageUrl: "/images/blogs/branding-secrets.jpg",
    content: `
      Branding isn't just about logos. It's the story, the tone, the personality of your business.

      First, define your brand's mission, vision, and values. Then, apply consistent design elements – fonts, colors, 
      and imagery – across all customer touchpoints.

      Use storytelling to build emotional connections, and don’t be afraid to niche down. A clearly defined brand attracts 
      the right audience and builds lasting loyalty.

      Finally, invest in great copywriting. Your words are just as important as your visuals.
    `,
  },
];

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Blog post not found.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{blog.title} | Kubex Blog</title>
        <meta name="description" content={blog.content.slice(0, 150)} />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-16">
        <motion.h1
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {blog.title}
        </motion.h1>

        <motion.div
          className="w-full h-80 relative rounded-xl overflow-hidden shadow-lg mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.article
          className="prose prose-lg max-w-none text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {blog.content
            .trim()
            .split("\n\n")
            .map((para, idx) => (
              <p key={idx}>{para.trim()}</p>
            ))}
        </motion.article>

        <div className="mt-12 text-center">
          <Link
            href="/blogs"
            className="text-blue-600 hover:underline font-medium"
          >
            ← Back to Blogs
          </Link>
        </div>
      </main>
    </>
  );
}
