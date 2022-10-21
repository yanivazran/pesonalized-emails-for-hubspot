import Head from 'next/head';
import Layout, { siteTitle } from '../common/components/layout';


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <p> this is home page</p>
    </Layout>
  );
}