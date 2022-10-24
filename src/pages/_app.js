import "bootstrap/dist/css/bootstrap.min.css";

import Head from 'next/head' ;
import { useEffect } from "react";
import Layout from "../common/components/layout";

function MyApp({ Component, pageProps }) {
  

useEffect(() => {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);

 
  return(
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
