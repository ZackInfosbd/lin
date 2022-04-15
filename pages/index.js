import Head from 'next/head';
import { signOut } from 'next-auth/react';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>linkedin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
