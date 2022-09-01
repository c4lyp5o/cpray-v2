import '../styles/pico.min.css';
import '../styles/customs.css';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <body>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </body>
  );
}

export default MyApp;
