import Head from "next/head";

interface SEOProps {
  title: string;
  description: string;
  url: string;           // required
  canonical?: string;    // optional
  ogImage?: string;      // optional
}

export default function SEO({ title, description, url, canonical, ogImage }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      <meta name="robots" content="index, follow" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {ogImage ? (
        <meta property="og:image" content={ogImage} />
      ) : (
        <meta property="og:image" content="/social-banner.png" />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage ? (
        <meta name="twitter:image" content={ogImage} />
      ) : (
        <meta name="twitter:image" content="/social-banner.png" />
      )}

      <link rel="canonical" href={canonical || url} />
    </Head>
  );
}
