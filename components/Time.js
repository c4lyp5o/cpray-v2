import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';

export default function Time() {
  const router = useRouter();
  const { zone } = router.query;
  const [timeNow, setTimeNow] = useState(new Date());
  const fetcher = (url) => fetch(url).then((r) => r.json());
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
        <div className='grid kbdThingy'>
          <div>
            <kbd>Subuh</kbd>
            <p>{data.data[0].fajr.slice(0, 5)}</p>
          </div>
          <div>
            <kbd>Syuruk</kbd>
            <p>{data.data[0].syuruk.slice(0, 5)}</p>
          </div>
          <div>
            <kbd>Zuhur</kbd>
            <p>{data.data[0].dhuhr.slice(0, 5)}</p>
          </div>
          <div>
            <kbd>Asar</kbd>
            <p>{data.data[0].asr.slice(0, 5)}</p>
          </div>
          <div>
            <kbd>Maghrib</kbd>
            <p>{data.data[0].maghrib.slice(0, 5)}</p>
          </div>
          <div>
            <kbd>Isha</kbd>
            <p>{data.data[0].isha.slice(0, 5)}</p>
          </div>
        </div>
      </section>
    </>
  );
}
