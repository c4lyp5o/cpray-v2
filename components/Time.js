import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Spin from './Spin';
import styles from '../styles/Home.module.css';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Time() {
  const router = useRouter();
  const { zone } = router.query;
  const [timeNow, setTimeNow] = useState(new Date());
  const { data, error } = useSWR(
    `https://api.waktusolat.me/waktusolat/today/${zone}`,
    fetcher,
    {
      suspense: true,
    }
  );
  useEffect(() => {
    const startTimer = () => {
      const timer = setInterval(() => {
        setTimeNow(new Date());
      }, 1000);
      return () => clearInterval(timer);
    };
    startTimer();
  }, []);
  if (error) return <div>failed to load</div>;
  if (!data) return <Spin />;
  return (
    <>
      <section className='time'>
        <hgroup>
          <h1>{timeNow.toLocaleTimeString()}</h1>
          <h6>{data.today.day}</h6>
          <h6>
            {data.data[0].hijri.split(' ')[2]},{' '}
            {data.data[0].date.split(' ')[0]}
          </h6>
          <h6>{data.zone}</h6>
          <h6>
            Waktu {data.nextSolat.name} akan masuk dalam {data.nextSolat.hours}{' '}
            jam {data.nextSolat.minutes} minit
          </h6>
        </hgroup>
      </section>
      <section className='time2'>
        <div className={styles.centerAll}>
          <div className='grid kbdThingy'>
            <div id={`${data.nextSolat.name === 'fajr' ? 'breath-light' : ''}`}>
              <kbd>Subuh</kbd>
              <p>{data.data[0].fajr.slice(0, 5)}</p>
            </div>
            <div
              id={`${data.nextSolat.name === 'syuruk' ? 'breath-light' : ''}`}
            >
              <kbd>Syuruk</kbd>
              <p>{data.data[0].syuruk.slice(0, 5)}</p>
            </div>
            <div
              id={`${data.nextSolat.name === 'dhuhr' ? 'breath-light' : ''}`}
            >
              <kbd>Zuhur</kbd>
              <p>{data.data[0].dhuhr.slice(0, 5)}</p>
            </div>
            <div id={`${data.nextSolat.name === 'asr' ? 'breath-light' : ''}`}>
              <kbd>Asar</kbd>
              <p>{data.data[0].asr.slice(0, 5)}</p>
            </div>
            <div
              id={`${data.nextSolat.name === 'maghrib' ? 'breath-light' : ''}`}
            >
              <kbd>Maghrib</kbd>
              <p>{data.data[0].maghrib.slice(0, 5)}</p>
            </div>
            <div id={`${data.nextSolat.name === 'isha' ? 'breath-light' : ''}`}>
              <kbd>Isha</kbd>
              <p>{data.data[0].isha.slice(0, 5)}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
