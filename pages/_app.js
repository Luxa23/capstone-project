import { createGlobalStyle } from 'styled-components';
import useHasHydrated from '../hooks/useHasHydrated';

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    box-sizing: border-box;
  }

  :root { 
    --primary-color : #FD6F8E;
    --secondary-color : #FEA3B4;
    --tertiary-color : #FECDD6;
    

    --font-family : "Inter", sans-serif;

    }

    body {
      margin: 0;
    }
   
`;

export default function MyApp({ Component, ...pageProps }) {
  const isHydrated = useHasHydrated();
  return (
    <>
      {isHydrated && (
        <>
          <GlobalStyle />
          <Component {...pageProps} />
        </>
      )}
    </>
  );
}
