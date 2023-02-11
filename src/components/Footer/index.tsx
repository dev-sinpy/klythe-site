import { FooterLinks } from '../FooterLinks';
import styles from './Footer.module.scss';
import { FooterLinkPropsInterface } from '../FooterLinks/index';
import { SocialLinkPropsInterface, FooterSocialLinks } from '../FooterSocialLink';
import { faFacebook, faYoutube, faTwitter, faSkype } from "@fortawesome/free-brands-svg-icons";

const usefulLinks: FooterLinkPropsInterface[] = [
  {
    link: "#",
    title: "Contact Us"
  },
  // {
  //   link: "#",
  //   title: "How it Works"
  // },
  // {
  //   link: "#",
  //   title: "Create"
  // },
  // {
  //   link: "#",
  //   title: "Explore"
  // },
  {
    link: "#",
    title: "Terms & Services"
  },
]

const communityLinks: FooterLinkPropsInterface[] = [
  {
    link: "#",
    title: "Partners"
  },
  {
    link: "#",
    title: "Blog"
  },

]

const socialLinks: SocialLinkPropsInterface[] = [
  {
    link: '#',
    iconName: faYoutube
  },
  {
    link: '#',
    iconName: faTwitter

  },
  {
    link: '#',
    iconName: faFacebook
  },
  {
    link: '#',
    iconName: faSkype
  },
]

const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <div className="container">
        <div className="footer-top section">
          <div className="footer-brand">
            <p className={styles['footer-list-title']}>About Klythe</p>

            <p className={styles['footer-text']}>
            We use the latest technologies and programming languages to build robust, scalable software solutions that are reliable, secure, and easy to use.
            We also offer ongoing support and maintenance to ensure that your software continues to perform at its best.
            </p>

            <ul className={styles['social-list']}>
              {socialLinks.map((item, index) => {
                return <li key={index}>
                  <FooterSocialLinks {...item} />
                </li>
              })}
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className={styles['footer-list-title']}>Useful Links</p>
            </li>
            {usefulLinks.map((item, index) => {
              return <li key={index}>
                <FooterLinks {...item} />
              </li>
            })}
          </ul>

          <ul className="footer-list">
            <li>
              <p className={styles['footer-list-title']}>Community</p>
            </li>

            {communityLinks.map((item, index) => {
              return <li key={index}>
                <FooterLinks {...item} />
              </li>
            })}
          </ul>
        </div>

        <div className={styles['footer-bottom']}>
          <p className={styles['copyright']}>&copy; 2022 Klythe. All Rights Reserved by Klythe</p>

          <ul className={styles['footer-bottom-list']}>
            <li>
              <a href="#" className={styles['footer-bottom-link']}>
                Terms and conditions
              </a>
            </li>

            <li>
              <a href="#" className={styles['footer-bottom-link']}>
                Privacy policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
