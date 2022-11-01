import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top section">
          <div className="footer-brand">
            <p className="footer-list-title">About Klythe</p>

            <p className="footer-text">
              A new way to make the payments easy, reliable and 100% secure. claritatem itamconse quat. Exerci
              tationulla
            </p>

            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  {/* <ion-icon name="logo-youtube"></ion-icon> */}
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  {/* <ion-icon name="logo-twitter"></ion-icon> */}
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  {/* <ion-icon name="logo-facebook"></ion-icon> */}
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  {/* <ion-icon name="logo-skype"></ion-icon> */}
                </a>
              </li>
            </ul>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Usefull Links</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                Contact us
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                How it Works
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Create
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Explore
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Terms & Services
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Community</p>
            </li>

            <li>
              <a href="#" className="footer-link">
                Help Center
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Partners
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Suggestions
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Blog
              </a>
            </li>

            <li>
              <a href="#" className="footer-link">
                Newsletters
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Instagram post</p>
            </li>

            <li>
              <ul className="insta-post">
                <li>
                  <div className="insta-card">
                    <figure className="post-banner">
                      <Image
                        src="/images/insta-post-1.jpg"
                        width="77"
                        height="63"
                        loading="lazy"
                        alt="instagram post"
                        className="img-cover"
                      />
                    </figure>

                    <a href="#" className="card-content">
                      {/* <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon> */}
                    </a>
                  </div>
                </li>

                <li>
                  <div className="insta-card">
                    <figure className="post-banner">
                      <Image
                        src="/images/insta-post-2.jpg"
                        width="77"
                        height="63"
                        loading="lazy"
                        alt="instagram post"
                        className="img-cover"
                      />
                    </figure>

                    <a href="#" className="card-content">
                      {/* <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon> */}
                    </a>
                  </div>
                </li>

                <li>
                  <div className="insta-card">
                    <figure className="post-banner">
                      <Image
                        src="/images/insta-post-3.jpg"
                        width="77"
                        height="63"
                        loading="lazy"
                        alt="instagram post"
                        className="img-cover"
                      />
                    </figure>

                    <a href="#" className="card-content">
                      {/* <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon> */}
                    </a>
                  </div>
                </li>

                <li>
                  <div className="insta-card">
                    <figure className="post-banner">
                      <Image
                        src="/images/insta-post-4.jpg"
                        width="77"
                        height="63"
                        loading="lazy"
                        alt="instagram post"
                        className="img-cover"
                      />
                    </figure>

                    <a href="#" className="card-content">
                      {/* <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon> */}
                    </a>
                  </div>
                </li>

                <li>
                  <div className="insta-card">
                    <figure className="post-banner">
                      <Image
                        src="/images/insta-post-5.jpg"
                        width="77"
                        height="63"
                        loading="lazy"
                        alt="instagram post"
                        className="img-cover"
                      />
                    </figure>

                    <a href="#" className="card-content">
                      {/* <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon> */}
                    </a>
                  </div>
                </li>

                <li>
                  <div className="insta-card">
                    <figure className="post-banner">
                      <Image
                        src="/images/insta-post-6.jpg"
                        width="77"
                        height="63"
                        loading="lazy"
                        alt="instagram post"
                        className="img-cover"
                      />
                    </figure>

                    <a href="#" className="card-content">
                      {/* <ion-icon name="logo-instagram" aria-hidden="true"></ion-icon> */}
                    </a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; 2022 Klythe. All Rights Reserved by Klythe</p>

          <ul className="footer-bottom-list">
            <li>
              <a href="#" className="footer-bottom-link">
                Terms and conditions
              </a>
            </li>

            <li>
              <a href="#" className="footer-bottom-link">
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
