export interface SocialLinkPropsInterface {
    link: string,
}

const FooterSocialLinks = (props: SocialLinkPropsInterface) => {
    return (
        <>
            <a href={props.link} className="social-link">
            </a>
        </>
    );
};

export { FooterSocialLinks };