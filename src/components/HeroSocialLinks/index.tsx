import styles from './.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
  
export interface HeroLinkPropsInterface {
    link: string,
    title: string,
    iconName: IconProp 
}

const HeroSocialLink = (props: HeroLinkPropsInterface) => {
    return (
        <>
            <a href={props.link} className="social-link">
                <FontAwesomeIcon icon={props.iconName} />
                <span className="span">{props.title}</span>
            </a>
        </>
    );
};

export { HeroSocialLink };