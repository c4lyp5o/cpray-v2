import { useRouter } from 'next/router';
import { useState } from 'react';
import useSWR from 'swr';
import { Pagination } from '../scripts/helper';
import Spin from './Spin';
import styles from '../styles/Home.module.css';

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

function QuranData(props) {
  // const { text, audio, translation, number, verses } = props.data;
  const { text, translation, id } = props.data;
  return (
    <main className='container'>
      <hgroup>
        <h5 className={styles.quranic}>
          {text} ({id})
        </h5>
        <p>{translation}</p>
      </hgroup>
      {/* <audio controls>
          <source src={audio.primary} />
          Your browser does not support the audio element.
        </audio> */}
    </main>
  );
}

export default function Verses() {
  const router = useRouter();
  const { surah } = router.query;
  const [page, setPage] = useState(1);
  const { data, error } = useSWR(
    `https://api.waktusolat.me/quran/my/${surah}`,
    fetcher,
    {
      suspense: true,
    }
  );

  if (!surah || !data) return <Spin />;
  if (error) return <div>failed to load</div>;

  return (
    <main>
      <div className={styles.centerAll}>
        {surah !== '1' && page < 2 ? (
          <p className={styles.quranic}>
            بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ
          </p>
        ) : (
          ''
        )}
        <Pagination
          setPage={setPage}
          data={data.data.verses}
          RenderComponent={QuranData}
          pageLimit={5}
          dataLimit={10}
        />
      </div>
    </main>
  );
}
