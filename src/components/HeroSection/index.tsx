import Image from 'next/image';
import styles from './HeroSection.module.scss';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { HeroLinkPropsInterface, HeroSocialLink } from '../HeroSocialLinks';
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faYoutube } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const linkData: HeroLinkPropsInterface[] = [
  {
    link: '#',
    title: 'Facebook',
    iconName: faFacebook
  },
  {
    link: '#',
    title: 'Youtube',
    iconName: faYoutube
  },
  {
    link: '#',
    title: 'Twitter',
    iconName: faTwitter
  },
]

const HeroSection: React.FC = () => {
  return (
    <section className="section hero" id="home" aria-label="hero">
      <div className="container">
        <div className={styles['hero-content']}>
          <h1 className="h1 hero-title">
            Building Products That <span className="has-before">Scale</span> <FontAwesomeIcon icon={faRocket} />
          </h1>

          <p className={styles['hero-text']}>
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

        <figure className={styles['hero-banner']}>
          <Image src="/images/hero-banner.png" width="794" height="637" alt="hero banner" className="w-100" />
        </figure>
      </div>
    </section>
  );
};

export { HeroSection };
