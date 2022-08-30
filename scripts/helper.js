import { useEffect, useState } from 'react';

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
    <div>
      {/* show the ayats, 10 posts at a time */}
      <div className='dataContainer'>
        {getPaginatedData().map((d, idx) => (
          <RenderComponent key={idx} data={d} />
        ))}
      </div>
      <br />
      <br />
      {showPaginateNav()}
    </div>
  );
}
