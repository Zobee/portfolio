import styles from '../../styles/Projects.module.css'
import Project from "./Project"
const Projects = () => {
  return (
    <div className={styles.projectSection}>
      <h1 className="title">PROJECTS</h1>
      <div className={styles.projectContainer}>
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}

export default Projects
