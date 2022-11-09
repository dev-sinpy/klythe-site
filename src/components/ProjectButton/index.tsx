import styles from './ProjectButton.module.scss';

export interface ProjectButtonPropsInterface {
    buttonText: string,
    className: string,
}

const ProjectButton = (props: ProjectButtonPropsInterface) => {
    return (
        <>
            <button className={props.className} data-filter-btn>
                {props.buttonText}
            </button>
        </>
    );
};

export { ProjectButton };
