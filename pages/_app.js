import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    box-sizing: border-box;
  }

  :root { 
    --primary-color : #fecdd6;
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
