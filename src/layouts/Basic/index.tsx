import React from 'react';
import { Footer, Header } from '../../components';

const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <article>{children}</article>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default BasicLayout;
