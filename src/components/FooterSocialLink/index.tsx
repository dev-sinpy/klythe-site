import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FooterSocialLink.module.scss';
export interface SocialLinkPropsInterface {
    link: string,
    iconName: IconDefinition
}

const FooterSocialLinks = (props: SocialLinkPropsInterface) => {
    return (
        <>
            <a href={props.link} className={styles['social-link']}>
                <FontAwesomeIcon icon={props.iconName} />
            </a>
        </>
    );
};

export { FooterSocialLinks };
