import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/Home.module.css';

export default function Navbar() {
  function ActiveLink({ root, href, title }) {
    const router = useRouter();
    const style = {
      color:
        router.pathname == href || router.pathname == root
          ? '#fdd835'
          : '#039be5',
    };

    return (
      <Link href={href}>
        <a style={style}>
          <span>
            <strong>{title}</strong>
          </span>
        </a>
      </Link>
    );
  }

  return (
    <header className='container'>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <ActiveLink root='/[zone]' href='/' title='Waktu Solat' />
          </li>
          <li>
            <ActiveLink root='/quran/[surah]' href='/quran' title='Al Quran' />
          </li>
          <li>
            <ActiveLink href='/hadith' title='Hadis' />
          </li>
          <li>
            <ActiveLink href='/radio' title='Radio' />
          </li>
          <li>
            <ActiveLink href='/chat' title='Chat' />
          </li>
          <li>
            <ActiveLink href='/about' title='About Us' />
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
