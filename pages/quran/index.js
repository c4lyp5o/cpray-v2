import { useState, useRef, useEffect } from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

function Quran() {
  const router = useRouter();
  const surahChoice = useRef();
  const [randomAyat, setRandomAyat] = useState(null);
  const [intro, setIntro] = useState(true);

  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data: surah, error: surahError } = useSWR(
    `https://api.waktusolat.me/quran`,
    fetcher,
    {
      suspense: true,
    }
  );

  useEffect(() => {
    const getRandomAyat = async () => {
      const randomAyat = await fetch(`https://api.waktusolat.me/quran/random`);
      const randomAyatData = await randomAyat.json();
      return randomAyatData;
    };
    getRandomAyat().then((res) => {
      console.log(res);
      setRandomAyat(res);
    });
  }, []);

  if (surahError) return <div>failed to load</div>;
  if (!surah || !randomAyat) return <div>loading...</div>;

  function TheIntro() {
    if (intro === true) {
      return (
        <>
          <p className={styles.intro}>{randomAyat.data.arabic}</p>
          <p className={styles.intro}>{randomAyat.data.malayTranslation}</p>
        </>
      );
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    surahChoice.current++;
    console.log(surahChoice);
    router.push(`/quran/${surahChoice.current}`);
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className='grid'>
          <div>
            <form onSubmit={handleSubmit}>
              <select
                className='damnbuttons'
                onChange={(e) => (surahChoice.current = e.target.value)}
                id='surah'
                required=''
                name='surah'
              >
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
          </div>
          <div>
            <h1>Al Quran</h1>
          </div>
          <div>
            <TheIntro />
          </div>
        </div>
        <br />
        <br />
      </main>
    </div>
  );
}

export default Quran;
