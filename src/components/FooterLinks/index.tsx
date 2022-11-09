import styles from './FooterLinks.module.scss';
export interface FooterLinkPropsInterface {
    link: string,
    title: string
}


const FooterLinks = (props: FooterLinkPropsInterface) => {
    return (
        <>
            <a href={props.link} className={styles['footer-link']}>
                {props.title}
            </a>
        </>
    );
};

export { FooterLinks };