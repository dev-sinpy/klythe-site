import styles from './.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface HeroLinkPropsInterface {
    link: string,
    title: string,
    iconName: any,
    color: string
}

const HeroSocialLink = (props: HeroLinkPropsInterface) => {
    return (
        <>
            <a href={props.link} className="social-link">
                <FontAwesomeIcon icon={props.iconName} color={props.color} />
                <span className="span">{props.title}</span>
            </a>
        </>
    );
};

export { HeroSocialLink };
