import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export class ErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch() {
    // log the error to the server
  }
  tryAgain = () => this.setState({ error: null });
  render() {
    return this.state.error ? (
      <div>
        There was an error. <button onClick={this.tryAgain}>try again</button>
        <pre style={{ whiteSpace: 'normal' }}>{this.state.error.message}</pre>
      </div>
    ) : (
      this.props.children
    );
  }
}

export async function getTheQuran() {
  try {
    const surah = await fetch('https://api.waktusolat.me/quran');
    const data = await surah.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function giveTheQuran(surah) {
  surah++;
  try {
    const audio = await fetch(`https://api.quran.sutanlab.id/surah/${surah}`, {
      crossDomain: true,
      method: 'GET',
    });
    return audio.data.verses;
  } catch (error) {
    console.log(error);
  }
}

export async function giveQuranAudio(surah) {
  surah++;
  try {
    const audio = await fetch(`https://api.quran.sutanlab.id/surah/${surah}`, {
      crossDomain: true,
      method: 'GET',
    });
    return audio.data.verses;
  } catch (error) {
    console.log(error);
  }
}

export async function getTheKeetab() {
  try {
    const res = await fetch('https://api.waktusolat.me/hadis', {
      crossDomain: true,
      method: 'GET',
    });
    const keetabNames = await res.json();
    keetabNames.msg = keetabNames.msg.split(', ');
    return keetabNames;
  } catch (error) {
    console.log(error);
  }
}

export async function giveTheKeetab(id) {
  try {
    const url = `https://api.waktusolat.me/hadis/${id.toLowerCase()}`;
    const res = await fetch(url, {
      crossDomain: true,
      method: 'GET',
    });
    const randomHadis = await res.json();
    return randomHadis;
  } catch (error) {
    console.log(error);
  }
}

export function Pagination({
  data = [],
  setPage,
  RenderComponent,
  pageLimit = 5,
  dataLimit = 10,
}) {
  const pages = Math.ceil(data.length / dataLimit);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  }, [currentPage]);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    setPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * dataLimit;
    return data.slice(startIndex, startIndex + dataLimit);
  };

  const paginationGroup = Array.from(
    { length: Math.min(pages, pageLimit) },
    (_, i) => i + Math.floor((currentPage - 1) / pageLimit) * pageLimit + 1
  );

  const showPagination = pages > 1;

  return (
    <div className={styles.paginationContainer}>
      <div className={styles.dataContainer}>
        {getPaginatedData().map((d, i) => (
          <RenderComponent key={i} data={d} />
        ))}
      </div>

      {showPagination && (
        <div className={styles.pagination}>
          <button onClick={() => goToPage(1)} disabled={currentPage === 1}>
            &laquo;
          </button>

          {paginationGroup.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
              className={currentPage === pageNumber ? styles.active : ''}
            >
              {pageNumber}
            </button>
          ))}

          <button
            onClick={() => goToPage(pages)}
            disabled={currentPage === pages}
          >
            &raquo;
          </button>
        </div>
      )}
    </div>
  );
}

export const nameConverter = {
  fajr: 'Subuh',
  isyraq: 'Syuruk',
  dhuhr: 'Zohor',
  asr: 'Asar',
  maghrib: 'Maghrib',
  isha: 'Isyak',
};
