import styles from './.module.scss';

export interface HeroLinkPropsInterface {
    link: string,
    title: string,
}

const HeroSocialLink = (props: HeroLinkPropsInterface) => {
    return (
        <>
            <a href={props.link} className="social-link">
                {/* <ion-icon name="logo-facebook"></ion-icon> */}
                <span className="span">{props.title}</span>
              </a>
        </>
    );
};

export { HeroSocialLink };