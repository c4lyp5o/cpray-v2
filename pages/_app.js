import CssBaseline from '@mui/material/CssBaseline';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
