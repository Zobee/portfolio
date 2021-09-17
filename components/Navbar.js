import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <h1>Nav Logo</h1>
      <ul className={styles.navLinks}>
        <li> <a href='#home'>Home</a></li>
        <li> <a href='#projects'> Projects</a></li>
        <li> <a href='#articles'> Articles</a></li>
        <li> <a href='#resume'> Resume</a></li>
        <li> <a href='#contact'> Contact</a></li>
      </ul>
      <div>
        Light
      </div>
    </div>
  )
}

export default Navbar
