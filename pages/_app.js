import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/material';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    </>
  );
}

export default MyApp;
