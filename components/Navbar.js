import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault()
    const link = e.target.getAttribute('href')
    const offset = document.querySelector(link).offsetTop
    
    window.scrollTo({
      top: offset - 64
    })
  }
  return (
    <div className={styles.navContainer}>
      <h1>Nav Logo</h1>
      <ul className={styles.navLinks}>
        <li> <a onClick={handleClick} href='#home'>Home</a></li>
        <li> <a onClick={handleClick} href='#projects'> Projects</a></li>
        <li> <a onClick={handleClick} href='#articles'> Articles</a></li>
        <li> <a onClick={handleClick} href='#resume'> Resume</a></li>
        <li> <a onClick={handleClick} href='#contact'> Contact</a></li>
      </ul>
      <div>
        Light
      </div>
    </div>
  )
}

export default Navbar
