import styles from '../styles/Main.module.css'
import Home from '../components/Home'
import Projects from '../components/Projects'
import Articles from '../components/Articles'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
const index = () => {
  return (
    <div className={styles.mainContainer}>
      <div id='home'>
        <Home/>
      </div>
      <div id='projects'>
        <Projects />
      </div>
      <div id='articles'>
        <Articles />
      </div>
      <div id='resume'>
        <Resume />
      </div>
      <div id='contact'>
        <Contact />
      </div>
    </div>
  )
}

export default index
