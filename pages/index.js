import styles from '../styles/Main.module.css'
const index = () => {
  return (
    <div className={styles.mainContainer}>
      <div id='home'>
        HOME
      </div>
      <div id='projects'>
        PROJECTS
      </div>
      <div id='articles'>
        ARTICLES
      </div>
      <div id='resume'>
        RESUME
      </div>
      <div id='contact'>
        CONTACT
      </div>
    </div>
  )
}

export default index
