import { NextPage } from 'next';
import styles from './about.module.scss';
import Image from 'next/image';

const AboutPage: NextPage = () => {
  return (
    <section className="section service" id="aboutus" aria-label="service">
      <h2 className="h2 section-title text-center">About Us</h2>
      <div className="container" style={{ display: 'flex' }}>
        {/* <h3 className="text-center welcome">Welcome to Klythe!</h3> */}
          <figure className={styles['hero-banner']}>
            <Image src="/images/app-about-us.png" width="800" height="800" alt="aboutus banner" className="w-100"/>
          </figure>
          <div className="about-us-content">
          <p className={styles['paragraph']}>
            We are a team of highly skilled and experienced software developers, designers, and quality assurance
            specialists. Our passion is creating innovative software solutions that solve real-world problems and improve
            the lives of our users.
          </p>
          <p className={styles['paragraph']}>
            Our services include custom software development, website development, mobile app development, and enterprise
            system development. No matter what your software needs may be, we have the expertise and experience to deliver
            top-quality products that exceed your expectations.
          </p>
          <p className={styles['paragraph']}>
            We pride ourselves on our ability to understand the unique needs and requirements of each of our clients. Our
            process begins with a thorough consultation to understand your goals and objectives, and we work closely with
            you throughout the development process to ensure that the final product meets all of your needs.
          </p>
          <p className={styles['paragraph']}>
            We use the latest technologies and programming languages to build robust, scalable software solutions that are
            reliable, secure, and easy to use. We also offer ongoing support and maintenance to ensure that your software
            continues to perform at its best.
          </p>
          <p className={styles['paragraph']}>
            Thank you for considering our tech software development company. We look forward to the opportunity to work
            with you and help bring your software ideas to life.
          </p>
          </div>
        </div>
    </section>
  );
};

export default AboutPage;
