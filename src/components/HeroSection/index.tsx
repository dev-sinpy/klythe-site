import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

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
            <li>
              <a href="#" className="social-link">
                {/* <ion-icon name="logo-facebook"></ion-icon> */}

                <span className="span">Facebook</span>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                {/* <ion-icon name="logo-youtube"></ion-icon> */}

                <span className="span">Youtube</span>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                {/* <ion-icon name="logo-twitter"></ion-icon> */}

                <span className="span">Twitter</span>
              </a>
            </li>
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
