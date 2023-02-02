import Image from 'next/image';
import { FeatureCardPropsInterface, FeatureCard } from '../FeatureCard';
import styles from './FeatureSection.module.scss';
import { faRocket, faUserGroup, faHeadphones } from '@fortawesome/free-solid-svg-icons';

const featureCardData: FeatureCardPropsInterface[] = [
  {
    title: 'Access to our experienced and skilled developers',
    text: 'Klythe offers teams of developers with a wide range of skills and experience, which can be beneficial for complex or specialized projects.',
    iconName: faUserGroup,
    color: ''
  },
  {
    title: 'Scalability',
    text: ' Our agency can provide resources as needed, which can be useful for projects that have fluctuating resource requirements or tight deadline',
    iconName: faRocket,
    color: ''
  },
  {
    title: 'Market expertise',
    text: '  By outsourcing development tasks to klythe, your company can focus on their core business functions and leave the technical work to our experienced professionals.',
    iconName: faHeadphones,
    color: ''
  },
]

const FeatureSection = () => {
  return (
    <section className="section feature" id="feature" aria-label="feature">
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
            We deliver cutting-edge solutions for modern <span className="has-before">businesses</span>
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
