/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '../styles/global.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
