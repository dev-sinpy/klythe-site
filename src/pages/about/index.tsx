import { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <section className="section service" id="service" aria-label="service">
      <div className="container">
        <h2 className="h2 section-title text-center">About Us</h2>
        <h3>Welcome to Klythe!</h3>
        <p>
          We are a team of highly skilled and experienced software developers, designers, and quality assurance
          specialists. Our passion is creating innovative software solutions that solve real-world problems and improve
          the lives of our users.
        </p>
        <p>
          Our services include custom software development, website development, mobile app development, and enterprise
          system development. No matter what your software needs may be, we have the expertise and experience to deliver
          top-quality products that exceed your expectations.
        </p>
        <p>
          We pride ourselves on our ability to understand the unique needs and requirements of each of our clients. Our
          process begins with a thorough consultation to understand your goals and objectives, and we work closely with
          you throughout the development process to ensure that the final product meets all of your needs.
        </p>
        <p>
          We use the latest technologies and programming languages to build robust, scalable software solutions that are
          reliable, secure, and easy to use. We also offer ongoing support and maintenance to ensure that your software
          continues to perform at its best.
        </p>
        <p>
          Thank you for considering our tech software development company. We look forward to the opportunity to work
          with you and help bring your software ideas to life.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
