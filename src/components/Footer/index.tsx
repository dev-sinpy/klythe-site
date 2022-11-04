import Image from 'next/image';
import { FooterLinks } from '../FooterLinks';
import { InstaPost, InstaPostPropsInterface } from '../InstaPost';
import { FooterLinkPropsInterface } from '../FooterLinks/index';
import { SocialLinkPropsInterface, FooterSocialLinks } from '../FooterSocialLink';
import styles from './Footer.module.scss';

const instaPostData: InstaPostPropsInterface[] = [
  {
    image: "/images/insta-post-1.jpg"
  },
  {
    image: "/images/insta-post-2.jpg"
  },
  {
    image: "/images/insta-post-3.jpg"
  },
  {
    image: "/images/insta-post-4.jpg"
  },
  {
    image: "/images/insta-post-5.jpg"
  },
  {
    image: "/images/insta-post-6.jpg"
  }
]

const usefulLinks: FooterLinkPropsInterface[] = [
  {
    link: "#",
    title: "Contact Us"
  },
  {
    link: "#",
    title: "How it Works"
  },
  {
    link: "#",
    title: "Create"
  },
  {
    link: "#",
    title: "Explore"
  },
  {
    link: "#",
    title: "Terms & Services"
  },

]

const communityLinks: FooterLinkPropsInterface[] = [
  {
    link: "#",
    title: "Help Center"
  },
  {
    link: "#",
    title: "Partners"
  },
  {
    link: "#",
    title: "Suggestions"
  },
  {
    link: "#",
    title: "Blog"
  },
  {
    link: "#",
    title: "Newsletters"
  },

]

const socialLinks: SocialLinkPropsInterface[] = [
  {
    link: '#',
    // logo: ''
  },
  {
    link: '#',
    // logo: ''
  },
  {
    link: '#',
    // logo: ''
  },
  {
    link: '#',
    // logo: ''
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
              A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci
              tationulla
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

          <ul className="footer-list">
            <li>
              <p className={styles['footer-list-title']}>Instagram post</p>
            </li>

            <li>
              <ul className={styles['insta-post']}>
                {instaPostData.map((item, index) => {
                  return <li key={index}>
                    <InstaPost {...item} />
                  </li>
                })}
              </ul>
            </li>
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
