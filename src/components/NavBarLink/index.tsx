import styles from './.module.scss';

export interface NavBarLinkPropsInterface {
    link: string,
    title: string
}

const NavBarLink = (props: NavBarLinkPropsInterface) => {
    return (
        <>
            <a href={props.link} className="navbar-link" data-nav-link>
                {props.title}
            </a>
        </>
    );
};

export { NavBarLink };