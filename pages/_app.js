import { createContext, useState } from 'react';
import Head from 'next/head';
import { GlobalStyle } from '../styles/GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';

export const LoginContext = createContext();

function MyApp({ Component, pageProps }) {
  const [login, setLogin] = useState();

  return (
    <>
      <LoginContext.Provider value={[login, setLogin]}>
        <GlobalStyle />
        <Head>
          <title>Booking</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </LoginContext.Provider>
    </>
  );
}

export default MyApp
