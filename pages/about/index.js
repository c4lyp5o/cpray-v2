import Head from 'next/head';

import styles from '../../styles/Home.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us</title>
        <meta
          name='description'
          content='Mari kenali kami di c4lyp5o @ github'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container'>
        <div className={styles.centerAll}>
          <h1 className={styles.title}>Created with ❤</h1>
          <hgroup>
            <h5>Contact us @</h5>
            <a href='https://github.com/c4lyp5o'>c4lyp5o</a>
          </hgroup>
        </div>
      </main>
    </>
  );
}
