import Head from 'next/head';
import { useEffect } from 'react';

import Zones from '../components/Zones';

export default function Home() {
  useEffect(() => {
    const visit = async () => {
      try {
        await fetch('https://api.waktusolat.me/thanks');
        console.log('Thanks for visiting!');
      } catch (error) {
        console.log(error);
      }
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
        <meta name='keywords' content='Waktu Solat, Malaysia, JAKIM' />
        <meta name='author' content='c4lyp5o' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container'>
        <Zones />
      </main>
    </>
  );
}
