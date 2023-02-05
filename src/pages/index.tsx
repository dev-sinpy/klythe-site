import type { NextPage } from 'next';
import React from 'react';
import { FeatureSection, Footer, HeroSection, Newsletter, ProjectSection, ServiceSection } from '../components';
import { Header } from '../components/Header';
import AboutPage from '../pages/about/index';

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
          <AboutPage />
          <Newsletter />
        </article>
      </main>
      <Footer />
      {/* #BACK TO TOP */}
    </React.Fragment>
  );
};

export default Home;
