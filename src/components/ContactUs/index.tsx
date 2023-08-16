import React from "react";
import styles from './Contactus.module.scss';
import Link from "next/link";

const ContactUs = () => {
  const [formData, setFormData] = React.useState({})
  const [loading, setLoading] = React.useState(false)
  const [sent, setSent] = React.useState(false)

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // setLoading(true)
    setSent(true)
  }

  return (
    <div>
      <div>
        {sent ? (
          <div className={styles['thankYou']}>
            <p className={styles['success']}>
              Thank you for contacting us!
              We appreciate your interest and will get back to you as soon as possible.
              Your inquiry is important to us, and we&apos;re excited to assist you.
            </p>
            <Link href='/'>
              <button className={styles['back_to_home']}>
                {/* {loading ? "Sending..." : "Submit message"} */}
                Back to Home
              </button>
            </Link>
          </div>
        ) : (
          <div className={styles['form_div']} style={{ maxWidth: '50%,', margin: 'auto' }}>
            <p className={styles['title']}>
              Contact Us
            </p>
            <p className={styles['fill_form']}>Please fill this form</p>
            <form onSubmit={handleSubmit} className={styles['contactus-form']}>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                className={styles['name-field']}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email_address"
                placeholder="Enter your mail"
                required
                className={styles['email-field']}
                onChange={handleChange}
              />
              <input
                // rows={5}
                // cols={52}
                name="message"
                placeholder="Enter your message"
                required
                className={styles['message-field']}
                onChange={handleChange}
              />
            </form>
            <button type="submit" className={styles["button"]} onClick={handleSubmit}>
              <p className="span">Send now</p>
            </button>
            <Link href='/'>
              <button className={styles['back_to_home']}>
                Back to Home
              </button>
            </Link>
          </div>
        )
        }
      </div>
    </div>
  )
}
export default ContactUs;