import styles from './FeatureCard.module.scss';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface FeatureCardPropsInterface {
    title: string;
    text: string;
}

const FeatureCard = (props: FeatureCardPropsInterface) => {
    return (
        <div className={styles['feature-card']}>
            <div className={styles['card-icon-rocket']}>
                <FontAwesomeIcon icon={faRocket} />
                {/* <ion-icon name="rocket-sharp" aria-hidden="true"></ion-icon> */}
            </div>
            <div>
                <h3 className="h3 card-title">{props.title}</h3>
                <p className={styles['card-text']}>
                    {props.text}
                </p>
            </div>
        </div>
    );
};

export { FeatureCard };
