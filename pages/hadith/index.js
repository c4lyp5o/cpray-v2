import { useState, useEffect } from 'react';
import { getTheKeetab, giveTheKeetab, Pagination } from '../../scripts/helper';
import Head from 'next/head';

import Spin from '../../components/Spin';

function Hadith() {
  const [intro, setIntro] = useState(true);
  const [hadith, setHadith] = useState([]);
  const [search, setSearch] = useState('');
  const [keetab, setKeetab] = useState([]);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    const awwalun = async () => {
      const { msg } = await getTheKeetab();
      setKeetab(msg);
    };
    awwalun();
  }, []);

  function TheIntro() {
    if (intro === true) {
      return <p className='centered'>Assalamualaikum</p>;
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setDisplay(true);
    setHadith(null);
    await giveTheKeetab(search)
      .then((data) => {
        setHadith(data);
        setIntro(false);
        setDisplay(true);
      })
      .catch((error) => {
        console.log(error);
        setHadith('Harap Maaf, Sila Cuba Lagi');
      })
      .finally(() => {
        setDisplay(false);
      });
  }

  async function handleChange(event) {
    setSearch(event.target.value);
  }

  function HadithData(props) {
    const { arab, id } = props.data;
    return (
      <div className='quranAyats'>
        <p className='hadis'>{arab}</p>
        <p>{id}</p>
      </div>
    );
  }

  // function PaginateHadith() {
  //   if (display)
  //     return (
  //       <Pagination
  //         data={hadith}
  //         RenderComponent={HadithData}
  //         pageLimit={5}
  //         dataLimit={1}
  //       />
  //     );
  // }

  return (
    <>
      <Head>
        <title>Hadis</title>
        <meta
          name='description'
          content='Koleksi hadis dari kutubussittah dalam bahasa Melayu'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='container'>
        <div className='grid'>
          <div>
            <form onSubmit={handleSubmit}>
              <select onChange={handleChange} required>
                <option value=''>Sila pilih kitab...</option>
                {keetab.map((solkeetab) => (
                  <option key={solkeetab.id} value={solkeetab.id}>
                    {solkeetab.toUpperCase()}
                  </option>
                ))}
              </select>
              <button type='submit' value='Submit'>
                Pilih
              </button>
            </form>
          </div>
          <div />
          <div />
          <div>
            <h1>Hadith</h1>
          </div>
        </div>
        {/* <div>{PaginateHadith()}</div> */}
        {display ? <Spin /> : hadith.hadis}
        {TheIntro()}
      </main>
    </>
  );
}

export default Hadith;
