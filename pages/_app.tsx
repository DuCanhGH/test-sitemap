import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title key="title">Test sitemap</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#191A1F" />
        <meta name="description" content="Just a test" key="description" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Test sitemap" key="og-title" />
        <meta property="og:description" content="Just a test" key="og-des" />
        <meta property="og:image" content="/preview.jpg" key="og-image" />
        <meta
          property="twitter:card"
          content="summary_large_image"
          key="twitter-card"
        />
        <meta
          property="twitter:title"
          content="Test sitemap"
          key="twitter-title"
        />
        <meta
          property="twitter:description"
          content="Just a test"
          key="twitter-des"
        />
        <meta
          property="twitter:image"
          content="/preview.jpg"
          key="twitter-image"
        />
        <meta name="referrer" content="no-referrer" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${process.env.NEXT_PUBLIC_CANONICAL_URL}/`} key="canonical-url" />
        <link rel="shortcut icon" href="/icon.png" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link rel="mask-icon" href="/icon.png" color="#191A1F" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
