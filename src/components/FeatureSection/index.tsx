import Image from 'next/image';
import { FeatureCardPropsInterface, FeatureCard } from '../FeatureCard';
import styles from './FeatureSection.module.scss';

const featureCardData: FeatureCardPropsInterface[] = [
  {
    title: 'Fast working process',
    text: 'At Pixology we specialize in designing, building, shipping and scaling beautiful.'
  },
  {
    title: 'Didicated team',
    text: ' At Pixology we specialize in designing, building, shipping and scaling beautiful.'
  },
  {
    title: '24/7 hours support',
    text: ' At Pixology we specialize in designing, building, shipping and scaling beautiful.'
  },
]

const FeatureSection = () => {
  return (
    <section className={styles['section feature']} id="feature" aria-label="feature">
      <div className="container">
        <figure className={styles['feature-banner']}>
          <Image
            src="/images/feature-banner.png"
            width="582"
            height="585"
            loading="lazy"
            alt="feature banner"
            className="w-100"
          />
        </figure>

        <div className="feature-content">
          <p className="section-subtitle has-before">Why Choose us</p>

          <h2 className="h2 section-title">
            Specialist in aviding clients of financial <span className="has-before">challenges</span>
          </h2>

          <ul className={styles['feature-list']}>
            {featureCardData.map((item, index) => {
              return <li key={index}>
                <FeatureCard {...item} />
              </li>
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { FeatureSection };
