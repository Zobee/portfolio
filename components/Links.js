import styles from '../styles/Navbar.module.css'
const Links = ({open, setOpen}) => {

  const handleClick = (e) => {
    e.preventDefault()
    const link = e.target.getAttribute('href')
    const offset = document.querySelector(link).offsetTop
    open && setOpen(false)
    window.scrollTo({
      top: offset - 64
    })
  }

  return (
    <ul className={open ? styles.active : ""}>
      <li> <a onClick={handleClick} href='#home'>Home</a></li>
      <li> <a onClick={handleClick} href='#projects'> Projects</a></li>
      <li> <a onClick={handleClick} href='#articles'> Articles</a></li>
      <li> <a onClick={handleClick} href='#resume'> Resume</a></li>
      <li> <a onClick={handleClick} href='#contact'> Contact</a></li>
    </ul>
  )
}

export default Links
