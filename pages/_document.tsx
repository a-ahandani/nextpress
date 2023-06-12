import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
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
      </Head>{" "}
      <body className=" bg-accent-1 ">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
