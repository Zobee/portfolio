import styles from '../../styles/Projects.module.css'
import Project from "./Project"
import { projects } from './projects'
const Projects = () => {
  return (
    <div className={styles.projectSection}>
      <h1 className="title">PROJECTS</h1>
      <div className={styles.projectContainer}>
        {projects.map(project => <Project key={project.id} {...project}/>)}
      </div>
    </div>
  )
}

export default Projects
