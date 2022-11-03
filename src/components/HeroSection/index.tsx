import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { HeroLinkPropsInterface, HeroSocialLink } from '../HeroSocialLinks';

const linkData: HeroLinkPropsInterface[] = [
  {
    link: '#',
    title: 'Facebook'
  },
  {
    link: '#',
    title: 'Youtube'
  },
  {
    link: '#',
    title: 'Twitter'
  },
]

const HeroSection: React.FC = () => {
  return (
    <section className="section hero" id="home" aria-label="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">
            Building Products That <span className="has-before">Scale</span> <FontAwesomeIcon icon={faRocket} />
          </h1>

          <p className="hero-text">
            At Klythe we specialize in designing, building, shipping and scaling beautiful, usable products with
            blazing-fast efficiency
          </p>

          <div className="wrapper">
            <a href="#" className="btn btn-primary has-before has-after">
              How It Works
            </a>
          </div>

          <ul className="social-list">
            {linkData.map((item, index) => {
              return <li key={index}>
                <HeroSocialLink {...item} />
              </li>
            })}
          </ul>
        </div>

        <figure className="hero-banner">
          <Image src="/images/hero-banner.png" width="794" height="637" alt="hero banner" className="w-100" />
        </figure>
      </div>
    </section>
  );
};

export { HeroSection };
