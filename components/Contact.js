import styles from '../styles/Contact.module.css'
import {FaLinkedin, FaTwitter, FaMedium} from 'react-icons/fa'
const Contact = () => {
  return (
    <div className='section'>
      <h1 className="title">CONTACT</h1>
      <div className='section-container'>
        <section className={styles.contact}>
          <p>Get In Touch</p>
          <a href="#"><h1>zohebboga@gmail.com</h1></a>
          <section className={styles.socials}>
            <p>Reach Out</p>
            <section className={styles.socialBtnContainer}>
              <FaLinkedin size='2rem' className={styles.linkedIn} />
              <FaTwitter size='2rem' className={styles.twitter} />
              <FaMedium size='2rem' className={styles.medium} />
            </section>
          </section>
        </section>
      </div>
    </div>
  )
}

export default Contact
