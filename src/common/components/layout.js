import Head from 'next/head';
import Navbar from './navbar';

export const siteTitle = 'Personalized Emails for HubSpot';

export default function Layout({ children }) {
  return (
    <div className="container-fluid">
      <Head>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header >
        <font size="6" face="Garamond">
          Personalized Email's 
        </font> 
        <Navbar />
      </header>
      <main >
          {children}      
      </main>
      <footer > <h2>this is the fotter</h2></footer>
    </div>
  );
}