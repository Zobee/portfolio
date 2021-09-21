import styles from '../../styles/Projects.module.css'
const Project = ({title, img, description, liveLink}) => {
  return (
    <a target="_blank" href={liveLink}>
    <section className={styles.project}>
      <img src={img} alt={title} />
      <p>{description}</p>
    </section>
    </a>
  )
}

export default Project
