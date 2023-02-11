import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core'
import styles from './FooterSocialLink.module.scss';
export interface SocialLinkPropsInterface {
    link: string,
    iconName: IconProp | IconDefinition
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
