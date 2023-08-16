import Image from 'next/image';
import styles from './NewsLetter.module.scss';
import React from 'react';

const Newsletter: React.FC = () => {
  const [subscribe, setSubscribe] = React.useState(false);
  const [showEmailInput, setShowEmailInput] = React.useState(true);

  const sendSubscription = () => {
    setSubscribe(true);
    setShowEmailInput(false);
  };

  const anotherSubscription = () => {
    setSubscribe(false);
    setShowEmailInput(true);
  };

  return (
    <section
      className="section newsletter has-bg-image"
      aria-label="newsletter"
      style={{ backgroundImage: "url('/images/newsletter-bg.jpg')" }}
    >
      <div className="container">
        <figure className={styles['newsletter-banner']}>
          <Image
            src="/images/newsletter-1.png"
            width="500"
            height="400"
            loading="lazy"
            alt="newsletter banner"
            className="w-100"
          />
        </figure>

        <div className="newsletter-content">
          <p className="section-subtitle has-before">Get every update</p>
          <h2 className="h2 section-title">Subscribe newsletter get latest updates and deals</h2>

          {subscribe ? (
            <>
              <h4 className='h4'>
                Your subscription to Klythe's newsletter is confirmed.
                Get ready to explore a world of informative content, exclusive offers,
                and more. We appreciate your interest and can't wait to share exciting updates with you!
              </h4>
              <button
                type="button"
                className="btn btn-secondary has-before has-after"
                style={{ marginTop: '10px' }}
                onClick={anotherSubscription}
              >
                Another Subscription
              </button>
            </>
          ) : (
            showEmailInput && (
              <form action="" className='newsletter-form'>
                <input type="email" name="email_address" placeholder="Enter your mail" required className='email-field' />
                <button
                  type="submit"
                  className="btn btn-secondary has-before has-after"
                  onClick={sendSubscription}
                >
                  <span className="span">Subscribe</span>
                </button>
              </form>
            )
          )}

        </div>
      </div>
    </section>
  );
};

export { Newsletter };
