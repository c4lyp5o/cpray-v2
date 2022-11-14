import { Suspense, useState } from 'react';
import Head from 'next/head';
import Time from '../components/Time';
import Spin from '../components/Spin';

export default function Zone() {
  const [daerah, setDaerah] = useState('');
  return (
    <main className='container'>
      <Head>
        <title>{daerah}</title>
        <meta name='description' content='Powered by Next' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Suspense fallback={<Spin />}>
        <Time setDaerah={setDaerah} />
      </Suspense>
    </main>
  );
}
