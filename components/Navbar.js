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

    const handleClick = (e) => {
      e.preventDefault();
      router.push(href);
    };

    return (
      <a href={href} onClick={handleClick} style={style}>
        <span>
          <strong>{title}</strong>
        </span>
      </a>
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
            {/* <Link href='/hadith'>
              <a className='navbar-brand'>
                <span className='ml-2'>
                  <strong>Hadith</strong>
                </span>
              </a>
            </Link> */}
            <ActiveLink href='/hadith' title='Hadis' />
          </li>
          <li>
            <Link href='/radio'>
              <ActiveLink href='/radio' title='Radio' />
            </Link>
          </li>
          <li>
            <Link href='/chat'>
              <ActiveLink href='/chat' title='Chat' />
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <ActiveLink href='/about' title='About Us' />
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
    </header>
  );
}
