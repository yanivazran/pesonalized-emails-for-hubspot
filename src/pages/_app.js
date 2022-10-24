import "bootstrap/dist/css/bootstrap.min.css";

import Head from 'next/head' ;
import { useEffect } from "react";
import Layout from "../common/components/layout";

//iron-session
import fetchJson from "../lib/fetchJson"
import { SWRConfig } from "swr";

function MyApp({ Component, pageProps }) {
  

useEffect(() => {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);

 
  return(
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </SWRConfig>
  ) 
}

export default MyApp
