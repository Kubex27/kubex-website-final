import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.png" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#000000" />
        
        {/* Google Fonts example (if used) */}
        {/* <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" /> */}
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
