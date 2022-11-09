import Image from 'next/image';
import styles from './ProjectCard.module.scss';

export interface ProjectCardPropsInterface {
    image: string;
    title: string;
    tag: string;
    width: string;
    height: string;
    alt: string;
}

const ProjectCard = (props: ProjectCardPropsInterface) => {
    return (
        <div className={styles['project-card']}>
            <figure className={styles['card-banner img-holder']}>
                <Image
                    src={props.image}
                    width={props.width}
                    height={props.height}
                    loading="lazy"
                    alt={props.alt}
                    className={styles['img-cover']}
                />
            </figure>

            <div className={styles['card-content']}>
                <h3 className="h3">
                    <a href="#" className="card-title">
                        {props.title}
                    </a>
                </h3>

                <a href="#" className={styles['card-tag']}>
                    {props.tag}
                </a>
            </div>
        </div>
    );
};

export { ProjectCard };
