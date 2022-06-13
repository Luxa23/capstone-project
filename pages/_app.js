import { createGlobalStyle } from 'styled-components';

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
      padding: 0;
      margin: 0;
    }

    h1 {
      font-family: var(--font-family);
      font-weight: 600;
      grid-row-start: 2;
      grid-row-end: 3;

    }
`;

export default function MyApp({ Component, ...pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
