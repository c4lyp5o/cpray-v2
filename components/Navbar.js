import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <nav className={styles.navbar}>
          <Link href='/'>
            <a className='navbar-brand'>
              {/* <Image
                src='/images/logo.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt=''
              /> */}
              <span className='ml-2'>
                <strong>Waktu Solat</strong>
              </span>
            </a>
          </Link>
          <Link href='/quran'>
            <a className='navbar-brand'>
              {/* <Image
                src='/images/logo.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt=''
              /> */}
              <span className='ml-2'>
                <strong>Quran</strong>
              </span>
            </a>
          </Link>
          <Link href='/quran'>
            <a className='navbar-brand'>
              {/* <Image
                src='/images/logo.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt=''
              /> */}
              <span className='ml-2'>
                <strong>Hadith</strong>
              </span>
            </a>
          </Link>
          <Link href='/quran'>
            <a className='navbar-brand'>
              {/* <Image
                src='/images/logo.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt=''
              /> */}
              <span className='ml-2'>
                <strong>Radio</strong>
              </span>
            </a>
          </Link>
          <Link href='/quran'>
            <a className='navbar-brand'>
              {/* <Image
                src='/images/logo.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt=''
              /> */}
              <span className='ml-2'>
                <strong>Chat</strong>
              </span>
            </a>
          </Link>
          <Link href='/quran'>
            <a className='navbar-brand'>
              {/* <Image
                src='/images/logo.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt=''
              /> */}
              <span className='ml-2'>
                <strong>About</strong>
              </span>
            </a>
          </Link>
        </nav>
      </main>
    </div>
  );
}
