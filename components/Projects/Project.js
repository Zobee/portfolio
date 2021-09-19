import styles from '../../styles/Projects.module.css'
const Project = () => {
  return (
    <div className={styles.project}>
      <h1>Project Name</h1>
      <img src="#" />
      <p>Project Description goes here. Yes siree bob.</p>
      <section>
        <button>Github Link</button>
        <button>Live Link</button>
      </section>
    </div>
  )
}

export default Project
