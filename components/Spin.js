import { Spinner } from 'react-awesome-spinners';
import styles from '../styles/Home.module.css';

export default function Spin() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Spinner color='#00BFFF' />
      </main>
    </div>
  );
}
