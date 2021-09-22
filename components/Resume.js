import styles from '../styles/Resume.module.css'
const resumeLink = "https://www.canva.com/design/DAEhZXrPbhU/KH3AmCNkAmGYfygQZpE5WA/view?utm_content=DAEhZXrPbhU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
const Resume = () => {
  return (
    <div className='section'>
      <h1 className="title">RESUME</h1>
      <div className='section-container'>
        <a target="_blank" href={resumeLink}><img src={"resume.svg"} className={styles.resume} /></a>
      </div>
    </div>
  )
}

export default Resume
