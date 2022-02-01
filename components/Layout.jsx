import Head from 'next/head';
import React from 'react';
import { Header } from './';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lexend+Deca:wght@400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      {children}
    </>
    );
}; 

export default Layout;
