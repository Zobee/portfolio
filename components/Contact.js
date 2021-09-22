import styles from '../styles/Contact.module.css'
import {FaLinkedin, FaTwitter, FaMedium} from 'react-icons/fa'
const Contact = () => {
  return (
    <div className='section'>
      <h1 className="title">CONTACT</h1>
      <div className='section-container'>
        <section className={styles.contact}>
          <p>Get In Touch</p>
          <a href="mailto:zohebboga@gmail.com?subject=Let's Work Together!">
            <h1>zohebboga@gmail.com</h1>
          </a>
          <section className={styles.socials}>
            <p>Reach Out</p>
            <section className={styles.socialBtnContainer}>
              <a 
                target='_blank' 
                href="https://ca.linkedin.com/in/zohebboga"
              >
                <FaLinkedin size='2rem' className={styles.linkedIn} />
              </a>
              <a
                target='_blank'  
                href="https://twitter.com/zohboga"
              >
                <FaTwitter size='2rem' className={styles.twitter} />
              </a>
              <a 
                target='_blank' 
                href="https://medium.com/@zohebboga"
              >
                <FaMedium size='2rem' className={styles.medium} />
              </a>
            </section>
          </section>
        </section>
      </div>
    </div>
  )
}

export default Contact
