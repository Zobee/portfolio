import styles from '../../styles/Projects.module.css'
import Project from "./Project"
import { projects } from './projects'
//TODO: Move overlapping styles for articles/projects into a shared stylesheet
const Projects = () => {
  return (
    <div className='section'>
      <h1 className='title'>PROJECTS</h1>
      <div className="section-container">
        {projects.map(project => <Project key={project.id} {...project}/>)}
      </div>
    </div>
  )
}

export default Projects
