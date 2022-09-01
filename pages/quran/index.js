import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Spin from '../../components/Spin';
import styles from '../../styles/Home.module.css';

function Quran() {
  const router = useRouter();
  const surahChoice = useRef();
  const [surah, setSurah] = useState(null);
  const [randomAyat, setRandomAyat] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    surahChoice.current++;
    console.log(surahChoice);
    router.push(`/quran/${surahChoice.current}`);
  }

  useEffect(() => {
    const getRandomAyat = async () => {
      const randomAyat = await fetch(`https://api.waktusolat.me/quran/random`);
      const randomAyatData = await randomAyat.json();
      return randomAyatData;
    };
    const getSurah = async () => {
      const surah = await fetch(`https://api.waktusolat.me/quran`);
      const surahData = await surah.json();
      return surahData;
    };
    getSurah().then((res) => {
      setSurah(res);
    });
    getRandomAyat().then((res) => {
      setRandomAyat(res);
    });
  }, []);

  if (!surah || !randomAyat) return <Spin />;

  return (
    <main className='container'>
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
          <hgroup>
            <h1 className={styles.quranicIntro}>{randomAyat.data.arabic}</h1>
            <p className={styles.intro}>{randomAyat.data.malayTranslation}</p>
            <small>{randomAyat.data.fromSurah}</small>
            {', '}
            <small>{randomAyat.data.ayatNumber}</small>
          </hgroup>
        </div>
      </div>
      <br />
      <br />
    </main>
  );
}

export default Quran;
