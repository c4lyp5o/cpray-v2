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
    const keetab = await fetch('https://api.hadith.sutanlab.id/books', {
      crossDomain: true,
      method: 'GET',
    });
    return keetab.data;
  } catch (error) {
    console.log(error);
  }
}

export async function giveTheKeetab(id) {
  try {
    const url = `https://api.hadith.sutanlab.id/books/${id}?range=1-5`;
    const hadiths = await fetch(url, {
      crossDomain: true,
      method: 'GET',
    });
    return hadiths.data.hadiths;
  } catch (error) {
    console.log(error);
  }
}

export function Pagination({ data, RenderComponent, pageLimit, dataLimit }) {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behavior: 'smooth', top: '0px' });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  function showPaginateNav() {
    if (pages <= 1) return null;
    else if (pages > 1)
      return (
        <div className='grid'>
          <div />
          <div className='pagination'>
            {/* previous button */}
            <button
              onClick={goToPreviousPage}
              className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
            >
              Sebelumnya
            </button>

            {/* show page numbers */}
            {getPaginationGroup().map((item, index) => (
              <button
                key={index}
                onClick={changePage}
                className={`paginationItem ${
                  currentPage === item ? 'active' : null
                }`}
              >
                <span>{item}</span>
              </button>
            ))}

            {/* next button */}
            <button
              onClick={goToNextPage}
              className={`next ${currentPage === pages ? 'disabled' : ''}`}
            >
              Seterusnya
            </button>
          </div>
          <div />
        </div>
      );
  }

  return (
    <div className={styles.centerAll}>
      <div className='dataContainer'>
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>
      {showPaginateNav()}
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
