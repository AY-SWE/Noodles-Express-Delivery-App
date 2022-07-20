import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {    
  return (
    <Layout>
      <div>
        <Head>
          <title>NOODLES EXPRESS</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        {/* body */}
        <main>
          <h1>HELOO</h1>        
        </main>
      </div>
    </Layout>
  );
}

