import styles from '../../styles/Projects.module.css'
import {FaGithub} from 'react-icons/fa'
import {VscLiveShare} from 'react-icons/vsc'
const Project = ({title, img, description, githubLink, liveLink}) => {
  return (
    <section className={styles.project}>
      <h1>{title}</h1>
      <img src={img} />
      <p>{description}</p>
      <section>
        <FaGithub />
        <VscLiveShare/>
      </section>
    </section>
  )
}

export default Project
