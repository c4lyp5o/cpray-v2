import Link from 'next/link';

export default function Navbar() {
  return (
    <header className='container'>
      <nav className='navbar'>
        <ul>
          <li>
            <Link href='/'>
              <a className='navbar-brand'>
                <span className='ml-2'>
                  <strong>Waktu Solat</strong>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/quran'>
              <a className='navbar-brand'>
                <span className='ml-2'>
                  <strong>Quran</strong>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/hadith'>
              <a className='navbar-brand'>
                <span className='ml-2'>
                  <strong>Hadith</strong>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/radio'>
              <a className='navbar-brand'>
                <span className='ml-2'>
                  <strong>Radio</strong>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/chat'>
              <a className='navbar-brand'>
                <span className='ml-2'>
                  <strong>Chat</strong>
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className='navbar-brand'>
                <span className='ml-2'>
                  <strong>About Us</strong>
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
