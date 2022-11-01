import type { NextPage } from 'next';
import React from 'react';
import { FeatureSection, Footer, HeroSection, Newsletter, ProjectSection, ServiceSection } from '../components';
import { Header } from '../components/Header';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <article>
          <HeroSection />
          <ServiceSection />
          <FeatureSection />
          <ProjectSection />
          <Newsletter />
        </article>
      </main>
      <Footer />
      {/* #BACK TO TOP */}
    </React.Fragment>
  );
};

export default Home;
