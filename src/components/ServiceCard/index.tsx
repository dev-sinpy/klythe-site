import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './ServiceCard.module.scss';

export interface ServiceCardPropsInterface {
    image: string;
    title: string;
    color: string;
}

const ServiceCard = (props: ServiceCardPropsInterface) => {
    const container = useRef<any>(null);

    useEffect(() => {
        container.current.style.setProperty('--color', props.color);
    }, []);

    return (
        <div className={styles['service-card']} ref={container}>
            <div className={styles['card-icon']}>
                <Image src={props.image} width="30" height="30" alt="service icon" color={props.color} />
            </div>
            <h3 className={styles['h3']}>
                <a href="#" className={styles['card-title']}>
                    {props.title}
                </a>
            </h3>
        </div>
    );
};

export { ServiceCard };
