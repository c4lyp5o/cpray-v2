import styles from '../../styles/Home.module.css';
export default function About() {
  return (
    <main className='container'>
      <div className={styles.centerAll}>
        <h1 className={styles.title}>Created with ❤</h1>
        <hgroup>
          <h5>Contact us @</h5>
          <a href='https://github.com/c4lyp5o'>c4lyp5o</a>
        </hgroup>
      </div>
    </main>
  );
}
