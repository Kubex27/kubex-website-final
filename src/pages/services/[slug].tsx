import { GetStaticPaths, GetStaticProps } from "next";
import SEO from "@/components/SEO";
import { services } from "@/data/services";
import Image from "next/image";

interface ServicePageProps {
  service: (typeof services)[0];
}

export default function ServicePage({ service }: ServicePageProps) {
  const canonicalUrl = `https://kubexdigital.com/services/${service.slug}`;

  return (
    <>
      <SEO
        title={service.title}
        description={service.metaDescription}
        url={canonicalUrl}
        canonical={canonicalUrl}
        ogImage={service.image}
      />

      <main className="px-4 py-16 bg-white text-gray-800">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          {service.title.replace(" | YourCompany", "")}
        </h1>

        {/* Card Section */}
        <div className="max-w-6xl mx-auto bg-gray-50 rounded-3xl shadow-xl overflow-hidden p-6 md:p-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="rounded-xl overflow-hidden shadow-md relative w-full h-64 md:h-96">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">
                Why Choose Our {service.title.replace(" | YourCompany", "")}?
              </h2>
              <p className="text-lg mb-6">{service.intro}</p>
              <p className="text-gray-700 leading-relaxed">{service.details}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = services.map((service) => ({
    params: { slug: service.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const service = services.find((s) => s.slug === params?.slug);
  if (!service) {
    return { notFound: true };
  }

  return { props: { service } };
};
