import Head from 'next/head';
import Zones from '../components/Zones';

export default function Home() {
  return (
    <>
      <Head>
        <title>Waktu Solat</title>
        <meta name='description' content='Powered by Next' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Zones />
    </>
  );
}
