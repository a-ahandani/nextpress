import Script from 'next/script'
const gtm = process.env.GA_MEASUREMENT_ID

export default function Container({ children }) {

  return <div className="container mx-auto max-w-5xl px-5">

    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${gtm}`}
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${gtm}');
    `}
    </Script>

    {children}</div>;
}
