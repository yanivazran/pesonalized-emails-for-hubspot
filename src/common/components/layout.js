import Head from 'next/head';
import Navbar from './navbar';

export const siteTitle = 'Personalized Emails for HubSpot';

export default function Layout({ children }) {
  return (
    <>
   
    <div className="container-fluid">
     
        <Head>
          <meta name="og:title" content={siteTitle} />
        </Head>
        <header className="row">
        <font size="6" face="Garamond">
         Personalized Email's 
          </font>
          
          <Navbar />
        </header>
        <main className="row">
            <h5>this is what is sent from diffrent components</h5>
              {children}       
        </main>
        <footer className="row"> <h2>this is the fotter</h2></footer>
      </div>
   
    
    </>
  );
}