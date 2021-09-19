import styles from '../styles/Home.module.css'
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeLeft}>
        <h1>Hey! I'm Zoheb <span>✌️</span></h1>
        <h4>Full Stack Web Developer</h4>
      </div>
      <div className={styles.homeRight}>
        <img src={'profile.png'} />
      </div>
    </div>
  )
}

export default Home
