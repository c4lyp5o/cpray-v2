import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import Spin from '../../components/Spin';
import styles from '../../styles/Home.module.css';

function Quran() {
  const router = useRouter();
  const [surah, setSurah] = useState(null);
  const [randomAyat, setRandomAyat] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const value = e.target.surah.value;
    router.push(`/quran/${parseInt(value) + 1}`);
  }

  useEffect(() => {
    const getRandomAyat = async () => {
      const response = await fetch(`https://api.waktusolat.me/quran/random`);
      const data = await response.json();
      return data;
    };

    const getSurah = async () => {
      const response = await fetch(`https://api.waktusolat.me/quran`);
      const data = await response.json();
      return data;
    };

    Promise.all([getRandomAyat(), getSurah()]).then(
      ([randomAyatData, surahData]) => {
        setRandomAyat(randomAyatData);
        setSurah(surahData);
      }
    );
  }, []);

  if (!surah || !randomAyat) return <Spin />;

  return (
    <>
      <Head>
        <title>Al Quran</title>
        <meta
          name='description'
          content='Al-Quran dalam bahasa English dan Melayu'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container'>
        <form onSubmit={handleSubmit}>
          <select className='damnbuttons' id='surah' name='surah'>
            <option value=''>Sila pilih surah...</option>
            {surah.data.map((thesurah, index) => (
              <option key={index} value={index}>
                {thesurah.transliteration}
              </option>
            ))}
          </select>
          <button type='submit' value='Submit'>
            Pilih
          </button>
        </form>
        <hgroup>
          <h1 className={styles.quranicIntro}>{randomAyat.data.arabic}</h1>
          <p className={styles.intro}>{randomAyat.data.malayTranslation}</p>
          <small>{randomAyat.data.fromSurah}</small>
          {', '}
          <small>{randomAyat.data.ayatNumber}</small>
        </hgroup>
      </main>
    </>
  );
}

export default Quran;
