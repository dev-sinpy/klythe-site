import styles from './ProjectButton.module.scss';

export interface ProjectButtonPropsInterface {
    buttonText: string,
}

const ProjectButton = (props: ProjectButtonPropsInterface) => {
    return (
        <>
            <button className="filter-btn active" data-filter-btn>
                {props.buttonText}
            </button>
        </>
    );
};

export { ProjectButton };
