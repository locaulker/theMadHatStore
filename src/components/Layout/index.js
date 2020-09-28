import React from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { LayoutWrapper } from './styles';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <main>{children}</main>
      </LayoutWrapper>
      <Footer />
    </>
  );
};

export { Layout };
