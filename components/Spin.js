import styles from '../styles/Home.module.css';

export default function Spin() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 aria-busy='true'>Fetching for you</h1>
      </main>
    </div>
  );
}
