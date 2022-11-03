import styles from './.module.scss';

export interface SocialLinkPropsInterface {
    link: string,
    // logo: string,
}


const FooterSocialLinks = (props: SocialLinkPropsInterface) => {
    return (
        <>
            <a href={props.link} className="social-link">
                {/* <ion-icon name="logo-youtube"></ion-icon> */}
                {/* {props.logo} */}
            </a>
        </>
    );
};

export { FooterSocialLinks };