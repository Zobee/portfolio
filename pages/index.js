import styles from '../styles/Main.module.css'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Articles from '../components/Articles'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
const index = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.home} id='home'>
        <Home/>
      </div>
      <div className={styles.projects} id='projects'>
        <Projects />
      </div>
      <div className={styles.articles} id='articles'>
        <Articles />
      </div>
      <div className={styles.resume} id='resume'>
        <Resume />
      </div>
      <div className={styles.contactKO} id='contact'>
        <Contact />
      </div>
    </div>
  )
}

export default index
