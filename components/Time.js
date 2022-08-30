import useSWR from 'swr';
import styles from '../styles/Home.module.css';

export default function Time({ zone }) {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data, error } = useSWR(
    `https://api.waktusolat.me/waktusolat/today/${zone}`,
    fetcher,
    {
      suspense: true,
    }
  );
  if (error) return <div>failed to load</div>;
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <a href='https://nextjs.org/docs' className={styles.titlecard}>
          <h1 className={styles.title}>{data.today.day}</h1>
          <h2>{data.data[0].date}</h2>
          <h2>{data.data[0].hijri}</h2>
          <h2>{data.zone}</h2>
          <h2>
            Waktu {data.nextSolat.name} akan masuk dalam {data.nextSolat.hours}{' '}
            jam {data.nextSolat.minutes} minit
          </h2>
        </a>
        <a href='https://nextjs.org/docs' className={styles.card}>
          <h2>Subuh</h2>
          <p>{data.data[0].fajr}</p>
        </a>

        <a href='https://nextjs.org/learn' className={styles.card}>
          <h2>Syuruk</h2>
          <p>{data.data[0].syuruk}</p>
        </a>

        <a
          href='https://github.com/vercel/next.js/tree/canary/examples'
          className={styles.card}
        >
          <h2>Zuhur</h2>
          <p>{data.data[0].dhuhr}</p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          className={styles.card}
        >
          <h2>Asar</h2>
          <p>{data.data[0].asr}</p>
        </a>

        <a href='https://nextjs.org/docs' className={styles.card}>
          <h2>Maghrib</h2>
          <p>{data.data[0].maghrib}</p>
        </a>

        <a href='https://nextjs.org/docs' className={styles.card}>
          <h2>Isha</h2>
          <p>{data.data[0].asr}</p>
        </a>
      </div>
    </main>
  );
}
