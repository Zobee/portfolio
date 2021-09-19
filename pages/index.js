import styles from '../styles/Main.module.css'
import Home from '../components/Home'
const index = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.home} id='home'>
        <Home/>
      </div>
      <div className={styles.projects} id='projects'>
        PROJECTS
      </div>
      <div className={styles.articles} id='articles'>
        ARTICLES
      </div>
      <div className={styles.resume} id='resume'>
        RESUME
      </div>
      <div className={styles.contactKO} id='contact'>
        CONTACT
      </div>
    </div>
  )
}

export default index
