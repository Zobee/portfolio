import styles from '../styles/Home.module.css'
import Image from 'next/image'
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeLeft}>
        <h1>Hey! I&apos;m Zoheb <span role="img" aria-label="v-hand">✌</span></h1>
        <h4>Full Stack Web Developer</h4>
      </div>
      <div className={styles.homeRight}>
        <Image src={'/profile.png'} layout='fill' />
      </div>
    </div>
  )
}

export default Home
