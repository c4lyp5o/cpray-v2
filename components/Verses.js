import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Pagination } from '../scripts/helper';
import styles from '../styles/Home.module.css';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Verses() {
  const router = useRouter();

  const { surah } = router.query;
  const { data, error } = useSWR(
    `https://api.waktusolat.me/quran/my/${surah}`,
    fetcher,
    {
      suspense: true,
    }
  );
  function QuranData(props) {
    // const { text, audio, translation, number, verses } = props.data;
    const { text, translation } = props.data;
    return (
      <div className='quranAyats'>
        <h3 className='quranic'>
          {text}
          {translation}
        </h3>
        {/* <audio controls>
          <source src={audio.primary} />
          Your browser does not support the audio element.
        </audio> */}
      </div>
    );
  }
  if (error) return <div>failed to load</div>;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Pagination
          data={data.data.verses}
          RenderComponent={QuranData}
          pageLimit={5}
          dataLimit={10}
        />
      </main>
    </div>
  );
}
