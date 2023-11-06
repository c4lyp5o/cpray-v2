import Head from 'next/head';
import { useEffect } from 'react';

import Zones from '../components/Zones';

export default function Home() {
  useEffect(() => {
    const visit = async () => {
      await fetch('https://api.waktusolat.me/thanks').then((res) =>
        console.log('Thanks for visiting!')
      );
    };
    visit();
  }, []);

  return (
    <>
      <Head>
        <title>Waktu Solat Malaysia</title>
        <meta
          name='description'
          content='Waktu Solat Untuk Malaysia Straight Dari JAKIM'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container'>
        <Zones />
      </main>
    </>
  );
}
