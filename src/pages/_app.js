import { useEffect } from 'react';
import Layout from '../components/Layout/layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  // useEffect hook runs once when the component mounts
  useEffect(() => {
    // Any initialization logic you want to run once
  }, []);

  return (
    <Layout>
        <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
