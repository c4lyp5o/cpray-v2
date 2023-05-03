import Head from 'next/head';

import Zones from '../components/Zones';

export default function Home() {
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
