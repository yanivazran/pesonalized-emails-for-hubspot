import "bootstrap/dist/css/bootstrap.min.css";
import Head from 'next/head' ;
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  

useEffect(() => {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);

  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
