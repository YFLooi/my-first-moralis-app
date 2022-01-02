import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }: AppProps) {
  // Moralis settings
  // Follows: https://docs.moralis.io/moralis-server/tools/react-moralis
  const serverUrl = "https://gppanowoee5f.usemoralis.com:2053/server";
  const appId = "RRTVGl64FMS7Zh4t73WEwBUqhLR9o9vDZLb3Q05Y";

  return (
    <>
      <Head>
        {/* Top level import for entire app */}
        <link
          key="bootstrap"
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          crossOrigin="anonymous"
        />
      </Head>

      <MoralisProvider appId={appId} serverUrl={serverUrl}>
        <Component {...pageProps} />
      </MoralisProvider>
    </>
  );
}

export default MyApp;
