import Image from 'next/image';
import styles from './InstaPost.module.scss';

export interface InstaPostPropsInterface {
    image: string;
}

const InstaPost = (props: InstaPostPropsInterface) => {
    return (
        <div className={styles['insta-card']}>
        <figure className={styles['post-banner']}>
          <Image
            src={props.image}
            width="77"
            height="63"
            loading="lazy"
            alt="instagram post"
            className={styles['img-cover']}
          />
        </figure>

        <a href="#" className={styles['card-content']}>
          {/* <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon> */}
        </a>
      </div>
    );
};

export { InstaPost };