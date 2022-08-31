import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <main className={styles.navbar}>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <Link href='/'>
            <a className='navbar-brand'>
              <Image
                src='/images/logo.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt=''
              />
              <span className='ml-2'>
                <strong>Waktu Solat</strong>
              </span>
            </a>
          </Link>
          <Link href='/quran'>
            <a className='navbar-brand'>
              <Image
                src='/images/logo.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt=''
              />
              <span className='ml-2'>
                <strong>Quran</strong>
              </span>
            </a>
          </Link>
          <Link href='/quran'>
            <a className='navbar-brand'>
              <Image
                src='/images/logo.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt=''
              />
              <span className='ml-2'>
                <strong>Hadith</strong>
              </span>
            </a>
          </Link>
          <Link href='/quran'>
            <a className='navbar-brand'>
              <Image
                src='/images/logo.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt=''
              />
              <span className='ml-2'>
                <strong>Radio</strong>
              </span>
            </a>
          </Link>
          <Link href='/quran'>
            <a className='navbar-brand'>
              <Image
                src='/images/logo.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt=''
              />
              <span className='ml-2'>
                <strong>Chat</strong>
              </span>
            </a>
          </Link>
          <Link href='/quran'>
            <a className='navbar-brand'>
              <Image
                src='/images/logo.png'
                width='30'
                height='30'
                className='d-inline-block align-top'
                alt=''
              />
              <span className='ml-2'>
                <strong>About</strong>
              </span>
            </a>
          </Link>
          {/* <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>
              Home <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Link
            </a>
          </li>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              href='#'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Dropdown
            </a>
            <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
              <a className='dropdown-item' href='#'>
                Action
              </a>
              <a className='dropdown-item' href='#'>
                Another action
              </a>
              <div className='dropdown-divider'></div>
              <a className='dropdown-item' href='#'>
                Something else here
              </a>
            </div>
          </li>
          <li className='nav-item'>
            <a className='nav-link disabled' href='#'>
              Disabled
            </a>
          </li>
        </ul>
        <form className='form-inline my-2 my-lg-0'>
          <input
            className='form-control mr-sm-2'
            type='search'
            placeholder='Search'
            aria-label='Search'
          />
          <button
            className='btn btn-outline-success my-2 my-sm-0'
            type='submit'
          >
            Search
          </button>
        </form>
      </div> */}
        </nav>
      </main>
    </div>
  );
}
