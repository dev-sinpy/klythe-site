import Image from 'next/image';
import { ServiceCard, ServiceCardPropsInterface } from '../ServiceCard';

const serviceCardData: ServiceCardPropsInterface[] = [
  {
    image: "/images/service-icon-1.png",
    title: "Product Management",
    color: "174, 77%, 50%"
  },

  {
    image: "/images/service-icon-2.png",
    title: "Web & Mobile Development",
    color: "267, 76%, 57%"
  },

  {
    image: "/images/service-icon-3.png",
    title: "Fast Customer Support",
    color: "17, 100%, 68%"
  },

  {
    image: "/images/service-icon-4.png",
    title: "Human Resources",
    color: "343, 98%, 60%"
  },

  {
    image: "/images/service-icon-5.png",
    title: "Design and Creatives",
    color: "210, 100%, 53%"
  },

  {
    image: "/images/service-icon-6.png",
    title: "Marketing and Communication",
    color: "157, 89%, 44%"
  },
  {
    image: "/images/service-icon-7.png",
    title: "Business Development",
    color: "52, 98%, 50%"
  }
];

const ServiceSection = () => {
  return (
    <section className="section service" id="service" aria-label="service">
      <div className="container">
        <p className="section-subtitle has-before text-center">Our Services</p>

        <h2 className="h2 section-title text-center">
          Managing you business with our <span className="has-before">best service</span>
        </h2>

        <ul className="grid-list">
          {serviceCardData.map((item, index) => {
            return <li key={index}>
              <ServiceCard {...item} />
            </li>
          })}

          <li>
            <a href="#" className="link-card">
              <span className="span">04 More Service</span>
              {/* <ion-icon name="arrow-forward" aria-hidden="true"></ion-icon> */}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { ServiceSection };
