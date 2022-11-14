import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import Spin from './Spin';
import { nameConverter } from '../scripts/helper';
import styles from '../styles/Home.module.css';

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function Time({ setDaerah }) {
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
    setDaerah(data.zone);
  }, []);
  if (error) return <div>failed to load</div>;
  if (!data) return <Spin />;
  return (
    <>
      <section>
        <hgroup>
          <h1>{timeNow.toLocaleTimeString()}</h1>
          <h6>{data.today.day}</h6>
          <h6>
            {data.data[0].hijri.split(' ')[2]},{' '}
            {data.data[0].date.split(' ')[0]}
          </h6>
          <h6>{data.zone}</h6>
          <h6>
            {nameConverter[data.nextSolat.name]} akan masuk dalam{' '}
            {data.nextSolat.hours === 0
              ? data.nextSolat.minutes + ' minit'
              : data.nextSolat.hours +
                ' jam ' +
                data.nextSolat.minutes +
                ' minit'}
          </h6>
        </hgroup>
      </section>
      <section>
        <div className={styles.centerAll}>
          <div className='grid'>
            <div id={`${data.nextSolat.name === 'fajr' ? 'breath-light' : ''}`}>
              <kbd>Subuh</kbd>
              <h4>{data.data[0].fajr.slice(0, 5)}</h4>
            </div>
            <div
              id={`${data.nextSolat.name === 'isyraq' ? 'breath-light' : ''}`}
            >
              <kbd>Syuruk</kbd>
              <h4>{data.data[0].syuruk.slice(0, 5)}</h4>
            </div>
            <div
              id={`${data.nextSolat.name === 'dhuhr' ? 'breath-light' : ''}`}
            >
              <kbd>Zuhur</kbd>
              <h4>{data.data[0].dhuhr.slice(0, 5)}</h4>
            </div>
            <div id={`${data.nextSolat.name === 'asr' ? 'breath-light' : ''}`}>
              <kbd>Asar</kbd>
              <h4>{data.data[0].asr.slice(0, 5)}</h4>
            </div>
            <div
              id={`${data.nextSolat.name === 'maghrib' ? 'breath-light' : ''}`}
            >
              <kbd>Maghrib</kbd>
              <h4>{data.data[0].maghrib.slice(0, 5)}</h4>
            </div>
            <div id={`${data.nextSolat.name === 'isha' ? 'breath-light' : ''}`}>
              <kbd>Isha</kbd>
              <h4>{data.data[0].isha.slice(0, 5)}</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
