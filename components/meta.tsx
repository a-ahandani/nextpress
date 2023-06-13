import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "../lib/constants";

export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />

      <title>{`Ahmad Esmaeilzadeh Ahandani's website`}</title>
      <meta property="og:image" content={"/meta.png"} />
      <meta name="description" content="Software developer." />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ahandani.com/" />
      <meta property="og:title" content="Ahamd E. Ahandani" />
      <meta property="og:description" content="Software developer." />
      <meta property="og:image" content="https://ahandani.com/meta.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ahandani.com/" />
      <meta property="twitter:title" content="Ahamd E. Ahandani" />
      <meta property="twitter:description" content="Software developer." />
      <meta
        property="twitter:image"
        content="https://ahandani.com/meta.png"
      />
    </Head>
  );
}
