import { AppProps } from "next/app";

import "../styles/index.css";

function Blog({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Blog;
