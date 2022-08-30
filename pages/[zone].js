import { Suspense } from 'react';
import { useRouter } from 'next/router';
import { Spinner } from 'react-awesome-spinners';
import Time from '../components/Time';
import styles from '../styles/Home.module.css';

const Zone = () => {
  const router = useRouter();
  const { zone } = router.query;
  if (!zone) {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <Spinner />
        </main>
      </div>
    );
  }
  return (
    <Suspense
      fallback={
        <div className={styles.container}>
          <main className={styles.main}>
            <Spinner />
          </main>
        </div>
      }
    >
      <Time zone={zone} />
    </Suspense>
  );
};

export default Zone;
