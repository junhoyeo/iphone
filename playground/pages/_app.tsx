import { AppProps } from 'next/app';
import React from 'react';

import { GlobalStyle } from '@/components/GlobalStyle';

import '@junhoyeo/iphone/dist/style.css';
import '@/styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      {/* @ts-ignore // Type mismatch after upgrading to React 18 */}
      <GlobalStyle />
      <Component {...pageProps} />

      <div id="portal" />
    </React.Fragment>
  );
}

export default MyApp;
