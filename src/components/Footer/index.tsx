import { FooterLinks } from '../FooterLinks';
import styles from './Footer.module.scss';
import { FooterLinkPropsInterface } from '../FooterLinks/index';
import { SocialLinkPropsInterface, FooterSocialLinks } from '../FooterSocialLink';
import { faFacebook, faYoutube, faTwitter, faSkype } from "@fortawesome/free-brands-svg-icons";
import Link from 'next/link';
import Image from 'next/image';

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
  // {
  //   link: "#",
  //   title: "Terms & Services"
  // },
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

            {/* <ul className={styles['social-list']}>
              {socialLinks.map((item, index) => {
                return <li key={index}>
                  <FooterSocialLinks {...item} />
                </li>
              })}
            </ul> */}
          </div>

          <ul className="footer-list">
            {/* <li>
              <p className={styles['footer-list-title']}>Useful Links</p>
            </li> */}
            {usefulLinks.map((item, index) => {
              return <li key={index}>
                <FooterLinks {...item} />
              </li>
            })}
            <div>
              <ul style={{ marginTop: '10px' }}>
                <li style={{ display: "flex", gap: '5%' }}>
                  <Image src='/images/phone.png' alt='Image not found' width={50} height={50} />
                  <p style={{ marginTop: '10px' }}>+91 8146591989</p>
                  <p style={{ marginTop: '10px' }}>+91 7837591989</p>
                </li>
                <li style={{ display: "flex", gap: '5%', marginTop: '10px' }}>
                  <Image src='/images/email.png' alt='Image not found' width={50} height={50} />
                  <p style={{ marginTop: '10px' }}>admin@klythe.com</p>
                </li>
                <li style={{ display: "flex", maxHeight: "50px", gap: '5%', marginTop: '10px' }}>
                  <Image src='/images/location.png' alt='Image not found' width={100} height={50} />
                  <p style={{ marginTop: '10px' }}>
                    First Floor, SCO 522, TDI TAZ PLAZA, sector 118, Airport
                    Road, Mohali, SAS Nagar, Punjab, 160055
                  </p>
                </li>
              </ul>
            </div>
          </ul>

          {/* <ul className="footer-list">
            <li>
              <p className={styles['footer-list-title']}>Community</p>
            </li>

            {communityLinks.map((item, index) => {
              return <li key={index}>
                <FooterLinks {...item} />
              </li>
            })}
          </ul> */}
        </div>

        <div className={styles['footer-bottom']}>
          <p className={styles['copyright']}>&copy; 2023 Klythe Pvt. Ltd.  All Rights Reserved</p>

          <ul className={styles['footer-bottom-list']}>
            <li>
              <Link href="/terms-and-conditions" className={styles['footer-bottom-link']}>
                Terms and conditions
              </Link>
            </li>

            <li>
              <Link href="/privacy-policy" className={styles['footer-bottom-link']}>
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
