import styles from './FeatureCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface FeatureCardPropsInterface {
    title: string,
    text: string,
    iconName: any,
    color: string
}

const FeatureCard = (props: FeatureCardPropsInterface) => {
    return (
        <div className={styles['feature-card']}>
            <div className={styles['card-icon']}>
                <FontAwesomeIcon icon={props.iconName} color={props.color}/>
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
